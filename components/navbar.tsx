"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // Track if navbar is sticky
  const navbarRef = useRef<HTMLElement>(null); // Explicitly type the ref as an HTML element

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const offset = navbarRef.current.getBoundingClientRect().top;
        // When the navbar reaches the top of the viewport, set it to sticky
        setIsSticky(offset <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`${
        isSticky ? "fixed top-0 left-0 w-full z-50 bg-black" : "sticky top-0 z-50 bg-black"
      } border-zinc-950 border-b flex`}
    >
      <div className="container mx-auto justify-center items-center w-2/3">
        <div className="flex flex-wrap items-center justify-between h-12">
          <Link href="/" className="flex items-center space-x-3">
            <span className="self-center text-3xl font-semibold italic text-white opacity-80">
              qid
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Navigation Links */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-menu">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-gray-100 text-xs">
              {[
                { name: "App", href: "/app" },
                { name: "QR Check-In", href: "/qr-based-check-in-software" },
                { name: "C-Form Pro", href: "/c-form-automation-for-hotels" },
                { name: "Contact", href: "/support" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 px-3 text-stone-500 hover:text-white md:p-0 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
