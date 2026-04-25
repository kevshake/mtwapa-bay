"use client";

import { useState } from "react";
import Image from "next/image";
import type { VirtualTour as VT } from "@/lib/properties";

interface Props {
  tour: VT;
  propertyName: string;
}

export default function VirtualTour({ tour, propertyName }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-[#2C2416] overflow-hidden">
      {!playing ? (
        /* Thumbnail with play button */
        <>
          {tour.thumbnail && (
            <Image
              src={tour.thumbnail}
              alt={`${propertyName} virtual tour thumbnail`}
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <button
              onClick={() => setPlaying(true)}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-white ml-1.5" />
              </div>
              <div className="text-center">
                <p className="text-white text-[10px] tracking-[0.25em] uppercase mb-1">
                  Virtual Tour
                </p>
                <p className="text-white/50 text-xs">
                  Experience {propertyName}
                </p>
              </div>
            </button>
          </div>
        </>
      ) : (
        /* Embedded video/tour */
        <iframe
          src={
            tour.type === "youtube"
              ? `${tour.url}?autoplay=1&rel=0&modestbranding=1`
              : tour.url
          }
          className="w-full h-full"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          title={`${propertyName} Virtual Tour`}
        />
      )}
    </div>
  );
}
