import React from "react";
import { getBranchBySlug } from "@/lib/branches";
import { notFound } from "next/navigation";
import BranchCart from "@/components/branch-cart";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CartPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const branch = await getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  return (
    <>
      <main className="relative w-full min-h-[80svh]">
        <div className="absolute inset-0" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <BranchCart branch={branch} />
        </div>
      </main>
    </>
  );
};

export default CartPage;
