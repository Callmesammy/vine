'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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
          scale: 1.25,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      const mainTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Image comes FROM UP to its normal position
      mainTl.fromTo(
        imageFrameRef.current,
        { y: -140, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out' }
      );

      // 2. Bottom text comes FROM DOWN to its normal position
      mainTl.fromTo(
        '.hero-text-container',
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      );

      // 3. Line-drawing animation on botanical SVG paths
      const paths = containerRef.current.querySelectorAll('.draw-path');
      paths.forEach((path) => {
        const p = path as SVGPathElement;
        const length = p.getTotalLength ? p.getTotalLength() : 300;
        gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
        
        mainTl.to(
          p,
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: 'power2.inOut',
          },
          '-=1.0'
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full pt-4 sm:pt-6 pb-12 bg-[#FAF8F5] text-[#1F1D1A] overflow-hidden flex flex-col justify-between"
    >
      <div className="w-full pl-3 sm:pl-4 lg:pl-6 pr-6 sm:pr-8 lg:pr-12 mx-auto flex-1 flex flex-col justify-between">
        
        {/* Asymmetrical Grid: Image on Left (67% width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Villa Photo Coming From UP on Refresh */}
          <div className="lg:col-span-8">
            <div
              ref={imageFrameRef}
              className="relative w-full h-[60vh] sm:h-[68vh] lg:h-[74vh] overflow-hidden bg-neutral-200 shadow-xl rounded-none"
            >
              <Image
                ref={imageRef}
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
                alt="Architectural single-level villa with private pool"
                fill
                priority
                unoptimized
                className="object-cover transition-transform ease-out"
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>
          </div>

          {/* Right Column: Open Off-White Space */}
          <div className="lg:col-span-4 hidden lg:block" />

        </div>

        {/* Spanning Bottom Statement Typography (Coming FROM DOWN + Line Drawing Animation) */}
        <div className="hero-text-container mt-8 pt-4 w-full">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 w-full">
            
            {/* Left Serif Number Index */}
            <div className="font-serif text-7xl sm:text-9xl lg:text-[10rem] font-light text-[#1F1D1A]/20 tracking-tighter shrink-0 select-none leading-none">
              01
            </div>

            {/* Full-Width Spanning Word: SANCTUARY + Hand-Drawn SVG Line Motif */}
            <div className="relative flex-1 flex flex-wrap items-center justify-end gap-4 sm:gap-8 w-full">
              
              {/* Architectural Stroke Line-Art Font Style */}
              <span
                className="font-serif text-5xl sm:text-7xl lg:text-[9rem] font-semibold tracking-tight leading-none text-[#1F1D1A] transition-all"
                style={{
                  WebkitTextStroke: '1px #1F1D1A',
                }}
              >
                SANCTUARY
              </span>

              {/* Real-time Hand-Drawn Botanical SVG Line Motif */}
              <div className="relative shrink-0 text-[#C85A32] hover:rotate-12 transition-transform duration-700">
                <svg
                  ref={svgRef}
                  className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 stroke-current fill-none stroke-[1.4]"
                  viewBox="0 0 100 100"
                >
                  <path className="draw-path" d="M50 15 C35 30, 35 70, 50 85 C65 70, 65 30, 50 15 Z" />
                  <path className="draw-path" d="M15 50 C30 35, 70 35, 85 50 C70 65, 30 65, 15 50 Z" />
                  <path className="draw-path" d="M25 25 C40 40, 60 40, 75 75 C60 60, 40 60, 25 25 Z" />
                  <path className="draw-path" d="M75 25 C60 40, 40 40, 25 75 C40 60, 60 60, 75 25 Z" />
                  <circle cx="50" cy="50" r="6" className="fill-[#C85A32] draw-path" />
                </svg>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
