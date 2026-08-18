import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
