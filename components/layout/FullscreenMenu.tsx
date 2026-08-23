'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { useMenuStore } from '@/lib/store/useMenuStore';
import { SubmenuPreviewCard } from './SubmenuPreviewCard';
import { PROPERTIES } from '@/lib/data/properties';
import { X, ChevronRight, PhoneCall } from 'lucide-react';

const MENU_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Residences', href: '/residences', hasSubmenu: true },
  { label: 'About Us', href: '/about' },
  { label: 'Terms & Privacy', href: '/terms' },
];

export function FullscreenMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { isOpen, closeMenu, activePreviewSlug, setActivePreviewSlug } = useMenuStore();
  const [showSubmenuDrawer, setShowSubmenuDrawer] = useState(false);

  // GSAP Curtain Reveal Animation
  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (isOpen) {
        gsap.to(containerRef.current, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.8,
          ease: 'power4.inOut',
          display: 'block',
        });

        gsap.fromTo(
          '.menu-nav-item',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
      } else {
        gsap.to(containerRef.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.6,
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

  // Keyboard escape listener for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  // Lock body scroll when menu is open
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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF8F5] text-[#1F1D1A]"
    >
      {/* Header Bar inside Curtain */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          className="min-h-[48px] min-w-[48px] inline-flex items-center text-2xl font-bold tracking-widest font-serif text-[#1F1D1A]"
        >
          VINE
        </Link>

        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#1F1D1A]/5 p-3 text-[#1F1D1A] transition-colors hover:bg-[#C85A32] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main Menu Grid Layout */}
      <div
        ref={menuContentRef}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-8 lg:grid-cols-12 lg:px-12 lg:py-16"
      >
        {/* Navigation Links Column */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <nav aria-label="Main Navigation" className="flex flex-col space-y-4">
            {MENU_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <div
                  key={link.label}
                  className="menu-nav-item border-b border-[#1F1D1A]/10 pb-4"
                  onMouseEnter={() => {
                    if (link.hasSubmenu) {
                      setShowSubmenuDrawer(true);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`min-h-[48px] inline-flex items-center font-serif text-3xl font-medium transition-colors hover:text-[#C85A32] md:text-5xl ${
                        isActive ? 'text-[#C85A32] font-semibold' : 'text-[#1F1D1A]'
                      }`}
                    >
                      {link.label}
                    </Link>

                    {link.hasSubmenu && (
                      <button
                        onClick={() => setShowSubmenuDrawer(!showSubmenuDrawer)}
                        className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#1F1D1A]/5 px-4 py-2 text-sm font-medium text-[#1F1D1A] hover:bg-[#C85A32] hover:text-white transition-colors"
                        aria-label="Toggle Residences Preview"
                      >
                        <ChevronRight
                          className={`h-5 w-5 transition-transform duration-300 ${
                            showSubmenuDrawer ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu Residences Quick Links */}
                  {link.hasSubmenu && showSubmenuDrawer && (
                    <div className="mt-4 pl-4 flex flex-col space-y-2 border-l-2 border-[#C85A32]">
                      {PROPERTIES.map((prop) => (
                        <Link
                          key={prop.id}
                          href={`/residences/${prop.slug}`}
                          onClick={closeMenu}
                          onMouseEnter={() => setActivePreviewSlug(prop.slug)}
                          className={`min-h-[48px] inline-flex items-center text-lg transition-colors ${
                            activePreviewSlug === prop.slug
                              ? 'text-[#C85A32] font-semibold'
                              : 'text-[#615C55] hover:text-[#1F1D1A]'
                          }`}
                        >
                          {prop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Concierge & Direct Contact Footer inside Menu */}
          <div className="mt-12 menu-nav-item rounded-2xl bg-[#F1EBE4] p-6 border border-[#1F1D1A]/10">
            <h5 className="font-serif text-lg font-semibold text-[#1F1D1A]">
              Direct VIP Concierge Line
            </h5>
            <p className="mt-1 text-sm text-[#615C55]">
              Dedicated human support for private consultations and accessibility walkthroughs.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="tel:8005558463"
                className="min-h-[48px] min-w-[48px] inline-flex items-center gap-2 rounded-full bg-[#1F1D1A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C85A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
              >
                <PhoneCall className="h-4 w-4" />
                (800) 555-VINE
              </a>
            </div>
          </div>
        </div>

        {/* Right Desktop Submenu Preview Drawer */}
        <div className="hidden lg:col-span-6 lg:flex lg:items-center lg:justify-center menu-nav-item">
          <SubmenuPreviewCard />
        </div>
      </div>
    </div>
  );
}
