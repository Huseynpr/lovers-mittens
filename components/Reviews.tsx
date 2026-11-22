import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SnowCap } from "./SnowCap";

// Placeholder reviews — swap in real ones (e.g. from Judge.me) once available.
const REVIEWS = [
  {
    initials: "SM",
    color: "bg-evergreen",
    name: "Sarah & Mike",
    rating: 5,
    text: "These are unbelievably soft and the heart mitten is the cutest thing we own. Gifted it for our anniversary and he teared up.",
  },
  {
    initials: "JL",
    color: "bg-berry",
    name: "Jen & Leo",
    rating: 5,
    text: "Ordered the 2-set bundle in Red — exactly as pictured, and shipping was fast.",
  },
  {
    initials: "AK",
    color: "bg-gold",
    name: "Amara & Kofi",
    rating: 5,
    text: "The gift note option made this feel so personal. Best Christmas gift I've given in years.",
  },
];

const BAR_PERCENTS = [88, 9, 2, 1, 0];

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-cashmere px-6 py-16 scroll-mt-24 overflow-hidden">
      <SnowCap color="#F2ECE4" />
      <div className="relative max-w-[1180px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-9">
          <span className="inline-flex items-center gap-1.5 text-[11.5px] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
            <Icon name="snowflake" size={12} />
            Loved By Couples Everywhere
          </span>
          <h2 className="font-heading font-semibold text-[30px]">What Our Customers Say</h2>
        </div>

        <div className="flex items-center justify-center gap-7 flex-wrap mb-9">
          <div className="text-center">
            <strong className="font-heading text-[46px] block leading-none">4.9</strong>
            <div className="text-gold my-1.5">★★★★★</div>
            <span className="text-xs text-[#5c5650]">482 verified reviews</span>
          </div>
          <div className="flex flex-col gap-1.5 min-w-[220px]">
            {BAR_PERCENTS.map((pct, i) => (
              <div key={i} className="flex items-center gap-2 text-[11.5px] text-[#5c5650]">
                <span>{5 - i}★</span>
                <span className="flex-1 h-1.5 bg-espresso/10 rounded-full overflow-hidden">
                  <span className="block h-full bg-gold rounded-full" style={{ width: `${pct}%` }} />
                </span>
                <span>{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4.5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="bg-white/70 backdrop-blur-md border border-espresso/10 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_30px_-16px_rgba(30,27,24,0.25)]">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className={`w-9 h-9 rounded-full ${r.color} text-white flex items-center justify-center text-xs font-semibold`}>
                    {r.initials}
                  </div>
                  <span className="font-semibold text-[13.5px] flex items-center gap-1">
                    {r.name}
                    <Icon name="verified" size={14} className="text-evergreen" />
                  </span>
                </div>
                <div className="text-gold text-xs mb-2 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, si) => (
                    <Icon key={si} name="star" size={13} />
                  ))}
                </div>
                <p className="text-[13px] text-[#5c5650]">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
