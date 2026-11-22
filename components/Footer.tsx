import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { FairyLights } from "./FairyLights";

const POLICY_LINKS = [
  { label: "Shipping Policy", href: "/policies/shipping" },
  { label: "Return & Refund Policy", href: "/policies/returns" },
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Terms of Service", href: "/policies/terms" },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory/85 px-6 pt-2 pb-6">
      <div className="max-w-[1180px] mx-auto">
        <FairyLights wireColor="#FAF7F2" />
      </div>
      <div className="max-w-[1180px] mx-auto pt-6">
        <div className="flex justify-between flex-wrap gap-6 mb-6">
          <Logo dark />
          <div className="flex gap-4.5 flex-wrap text-[12.5px] items-center">
            {POLICY_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold transition">
                {link.label}
              </a>
            ))}
            <a href="/track-order" className="border border-ivory/30 rounded-full px-3 py-1 text-xs hover:border-gold hover:text-gold transition">
              Track Your Order
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-8.5 h-8.5 rounded-full border border-ivory/25 flex items-center justify-center hover:border-gold hover:text-gold transition">
              <Icon name="instagram" size={16} />
            </a>
            <a href="#" aria-label="TikTok" className="w-8.5 h-8.5 rounded-full border border-ivory/25 flex items-center justify-center hover:border-gold hover:text-gold transition">
              <Icon name="tiktok" size={16} />
            </a>
          </div>
        </div>
        <div className="border-t border-ivory/15 pt-4 flex justify-between flex-wrap gap-2 text-[11.5px] opacity-65">
          <span>&copy; 2026 Lovers Mittens</span>
          <span>hello@loversmittens.com</span>
        </div>
      </div>
    </footer>
  );
}
