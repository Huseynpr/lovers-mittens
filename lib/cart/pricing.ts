import type { BundleOption } from "@/lib/shopify/types";

// Mirrors the Shopify-side bundle discount: 1/2/3 sets are priced per the
// matching BundleOption, anything beyond 3 greedily stacks 3-set bundles
// plus a 1 or 2 set remainder, so the cart total always matches what
// Shopify would charge regardless of how the colors are split up.
export function computeCartPricing(totalSets: number, bundles: BundleOption[]) {
  const unit = bundles.find((b) => b.setCount === 1)?.price ?? 0;
  const b2 = bundles.find((b) => b.setCount === 2);
  const b3 = bundles.find((b) => b.setCount === 3);

  if (totalSets <= 0) return { price: 0, referencePrice: 0, save: 0 };

  let remaining = totalSets;
  let price = 0;

  if (b3) {
    while (remaining >= 3) {
      price += b3.price;
      remaining -= 3;
    }
  }
  if (remaining === 2 && b2) {
    price += b2.price;
    remaining = 0;
  }
  price += remaining * unit;

  const referencePrice = unit * totalSets;
  const save = Math.max(0, referencePrice - price);
  return { price, referencePrice, save };
}
