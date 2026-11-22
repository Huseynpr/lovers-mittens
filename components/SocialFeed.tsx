"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";
import { Divider } from "./Divider";

// Replace videoUrl with a real .mp4 or embeddable Reel/TikTok URL once you have content.
const CLIPS = [
  { gradient: "from-evergreen via-espresso to-espresso", handle: "@loversmittens", caption: "Placeholder — add your Reel", videoUrl: "" },
  { gradient: "from-berry via-espresso to-espresso", handle: "@sarah.and.mike", caption: "Placeholder — add your TikTok", videoUrl: "" },
  { gradient: "from-gold via-espresso to-espresso", handle: "@loversmittens", caption: "Placeholder — add your Reel", videoUrl: "" },
  { gradient: "from-[#5A3E2B] via-espresso to-espresso", handle: "@jen.and.leo", caption: "Placeholder — add your TikTok", videoUrl: "" },
  { gradient: "from-berry via-espresso to-midnight-deep", handle: "@amara.and.kofi", caption: "Placeholder — add your Reel", videoUrl: "" },
];

export function SocialFeed() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="moments" className="px-6 py-16 scroll-mt-24">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-9">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <Icon name="instagram" size={15} className="text-gold" />
            <span className="text-[11.5px] tracking-[0.16em] uppercase text-gold font-semibold">
              As Seen On TikTok &amp; Instagram Reels
            </span>
            <Icon name="tiktok" size={15} className="text-gold" />
          </div>
          <h2 className="font-heading font-semibold text-[30px]">Real Couples, Real Warmth</h2>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 px-1 snap-x snap-mandatory">
          {CLIPS.map((clip, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`snap-start group flex-none w-[210px] md:w-[230px] aspect-[9/16] rounded-[26px] overflow-hidden relative bg-linear-to-br ${clip.gradient} cursor-pointer ring-1 ring-black/10 shadow-xl`}
            >
              {/* story-style progress segments */}
              <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
                {[0, 1, 2].map((n) => (
                  <span key={n} className={`h-[2.5px] flex-1 rounded-full ${n === 0 ? "bg-white/90" : "bg-white/30"}`} />
                ))}
              </div>

              {/* handle row */}
              <div className="absolute top-6 left-3 right-3 flex items-center gap-1.5 z-10">
                <div className="w-5 h-5 rounded-full bg-white/25 border border-white/50" />
                <span className="text-white text-[11px] font-semibold drop-shadow">{clip.handle}</span>
              </div>

              {/* center play button with pulsing ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-14 w-14 rounded-full bg-white/25 animate-ping" />
                  <Icon name="play" size={46} className="relative text-white transition group-hover:scale-110" />
                </span>
              </div>

              {/* caption + audio row */}
              <div className="absolute left-0 right-0 bottom-0 p-3.5 bg-linear-to-t from-black/75 via-black/20 to-transparent text-white text-left z-10">
                <p className="text-xs font-semibold leading-snug">{clip.caption}</p>
                <div className="flex items-center gap-1 mt-1.5 opacity-75">
                  <Icon name="music-note" size={11} />
                  <span className="text-[10.5px]">Original audio</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Divider />

      <AnimatePresence>
        {open !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(null)} />
            <div className="relative w-[min(380px,92vw)] aspect-[9/16] bg-espresso rounded-[26px] overflow-hidden flex items-center justify-center text-ivory/70 text-sm px-6 text-center">
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute top-2.5 right-2.5 z-10 bg-black/40 text-white rounded-full w-8 h-8 text-lg"
              >
                &times;
              </button>
              {CLIPS[open].videoUrl ? (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video src={CLIPS[open].videoUrl} controls autoPlay playsInline className="w-full h-full object-cover" />
              ) : (
                <span>Add a real video URL for this clip in SocialFeed.tsx</span>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
