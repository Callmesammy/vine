'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'VILLA ORCHARD', href: '/residences/orchard-villa' },
    { label: 'VILLA MEADOW', href: '/residences/meadow-estate' },
    { label: 'VILLA PALMA', href: '/residences/palma-residence' },
    { label: 'VILLA SOLIS', href: '/residences/solis-estate' },
    { label: 'VILLA LUNA', href: '/residences/luna-residence' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT', href: '/contact', isBold: true },
  ];

  return (
    <footer className="w-full bg-[#FAF8F5] text-[#1F1D1A] py-24 sm:py-36 px-6 border-t border-[#1F1D1A]/10 flex flex-col justify-between items-center text-center">
      {/* Centered Submenu Vertical Stack */}
      <div className="flex flex-col items-center space-y-3 sm:space-y-4 my-auto max-w-2xl">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          if (link.isBold) {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="pt-4 min-h-[48px] inline-flex items-center justify-center font-sans font-black text-2xl sm:text-4xl text-[#1F1D1A] uppercase tracking-widest hover:text-[#C85A32] transition-colors"
              >
                {link.label}
              </Link>
            );
          }

          return (
            <div key={link.label}>
              <Link
                href={link.href}
                className={`font-sans font-extralight text-xl sm:text-3xl lg:text-[2.2rem] uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? 'text-[#C85A32] font-normal scale-105'
                    : 'text-[#615C55] hover:text-[#1F1D1A]'
                }`}
              >
                {link.label}
              </Link>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
