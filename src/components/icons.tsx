import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <defs>
        <radialGradient id="grad-orange" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(30, 100%, 50%)" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="grad-samir" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(6, 93%, 63%)" />
        </linearGradient>
        <linearGradient id="grad-pro" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(316, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(316, 93%, 63%)" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="48" fill="url(#grad-orange)" />
      <circle cx="50" cy="50" r="49" stroke="hsl(275, 82%, 50%)" strokeWidth="2" fill="none" />

      <text
        x="50"
        y="45"
        fontFamily="Impact, sans-serif"
        fontSize="28"
        fill="url(#grad-samir)"
        stroke="#00008B"
        strokeWidth="1"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="1"
        style={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
        }}
      >
        SAMIR
      </text>

      <text
        x="50"
        y="65"
        fontFamily="Impact, sans-serif"
        fontSize="20"
        fill="url(#grad-pro)"
        stroke="#4B0082"
        strokeWidth="0.5"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="1"
        style={{
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
        }}
      >
        PRO
      </text>

      <text
        x="50"
        y="80"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="white"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.5"
      >
        STUDIO
      </text>

      {/* Butterflies */}
      <text x="75" y="30" fontSize="5">🦋</text>
      <text x="30" y="50" fontSize="6" transform="rotate(-15, 30, 50)">🦋</text>
      <text x="80" y="75" fontSize="5">🦋</text>
      <text x="25" y="85" fontSize="6" transform="rotate(15, 25, 85)">🦋</text>

    </svg>
  );
}
