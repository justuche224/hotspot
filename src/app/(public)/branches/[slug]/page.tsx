import React from "react";
import { getBranchBySlug } from "@/lib/branches";
import BranchHero from "@/components/branch-hero";
import WhatsAppCheckout from "@/components/whatsapp-checkout";
// import DeliveryInfo from "@/components/delivery-info";
import BranchTestimonials from "@/components/branch-testimonials";
import BranchMenu from "@/components/branch-menu";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const branch = await getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  return (
    <>
      <main className="relative w-full bg-black">
        <BranchHero branch={branch} />

        <div className="container mx-auto px-4 py-16 space-y-24">
          <BranchMenu branch={branch} />

          <section>
            <WhatsAppCheckout branch={branch} />
          </section>

          {/* <section>
            <DeliveryInfo branch={branch} />
          </section> */}

          <section>
            <BranchTestimonials branch={branch} />
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
