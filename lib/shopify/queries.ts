export const PRODUCT_QUERY = /* GraphQL */ `
  query BundleProduct($handle: String!) {
    product(handle: $handle) {
      title
      featuredImage {
        url
      }
      images(first: 10) {
        edges {
          node {
            url
          }
        }
      }
    }
  }
`;
