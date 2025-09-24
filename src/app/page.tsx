import React from "react";
import Footer from "@/components/footer";
import PublicNav from "@/components/nav";
import EnhancedHero from "@/components/hero";
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";
import Script from "next/script";

export const dynamic = "force-static";

const pageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": process.env.NEXT_PUBLIC_APP_URL,
  name: "Hotpot 24 - 24/7 Food Delivery in Lekki",
  description:
    "Fresh Nigerian cuisine delivered 24/7 in Lekki Phase 1 & Phase 2. Rice dishes, soups, grills, and authentic Lagos flavors. Fast WhatsApp ordering.",
  url: process.env.NEXT_PUBLIC_APP_URL,
  mainEntity: {
    "@type": "Organization",
    name: "Hotpot 24",
    url: process.env.NEXT_PUBLIC_APP_URL,
    sameAs: [
      "https://twitter.com/hotpot24",
      "https://www.youtube.com/@hotpot24",
      "https://instagram.com/hotpot24",
      "https://threads.com/hotpot24",
    ],
  },
};

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
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  );
};

export default page;
