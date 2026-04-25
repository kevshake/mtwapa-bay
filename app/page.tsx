import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button, Input, Label, SectionEyebrow, SectionHeading } from "@/components/ui";
import { properties } from "@/lib/properties";

const TICKER_ITEMS = [
  "Africa's Premier Addresses",
  "Private Advisory",
  "6 Curated Residences",
  "Lamu · Mtwapa · Mombasa · Diani · Malindi · Watamu",
  "Bespoke Acquisition Service",
  "UNESCO Heritage Properties",
  "Waterfront & Estate Residences",
];

const DESTINATIONS = [
  {
    name: "Lamu Archipelago",
    subtitle: "UNESCO World Heritage",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800&q=85",
    href: "/properties?location=lamu",
  },
  {
    name: "Mtwapa Creek",
    subtitle: "Private Enclave",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    href: "/properties?location=mtwapa",
  },
  {
    name: "Nyali · Mombasa",
    subtitle: "Urban Excellence",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=85",
    href: "/properties?location=mombasa",
  },
  {
    name: "Diani Beach",
    subtitle: "Kwale County",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=85",
    href: "/properties?location=diani",
  },
  {
    name: "Malindi",
    subtitle: "Silversands Beach",
    image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=85",
    href: "/properties?location=malindi",
  },
  {
    name: "Watamu",
    subtitle: "Marine National Park",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=85",
    href: "/properties?location=watamu",
  },
];

export default function Home() {
  const featured = properties.filter((p) => p.status === "available").slice(0, 3);
  const heroProperty = featured[0];
  const secondaryProperties = featured.slice(1, 3);

  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative hero-full overflow-hidden">
        <Image
          src="/hero-attachment.jpg"
          alt="Mtwapa Bay — Luxury Residence"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2416]/40 via-transparent to-[#2C2416]/70" />

        <div className="relative z-10 flex flex-col h-full justify-end pb-20 px-6 max-w-7xl mx-auto">
          <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-5 animate-fade-up">
            East Africa
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.0] max-w-4xl animate-fade-up mb-8">
            Africa&apos;s Most
            <br />
            Extraordinary
            <br />
            <em>Extraordinary Addresses</em>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up">
            <Link
              href="/properties"
              className="inline-block bg-white text-[#2C2416] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#F4F0E8] transition-colors"
            >
              Explore Properties
            </Link>
            <Link
              href="#contact"
              className="inline-block border border-white/50 text-white text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white/10 transition-colors"
            >
              Private Enquiry
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 animate-fade-in">
          <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-px h-14 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-5 bg-white/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Ticker Band ──────────────────────────────────────────────────── */}
      <div className="bg-[#2C2416] py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center text-[#E8DFD0]/50 text-[10px] tracking-[0.25em] uppercase px-8">
              {item}
              <span className="ml-8 w-1 h-1 rounded-full bg-[#C4704A] inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-5">
              About Mtwapa Bay
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[#2C2416] leading-[1.1] mb-8">
              Where Luxury Meets
              <br />
              the Landscape
            </h2>
            <p className="text-[#2C2416]/55 leading-relaxed mb-5 max-w-md">
              Africa&apos;s premier curator of exceptional properties. We represent
              the most architecturally significant and naturally privileged residences
              across East Africa&apos;s most distinguished addresses.
            </p>
            <p className="text-[#2C2416]/55 leading-relaxed mb-10 max-w-md">
              From UNESCO World Heritage manors to estate villas set within
              private nature reserves, every property meets an uncompromising standard of
              beauty, privacy, and provenance.
            </p>
            <Link
              href="/properties"
              className="inline-block bg-[#2C2416] text-[#F4F0E8] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#1A4A5A] transition-colors"
            >
              View All Properties
            </Link>
          </div>

          {/* Stats — right column */}
          <div className="grid grid-cols-2 gap-px bg-[#E8DFD0]">
            {[
              { value: "6", label: "Curated Listings" },
              { value: "3", label: "Counties" },
              { value: "30+", label: "Years Experience" },
              { value: "100%", label: "Bespoke Advisory" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#F4F0E8] p-10 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-5xl text-[#2C2416] mb-2">
                  {value}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2416]/40">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Properties — Editorial Layout ─────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
                Featured
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
                Exceptional Residences
              </h2>
            </div>
            <Link
              href="/properties"
              className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#1A4A5A] border-b border-[#1A4A5A] pb-0.5 hover:opacity-60 transition-opacity"
            >
              All Properties <span>→</span>
            </Link>
          </div>

          {/* Editorial grid: 1 large portrait + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            {/* Large hero card */}
            {heroProperty && (
              <Link
                href={`/properties/${heroProperty.slug}`}
                className="group block"
              >
                <div className="gallery-item relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[600px] overflow-hidden bg-[#E8DFD0]">
                  <Image
                    src={heroProperty.heroImage}
                    alt={heroProperty.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/80 via-transparent to-transparent" />

                  {/* Status */}
                  <div className="absolute top-5 left-5">
                    <span className={`badge badge-${heroProperty.status}`}>
                      {heroProperty.status === "available" ? "Available" : heroProperty.status}
                    </span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2">
                      {heroProperty.type} · {heroProperty.location}
                    </p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-2 group-hover:opacity-90 transition-opacity">
                      {heroProperty.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm">
                      {heroProperty.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                        {heroProperty.priceLabel}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-white/70 group-hover:text-white transition-colors">
                        View Property
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Two stacked cards */}
            <div className="flex flex-col gap-6">
              {secondaryProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.slug}`}
                  className="group block flex-1"
                >
                  <div className="gallery-item relative aspect-[4/3] overflow-hidden bg-[#E8DFD0]">
                    <Image
                      src={property.heroImage}
                      alt={property.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`badge badge-${property.status}`}>
                        {property.status === "available" ? "Available" : property.status}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[9px] tracking-[0.25em] uppercase text-white/50 mb-1">
                        {property.type} · {property.location}
                      </p>
                      <div className="flex items-end justify-between">
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white group-hover:opacity-90 transition-opacity">
                          {property.name}
                        </h3>
                        <p className="font-[family-name:var(--font-playfair)] text-lg text-white/80">
                          {property.priceLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* CTA card */}
              <Link
                href="/properties"
                className="group flex items-center justify-center bg-[#E8DFD0] hover:bg-[#2C2416] transition-colors duration-500 p-10 min-h-[120px]"
              >
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-xl text-[#2C2416] group-hover:text-white transition-colors mb-1">
                    View All Listings
                  </p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A9BAA] group-hover:text-white/50 transition-colors">
                    {properties.length} properties available
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations Strip ─────────────────────────────────────────── */}
      <section className="pb-24 overflow-hidden">
        <div className="px-6 max-w-7xl mx-auto mb-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
            Where We Operate
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
            Our Distinguished Addresses
          </h2>
        </div>

        <div className="flex gap-4 pl-6 overflow-x-auto hide-scrollbar pb-2">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group relative flex-shrink-0 w-64 sm:w-72 aspect-[3/4] overflow-hidden bg-[#E8DFD0] gallery-item"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/80 via-[#2C2416]/10 to-transparent group-hover:from-[#2C2416]/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-[family-name:var(--font-playfair)] text-xl text-white mb-1">
                  {dest.name}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                  {dest.subtitle}
                </p>
              </div>
            </Link>
          ))}
          {/* Trailing space for scroll overflow */}
          <div className="flex-shrink-0 w-6 pr-6" />
        </div>
      </section>

      {/* ── Philosophy ──────────────────────────────────────────────────── */}
      <section className="bg-[#2C2416] text-[#E8DFD0] py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8DFD0]/30 mb-8">
            Our Philosophy
          </p>
          <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl lg:text-5xl leading-[1.2] text-white mb-10">
            &ldquo;Every property we represent is not merely a residence — it is an
            argument for a different way of living: slower, more beautiful, more
            connected to the natural world.&rdquo;
          </blockquote>
          <p className="text-[#E8DFD0]/40 text-[10px] tracking-[0.2em] uppercase mb-10">
            Mtwapa Bay Advisory
          </p>
          <Link
            href="/properties"
            className="inline-block border border-white/30 text-white text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-[#2C2416] transition-colors"
          >
            Explore the Portfolio
          </Link>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionEyebrow className="mb-5">Private Enquiry</SectionEyebrow>
              <SectionHeading size="lg" className="mb-8">
                Begin Your
                <br />
                Conversation
              </SectionHeading>
              <p className="text-dusk/55 leading-relaxed mb-10 max-w-sm">
                Our advisory team provides discreet, expert guidance through every stage
                of the acquisition process. Available by appointment at our offices
                or at any property in our portfolio.
              </p>
              <div className="space-y-2 text-sm text-dusk/60">
                <p>
                  <a href="mailto:hello@mtwapabay.com" className="hover:text-ocean transition-colors">
                    hello@mtwapabay.com
                  </a>
                </p>
                <p>
                  <a href="tel:+254700000000" className="hover:text-ocean transition-colors">
                    +254 700 000 000
                  </a>
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" type="text" placeholder="James" />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" type="text" placeholder="Kariuki" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="james@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Input
                  multiline
                  id="message"
                  rows={4}
                  className="resize-none"
                  placeholder="Tell us about the property or lifestyle you have in mind..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
