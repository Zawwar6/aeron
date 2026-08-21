// AERON signature visual system: a continuous single-line contour
// sneaker illustration, rendered in the brand ink or an accent color.
// Used across hero, cards and showcase instead of stock photography.
export default function ShoeArt({ className = '', color = 'var(--color-ink)', accent = 'var(--color-signal)', outline = true }) {
  return (
    <svg
      viewBox="0 0 600 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* sole */}
      <path
        d="M40 230 C 40 260, 70 275, 120 275 L 500 275 C 545 275, 565 255, 565 225 C 565 210, 552 198, 535 198 L 90 198 C 60 198, 40 210, 40 230 Z"
        fill={accent}
        opacity="0.14"
      />
      {/* main body contour */}
      <path
        d="M55 220
           C 45 190, 55 150, 95 140
           C 120 110, 165 78, 220 70
           C 250 65, 270 78, 290 95
           C 330 70, 400 62, 450 82
           C 500 100, 545 130, 560 175
           C 570 200, 560 218, 535 222
           L 90 222
           C 70 222, 58 224, 55 220 Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={outline ? 'none' : color}
        fillOpacity={outline ? 0 : 0.04}
      />
      {/* lace panel */}
      <path
        d="M225 92 L 275 150 M 250 82 L 302 145 M 278 78 L 330 140 M 308 80 L 358 138"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* sole line */}
      <path
        d="M55 220 L 560 220"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* heel detail */}
      <path
        d="M480 90 C 510 105, 545 135, 558 172"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* tread */}
      <g stroke={color} strokeWidth="3" strokeLinecap="round">
        <path d="M100 246 L 100 262" />
        <path d="M150 246 L 150 264" />
        <path d="M200 246 L 200 262" />
        <path d="M250 246 L 250 264" />
        <path d="M300 246 L 300 262" />
        <path d="M350 246 L 350 264" />
        <path d="M400 246 L 400 262" />
        <path d="M450 246 L 450 264" />
        <path d="M500 246 L 500 262" />
      </g>
    </svg>
  )
}
