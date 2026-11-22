const SEGMENTS = 10;
const SEGMENT_WIDTH = 120;
const WIDTH = SEGMENTS * SEGMENT_WIDTH;
const WIRE_Y = 18;
const DIP_Y = 46;
const COLORS = ["#C5A059", "#7A2021", "#1F3A2E"];

const bulbs = Array.from({ length: SEGMENTS }, (_, i) => ({
  x: i * SEGMENT_WIDTH + SEGMENT_WIDTH / 2,
  color: COLORS[i % COLORS.length],
  delay: (i % 4) * 0.6,
}));

let wirePath = `M0,${WIRE_Y}`;
for (let i = 0; i < SEGMENTS; i++) {
  const midX = i * SEGMENT_WIDTH + SEGMENT_WIDTH / 2;
  const endX = (i + 1) * SEGMENT_WIDTH;
  wirePath += ` Q${midX},${DIP_Y} ${endX},${WIRE_Y}`;
}

export function FairyLights({ wireColor = "#1E1B18" }: { wireColor?: string }) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} 70`}
      preserveAspectRatio="none"
      className="w-full h-[46px] md:h-[58px]"
      aria-hidden="true"
    >
      <path d={wirePath} fill="none" stroke={wireColor} strokeOpacity="0.35" strokeWidth="1.5" />
      {bulbs.map((b, i) => (
        <g key={i}>
          <line x1={b.x} y1={DIP_Y} x2={b.x} y2={DIP_Y + 8} stroke={wireColor} strokeOpacity="0.35" strokeWidth="1" />
          <circle
            cx={b.x}
            cy={DIP_Y + 10}
            r="9"
            fill={b.color}
            opacity="0.4"
            style={{
              filter: "blur(4px)",
              transformOrigin: `${b.x}px ${DIP_Y + 10}px`,
              animation: `lm-twinkle 2.6s ease-in-out infinite`,
              animationDelay: `${b.delay}s`,
            }}
          />
          <circle cx={b.x} cy={DIP_Y + 10} r="4.2" fill={b.color} />
        </g>
      ))}
    </svg>
  );
}
