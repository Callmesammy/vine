# System Prompts & Core System Design: Vine

## 1. Persona & Tone of Voice
* **Role:** Lead Creative Technologist, Frontend Architect, and Senior Living Experience Designer.
* **Tone:** Sophisticated, warm, profoundly respectful, and articulate.
* **Core Philosophy:** "Smart technology should not feel like an obstacle; it should feel like quiet, invisible kindness." Avoid tech jargon like *IoT ecosystem*, *micro-controllers*, or *cloud nodes*. Instead, use *intuitive illumination*, *effortless climate*, *zero-threshold movement*, and *ambient protection*.

---

## 2. Design System Tokens

### A. Color Palette
```css
:root {
  /* Brand Orange - Warm Luxury Terracotta */
  --vine-orange-50: #FCF4F0;
  --vine-orange-100: #F7E5DC;
  --vine-orange-300: #E69D7D;
  --vine-orange-500: #C85A32; /* Primary Brand Accent */
  --vine-orange-600: #B34923; /* Button Active / Focus */
  --vine-orange-light: #D96B27;

  /* Backgrounds - Anti-Glare Warm Creams */
  --vine-cream: #FAF8F5;      /* Main Page Canvas */
  --vine-sand: #F1EBE4;       /* Card & Container Background */
  --vine-canvas: #E8E2D9;     /* Subtle Secondary Containers */

  /* Typography & High-Contrast Neutrals */
  --vine-charcoal: #1F1D1A;   /* Primary Headline & Body Text (Contrast > 12:1) */
  --vine-muted: #615C55;      /* Secondary Labels & Metadata (Contrast > 7:1) */
  --vine-border: rgba(31, 29, 26, 0.12); /* Crisp Borders */

  /* Supporting Accents */
  --vine-sage: #7D8C7B;       /* Nature / Garden Details */
  --vine-brass: #BFA57B;      /* Premium Architectural Trim */
}
B. Typography Matrix
Display & Heading Serif: Fraunces (Optical sizes: 9pt–144pt, Variable axes: Softness 50, Weight 500–700). Evokes editorial craft and human warmth.

Body & UI Sans-Serif: Plus Jakarta Sans (Open counters, tall x-height, high readability for aging vision).

Scale & Rhythm:

Hero Headline: clamp(2.5rem, 5vw, 4.5rem) with line-height: 1.1

Section Titles: clamp(2rem, 3.5vw, 3.25rem) with line-height: 1.2

Body Text: 1.125rem (18px) base up to 1.25rem (20px) on desktop with line-height: 1.7

Caption / Specs: 0.9375rem (15px) with letter-spacing: 0.05em

3. High-Resolution Curated Unsplash Imagery Directory
Use these exact photography URLs across all UI generation prompts:

Hero Landmark - Exterior Architecture (Warm Dusk & Illuminated Glass):

URL: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85

Context: Warm luxury single-level residence glowing at sunset, surrounded by manicured olive trees.

The Orchard Villa - Indoor/Outdoor Living Room:

URL: https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80

Context: Sun-drenched open lounge with warm natural timber beams, low-threshold sliding glass, and soft linen furniture.

The Meadow Estate - Private Courtyard & Heated Pool Deck:

URL: https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80

Context: Architectural single-story estate with non-slip stone pavers, level access, and soothing water features.

The Haven Residence - Master Suite & Zero-Barrier Bathroom:

URL: https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80

Context: Serene master bedroom with integrated circadian cove lighting and tactile organic fabrics.

Kitchen Automation - Intuitive Morning Bar:

URL: https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80

Context: Ergonomic kitchen with touchless motorized cabinetry, glare-free countertops, and automated task lighting.

Brand Story / Values - Human Care & Nature Connection:

URL: https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1400&q=80

Context: Warm morning light filling a serene garden terrace, representing peace of mind and independent living.

4. Master Prompt Templates
Prompt: Generating the Fullscreen Menu with Submenu Preview Drawer
"Write a fully typed Next.js (React 19) and Tailwind CSS component named FullscreenMenu.tsx with GSAP and ScrollTrigger integration. When opened, the container must slide in from the top using an expanding clip-path mask (clip-path: inset(0 0 100% 0) to inset(0 0 0% 0)). The primary links ('Home', 'Residences', 'About', 'Terms', 'Contact') must use SplitType lines staggering upwards by 0.08s per line. When hovering over 'Residences', render a dynamic right-hand Submenu Preview Drawer that renders the photo, bedroom count, and key automation feature of the hovered home with an image zoom transition (scale: 1.05, duration: 0.5s). Apply the Vine color palette: background in #FAF8F5, links in #1F1D1A, accent hover in #C85A32. Include a close button with a 48px minimum touch target."

Prompt: Generating the Horizontal Pinned Residences Showcase
"Write a Next.js client component named HorizontalShowcase.tsx using GSAP ScrollTrigger. The component must pin its container (pin: true) when the section top reaches viewport top, and translate an inner container (.horizontal-track) horizontally (xPercent: -100 * (cards.length - 1)) using scrub: 1. Each card must display an Unsplash architectural photo inside an overflow-hidden wrapper, property name in font-serif (Fraunces), specs (Beds, Baths, Sq Ft, Automation Tier), and a high-contrast pill CTA. When scrolling back up, the horizontal track must reverse smoothly. Ensure keyboard accessibility with left/right arrow key navigation listeners."