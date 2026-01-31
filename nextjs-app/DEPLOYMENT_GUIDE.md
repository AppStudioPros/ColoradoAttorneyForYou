# Deployment Guide for Vercel

## Quick Deployment Steps

### 1. Prepare Your Code

Make sure all files are ready in the `/app/nextjs-app` directory.

### 2. Push to Git Repository

```bash
cd /app/nextjs-app
git init
git add .
git commit -m "Initial commit: Next.js law office website"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 3. Deploy to Vercel

**Option A: Via Vercel Dashboard**

1. Go to https://vercel.com
2. Click "New Project"
3. Import your Git repository
4. Vercel auto-detects Next.js - click "Deploy"

**Option B: Via Vercel CLI**

```bash
npm i -g vercel
cd /app/nextjs-app
vercel
```

### 4. Configure Environment Variables in Vercel

In your Vercel project settings, add these environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=w6auzb5w
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skQFZLEhCI1pZ9z59s7IVRhoC4msqLAuOtaBlyoIq3lhkDyzBDN8lAAiHJJiRzLu7rIVNsGlvaLicW6sVB62OzL3Hll5QXuYSN9yifPhZdeK3KKLHk4jZLpGPlZbHdtdKljGNojBqh21TDlDS5ncctihsWHGVOsluSOh1MjutaNUermKlrfF
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 5. Enable Resend Email (When Ready)

1. Get Resend API key from https://resend.com
2. Add to Vercel environment variables
3. Verify your domain in Resend
4. Update `/app/api/contact/route.ts` - uncomment the Resend code

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All 3 pages accessible
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Contact forms submit (check logs)
- [ ] Icons display properly
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)

## Custom Domain Setup

1. In Vercel project settings, go to "Domains"
2. Add your custom domain: `coloradoattorneyforyou.com`
3. Configure DNS records as shown by Vercel
4. Wait for DNS propagation (can take up to 48 hours)

## Monitoring

- View deployment logs in Vercel dashboard
- Check function logs for contact form submissions
- Monitor performance with Vercel Analytics

## Troubleshooting

**Build fails:**
- Check package.json dependencies
- Review build logs in Vercel
- Ensure all environment variables are set

**Contact form not working:**
- Check API route logs
- Verify Resend API key
- Ensure domain is verified in Resend

**Images not loading:**
- Verify files in `/public` directory
- Check Next.js image optimization settings

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Resend Docs: https://resend.com/docs
