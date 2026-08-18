import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutZula from "@/components/home/AboutZula";
import LatestJobs from "@/components/home/LatestJobs";
import Countries from "@/components/home/Countries";
import HowItWorks from "@/components/home/HowItWorks";
import ForEmployers from "@/components/home/ForEmployers";
import SafeMigration from "@/components/home/SafeMigration";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <AboutZula />
      <LatestJobs />
      <Countries />
      <HowItWorks />
      <ForEmployers />
      <SafeMigration />
      <FAQ />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
