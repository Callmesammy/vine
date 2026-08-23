'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactAndSocial } from '@/components/sections/ContactAndSocial';
import { Phone, Mail, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residence: 'The Orchard Villa',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A] pt-28 sm:pt-36">
      <Navbar />

      {/* Contact Hero & Consultation Form Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Concierge Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
                Direct Concierge & Inquiries
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-4 text-[#1F1D1A] leading-tight">
                Connect with our concierge team.
              </h1>
              <p className="mt-4 text-lg text-[#615C55] leading-relaxed">
                Whether scheduling a private walkthrough, requesting architectural floorplans, or inquiring about bespoke automated care, we are at your service.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#1F1D1A]/10">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32] shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#615C55] font-semibold">
                    Direct Phone Line
                  </div>
                  <a
                    href="tel:8005558463"
                    className="text-2xl font-serif font-bold text-[#1F1D1A] hover:text-[#C85A32] transition-colors"
                  >
                    (800) 555-VINE
                  </a>
                  <p className="text-xs text-[#615C55] mt-0.5">Toll-free concierge line</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32] shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#615C55] font-semibold">
                    Email Inquiries
                  </div>
                  <a
                    href="mailto:concierge@vinehomes.com"
                    className="text-xl font-serif font-semibold text-[#1F1D1A] hover:text-[#C85A32] transition-colors"
                  >
                    concierge@vinehomes.com
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32] shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#615C55] font-semibold">
                    Concierge Hours
                  </div>
                  <p className="text-base font-semibold text-[#1F1D1A]">
                    Monday – Sunday: 8:00 AM – 8:00 PM EST
                  </p>
                  <p className="text-xs text-[#615C55]">24/7 urgent support for residents</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32] shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#615C55] font-semibold">
                    Private Gallery
                  </div>
                  <p className="text-base font-semibold text-[#1F1D1A]">
                    100 Vine Estate Way, Palm Beach, FL 33480
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Private Consultation Form */}
          <div className="lg:col-span-7 bg-[#F1EBE4] p-8 sm:p-12 rounded-3xl border border-[#1F1D1A]/10 shadow-xl">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#1F1D1A]">
                  Consultation Request Received
                </h3>
                <p className="text-base text-[#615C55] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1F1D1A]">{formData.name}</span>. A Vine Senior Concierge Specialist will call you shortly to confirm your private walkthrough.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C85A32] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1F1D1A]">
                    Schedule a Private Consultation
                  </h3>
                  <p className="text-sm text-[#615C55] mt-1">
                    Fill out the details below to connect directly with our architectural specialists.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1D1A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/15 text-[#1F1D1A] focus:outline-none focus:border-[#C85A32] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1D1A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/15 text-[#1F1D1A] focus:outline-none focus:border-[#C85A32] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1D1A] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/15 text-[#1F1D1A] focus:outline-none focus:border-[#C85A32] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1D1A] mb-2">
                      Residence of Interest
                    </label>
                    <select
                      value={formData.residence}
                      onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/15 text-[#1F1D1A] focus:outline-none focus:border-[#C85A32] transition-colors"
                    >
                      <option value="The Orchard Villa">The Orchard Villa</option>
                      <option value="The Meadow Estate">The Meadow Estate</option>
                      <option value="The Palma Residence">The Palma Residence</option>
                      <option value="The Solis Estate">The Solis Estate</option>
                      <option value="The Luna Residence">The Luna Residence</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1D1A] mb-2">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your timeline, specific accessibility needs, or walkthrough preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/15 text-[#1F1D1A] focus:outline-none focus:border-[#C85A32] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-[48px] min-w-[48px] w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C85A32] px-8 py-4 text-base font-semibold text-white hover:bg-[#B34923] transition-colors shadow-lg"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Visual Showcase Section */}
      <ContactAndSocial />

      <Footer />
    </main>
  );
}
