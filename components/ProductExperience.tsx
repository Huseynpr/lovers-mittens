"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartContext";
import { Icon } from "./Icon";
import { ProductGallery } from "./ProductGallery";
import { PaymentBadges } from "./PaymentBadges";
import { SnowCap } from "./SnowCap";
import type { BundleProduct, ColorOption } from "@/lib/shopify/types";

export function ProductExperience({ product }: { product: BundleProduct }) {
  const { addLines } = useCart();
  const [bundleIndex, setBundleIndex] = useState(0);
  const [colors, setColors] = useState<(string | null)[]>([
    product.colors[0]?.name ?? null,
    product.colors[1]?.name ?? null,
    product.colors[2]?.name ?? null,
  ]);
  // The gallery follows whichever color swatch was changed most recently.
  const [activeColorName, setActiveColorName] = useState(product.colors[0]?.name ?? "");
  const [stickyVisible, setStickyVisible] = useState(false);

  const bundle = product.bundles[bundleIndex];
  const setCount = bundle.setCount;

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const summaryColors = useMemo(
    () => colors.slice(0, setCount).filter((c): c is string => Boolean(c)),
    [colors, setCount]
  );

  const handleAddToCart = () => {
    const selected = summaryColors
      .map((name) => product.colors.find((c) => c.name === name))
      .filter((c): c is NonNullable<typeof c> => Boolean(c));
    if (selected.length !== setCount) return;

    // Group by variant id so "2 Black" becomes one line at quantity 2,
    // not two separate quantity-1 lines — matches the cart permalink format.
    const quantities = new Map<string, { name: string; hex: string; image: string; quantity: number }>();
    for (const c of selected) {
      const existing = quantities.get(c.variantId);
      quantities.set(
        c.variantId,
        existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { name: c.name, hex: c.hex, image: c.flatlayImage, quantity: 1 }
      );
    }
    const newLines = Array.from(quantities, ([variantId, data]) => ({ variantId, ...data }));
    addLines(newLines);
  };

  return (
    <>
      <section id="shop" className="relative scroll-mt-24 overflow-hidden">
        <SnowCap />
        <div className="pointer-events-none absolute -top-24 -left-32 w-[420px] h-[420px] rounded-full bg-gold/20 blur-[100px] animate-[lm-float_14s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute top-40 -right-28 w-[380px] h-[380px] rounded-full bg-evergreen/15 blur-[100px] animate-[lm-float_18s_ease-in-out_infinite]" style={{ animationDelay: "-6s" }} />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-berry/10 blur-[100px] animate-[lm-float_11s_ease-in-out_infinite]" style={{ animationDelay: "-3s" }} />

        <div className="relative max-w-[1180px] mx-auto px-6 pt-8 md:pt-12 pb-20 grid md:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <ProductGallery colors={product.colors} mixImage={product.mixImage} activeColorName={activeColorName} alt={product.title} />

        <div>
          <span className="inline-flex items-center gap-1.5 text-[11.5px] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
            <Icon name="snowflake" size={13} />
            Limited Holiday Edition
          </span>
          <h1 className="font-heading font-medium text-[32px] md:text-[38px] leading-tight mb-3 tracking-tight">{product.title}</h1>

          <div className="flex items-center gap-1 mb-4 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" size={15} />
            ))}
            <span className="text-espresso text-[12.5px] opacity-75 ml-1">4.9 (482 reviews)</span>
          </div>

          <div className="flex gap-2 flex-wrap mb-4.5">
            <Pill icon="one-size" label="One Size Fits All" />
            <Pill icon="warmth" label="Soft-Knit Warmth" />
          </div>

          <p className="text-[#5c5650] text-[14.5px] leading-relaxed max-w-[46ch] mb-5">
            A 3-piece knit mitten set with one shared heart-shaped mitten for your joined hands, and two matching
            outer mittens — the coziest way to walk through winter together.
          </p>

          <div className="grid gap-2.5 mb-5">
            {product.bundles.map((b, i) => (
              <button
                key={b.setCount}
                type="button"
                onClick={() => setBundleIndex(i)}
                className={`relative rounded-2xl px-4.5 py-3.5 flex items-center justify-between gap-3 text-left transition border-[1.5px] backdrop-blur-md ${
                  i === bundleIndex ? "border-gold bg-gold/10 shadow-[0_0_0_1px_var(--color-gold)]" : "border-espresso/10 bg-white/70 hover:border-gold/50"
                }`}
              >
                {b.badge ? (
                  <span
                    className="absolute -top-[9px] left-4 text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-[3px] rounded-full"
                    style={{ background: b.setCount === 3 ? "var(--color-evergreen)" : "var(--color-berry)" }}
                  >
                    {b.badge}
                  </span>
                ) : null}
                <div>
                  <div className="font-semibold text-[14.5px]">{b.name}</div>
                  {b.save ? <div className="text-[11.5px] text-evergreen font-medium">{b.save}</div> : null}
                </div>
                <div className="text-right whitespace-nowrap">
                  {b.compareAtPrice > b.price ? (
                    <span className="text-[12.5px] text-[#9b9188] line-through mr-1.5">${b.compareAtPrice.toFixed(2)}</span>
                  ) : null}
                  <span className="font-semibold text-[15.5px]">${b.price.toFixed(2)}</span>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {Array.from({ length: setCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden px-1 -mx-1"
              >
                <div className="mb-4 pt-1">
                  <div className="flex justify-between text-[12.5px] font-semibold mb-2">
                    <span>Set {i + 1} Color</span>
                    <span className="text-gold font-semibold">{colors[i]}</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((c) => (
                      <ColorSwatch
                        key={c.name}
                        color={c}
                        selected={colors[i] === c.name}
                        onClick={() => {
                          setColors((prev) => {
                            const next = [...prev];
                            next[i] = c.name;
                            return next;
                          });
                          setActiveColorName(c.name);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-berry text-ivory rounded-2xl py-4 px-5 font-semibold flex items-center justify-center gap-2.5 hover:bg-evergreen transition shadow-[0_12px_30px_-10px_rgba(122,32,33,0.5)]"
          >
            <Icon name="cart" size={17} />
            {`Add to Cart — $${bundle.price.toFixed(2)}`}
          </button>

          <div className="mt-3.5">
            <PaymentBadges />
          </div>

          <a
            href="/policies/returns"
            className="flex items-center gap-2 text-[12.5px] text-[#5c5650] mt-4 hover:text-evergreen transition underline underline-offset-2 decoration-dotted w-fit"
          >
            <Icon name="guarantee" size={15} className="text-evergreen" />
            30-Day Happiness Guarantee — Easy Returns
          </a>
        </div>
        </div>
      </section>

      <div
        className={`fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 transition-all duration-300 ${
          stickyVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-[520px] bg-ivory/97 backdrop-blur border border-espresso/10 rounded-2xl shadow-[0_14px_34px_-10px_rgba(0,0,0,0.3)] px-4 py-2.5 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-[10px] overflow-hidden flex-shrink-0 bg-cashmere relative">
            <Image src={product.image} alt="" fill sizes="44px" className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12.5px] font-semibold truncate">{bundle.name}</div>
            <div className="text-[11.5px] text-[#5c5650] truncate">{summaryColors.join(" + ")}</div>
          </div>
          <div className="whitespace-nowrap">
            {bundle.compareAtPrice > bundle.price ? (
              <span className="text-[11.5px] text-[#9b9188] line-through mr-1">${bundle.compareAtPrice.toFixed(2)}</span>
            ) : null}
            <span className="text-sm font-semibold">${bundle.price.toFixed(2)}</span>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-berry text-ivory rounded-xl px-4 py-2.5 font-semibold text-[13px] whitespace-nowrap hover:bg-evergreen transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

function Pill({ icon, label }: { icon: Parameters<typeof Icon>[0]["name"]; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/40 rounded-full px-3 py-1 text-xs font-semibold">
      <Icon name={icon} size={14} />
      {label}
    </span>
  );
}

function ColorSwatch({ color, selected, onClick }: { color: ColorOption; selected: boolean; onClick: () => void }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={color.name}
      aria-pressed={selected}
      title={color.name}
      className="relative w-11 h-11 rounded-xl overflow-hidden transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
      style={{
        boxShadow: selected
          ? "0 0 0 2px var(--color-ivory), 0 0 0 3px var(--color-gold)"
          : "0 0 0 1px rgba(30,27,24,0.15)",
      }}
    >
      {imageFailed ? (
        <span className="absolute inset-0" style={{ backgroundColor: color.hex }} />
      ) : (
        <Image
          src={color.flatlayImage}
          alt=""
          fill
          sizes="44px"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      )}
    </button>
  );
}
