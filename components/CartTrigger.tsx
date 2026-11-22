"use client";

import { Icon } from "./Icon";
import { useCart } from "./CartContext";

export function CartTrigger() {
  const { totalSets, openCart } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      aria-label="Open cart"
      className="relative flex text-ivory hover:text-gold transition"
    >
      <Icon name="cart" size={22} />
      {totalSets > 0 ? (
        <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-[16px] px-[3px] rounded-full bg-berry text-ivory text-[10px] font-semibold flex items-center justify-center leading-none">
          {totalSets}
        </span>
      ) : null}
    </button>
  );
}
