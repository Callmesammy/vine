import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PROPERTIES } from '@/lib/data/properties';
import { ArrowRight, Bed, Bath, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Luxury Residences | Vine Homes Smart Living',
  description: 'Explore the Vine Homes portfolio of single-level smart residences featuring zero-threshold indoor-outdoor transitions, circadian lighting, and ambient care.',
};

export default function ResidencesPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A] pt-28 sm:pt-36">
      <Navbar />

      {/* Hero Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32]">
            Architectural Collection
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#1F1D1A] leading-tight">
            Sanctuary residences designed for lifelong comfort & freedom.
          </h1>
          <p className="text-lg sm:text-xl text-[#615C55] font-light leading-relaxed">
            Every Vine residence combines zero-step single-level floorplans, voice-activated climate systems, and ambient health technology within private tropical sanctuaries.
          </p>
        </div>
      </section>

      {/* Residences Grid Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 pb-24 space-y-16">
        {PROPERTIES.map((property, index) => (
          <div
            key={property.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F1EBE4] rounded-3xl p-6 sm:p-10 border border-[#1F1D1A]/10 shadow-lg ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[450px] lg:h-[480px] w-full overflow-hidden rounded-2xl bg-neutral-200">
              <Image
                src={property.mainImage}
                alt={property.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute top-4 left-4 rounded-full bg-[#1F1D1A]/85 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                {property.status}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#615C55] font-medium">
                    {property.lotSize} • {property.sqft.toLocaleString()} SQFT
                  </span>
                  <span className="font-serif font-bold text-xl text-[#C85A32]">
                    {property.price}
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1A]">
                  {property.name}
                </h2>
                <p className="text-base text-[#615C55] font-light leading-relaxed">
                  {property.tagline}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 border-y border-[#1F1D1A]/10 py-4 text-xs font-medium text-[#1F1D1A]">
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

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                {property.automationHighlights.slice(0, 2).map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#615C55]">
                    <Sparkles className="h-4 w-4 text-[#C85A32] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link
                  href={`/residences/${property.slug}`}
                  className="min-h-[48px] inline-flex items-center gap-3 rounded-full bg-[#1F1D1A] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#C85A32] transition-colors"
                >
                  <span>Explore Residence Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
