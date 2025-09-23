import React from "react";
import Footer from "@/components/footer";
import PublicNav from "@/components/nav";
import EnhancedHero from "@/components/hero";
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";

const page = () => {
  return (
    <>
      <PublicNav />
      <main className="relative w-full bg-black">
        <EnhancedHero />
        <div className="container mx-auto">
          <WhyChoose />
          <Testimonials />
          <CTASection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default page;
