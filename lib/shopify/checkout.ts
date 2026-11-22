const SHOPIFY_STORE_DOMAIN = "7vrbb8-gh.myshopify.com";

// Shopify's cart permalink: /cart/{variantId}:{quantity},{variantId}:{quantity}
// adds those variants straight into the shopper's real Shopify cart and sends
// them to the Shopify-hosted cart page — no Storefront API token needed.
export function buildCartPermalink(items: { variantId: string; quantity: number }[], discountCode?: string): string {
  const itemsPart = items.map((item) => `${item.variantId}:${item.quantity}`).join(",");
  const url = `https://${SHOPIFY_STORE_DOMAIN}/cart/${itemsPart}`;
  return discountCode ? `${url}?discount=${encodeURIComponent(discountCode)}` : url;
}

export const SHOPIFY_CART_URL = `https://${SHOPIFY_STORE_DOMAIN}/cart`;
