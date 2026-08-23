'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PROPERTIES } from '@/lib/data/properties';
import { Bed, Bath, Maximize2, Cpu, ShieldCheck, ArrowRight, Filter } from 'lucide-react';

export default function ResidencesPage() {
  const [filter, setFilter] = useState<'all' | '3-bed' | '4-bed' | 'immediate'>('all');

  const filteredProperties = PROPERTIES.filter((prop) => {
    if (filter === '3-bed') return prop.bedrooms === 3;
    if (filter === '4-bed') return prop.bedrooms === 4;
    if (filter === 'immediate') return prop.status === 'Immediate Move-In';
    return true;
  });

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A] pt-32">
      <Navbar />

      {/* Catalog Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
            Architectural Residences
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-4 text-[#1F1D1A]">
            Discover single-level living.
          </h1>
          <p className="mt-4 text-xl text-[#615C55] leading-relaxed">
            Every Vine residence is pre-configured with our signature circadian lighting, zero-threshold level access, and invisible radar fall safeguards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-b border-[#1F1D1A]/10 pb-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#615C55] mr-4">
            <Filter className="h-4 w-4 text-[#C85A32]" />
            <span>Filter Residences:</span>
          </div>

          <button
            onClick={() => setFilter('all')}
            className={`min-h-[48px] inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${
              filter === 'all'
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-[#F1EBE4] text-[#1F1D1A] hover:bg-[#1F1D1A]/10'
            }`}
          >
            All Smart Homes ({PROPERTIES.length})
          </button>

          <button
            onClick={() => setFilter('3-bed')}
            className={`min-h-[48px] inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${
              filter === '3-bed'
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-[#F1EBE4] text-[#1F1D1A] hover:bg-[#1F1D1A]/10'
            }`}
          >
            3 Bedrooms
          </button>

          <button
            onClick={() => setFilter('4-bed')}
            className={`min-h-[48px] inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${
              filter === '4-bed'
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-[#F1EBE4] text-[#1F1D1A] hover:bg-[#1F1D1A]/10'
            }`}
          >
            4 Bedrooms
          </button>

          <button
            onClick={() => setFilter('immediate')}
            className={`min-h-[48px] inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${
              filter === 'immediate'
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-[#F1EBE4] text-[#1F1D1A] hover:bg-[#1F1D1A]/10'
            }`}
          >
            Immediate Move-In
          </button>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="rounded-3xl bg-[#F1EBE4] p-6 border border-[#1F1D1A]/10 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Main Photo with Status Badge */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src={property.mainImage}
                    alt={property.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-[#1F1D1A]/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                    {property.status}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">
                      {property.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#C85A32]">
                      {property.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#615C55] line-clamp-2">
                    {property.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-[#FAF8F5] p-3 text-xs font-semibold text-[#1F1D1A]">
                  <div className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4 text-[#C85A32]" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-x border-[#1F1D1A]/10 px-1.5">
                    <Bath className="h-4 w-4 text-[#C85A32]" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="h-4 w-4 text-[#C85A32]" />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>

                {/* Automation Badge */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#615C55]">
                  <Cpu className="h-4 w-4 text-[#C85A32] shrink-0" />
                  <span className="line-clamp-1">{property.automationTier}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-[#1F1D1A]/10">
                <Link
                  href={`/residences/${property.slug}`}
                  className="min-h-[48px] min-w-[48px] inline-flex w-full items-center justify-between rounded-full bg-[#1F1D1A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C85A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
                >
                  <span>View Residence Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
