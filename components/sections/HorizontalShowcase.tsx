'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { ArrowRight } from 'lucide-react';

const STACKED_SHOWCASE_PROPERTIES = [
  {
    id: 'orchard',
    titlePrefix: 'Villa',
    name: 'ORCHARD',
    bgColor: '#2B1B54',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=90',
    specs: 'Single-level 3,400 sq ft sanctuary with 3 bedrooms, 3.5 baths, heated infinity pool & zero-threshold terrace transitions.',
    slug: 'orchard-villa',
  },
  {
    id: 'meadow',
    titlePrefix: 'Villa',
    name: 'MEADOW',
    bgColor: '#7A2D19',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90',
    specs: 'Spacious 4,200 sq ft single-story pavilion embracing circadian voice climate control & zero-step garden access.',
    slug: 'meadow-estate',
  },
  {
    id: 'palma',
    titlePrefix: 'Villa',
    name: 'PALMA',
    bgColor: '#1C3D2B',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=90',
    specs: 'Serene 3,800 sq ft ocean-view villa with ambient fall safeguards, circadian lighting & private olive courtyard.',
    slug: 'palma-residence',
  },
  {
    id: 'solis',
    titlePrefix: 'Villa',
    name: 'SOLIS',
    bgColor: '#663D14',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90',
    specs: 'Modernist 4,500 sq ft architectural estate with automated glass portals and quiet acoustic soundproofing.',
    slug: 'solis-estate',
  },
  {
    id: 'luna',
    titlePrefix: 'Villa',
    name: 'LUNA',
    bgColor: '#132438',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=90',
    specs: 'Ultra-private 5,100 sq ft hillside residence with intuitive wellness sanctuary & zero-barrier ergonomics.',
    slug: 'luna-residence',
  },
];

export function HorizontalShowcase() {
  const pinSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!pinSectionRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const cards = gsap.utils.toArray<HTMLElement>('.stacked-villa-slide');
      if (cards.length <= 1) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: () => `+=${(cards.length - 1) * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.fromTo(
          card,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: 'none',
          },
          index - 1
        );
      });
    },
    { scope: pinSectionRef }
  );

  return (
    <section id="showcase" className="relative w-full overflow-visible bg-[#FAF8F5] z-30">
      
      {/* GSAP Pinned Container for 5 Villa Slides */}
      <div ref={pinSectionRef} className="relative h-screen w-full overflow-hidden">
        {STACKED_SHOWCASE_PROPERTIES.map((property, index) => (
          <div
            key={property.id}
            className="stacked-villa-slide absolute inset-0 h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-12 pt-16 sm:pt-8 pb-4 overflow-hidden shadow-2xl transition-colors"
            style={{
              backgroundColor: property.bgColor,
              zIndex: 10 + index,
            }}
          >
            {/* Top Row: Left Image + Top Right Description & DISCOVER CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start flex-1 pt-2 sm:pt-10">
              
              {/* Left Column: Tall Vertical Villa Photography */}
              <div className="lg:col-span-5 h-[34vh] sm:h-[54vh] lg:h-[58vh] relative overflow-hidden rounded-none shadow-2xl">
                <Image
                  src={property.image}
                  fill
                  unoptimized
                  className="object-cover"
                  alt={`${property.titlePrefix} ${property.name}`}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Right Column: Top Right Specs & DISCOVER Link */}
              <div className="lg:col-span-7 lg:pl-8 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4 sm:space-y-6 pt-1 text-white">
                <p className="font-sans font-light text-xs sm:text-base lg:text-lg leading-relaxed max-w-md opacity-90">
                  {property.specs}
                </p>

                <Link
                  href={`/residences/${property.slug}`}
                  className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase border-b-2 border-white pb-1.5 hover:border-[#FAF8F5] hover:opacity-80 transition-all text-white"
                >
                  <span>DISCOVER</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Bottom Typography: Villa in Line Serif + NAME in Huge White Bold Sans */}
            <div className="w-full relative z-10 pb-2 pt-2">
              <div className="relative flex flex-nowrap items-baseline justify-between w-full whitespace-nowrap overflow-visible text-white">
                
                {/* Villa - Outline Line Font */}
                <span className="font-serif text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] sm:[-webkit-text-stroke:2.5px_#FFFFFF] lg:[-webkit-text-stroke:3.5px_#FFFFFF] text-[9.5vw] sm:text-[10.5vw] lg:text-[11.5vw] font-light tracking-wider select-none leading-none">
                  {property.titlePrefix}
                </span>

                {/* NAME - Huge White Bold Text */}
                <span className="font-sans text-[10vw] sm:text-[11.5vw] lg:text-[12.8vw] font-black tracking-tighter text-[#FAF8F5] leading-none">
                  {property.name}
                </span>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Continuation Section (Unpinned, continues scrolling naturally into lower sections) */}
      <div className="relative w-full bg-[#FAF8F5] pt-6 sm:pt-20 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-12 z-40">
        
        {/* Big Aerial Ocean Photo Overlapping Top Background + Mini Leaf Sticker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Aerial Coastal Landscape Image + Mini Leaf Sticker */}
          <div className="lg:col-span-9 relative">
            <div className="relative w-full h-[35vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden rounded-none shadow-2xl -mt-12 sm:-mt-36 lg:-mt-48 z-10 bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90"
                alt="Aerial coastal sanctuary between turquoise ocean and tropical rainforest"
                fill
                unoptimized
                className="object-cover"
                sizes="75vw"
              />
            </div>

            {/* Mini Leaf Line-Art Sticker Badge */}
            <div className="absolute -top-16 sm:-top-44 lg:-top-56 right-2 sm:right-8 lg:right-12 w-16 h-16 sm:w-36 sm:h-36 bg-[#FAF8F5] p-2 sm:p-3 rounded-full shadow-2xl z-30 flex items-center justify-center border border-[#1F1D1A]/10">
              <svg className="w-full h-full stroke-[#1F1D1A] fill-none stroke-[1.2]" viewBox="0 0 100 100">
                <path d="M50 10 C25 25, 20 60, 50 90 M50 10 C75 25, 80 60, 50 90" />
                <path d="M50 10 L50 90" strokeDasharray="3 3" />
                <path d="M50 30 C35 35, 30 45, 25 50 M50 30 C65 35, 70 45, 75 50" />
                <path d="M50 50 C35 55, 30 65, 25 70 M50 50 C65 55, 70 65, 75 70" />
                <path d="M50 70 C40 73, 35 80, 30 83 M50 70 C60 73, 65 80, 70 83" />
              </svg>
            </div>
          </div>

        </div>

        {/* Bottom Row: Sweeping Expanded Headline Text + Right Architectural Detail Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mt-4 sm:mt-6">
          
          {/* Sweeping Expanded Headline Text */}
          <div className="lg:col-span-8">
            <h2 className="font-sans font-extralight text-2xl sm:text-3xl lg:text-[2.6rem] text-[#1F1D1A] tracking-tight leading-[1.25] uppercase">
              BETWEEN UNSPOILED COASTAL NATURE, ERGONOMIC SANCTUARY LIVING, AND INTUITIVE SMART ARCHITECTURE—WHERE SILENT AUTOMATION HARMONIZES EFFORTLESSLY WITH TIMELESS WELL-BEING
            </h2>
          </div>

          {/* Right Bottom Architectural Detail Image */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-none overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=90"
                alt="Sunlit architectural timber terrace and olive grove courtyard detail"
                fill
                unoptimized
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
