'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';

export function ContactAndSocial() {
  const scrollImageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!scrollImageRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.parallax-nature-image',
        { scale: 1 },
        {
          scale: 1.25,
          ease: 'none',
          scrollTrigger: {
            trigger: scrollImageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    },
    { scope: scrollImageRef }
  );

  return (
    <>
      {/* Photo Segment: Left photo extending DOWN past bottom edge */}
      <section id="contact" className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] overflow-visible py-8 sm:py-12 lg:py-16 z-20">
        <div className="w-full px-3 sm:px-6 lg:px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column (5 Cols): Overhead Patio Photo MADE EXTREMELY LONG GOING DOWN into the next section */}
            <div className="lg:col-span-5 relative z-30">
              <div className="relative w-full h-[380px] sm:h-[1050px] lg:h-[1250px] rounded-none overflow-hidden shadow-2xl bg-neutral-200 -mb-20 sm:-mb-80 lg:-mb-96">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90"
                  alt="Overhead architectural patio lounge extending down"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Column (7 Cols): Luxury Interior Photo */}
            <div className="lg:col-span-7 h-[300px] sm:h-[620px] lg:h-[700px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90"
                alt="Spacious luxury dining pavilion and warm timber kitchen interior"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Next Section: "Sit-back and relax, we take care of everything." (Matching Reference Screenshot) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pt-24 sm:pt-64 lg:pt-80 pb-10 sm:pb-32 z-10">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="font-serif font-light text-3xl sm:text-6xl lg:text-7xl text-[#1F1D1A] tracking-tight leading-tight">
            Sit-back and relax, we take care of <span className="italic font-normal">everything.</span>
          </h2>
        </div>
      </section>

      {/* Wellness & Culinary Hospitality Section (Matching Reference Screenshots 1 & 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-8 sm:py-20 px-3 sm:px-6 lg:px-10 z-20 border-b border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-6 sm:space-y-14">
          
          {/* Top Row: 2 Unsplash Images (Left: Spa Wellness Massage, Right: Gourmet Culinary Dining) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Photo: Spa & Holistic Wellness Massage */}
            <div className="lg:col-span-6 h-[320px] sm:h-[640px] lg:h-[720px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=90"
                alt="Holistic spa wellness massage therapy experience"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Photo: Gourmet Organic Culinary Dining */}
            <div className="lg:col-span-6 h-[260px] sm:h-[500px] lg:h-[580px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=90"
                alt="Gourmet organic culinary dining presentation"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>

          {/* Bottom Headline Text (Matching Reference Screenshot 2) */}
          <div className="max-w-7xl">
            <h2 className="font-sans font-extralight text-xl sm:text-4xl lg:text-[3.1rem] text-[#1F1D1A] tracking-tighter leading-[1.18] uppercase">
              FROM INCLUDED CONCIERGE SERVICES TO ON-DEMAND PRIVATE CHEFS, EXPERIENCE FIVE-STAR WELLNESS AND BESPOKE CARE FOR AN UNFORGETTABLE SANCTUARY STAY
            </h2>
          </div>

        </div>
      </section>

      {/* 2-Page Height Architectural Villa Estate Landscape Section */}
      <section
        ref={scrollImageRef}
        className="relative w-full h-[80vh] sm:h-[200vh] overflow-hidden z-20 bg-[#FAF8F5]"
      >
        <div className="parallax-nature-image relative w-full h-full transform-gpu">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90"
            alt="Expansive luxury architectural villa estate with infinity pool landscape"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>
    </>
  );
}
