import AboutSection from '@/components/About/AboutSection';
import HeroMotion from '@/components/Hero/HeroMotion';
import ServicesSection from '@/components/Services/ServicesSection';
import TechStackSection from '@/components/TechStack/TechStackSection';

export default function Home() {
  return (
    <>
      <HeroMotion />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
    </>
  );
}