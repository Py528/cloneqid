"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SecureSection = () => {
  return (
    <div className="relative bg-black h-full flex justify-center items-center px-8">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 -z-0 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-2/3 mt-10">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-left z-10">
          <h1 className="md:text-5xl text-xl text-white w-3/3 mb-4 font-raleway font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
              Secure
            </span>
            , easy, and always with you.
          </h1>

          <Button variant="outline" className="rounded-full font-semibold">
            <Link href="/download">Create free account</Link>
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center z-10">
          <Image
            src="/images/image.png"
            alt="Illustration"
            width={320} // Specify the width
            height={320} // Specify the height
            priority // Load the image as a priority asset (optional)
          />
        </div>
      </div>
    </div>
  );
};

export default SecureSection;
