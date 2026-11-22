"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="text-ivory p-1"
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>

      {open ? (
        <div className="absolute top-full left-0 right-0 bg-espresso border-b border-gold/20 shadow-lg">
          <nav className="flex flex-col px-6 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-ivory/85 border-b border-ivory/10 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
