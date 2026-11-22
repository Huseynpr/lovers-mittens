export type ColorOption = {
  name: string;
  hex: string;
  // Real per-color product photo, once you have one per variant.
  // Until then the swatch falls back to the main product photo, tinted with `hex`.
  image?: string;
  // The Shopify variant ID for this color (cart permalink checkout needs one
  // variant ID per color — not per bundle). Replace the placeholder with the
  // real id from Shopify admin (Products -> this product -> this variant).
  variantId: string;
};

export type BundleOption = {
  setCount: 1 | 2 | 3;
  name: string;
  price: number;
  compareAtPrice: number;
  badge?: string;
  save?: string;
  // Optional Shopify discount code applied automatically via the cart
  // permalink's ?discount= param, so the real Shopify total matches the
  // bundle price shown here. Leave undefined until the code exists.
  discountCode?: string;
};

export type BundleProduct = {
  title: string;
  // image: the featured/first photo — used wherever only one photo fits
  // (brand story, cart lines, sticky bar). images: the full gallery.
  image: string;
  images: string[];
  bundles: BundleOption[];
  colors: ColorOption[];
};
