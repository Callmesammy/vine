# Comprehensive Task Matrix: Vine Homes Platform

## Sprint 1: Architecture, Design Tokens & Global Motion Engine
- [ ] Initialize Next.js 15 App Router project with TypeScript, Tailwind CSS, and ES Lint.
- [ ] Configure `tailwind.config.ts` with custom brand colors (`#C85A32`, `#FAF8F5`, `#F1EBE4`, `#1F1D1A`, `#615C55`).
- [ ] Embed Google Fonts `@next/font/google` for `Fraunces` (variable optical serif) and `Plus Jakarta Sans`.
- [ ] Create `SmoothScroll.tsx` component:
  - Initialize Lenis with `lerp: 0.06` and `smoothWheel: true`.
  - Wire `lenis.on('scroll', ScrollTrigger.update)`.
  - Bind `lenis.raf` into `gsap.ticker.add`.
  - Disable GSAP lag smoothing via `gsap.ticker.lagSmoothing(0)`.
- [ ] Create centralized `lib/data/properties.ts` storing specs for *The Orchard Villa*, *The Meadow Estate*, and *The Haven Residence* with linked Unsplash assets.

---

## Sprint 2: Smart Header & Staggered Fullscreen Menu
- [ ] Build `Navbar.tsx`:
  - Position: Fixed floating header with backdrop blur (`backdrop-blur-md bg-white/70`).
  - Brand mark: "VINE" in `font-serif tracking-widest text-vine-charcoal`.
  - Directional GSAP ScrollTrigger: Translate `y: -100%` on scroll-down, `y: 0%` on scroll-up.
  - Direct actions: "Tour Residences" pill CTA (`bg-vine-orange hover:bg-vine-orange-light`) and Menu hamburger trigger.
- [ ] Build `FullscreenMenu.tsx` & `SubmenuPreviewCard.tsx`:
  - Full-screen curtain reveal via GSAP `clip-path`.
  - Staggered SplitType animation on menu items (`Home`, `Residences`, `About`, `Contact`, `Terms`).
  - Hover state listener on `Residences`: dynamically renders the active home preview (photo, bedroom count, automation highlights) in a slide-out drawer on desktop.
  - Keyboard escape listener (`ESC`) and focus trapping for accessibility.

---

## Sprint 3: Landing Page (Editorial Showcase)
- [ ] **Hero Component (`Hero.tsx`):**
  - Full-width Unsplash modern home photography with expanding clip-path mask.
  - Headline line-mask reveal: *"Living, effortlessly supported."*
  - Reassuring subheadline emphasizing kindness, safety, and modern comfort.
  - Accessible CTA group: *"Explore Residences"* (scroll anchor) and *"Direct Concierge Line"*.
- [ ] **Philosophy & Kindness Section (`ValuesPhilosophy.tsx`):**
  - 2-Column editorial layout. Left: Large display quote (*"We believe home automation should feel like an intuitive companion, not a computer interface."*). Right: 3 core tenets (Circadian Well-being, Zero-Barrier Living, Ambient Peace of Mind).
- [ ] **Horizontal Pinned Residence Showcase (`HorizontalShowcase.tsx`):**
  - GSAP ScrollTrigger pinning container to viewport.
  - Scrubbed horizontal translation through 3 property cards.
  - Cards highlight: High-res image with zoom hover, bedroom/bath specs, zero-threshold badge, and *"View Floorplan & Tech Specs"* button.
- [ ] **Interactive Smart Automation Tabs (`SmartAutomationTabs.tsx`):**
  - High-contrast interactive tabs: *Lighting & Circadian Rhythm*, *Intuitive Voice Climate*, *Zero-Step Ergonomics*, *Fall & Safety Safeguards*.
  - Tab clicks transition photo and feature highlights with cross-fade.
- [ ] **Contact & Social Community Section (`ContactAndSocial.tsx`):**
  - Left column: Direct phone concierge `(800) 555-VINE`, private consultation hours, and Social Media Follow CTA (Instagram, YouTube, Facebook, LinkedIn) with terracotta hover fill.
  - Right column: High-contrast, large-input booking consultation form with single-step submission and confirmation feedback.

---

## Sprint 4: Dedicated Subpages
- [ ] **About Us Page (`/about`):**
  - Multi-section narrative on founding Vine, architectural collaboration with gerontologists, and the ethos of kindness in technology.
  - Side-by-side photo grid of light-filled spaces and nature connections.
- [ ] **Residences Catalog Page (`/residences`):**
  - Grid view of all available smart homes with filter pills (*All*, *3-Bedroom*, *4-Bedroom*, *Immediate Move-In*).
  - Detailed spec tables (Square footage, lot size, automated features included).
- [ ] **Individual Residence Detail Page (`/residences/[slug]`):**
  - Interactive blueprint/floorplan viewer with clickable hotspots showing sensor and lighting placements.
  - Schedule private in-person or virtual walkthrough form.
- [ ] **Terms of Service & Privacy Page (`/terms`):**
  - High-contrast, easy-to-read typography (20px body font).
  - Sticky side-navigation linking directly to sections (*Data Privacy in Smart Homes*, *Warranty*, *Accessibility Guarantee*).

---

## Sprint 5: Performance, Accessibility & Motion QA
- [ ] Run Google Lighthouse audit: Target > 95 in Performance, Accessibility, and Best Practices.
- [ ] Verify 60–120 FPS on high-refresh-rate displays during rapid scroll scrubbing.
- [ ] Test screen reader announcements (`aria-expanded`, `aria-label`, role landmarks) across Navbar and Fullscreen Menu.
- [ ] Validate responsive layouts across Mobile (375px), Tablet (768px), Desktop (1440px), and Ultra-wide (1920px).