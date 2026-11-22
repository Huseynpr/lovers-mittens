"use client";

import { useRef } from "react";
import Image from "next/image";

const SWIPE_THRESHOLD = 50;

export function ImageLightbox({
  images,
  alt,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  const show = (i: number) => onNavigate((i + images.length) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      show(delta < 0 ? index + 1 : index - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-espresso/95">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ivory/15 text-ivory flex items-center justify-center hover:bg-ivory/25 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {hasMultiple ? (
        <span className="absolute top-5 left-1/2 -translate-x-1/2 text-ivory/70 text-[13px] font-medium">
          {index + 1} / {images.length}
        </span>
      ) : null}

      <div
        className="relative w-full h-full max-w-[720px] max-h-[82vh] mx-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image src={images[index]} alt={alt} fill sizes="90vw" className="object-contain" priority />
      </div>

      {hasMultiple ? (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => show(index - 1)}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/15 text-ivory flex items-center justify-center hover:bg-ivory/25 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6 9 12l6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => show(index + 1)}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/15 text-ivory flex items-center justify-center hover:bg-ivory/25 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                onClick={() => show(i)}
                className={`w-2 h-2 rounded-full transition ${i === index ? "bg-gold" : "bg-ivory/40"}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
