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

      {/* Hero Section */}
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

            {/* Overlaid Calla Lily / Anthurium Flower Line-Art Sticker Badge */}
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
            
            {/* Top Headline */}
            <div className="pt-2">
              <h1
                ref={headlineRef}
                className="font-sans font-extralight text-4xl sm:text-6xl lg:text-[4.5rem] text-[#1F1D1A] tracking-tight leading-[1.08] uppercase"
              >
                THE COMFORT OF HOME, THE SERVICES OF A 5-STAR HOTEL
              </h1>
            </div>

            {/* Multi-Page Tall Image */}
            <div
              ref={mainImageRef}
              className="relative w-full h-[850px] sm:h-[1200px] lg:h-[1450px] rounded-none overflow-hidden shadow-2xl bg-neutral-200"
            >
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2400&q=90"
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

      {/* Page 3: Centered Statement */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-24 sm:py-32 px-6 border-t border-[#1F1D1A]/10">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif font-light text-4xl sm:text-6xl lg:text-7xl text-[#1F1D1A] tracking-tight leading-tight">
            Crafting unique moments for an <span className="italic font-normal">unforgettable getaway.</span>
          </h2>
        </div>
      </section>

      {/* Page 4: 2-Page Height Overhead Pool & Terrace Image */}
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

      {/* Page 4: Dedicated Concierge Statement */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pt-20 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-12">
          <div className="max-w-6xl">
            <p className="font-sans font-extralight text-2xl sm:text-4xl lg:text-[3.4rem] text-[#1F1D1A] tracking-tight leading-[1.2]">
              Each of our villas provides a dedicated concierge service ensuring personalized experiences and attentive care.
            </p>
          </div>

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

      {/* Page 5: Dual Dining & Pool Photos with Hand-Drawn Lotus Flower Sticker */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pb-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Photo */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[650px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
              alt="Indoor dining table with rattan chairs and woven pendant lights"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Overlaid Hand-Drawn Lotus Flower Line-Art Sticker Badge */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-44 sm:h-44 pointer-events-none z-30">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.8]" viewBox="0 0 100 100">
                <path d="M50 85 C35 70, 20 50, 30 25 C40 10, 50 20, 50 35 C50 20, 60 10, 70 25 C80 50, 65 70, 50 85 Z" />
                <path d="M50 85 C20 75, 10 55, 15 35 C20 20, 35 30, 42 45" />
                <path d="M50 85 C80 75, 90 55, 85 35 C80 20, 65 30, 58 45" />
              </svg>
            </div>
          </div>

          {/* Right Top Photo */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85"
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

      {/* Segment: WAY MORE THAN YOU CAN EXPECT */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 relative h-[480px] sm:h-[620px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"
              alt="Villa entrance wooden door with tropical walkway"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between space-y-12">
            <div>
              <h2 className="font-sans font-extralight text-4xl sm:text-6xl lg:text-[4.5rem] text-[#1F1D1A] tracking-tight leading-[1.08] uppercase">
                WAY MORE THAN YOU CAN EXPECT
              </h2>
            </div>

            <div className="flex justify-end pt-12">
              <div className="inline-flex flex-col items-end group cursor-pointer">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1F1D1A]">
                  INCLUDED SERVICES
                </span>
                <svg className="w-44 h-2 mt-1 stroke-[#1F1D1A] fill-none stroke-[2]" viewBox="0 0 160 10">
                  <path d="M 0 5 Q 20 0, 40 5 T 80 5 T 120 5 T 160 5" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Page Parallax Macaw */}
      <section className="relative w-full h-[200vh] overflow-hidden z-20 bg-[#FAF8F5]">
        <div className="parallax-nature-image relative w-full h-full transform-gpu">
          <Image
            src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=2400&q=90"
            alt="Vibrant tropical Macaw parrot flying in lush green rainforest"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
