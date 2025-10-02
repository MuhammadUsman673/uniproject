import Footer from "@/components/footer";
import Legal from "@/components/footer/legal";
import Navbar from "@/components/navbar";
import BottomNavigationBar from "@/components/navbar/bottom";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto py-4">
        <Navbar />
        {children}
      </div>
      <div className="bg-[#001136]">
        <Footer />
        <Legal />
      </div>
      <BottomNavigationBar />
    </div>
  );
}
