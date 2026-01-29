from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field, validator
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
from typing import Optional, List
import os
from bson import ObjectId

app = FastAPI(title="Domangue Law API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Configuration
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URL)
db = client.domangue_law
form_submissions_collection = db.form_submissions

# Pydantic Models
class ContactFormSubmit(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=20)
    practiceArea: str = Field(default="General Inquiry")
    message: str = Field(..., min_length=1, max_length=5000)
    sourcePage: str = Field(default="/")

    @validator('phone')
    def validate_phone(cls, v):
        # Basic phone validation - remove non-digits
        digits = ''.join(filter(str.isdigit, v))
        if len(digits) < 7:
            raise ValueError('Phone number must have at least 7 digits')
        return v

    @validator('name', 'message')
    def validate_not_empty(cls, v):
        if not v.strip():
            raise ValueError('Field cannot be empty')
        return v.strip()

class ContactFormResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    practiceArea: str
    message: str
    sourcePage: str
    createdAt: datetime

# Helper Functions
def serialize_doc(doc):
    """Convert MongoDB document to JSON-serializable dict"""
    if doc is None:
        return None
    
    doc_copy = dict(doc)
    
    # Convert ObjectId to string
    if '_id' in doc_copy:
        doc_copy['id'] = str(doc_copy['_id'])
        del doc_copy['_id']
    
    # Convert datetime objects to ISO format strings
    for key, value in doc_copy.items():
        if isinstance(value, datetime):
            doc_copy[key] = value.isoformat()
        elif isinstance(value, ObjectId):
            doc_copy[key] = str(value)
    
    return doc_copy

# API Routes
@app.get("/")
async def root():
    return {"message": "Law Office of Warren J. Domangue API", "version": "1.0.0"}

@app.post("/api/contact/submit", response_model=dict)
async def submit_contact_form(form_data: ContactFormSubmit):
    """
    Submit a contact form.
    Stores in MongoDB and (future) sends email via Resend.
    """
    try:
        # Create submission document
        submission = {
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "practiceArea": form_data.practiceArea,
            "message": form_data.message,
            "sourcePage": form_data.sourcePage,
            "createdAt": datetime.utcnow(),
            "emailSent": False,  # Placeholder for Resend integration
        }
        
        # Insert into MongoDB
        result = await form_submissions_collection.insert_one(submission)
        submission['_id'] = result.inserted_id
        
        # TODO: Future Resend email integration
        # resend_api_key = os.getenv("RESEND_API_KEY")
        # if resend_api_key:
        #     await send_email_via_resend(form_data)
        
        return {
            "success": True,
            "message": "Thank you! Your message has been received. Warren will contact you within 24 hours.",
            "submissionId": str(result.inserted_id)
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit form: {str(e)}")

@app.get("/api/contact/submissions", response_model=List[ContactFormResponse])
async def get_submissions(limit: int = 50, test_token: Optional[str] = None):
    """
    Get recent form submissions.
    For testing purposes only. In production, add proper authentication.
    """
    # Simple test-only protection
    if test_token != "test_only_access":
        raise HTTPException(status_code=403, detail="Access denied")
    
    try:
        cursor = form_submissions_collection.find().sort("createdAt", -1).limit(limit)
        submissions = await cursor.to_list(length=limit)
        return [serialize_doc(sub) for sub in submissions]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch submissions: {str(e)}")

@app.get("/api/health")
async def health_check():
    """
    Health check endpoint to verify MongoDB connection.
    """
    try:
        await db.command('ping')
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Database connection failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
