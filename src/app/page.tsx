import HeroSection from "@/components/HeroSection";
import AWSServicesGrid from "@/components/AWSServicesGrid";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AWSServicesGrid />
      <SkillsSection />
      <Testimonials />
    </div>
  );
}