"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Overview", href: "/portal", icon: "◈" },
  { label: "Rent Payments", href: "/portal/payments", icon: "◇" },
  { label: "My Lease", href: "/portal/lease", icon: "◻" },
  { label: "Maintenance", href: "/portal/maintenance", icon: "◬" },
  { label: "Documents", href: "/portal/documents", icon: "◱" },
];

export default function PortalNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 min-h-screen bg-[#2C2416] text-[#E8DFD0] flex-shrink-0">
        <div className="px-8 py-8 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3 mb-8">
            <Image
              src="/logo.png"
              alt="Mtwapa Bay"
              width={40}
              height={40}
              className="object-contain opacity-80"
            />
            <span className="font-[family-name:var(--font-playfair)] text-lg text-white/80 tracking-wide">
              Mtwapa Bay
            </span>
          </Link>
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-1">
            Member Portal
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-xl text-white">
            James Kariuki
          </p>
          <p className="text-[10px] text-white/40 mt-0.5">
            Bahari Penthouse · Nyali
          </p>
        </div>

        <nav className="flex-1 px-5 py-8 space-y-1">
          {NAV_ITEMS.map(({ label, href, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-200 ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/45 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                <span className="text-base leading-none">{icon}</span>
                {label}
                {active && (
                  <span className="ml-auto w-1 h-4 bg-[#C4704A]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="px-8 py-8 border-t border-white/10">
          <Link
            href="/login"
            className="text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-white/60 transition-colors flex items-center gap-2"
          >
            <span>←</span> Sign Out
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden bg-[#2C2416] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Mtwapa Bay"
            width={32}
            height={32}
            className="object-contain opacity-80"
          />
          <span className="font-[family-name:var(--font-playfair)] text-base text-white/80">
            Mtwapa Bay
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white/60 hover:text-white transition-colors p-1"
          aria-label="Toggle portal menu"
        >
          <span className="block text-xl leading-none">{mobileOpen ? "✕" : "≡"}</span>
        </button>
      </header>

      {mobileOpen && (
        <div className="lg:hidden bg-[#2C2416] border-t border-white/10 px-5 pb-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 px-4 pt-5 pb-3">
            Navigation
          </p>
          {NAV_ITEMS.map(({ label, href, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-[11px] tracking-[0.2em] uppercase ${
                  active ? "text-white" : "text-white/50"
                }`}
              >
                <span>{icon}</span>
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
