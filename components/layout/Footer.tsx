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
    { label: 'EXPERIENCES', href: '/experiences' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'BOOK NOW', href: '/#schedule-walkthrough', isButton: true },
  ];


}
