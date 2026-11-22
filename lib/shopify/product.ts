import { isShopifyConfigured, shopifyFetch } from "./client";
import { PRODUCT_QUERY } from "./queries";
import { MOCK_PRODUCT } from "./mock-data";
import type { BundleProduct } from "./types";

// Bundle pricing, per-color photos, and variant ids are fixed, static catalog
// data (see mock-data.ts) — checkout goes straight to Shopify via cart
// permalinks, so there's no Storefront API product/variant fetch to keep them
// in sync with. Only the title and hero fallback photo are optionally pulled
// live from Shopify.
type ProductQueryResult = {
  product: {
    title: string;
    featuredImage: { url: string } | null;
  } | null;
};

export async function getBundleProduct(): Promise<BundleProduct> {
  "use cache";

  const handle = process.env.SHOPIFY_PRODUCT_HANDLE;

  if (!isShopifyConfigured || !handle) {
    return MOCK_PRODUCT;
  }

  try {
    const data = await shopifyFetch<ProductQueryResult>({
      query: PRODUCT_QUERY,
      variables: { handle },
    });

    if (!data.product) {
      return MOCK_PRODUCT;
    }

    return {
      ...MOCK_PRODUCT,
      title: data.product.title,
      image: data.product.featuredImage?.url ?? MOCK_PRODUCT.image,
    };
  } catch {
    return MOCK_PRODUCT;
  }
}
