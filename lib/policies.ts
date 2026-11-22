export type PolicySlug = "shipping" | "returns" | "privacy" | "terms";

export const POLICIES: Record<PolicySlug, { title: string; updated: string; body: string[] }> = {
  shipping: {
    title: "Shipping Policy",
    updated: "Last updated November 2026",
    body: [
      "We currently ship within the United States. Orders are processed within 1-2 business days.",
      "Free US Shipping on every order. Once your order ships, delivery typically takes 4-9 business days to arrive.",
      "You'll receive a tracking link by email as soon as your order ships. If a package is marked delivered but hasn't arrived, contact us within 7 days and we'll help track it down.",
      "During the holiday season, carrier delays are occasionally outside our control — we recommend ordering at least 9 business days before your gift date to be safe.",
    ],
  },
  returns: {
    title: "Return & Refund Policy",
    updated: "Last updated November 2026",
    body: [
      "We stand behind every set with a 30-Day Happiness Guarantee. If your Lovers Mittens set isn't right for you, you can return it within 30 days of delivery for a full refund or exchange.",
      "To start a return or exchange, email hello@loversmittens.com with your order number. For standard returns and exchanges, return shipping is the customer's responsibility.",
      "Items should be unworn, unwashed, and in their original packaging. Once we receive your return, refunds are processed within 3-5 business days back to your original payment method.",
      "Gift purchases: if a set was gifted to you, we're happy to offer store credit or an exchange instead of a refund to the original purchaser.",
      "Damaged or incorrect items: if your order arrives damaged or isn't what you ordered, email us photo proof within 7 days of delivery — once confirmed, we'll send a free replacement at no cost to you.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated November 2026",
    body: [
      "We collect the information you provide at checkout (name, shipping address, email, payment details) solely to process and fulfil your order, and to contact you about it.",
      "If you subscribe to our list, we use your email to send order updates, restock alerts, and occasional promotions. You can unsubscribe at any time from the link in any email.",
      "Payment is processed securely through Shopify's checkout — we never store your full card details on our own servers.",
      "We don't sell your personal information to third parties. We may share order data with shipping carriers and our payment processor solely to fulfil your purchase.",
      "You can request a copy of, or deletion of, your personal data at any time by emailing hello@loversmittens.com.",
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated November 2026",
    body: [
      "By placing an order with Lovers Mittens, you agree to these terms. Please read them before completing your purchase.",
      "All prices are listed in USD and are subject to change without notice; the price at the time you complete checkout is the price you'll be charged.",
      "We reserve the right to limit or cancel quantities purchased per person, per household, or per order, particularly during high-demand holiday periods.",
      "Product photos are representative — due to the handmade nature of knit goods, slight variations in color and texture between individual sets are normal and not considered defects.",
      "Continued use of this site after changes to these terms constitutes acceptance of the revised terms.",
    ],
  },
};
