'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';

// Hand-Drawn Architectural Sketch Line Frame Component
function HandDrawnSketchFrame() {
  return (
    <svg
      className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-20 overflow-visible"
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
    >
      {/* Primary Organic Hand-Drawn Wavy Outline */}
      <path
        d="M 14 18 C 110 12, 290 22, 386 16 C 392 130, 382 370, 385 484 C 285 490, 105 482, 14 486 C 18 360, 10 130, 14 18 Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-95"
      />
      {/* Sketchy Overlapping Corner Lines (Hand-drawn blueprint sketch look) */}
      <path
        d="M 4 20 L 396 12 M 384 4 L 388 496 M 396 482 L 6 490 M 16 496 L 8 6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="opacity-75"
      />
    </svg>
  );
}

export function SmartAutomationTabs() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.animated-white-frame',
        { scale: 0.92, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[160vh] sm:min-h-[330vh] lg:min-h-[360vh] overflow-hidden z-20 pb-10 sm:pb-20 lg:pb-32"
    >
      {/* Long Architectural Background Image from Unsplash */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/sprawling-sanctuary.jpg"
          alt="Sprawling luxury architectural sanctuary backdrop"
          fill
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* First Segment: 2 Fresh Unsplash Photos with Organic Hand-Drawn White Line Sketch Frames */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-12 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* First Fresh Photo (Left Column) with Hand-Drawn Sketch Line Frame */}
          <div className="animated-white-frame lg:col-span-6 relative flex justify-start">
            <div className="relative group">
              {/* Organic Hand-Drawn White Line Sketch Frame */}
              <HandDrawnSketchFrame />
              
              {/* Image Container */}
              <div className="relative w-full max-w-[280px] h-72 sm:w-96 sm:h-[480px] lg:w-[440px] lg:h-[540px] overflow-hidden rounded-none shadow-2xl bg-neutral-900">
                <Image
                  src="/images/residences/orchard-pool.jpg"
                  alt="Sunlit luxury estate pool terrace with modern stone architecture"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* Second Fresh Photo (Right Column Offset Down) with Hand-Drawn Sketch Line Frame */}
          <div className="animated-white-frame lg:col-span-6 relative flex justify-end pt-6 sm:pt-12 lg:pt-32">
            <div className="relative group">
              {/* Organic Hand-Drawn White Line Sketch Frame */}
              <HandDrawnSketchFrame />
              
              {/* Image Container */}
              <div className="relative w-full max-w-[280px] h-72 sm:w-96 sm:h-[480px] lg:w-[440px] lg:h-[540px] overflow-hidden rounded-none shadow-2xl bg-neutral-900">
                <Image
                  src="/images/residences/meadow-outdoor-lounge.jpg"
                  alt="Contemporary architectural outdoor lounge terrace with lush greenery"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Segment 2: Big White Line Frame with Continuous Moving Dashed Line Animation (Matching Screenshot 2) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 mt-12 sm:mt-48 lg:mt-64">
        
        <div className="relative w-full h-[42vh] sm:h-[70vh] lg:h-[75vh] flex flex-col justify-between p-4 sm:p-12 lg:p-16">
          
          {/* Continuous Moving White Line Animation Frame (Authentic Hand-Drawn Sketch Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <style>{`
              @keyframes continuousDashMove {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 1000; }
              }
              .animate-continuous-dash {
                animation: continuousDashMove 24s linear infinite;
              }
            `}</style>

            {/* Organic Hand-Drawn Main Outline Path with Continuous Moving Dash Animation */}
            <path
              d="M 16 20 C 220 12, 540 26, 984 16 C 988 160, 978 440, 982 582 C 680 590, 320 578, 16 584 C 22 430, 12 180, 16 20 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="150 45 45 45"
              className="animate-continuous-dash opacity-95"
            />

            {/* Hand-Sketched Overlapping Corner Strokes (Architectural Drawing Style) */}
            <path
              d="M 4 22 C 280 16, 680 18, 996 12 M 984 4 C 986 200, 980 400, 988 596 M 996 580 C 700 586, 280 582, 4 588 M 18 596 C 14 400, 18 200, 6 6"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="opacity-75"
            />
          </svg>

          {/* Top Right: Handwriting / Fine Script Text About the Company */}
          <div className="flex justify-end relative z-30">
            <div className="max-w-md text-right space-y-2">
              <p className="font-serif italic text-base sm:text-2xl lg:text-3xl text-white drop-shadow-lg tracking-wide leading-snug">
                “Crafting quiet sanctuaries where architecture, untouched nature, and ambient intelligence exist in timeless balance.”
              </p>
              <span className="block text-xs uppercase tracking-widest text-[#FAF8F5]/90 font-light pt-1">
                — Vine Homes Architectural Philosophy
              </span>
            </div>
          </div>

          {/* Bottom Left: Image Overlapping the Bottom-Left Corner of the Line (Made bigger as requested) */}
          <div className="relative z-30 flex justify-start items-end mt-4 sm:mt-12 lg:mt-16">
            <div className="relative w-44 h-44 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] shadow-2xl rounded-none border-4 border-white overflow-hidden -ml-2 -mb-2 sm:-ml-4 sm:-mb-4 bg-neutral-900">
              <Image
                src="/images/hero/aerial-coastal.jpg"
                alt="Tropical nature detail photo"
                fill
                unoptimized
                className="object-cover"
                sizes="380px"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Segment 3: Cool Floating 3-Card Architectural Showcase Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 mt-12 sm:mt-40 lg:mt-48 pb-10 sm:pb-20 lg:pb-28">
        
        {/* Sweeping Thin Serif Section Title */}
        <div className="text-center space-y-3 mb-8 sm:mb-16">
          <span className="block text-xs uppercase tracking-widest text-[#FAF8F5]/80 font-light">
            Architectural Sanctuary Detail
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide drop-shadow-lg">
            INTELLIGENT SANCTUARY ARCHITECTURE
          </h2>
        </div>

        {/* 3-Card Floating Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Floating Photo Card */}
          <div className="animated-white-frame lg:col-span-4 relative group">
            <div className="relative w-full h-80 sm:h-[380px] overflow-hidden rounded-none shadow-2xl border-4 border-white bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/images/residences/meadow-main.jpg"
                alt="Sunlit courtyard detail"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-4 py-2 text-xs font-medium uppercase tracking-widest text-white border border-white/20">
                Zero-Threshold Terraces
              </div>
            </div>
          </div>

          {/* Central Hero Featured Photo Card */}
          <div className="animated-white-frame lg:col-span-5 relative group z-20 -my-4 lg:-my-8">
            <div className="relative w-full h-[400px] sm:h-[480px] overflow-hidden rounded-none shadow-2xl border-4 border-white bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/images/residences/orchard-main.jpg"
                alt="Luxury pavilion estate"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Floating Hand-Drawn SVG Badge */}
              <div className="absolute top-4 right-4 bg-white text-[#1F1D1A] px-5 py-2 font-serif text-sm font-semibold tracking-wider shadow-2xl border border-black/10">
                VINE ESTATE
              </div>
            </div>
          </div>

          {/* Right Floating Photo Card */}
          <div className="animated-white-frame lg:col-span-3 relative group">
            <div className="relative w-full h-80 sm:h-[380px] overflow-hidden rounded-none shadow-2xl border-4 border-white bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/images/residences/palma-main.jpg"
                alt="Ocean view villa terrace"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-4 py-2 text-xs font-medium uppercase tracking-widest text-white border border-white/20">
                Circadian Lighting
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
