import { HeroSection } from "./HeroSection";
import { ServicesOverview } from "./ServicesOverview";
import { HowItWorks } from "./HowItWorks";
import { WhyChooseUs } from "./WhyChooseUs";
import { Testimonials } from "./Testimonials";
import { PopularRegistrations } from "./PopularRegistrations";
import { BlogSection } from "./BlogSection";
import { FinalCTA } from "./FinalCTA";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <PopularRegistrations />
      <BlogSection />
      <FinalCTA />
    </div>
  );
}