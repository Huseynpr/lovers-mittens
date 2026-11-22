import type { BundleProduct } from "./types";

// Shown whenever SHOPIFY_STORE_DOMAIN / SHOPIFY_STOREFRONT_TOKEN aren't set yet,
// so the site runs and looks right before the Shopify product exists.
export const MOCK_PRODUCT: BundleProduct = {
  title: "The Lovers Mittens — Hold Hands, Stay Warm",
  image: "/images/mittens-black-lifestyle.webp",
  images: [
    "/images/mittens-black-lifestyle.webp",
    "/images/mittens-black-flatlay.webp",
    "/images/mittens-brown-lifestyle.webp",
    "/images/mittens-brown-flatlay.webp",
    "/images/mittens-lightgray-lifestyle.webp",
    "/images/mittens-lightgray-flatlay.webp",
    "/images/mittens-red-lifestyle.webp",
    "/images/mittens-red-flatlay.webp",
    "/images/mittens-yellow-lifestyle.webp",
    "/images/mittens-yellow-flatlay.webp",
  ],
  bundles: [
    { setCount: 1, name: "1 Set — Single Couple Set", price: 27.99, compareAtPrice: 44.99 },
    {
      setCount: 2,
      name: "2 Sets — Double Love Bundle",
      price: 44.99,
      compareAtPrice: 89.98,
      badge: "Most Popular",
      save: "Save $45",
      // discountCode: "BUNDLE2", // uncomment once this code exists in Shopify
    },
    {
      setCount: 3,
      name: "3 Sets — Holiday Gift Bundle",
      price: 59.99,
      compareAtPrice: 134.97,
      badge: "Best Value",
      save: "Save $75",
      // discountCode: "BUNDLE3", // uncomment once this code exists in Shopify
    },
  ],
  // Real Shopify variants — "Couple Holding Hands Knitted Winter Mittens (Free Size)"
  // checkout via checkout.loversmittens.com.
  colors: [
    { name: "Black", hex: "#1A1A1A", variantId: "46511540699205", image: "/images/mittens-black-flatlay.webp" },
    { name: "Brown", hex: "#6B4423", variantId: "46511540731973", image: "/images/mittens-brown-flatlay.webp" },
    { name: "Light Gray", hex: "#C9C6C0", variantId: "46511540764741", image: "/images/mittens-lightgray-flatlay.webp" },
    { name: "Red", hex: "#B0272B", variantId: "46511540797509", image: "/images/mittens-red-flatlay.webp" },
    { name: "Yellow", hex: "#E0B23A", variantId: "46511540830277", image: "/images/mittens-yellow-flatlay.webp" },
  ],
};
