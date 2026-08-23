'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // GSAP ScrollTrigger Image Zoom / Scale on Scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.0 },
        {
          scale: 1.35,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );

      const mainTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Main Image comes FROM UP
      mainTl.fromTo(
        imageFrameRef.current,
        { y: -140, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out' }
      );

      // 2. Bottom text comes FROM DOWN
      mainTl.fromTo(
        '.hero-text-container',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      );

      // 3. Floating Sticker entrance
      mainTl.fromTo(
        '.photo-sticker',
        { scale: 0, rotate: -20, opacity: 0 },
        { scale: 1, rotate: -6, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.4'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full pt-2 sm:pt-4 pb-2 bg-[#FAF8F5] text-[#1F1D1A] overflow-visible flex flex-col justify-start gap-1"
    >
      <div className="w-full px-3 sm:px-4 lg:px-6 mx-auto flex-1 flex flex-col justify-start">
        
        {/* Main Villa Photo: Wider width (9 out of 12 columns ~75%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-9 xl:col-span-9">
            <div
              ref={imageFrameRef}
              className="relative w-full h-[60vh] sm:h-[72vh] lg:h-[78vh] overflow-hidden bg-neutral-200 shadow-2xl rounded-none"
            >
              <Image
                ref={imageRef}
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
                alt="Architectural single-level villa with private pool"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>
          </div>
        </div>

        {/* Statement Typography: Spanning full width, VINE in line outline serif, SANCTUARY in solid black */}
        <div className="hero-text-container -mt-4 sm:-mt-8 lg:-mt-12 w-full relative z-10">
          <div className="relative flex flex-nowrap items-baseline justify-between w-full whitespace-nowrap overflow-visible">
            
            {/* VINE - Outlined Line Text */}
            <span className="font-serif text-transparent [-webkit-text-stroke:1.5px_#1F1D1A] sm:[-webkit-text-stroke:2.5px_#1F1D1A] lg:[-webkit-text-stroke:3.2px_#1F1D1A] text-[8.5vw] sm:text-[9.5vw] lg:text-[10.2vw] xl:text-[10.5vw] font-light tracking-wider select-none leading-none">
              VINE
            </span>

            {/* SANCTUARY - Huge Solid Black Extra Bold Text */}
            <span className="font-sans text-[8.8vw] sm:text-[10vw] lg:text-[10.8vw] xl:text-[11.2vw] font-black tracking-tighter text-[#1F1D1A] leading-none">
              SANCTUARY
            </span>

            {/* Floating Photo Sticker positioned directly over top of "RY" in SANCTUARY */}
            <div className="photo-sticker absolute right-0 sm:right-2 lg:right-3 -top-8 sm:-top-16 lg:-top-24 w-20 h-14 sm:w-32 sm:h-22 lg:w-44 lg:h-30 rounded-2xl overflow-hidden shadow-2xl border-2 border-white transform -rotate-6 transition-transform hover:scale-110 hover:rotate-0 shrink-0 z-30">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                alt="Natural terrace lounge detail"
                fill
                unoptimized
                className="object-cover"
                sizes="200px"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
