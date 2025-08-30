import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCards from '@/components/ServiceCards';
import MapTrackingSection from '@/components/MapTrackingSection';
import DriverSection from '@/components/DriverSection';
import OffersSection from '@/components/OffersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceCards />
      <MapTrackingSection />
      <DriverSection />
      <OffersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
