'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import { useMenuStore } from '@/lib/store/useMenuStore';
import { FullscreenMenu } from './FullscreenMenu';

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  // Directional GSAP ScrollTrigger
  useGSAP(
    () => {
      if (!headerRef.current) return;

      const showAnim = gsap
        .from(headerRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.3,
          ease: 'power2.out',
        })
        .progress(1);

      ScrollTrigger.create({
        start: 'top top+=100',
        end: 'max',
        onUpdate: (self) => {
          if (self.direction === -1) {
            showAnim.play();
          } else {
            showAnim.reverse();
          }
        },
      });
    },
    { scope: headerRef }
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 w-full pointer-events-none transition-transform duration-300"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-end pointer-events-auto">
          
          {/* Minimal 3-Line Architectural Hamburger Menu Trigger (Top Right Only) */}
          <button
            onClick={toggleMenu}
            aria-label="Open Navigation Menu"
            className="min-h-[48px] min-w-[48px] group inline-flex flex-col justify-center items-end gap-1.5 p-2 text-[#1F1D1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
          >
            <span className="w-8 h-[2px] bg-[#1F1D1A] rounded-full transition-all group-hover:w-6 group-hover:bg-[#C85A32]" />
            <span className="w-6 h-[2px] bg-[#1F1D1A] rounded-full transition-all group-hover:w-8 group-hover:bg-[#C85A32]" />
            <span className="w-4 h-[2px] bg-[#1F1D1A] rounded-full transition-all group-hover:w-8 group-hover:bg-[#C85A32]" />
          </button>

        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu />
    </>
  );
}
