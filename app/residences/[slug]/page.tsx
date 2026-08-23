'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PROPERTIES } from '@/lib/data/properties';
import { Bed, Bath, Maximize2, ShieldCheck, Cpu, MapPin, CheckCircle, ArrowLeft, PhoneCall, Info } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ResidenceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const property = PROPERTIES.find((p) => p.slug === resolvedParams.slug);

  if (!property) {
    notFound();
  }

  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(property.hotspots[0]?.id || null);
  const activeHotspot = property.hotspots.find((h) => h.id === activeHotspotId) || property.hotspots[0];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A] pt-32">
      <Navbar />

      {/* Back Navigation Bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4">
        <Link
          href="/residences"
          className="min-h-[48px] inline-flex items-center gap-2 text-sm font-semibold text-[#615C55] hover:text-[#C85A32] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Residences</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C85A32]/10 px-4 py-1.5 text-xs font-semibold text-[#C85A32]">
              <ShieldCheck className="h-4 w-4" />
              <span>{property.status} • WCAG AAA Zero-Barrier</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-4 text-[#1F1D1A]">
              {property.name}
            </h1>
            <p className="mt-3 text-xl text-[#615C55] max-w-2xl">
              {property.tagline}
            </p>
          </div>

          <div className="rounded-2xl bg-[#F1EBE4] p-6 border border-[#1F1D1A]/10 text-right min-w-[260px]">
            <span className="text-xs uppercase tracking-wider text-[#615C55] font-semibold">Offering Price</span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C85A32] mt-1">
              {property.price}
            </div>
            <a
              href="#schedule-walkthrough"
              className="mt-4 min-h-[48px] min-w-[48px] inline-flex w-full items-center justify-center rounded-full bg-[#1F1D1A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#C85A32] transition-colors"
            >
              Schedule Private Tour
            </a>
          </div>
        </div>
      </section>

      {/* Main Image & Photo Gallery */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative h-96 sm:h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={property.mainImage}
              alt={property.name}
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            {property.gallery.slice(1, 3).map((img, idx) => (
              <div key={idx} className="relative h-44 sm:h-60 w-full overflow-hidden rounded-3xl shadow-md">
                <Image
                  src={img}
                  alt={`${property.name} detail view ${idx + 1}`}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Blueprint & Hotspot Viewer */}
      <section className="py-16 bg-[#F1EBE4] border-y border-[#1F1D1A]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
              Interactive Architectural Hotspots
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1A] mt-2">
              Explore Ambient Sensor & Ergonomics Placements
            </h2>
            <p className="mt-2 text-base text-[#615C55]">
              Click or tap the pulsating markers on the blueprint below to examine custom technology placements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Blueprint Graphic Area */}
            <div className="lg:col-span-8 relative h-96 sm:h-[450px] w-full rounded-3xl bg-[#FAF8F5] p-6 border border-[#1F1D1A]/15 shadow-inner overflow-hidden flex flex-col justify-between">
              {/* Grid Background Lines to Simulate Blueprint */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#1F1D1A 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 flex justify-between items-center text-xs font-mono font-semibold text-[#615C55]">
                <span>ARCHITECTURAL SCHEMATIC :: {property.name.toUpperCase()}</span>
                <span>SCALE: 1/4&quot; = 1&apos;0&quot;</span>
              </div>

              {/* Hotspot Markers Overlay */}
              <div className="relative h-full w-full my-4">
                {property.hotspots.map((hotspot) => {
                  const isActive = hotspot.id === activeHotspotId;

                  return (
                    <button
                      key={hotspot.id}
                      onClick={() => setActiveHotspotId(hotspot.id)}
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${
                        isActive
                          ? 'bg-[#C85A32] text-white scale-125 z-20 shadow-lg ring-4 ring-[#C85A32]/30'
                          : 'bg-[#1F1D1A] text-white hover:bg-[#C85A32] z-10'
                      }`}
                      aria-label={`Hotspot: ${hotspot.title}`}
                    >
                      <span className="h-3 w-3 rounded-full bg-white animate-ping absolute inset-1.5" />
                      <Info className="h-5 w-5 relative z-10" />
                    </button>
                  );
                })}
              </div>

              <div className="relative z-10 text-xs text-[#615C55]">
                Click markers to view placement specifics
              </div>
            </div>

            {/* Hotspot Info Panel */}
            <div className="lg:col-span-4 rounded-3xl bg-[#FAF8F5] p-8 border border-[#1F1D1A]/10 shadow-lg space-y-6">
              {activeHotspot ? (
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#C85A32]/10 px-3 py-1 text-xs font-semibold text-[#C85A32] uppercase">
                    <span>{activeHotspot.category} System</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A] mt-4">
                    {activeHotspot.title}
                  </h3>
                  <p className="mt-3 text-base text-[#615C55] leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-[#615C55]">Select a marker on the blueprint viewer.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Highlights Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Detailed Spec Table */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-serif text-3xl font-semibold text-[#1F1D1A]">
              Architectural & Tech Specs
            </h3>

            <div className="rounded-2xl border border-[#1F1D1A]/10 overflow-hidden bg-[#FAF8F5] shadow-sm">
              <table className="w-full text-left text-base text-[#1F1D1A]">
                <tbody>
                  {property.specs.map((spec, idx) => (
                    <tr
                      key={spec.label}
                      className={idx % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-[#F1EBE4]/60'}
                    >
                      <th className="py-4 px-6 font-semibold text-[#615C55] w-1/2">{spec.label}</th>
                      <td className="py-4 px-6 font-semibold text-[#1F1D1A]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Automation Highlights */}
            <div className="space-y-4 pt-4">
              <h4 className="font-serif text-2xl font-semibold text-[#1F1D1A]">
                Included Smart Automation Suite
              </h4>
              <ul className="space-y-3">
                {property.automationHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-base text-[#1F1D1A]">
                    <CheckCircle className="h-5 w-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Schedule Private Walkthrough Sidebar Form */}
          <div id="schedule-walkthrough" className="lg:col-span-5 rounded-3xl bg-[#F1EBE4] p-8 border border-[#1F1D1A]/10 shadow-lg space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">
              Book Private Walkthrough
            </h3>
            <p className="text-sm text-[#615C55]">
              Schedule an in-person or virtual accessibility tour of {property.name}.
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Walkthrough request submitted!'); }}>
              <div>
                <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Margaret Sterling"
                  className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-2 text-base text-[#1F1D1A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">Telephone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="(800) 555-0199"
                  className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-2 text-base text-[#1F1D1A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">Tour Preference</label>
                <select className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-2 text-base text-[#1F1D1A]">
                  <option value="in-person">In-Person Private Walkthrough</option>
                  <option value="virtual">Virtual Live Concierge Guided Tour</option>
                </select>
              </div>

              <button
                type="submit"
                className="min-h-[48px] min-w-[48px] inline-flex w-full items-center justify-center rounded-full bg-[#C85A32] px-6 py-4 text-base font-semibold text-white hover:bg-[#B34923] transition-colors"
              >
                Confirm Tour Schedule
              </button>
            </form>

            <div className="pt-4 border-t border-[#1F1D1A]/10 flex items-center justify-between text-xs text-[#615C55]">
              <span className="flex items-center gap-1">
                <PhoneCall className="h-4 w-4 text-[#C85A32]" />
                Direct Hotline: (800) 555-VINE
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
