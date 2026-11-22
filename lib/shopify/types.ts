export type ColorOption = {
  name: string;
  // Fallback only — used if a photo fails to load, never shown otherwise.
  hex: string;
  // Lifestyle photo: a couple wearing the mittens in this color.
  lifestyleImage: string;
  // Clean flat-lay product photo in this color — also used for the swatch thumbnail.
  flatlayImage: string;
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
  // Fallback hero photo — used wherever only one photo fits (brand story, sticky bar).
  image: string;
  // Shared "all colors together" photo, shown as the last gallery image for every color.
  mixImage: string;
  bundles: BundleOption[];
  colors: ColorOption[];
};
