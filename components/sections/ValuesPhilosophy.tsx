'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { VALUES_IMAGE, KITCHEN_IMAGE } from '@/lib/data/properties';

export function ValuesPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.philosophy-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
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
      className="pt-2 sm:pt-1 pb-8 sm:pb-20 bg-[#FAF8F5] text-[#1F1D1A] overflow-visible relative z-20"
    >
      <div className="w-full px-3 sm:px-4 lg:px-6 mx-auto space-y-6 sm:space-y-16">
        
        {/* Asymmetrical 2-Column Composition: Long Vertical Photos + Editorial Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          
          {/* Left Column: Label + Tall Vertical First Photo */}
          <div className="lg:col-span-6 space-y-3 relative z-30 pt-2 sm:pt-6 lg:pt-8">
            <span className="philosophy-reveal block text-xs font-medium uppercase tracking-widest text-[#615C55]">
              Architectural Harmony & Natural Illumination
            </span>
            
            <div className="philosophy-reveal relative w-full h-[45vh] sm:h-[120vh] lg:h-[140vh] overflow-hidden bg-neutral-200 rounded-none shadow-2xl">
              <Image
                src={VALUES_IMAGE}
                alt="Sun-drenched private terrace surrounded by olive groves"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Tall Vertical Second Photo + Editorial Narrative Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-8 lg:pt-12">
            
            {/* Tall Vertical Second Photo */}
            <div className="philosophy-reveal relative w-full h-[40vh] sm:h-[105vh] lg:h-[125vh] overflow-hidden bg-neutral-200 rounded-none shadow-2xl">
              <Image
                src={KITCHEN_IMAGE}
                alt="Intuitive morning bar with glare-free warm timber features"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Editorial Narrative Text */}
            <div className="philosophy-reveal max-w-xl pt-2">
              <p className="font-sans font-extralight text-2xl sm:text-3xl lg:text-[2.3rem] text-[#1F1D1A] leading-[1.35] tracking-tight">
                Rooted within private coastal sanctuaries, Vine residences blend zero-threshold architectural luxury with ambient smart technology—creating effortless living spaces tailored for lifelong comfort and serene independence.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
