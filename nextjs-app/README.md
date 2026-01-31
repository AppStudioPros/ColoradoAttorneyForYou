# Law Office of Warren J. Domangue - Next.js Website

This is the Next.js 15 + Sanity CMS + Resend implementation of the Law Office website.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Sanity CMS** - Headless CMS for content management
- **Resend** - Email service for contact forms
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Sanity account (already configured)
- Resend API key (placeholder currently)

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Configure environment variables in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=w6auzb5w
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
RESEND_API_KEY=your_resend_key_here
NEXT_PUBLIC_SITE_URL=https://coloradoattorneyforyou.com
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── unemployment-appeals/  # Practice area page
│   ├── other-areas/      # Practice areas page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── LawIcon.tsx
├── lib/                   # Utility functions
│   ├── sanity.client.ts  # Sanity client
│   └── sanity.config.ts  # Sanity configuration
├── schemas/               # Sanity schemas
│   ├── practiceArea.ts
│   ├── testimonial.ts
│   ├── faq.ts
│   └── pageContent.ts
├── public/                # Static assets
│   ├── icons/            # Lawyer SVG icons
│   └── warren-logo-white.png
└── sanity.config.ts      # Sanity Studio config
```

## Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Import project to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js

3. Configure environment variables in Vercel:
   - Add all variables from `.env.local`
   - Make sure to add `RESEND_API_KEY` when ready

4. Deploy!

## Sanity Studio

To access the Sanity Studio for content management:

```bash
npm run sanity
```

Then visit `http://localhost:3333` (or configured port)

## Content Management

### Practice Areas
Add/edit practice areas with icons, descriptions, and pricing.

### Testimonials
Manage client testimonials with display settings.

### FAQs
Organize frequently asked questions by category.

### Page Content
Edit hero sections and SEO metadata for each page.

## Contact Form with Resend

The contact form currently logs submissions. To enable email:

1. Get your Resend API key from [resend.com](https://resend.com)
2. Add to `.env.local` and Vercel environment variables
3. Uncomment the Resend code in `/app/api/contact/route.ts`
4. Configure your verified domain in Resend

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with meta tags
- ✅ Animated icons on scroll
- ✅ Contact forms with validation
- ✅ Sanity CMS integration
- ✅ Vercel-ready deployment
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Pages

1. **Home** (`/`) - Main landing page
2. **Unemployment Appeals** (`/unemployment-appeals`) - Service details
3. **Other Areas** (`/other-areas`) - Family law & criminal defense

## Migration Notes

This site was migrated from React + FastAPI + MongoDB to Next.js + Sanity + Vercel.

Key changes:
- Server-side rendering with Next.js
- Content management with Sanity CMS
- Serverless deployment on Vercel
- Email integration with Resend

## Support

For questions or issues, contact the development team.
