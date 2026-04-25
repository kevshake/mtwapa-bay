"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
}

export default function PropertyGallery({ images, name }: Props) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setActive((a) => (a === 0 ? images.length - 1 : a - 1));
  const next = () => setActive((a) => (a === images.length - 1 ? 0 : a + 1));

  return (
    <>
      {/* Main gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-2">
        {/* Hero image */}
        <div
          className="gallery-item relative aspect-[16/10] cursor-zoom-in overflow-hidden bg-[#E8DFD0]"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[active]}
            alt={`${name} — photo ${active + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 75vw"
            priority
          />
          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-[#2C2416]/70 backdrop-blur-sm text-white text-[10px] px-3 py-1.5 tracking-[0.2em]">
            {active + 1} / {images.length}
          </div>
          {/* Nav arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            →
          </button>
        </div>

        {/* Thumbnail stack */}
        <div className="hidden lg:flex flex-col gap-2 max-h-[500px] overflow-y-auto">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`gallery-item relative flex-shrink-0 aspect-[3/2] overflow-hidden ring-2 transition-all ${
                active === i
                  ? "ring-[#1A4A5A]"
                  : "ring-transparent hover:ring-[#8A9BAA]"
              }`}
            >
              <Image
                src={src}
                alt={`${name} — thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="280px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Thumbnail strip (mobile) */}
      <div className="flex gap-2 mt-2 overflow-x-auto pb-1 lg:hidden">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`gallery-item relative flex-shrink-0 w-20 h-14 overflow-hidden ring-2 transition-all ${
              active === i ? "ring-[#1A4A5A]" : "ring-transparent"
            }`}
          >
            <Image
              src={src}
              alt={`Thumb ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl w-10 h-10 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 text-white/60 hover:text-white text-3xl w-12 h-12 flex items-center justify-center"
          >
            ←
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[16/10] px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${name} — photo ${active + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 text-white/60 hover:text-white text-3xl w-12 h-12 flex items-center justify-center"
          >
            →
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.2em]">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
