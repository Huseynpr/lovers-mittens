import { Logo } from "./Logo";
import { CartTrigger } from "./CartTrigger";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "#our-story", label: "Our Story" },
  { href: "#shop", label: "Shop" },
  { href: "#moments", label: "Moments" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="relative sticky top-0 z-40 bg-espresso shadow-[0_4px_20px_-8px_rgba(0,0,0,0.4)]">
      <div className="max-w-[1180px] mx-auto px-6 py-3.5 flex items-center justify-between gap-5">
        <a href="#" aria-label="Lovers Mittens">
          <Logo dark />
        </a>
        <nav className="hidden md:flex gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-ivory/75 hover:text-gold transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <CartTrigger />
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
      <div className="h-[5px] lm-candy-stripe" />
    </header>
  );
}
