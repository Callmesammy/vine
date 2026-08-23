'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap-config';
import { KITCHEN_IMAGE, HERO_IMAGE, VALUES_IMAGE } from '@/lib/data/properties';
import { Sun, Wind, Move, ShieldAlert, CheckCircle2 } from 'lucide-react';

const TABS = [
  {
    id: 'circadian',
    label: 'Lighting & Circadian Rhythm',
    icon: Sun,
    image: HERO_IMAGE,
    title: 'Natural Illumination in Harmony with Your Body',
    description: 'Our biological cove lighting seamlessly adapts color temperature throughout the day—warm morning sunrise amber, glare-free afternoon daylight, and soothing sunset tones to foster melatonin release and restful sleep.',
    features: [
      'Automatic color temperature shift (1800K - 4000K)',
      'Shadowless zero-glare recessed wall arrays',
      'Tactile soft-touch master bedside switches',
      'Voice-activated night guidance pathway'
    ]
  },
  {
    id: 'climate',
    label: 'Intuitive Voice Climate',
    icon: Wind,
    image: KITCHEN_IMAGE,
    title: 'Silent Purified Air & Whisper-Quiet Warmth',
    description: 'Multiple ambient sensor nodes continuously sample micro-air quality, humidity, and room temperature, quietly adjusting zonal heat radiant floors without drafty blowers or complex digital thermostats.',
    features: [
      'Zonal radiant floor heating with instant warmth',
      'Medical-grade HEPA micro-air purification',
      'Natural voice control: "Make the lounge comfortable"',
      'Discreet silent operation (< 18dB sound profile)'
    ]
  },
  {
    id: 'ergonomics',
    label: 'Zero-Step Ergonomics',
    icon: Move,
    image: VALUES_IMAGE,
    title: 'Architectural Freedom for Lifelong Independence',
    description: 'Every door threshold is flush-recessed, corridors expand to 42 inches wide, and kitchen cabinetry features touchless motorized height adjustments so every space adapts to you.',
    features: [
      'Flush-recessed sliding glass door tracks',
      'Motorized height-adjustable kitchen counters',
      'Non-slip textured natural stone surfaces',
      'Curbless zero-threshold wet room showers'
    ]
  },
  {
    id: 'safety',
    label: 'Fall & Safety Safeguards',
    icon: ShieldAlert,
    image: HERO_IMAGE,
    title: 'Private Radar Monitoring Without Cameras',
    description: 'State-of-the-art millimeter-wave radar sensors discretely monitor movement velocity and posture to detect potential falls or distress in real-time, notifying family or concierge without camera surveillance.',
    features: [
      'Camera-free millimeter-wave radar monitoring',
      'Instant VIP Concierge emergency voice alert',
      'Automatic floor illumination on bedside footfall',
      'Backup battery power for uninterrupted safety'
    ]
  }
];

export function SmartAutomationTabs() {
  const [activeTabId, setActiveTabId] = useState('circadian');
  const containerRef = useRef<HTMLElement>(null);
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.tab-content-fade',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    },
    { dependencies: [activeTabId], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#F1EBE4] text-[#1F1D1A] border-b border-[#1F1D1A]/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
            Ambient Intelligence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 text-[#1F1D1A]">
            Technology that listens, never demands.
          </h2>
          <p className="mt-4 text-lg text-[#615C55]">
            Explore our four core pillars of senior home automation designed for safety, comfort, and human dignity.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-b border-[#1F1D1A]/10 pb-6">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                aria-selected={isActive}
                role="tab"
                className={`min-h-[48px] inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${
                  isActive
                    ? 'bg-[#C85A32] text-white shadow-md'
                    : 'bg-[#FAF8F5] text-[#1F1D1A] hover:bg-[#1F1D1A]/10'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-[#C85A32]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Cross-Fade Grid */}
        <div className="mt-12 tab-content-fade grid grid-cols-1 gap-12 lg:grid-cols-12 items-center bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#1F1D1A]/10 shadow-lg">
          {/* Photo Column */}
          <div className="lg:col-span-6 relative h-80 sm:h-[420px] w-full overflow-hidden rounded-2xl">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 rounded-full bg-[#1F1D1A]/85 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white">
              {activeTab.label}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-[#1F1D1A] leading-tight">
              {activeTab.title}
            </h3>

            <p className="text-base sm:text-lg text-[#615C55] leading-relaxed">
              {activeTab.description}
            </p>

            <ul className="space-y-3 pt-2">
              {activeTab.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm sm:text-base text-[#1F1D1A] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#C85A32] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
