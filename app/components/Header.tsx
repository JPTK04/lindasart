"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out border-b border-gray-100 ${
        isScrolled ? "pt-4 pb-0 shadow-sm" : "pt-20 pb-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end pb-1">
        <Link href="/" className="flex items-center mb-[6px]">
          {/* We assume logo.png is in the public folder as requested */}
          <div
            className={`relative transition-all duration-300 ease-in-out ${
              isScrolled ? "w-48 h-16" : "w-72 h-24"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Lindas Art Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        <nav className="flex gap-8 text-base uppercase tracking-widest font-sukhumvit pb-1">
          <Link
            href="/work"
            className={`transition-colors hover:opacity-70 ${
              pathname.startsWith("/work") ? "opacity-100" : "opacity-50"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:opacity-70 ${
              pathname === "/about" ? "opacity-100" : "opacity-50"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
