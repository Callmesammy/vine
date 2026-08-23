# Architectural Specification & Engineering Blueprint: Vine Homes Platform

## 1. System Vision & Paradigm
Vine is an editorial, motion-driven web application dedicated to showcasing high-end, automated residences for seniors. The technical challenge is achieving the fluid motion physics, horizontal pinned showcases, clip-path reveals, and editorial depth seen on award-winning architectural sites (e.g., Villas Tamarindo) while maintaining strict WCAG 2.2 AAA accessibility, zero-fatigue high-contrast reading levels, and non-disorienting animation velocities.

---

## 2. Technical Stack & Dependencies
* **Framework:** Next.js 15+ (App Router, React 19, Server Components for SEO + Client Boundary Islands for Motion)
* **Styling Engine:** Tailwind CSS 3.4+ with extended custom semantic theme tokens
* **Physics & Motion Engine:** GSAP 3.12+ (Core, ScrollTrigger, ScrollToPlugin, Flip, SplitType)
* **Smooth Inertia Engine:** `@studio-freight/lenis` (or `@darkroom.engineering/lenis`)
* **Icons:** `lucide-react` (Rendered with 2.25px stroke weight for senior eye clarity)
* **State Management:** Zustand (for Fullscreen Menu toggle, Submenu Preview Drawer state, and Accessibility Filters)
* **Forms & Validation:** React Hook Form + Zod (Senior-friendly single-column, floating-label architecture)

---

## 3. Directory & File Manifest
vine-platform/
├── app/
│   ├── layout.tsx                     # Global HTML root, metadata, Fraunces/Jakarta fonts, SmoothScroll wrapper
│   ├── page.tsx                       # Landing Page: Hero, Values, Horizontal Pinned Showcase, Automation, Contact, Social
│   ├── about/
│   │   └── page.tsx                   # Narrative story, founders' ethos of kindness, architectural principles
│   ├── residences/                    # Shop / Property Catalog
│   │   ├── page.tsx                   # Filterable grid of smart homes & architectural specifications
│   │   └── [slug]/
│   │       └── page.tsx               # Individual property detail: virtual tour trigger, floorplan viewer, booking modal
│   ├── terms/
│   │   └── page.tsx                   # High-contrast, sticky-nav Terms of Service & Privacy Policy
│   └── api/
│       └── contact/
│           └── route.ts               # Serverless handler for VIP Concierge consultations & SMS notifications
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Smart-directional sticky navbar with glassmorphism & CTA
│   │   ├── FullscreenMenu.tsx         # Full-viewport curtain menu with interactive media submenu preview
│   │   ├── SubmenuPreviewCard.tsx     # Contextual image/spec card triggered on menu link hover
│   │   └── Footer.tsx                 # Social media community CTA, contact info, legal directory
│   ├── motion/
│   │   ├── SmoothScroll.tsx           # Lenis initialization + GSAP Ticker synchronization lifecycle
│   │   ├── TextMaskReveal.tsx         # SplitType line masking wrapper with ease-out cubic-bezier
│   │   └── ClipImageReveal.tsx        # Viewport-triggered clip-path expanding photo component
│   ├── sections/
│   │   ├── Hero.tsx                   # Cinematic entrance with animated tagline and direct action pill
│   │   ├── ValuesPhilosophy.tsx       # 2-Column editorial section balancing technology and empathy
│   │   ├── HorizontalShowcase.tsx     # GSAP pinned horizontal scroll track of homes
│   │   ├── SmartAutomationTabs.tsx    # Accessible tabbed system explaining senior safety and ambient AI
│   │   └── ContactAndSocial.tsx       # High-contrast contact form + multi-channel social media follow CTA
│   └── ui/
│       ├── Button.tsx                 # Accessible 48px+ touch target button with magnetic fill
│       └── Accordion.tsx              # High-contrast collapsible components for specifications
├── lib/
│   ├── gsap-config.ts                 # Centralized client-side GSAP and ScrollTrigger registration
│   ├── data/
│   │   └── properties.ts              # Single source of truth for residences, room counts, automation tiers, and Unsplash IDs
│   └── utils.ts                       # Class merging (clsx + tailwind-merge)
├── public/
│   └── assets/                        # SVG icons, architectural floorplan blueprints, logo vector marks
├── tailwind.config.ts
└── tsconfig.json


---

## 4. Animation Engine & Execution Pipeline

[ User Interaction: Scroll / Wheel / Touch ]
│
▼
[ Lenis Inertia Engine ] (lerp: 0.06, smoothWheel: true)
│
┌───────────┴───────────┐
│ Synchronized Ticker   │
▼                       ▼
[ Native Scroll Event ]   [ GSAP Ticker Callback ]
│
▼
[ ScrollTrigger.update() ]
│
┌───────────────────────┼────────────────────────┐
▼                       ▼                        ▼
[ Directional Navbar ]  [ Pinned Horizontal Track ] [ Parallax Image Buffers ]
(translateY: -100%/0%)  (xPercent: 0 -> -200%)      (yPercent: -15% -> +15%)


1. **Inertia Dampening:** Lenis runs with a relaxed `lerp: 0.06` factor, smoothing out jerky mouse wheels without creating laggy input delays for seniors.
2. **Lag Smoothing Override:** `gsap.ticker.lagSmoothing(0)` ensures that heavy high-resolution imagery does not drop frame steps during scroll scrubbing.
3. **Route & Component Cleanup:** Every motion block is registered inside `gsap.context()` to guarantee 100% garbage collection and prevent memory leaks during page changes.