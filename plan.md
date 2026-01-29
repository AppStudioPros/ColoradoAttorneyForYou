# Plan: Domangue Law Website Recreation (FARM now, Next.js + Sanity ready)

## 1) Objectives
- Recreate 3 pages with faithful UI/UX: Home, Unemployment Appeals, Other Areas.
- Responsive design, sticky header with mobile nav, smooth scroll animations.
- Working contact form(s): store submissions in MongoDB now; leave Resend email as placeholder for future key.
- SEO-first: meta tags, JSON-LD (Attorney, LegalService, LocalBusiness, Breadcrumbs, FAQ), Colorado GEO focus.
- Production-quality: clean code, accessible, fast, data-testid on interactive elements.
- Future-friendly: code organized so migration to Next.js + Sanity + Vercel is straightforward.

## 2) Architecture & Constraints
- Frontend: React + React Router (SPA), custom CSS based on provided HTML (navy #13263b, teal #1ea6a3).
- Backend: FastAPI (0.0.0.0:8001), REST endpoints under /api/*.
- DB: MongoDB (MONGO_URL via env). Collection: form_submissions.
- Env: respect REACT_APP_BACKEND_URL and /api prefix; do not change .env values.
- Assets: use uploaded logo (warren logo white.png). Ensure non-transparent backgrounds.

## 3) Phases

### Phase 1: Core POC (Isolation)
- Decision: Skipped (no external live integrations; Level 1–2 complexity). Core workflow (contact submission -> DB) will be validated during Phase 2 automated tests.

### Phase 2: Full App Development
A. Backend (FastAPI)
1) Model: FormSubmission { name, email, phone, practiceArea, message, sourcePage, createdAt }.
2) Helpers: serialize_doc (handles ObjectId, datetime).
3) Endpoints (all prefixed with /api):
   - POST /api/contact/submit -> validate, save to Mongo, return success.
   - GET  /api/contact/submissions -> list (for testing only; simple token header or test-only flag).
4) CORS: allow frontend origin; robust error handling; input validation.
5) Future hook: Resend integration placeholder with env RESEND_API_KEY (not used yet).

B. Frontend (React)
1) Routing: /, /unemployment-appeals, /other-areas.
2) Global layout: Sticky Header (mobile hamburger), Footer; Logo integration; tel: links.
3) Pages: Rebuild from provided HTML/CSS with components: Hero, KeyPoints, TwoColumn, PracticeBlocks, About, ProcessSteps, Testimonial, CTA+Form.
4) Animations: IntersectionObserver (animate-on-scroll) + smooth anchor scrolling.
5) Forms: Controlled form, submit to POST /api/contact/submit; success and error states; loading; client-side basic validation.
6) SEO: Per-route <head> via react-helmet-async — title, description, canonical, OG/Twitter.
7) Schema: Inject JSON-LD for Attorney, LegalService (per page), LocalBusiness, BreadcrumbList, FAQ (on Unemployment Appeals).
8) Accessibility: semantic elements, focus states, aria-expanded for menu, 44x44 touch targets.
9) Testing hooks: data-testid attrs on nav toggle, form fields, submit button, success toast.

C. Styling & Assets
- Derive CSS from extracted HTML; ensure responsiveness at 900px/768px/520px breakpoints.
- Place logo asset locally; fall back to provided URL if needed.

D. Data & Migration Readiness
- Separate content constants (copy, phone, address, fee, FAQ) into a config file to ease Sanity migration later.

E. Testing (End-to-End)
- Use testing agent to validate:
  1) Page render and route navigation.
  2) Mobile menu toggle and close on link click.
  3) Contact form happy path (POST saved to DB) + error states.
  4) Presence of JSON-LD schema blocks per page.
  5) Tel link triggers proper URL scheme.
  6) Animations add `in-view` on scroll.

F. Deliverables
- Fully functional SPA with the 3 pages, contact form persistence, SEO tags and schema, animations, responsive UI.
- Clear code comments and structure for future Next.js + Sanity migration.

## 4) User Stories (Phase 2)
1) As a visitor, I can open/close the mobile menu and navigate to Unemployment Appeals.
2) As a visitor, I can submit the contact form and see a clear success confirmation without page reload.
3) As a visitor, I can click a prominent "Call for a Free 10‑Minute Consultation" button and initiate a tel: call.
4) As a visitor, I see sections animate into view as I scroll, giving polished feedback.
5) As a visitor on mobile, the layout remains readable and touch targets are easy to tap.
6) As a search engine, I can parse Attorney/LegalService/LocalBusiness JSON‑LD on relevant pages.
7) As a site owner, I can verify submissions exist in MongoDB via a read endpoint used only for testing.
8) As a visitor, anchor links (e.g., #contact) scroll smoothly to the right section.

## 5) Implementation Steps (Sequenced)
1) Backend: define model, helpers, /api/contact/submit, /api/contact/submissions; enable CORS.
2) Frontend: scaffold routes, layout, header/footer with logo and nav; import global CSS.
3) Build Home with hero, key points, about, process, testimonial, CTA form.
4) Build Unemployment Appeals with detailed sections + FAQ (and FAQ schema).
5) Build Other Areas with family/criminal/appeals info blocks.
6) Hook contact forms to API; add success/error UI and loading states.
7) Add react-helmet-async meta tags and JSON-LD per route; add Breadcrumbs.
8) Add IntersectionObserver + smooth scroll.
9) Run ESLint/Ruff, fix issues; verify logs.
10) Call design agent for UI polish; apply critical improvements without breaking functionality.
11) Run testing agent end-to-end; fix issues until green.

## 6) Next Actions
- Implement Phase 2 backend and frontend in parallel.
- Install minimal deps (frontend: react-router-dom, react-helmet-async; backend: pydantic validation already via FastAPI).
- After build, run testing agent for E2E.
- Gather Resend API key later to activate emails.

## 7) Success Criteria
- All 3 pages match provided HTML/CSS closely on desktop and mobile.
- Contact form persists to MongoDB; UX communicates success/errors clearly.
- All API routes under /api; no hardcoded URLs; env vars respected.
- JSON-LD schema valid and present; meta tags set per page; tel: links work.
- Animations and smooth scroll behave as expected.
- Testing agent reports all user stories passing; no console errors; no red screens.
- Codebase organized to enable later migration to Next.js + Sanity + Vercel.

## 8) Post-Phase 2 (Future Work, not in this build)
- Replace content constants with Sanity; integrate GROQ queries.
- Implement Resend emails (user confirmation + admin notification) via secure server-side key.
- Add additional practice pages, blog, sitemap.xml, robots.txt, analytics.
