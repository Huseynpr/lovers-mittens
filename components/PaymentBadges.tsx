import { Icon } from "./Icon";

function ShopPayMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 7.5h-2.2a3.3 3.3 0 0 0-6.6 0H6.5a1 1 0 0 0-1 .9l-1 11a1 1 0 0 0 1 1.1h13a1 1 0 0 0 1-1.1l-1-11a1 1 0 0 0-1-.9ZM12 5.7a1.8 1.8 0 0 1 1.75 1.8h-3.5A1.8 1.8 0 0 1 12 5.7Z" />
    </svg>
  );
}

function ApplePayMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.4 2.6c.1 1-.3 2-.9 2.7-.6.7-1.6 1.3-2.6 1.2-.1-1 .4-2 1-2.7.6-.7 1.6-1.2 2.5-1.2Zm2.5 6.4c-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.9-.7-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 2-1.1 2.7-2.2.6-.9.9-1.8 1.4-2.8-1.9-.7-2.3-3.5-.4-4.6-.9-1.5-2.4-2.5-3.6-2.8Z" />
    </svg>
  );
}

function GooglePayMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M12 10.9v3.3h4.6c-.2 1.1-.8 2-1.7 2.6v2.2h2.8c1.6-1.5 2.6-3.7 2.6-6.3 0-.6-.1-1.2-.2-1.8H12Z" />
      <path fill="#34A853" d="M12 20c2.3 0 4.2-.8 5.7-2.1l-2.8-2.2c-.8.5-1.8.8-2.9.8-2.2 0-4.1-1.5-4.8-3.6H4.3v2.3A8.9 8.9 0 0 0 12 20Z" />
      <path fill="#FBBC05" d="M7.2 12.9a5.4 5.4 0 0 1 0-3.5V7.1H4.3a8.9 8.9 0 0 0 0 8.1l2.9-2.3Z" />
      <path fill="#EA4335" d="M12 6.8c1.3 0 2.4.4 3.3 1.3l2.5-2.4A8.6 8.6 0 0 0 12 3.3a8.9 8.9 0 0 0-7.7 4.5l2.9 2.3C7.9 8.2 9.8 6.8 12 6.8Z" />
    </svg>
  );
}

function PayPalMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.5 3.5h5.6c2.9 0 4.5 1.5 4 4.1-.6 3.3-2.8 4.9-5.9 4.9h-1.6c-.5 0-.9.3-1 .8l-.8 4.3c0 .2-.2.4-.4.4H5.9c-.3 0-.5-.3-.4-.6L7.9 4.2c.1-.4.4-.7.6-.7Z" opacity="0.55" />
      <path d="M11 7.2h5.6c.5 1.9-.5 4.3-2.9 5-.4.1-.9.2-1.4.2h-1.6c-.5 0-.9.3-1 .8l-.8 4.3c0 .2-.2.4-.4.4H6.3c-.3 0-.5-.3-.4-.6l.5-2.7" />
    </svg>
  );
}

function VisaMark() {
  return <span className="font-black italic text-[12px] tracking-tight">VISA</span>;
}

function MastercardMark() {
  return (
    <svg width="22" height="13" viewBox="0 0 24 14" aria-hidden="true">
      <circle cx="9" cy="7" r="7" fill="#EB001B" />
      <circle cx="15" cy="7" r="7" fill="#F79E1B" />
      <path d="M12 1.6a7 7 0 0 1 0 10.8 7 7 0 0 1 0-10.8Z" fill="#FF5F00" />
    </svg>
  );
}

function AmexMark() {
  return <span className="font-black text-[10px] tracking-tight">AMEX</span>;
}

const BADGES: { label: string; mark: () => React.ReactElement; bg: string; fg: string; border?: boolean }[] = [
  { label: "Shop Pay", mark: ShopPayMark, bg: "#5A31F4", fg: "#FFFFFF" },
  { label: "Apple Pay", mark: ApplePayMark, bg: "#000000", fg: "#FFFFFF" },
  { label: "Google Pay", mark: GooglePayMark, bg: "#FFFFFF", fg: "#3C4043", border: true },
  { label: "PayPal", mark: PayPalMark, bg: "#003087", fg: "#FFFFFF" },
  { label: "Visa", mark: VisaMark, bg: "#1A1F71", fg: "#FFFFFF" },
  { label: "Mastercard", mark: MastercardMark, bg: "#F3F3F3", fg: "#1A1A1A", border: true },
  { label: "American Express", mark: AmexMark, bg: "#2E77BC", fg: "#FFFFFF" },
];

export function PaymentBadges() {
  return (
    <div>
      <div className="flex items-center justify-center gap-1.5 flex-wrap mb-2">
        {BADGES.map((b) => {
          const Mark = b.mark;
          return (
            <span
              key={b.label}
              title={b.label}
              className={`inline-flex items-center justify-center gap-1.5 h-[22px] px-2.5 rounded-md text-[10px] font-semibold tracking-tight whitespace-nowrap ${
                b.border ? "border border-espresso/15" : ""
              }`}
              style={{ backgroundColor: b.bg, color: b.fg }}
            >
              <Mark />
              {b.label}
            </span>
          );
        })}
      </div>
      <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#8a8278] text-center">
        <Icon name="lock" size={12} />
        Guaranteed safe &amp; secure checkout &bull; Free US Shipping
      </p>
    </div>
  );
}
