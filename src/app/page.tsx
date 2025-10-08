import Hero from "@/components/Hero";
import Features from "@/components/Features"
import CompanionGrid from "@/components/CompanionGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Hero/>
      <Features/>
      <CompanionGrid />
      <CTASection/>
      <Footer/>
    </>
  );
}
