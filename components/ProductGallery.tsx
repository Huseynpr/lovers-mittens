"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram } from "./Logo";
import { ImageLightbox } from "./ImageLightbox";
import type { ColorOption } from "@/lib/shopify/types";

const SWIPE_THRESHOLD = 50;

export function ProductGallery({
  colors,
  mixImage,
  activeColorName,
  alt,
}: {
  colors: ColorOption[];
  mixImage: string;
  activeColorName: string;
  alt: string;
}) {
  const activeColor = colors.find((c) => c.name === activeColorName) ?? colors[0];
  const images = useMemo(
    () => [activeColor.lifestyleImage, activeColor.flatlayImage, mixImage],
    [activeColor, mixImage]
  );

  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  // Switching color always starts back at the first (lifestyle) photo. Adjusting
  // state during render (rather than in an effect) avoids an extra render pass.
  const [renderedColorName, setRenderedColorName] = useState(activeColor.name);
  if (renderedColorName !== activeColor.name) {
    setRenderedColorName(activeColor.name);
    setActive(0);
  }

  // Preload every color's photos once, so switching colors feels instant.
  useEffect(() => {
    for (const c of colors) {
      const lifestyle = new window.Image();
      lifestyle.src = c.lifestyleImage;
      const flatlay = new window.Image();
      flatlay.src = c.flatlayImage;
    }
  }, [colors]);

  const show = (index: number) => setActive((index + images.length) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      show(delta < 0 ? active + 1 : active - 1);
    }
  };

  return (
    <div className="md:sticky md:top-24">
      <div
        className="group relative rounded-[22px] overflow-hidden bg-cashmere aspect-[4/5] shadow-[0_20px_60px_-20px_rgba(30,27,24,0.25)] cursor-zoom-in"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="View full size"
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[active]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0"
            >
              <Image src={images[active]} alt={alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
        </button>

        <div className="absolute top-4 left-4 bg-evergreen text-ivory text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full shadow">
          🎁 Gift Ready
        </div>
        <div className="absolute top-4 -right-10 rotate-45 bg-berry text-ivory text-[11px] font-semibold tracking-wide px-10 py-1 shadow-lg">
          Holiday Sale
        </div>
        <div className="absolute bottom-4 right-4 opacity-85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          <Monogram size={34} />
        </div>

        {hasMultiple ? (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => show(active - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/15 backdrop-blur-sm text-white shadow flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6 9 12l6 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => show(active + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/15 backdrop-blur-sm text-white shadow flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => show(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`relative aspect-square w-full overflow-hidden rounded-xl border-2 transition ${
                i === active ? "border-gold" : "border-espresso/10 hover:border-gold/50"
              }`}
            >
              <Image src={img} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      {lightboxOpen ? (
        <ImageLightbox images={images} alt={alt} index={active} onClose={() => setLightboxOpen(false)} onNavigate={show} />
      ) : null}
    </div>
  );
}
