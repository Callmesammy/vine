import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Vine Homes | Architectural Kindness & Senior Living Ethos',
  description: 'Learn about Vine Homes—our founding narrative, collaboration with gerontologists, and commitment to creating zero-barrier smart residences.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A] pt-28 sm:pt-36">
      <Navbar />

      {/* Hero Narrative Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32]">
            Our Story & Core Mission
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-4 text-[#1F1D1A] leading-tight">
            Redefining home automation as quiet, invisible kindness.
          </h1>
          <p className="mt-6 text-xl text-[#615C55] font-light leading-relaxed">
            Vine was founded on a simple observation: modern smart home technology was designed for tech enthusiasts, not human beings. We set out to change that by partnering with master architects and gerontologists to build residences that honor human dignity.
          </p>
        </div>
      </section>

      {/* Narrative Section 1: Co-Design with Gerontologists */}
      <section className="py-16 bg-[#F1EBE4] border-y border-[#1F1D1A]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative h-96 sm:h-[450px] w-full overflow-hidden rounded-3xl shadow-lg border border-[#1F1D1A]/10 bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Sunlit courtyard terrace co-designed for senior well-being"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
                Human-Centered Engineering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1A]">
                Co-designed alongside leading medical & ergonomics experts.
              </h2>
              <p className="text-base sm:text-lg text-[#615C55] font-light leading-relaxed">
                Every single door frame, light switch elevation, and floor texture in a Vine property undergoes rigorous evaluation by gerontologists and accessibility specialists.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-semibold text-[#1F1D1A]">
                <div className="flex items-center gap-2 rounded-xl bg-[#FAF8F5] p-4 border border-[#1F1D1A]/10">
                  <ShieldCheck className="h-5 w-5 text-[#C85A32]" />
                  <span>WCAG 2.2 AAA Certified</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-[#FAF8F5] p-4 border border-[#1F1D1A]/10">
                  <Heart className="h-5 w-5 text-[#C85A32]" />
                  <span>Zero-Barrier Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Values & Leadership Ethos */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1A]">
            Architectural Guiding Principles
          </h2>
          <p className="mt-3 text-base text-[#615C55] font-light">
            How we ensure every Vine home feels like a natural extension of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-[#F1EBE4] p-8 border border-[#1F1D1A]/10 space-y-4 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">Single-Level Freedom</h3>
            <p className="text-base text-[#615C55] font-light leading-relaxed">
              No stairs, no unexpected threshold bumps, and zero tripping hazards. Pure level movement from your bedroom suite to the garden terrace.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F1EBE4] p-8 border border-[#1F1D1A]/10 space-y-4 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">Camera-Free Privacy</h3>
            <p className="text-base text-[#615C55] font-light leading-relaxed">
              We never install invasive video cameras. Our radar fall safeguards use high-frequency millimeter waves that detect motion patterns while respecting 100% of your privacy.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F1EBE4] p-8 border border-[#1F1D1A]/10 space-y-4 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">VIP Human Support</h3>
            <p className="text-base text-[#615C55] font-light leading-relaxed">
              Technology should never leave you isolated. A single button or phone call connects you directly to your assigned Vine Concierge specialist.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 rounded-3xl bg-[#1F1D1A] text-white p-10 sm:p-14 text-center space-y-6 shadow-2xl">
          <h3 className="font-serif text-3xl sm:text-5xl font-semibold">
            Experience Vine Homes in Person
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-[#E8E2D9] font-light">
            Book a private tour with our senior living architectural specialist or request detailed blueprints delivered to your home.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/residences"
              className="min-h-[48px] min-w-[48px] inline-flex items-center gap-2 rounded-full bg-[#C85A32] px-8 py-4 text-base font-semibold text-white hover:bg-[#B34923] transition-colors"
            >
              <span>Browse Residences</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
