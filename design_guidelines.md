{
  "project": {
    "name": "Law Office of Warren J. Domangue",
    "scope": "Recreate existing WordPress visual design in React/Tailwind using shadcn/ui primitives. Pages: Home, Unemployment Appeals, Other Areas.",
    "audience": "Colorado clients seeking unemployment appeals, family law, and criminal defense help.",
    "brand_attributes": ["trustworthy", "experienced", "calm", "professional", "approachable"],
    "success_actions": ["tap call CTA", "submit contact form", "navigate to Unemployment Appeals details"]
  },

  "layout_and_grid": {
    "container": "mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1200px]",
    "cards": {
      "radius_px": 18,
      "surface": "bg-white",
      "shadow": "shadow-[0_10px_30px_rgba(19,38,59,0.08)]",
      "border": "border border-[#e6edf5]"
    },
    "breakpoints": {
      "mobile_primary": "max-[520px]",
      "tablet": "min-[521px] and max-[900px]",
      "desktop": "min-[901px]",
      "tailwind_overrides_note": "Use Tailwind arbitrary variants like max-[520px]:px-4 and min-[900px]:grid-cols-3 to meet 520/768/900 requirements without changing tailwind.config.js"
    },
    "sections_order_home": ["hero", "practice_areas_cards", "about", "testimonials", "contact_cta"],
    "header": {
      "sticky": true,
      "height": 72,
      "spec": "Sticky top-0 with subtle shadow and backdrop blur; right-aligned phone CTA. Mobile collapses to hamburger Sheet."
    },
    "footer": {
      "spec": "Simple three-column at ≥900px, stacked on mobile; include address, phone, quick links, and copyright."
    }
  },

  "palette": {
    "brand_hex": {
      "navy_primary": "#13263b",
      "navy_soft": "#1e3a5c",
      "teal_accent": "#1ea6a3",
      "bg_light": "#f5f8fb",
      "ink": "#0c1726",
      "success": "#198754",
      "warning": "#b58100",
      "danger": "#b00020"
    },
    "tokens_hsl_for_tailwind": {
      "--background": "213 44% 97%",     
      "--foreground": "214 42% 10%",      
      "--card": "0 0% 100%",
      "--card-foreground": "214 42% 10%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "214 42% 10%",
      "--primary": "210 51% 15%",        
      "--primary-foreground": "0 0% 100%",
      "--secondary": "210 50% 24%",       
      "--secondary-foreground": "0 0% 100%",
      "--accent": "178 69% 38%",         
      "--accent-foreground": "0 0% 100%",
      "--muted": "213 36% 93%",
      "--muted-foreground": "213 20% 30%",
      "--border": "213 40% 92%",
      "--ring": "178 69% 38%",
      "--radius": "1.125rem"               
    },
    "gradients": {
      "hero_top_band": "linear-gradient(180deg, rgba(19,38,59,1) 0%, rgba(30,58,92,0.92) 60%, rgba(245,248,251,0) 100%)",
      "compliance": "Per project rules: keep gradient coverage ≤ 20% of viewport height. Use solid colors elsewhere.",
      "usage": ["Hero top band background only", "Large decorative section dividers"],
      "avoid": ["no purple/pink gradients", "no gradients on small UI elements (<100px)", "no gradient text-heavy content"]
    },
    "elevation": {
      "soft": "0 10px 30px rgba(19,38,59,0.08)",
      "hover": "0 14px 36px rgba(19,38,59,0.12)"
    }
  },

  "typography": {
    "family": "System stack as on original: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif",
    "scale": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl tracking-tight",
      "h2": "text-base md:text-lg font-semibold tracking-tight text-[#13263b]",
      "h3": "text-lg md:text-xl font-semibold",
      "body": "text-[0.98rem] md:text-[1.05rem] leading-relaxed text-[#0c1726]",
      "small": "text-sm text-[#1e3a5c]"
    },
    "weights": {"regular": 400, "medium": 500, "semibold": 600},
    "links": "text-[#1ea6a3] underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-[#1ea6a3]"
  },

  "css_tokens_snippet_for_index.css": "@layer base { :root { --background: 213 44% 97%; --foreground: 214 42% 10%; --card: 0 0% 100%; --card-foreground: 214 42% 10%; --popover: 0 0% 100%; --popover-foreground: 214 42% 10%; --primary: 210 51% 15%; --primary-foreground: 0 0% 100%; --secondary: 210 50% 24%; --secondary-foreground: 0 0% 100%; --accent: 178 69% 38%; --accent-foreground: 0 0% 100%; --muted: 213 36% 93%; --muted-foreground: 213 20% 30%; --border: 213 40% 92%; --ring: 178 69% 38%; --radius: 1.125rem; } }",

  "components": {
    "buttons": {
      "base": "inline-flex items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(178,69%,38%)] ring-offset-white",
      "variants": {
        "primary": "rounded-full bg-[#1ea6a3] text-white px-6 py-3 shadow-[0_8px_20px_rgba(30,166,163,0.35)] hover:bg-[#189694] transition-colors",
        "secondary": "rounded-full bg-white text-[#13263b] border border-[#cfe3ea] hover:bg-[#f1f7fa] transition-colors",
        "ghost": "rounded-full text-[#1ea6a3] hover:bg-[#e6f6f6] transition-colors",
        "danger": "rounded-full bg-[#b00020] text-white hover:bg-[#93001b] transition-colors"
      },
      "sizes": {"sm": "h-9 px-4 text-sm", "md": "h-11 px-6 text-base", "lg": "h-12 px-8 text-base"}
    },
    "cards": {
      "class": "rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)]",
      "hover": "hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow"
    },
    "header": {
      "class": "sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[#e6edf5]",
      "nav_link": "text-[#13263b] hover:text-[#1ea6a3] transition-colors data-[active=true]:text-[#1ea6a3]"
    },
    "hero": {
      "wrapper": "relative overflow-hidden",
      "top_gradient_band": "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[20vh] before:bg-[linear-gradient(180deg,rgba(19,38,59,1)_0%,rgba(30,58,92,0.92)_60%,rgba(245,248,251,0)_100%)]",
      "content": "relative pt-16 pb-10 md:pt-20 md:pb-16 bg-[#f5f8fb]",
      "title": "text-4xl sm:text-5xl lg:text-6xl text-[#13263b]",
      "subtitle": "mt-4 max-w-2xl text-[1.05rem] text-[#1e3a5c]"
    },
    "practice_area_item": {
      "icon": "w-6 h-6 text-[#1ea6a3]",
      "title": "text-lg font-semibold text-[#13263b]",
      "desc": "text-[0.98rem] text-[#0c1726]"
    },
    "forms": {
      "input": "rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3] focus-visible:border-[#1ea6a3]",
      "textarea": "rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3]",
      "label": "text-sm text-[#1e3a5c]",
      "error": "text-sm text-[#b00020]"
    }
  },

  "component_path": [
    "./components/ui/button",
    "./components/ui/card",
    "./components/ui/navigation-menu",
    "./components/ui/sheet",
    "./components/ui/dialog",
    "./components/ui/input",
    "./components/ui/textarea",
    "./components/ui/accordion",
    "./components/ui/alert",
    "./components/ui/sonner",
    "./components/ui/separator",
    "./components/ui/badge"
  ],

  "page_skeletons_jsx": {
    "Header.jsx": "import React from 'react';\nimport { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './components/ui/navigation-menu';\nimport { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';\nimport { Button } from './components/ui/button';\n\nexport const Header = () => {\n  return (\n    <header className=\"sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[#e6edf5]\" data-testid=\"site-header\">\n      <div className=\"mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] h-[72px] flex items-center justify-between\">\n        <a href=\"/\" className=\"flex items-center gap-2\" data-testid=\"brand-link\">\n          <span className=\"text-[#13263b] text-lg font-semibold\">Law Office of Warren J. Domangue</span>\n        </a>\n        <div className=\"hidden min-[900px]:flex items-center gap-6\">\n          <NavigationMenu data-testid=\"desktop-nav\">\n            <NavigationMenuList>\n              <NavigationMenuItem>\n                <NavigationMenuLink href=\"/\" className=\"text-[#13263b] hover:text-[#1ea6a3] transition-colors\" data-testid=\"nav-home\">Home</NavigationMenuLink>\n              </NavigationMenuItem>\n              <NavigationMenuItem>\n                <NavigationMenuLink href=\"/unemployment-appeals\" className=\"text-[#13263b] hover:text-[#1ea6a3] transition-colors\" data-testid=\"nav-unemployment\">Unemployment Appeals</NavigationMenuLink>\n              </NavigationMenuItem>\n              <NavigationMenuItem>\n                <NavigationMenuLink href=\"/other-areas\" className=\"text-[#13263b] hover:text-[#1ea6a3] transition-colors\" data-testid=\"nav-other-areas\">Other Areas</NavigationMenuLink>\n              </NavigationMenuItem>\n            </NavigationMenuList>\n          </NavigationMenu>\n          <a href=\"tel:+1-000-000-0000\" data-testid=\"call-cta-link\">\n            <Button className=\"rounded-full bg-[#1ea6a3] text-white px-5 h-10 hover:bg-[#189694] transition-colors\" data-testid=\"call-cta-button\">Call Now</Button>\n          </a>\n        </div>\n        <div className=\"min-[900px]:hidden\">\n          <Sheet>\n            <SheetTrigger asChild>\n              <Button variant=\"secondary\" className=\"rounded-full\" aria-label=\"Open Menu\" data-testid=\"hamburger-button\">Menu</Button>\n            </SheetTrigger>\n            <SheetContent side=\"right\" className=\"w-[300px]\">\n              <nav className=\"flex flex-col gap-4 mt-10\" data-testid=\"mobile-nav\">\n                <a href=\"/\" className=\"text-[#13263b]\" data-testid=\"mobile-nav-home\">Home</a>\n                <a href=\"/unemployment-appeals\" className=\"text-[#13263b]\" data-testid=\"mobile-nav-unemployment\">Unemployment Appeals</a>\n                <a href=\"/other-areas\" className=\"text-[#13263b]\" data-testid=\"mobile-nav-other-areas\">Other Areas</a>\n                <a href=\"tel:+1-000-000-0000\" className=\"mt-6\" data-testid=\"mobile-call-link\">\n                  <Button className=\"w-full rounded-full bg-[#1ea6a3] text-white hover:bg-[#189694] transition-colors\" data-testid=\"mobile-call-button\">Call Now</Button>\n                </a>\n              </nav>\n            </SheetContent>\n          </Sheet>\n        </div>\n      </div>\n    </header>\n  );\n};\n",

    "Hero.jsx": "import React from 'react';\nimport { Button } from './components/ui/button';\n\nexport const Hero = () => {\n  return (\n    <section className=\"relative overflow-hidden\" data-testid=\"hero-section\">\n      <div className=\"before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[20vh] before:bg-[linear-gradient(180deg,rgba(19,38,59,1)_0%,rgba(30,58,92,0.92)_60%,rgba(245,248,251,0)_100%)]\"></div>\n      <div className=\"relative bg-[#f5f8fb] pt-16 pb-10 md:pt-20 md:pb-16\">\n        <div className=\"mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1200px]\">\n          <h1 className=\"text-4xl sm:text-5xl lg:text-6xl text-[#13263b] font-semibold tracking-tight\" data-testid=\"hero-title\">Colorado Unemployment Appeals & Family Law</h1>\n          <p className=\"mt-4 max-w-2xl text-[1.05rem] text-[#1e3a5c]\" data-testid=\"hero-subtitle\">Experienced, responsive counsel focused on clear communication and winning results.</p>\n          <div className=\"mt-6 flex items-center gap-3\">\n            <a href=\"tel:+1-000-000-0000\" data-testid=\"hero-call-link\">\n              <Button className=\"rounded-full bg-[#1ea6a3] text-white px-6 h-11 hover:bg-[#189694] transition-colors\" data-testid=\"hero-call-button\">Call Now</Button>\n            </a>\n            <a href=\"#contact\" className=\"text-[#1ea6a3]\" data-testid=\"hero-contact-link\">Or request a consultation</a>\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n",

    "PracticeAreas.jsx": "import React from 'react';\nimport { Card } from './components/ui/card';\n\nexport const PracticeAreas = () => {\n  const items = [\n    { title: 'Unemployment Appeals', desc: 'Hearings, overpayment, benefits eligibility.' },\n    { title: 'Family Law', desc: 'Divorce, custody, modifications.' },\n    { title: 'Criminal Defense', desc: 'Misdemeanors, records, rights.' }\n  ];\n  return (\n    <section className=\"py-12 md:py-16 bg-white\" data-testid=\"practice-areas-section\">\n      <div className=\"mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1200px]\">\n        <div className=\"grid gap-6 min-[900px]:grid-cols-3\">\n          {items.map((it, i) => (\n            <Card key={i} className=\"rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6\" data-testid=\"practice-card\">\n              <h3 className=\"text-lg font-semibold text-[#13263b]\">{it.title}</h3>\n              <p className=\"mt-2 text-[0.98rem] text-[#0c1726]\">{it.desc}</p>\n            </Card>\n          ))}\n        </div>\n      </div>\n    </section>\n  );\n};\n",

    "ContactBlock.jsx": "import React from 'react';\nimport { Button } from './components/ui/button';\nimport { Input } from './components/ui/input';\nimport { Textarea } from './components/ui/textarea';\n\nexport const ContactBlock = () => {\n  return (\n    <section id=\"contact\" className=\"py-12 md:py-16 bg-[#f5f8fb]\" data-testid=\"contact-section\">\n      <div className=\"mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[800px] rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] p-6 md:p-8\">\n        <h2 className=\"text-base md:text-lg font-semibold text-[#13263b]\" data-testid=\"contact-title\">Request a Consultation</h2>\n        <form className=\"mt-4 grid gap-4\" data-testid=\"contact-form\">\n          <Input placeholder=\"Your Name\" className=\"rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3]\" data-testid=\"contact-name-input\"/>\n          <Input placeholder=\"Email\" type=\"email\" className=\"rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3]\" data-testid=\"contact-email-input\"/>\n          <Input placeholder=\"Phone\" type=\"tel\" className=\"rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3]\" data-testid=\"contact-phone-input\"/>\n          <Textarea placeholder=\"Brief description\" className=\"rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3]\" data-testid=\"contact-message-textarea\"/>\n          <div className=\"flex justify-end\">\n            <Button className=\"rounded-full bg-[#1ea6a3] text-white px-6 h-11 hover:bg-[#189694] transition-colors\" data-testid=\"contact-submit-button\">Send</Button>\n          </div>\n        </form>\n      </div>\n    </section>\n  );\n};\n"
  },

  "micro_interactions_and_motion": {
    "library": "framer-motion",
    "install": "npm i framer-motion",
    "principles": [
      "Fade-in + 12px slide-up on scroll for cards and sections",
      "Hover: only transition-colors, transition-shadow; avoid transition-all",
      "Focus-visible rings with 2px teal and 2px ring-offset"
    ],
    "reduced_motion": "Use prefers-reduced-motion to disable transforms and reduce animation duration",
    "example": "import { m } from 'framer-motion';\n<m.section initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-10% 0px'}} transition={{duration:0.45,ease:[0.22,1,0.36,1]}} />"
  },

  "accessibility": {
    "wcag": "2.1 AA",
    "focus": "Use focus-visible rings in teal (#1ea6a3), 2px width, ring-offset",
    "tap_targets": ">=44x44px for all interactive elements",
    "color_contrast": ">=4.5:1; verify hero text sits on solid or the lighter part of gradient band",
    "aria": ["aria-label for phone CTA", "descriptive alt text for images"],
    "skip_link": "Add a visually-hidden skip to content link at top"
  },

  "performance_core_web_vitals": {
    "images": ["Use native loading=lazy for non-hero images", "Dimension attributes to avoid CLS"],
    "css": ["Preload critical CSS via Tailwind build", "Avoid heavy gradients beyond 20vh"],
    "js": ["Code-split page-level bundles if routing", "Avoid large libraries; prefer shadcn primitives"],
    "fonts": ["Use system stack (already fast)"]
  },

  "image_urls": [
    {
      "url": "https://images.pexels.com/photos/14631743/pexels-photo-14631743.jpeg",
      "category": "hero_background_overlay",
      "description": "Colorado courthouse with mountain backdrop for subtle hero overlay (blurred at 12-16px, 12% opacity)."
    },
    {
      "url": "https://images.pexels.com/photos/5313088/pexels-photo-5313088.jpeg",
      "category": "about_section supporting visual",
      "description": "Historic courthouse facade detail for About or section divider background, low opacity."
    }
  ],

  "testing_attributes": {
    "convention": "kebab-case by role, e.g., data-testid=\"contact-submit-button\"",
    "coverage": "Apply to buttons, links, inputs, menus, alerts, toasts, error texts, and key headings"
  },

  "libraries_and_usage": {
    "shadcn": "Use existing components under ./components/ui/*.jsx. Named exports only.",
    "toasts": {
      "lib": "sonner (already included)",
      "path": "./components/ui/sonner",
      "usage": "import { Toaster, toast } from './components/ui/sonner'; <Toaster position=\"top-right\" />; toast.success('Message sent');"
    },
    "framer_motion": "npm i framer-motion; use for scroll reveals and gentle fades",
    "optional": ["Lottie for subtle checkmark after form submit (keep under 100KB)"]
  },

  "pages_content_requirements": {
    "Home": {
      "hero": "Gradient top band (≤20vh), headline + subtext + Call Now button, secondary link to contact",
      "practice_cards": "3 cards matching Unemployment Appeals, Family Law, Criminal Defense",
      "about": "Short paragraph and small image (low opacity), link to Other Areas",
      "contact_cta": "Centered card with form (name, email, phone, message)"
    },
    "Unemployment Appeals": {
      "layout": "hero band + content sections",
      "sections": ["Overview of appeals process", "What to bring to hearing", "Fees & timeline", "CTA bar with phone"],
      "components": ["Accordion for FAQs", "Steps list in Card"]
    },
    "Other Areas": {
      "layout": "Cards of other practice areas with short descriptions",
      "components": ["Card grid", "Contact CTA"]
    }
  },

  "do_and_dont_specific_to_recreation": {
    "do": [
      "Keep navy/teal palette exactly as provided",
      "Use pill-shaped primary buttons",
      "Use 18px card radius and soft shadows",
      "Sticky header and mobile hamburger",
      "Scroll animations: fade-in/slide-up"
    ],
    "dont": [
      "No major redesigns or new patterns",
      "Do not exceed 20% viewport with gradients",
      "No universal transition: all",
      "No purple/pink gradients"
    ]
  },

  "instructions_to_main_agent": [
    "1) Update /app/frontend/src/index.css base tokens with css_tokens_snippet_for_index.css to set brand colors and 18px radius.",
    "2) Build Header.jsx, Hero.jsx, PracticeAreas.jsx, ContactBlock.jsx using provided JSX scaffolds. Ensure named exports.",
    "3) Assemble pages (Home, Unemployment Appeals, Other Areas) with sections order described, using shadcn/ui Card, Button, Accordion, Input, Textarea.",
    "4) Add data-testid attributes to all interactive elements and key headings using the provided convention.",
    "5) Add framer-motion scroll reveals to cards and section wrappers; wrap with prefers-reduced-motion fallbacks.",
    "6) Ensure hero gradient band is implemented via ::before (≤20vh). Keep main content on solid #f5f8fb.",
    "7) Verify breakpoints with arbitrary variants: min-[900px], md (768px), and max-[520px].",
    "8) Optimize images: hero image low-opacity overlay and lazy-load others.",
    "9) Use Sonner toasts for form submission feedback.",
    "10) Run Lighthouse to confirm Core Web Vitals and WCAG AA contrast (navy/teal on white)."
  ]
}


<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>