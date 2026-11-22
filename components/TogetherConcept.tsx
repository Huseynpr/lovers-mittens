import { Icon } from "./Icon";

// Hand-picked (not random) so this stays safe to prerender as static shell
// content under Cache Components.
const STARS = [
  { left: "4%", top: "12%", size: 2, delay: 0 },
  { left: "9%", top: "38%", size: 3, delay: 0.6 },
  { left: "14%", top: "70%", size: 2, delay: 1.2 },
  { left: "20%", top: "20%", size: 2, delay: 1.8 },
  { left: "27%", top: "55%", size: 3, delay: 0.3 },
  { left: "34%", top: "15%", size: 2, delay: 2.1 },
  { left: "41%", top: "80%", size: 2, delay: 0.9 },
  { left: "6%", top: "85%", size: 2, delay: 1.5 },
  { left: "59%", top: "18%", size: 2, delay: 1.1 },
  { left: "66%", top: "48%", size: 3, delay: 0.4 },
  { left: "73%", top: "75%", size: 2, delay: 1.9 },
  { left: "80%", top: "25%", size: 2, delay: 0.2 },
  { left: "87%", top: "60%", size: 3, delay: 1.4 },
  { left: "93%", top: "10%", size: 2, delay: 2.3 },
  { left: "96%", top: "82%", size: 2, delay: 0.7 },
  { left: "52%", top: "88%", size: 2, delay: 1.7 },
];

export function TogetherConcept() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-midnight-deep via-midnight to-midnight-deep text-ivory py-24 md:py-32 px-6">
      {/* stars */}
      <div className="absolute inset-0" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-ice animate-[lm-twinkle_ease-in-out_infinite]"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDuration: "3.2s",
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* frosted corner vignette, like looking through an icy window */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full bg-ice/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[300px] h-[300px] rounded-full bg-ice/10 blur-[80px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-midnight-deep blur-[90px] opacity-80" />

      {/* slow-spinning decorative snowflakes */}
      <div className="pointer-events-none absolute top-10 right-10 text-ice/20 animate-[lm-spin-slow_50s_linear_infinite]">
        <Icon name="snowflake" size={70} />
      </div>
      <div className="pointer-events-none absolute bottom-10 left-8 text-ice/15 animate-[lm-spin-slow_65s_linear_infinite]">
        <Icon name="snowflake" size={54} />
      </div>

      <div className="relative z-10 max-w-[720px] mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 text-[11.5px] tracking-[0.18em] uppercase text-ice/80 font-semibold mb-8 border border-ice/25 rounded-full px-3.5 py-1.5">
          <Icon name="snowflake" size={13} />
          A Promise For Every Winter
        </span>

        <div className="flex justify-center mb-7">
          <svg width="128" height="128" viewBox="0 0 32 32" aria-hidden="true" className="drop-shadow-[0_0_30px_rgba(197,160,89,0.35)]">
            <path
              d="M16 8.3C15.6 6.3 13.6 4.6 11 4.6 7.4 4.6 4.8 7.2 4.8 10.4c0 5.4 5.2 9.8 11.2 14.2 6-4.4 11.2-8.8 11.2-14.2 0-3.2-2.6-5.8-6.2-5.8-2.6 0-4.6 1.7-5 3.7Z"
              fill="var(--color-gold)"
            />
            <ellipse cx="4.1" cy="11.6" rx="2.1" ry="2.7" transform="rotate(-25 4.1 11.6)" fill="var(--color-gold)" />
            <ellipse cx="27.9" cy="11.6" rx="2.1" ry="2.7" transform="rotate(25 27.9 11.6)" fill="var(--color-gold)" />
            <path
              d="M6.6 5.4v2.3M8.7 4.7v2.3M10.8 4.7v2.3"
              stroke="var(--color-ice)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M21.2 4.7v2.3M23.3 4.7v2.3M25.4 5.4v2.3"
              stroke="var(--color-ice)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <h2 className="font-heading font-medium text-[38px] md:text-[54px] leading-[1.05] mb-5 text-ivory drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Two Hands Become
          <br />
          One Heart
        </h2>
        <p className="text-ivory/90 text-base md:text-[17px] max-w-[48ch] mx-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
          No matter how far the temperature drops, there&apos;s one thing that never gets cold — the hand you&apos;re
          holding. Lovers Mittens keeps you joined, step for step, through every freezing night out together.
        </p>
      </div>
    </section>
  );
}
