import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C2416] text-[#E8DFD0] py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
              Mtwapa Bay
            </h3>
            <p className="text-sm text-[#E8DFD0]/70 leading-relaxed max-w-xs">
              Africa&apos;s definitive address for exceptional luxury properties.
              Curating extraordinary residences across East Africa.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-4 text-[#E8DFD0]/50">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "All Properties", href: "/properties" },
                { label: "Villas", href: "/properties?type=villa" },
                { label: "Penthouses", href: "/properties?type=penthouse" },
                { label: "Estates", href: "/properties?type=estate" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#E8DFD0]/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-4 text-[#E8DFD0]/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#E8DFD0]/70">
              <li>Mtwapa Bay Advisory</li>
              <li>East Africa</li>
              <li className="pt-2">
                <a
                  href="mailto:hello@mtwapabay.com"
                  className="hover:text-white transition-colors"
                >
                  hello@mtwapabay.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="hover:text-white transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8DFD0]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#E8DFD0]/40">
            © {new Date().getFullYear()} Mtwapa Bay. All rights reserved.
          </p>
          <p className="text-xs text-[#E8DFD0]/40">
            Luxury Residences · East Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
