import type { Amenity } from "@/lib/properties";

interface Props {
  amenities: Amenity[];
}

export default function AmenitiesGrid({ amenities }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E8DFD0]">
      {amenities.map(({ label }) => (
        <div
          key={label}
          className="bg-[#F4F0E8] px-5 py-4 flex items-center gap-3 group hover:bg-[#2C2416] transition-colors duration-300"
        >
          <span className="w-1 h-1 rounded-full bg-[#C4704A] flex-shrink-0 group-hover:bg-[#E8DFD0] transition-colors" />
          <span className="text-[11px] tracking-wide text-[#2C2416]/65 group-hover:text-[#E8DFD0] transition-colors leading-snug">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
