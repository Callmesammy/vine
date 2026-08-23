'use client';

import { useRef } from 'react';
import Link from 'next/link';
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
      {/* SVG Hand-Drawn Displacement Filter for Organic Paper Sticker Edges */}
      <svg className="hidden">
        <defs>
          <filter id="sticker-hand-drawn">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 w-full pointer-events-none transition-transform duration-300"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between pointer-events-auto">
          
          {/* Top Left SVG Logo + Title & Subtitle */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            style={{ filter: 'url(#sticker-hand-drawn)' }}
            className="group relative min-h-[48px] inline-flex items-center gap-3 bg-white/90 backdrop-blur-md text-[#1F1D1A] px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] border-2 border-white hover:scale-105 hover:bg-white transition-all duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
          >
            {/* SVG Logo Icon */}
            <svg
              className="w-7 h-7 shrink-0 stroke-[#1F1D1A] fill-[#C85A32] group-hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 100 100"
            >
              <rect width="100" height="100" rx="24" className="fill-[#1F1D1A]" />
              <path d="M50 18 C32 30, 24 50, 32 75 C42 60, 58 60, 68 75 C76 50, 68 30, 50 18 Z" className="fill-[#C85A32]" />
              <path d="M50 18 C50 45, 50 65, 50 82" stroke="#FAF8F5" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="50" cy="28" r="4" fill="#FAF8F5" />
            </svg>

            {/* Brand Title & Subtitle */}
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-base sm:text-lg tracking-[0.25em] text-[#1F1D1A] leading-none group-hover:text-[#C85A32] transition-colors">
                VINE
              </span>
              <span className="font-sans font-semibold text-[0.6rem] uppercase tracking-[0.2em] text-[#615C55] leading-none mt-1">
                Luxury Smart Residences
              </span>
            </div>
          </Link>
          
          {/* White Hand-Drawn Sticker Badge Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Open Navigation Menu"
            style={{ filter: 'url(#sticker-hand-drawn)' }}
            className="group relative min-h-[48px] inline-flex items-center gap-2.5 bg-white text-[#1F1D1A] px-5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.22)] border-2 border-white hover:scale-105 hover:bg-[#FAF8F5] transition-all duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
          >
            <span className="font-sans font-bold text-xs uppercase tracking-[0.22em] text-[#1F1D1A] group-hover:text-[#C85A32] transition-colors">
              MENU
            </span>
            <div className="flex flex-col justify-center gap-1 w-5">
              <span className="w-5 h-[2px] bg-[#1F1D1A] rounded-full transition-all group-hover:bg-[#C85A32]" />
              <span className="w-3.5 h-[2px] bg-[#1F1D1A] rounded-full transition-all group-hover:w-5 group-hover:bg-[#C85A32]" />
              <span className="w-5 h-[2px] bg-[#1F1D1A] rounded-full transition-all group-hover:bg-[#C85A32]" />
            </div>
          </button>

        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu />
    </>
  );
}
