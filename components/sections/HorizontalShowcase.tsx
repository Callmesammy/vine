'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import { PROPERTIES } from '@/lib/data/properties';
import { Bed, Bath, Maximize2, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function HorizontalShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !trackRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const cards = gsap.utils.toArray('.showcase-card');
      const totalWidth = (cards.length - 1) * 100;

      gsap.to(trackRef.current, {
        xPercent: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${trackRef.current?.offsetWidth || 2000}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef }
  );

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        if (e.key === 'ArrowRight') {
          window.scrollBy({ top: 300, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
          window.scrollBy({ top: -300, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#1F1D1A] text-[#FAF8F5] py-24 overflow-hidden"
    >
      {/* Header Info Bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
            Featured Smart Residences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 text-white">
            Architectural Portfolio
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#E8E2D9]">
          <span className="hidden sm:inline">Use Scroll or Arrow Keys to Explore</span>
          <div className="flex gap-2">
            <button
              onClick={() => window.scrollBy({ top: -400, behavior: 'smooth' })}
              className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C85A32] text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.scrollBy({ top: 400, behavior: 'smooth' })}
              className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C85A32] text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Track Wrapper */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 lg:px-12 w-full transition-transform ease-out"
        >
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="showcase-card flex-shrink-0 w-full sm:w-[500px] md:w-[600px] lg:w-[700px] rounded-3xl bg-[#FAF8F5] text-[#1F1D1A] p-6 lg:p-8 shadow-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom hover */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src={property.mainImage}
                    alt={property.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-[#1F1D1A]/85 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white">
                    {property.status}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-[#C85A32] px-4 py-1.5 text-xs font-bold text-white shadow-md flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span>WCAG AAA Zero-Barrier</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-3xl font-semibold text-[#1F1D1A]">
                      {property.name}
                    </h3>
                    <span className="font-serif text-xl font-bold text-[#C85A32]">
                      {property.price}
                    </span>
                  </div>
                  <p className="mt-2 text-base text-[#615C55] line-clamp-2">
                    {property.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-[#F1EBE4] p-4 text-xs font-semibold text-[#1F1D1A]">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-[#C85A32]" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2 border-x border-[#1F1D1A]/10 px-2">
                    <Bath className="h-4 w-4 text-[#C85A32]" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="h-4 w-4 text-[#C85A32]" />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  href={`/residences/${property.slug}`}
                  className="min-h-[48px] min-w-[48px] inline-flex w-full items-center justify-between rounded-full bg-[#1F1D1A] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#C85A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
                >
                  <span>View Floorplan & Tech Specs</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
