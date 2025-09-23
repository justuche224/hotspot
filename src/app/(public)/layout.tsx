import PublicNav from "@/components/nav";
import Footer from "@/components/footer";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default PublicLayout;
