import Image from "next/image";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SnowCap } from "./SnowCap";

export function BrandStory({ image }: { image: string }) {
  return (
    <section id="our-story" className="relative bg-cashmere px-6 py-16 scroll-mt-24 overflow-hidden">
      <SnowCap color="#F2ECE4" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-20 w-[340px] h-[340px] rounded-full bg-gold/15 blur-[100px] animate-[lm-float_16s_ease-in-out_infinite]" />
      <div className="relative max-w-[1180px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_20px_50px_-20px_rgba(30,27,24,0.3)]">
            <Image src={image} alt="Lovers Mittens set" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11.5px] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
              <Icon name="snowflake" size={12} />
              Our Story
            </span>
            <h2 className="font-heading font-semibold text-[30px] mb-3.5">Warm Hands, Closer Hearts</h2>
            <p className="text-[#5c5650] text-[14.5px] leading-relaxed mb-3.5">
              There&apos;s a particular kind of cold that only matters because of who you&apos;re walking beside. We
              made Lovers Mittens for that — for the freezing nights you refuse to let go of each other&apos;s hand,
              even with gloves on.
            </p>
            <p className="text-[#5c5650] text-[14.5px] leading-relaxed mb-4.5">
              Each set is hand-knit from soft, breathable yarn and shaped so your joined hands rest inside one heart,
              while your outer hands stay just as warm.
            </p>
            <span className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/40 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold">
              <Icon name="gift" size={14} />
              Arrives gift-ready, with a handwritten note option
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
