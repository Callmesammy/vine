'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { CORE_VALUES, VALUES_IMAGE } from '@/lib/data/properties';
import { Sun, ShieldCheck, HeartHandshake } from 'lucide-react';

const ICON_MAP = {
  Sun: Sun,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
};

export function ValuesPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.from('.values-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#FAF8F5] text-[#1F1D1A] border-b border-[#1F1D1A]/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          {/* Left Column: Editorial Large Quote & Photo */}
          <div className="lg:col-span-6 space-y-8">
            <div className="values-reveal rounded-3xl bg-[#F1EBE4] p-8 lg:p-12 border border-[#1F1D1A]/10">
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
                Our Core Ethos
              </span>
              <blockquote className="mt-4 font-serif text-3xl sm:text-4xl text-[#1F1D1A] leading-snug font-medium">
                &ldquo;We believe home automation should feel like an intuitive companion, not a computer interface.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32] font-serif font-bold text-xl">
                  V
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1D1A]">Vine Architectural Advisory Board</h4>
                  <p className="text-xs text-[#615C55]">Co-designed with Gerontologists & Lighting Master Designers</p>
                </div>
              </div>
            </div>

            <div className="values-reveal relative h-72 w-full overflow-hidden rounded-3xl shadow-md border border-[#1F1D1A]/10">
              <Image
                src={VALUES_IMAGE}
                alt="Serene morning terrace bathed in natural light"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: 3 Core Tenets */}
          <div className="lg:col-span-6 space-y-8">
            <div className="values-reveal">
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-tight text-[#1F1D1A]">
                Technology crafted with empathy.
              </h2>
              <p className="mt-4 text-lg text-[#615C55] leading-relaxed">
                Traditional smart homes overcomplicate daily living with complex screens and endless menus. At Vine, every interaction is simplified to support your natural rhythms.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {CORE_VALUES.map((val) => {
                const IconComponent = ICON_MAP[val.iconName as keyof typeof ICON_MAP] || Sun;

                return (
                  <div
                    key={val.title}
                    className="values-reveal rounded-2xl bg-[#FAF8F5] p-6 border border-[#1F1D1A]/10 hover:border-[#C85A32]/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-xl bg-[#C85A32]/10 text-[#C85A32]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-[#1F1D1A]">
                          {val.title}
                        </h3>
                        <p className="mt-2 text-base text-[#615C55] leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
