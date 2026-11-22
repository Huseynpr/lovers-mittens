import type { BundleOption } from "@/lib/shopify/types";

// Mirrors Shopify Checkout exactly: discounts never stack. Exactly 2 sets
// gets the flat 2-set bundle price; 3 or more sets gets a single flat
// discount (the 3-set bundle's discount amount) applied once to the whole
// total, no matter how many sets beyond 3 — never multiplied per every 3.
export function computeCartPricing(totalSets: number, bundles: BundleOption[]) {
  const unit = bundles.find((b) => b.setCount === 1)?.price ?? 0;
  const b2 = bundles.find((b) => b.setCount === 2);
  const b3 = bundles.find((b) => b.setCount === 3);

  if (totalSets <= 0) return { price: 0, referencePrice: 0, save: 0 };

  const referencePrice = unit * totalSets;
  let price = referencePrice;

  if (totalSets === 2 && b2) {
    price = b2.price;
  } else if (totalSets >= 3 && b3) {
    const flatDiscount = unit * 3 - b3.price;
    price = referencePrice - flatDiscount;
  }

  const save = Math.max(0, referencePrice - price);
  return { price, referencePrice, save };
}
