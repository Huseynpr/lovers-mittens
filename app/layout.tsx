import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Snowfall } from "@/components/Snowfall";
import { CartProvider } from "@/components/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lovers Mittens — Hold Hands, Stay Warm",
  description:
    "A 3-piece knit mitten set with one shared heart-shaped mitten for your joined hands, and two matching outer mittens.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-espresso relative">
        <Snowfall />
        <CartProvider>
          <div className="relative z-10 flex flex-col min-h-full">{children}</div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
