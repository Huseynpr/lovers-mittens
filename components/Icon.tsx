export type IconName =
  | "heart-mitten"
  | "outer-mittens"
  | "bundle-plus"
  | "warmth"
  | "one-size"
  | "shipping"
  | "guarantee"
  | "gift"
  | "cart"
  | "play"
  | "verified"
  | "star"
  | "chevron"
  | "instagram"
  | "tiktok"
  | "snowflake"
  | "pine-sprig"
  | "trash"
  | "plus-minor"
  | "minus-minor"
  | "lock"
  | "music-note"
  | "menu"
  | "close";

const PATHS: Record<IconName, React.ReactNode> = {
  "heart-mitten": (
    <>
      <path d="M12 7.6C12 5.1 9.8 3.3 7.3 3.3 4.8 3.3 3 5.2 3 7.6c0 4.4 4.5 8.4 9 11.4 4.5-3 9-7 9-11.4 0-2.4-1.8-4.3-4.3-4.3-2.5 0-4.7 1.8-4.7 4.3Z" />
      <path d="M6.4 5.2v2M8.6 4.4v2M15.4 4.4v2M17.6 5.2v2" />
    </>
  ),
  "outer-mittens": (
    <>
      <path d="M6.3 21c-1.8 0-3.3-1.5-3.3-3.3v-5.4C3 10 4.9 8 7.3 8c.3 0 .6 0 .9.1C8.9 6.3 10.5 5 12.4 5" />
      <path d="M3 15.5h4.2" />
      <path d="M3 17.7h4.2" />
      <path d="M17.7 21c1.8 0 3.3-1.5 3.3-3.3v-5.4c0-2.3-1.9-4.3-4.3-4.3-.3 0-.6 0-.9.1C15.1 6.3 13.5 5 11.6 5" />
      <path d="M21 15.5h-4.2" />
      <path d="M21 17.7h-4.2" />
    </>
  ),
  "bundle-plus": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  warmth: (
    <>
      <path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </>
  ),
  "one-size": (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M5 12h14M6.8 9.6 5 12l1.8 2.4M17.2 9.6 19 12l-1.8 2.4" />
    </>
  ),
  shipping: (
    <>
      <rect x="4.5" y="7.5" width="12" height="10" rx="1.2" />
      <path d="M10.5 7.5v10" />
      <path d="M9 7.5 10.5 5l1.5 2.5" />
      <path d="M1.5 10.5h2M1 13.5h1.6" />
      <path d="M16.5 12h3.8M19 10.3l1.3 1.7-1.3 1.7" />
    </>
  ),
  guarantee: (
    <>
      <path d="M12 3.2 18.5 6v5.3c0 4.6-3.1 7.4-6.5 8.5-3.4-1.1-6.5-3.9-6.5-8.5V6L12 3.2Z" />
      <path d="M12 10.3c0-1.3-1-2.1-2-2.1-1.1 0-1.9.9-1.9 1.9 0 1.9 2.4 3.4 3.9 4.6 1.5-1.2 3.9-2.7 3.9-4.6 0-1-.8-1.9-1.9-1.9-1 0-2 .8-2 2.1Z" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="9.5" width="17" height="10.5" rx="1" />
      <rect x="2.5" y="6" width="19" height="4" rx="1" />
      <path d="M12 6v14" />
      <path d="M12 6c-1-2.3-3-3-4.3-2-1.3 1-1 3 .3 3.3.9.2 2.6-.2 4-1.3Z" />
      <path d="M12 6c1-2.3 3-3 4.3-2 1.3 1 1 3-.3 3.3-.9.2-2.6-.2-4-1.3Z" />
    </>
  ),
  cart: (
    <>
      <rect x="4.5" y="9" width="15" height="11.5" rx="2.2" />
      <path d="M8.3 9V6.8a3.7 3.7 0 0 1 7.4 0V9" />
      <path d="M9.9 6.3c-1.3-1.1-3.1.2-2.3 1.6.6 1 2 .9 2.6-.2" />
      <path d="M14.1 6.3c1.3-1.1 3.1.2 2.3 1.6-.6 1-2 .9-2.6-.2" />
      <circle cx="12" cy="6.6" r="0.55" fill="currentColor" stroke="none" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.12" strokeOpacity="0.5" />
      <path d="M10 8.2 16 12l-6 3.8V8.2Z" fill="currentColor" stroke="none" />
    </>
  ),
  verified: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3 10.6 15 16 9.3" />
    </>
  ),
  star: <path d="M12 3.3 14.7 9l6.1.6-4.5 4.2 1.3 6.1L12 16.8l-5.6 3.1 1.3-6.1L3.2 9.6 9.3 9 12 3.3Z" fill="currentColor" stroke="none" />,
  chevron: <path d="M6 9.5 12 15l6-5.5" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <>
      <path d="M14 3.5v11a3.3 3.3 0 1 1-2-3V9" />
      <path d="M14 3.5c.3 2.3 2.1 4 4.4 4.1" />
    </>
  ),
  snowflake: (
    <>
      <g>
        <line x1="12" y1="2.2" x2="12" y2="21.8" />
        <path d="M9.2 5.2 12 2.4l2.8 2.8M9.2 18.8 12 21.6l2.8-2.8" />
      </g>
      <g transform="rotate(60 12 12)">
        <line x1="12" y1="2.2" x2="12" y2="21.8" />
        <path d="M9.2 5.2 12 2.4l2.8 2.8M9.2 18.8 12 21.6l2.8-2.8" />
      </g>
      <g transform="rotate(120 12 12)">
        <line x1="12" y1="2.2" x2="12" y2="21.8" />
        <path d="M9.2 5.2 12 2.4l2.8 2.8M9.2 18.8 12 21.6l2.8-2.8" />
      </g>
    </>
  ),
  "pine-sprig": (
    <>
      <path d="M12 2.5v19" />
      <path d="M12 6.5 7.5 9.3M12 6.5l4.5 2.8M12 11l-4.5 2.8M12 11l4.5 2.8M12 15.5l-3.6 2.3M12 15.5l3.6 2.3" />
    </>
  ),
  trash: (
    <>
      <path d="M4.5 7h15" />
      <path d="M9 7V5.3c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3V7" />
      <path d="M6.5 7l.8 12.2c.1 1 .9 1.8 1.9 1.8h5.6c1 0 1.8-.8 1.9-1.8L18.5 7" />
      <path d="M10.3 11v6M13.7 11v6" />
    </>
  ),
  "plus-minor": <path d="M12 6v12M6 12h12" />,
  "minus-minor": <path d="M6 12h12" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  "music-note": (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="9" cy="18" r="3" />
      <circle cx="21" cy="16" r="3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
