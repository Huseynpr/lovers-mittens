import { Icon, type IconName } from "./Icon";

const STATS: { icon: IconName; value: string; label: string }[] = [
  { icon: "heart-mitten", value: "12,000+", label: "Happy Couples" },
  { icon: "star", value: "4.9 / 5", label: "Average Rating" },
  { icon: "shipping", value: "4-9 Days", label: "Fast US Shipping" },
  { icon: "guarantee", value: "30 Days", label: "Happiness Guarantee" },
];

export function StatsBar() {
  return (
    <section className="relative z-10 bg-evergreen text-ivory py-7 px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 -left-10 w-[220px] h-[220px] rounded-full bg-gold/15 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-[220px] h-[220px] rounded-full bg-berry/20 blur-[80px]" />
      <div className="relative max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-ivory/15">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 px-2 md:px-4 first:pl-0">
            <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-gold/20 text-gold">
              <Icon name={s.icon} size={20} />
            </div>
            <div>
              <div className="font-heading font-semibold text-xl leading-none text-ivory">{s.value}</div>
              <div className="text-[11.5px] text-ivory/70 mt-1">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
