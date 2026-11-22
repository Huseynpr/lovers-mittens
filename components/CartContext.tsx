"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { MOCK_PRODUCT } from "@/lib/shopify/mock-data";
import { computeCartPricing } from "@/lib/cart/pricing";

export type CartLine = {
  variantId: string;
  name: string;
  hex: string;
  image: string;
  quantity: number;
};

type NewCartLine = Omit<CartLine, "quantity"> & { quantity: number };

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  totalSets: number;
  pricing: { price: number; referencePrice: number; save: number };
  openCart: () => void;
  closeCart: () => void;
  addLines: (newLines: NewCartLine[]) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeLine: (variantId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lm-cart-lines";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupted/blocked storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore blocked storage (private mode, etc.)
    }
  }, [lines, hydrated]);

  const addLines = (newLines: NewCartLine[]) => {
    setLines((prev) => {
      const map = new Map<string, CartLine>(prev.map((l) => [l.variantId, l]));
      for (const line of newLines) {
        const existing = map.get(line.variantId);
        map.set(
          line.variantId,
          existing ? { ...existing, quantity: existing.quantity + line.quantity } : { ...line }
        );
      }
      return Array.from(map.values());
    });
    setIsOpen(true);
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.variantId !== variantId)
        : prev.map((l) => (l.variantId === variantId ? { ...l, quantity } : l))
    );
  };

  const removeLine = (variantId: string) => {
    setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  };

  const totalSets = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);
  const pricing = useMemo(() => computeCartPricing(totalSets, MOCK_PRODUCT.bundles), [totalSets]);

  return (
    <CartContext.Provider
      value={{
        lines,
        isOpen,
        totalSets,
        pricing,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addLines,
        updateQuantity,
        removeLine,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
