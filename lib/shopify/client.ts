const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
const API_VERSION = process.env.SHOPIFY_API_VERSION || "2025-10";

export const isShopifyConfigured = Boolean(DOMAIN && TOKEN);

type ShopifyResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

export async function shopifyFetch<T>(params: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
}): Promise<T> {
  if (!isShopifyConfigured) {
    throw new Error("Shopify Storefront API is not configured (missing env vars).");
  }

  const res = await fetch(`https://${DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query: params.query, variables: params.variables }),
    cache: params.cache,
  });

  const json = (await res.json()) as ShopifyResponse<T>;

  if (json.errors?.length) {
    throw new Error(`Shopify Storefront API error: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  if (!json.data) {
    throw new Error("Shopify Storefront API returned no data.");
  }
  return json.data;
}
