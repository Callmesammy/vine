'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { useMenuStore } from '@/lib/store/useMenuStore';
import { X } from 'lucide-react';

const MENU_NAV_ITEMS = [
  {
    label: 'HOME',
    href: '/',
    image: '/images/hero/hero-villa.jpg',
  },
  {
    label: 'VILLA ORCHARD',
    href: '/residences/orchard-villa',
    image: '/images/residences/orchard-main.jpg',
  },
  {
    label: 'VILLA MEADOW',
    href: '/residences/meadow-estate',
    image: '/images/residences/meadow-main.jpg',
  },
  {
    label: 'VILLA PALMA',
    href: '/residences/palma-residence',
    image: '/images/residences/palma-main.jpg',
  },
  {
    label: 'VILLA SOLIS',
    href: '/residences/solis-estate',
    image: '/images/residences/solis-main.jpg',
  },
  {
    label: 'VILLA LUNA',
    href: '/residences/luna-residence',
    image: '/images/residences/luna-main.jpg',
  },
  {
    label: 'SERVICES',
    href: '/services',
    image: '/images/hero/culinary-dining.jpg',
  },
  {
    label: 'CONTACT',
    href: '/contact',
    image: '/images/hero/values-philosophy.jpg',
    isBold: true,
  },
];

export function FullscreenMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { isOpen, closeMenu } = useMenuStore();
  const [activeImage, setActiveImage] = useState(MENU_NAV_ITEMS[0].image);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (isOpen) {
        gsap.to(containerRef.current, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.7,
          ease: 'power4.inOut',
          display: 'block',
        });

        gsap.fromTo(
          '.overlay-nav-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.04,
            duration: 0.5,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      } else {
        gsap.to(containerRef.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.5,
          ease: 'power4.inOut',
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
          },
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      style={{ clipPath: 'inset(0% 0% 100% 0%)', display: 'none' }}
      className="fixed inset-0 z-50 overflow-hidden bg-[#FAF8F5] text-[#1F1D1A]"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Full-Height Featured Image Cross-Fade on Hover */}
        <div className="hidden lg:block lg:col-span-5 relative h-full bg-neutral-900 overflow-hidden">
          {MENU_NAV_ITEMS.map((item) => (
            <Image
              key={item.label}
              src={item.image}
              alt={item.label}
              fill
              unoptimized
              className={`object-cover transition-opacity duration-500 ease-in-out ${
                activeImage === item.image ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              priority
            />
          ))}

          {/* Hand-Drawn Line-Art Flower Sticker Badge */}
          <div className="absolute bottom-12 right-10 w-24 h-24 pointer-events-none z-20">
            <svg className="w-full h-full stroke-black fill-none stroke-[1.5]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="12" fill="white" />
              <path d="M50 15 C45 25, 45 35, 50 38 C55 35, 55 25, 50 15 Z" />
              <path d="M50 62 C45 65, 45 75, 50 85 C55 75, 55 65, 50 62 Z" />
              <path d="M15 50 C25 45, 35 45, 38 50 C35 55, 25 55, 15 50 Z" />
              <path d="M62 50 C65 45, 75 45, 85 50 C75 55, 65 55, 62 50 Z" />
              <path d="M25 25 C32 32, 38 38, 41 41 C38 44, 32 50, 25 25 Z" />
              <path d="M75 75 C68 68, 62 62, 59 59 C62 56, 68 50, 75 75 Z" />
            </svg>
          </div>
        </div>

        {/* Right Column: Menu Links & Close Icon */}
        <div className="lg:col-span-7 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 relative overflow-y-auto">
          
          {/* Top Right Close Button */}
          <div className="flex justify-end w-full">
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full p-2 text-[#1F1D1A] hover:text-[#C85A32] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
            >
              <X className="h-7 w-7 stroke-[1.5]" />
            </button>
          </div>

          {/* Centered Vertical Menu Stack with Perfect Spacing */}
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <nav aria-label="Overlay Navigation" className="flex flex-col items-center space-y-2 sm:space-y-3">
              {MENU_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveImage(item.image)}
                    className={`overlay-nav-item text-xl sm:text-3xl lg:text-[2.2rem] leading-none tracking-widest uppercase transition-colors min-h-[40px] inline-flex items-center justify-center ${
                      item.isBold
                        ? 'font-sans font-black pt-2 text-[#1F1D1A] hover:text-[#C85A32]'
                        : `font-sans font-extralight ${
                            isActive || activeImage === item.image
                              ? 'text-[#C85A32]'
                              : 'text-[#1F1D1A] hover:text-[#C85A32]'
                          }`
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

        </div>

      </div>
    </div>
  );
}
