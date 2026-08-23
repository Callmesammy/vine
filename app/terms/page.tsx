import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Lock, Award, FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms & Privacy Guarantee | Vine Homes',
  description: 'High-contrast, transparent legal terms, privacy protections in smart homes, and WCAG 2.2 AAA accessibility commitments.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A] pt-32">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
            Legal & Accessibility Transparency
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-4 text-[#1F1D1A]">
            Terms, Privacy & Accessibility Guarantee
          </h1>
          <p className="mt-4 text-xl text-[#615C55] leading-relaxed">
            Written in plain, high-contrast, easy-to-read language. No hidden small print or confusing tech jargon.
          </p>
        </div>

        {/* Main Grid Layout with Sticky Side Navigation */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Side Navigation */}
          <aside className="lg:col-span-4 sticky top-28 rounded-3xl bg-[#F1EBE4] p-6 border border-[#1F1D1A]/10 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[#1F1D1A] flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#C85A32]" />
              <span>Section Directory</span>
            </h3>
            <nav className="flex flex-col space-y-2 text-base font-semibold text-[#1F1D1A]">
              <a
                href="#privacy"
                className="min-h-[48px] inline-flex items-center px-4 py-2 rounded-xl hover:bg-[#C85A32] hover:text-white transition-colors"
              >
                1. Data Privacy in Smart Homes
              </a>
              <a
                href="#warranty"
                className="min-h-[48px] inline-flex items-center px-4 py-2 rounded-xl hover:bg-[#C85A32] hover:text-white transition-colors"
              >
                2. Architectural Warranty & Service
              </a>
              <a
                href="#accessibility"
                className="min-h-[48px] inline-flex items-center px-4 py-2 rounded-xl hover:bg-[#C85A32] hover:text-white transition-colors"
              >
                3. WCAG 2.2 AAA Guarantee
              </a>
            </nav>
          </aside>

          {/* Legal Content Document */}
          <div className="lg:col-span-8 space-y-16 text-lg text-[#1F1D1A] leading-relaxed">
            {/* Section 1 */}
            <section id="privacy" className="scroll-mt-32 space-y-4 rounded-3xl bg-[#FAF8F5] p-8 border border-[#1F1D1A]/10 shadow-sm">
              <div className="flex items-center gap-3 text-[#C85A32]">
                <Lock className="h-6 w-6" />
                <h2 className="font-serif text-3xl font-semibold text-[#1F1D1A]">
                  1. Data Privacy in Smart Homes
                </h2>
              </div>
              <p>
                At Vine, we believe your home is your personal sanctuary. We enforce a strict <strong>Zero-Surveillance Policy</strong> across all property automation systems:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#615C55]">
                <li><strong>No In-Home Cameras:</strong> We never install video cameras inside private living quarters or bedrooms.</li>
                <li><strong>Local Sensor Processing:</strong> Radar fall safeguards and micro-climate environmental nodes process sensor data locally on secure edge hardware inside your home, never transmitting raw telemetry to cloud servers.</li>
                <li><strong>No Data Monetization:</strong> We never sell, share, or monetize resident telemetry data under any circumstances.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="warranty" className="scroll-mt-32 space-y-4 rounded-3xl bg-[#FAF8F5] p-8 border border-[#1F1D1A]/10 shadow-sm">
              <div className="flex items-center gap-3 text-[#C85A32]">
                <Award className="h-6 w-6" />
                <h2 className="font-serif text-3xl font-semibold text-[#1F1D1A]">
                  2. Architectural Warranty & Concierge SLA
                </h2>
              </div>
              <p>
                Every Vine residence comes backed by our <strong>10-Year Structural & Automation Guarantee</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#615C55]">
                <li><strong>24/7 VIP Concierge Response:</strong> In the event of hardware, lighting, or climate irregularities, a certified Vine technician will arrive at your home within 2 hours.</li>
                <li><strong>Lifetime Software Upgrades:</strong> Automation system software receives automatic, seamless wireless updates to maintain hardware performance and security.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="accessibility" className="scroll-mt-32 space-y-4 rounded-3xl bg-[#FAF8F5] p-8 border border-[#1F1D1A]/10 shadow-sm">
              <div className="flex items-center gap-3 text-[#C85A32]">
                <ShieldCheck className="h-6 w-6" />
                <h2 className="font-serif text-3xl font-semibold text-[#1F1D1A]">
                  3. WCAG 2.2 AAA Accessibility Guarantee
                </h2>
              </div>
              <p>
                Our digital platform and physical spaces are engineered to conform to the highest accessibility standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#615C55]">
                <li><strong>High-Contrast Text:</strong> Text contrast across all digital interfaces exceeds 12:1 ratio (surpassing WCAG AAA 7:1 standard).</li>
                <li><strong>Touch Targets:</strong> Interactive elements maintain a minimum target area of 48px × 48px to accommodate tremor or dexterity variations.</li>
                <li><strong>Reduced Motion Defaults:</strong> Automatic respect for operating system <code>prefers-reduced-motion</code> settings.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
