'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Sparkles, CheckCircle, ShieldCheck, PhoneCall, Utensils, Heart, Car, Compass } from 'lucide-react';

export default function ServicesPage() {
  const pageRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Automatic GSAP Entrance Animation from DOWN (NO ScrollTrigger!)
  useGSAP(
    () => {
      if (!mainImageRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Headline fades in
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        );
      }

      // Left vertical vanity photo slides up
      if (leftImageRef.current) {
        tl.fromTo(
          leftImageRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          '-=0.8'
        );
      }

      // Big multi-page tall image slides up from DOWN automatically on load / refresh / click
      tl.fromTo(
        mainImageRef.current,
        { yPercent: 35, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.4 },
        '-=1.0'
      );
    },
    { scope: pageRef }
  );

  return (
    <main ref={pageRef} className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A]">
      <Navbar />

      {/* Hero Section: Matching Reference Screenshots 1 & 2 */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Bathroom/Vanity Photo with Calla Lily Line-Art Sticker Badge */}
          <div
            ref={leftImageRef}
            className="lg:col-span-4 relative h-[480px] sm:h-[620px] rounded-none overflow-hidden shadow-2xl bg-neutral-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury hotel bath vanity"
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            {/* Overlaid Calla Lily / Anthurium Flower Line-Art Sticker Badge (Matching Screenshot 1) */}
            <div className="absolute top-2 -right-4 w-32 h-32 sm:w-44 sm:h-44 pointer-events-none z-20">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.8]" viewBox="0 0 100 100">
                <path d="M45 85 C40 60, 35 40, 50 15 C65 25, 75 45, 60 70 Z" />
                <path d="M50 15 C55 30, 52 45, 48 60" />
                <circle cx="50" cy="22" r="3" fill="black" />
              </svg>
            </div>
          </div>

          {/* Right Column: Sweeping Headline + Multi-Page Tall Poolside Dining Image Container */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            
            {/* Top Headline: Matching Screenshot 1 */}
            <div className="pt-2">
              <h1
                ref={headlineRef}
                className="font-sans font-extralight text-4xl sm:text-6xl lg:text-[4.5rem] text-[#1F1D1A] tracking-tight leading-[1.08] uppercase"
              >
                THE COMFORT OF HOME, THE SERVICES OF A 5-STAR HOTEL
              </h1>
            </div>

            {/* Multi-Page Tall Image (Extends Down 2 Pages - Matching Screenshot 1 & 2) */}
            <div
              ref={mainImageRef}
              className="relative w-full h-[850px] sm:h-[1200px] lg:h-[1450px] rounded-none overflow-hidden shadow-2xl bg-neutral-200"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
                alt="Tropical poolside villa dining table with woven rattan pendant lights"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Page 3: Centered Statement (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-24 sm:py-32 px-6 border-t border-[#1F1D1A]/10">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif font-light text-4xl sm:text-6xl lg:text-7xl text-[#1F1D1A] tracking-tight leading-tight">
            Crafting unique moments for an <span className="italic font-normal">unforgettable getaway.</span>
          </h2>
        </div>
      </section>

      {/* Page 4: 2-Page Height Overhead Pool & Terrace Image (Matching Reference Screenshot 2) */}
      <section className="relative w-full h-[200vh] overflow-hidden z-20 bg-[#FAF8F5]">
        <div className="parallax-nature-image relative w-full h-full transform-gpu">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=90"
            alt="Overhead view of architectural pool terrace and dining area"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Page 4: Dedicated Concierge Statement & Wavy Line Label (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pt-20 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-12">
          
          {/* Sweeping Thin Editorial Paragraph Text */}
          <div className="max-w-6xl">
            <p className="font-sans font-extralight text-2xl sm:text-4xl lg:text-[3.4rem] text-[#1F1D1A] tracking-tight leading-[1.2]">
              Each of our villas provides a dedicated concierge service ensuring personalized experiences and attentive care.
            </p>
          </div>

          {/* Right-Aligned Label with SVG Wavy Line (Matching Screenshot 1) */}
          <div className="flex justify-end pt-4">
            <div className="inline-flex flex-col items-end group cursor-pointer">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1F1D1A]">
                ALL CONCIERGE SERVICES
              </span>
              <svg className="w-48 h-2 mt-1 stroke-[#1F1D1A] fill-none stroke-[2]" viewBox="0 0 170 10">
                <path d="M 0 5 Q 20 0, 40 5 T 80 5 T 120 5 T 170 5" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Page 5: Dual Dining & Pool Photos with Hand-Drawn Lotus Flower Sticker (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pb-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Photo: Indoor Dining Room & Kitchen with Overlaid Lotus Flower Sticker */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[650px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
              alt="Indoor dining table with rattan chairs and woven pendant lights"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Overlaid Hand-Drawn Lotus Flower Line-Art Sticker Badge (Matching Screenshot 2) */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-44 sm:h-44 pointer-events-none z-30">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.8]" viewBox="0 0 100 100">
                <path d="M50 85 C35 70, 20 50, 30 25 C40 10, 50 20, 50 35 C50 20, 60 10, 70 25 C80 50, 65 70, 50 85 Z" />
                <path d="M50 85 C20 75, 10 55, 15 35 C20 20, 35 30, 42 45" />
                <path d="M50 85 C80 75, 90 55, 85 35 C80 20, 65 30, 58 45" />
              </svg>
            </div>
          </div>

          {/* Right Top Photo: Outdoor Pool Terrace */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85"
              alt="Turquoise outdoor pool terrace with sun loungers"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* Page 6: Tailored Concierge Service Offerings */}
      <section className="relative w-full bg-[#F1EBE4] text-[#1F1D1A] py-24 px-6 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="mx-auto max-w-7xl space-y-16">
          
          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
              Dedicated Staff & Hospitality
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-5xl lg:text-6xl text-[#1F1D1A] tracking-tight leading-tight">
              Each of our villas is served by a dedicated house manager, private chef, and 24/7 concierge.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#1F1D1A]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">Private Chef & Dining</h3>
              <p className="text-sm text-[#615C55] leading-relaxed">
                Custom meal preparation with organic farm-to-table ingredients, wine pairings, and poolside barbecues.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#1F1D1A]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">Holistic Spa Therapies</h3>
              <p className="text-sm text-[#615C55] leading-relaxed">
                In-villa massage treatments, sound baths, yoga sessions, and circadian wellness rituals.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#1F1D1A]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">Chauffeured Transfers</h3>
              <p className="text-sm text-[#615C55] leading-relaxed">
                Seamless airport pickup in luxury EV SUVs with wheelchair accessibility and private luggage escort.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#1F1D1A]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">24/7 Estate Concierge</h3>
              <p className="text-sm text-[#615C55] leading-relaxed">
                Dedicated personal manager available around the clock to organize excursions, boat charters, and reservations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Page 9: Top Right Tropical Palm Image (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pt-16 sm:pt-24 pb-8 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Top Right Image Container: Tropical Monstera / Elephant Ear Leaves */}
          <div className="lg:col-span-4 lg:col-start-9 relative h-[260px] sm:h-[360px] rounded-none overflow-hidden shadow-xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=85"
              alt="Lush green tropical elephant ear palm leaves"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

        </div>
      </section>

      {/* Page 10: Macro Butterfly Photo with Hand-Drawn Fern Line-Art Sticker (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pb-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 lg:col-start-5 relative h-[480px] sm:h-[650px] lg:h-[750px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&w=2000&q=85"
              alt="Macro view of exotic owl butterfly resting on vivid green tropical leaf"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />

            {/* Overlaid Hand-Drawn Twin Fern / Palm Frond Line-Art Sticker Badge (Matching Screenshot 2) */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-32 h-44 sm:w-44 sm:h-56 pointer-events-none z-30">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.8]" viewBox="0 0 100 120">
                {/* Fern Frond 1 */}
                <path d="M40 100 C35 70, 45 40, 55 15 C55 35, 45 60, 40 100 Z" />
                <path d="M48 30 C30 25, 20 20, 15 15 M48 30 C65 25, 75 20, 80 15" />
                <path d="M46 50 C25 45, 15 40, 10 35 M46 50 C68 45, 78 40, 85 35" />
                <path d="M44 70 C22 65, 12 60, 8 55 M44 70 C70 65, 80 60, 88 55" />
                {/* Fern Frond 2 */}
                <path d="M30 110 C25 85, 30 60, 35 40" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Page 11: Twilight Evening Star Section */}
      <section className="relative w-full bg-[#0F2342] text-white py-28 sm:py-36 px-4 sm:px-8 lg:px-12 z-20 overflow-hidden">
        {/* Floating Star Sparkle Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <span className="absolute top-12 left-1/4 text-white text-xs animate-pulse">★</span>
          <span className="absolute top-20 right-1/3 text-white text-sm animate-ping">✦</span>
          <span className="absolute bottom-16 left-1/3 text-white text-xs animate-pulse">★</span>
          <span className="absolute bottom-24 right-1/4 text-white text-sm">✦</span>
          <span className="absolute top-1/3 left-16 text-white text-xs">★</span>
          <span className="absolute top-1/2 right-16 text-white text-sm animate-pulse">✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          <h3 className="font-serif font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            Enjoy dining <span className="italic font-normal">under the stars.</span>
          </h3>
        </div>
      </section>

      {/* Page 12: 2-Page Height Evening Illuminated Pool Terrace Image */}
      <section className="relative w-full h-[200vh] overflow-hidden z-20 bg-[#0F2342]">
        <div className="parallax-nature-image relative w-full h-full transform-gpu">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90"
            alt="Illuminated evening villa pool terrace with starlight reflections"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Page 13: Submenu Footer */}
      <Footer />
    </main>
  );
}
