"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F4F0E8]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Mtwapa Bay"
            width={182}
            height={182}
            className="object-contain flex-shrink-0"
            priority
          />
          <span
            className={`font-[family-name:var(--font-playfair)] text-2xl tracking-wide transition-colors ${
              scrolled ? "text-[#2C2416]" : "text-white"
            }`}
          >
            Mtwapa Bay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Properties", href: "/properties" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/#contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`nav-link text-sm tracking-wider uppercase transition-colors ${
                scrolled ? "text-[#2C2416]" : "text-white/90"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/properties"
            className={`text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 border transition-all ${
              scrolled
                ? "border-[#2C2416] text-[#2C2416] hover:bg-[#2C2416] hover:text-[#F4F0E8]"
                : "border-white/70 text-white hover:bg-white hover:text-[#2C2416]"
            }`}
          >
            View Listings
          </Link>
          <Link
            href="/login"
            className={`text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all ${
              scrolled
                ? "bg-[#2C2416] text-[#F4F0E8] hover:bg-[#1A4A5A]"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            Member Login
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-1 ${
            scrolled ? "text-[#2C2416]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#F4F0E8] ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 gap-5">
          {[
            { label: "Properties", href: "/properties" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/#contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#2C2416]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-[10px] tracking-[0.25em] uppercase text-[#2C2416] bg-[#E8DFD0] px-4 py-3 text-center"
          >
            Member Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
