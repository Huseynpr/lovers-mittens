export const PRODUCT_QUERY = /* GraphQL */ `
  query BundleProduct($handle: String!) {
    product(handle: $handle) {
      title
      featuredImage {
        url
      }
    }
  }
`;
