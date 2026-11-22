import { Icon } from "./Icon";

// Pure CSS, no client JS: safe to prerender as static shell content under
// Cache Components (no Math.random() — values are hand-picked, not generated,
// since random calls aren't allowed during prerender).
const FLAKES = [
  { left: "1%", size: 7, duration: 15, delay: -2, opacity: 0.5 },
  { left: "5%", size: 5, duration: 12, delay: -9, opacity: 0.38 },
  { left: "9%", size: 9, duration: 19, delay: -4, opacity: 0.46 },
  { left: "13%", size: 4, duration: 11, delay: -13, opacity: 0.32 },
  { left: "17%", size: 6, duration: 16, delay: -6, opacity: 0.4 },
  { left: "21%", size: 10, duration: 24, delay: -9, opacity: 0.48 },
  { left: "25%", size: 5, duration: 13, delay: -1, opacity: 0.34 },
  { left: "29%", size: 8, duration: 20, delay: -15, opacity: 0.44 },
  { left: "33%", size: 4, duration: 12, delay: -8, opacity: 0.3 },
  { left: "37%", size: 7, duration: 17, delay: -11, opacity: 0.42 },
  { left: "41%", size: 5, duration: 14, delay: -3, opacity: 0.36 },
  { left: "45%", size: 9, duration: 21, delay: -17, opacity: 0.46 },
  { left: "49%", size: 4, duration: 11, delay: -5, opacity: 0.3 },
  { left: "53%", size: 7, duration: 18, delay: -10, opacity: 0.4 },
  { left: "57%", size: 6, duration: 13, delay: -14, opacity: 0.36 },
  { left: "61%", size: 10, duration: 23, delay: -7, opacity: 0.5 },
  { left: "65%", size: 4, duration: 12, delay: -12, opacity: 0.3 },
  { left: "69%", size: 8, duration: 19, delay: -1, opacity: 0.44 },
  { left: "73%", size: 5, duration: 14, delay: -16, opacity: 0.34 },
  { left: "77%", size: 6, duration: 16, delay: -5, opacity: 0.38 },
  { left: "81%", size: 9, duration: 22, delay: -11, opacity: 0.46 },
  { left: "85%", size: 4, duration: 11, delay: -3, opacity: 0.3 },
  { left: "89%", size: 7, duration: 18, delay: -18, opacity: 0.42 },
  { left: "93%", size: 5, duration: 13, delay: -6, opacity: 0.34 },
  { left: "97%", size: 8, duration: 20, delay: -9, opacity: 0.44 },
  { left: "3%", size: 5, duration: 15, delay: -20, opacity: 0.34 },
  { left: "11%", size: 7, duration: 17, delay: -2, opacity: 0.4 },
  { left: "19%", size: 4, duration: 10, delay: -14, opacity: 0.3 },
  { left: "27%", size: 9, duration: 21, delay: -4, opacity: 0.46 },
  { left: "35%", size: 6, duration: 14, delay: -19, opacity: 0.36 },
  { left: "43%", size: 5, duration: 12, delay: -7, opacity: 0.32 },
  { left: "51%", size: 8, duration: 19, delay: -16, opacity: 0.44 },
  { left: "59%", size: 4, duration: 11, delay: -2, opacity: 0.3 },
  { left: "67%", size: 7, duration: 16, delay: -13, opacity: 0.4 },
  { left: "75%", size: 6, duration: 13, delay: -8, opacity: 0.36 },
  { left: "83%", size: 9, duration: 22, delay: -1, opacity: 0.46 },
];

const BIG_FLAKES = [
  { left: "4%", top: "6%", size: 56, duration: 34, delay: -4, opacity: 0.2, color: "text-ice" },
  { left: "80%", top: "14%", size: 72, duration: 46, delay: -14, opacity: 0.16, color: "text-gold" },
  { left: "14%", top: "58%", size: 60, duration: 40, delay: -22, opacity: 0.18, color: "text-gold" },
  { left: "88%", top: "66%", size: 48, duration: 28, delay: -8, opacity: 0.2, color: "text-ice" },
  { left: "46%", top: "10%", size: 42, duration: 32, delay: -18, opacity: 0.16, color: "text-ice" },
  { left: "32%", top: "80%", size: 64, duration: 44, delay: -10, opacity: 0.18, color: "text-gold" },
  { left: "63%", top: "40%", size: 50, duration: 38, delay: -26, opacity: 0.16, color: "text-ice" },
  { left: "6%", top: "88%", size: 44, duration: 30, delay: -6, opacity: 0.18, color: "text-gold" },
];

export function Snowfall() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {FLAKES.map((f, i) => (
        <span
          key={i}
          className="absolute top-[-10vh] rounded-full bg-[#eef4f8] shadow-[0_0_6px_rgba(30,27,24,0.25)] animate-[lm-fall_linear_infinite]"
          style={{
            left: f.left,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
      {BIG_FLAKES.map((f, i) => (
        <div
          key={`big-${i}`}
          className={`absolute ${f.color} animate-[lm-fall-big_linear_infinite]`}
          style={{
            left: f.left,
            top: f.top,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <Icon name="snowflake" size={f.size} />
        </div>
      ))}
    </div>
  );
}
