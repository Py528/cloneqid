"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="relative h-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/images/fingerprint.svg')",
          backgroundSize: "100%",
          backgroundPosition: "right",
          transform: "rotate(180deg)",
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Hero Content */}
      <div className="flex h-full justify-center items-center flex-col z-10 text-center px-4">
        <h1 className="md:text-5xl text-xl text-white w-2/3 mb-2 font-raleway font-bold">
          every person deserves to know and be known by their true identity
        </h1>

        <Button variant="outline" className="rounded-full font-semibold">
          <Link href="/download">Download qid</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
