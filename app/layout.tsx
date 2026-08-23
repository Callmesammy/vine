import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vine Homes | Automated Living, Effortlessly Supported',
  description: 'Vine crafts luxury single-level smart residences for senior living, combining quiet ambient technology, zero-threshold ergonomics, and circadian well-being.',
  keywords: ['Luxury Senior Living', 'Smart Homes for Seniors', 'Accessible Architecture', 'Zero-Barrier Residences', 'Vine Homes'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1F1D1A] selection:bg-[#C85A32] selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
