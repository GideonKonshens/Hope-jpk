import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import AcademicPrograms from '@/components/AcademicPrograms';
import WhyChooseHope from '@/components/WhyChooseHope';
import CampusLife from '@/components/CampusLife';
import Testimonials from '@/components/Testimonials';
import NewsEvents from '@/components/NewsEvents';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <AcademicPrograms />
      <WhyChooseHope />
      <CampusLife />
      <Testimonials />
      <NewsEvents />
      <ContactSection />
      <Footer />
    </div>
  );
}
