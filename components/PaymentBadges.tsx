import { Icon } from "./Icon";

const BADGES: { label: string; bg: string; fg: string; border?: boolean }[] = [
  { label: "Shop Pay", bg: "#5A31F4", fg: "#FFFFFF" },
  { label: "Apple Pay", bg: "#000000", fg: "#FFFFFF" },
  { label: "Google Pay", bg: "#FFFFFF", fg: "#3C4043", border: true },
  { label: "PayPal", bg: "#003087", fg: "#FFFFFF" },
  { label: "VISA", bg: "#1A1F71", fg: "#FFFFFF" },
  { label: "Mastercard", bg: "#F3F3F3", fg: "#1A1A1A", border: true },
  { label: "Amex", bg: "#2E77BC", fg: "#FFFFFF" },
];

export function PaymentBadges() {
  return (
    <div>
      <div className="flex items-center justify-center gap-1.5 flex-wrap mb-2">
        {BADGES.map((b) => (
          <span
            key={b.label}
            className={`inline-flex items-center justify-center h-[21px] px-2 rounded-md text-[10px] font-semibold tracking-tight whitespace-nowrap ${
              b.border ? "border border-espresso/15" : ""
            }`}
            style={{ backgroundColor: b.bg, color: b.fg }}
          >
            {b.label}
          </span>
        ))}
      </div>
      <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#8a8278] text-center">
        <Icon name="lock" size={12} />
        Guaranteed safe &amp; secure checkout &bull; Free US Shipping
      </p>
    </div>
  );
}
