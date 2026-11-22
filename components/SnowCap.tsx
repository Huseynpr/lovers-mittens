const SEGMENTS = 12;
const SEGMENT_WIDTH = 120;
const WIDTH = SEGMENTS * SEGMENT_WIDTH;
const TOP_Y = 28;
// Hand-picked dip depths per segment (not random) for an irregular snowdrift edge.
const DIPS = [58, 42, 62, 36, 54, 46, 60, 38, 56, 44, 64, 40];

let path = `M0,0 L0,${TOP_Y}`;
for (let i = 0; i < SEGMENTS; i++) {
  const midX = i * SEGMENT_WIDTH + SEGMENT_WIDTH / 2;
  const endX = (i + 1) * SEGMENT_WIDTH;
  path += ` Q${midX},${DIPS[i]} ${endX},${TOP_Y}`;
}
path += ` L${WIDTH},0 Z`;

export function SnowCap({ color = "#FAF7F2" }: { color?: string }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none" aria-hidden="true">
      <svg viewBox={`0 0 ${WIDTH} 70`} preserveAspectRatio="none" className="w-full h-[42px] md:h-[56px]">
        <path d={path} fill={color} />
        <path
          d={path}
          fill="none"
          stroke="rgba(30,27,24,0.05)"
          strokeWidth="1.5"
          transform="translate(0,2)"
        />
      </svg>
    </div>
  );
}
