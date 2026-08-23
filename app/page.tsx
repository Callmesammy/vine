import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ValuesPhilosophy } from '@/components/sections/ValuesPhilosophy';
import { HorizontalShowcase } from '@/components/sections/HorizontalShowcase';
import { SmartAutomationTabs } from '@/components/sections/SmartAutomationTabs';
import { ContactAndSocial } from '@/components/sections/ContactAndSocial';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1D1A]">
      <Navbar />
      <Hero />
      <ValuesPhilosophy />
      <HorizontalShowcase />
      <SmartAutomationTabs />
      <ContactAndSocial />
      <Footer />
    </main>
  );
}
