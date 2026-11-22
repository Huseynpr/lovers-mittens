import Image from "next/image";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative w-9 h-9 shrink-0">
        <Image src="/images/logo-mitten.png" alt="" fill sizes="36px" className="object-contain" />
      </span>
      <span className={`font-heading text-xl font-medium ${dark ? "text-ivory" : "text-espresso"}`}>
        Lovers Mittens
      </span>
    </span>
  );
}

export function Monogram({ size = 32 }: { size?: number }) {
  return (
    <span className="relative inline-block" style={{ width: size, height: size }}>
      <Image src="/images/logo-mitten.png" alt="" fill sizes={`${size}px`} className="object-contain" />
    </span>
  );
}
