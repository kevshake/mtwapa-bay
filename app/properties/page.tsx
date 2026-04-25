import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export const metadata = {
  title: "Properties — Mtwapa Bay",
  description:
    "Browse our curated portfolio of exceptional luxury residences across East Africa.",
};

export default function PropertiesPage() {
  const available = properties.filter((p) => p.status === "available");
  const reserved = properties.filter((p) => p.status === "reserved");
  const sold = properties.filter((p) => p.status === "sold");

  return (
    <>
      <Nav />

      {/* Hero Banner — full-bleed image */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src={properties[0].heroImage}
          alt={properties[0].name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2416]/60 via-[#2C2416]/30 to-[#2C2416]/80" />
        <div className="relative z-10 flex flex-col justify-end h-full pb-16 px-6 max-w-7xl mx-auto">
          <p className="text-[#E8DFD0]/50 text-[10px] tracking-[0.3em] uppercase mb-4">
            East Africa
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl text-white leading-[1.0] mb-4">
            Exceptional
            <br />
            <em>Properties</em>
          </h1>
          <p className="text-[#E8DFD0]/55 text-sm max-w-md leading-relaxed">
            {properties.length} exceptional residences across East Africa&apos;s
            most distinguished addresses — from heritage manors to private estate villas.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-[#2C2416] border-t border-[#E8DFD0]/10 px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto hide-scrollbar">
          {[
            "All",
            "Villa",
            "Penthouse",
            "Estate",
            "Beachfront",
            "Residence",
          ].map((type) => (
            <button
              key={type}
              className="text-[10px] tracking-[0.25em] uppercase whitespace-nowrap text-[#E8DFD0]/50 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white/40"
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Available */}
        {available.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416]">
                Available
              </h2>
              <div className="h-px flex-1 bg-[#E8DFD0]" />
              <span className="text-xs text-[#8A9BAA]">
                {available.length} properties
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {available.map((property, i) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  priority={i < 3}
                />
              ))}
            </div>
          </section>
        )}

        {/* Reserved */}
        {reserved.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416]">
                Reserved
              </h2>
              <div className="h-px flex-1 bg-[#E8DFD0]" />
              <span className="text-xs text-[#8A9BAA]">
                {reserved.length} properties
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {reserved.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        )}

        {/* Sold */}
        {sold.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416]">
                Sold
              </h2>
              <div className="h-px flex-1 bg-[#E8DFD0]" />
              <span className="text-xs text-[#8A9BAA]">
                {sold.length} properties
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 opacity-60">
              {sold.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
