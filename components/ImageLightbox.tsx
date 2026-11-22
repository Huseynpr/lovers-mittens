"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const SWIPE_THRESHOLD = 50;
const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const hasMultiple = images.length > 1;

  const show = useCallback((i: number) => onNavigate((i + images.length) % images.length), [images.length, onNavigate]);

  // Lock page scroll while open, restore it on close.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Focus the dialog on open, return focus to whatever opened it on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => {
      previouslyFocused?.focus();
    };
  }, []);

  // Escape closes, arrow keys navigate, Tab is trapped inside the dialog.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (hasMultiple && e.key === "ArrowLeft") {
        show(index - 1);
        return;
      }
      if (hasMultiple && e.key === "ArrowRight") {
        show(index + 1);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, images.length, hasMultiple, onClose, show]);

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

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} photos`}
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-espresso/95 outline-none"
    >
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
        onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => {
              e.stopPropagation();
              show(index - 1);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/15 text-ivory flex items-center justify-center hover:bg-ivory/25 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6 9 12l6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              show(index + 1);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/15 text-ivory flex items-center justify-center hover:bg-ivory/25 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
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
    </div>,
    document.body
  );
}
