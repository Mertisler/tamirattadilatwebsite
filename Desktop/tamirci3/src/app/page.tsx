import Hero from '@/components/Hero';
import ServiceCategories from '@/components/ServiceCategories';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCategories />
      <HowItWorks />
      <Footer />
    </main>
  );
}
