'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROPERTIES } from '@/lib/data/properties';
import { useMenuStore } from '@/lib/store/useMenuStore';
import { Bed, Bath, Maximize2, Cpu } from 'lucide-react';

export function SubmenuPreviewCard() {
  const { activePreviewSlug, closeMenu } = useMenuStore();
  const property = PROPERTIES.find((p) => p.slug === activePreviewSlug) || PROPERTIES[0];

  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#FAF8F5] p-6 shadow-xl border border-[#1F1D1A]/10 transition-all duration-500">
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={property.mainImage}
          alt={property.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          sizes="(max-width: 768px) 100vw, 384px"
        />
        <div className="absolute top-3 left-3 rounded-full bg-[#1F1D1A]/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-[#FAF8F5]">
          {property.status}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-serif text-2xl font-semibold text-[#1F1D1A]">
          {property.name}
        </h4>
        <p className="mt-1 text-sm text-[#615C55] line-clamp-2 leading-relaxed">
          {property.tagline}
        </p>
      </div>

      {/* Property Specs Grid */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-y border-[#1F1D1A]/10 py-3 text-xs text-[#1F1D1A]">
        <div className="flex flex-col items-center justify-center p-1">
          <Bed className="h-4 w-4 text-[#C85A32] mb-1" />
          <span className="font-semibold">{property.bedrooms} Beds</span>
        </div>
        <div className="flex flex-col items-center justify-center p-1 border-x border-[#1F1D1A]/10">
          <Bath className="h-4 w-4 text-[#C85A32] mb-1" />
          <span className="font-semibold">{property.bathrooms} Baths</span>
        </div>
        <div className="flex flex-col items-center justify-center p-1">
          <Maximize2 className="h-4 w-4 text-[#C85A32] mb-1" />
          <span className="font-semibold">{property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>

      {/* Automation Highlights */}
      <div className="mt-3 flex items-start gap-2 text-xs text-[#615C55]">
        <Cpu className="h-4 w-4 text-[#C85A32] shrink-0 mt-0.5" />
        <span className="line-clamp-1">{property.automationTier}</span>
      </div>

      <div className="mt-5">
        <Link
          href={`/residences/${property.slug}`}
          onClick={closeMenu}
          className="inline-flex min-h-[48px] min-w-[48px] w-full items-center justify-center rounded-full bg-[#C85A32] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B34923] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
        >
          View Residence & Specs
        </Link>
      </div>
    </div>
  );
}
