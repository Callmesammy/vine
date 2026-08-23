'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PhoneCall, Calendar, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { PROPERTIES } from '@/lib/data/properties';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(10, 'Please enter a valid telephone number.'),
  residence: z.string().min(1, 'Please select a preferred residence.'),
  notes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactAndSocial() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      residence: PROPERTIES[0].slug,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulated API submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Consultation Request:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-[#1F1D1A]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Phone Concierge & Social Media */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
                VIP Concierge & Consultations
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 text-[#1F1D1A]">
                Begin your quiet journey home.
              </h2>
              <p className="mt-4 text-lg text-[#615C55] leading-relaxed">
                Whether you wish to schedule a private walkthrough, request architectural blueprints, or discuss custom accessibility needs, our concierge is here to assist.
              </p>
            </div>

            {/* Direct Line Card */}
            <div className="rounded-3xl bg-[#F1EBE4] p-8 border border-[#1F1D1A]/10 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#C85A32]">
                <PhoneCall className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Direct Concierge Line</span>
              </div>
              <a
                href="tel:8005558463"
                className="block font-serif text-3xl font-bold text-[#1F1D1A] hover:text-[#C85A32] transition-colors"
              >
                (800) 555-VINE
              </a>
              <p className="text-sm text-[#615C55]">
                Private Consultation Hours: Monday – Saturday, 8:00 AM – 7:00 PM EST.
              </p>
            </div>

            {/* Social Media Follow Section */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold text-[#1F1D1A]">
                Follow Our Architectural Journey
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vine Homes Instagram"
                  className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#F1EBE4] p-3 text-[#1F1D1A] transition-colors hover:bg-[#C85A32] hover:text-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vine Homes YouTube"
                  className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#F1EBE4] p-3 text-[#1F1D1A] transition-colors hover:bg-[#C85A32] hover:text-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vine Homes Facebook"
                  className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#F1EBE4] p-3 text-[#1F1D1A] transition-colors hover:bg-[#C85A32] hover:text-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vine Homes LinkedIn"
                  className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-[#F1EBE4] p-3 text-[#1F1D1A] transition-colors hover:bg-[#C85A32] hover:text-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Consultation Form */}
          <div className="lg:col-span-7 bg-[#F1EBE4] rounded-3xl p-8 lg:p-12 border border-[#1F1D1A]/10 shadow-lg">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1D1A]">
              Schedule a Private Walkthrough
            </h3>
            <p className="mt-2 text-sm text-[#615C55]">
              Fill in your details below and a senior living concierge specialist will contact you within 2 business hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-2xl font-semibold text-emerald-900">
                  Walkthrough Request Received
                </h4>
                <p className="text-base text-emerald-800 max-w-md mx-auto">
                  Thank you. Your dedicated Vine Concierge specialist has received your request and will call you shortly to confirm your consultation time.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition-colors"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#1F1D1A] mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    {...register('fullName')}
                    className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-3 text-base text-[#1F1D1A] placeholder-[#615C55]/60 focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs font-semibold text-rose-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Telephone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1F1D1A] mb-2">
                    Telephone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    {...register('phone')}
                    className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-3 text-base text-[#1F1D1A] placeholder-[#615C55]/60 focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs font-semibold text-rose-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Preferred Residence */}
                <div>
                  <label htmlFor="residence" className="block text-sm font-semibold text-[#1F1D1A] mb-2">
                    Preferred Smart Residence
                  </label>
                  <select
                    id="residence"
                    {...register('residence')}
                    className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-3 text-base text-[#1F1D1A] focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20"
                  >
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.slug}>
                        {p.name} ({p.bedrooms} Bed, {p.bathrooms} Bath - {p.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom Notes / Accessibility Requirements */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-[#1F1D1A] mb-2">
                    Specific Accessibility or Architectural Requests (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="e.g. Wheelchair ramp requirements, quiet acoustic zones, or immediate move-in timelines..."
                    {...register('notes')}
                    className="w-full min-h-[48px] rounded-xl bg-[#FAF8F5] border border-[#1F1D1A]/20 px-4 py-3 text-base text-[#1F1D1A] placeholder-[#615C55]/60 focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] min-w-[48px] inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C85A32] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#B34923] shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Confirm Consultation Request'}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
