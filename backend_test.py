import requests
import sys
from datetime import datetime

class LawOfficeAPITester:
    def __init__(self, base_url="https://site-recreation-27.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            print(f"   Status Code: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Expected {expected_status}, got {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                except:
                    print(f"   Response: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.json()}")
                except:
                    print(f"   Response: {response.text[:200]}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "endpoint": endpoint
                })

            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e),
                "endpoint": endpoint
            })
            return False, None

    def test_root_endpoint(self):
        """Test root endpoint"""
        success, response = self.run_test(
            "Root Endpoint",
            "GET",
            "/",
            200
        )
        return success

    def test_health_check(self):
        """Test health check endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "/api/health",
            200
        )
        if success and response:
            try:
                data = response.json()
                if data.get("status") == "healthy" and data.get("database") == "connected":
                    print("   ✓ Database connection verified")
                    return True
                else:
                    print("   ⚠ Health check returned unexpected data")
                    return False
            except:
                return False
        return False

    def test_contact_form_submission(self):
        """Test contact form submission with valid data"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "testuser@example.com",
            "phone": "(720) 555-1234",
            "practiceArea": "Unemployment Appeals",
            "message": "This is a test message for the contact form.",
            "sourcePage": "/"
        }
        
        success, response = self.run_test(
            "Contact Form Submission (Valid Data)",
            "POST",
            "/api/contact/submit",
            200,
            data=test_data
        )
        
        if success and response:
            try:
                data = response.json()
                if data.get("success") and data.get("submissionId"):
                    print(f"   ✓ Form submitted successfully with ID: {data.get('submissionId')}")
                    return True, data.get('submissionId')
                else:
                    print("   ⚠ Form submission response missing expected fields")
                    return False, None
            except:
                return False, None
        return False, None

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        # Test missing required fields
        invalid_data = {
            "name": "",
            "email": "invalid-email",
            "phone": "123",
            "message": ""
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "/api/contact/submit",
            422,  # Expecting validation error
            data=invalid_data
        )
        return success

    def test_get_submissions(self, submission_id=None):
        """Test getting submissions (with test token)"""
        success, response = self.run_test(
            "Get Submissions (With Test Token)",
            "GET",
            "/api/contact/submissions?test_token=test_only_access&limit=5",
            200
        )
        
        if success and response:
            try:
                data = response.json()
                if isinstance(data, list):
                    print(f"   ✓ Retrieved {len(data)} submissions")
                    if submission_id and len(data) > 0:
                        # Check if our test submission is in the list
                        found = any(sub.get('id') == submission_id for sub in data)
                        if found:
                            print(f"   ✓ Test submission {submission_id} found in database")
                    return True
                else:
                    print("   ⚠ Expected list of submissions")
                    return False
            except:
                return False
        return False

    def test_get_submissions_no_token(self):
        """Test getting submissions without token (should fail)"""
        success, response = self.run_test(
            "Get Submissions (No Token - Should Fail)",
            "GET",
            "/api/contact/submissions",
            403  # Expecting forbidden
        )
        return success

    def print_summary(self):
        """Print test summary"""
        print("\n" + "="*60)
        print("📊 TEST SUMMARY")
        print("="*60)
        print(f"Total Tests Run: {self.tests_run}")
        print(f"Tests Passed: {self.tests_passed}")
        print(f"Tests Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for i, test in enumerate(self.failed_tests, 1):
                print(f"\n{i}. {test.get('test')}")
                print(f"   Endpoint: {test.get('endpoint')}")
                if 'error' in test:
                    print(f"   Error: {test.get('error')}")
                else:
                    print(f"   Expected: {test.get('expected')}, Got: {test.get('actual')}")
        
        print("\n" + "="*60)
        return self.tests_run == self.tests_passed

def main():
    print("="*60)
    print("🏛️  LAW OFFICE API TESTING")
    print("="*60)
    print(f"Testing backend at: https://site-recreation-27.preview.emergentagent.com")
    print(f"Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    tester = LawOfficeAPITester()
    
    # Run all tests
    print("\n" + "="*60)
    print("RUNNING BACKEND API TESTS")
    print("="*60)
    
    # Test 1: Root endpoint
    tester.test_root_endpoint()
    
    # Test 2: Health check
    tester.test_health_check()
    
    # Test 3: Contact form submission with valid data
    success, submission_id = tester.test_contact_form_submission()
    
    # Test 4: Contact form validation
    tester.test_contact_form_validation()
    
    # Test 5: Get submissions with token
    tester.test_get_submissions(submission_id)
    
    # Test 6: Get submissions without token (should fail)
    tester.test_get_submissions_no_token()
    
    # Print summary
    all_passed = tester.print_summary()
    
    return 0 if all_passed else 1

if __name__ == "__main__":
    sys.exit(main())
