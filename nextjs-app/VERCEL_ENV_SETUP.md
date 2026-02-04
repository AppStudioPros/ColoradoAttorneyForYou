# Vercel Environment Variables Setup

## Critical: Add Resend API Key to Vercel

Your Resend API key has been added to the local `.env.local` file for testing, but you **MUST** also add it to your Vercel project settings for the contact form to work in production.

---

## Step-by-Step: Add Environment Variable to Vercel

### 1. Go to Your Vercel Project Settings
   - Visit: https://vercel.com/dashboard
   - Select your project: `domangue-law` (or your project name)
   - Click **Settings** tab

### 2. Navigate to Environment Variables
   - In the left sidebar, click **Environment Variables**

### 3. Add the Resend API Key
   - Click **Add New** button
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_YhQxZQCp_2KbVKJ61uTcuVjdcTyyVeUgp`
   - **Environment:** Check all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

### 4. Save and Redeploy
   - Click **Save**
   - Vercel will prompt you to redeploy
   - Click **Redeploy** to apply the new environment variable

---

## All Required Environment Variables

Make sure ALL of these are in your Vercel settings:

### Sanity CMS Configuration
```
NEXT_PUBLIC_SANITY_PROJECT_ID=w6auzb5w
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skQFZLEhCI1pZ9z59s7IVRhoC4msqLAuOtaBlyoIq3lhkDyzBDN8lAAiHJJiRzLu7rIVNsGlvaLicW6sVB62OzL3Hll5QXuYSN9yifPhZdeK3KKLHk4jZLpGPlZbHdtdKljGNojBqh21TDlDS5ncctihsWHGVOsluSOh1MjutaNUermKlrfF
```

### Resend Email API
```
RESEND_API_KEY=re_YhQxZQCp_2KbVKJ61uTcuVjdcTyyVeUgp
```

### Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://coloradoattorneyforyou.com
```

---

## Testing the Contact Form

### After Deployment:

1. **Visit your live site**
2. **Navigate to the Contact Form** (on any page)
3. **Fill out the form:**
   - Name: Test User
   - Email: your-email@example.com
   - Phone: (720) 123-4567
   - Message: Test message from contact form
4. **Submit**
5. **Check your email** (configured in Resend)

### Expected Behavior:
- ✅ Form submits successfully
- ✅ Success message appears
- ✅ Email arrives at your configured address
- ✅ Email contains all form details

---

## Troubleshooting

### If Contact Form Doesn't Work:

1. **Check Vercel Logs:**
   - Go to Vercel Dashboard → Your Project → Functions
   - Find `/api/contact` function
   - Check logs for errors

2. **Verify Environment Variable:**
   - Settings → Environment Variables
   - Confirm `RESEND_API_KEY` is set correctly
   - Make sure it's enabled for Production

3. **Check Resend Dashboard:**
   - Visit: https://resend.com/emails
   - Verify your domain is set up
   - Check email sending limits

4. **Common Issues:**
   - Typo in API key → Re-add carefully
   - Domain not verified in Resend → Verify domain
   - API key doesn't have send permissions → Create new key with correct permissions

---

## Contact Form Configuration

The form sends emails from:
- **From Address:** You need to configure this in your Resend dashboard
- **Default:** `onboarding@resend.dev` (Resend test domain)

### To Use Your Own Domain:
1. Go to Resend Dashboard → Domains
2. Add your domain: `coloradoattorneyforyou.com`
3. Add DNS records they provide
4. Verify domain
5. Update `/app/api/contact/route.ts` to use your domain

---

## Security Note

⚠️ **Never commit `.env.local` to Git!**

The `.env.local` file is already in `.gitignore`. Keep it local for testing only.

Production secrets should ONLY be in:
- ✅ Vercel Environment Variables
- ❌ NOT in your Git repository
- ❌ NOT in public code

---

## Next Steps

1. ✅ API key added to local `.env.local` (for testing)
2. ⏳ **YOU MUST:** Add `RESEND_API_KEY` to Vercel settings
3. ⏳ Push latest code to GitHub
4. ⏳ Verify deployment completes
5. ⏳ Test contact form on live site

---

## Quick Reference: Vercel Environment Variables URL

Once you're in your project dashboard:
```
https://vercel.com/[your-username]/[project-name]/settings/environment-variables
```

Replace `[your-username]` and `[project-name]` with your actual values.
