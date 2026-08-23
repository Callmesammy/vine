'use client';

import Link from 'next/link';
import { PhoneCall, ShieldCheck, ArrowUpRight, Globe, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F1D1A] text-[#FAF8F5] pt-20 pb-12 border-t border-[#FAF8F5]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Ethos Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-widest font-serif text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
            >
              VINE
            </Link>
            <p className="mt-4 max-w-md text-lg text-[#E8E2D9] leading-relaxed">
              Living, effortlessly supported. We build luxury single-level residences where smart technology feels like quiet, invisible kindness.
            </p>

            {/* Direct Phone Concierge Box */}
            <div className="mt-8 rounded-2xl bg-[#FAF8F5]/5 p-6 border border-[#FAF8F5]/10">
              <span className="text-xs uppercase tracking-wider text-[#C85A32] font-semibold">
                Direct VIP Concierge Line
              </span>
              <div className="mt-2 flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[#C85A32]" />
                <a
                  href="tel:8005558463"
                  className="font-serif text-2xl font-semibold text-white hover:text-[#C85A32] transition-colors"
                >
                  (800) 555-VINE
                </a>
              </div>
              <p className="mt-2 text-xs text-[#E8E2D9]">
                Private Consultation Hours: Mon–Sat, 8am – 7pm EST
              </p>
            </div>
          </div>

          {/* Quick Directory Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl font-semibold text-white">Residences & Story</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/residences/the-orchard-villa"
                  className="min-h-[48px] inline-flex items-center text-[#E8E2D9] hover:text-[#C85A32] transition-colors"
                >
                  The Orchard Villa
                </Link>
              </li>
              <li>
                <Link
                  href="/residences/the-meadow-estate"
                  className="min-h-[48px] inline-flex items-center text-[#E8E2D9] hover:text-[#C85A32] transition-colors"
                >
                  The Meadow Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/residences/the-haven-residence"
                  className="min-h-[48px] inline-flex items-center text-[#E8E2D9] hover:text-[#C85A32] transition-colors"
                >
                  The Haven Residence
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="min-h-[48px] inline-flex items-center text-[#E8E2D9] hover:text-[#C85A32] transition-colors"
                >
                  Founders & Philosophy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social Community Column */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-xl font-semibold text-white">Community & Standards</h4>
            
            {/* Social Media Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vine Homes on Instagram"
                className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#FAF8F5]/10 p-3 text-white transition-colors hover:bg-[#C85A32]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Vine Homes on YouTube"
                className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#FAF8F5]/10 p-3 text-white transition-colors hover:bg-[#C85A32]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vine Homes Facebook Page"
                className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#FAF8F5]/10 p-3 text-white transition-colors hover:bg-[#C85A32]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vine Homes LinkedIn Company Profile"
                className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#FAF8F5]/10 p-3 text-white transition-colors hover:bg-[#C85A32]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>

            <div className="mt-8 flex flex-col space-y-3">
              <Link
                href="/terms"
                className="min-h-[48px] inline-flex items-center gap-1 text-[#E8E2D9] hover:text-[#C85A32] transition-colors"
              >
                <span>Terms of Service & Privacy Policy</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/terms#accessibility"
                className="min-h-[48px] inline-flex items-center gap-2 text-[#E8E2D9] hover:text-[#C85A32] transition-colors"
              >
                <ShieldCheck className="h-4 w-4 text-[#C85A32]" />
                <span>WCAG 2.2 AAA Accessibility Guarantee</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 border-t border-[#FAF8F5]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#E8E2D9]/70 gap-4">
          <p>© {new Date().getFullYear()} Vine Homes Platform Inc. All rights reserved.</p>
          <p>Designed with care for human dignity, zero-barrier living, and peace of mind.</p>
        </div>
      </div>
    </footer>
  );
}
