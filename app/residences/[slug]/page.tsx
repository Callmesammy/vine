'use client';

import { use, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PROPERTIES } from '@/lib/data/properties';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ResidenceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const property = PROPERTIES.find((p) => p.slug === resolvedParams.slug);

  if (!property) {
    notFound();
  }

  const [activeHotspotId] = useState<string | null>(property.hotspots[0]?.id || null);

  const heroSectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroNameRef = useRef<HTMLHeadingElement>(null);

  // GSAP Automatic Hero Image & Text Entrance Animation on Page Load / Click / Refresh (NO ScrollTrigger!)
  useGSAP(
    () => {
      if (!heroImageRef.current || !heroSectionRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image slides smoothly into place automatically on load/refresh/click
      tl.fromTo(
        heroImageRef.current,
        { xPercent: 40, opacity: 0, scale: 0.96 },
        { xPercent: 0, opacity: 1, scale: 1, duration: 1.4, delay: 0.1 }
      );

      if (heroTitleRef.current) {
        tl.fromTo(
          heroTitleRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=1.2'
        );
      }

      if (heroNameRef.current) {
        tl.fromTo(
          heroNameRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=1.0'
        );
      }
    },
    { scope: heroSectionRef, dependencies: [resolvedParams.slug] }
  );

  // Extract short name for giant text layout (e.g. "ORCHARD", "MEADOW", "PALMA", "SOLIS", "LUNA")
  const shortName = property.name.replace(/^The\s+/, '').replace(/\s+(Villa|Estate|Residence)$/, '').toUpperCase();

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A]">
      <Navbar />

      {/* Hero Section: Right-to-Left Image Animation & Massive Villa Typography (Matching Screenshots 1 & 2) */}
      <section
        ref={heroSectionRef}
        className="relative w-full min-h-screen pt-24 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-between"
      >
        {/* Top Status & Price */}
        <div className="w-full flex items-center justify-end z-20 pb-4">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C85A32]">
            {property.status} • {property.price}
          </span>
        </div>

        {/* Center Grid: Right-Positioned Image Sliding Left on Scroll */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative z-10">
          
          {/* Main Photo Container - Starts on RIGHT and scrubs LEFT on scroll */}
          <div className="lg:col-span-8 lg:col-start-5 w-full">
            <div
              ref={heroImageRef}
              className="relative w-full h-[450px] sm:h-[600px] lg:h-[720px] rounded-none overflow-hidden shadow-2xl bg-neutral-200"
            >
              <Image
                src={property.mainImage}
                alt={property.name}
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </div>

          {/* Right Top Line: Villa Serif Headline */}
          <div className="absolute top-0 right-4 lg:right-12 z-20 pointer-events-none">
            <h1
              ref={heroTitleRef}
              className="font-serif font-extralight text-6xl sm:text-8xl lg:text-[11rem] text-[#1F1D1A] leading-none tracking-tight"
            >
              Villa
            </h1>
          </div>

        </div>

        {/* Bottom Left Line: Massive Black Sans Residence Name (Matching Screenshot 2 "LUMA") */}
        <div className="w-full z-20 pt-6">
          <h2
            ref={heroNameRef}
            className="font-sans font-black text-6xl sm:text-9xl lg:text-[14rem] tracking-tighter leading-none text-[#1F1D1A] uppercase"
          >
            {shortName}
          </h2>
        </div>

      </section>

      {/* Section 2: Tropics / Design Showcase (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Photo: Vertical Balcony / Terrace Lounge */}
          <div className="lg:col-span-4 h-[500px] sm:h-[620px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src={property.sectionLeftImage}
              alt={`${property.name} vertical outdoor lounge`}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Right Column: Wide Horizontal Pool Photo + Sweeping Uppercase Headline (Matching Screenshot 1) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-none overflow-hidden shadow-xl bg-neutral-200">
              <Image
                src={property.sectionRightTopImage}
                alt={`${property.name} turquoise pool terrace`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Sweeping Uppercase Headline Text */}
            <div className="pt-2">
              <h3 className="font-sans font-extralight text-3xl sm:text-5xl lg:text-[4.2rem] text-[#1F1D1A] tracking-tighter leading-[1.12] uppercase max-w-5xl">
                {property.heroHeadline}
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Spec List & Pool Pavilion with Hand-Drawn Leaf Sticker (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto space-y-12">
          
          {/* Top Right Spec List (Matching Screenshot 2 Top Right Format) */}
          <div className="flex justify-end text-right">
            <div className="font-serif font-light text-xl sm:text-3xl text-[#1F1D1A] leading-relaxed space-y-1">
              <p>{property.bedrooms} rooms</p>
              <p>{property.bathrooms} bathrooms</p>
              <p>up to {property.bedrooms * 2 + 2} guests</p>
              <p>18m pool</p>
            </div>
          </div>

          {/* Bottom Pool Image with Hand-Drawn Leaf Line-Art Sticker (Matching Screenshot 2) */}
          <div className="relative w-full h-[450px] sm:h-[620px] lg:h-[720px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src={property.sectionPoolImage}
              alt={`${property.name} outdoor pool pavilion`}
              fill
              unoptimized
              className="object-cover"
              sizes="100vw"
            />

            {/* Overlaid Hand-Drawn Leaf Line-Art Sticker Badge (Matching Screenshot 2) */}
            <div className="absolute -bottom-4 left-6 sm:left-12 w-36 h-36 sm:w-48 sm:h-48 pointer-events-none z-20">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.8]" viewBox="0 0 100 100">
                <path d="M50 90 C30 70, 15 45, 25 20 C35 10, 50 15, 50 30 C50 15, 65 10, 75 20 C85 45, 70 70, 50 90 Z" />
                <line x1="50" y1="30" x2="50" y2="85" />
                <path d="M50 45 Q35 40, 30 35 M50 45 Q65 40, 70 35" />
                <path d="M50 60 Q35 55, 28 50 M50 60 Q65 55, 72 50" />
                <path d="M50 75 Q38 70, 32 66 M50 75 Q62 70, 68 66" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Page 4: Indoor-Outdoor Editorial Text & Dual Image Grid (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-12">
          
          {/* Sweeping Editorial Paragraph Text (Matching Screenshot 1 Top Text Format) */}
          <div className="max-w-6xl">
            <p className="font-sans font-light text-2xl sm:text-4xl lg:text-[3.2rem] text-[#1F1D1A] tracking-tight leading-[1.25]">
              {property.indoorOutdoorText}
            </p>
          </div>

          {/* Dual Photo Grid (Left: Villa Entrance Courtyard, Right: Water Detail) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 h-[400px] sm:h-[550px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src={property.courtyardImage}
                alt={`${property.name} outdoor courtyard`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 h-[400px] sm:h-[550px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src={property.waterDetailImage}
                alt={`${property.name} crystal water pool detail`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Page 5: Right-Aligned Lounge Terrace with Hand-Drawn Sketch Line & Sticker Badge (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-end">
          
          <div className="lg:col-span-7 lg:col-start-6 relative h-[450px] sm:h-[620px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src={property.loungeSketchImage}
              alt={`${property.name} lounge terrace detail`}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Hand-Drawn Flower Line-Art Sticker Badge */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none z-20">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.5]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="12" fill="white" />
                <path d="M50 15 C45 25, 45 35, 50 38 C55 35, 55 25, 50 15 Z" />
                <path d="M50 62 C45 65, 45 75, 50 85 C55 75, 55 65, 50 62 Z" />
                <path d="M15 50 C25 45, 35 45, 38 50 C35 55, 25 55, 15 50 Z" />
                <path d="M62 50 C65 45, 75 45, 85 50 C75 55, 65 55, 62 50 Z" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Page 6: 2-Page Height Architectural Villa Parallax Section */}
      <section className="relative w-full h-[200vh] overflow-hidden z-20 bg-[#FAF8F5]">
        <div className="parallax-nature-image relative w-full h-full transform-gpu">
          <Image
            src={property.outdoorLoungeImage}
            alt={`${property.name} expansive estate backdrop`}
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Page 7: Twilight Evening Star Section (Matching Reference Screenshot 1) */}
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
            {property.nightHeadline.split(' ').map((word, idx) =>
              word.toLowerCase().includes('stars') || word.toLowerCase().includes('twilight') || word.toLowerCase().includes('moonlit') || word.toLowerCase().includes('starlight') ? (
                <span key={idx} className="italic font-normal"> {word} </span>
              ) : (
                ` ${word}`
              )
            )}
          </h3>
        </div>
      </section>

      {/* Page 8: 2-Page Height Evening Twilight Villa Image (Matching Reference Screenshot 2) */}
      <section className="relative w-full h-[200vh] overflow-hidden z-20 bg-[#0F2342]">
        <div className="parallax-nature-image relative w-full h-full transform-gpu">
          <Image
            src={property.nightImage}
            alt={`${property.name} illuminated evening villa pool`}
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Page 9: Outdoor Lifestyle Paragraph & Wavy Line Label (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pt-20 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-12">
          
          {/* Sweeping Thin Paragraph Text */}
          <div className="max-w-6xl">
            <p className="font-sans font-extralight text-2xl sm:text-4xl lg:text-[3.4rem] text-[#1F1D1A] tracking-tight leading-[1.2]">
              {property.lifestyleText}
            </p>
          </div>

          {/* Right-Aligned Label with SVG Wavy Line (Matching Screenshot 1) */}
          <div className="flex justify-end pt-4">
            <div className="inline-flex flex-col items-end group cursor-pointer">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1F1D1A]">
                ALL OUTDOOR AMENITIES
              </span>
              <svg className="w-44 h-2 mt-1 stroke-[#1F1D1A] fill-none stroke-[2]" viewBox="0 0 160 10">
                <path d="M 0 5 Q 20 0, 40 5 T 80 5 T 120 5 T 160 5" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Page 10: Dual Side-by-Side Images with Center Flower Sticker & Giant Headline (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pb-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto space-y-12">
          
          {/* Dual Side-by-Side Images with Floating Center Flower Sticker Badge */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Image: Outdoor Lounge */}
            <div className="lg:col-span-6 h-[400px] sm:h-[550px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src={property.outdoorLoungeImage}
                alt={`${property.name} outdoor lounge chairs terrace`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Image: Indoor Luxury Living Room */}
            <div className="lg:col-span-6 h-[400px] sm:h-[550px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src={property.indoorLivingImage}
                alt={`${property.name} indoor luxury living room`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Overlaid Center Lotus Flower Line-Art Sticker Badge (Floating on the seam between images matching Screenshot 2) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 pointer-events-none z-30">
              <svg className="w-full h-full stroke-black fill-white stroke-[1.8]" viewBox="0 0 100 100">
                <path d="M50 85 C35 70, 20 50, 30 25 C40 10, 50 20, 50 35 C50 20, 60 10, 70 25 C80 50, 65 70, 50 85 Z" />
                <path d="M50 85 C20 75, 10 55, 15 35 C20 20, 35 30, 42 45" />
                <path d="M50 85 C80 75, 90 55, 85 35 C80 20, 65 30, 58 45" />
              </svg>
            </div>

          </div>

          {/* Bottom Giant Black Sans Headline (Matching Screenshot 2) */}
          <div className="pt-8">
            <h2 className="font-sans font-black text-5xl sm:text-7xl lg:text-[7.5rem] tracking-tighter leading-none text-[#1F1D1A] uppercase">
              CREATE LASTING MEMORIES
            </h2>
          </div>

        </div>
      </section>

      {/* Page 11: Living Room Paragraph & Wavy Line Label (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pt-20 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-12">
          
          {/* Sweeping Thin Paragraph Text */}
          <div className="max-w-6xl">
            <p className="font-sans font-extralight text-2xl sm:text-4xl lg:text-[3.4rem] text-[#1F1D1A] tracking-tight leading-[1.2]">
              {property.livingRoomText}
            </p>
          </div>

          {/* Right-Aligned Label with SVG Wavy Line (Matching Screenshot 1) */}
          <div className="flex justify-end pt-4">
            <div className="inline-flex flex-col items-end group cursor-pointer">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1F1D1A]">
                ABOUT THE LIVING ROOM
              </span>
              <svg className="w-48 h-2 mt-1 stroke-[#1F1D1A] fill-none stroke-[2]" viewBox="0 0 170 10">
                <path d="M 0 5 Q 20 0, 40 5 T 80 5 T 120 5 T 170 5" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Page 12: Full-Width High-Ceiling Luxury Interior Living Room Photo (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pb-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto">
          <div className="relative w-full h-[550px] sm:h-[700px] lg:h-[820px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src={property.livingRoomImage}
              alt={`${property.name} high-ceiling living room interior`}
              fill
              unoptimized
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Page 13: Bedrooms Editorial Intro & Right-Positioned Bed Photo (Matching Reference Screenshot 1) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#1F1D1A]/10">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Right Top Image Container */}
          <div className="lg:col-span-7 lg:col-start-6 relative h-[420px] sm:h-[550px] rounded-none overflow-hidden shadow-2xl bg-neutral-200">
            <Image
              src={property.bedroomDetailImage}
              alt={`${property.name} luxury bed frame detail`}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Bottom Left Paragraph Text */}
          <div className="lg:col-span-8 lg:col-start-1 pt-6">
            <p className="font-sans font-extralight text-2xl sm:text-4xl lg:text-[3.2rem] text-[#1F1D1A] tracking-tight leading-[1.25]">
              {property.bedroomText}
            </p>
          </div>

        </div>
      </section>

      {/* Page 14: Sweetest Dreams Headline & Dual Bath/Bed Images (Matching Reference Screenshot 2) */}
      <section className="relative w-full bg-[#FAF8F5] text-[#1F1D1A] pb-24 px-4 sm:px-8 lg:px-12">
        <div className="w-full mx-auto space-y-12">
          
          {/* Top Headline */}
          <div className="max-w-5xl">
            <h3 className="font-sans font-extralight text-3xl sm:text-5xl lg:text-[4rem] text-[#1F1D1A] tracking-tight leading-tight">
              {property.dreamsText}
            </h3>
          </div>

          {/* Dual Side-by-Side Images (Left: Open-air Stone Rain Shower, Right: Canopy Bed Suite) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-6 h-[400px] sm:h-[550px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src={property.bathroomImage}
                alt={`${property.name} tropical stone rain shower`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 h-[400px] sm:h-[550px] relative rounded-none overflow-hidden shadow-2xl bg-neutral-200">
              <Image
                src={property.bedroomSuiteImage}
                alt={`${property.name} master bedroom suite canopy bed`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Page 15: Concierge Services & Private Culinary Showcase */}
      <section className="relative w-full bg-[#F1EBE4] text-[#1F1D1A] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-y border-[#1F1D1A]/10">
        <div className="w-full mx-auto space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C85A32]">
              FIVE-STAR SANCTUARY LIVING
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-5xl lg:text-6xl text-[#1F1D1A] uppercase tracking-tight leading-tight">
              BESPOKE PRIVATE CHEFS, HOLISTIC SPA THERAPIES & 24/7 DEDICATED CONCIERGE CARE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 h-[380px] sm:h-[480px] relative rounded-none overflow-hidden shadow-xl bg-neutral-200">
              <Image
                src="/images/hero/spa-wellness.jpg"
                alt="Spa massage therapy"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 h-[380px] sm:h-[480px] relative rounded-none overflow-hidden shadow-xl bg-neutral-200">
              <Image
                src="/images/hero/culinary-dining.jpg"
                alt="Private chef culinary dish"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Submenu Footer */}
      <Footer />
    </main>
  );
}
