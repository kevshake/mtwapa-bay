import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/lib/properties";
import { Badge } from "@/components/ui";

interface Props {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: Props) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      {/* Image */}
      <div className="gallery-item relative aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        {/* Gradient overlay — always present, deepens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dusk/60 via-transparent to-transparent group-hover:from-dusk/75 transition-all duration-500" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <Badge status={property.status} />
        </div>

        {/* Virtual tour indicator */}
        {property.virtualTour && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#2C2416] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4704A] animate-pulse" />
            Tour
          </div>
        )}

        {/* Price — visible on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-[family-name:var(--font-playfair)] text-xl text-white">
            {property.priceLabel}
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 flex items-center gap-1">
            View <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4">
        {/* Type & location */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#8A9BAA] mb-1.5">
          {property.type} · {property.location}
        </p>

        {/* Name + price row */}
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2C2416] group-hover:text-[#1A4A5A] transition-colors">
            {property.name}
          </h3>
          <p className="font-[family-name:var(--font-playfair)] text-base text-[#2C2416]/60 flex-shrink-0">
            {property.priceLabel}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-[10px] tracking-wide text-[#2C2416]/40 uppercase">
          <span>{property.bedrooms} bed</span>
          <span>·</span>
          <span>{property.bathrooms} bath</span>
          <span>·</span>
          <span>{property.sqm.toLocaleString()} m²</span>
        </div>
      </div>
    </Link>
  );
}
