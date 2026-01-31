# Fix Vercel Deployment Error

## Problem
Vercel can't find the Next.js package.json because it's in a subdirectory.

## Solution 1: Set Root Directory in Vercel (Easiest)

1. Go to your Vercel project settings
2. Click "Deployment Settings" 
3. Find "Root Directory"
4. Set it to: `nextjs-app`
5. Click "Save"
6. Trigger a new deployment (push a commit or click "Redeploy")

## Solution 2: Deploy from the correct directory (Recommended)

Create a NEW repository with ONLY the Next.js app at the root:

```bash
# Create a new directory
mkdir colorado-law-nextjs
cd colorado-law-nextjs

# Copy ONLY the Next.js files (not the old React app)
cp -r /app/nextjs-app/* .
cp -r /app/nextjs-app/.* . 2>/dev/null || true

# Initialize git
git init
git add .
git commit -m "Initial commit: Next.js law office website"

# Add your new GitHub repository
git remote add origin YOUR_NEW_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

Then deploy THIS new repository to Vercel - it will work immediately because package.json is at the root.

## Verify Package.json

Your package.json should contain:

```json
{
  "dependencies": {
    "next": "15.1.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    ...
  }
}
```

## After Deployment

Don't forget to add environment variables in Vercel:
- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_API_VERSION
- SANITY_API_TOKEN
- RESEND_API_KEY (placeholder for now)
- NEXT_PUBLIC_SITE_URL
