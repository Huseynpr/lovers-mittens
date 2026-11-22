"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { Icon } from "./Icon";
import { PaymentBadges } from "./PaymentBadges";
import { buildCartPermalink } from "@/lib/shopify/checkout";
import { MOCK_PRODUCT } from "@/lib/shopify/mock-data";

export function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeLine, totalSets, pricing } = useCart();
  const [redirecting, setRedirecting] = useState(false);

  const handleCheckout = () => {
    if (lines.length === 0) return;
    const items = lines.map((l) => ({ variantId: l.variantId, quantity: l.quantity }));
    setRedirecting(true);
    window.location.href = buildCartPermalink(items);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed top-0 right-0 z-[61] h-full w-full max-w-[400px] bg-ivory shadow-[-20px_0_50px_-20px_rgba(0,0,0,0.35)] flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-espresso/10 flex-shrink-0">
          <h2 className="font-heading font-semibold text-lg flex items-center gap-2">
            <Icon name="cart" size={19} />
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso/60 hover:text-espresso transition"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-2 text-[#5c5650]">
              <Icon name="cart" size={34} className="opacity-30 mb-1" />
              <p className="text-[13.5px]">Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {lines.map((line) => (
                <div key={line.variantId} className="flex gap-3 items-center">
                  <CartLineThumbnail image={line.image} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-semibold truncate">{line.name}</div>
                    <div className="text-[12.5px] text-[#5c5650]">$27.99</div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(line.variantId, line.quantity - 1)}
                        className="w-6 h-6 rounded-md border border-espresso/15 flex items-center justify-center hover:bg-espresso/5 transition"
                        aria-label="Decrease quantity"
                      >
                        <Icon name="minus-minor" size={13} />
                      </button>
                      <span className="text-[13px] font-medium w-5 text-center">{line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(line.variantId, line.quantity + 1)}
                        className="w-6 h-6 rounded-md border border-espresso/15 flex items-center justify-center hover:bg-espresso/5 transition"
                        aria-label="Increase quantity"
                      >
                        <Icon name="plus-minor" size={13} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeLine(line.variantId)}
                    aria-label="Remove"
                    className="text-espresso/40 hover:text-berry transition flex-shrink-0"
                  >
                    <Icon name="trash" size={17} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {lines.length > 0 ? (
          <div className="border-t border-espresso/10 px-5 py-4 flex-shrink-0">
            {pricing.save > 0 ? (
              <div className="flex items-center justify-between text-[12.5px] text-evergreen font-medium mb-1">
                <span>Bundle savings</span>
                <span>-${pricing.save.toFixed(2)}</span>
              </div>
            ) : null}
            <div className="flex items-center justify-between text-[15px] font-semibold mb-1">
              <span>
                Total ({totalSets} {totalSets === 1 ? "set" : "sets"})
              </span>
              <span>${pricing.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11.5px] text-evergreen font-medium mb-3.5">
              <Icon name="shipping" size={13} />
              Shipping: FREE (US)
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={redirecting}
              className="w-full bg-berry text-ivory rounded-2xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-evergreen transition disabled:opacity-70 shadow-[0_12px_30px_-10px_rgba(122,32,33,0.5)]"
            >
              {redirecting ? "Taking you to checkout…" : "Proceed to Checkout"}
            </button>
            <div className="mt-3">
              <PaymentBadges />
            </div>
          </div>
        ) : null}
      </aside>
    </>
  );
}

function CartLineThumbnail({ image }: { image: string }) {
  const [failed, setFailed] = useState(false);
  const src = failed || !image ? MOCK_PRODUCT.image : image;

  return (
    <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-cashmere">
      <Image src={src} alt="" fill sizes="56px" className="object-cover" onError={() => setFailed(true)} />
    </div>
  );
}
