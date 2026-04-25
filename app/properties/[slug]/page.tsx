import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import VirtualTour from "@/components/VirtualTour";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import PropertyCard from "@/components/PropertyCard";
import { properties, getPropertyBySlug } from "@/lib/properties";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.name} — Mtwapa Bay`,
    description: property.description,
    openGraph: {
      title: `${property.name} — Mtwapa Bay`,
      description: property.description,
      images: [{ url: property.heroImage, width: 1920, height: 1080 }],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  const related = properties
    .filter((p) => p.id !== property.id && p.status === "available")
    .slice(0, 3);

  const statusLabel = {
    available: "Available",
    reserved: "Reserved",
    sold: "Sold",
  }[property.status];

  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div className="pt-52 pb-0 px-6 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-[#2C2416]/40 tracking-wide">
          <Link href="/" className="hover:text-[#2C2416] transition-colors">
            Home
          </Link>
          <span>·</span>
          <Link href="/properties" className="hover:text-[#2C2416] transition-colors">
            Properties
          </Link>
          <span>·</span>
          <span className="text-[#2C2416]/70">{property.name}</span>
        </nav>
      </div>

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-0">
        <PropertyGallery images={property.images} name={property.name} />
      </section>

      {/* ── Property Header & Details ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          {/* Left column */}
          <div>
            {/* Type & location */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`badge badge-${property.status}`}>
                {statusLabel}
              </span>
              <span className="text-[10px] text-[#8A9BAA] tracking-[0.3em] uppercase">
                {property.type} · {property.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[#2C2416] leading-tight mb-4">
              {property.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg text-[#2C2416]/60 italic mb-8 leading-relaxed max-w-2xl">
              {property.tagline}
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-[#E8DFD0] mb-8">
              {[
                { label: "Bedrooms", value: property.bedrooms },
                { label: "Bathrooms", value: property.bathrooms },
                { label: "Interior", value: `${property.sqm.toLocaleString()} m²` },
                ...(property.landSqm
                  ? [{ label: "Land", value: `${property.landSqm.toLocaleString()} m²` }]
                  : []),
                { label: "Built", value: property.yearBuilt },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-1">
                    {label}
                  </p>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none text-[#2C2416]/70 leading-relaxed mb-10">
              {property.longDescription.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Architecture credits */}
            {(property.architect || property.interiorDesigner) && (
              <div className="flex flex-wrap gap-8 pt-6 border-t border-[#E8DFD0] mb-10">
                {property.architect && (
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-1">
                      Architect
                    </p>
                    <p className="text-sm text-[#2C2416]">{property.architect}</p>
                  </div>
                )}
                {property.interiorDesigner && (
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-1">
                      Interior Design
                    </p>
                    <p className="text-sm text-[#2C2416]">
                      {property.interiorDesigner}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Features */}
            <div className="mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-6">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#2C2416]/70"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-[#C4704A] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — sticky enquiry panel */}
          <div>
            <div className="sticky top-52">
              <div className="bg-[#2C2416] text-[#E8DFD0] p-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8DFD0]/50 mb-2">
                  Asking Price
                </p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl text-white mb-6">
                  {property.priceLabel}
                </p>

                <div className="space-y-3 mb-6 text-sm text-[#E8DFD0]/60 border-t border-[#E8DFD0]/10 pt-6">
                  <div className="flex justify-between">
                    <span>Type</span>
                    <span className="capitalize text-[#E8DFD0]">
                      {property.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bedrooms</span>
                    <span className="text-[#E8DFD0]">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interior</span>
                    <span className="text-[#E8DFD0]">{property.sqm} m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="capitalize text-[#E8DFD0]">
                      {property.status}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:hello@mtwapabay.com?subject=Enquiry: ${encodeURIComponent(property.name)}`}
                  className="block w-full bg-white text-[#2C2416] text-[10px] tracking-[0.25em] uppercase text-center px-6 py-4 hover:bg-[#F4F0E8] transition-colors mb-3"
                >
                  Request Private Viewing
                </a>
                <a
                  href="tel:+254700000000"
                  className="block w-full border border-[#E8DFD0]/30 text-[#E8DFD0] text-[10px] tracking-[0.25em] uppercase text-center px-6 py-4 hover:bg-[#E8DFD0]/10 transition-colors"
                >
                  Call Us
                </a>

                <p className="text-[10px] text-[#E8DFD0]/30 text-center mt-4 leading-relaxed">
                  All enquiries handled with complete discretion
                </p>
              </div>

              {/* Map placeholder */}
              <div className="mt-4 bg-[#E8DFD0] p-4 text-center">
                <p className="text-[10px] text-[#8A9BAA] tracking-[0.3em] uppercase mb-2">
                  Location
                </p>
                <p className="text-sm text-[#2C2416]">{property.location}</p>
                <p className="text-xs text-[#2C2416]/50">{property.country}</p>
                <div className="mt-3 h-32 bg-[#d8d0c0] flex items-center justify-center text-[#8A9BAA] text-xs">
                  {property.coordinates.lat.toFixed(3)}°N,{" "}
                  {property.coordinates.lng.toFixed(3)}°E
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Amenities ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-6">
          Amenities & Features
        </h2>
        <AmenitiesGrid amenities={property.amenities} />
      </section>

      {/* ── Virtual Tour ──────────────────────────────────────────────────── */}
      {property.virtualTour && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-6">
            Virtual Tour
          </h2>
          <VirtualTour tour={property.virtualTour} propertyName={property.name} />
          <p className="text-[10px] text-[#8A9BAA] mt-3 text-center tracking-[0.2em] uppercase">
            Experience {property.name} from anywhere in the world
          </p>
        </section>
      )}

      {/* ── Pull quote ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F4F0E8] border-y border-[#E8DFD0] py-16 px-6 my-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-[#2C2416] italic leading-relaxed">
            &ldquo;{property.tagline}&rdquo;
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mt-4">
            {property.name} · {property.location}
          </p>
        </div>
      </section>

      {/* ── Related properties ──────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
                You May Also Like
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416]">
                Similar Residences
              </h2>
            </div>
            <Link
              href="/properties"
              className="hidden sm:block text-[10px] tracking-[0.25em] uppercase text-[#1A4A5A] border-b border-[#1A4A5A] pb-0.5 hover:opacity-60 transition-opacity"
            >
              All Properties →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      )}

      {/* ── Advisory CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src={property.images[1] ?? property.heroImage}
          alt={property.name}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2C2416]/88" />
        <div className="relative z-10 py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8DFD0]/35 mb-5">
              Private Advisory
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-white leading-[1.1] mb-6">
              Begin Your Conversation
            </h2>
            <p className="text-[#E8DFD0]/55 max-w-sm mx-auto leading-relaxed text-sm mb-10">
              Our team provides discreet, expert guidance through every stage of the
              acquisition. Available by appointment in Nairobi, Mombasa, or at the property.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:hello@mtwapabay.com?subject=Enquiry: ${encodeURIComponent(property.name)}`}
                className="inline-block bg-white text-[#2C2416] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#F4F0E8] transition-colors"
              >
                Request Private Viewing
              </a>
              <a
                href="tel:+254700000000"
                className="inline-block border border-white/40 text-white text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white/10 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
