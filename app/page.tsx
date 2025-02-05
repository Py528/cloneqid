"use client"
import Navbar from "@/components/navbar";
import Landing from "@/components/landing";
import SecureSection from "@/components/securesection";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <Navbar />
      <Landing />
      <SecureSection />
    </div>
  );
}
