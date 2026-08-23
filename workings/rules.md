```markdown
# Development & Motion Engineering Rules

## 1. Senior Ergonomics & Accessibility Rules (Non-Negotiable)
1. **Minimum Touch Target Rule:** All buttons, interactive links, tabs, input fields, and hamburger icons MUST have a minimum interactive bounding box of **48px × 48px** (`min-h-[48px] min-w-[48px]`).
2. **Text Contrast Floor:** Never place white text on light cream backgrounds. Headings and primary body copy must use `#1F1D1A` on `#FAF8F5` or `#F1EBE4`, delivering a contrast ratio exceeding **12:1** (surpassing WCAG AAA).
3. **Typography Sizing Floor:** No descriptive body copy shall be styled below **18px (`text-lg`)**. Form field labels, placeholders, and error messages must be at least **16px** to prevent browser auto-zooming and visual strain.
4. **Motion Fallback Rule:** Always wrap motion timelines with `window.matchMedia('(prefers-reduced-motion: reduce)')`. If reduced motion is requested, replace all parallax and slide-up translates with simple `opacity: 0` to `opacity: 1` crossfades (`duration: 0.4s`).

---

## 2. GSAP & ScrollTrigger Protocol

### A. Lifecycle Cleanup Pattern
Never instantiate raw GSAP tweens directly inside a React component without a scoped context. Always implement the following cleanup pattern:
```tsx
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export function ShowcaseSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // All GSAP and ScrollTrigger instantiations here
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: container }
  );

  return <div ref={container}>{/* JSX Content */}</div>;
}
B. Bidirectional Toggle Convention
To ensure the website responds organically in both scroll directions:

Use toggleActions: "play reverse play reverse" for entrance text and cards so the page cleans itself up when scrolling back up.

Use scrub: 1 to scrub: 1.5 on parallax image frames to create realistic inertia. Never use scrub: true (unbuffered 0s lag) as it creates mechanical, jittery frame updates.

3. Clip-Path Transition Standards
Page / Modal Open: clip-path: inset(0 0 0% 0) with ease: "power4.inOut", duration: 0.9s.

Page / Modal Close: clip-path: inset(0 0 100% 0) with ease: "power4.inOut", duration: 0.7s.

Image Reveal Masks: Start with clip-path: inset(12% 12% 12% 12%) and inner image scale: 1.2. Animate to clip-path: inset(0% 0% 0% 0%) and scale: 1.0 simultaneously.