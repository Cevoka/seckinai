import { setRequestLocale } from 'next-intl/server';
import TopNav from '@/components/sections/TopNav';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Featured from '@/components/sections/Featured';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="min-h-screen bg-background text-on-surface relative overflow-x-hidden">
      {/* Global ambient glows */}
      <div
        className="ambient-glow fixed"
        style={{ width: 500, height: 500, top: -100, left: -100 }}
      />
      <div
        className="ambient-glow fixed"
        style={{
          width: 600,
          height: 600,
          top: '20%',
          right: -100,
          background: 'radial-gradient(circle, rgba(229,181,255,0.08) 0%, rgba(20,19,21,0) 70%)'
        }}
      />

      <TopNav />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Featured />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
