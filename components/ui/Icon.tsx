import type { SVGProps } from "react";
import type { IconName } from "@/lib/services";

type ExtraIcons =
  | "phone"
  | "mail"
  | "clock"
  | "check"
  | "checkCircle"
  | "lock"
  | "shield"
  | "chevronDown"
  | "menu"
  | "close"
  | "arrowRight"
  | "whatsapp"
  | "map"
  | "star"
  | "quote";

export type AnyIcon = IconName | ExtraIcons;

const paths: Record<AnyIcon, React.ReactNode> = {
  // ── Usluge ────────────────────────────────────────────────────────────────
  family: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.4" />
      <path d="M3.5 20c.6-3.4 3-5.5 5.5-5.5s4.9 2.1 5.5 5.5" />
      <path d="M15.5 20c.3-2.3 1.7-3.9 3.4-3.9 1.4 0 2.6 1 3.1 2.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  polygraph: (
    <>
      <path d="M2 13h4l2.5 6L13 5l3 8h2" />
      <path d="M18 13c1.6 0 2.4-1.2 2.4-2.6C20.4 8.5 18.8 7 17 7" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M6 21h12" />
      <path d="M4 7h16" />
      <path d="M7 4.5 5 7l-2.5 5A3 3 0 0 0 8 12L5 7" />
      <path d="M17 4.5 19 7l2.5 5A3 3 0 0 1 16 12l3-5" />
    </>
  ),
  osint: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M4 11h14M11 4c2.2 2 3.3 4.5 3.3 7S13.2 16 11 18c-2.2-2-3.3-4.5-3.3-7S8.8 6 11 4Z" />
      <path d="m20.5 20.5-3.6-3.6" />
    </>
  ),
  bug: (
    <>
      <rect x="8" y="7" width="8" height="12" rx="4" />
      <path d="M12 3v4M9 5 7.5 3.5M15 5l1.5-1.5" />
      <path d="M8 11H4M16 11h4M8 15H3.5M16 15H20M8.5 19l-2 2M15.5 19l2 2" />
    </>
  ),
  shieldFamily: (
    <>
      <path d="M12 3 5 5.6v5.2c0 4.7 3 8.2 7 9.7 4-1.5 7-5 7-9.7V5.6Z" />
      <circle cx="12" cy="10" r="1.9" />
      <path d="M8.7 15.6c.5-1.7 1.8-2.7 3.3-2.7s2.8 1 3.3 2.7" />
    </>
  ),
  searchPerson: (
    <>
      <circle cx="10" cy="7.5" r="3" />
      <path d="M4.5 18c.7-3.2 2.9-5 5.5-5 1.1 0 2.1.3 3 .9" />
      <circle cx="16.5" cy="15.5" r="3.3" />
      <path d="m21.5 20.5-2.6-2.6" />
    </>
  ),
  dataRecovery: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3 1 0 2-.1 2.8-.3" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3" />
      <path d="M19 14.5a3.5 3.5 0 1 1-1-2.4M19 10v3h-3" />
    </>
  ),
  stalking: (
    <>
      <circle cx="10" cy="7" r="3.2" />
      <path d="M4 19c.6-3.3 3-5.3 6-5.3 1.3 0 2.5.4 3.5 1.1" />
      <path d="M18 12v4.5" />
      <path d="M18 19.5v.01" />
    </>
  ),
  archive: (
    <>
      <path d="M3 7.5 4.2 5h15.6L21 7.5" />
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M9.5 12h5" />
    </>
  ),
  car: (
    <>
      <path d="M4 13.5 5.8 8A3 3 0 0 1 8.6 6h6.8a3 3 0 0 1 2.8 2l1.8 5.5" />
      <path d="M3 13.5h18v4a1 1 0 0 1-1 1h-1.5M4.5 18.5H4a1 1 0 0 1-1-1v-4" />
      <circle cx="7.5" cy="18.5" r="1.8" />
      <circle cx="16.5" cy="18.5" r="1.8" />
    </>
  ),
  idea: (
    <>
      <path d="M9 17h6M10 20h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2h5c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z" />
    </>
  ),
  tscm: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 15.5a5 5 0 0 0 0-7" />
      <path d="M6 6a9 9 0 0 0 0 12M18 18A9 9 0 0 0 18 6" />
    </>
  ),
  legal: (
    <>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),

  // ── Pomoćne ikone ────────────────────────────────────────────────────────
  phone: (
    <path d="M6.5 3.5 9 4l1 3.5-2 1.5c.9 2.2 2.7 4 4.9 4.9l1.5-2 3.5 1 .5 2.5c0 1.1-.9 2-2 2C10.9 20.9 3.1 13.1 3 5.5c0-1.1.9-2 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4A8 8 0 1 1 9 19.2Z" />
      <path d="M9 8.5c0 4 2.5 6.5 6.5 6.5.8-1.2.4-1.9-.6-2.3l-1.4-.5-1 1.1c-1.2-.6-2.1-1.5-2.6-2.7l1.1-1-.5-1.4C10.4 8 9.7 7.6 8.5 8.4Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.6v5.2c0 4.7 3 8.2 7 9.7 4-1.5 7-5 7-9.7V5.6Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.6" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  map: (
    <>
      <path d="M12 21c4-4.5 6-7.9 6-11a6 6 0 1 0-12 0c0 3.1 2 6.5 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  star: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.9Z" />,
  quote: (
    <path d="M9 6c-3 1-4.5 3.4-4.5 7V18H10v-6H7.2C7.4 9.6 8.2 8.3 10 7.6Zm10 0c-3 1-4.5 3.4-4.5 7V18H20v-6h-2.8c.2-2.4 1-3.7 2.8-4.4Z" />
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: AnyIcon;
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
