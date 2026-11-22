import { Icon, type IconName } from "./Icon";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const PIECES: { icon: IconName; title: string; text: string; accent: string; cardBg: string }[] = [
  {
    icon: "heart-mitten",
    title: "Heart-Shaped Shared Mitten",
    text: "One double-cuffed mitten where both of your inner hands meet and hold each other.",
    accent: "bg-berry/15 text-berry",
    cardBg: "bg-berry/[0.06] border-berry/20",
  },
  {
    icon: "bundle-plus",
    title: "Forms One Complete Set",
    text: "All three pieces connect into a single cozy system, worn together.",
    accent: "bg-gold/20 text-gold",
    cardBg: "bg-gold/[0.08] border-gold/25",
  },
  {
    icon: "outer-mittens",
    title: "Two Individual Outer Mittens",
    text: "Matching ribbed-cuff mittens for each partner's outer hand.",
    accent: "bg-evergreen/15 text-evergreen",
    cardBg: "bg-evergreen/[0.06] border-evergreen/20",
  },
];

const TRUST: { icon: IconName; label: string; accent: string }[] = [
  { icon: "warmth", label: "Soft-Knit Warmth", accent: "bg-berry/12 border-berry/30 text-berry" },
  { icon: "one-size", label: "One Size Fits All", accent: "bg-gold/15 border-gold/40 text-espresso" },
  { icon: "shipping", label: "Fast Tracked Shipping", accent: "bg-evergreen/12 border-evergreen/30 text-evergreen" },
  { icon: "guarantee", label: "30-Day Happiness Guarantee", accent: "bg-gold/15 border-gold/40 text-espresso" },
];

export function SetBreakdown() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-9">
          <span className="inline-flex items-center gap-1.5 text-[11.5px] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
            <Icon name="snowflake" size={12} />
            How It Works
          </span>
          <h2 className="font-heading font-semibold text-[32px]">One Set, Three Pieces, Two Hearts</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 mb-8.5">
          {PIECES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className={`${p.cardBg} backdrop-blur-md border rounded-2xl p-6.5 text-center transition hover:-translate-y-1 hover:shadow-[0_16px_30px_-16px_rgba(30,27,24,0.25)]`}>
                <div className={`w-13 h-13 rounded-full flex items-center justify-center mx-auto mb-3.5 ${p.accent}`}>
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="text-base font-semibold mb-1.5">{p.title}</h3>
                <p className="text-[13px] text-[#5c5650]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {TRUST.map((t) => (
            <span key={t.label} className={`inline-flex items-center gap-1.5 border rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold ${t.accent}`}>
              <Icon name={t.icon} size={14} />
              {t.label}
            </span>
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}
