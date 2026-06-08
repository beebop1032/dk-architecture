export function HeroBlueprint() {
  return (
    <svg
      viewBox="0 0 540 430"
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .bp-outer {
            stroke-dasharray: 1700;
            stroke-dashoffset: 1700;
            animation: bp-draw 3s cubic-bezier(0.4,0,0.2,1) forwards 0.4s;
          }
          .bp-w1 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: bp-draw 1.2s ease forwards 1.9s; }
          .bp-w2 { stroke-dasharray: 160; stroke-dashoffset: 160; animation: bp-draw 0.8s ease forwards 2.3s; }
          .bp-w3 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: bp-draw 1s ease forwards 2.6s; }
          .bp-w4 { stroke-dasharray: 160; stroke-dashoffset: 160; animation: bp-draw 0.7s ease forwards 2.9s; }
          .bp-f  { opacity: 0; animation: bp-fade 0.6s ease forwards; }
          .bp-f1 { animation-delay: 2.1s; }
          .bp-f2 { animation-delay: 2.8s; }
          .bp-f3 { animation-delay: 3.2s; }
          .bp-f4 { animation-delay: 3.6s; }
          .bp-f5 { animation-delay: 4s; }
        }
        @keyframes bp-draw { to { stroke-dashoffset: 0; } }
        @keyframes bp-fade  { to { opacity: 1; } }
      `}</style>

      {/* ── Outer walls ── */}
      <rect x="20" y="20" width="500" height="340" className="bp-outer" stroke="white" strokeWidth="2.5" />

      {/* ── Interior walls ── */}
      {/* N/S divider */}
      <line x1="20"  y1="170" x2="370" y2="170" className="bp-w1" stroke="white" strokeWidth="1.8" />
      {/* Ch1 / Ch2 */}
      <line x1="200" y1="20"  x2="200" y2="170" className="bp-w2" stroke="white" strokeWidth="1.8" />
      {/* East wing */}
      <line x1="370" y1="20"  x2="370" y2="360" className="bp-w3" stroke="white" strokeWidth="1.8" />
      {/* SdB / WC */}
      <line x1="370" y1="110" x2="520" y2="110" className="bp-w4" stroke="white" strokeWidth="1.8" />

      {/* ── Terrace (dashed) ── */}
      <path
        d="M140,360 L140,420 L360,420 L360,360"
        className="bp-f bp-f1"
        stroke="white" strokeWidth="1.5" strokeDasharray="8 5"
      />

      {/* ── Windows ── */}
      <g className="bp-f bp-f2">
        {/* Ch1 — north */}
        <line x1="55"  y1="13" x2="135" y2="13" stroke="white" strokeWidth="0.7" />
        <line x1="55"  y1="27" x2="135" y2="27" stroke="white" strokeWidth="0.7" />
        <line x1="55"  y1="13" x2="55"  y2="27" stroke="white" strokeWidth="0.7" />
        <line x1="135" y1="13" x2="135" y2="27" stroke="white" strokeWidth="0.7" />
        {/* Ch2 — north */}
        <line x1="225" y1="13" x2="305" y2="13" stroke="white" strokeWidth="0.7" />
        <line x1="225" y1="27" x2="305" y2="27" stroke="white" strokeWidth="0.7" />
        <line x1="225" y1="13" x2="225" y2="27" stroke="white" strokeWidth="0.7" />
        <line x1="305" y1="13" x2="305" y2="27" stroke="white" strokeWidth="0.7" />
        {/* SdB — north */}
        <line x1="400" y1="13" x2="455" y2="13" stroke="white" strokeWidth="0.7" />
        <line x1="400" y1="27" x2="455" y2="27" stroke="white" strokeWidth="0.7" />
        <line x1="400" y1="13" x2="400" y2="27" stroke="white" strokeWidth="0.7" />
        <line x1="455" y1="13" x2="455" y2="27" stroke="white" strokeWidth="0.7" />
        {/* Séjour — south (baie coulissante) */}
        <line x1="40"  y1="353" x2="220" y2="353" stroke="white" strokeWidth="0.7" />
        <line x1="40"  y1="367" x2="220" y2="367" stroke="white" strokeWidth="0.7" />
        <line x1="40"  y1="353" x2="40"  y2="367" stroke="white" strokeWidth="0.7" />
        <line x1="220" y1="353" x2="220" y2="367" stroke="white" strokeWidth="0.7" />
        <line x1="130" y1="353" x2="130" y2="367" stroke="white" strokeWidth="0.7" />
        {/* Séjour — west */}
        <line x1="13"  y1="215" x2="13"  y2="280" stroke="white" strokeWidth="0.7" />
        <line x1="27"  y1="215" x2="27"  y2="280" stroke="white" strokeWidth="0.7" />
        <line x1="13"  y1="215" x2="27"  y2="215" stroke="white" strokeWidth="0.7" />
        <line x1="13"  y1="280" x2="27"  y2="280" stroke="white" strokeWidth="0.7" />
      </g>

      {/* ── Doors (panel + arc) ── */}
      <g className="bp-f bp-f3" stroke="white" strokeWidth="0.9" fill="none">
        {/* Ch1 */}
        <line x1="62"  y1="170" x2="62"  y2="130" />
        <path d="M62,130  A40,40 0 0,1 102,170" />
        {/* Ch2 */}
        <line x1="242" y1="170" x2="242" y2="130" />
        <path d="M242,130 A40,40 0 0,1 282,170" />
        {/* SdB */}
        <line x1="370" y1="52"  x2="330" y2="52"  />
        <path d="M330,52  A40,40 0 0,0 370,92"  />
        {/* Entrée */}
        <line x1="445" y1="360" x2="445" y2="320" />
        <path d="M445,320 A40,40 0 0,0 485,360" />
      </g>

      {/* ── North arrow ── */}
      <g className="bp-f bp-f4" stroke="white" fill="none">
        <circle cx="492" cy="386" r="10" strokeWidth="0.8" />
        <line x1="492" y1="396" x2="492" y2="370" strokeWidth="1" />
        <path d="M488,378 L492,370 L496,378" strokeWidth="1" />
      </g>
      <text x="492" y="390" className="bp-f bp-f4" fill="white" stroke="none" fontSize="9" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" letterSpacing="1">N</text>

      {/* ── Scale bar ── */}
      <g className="bp-f bp-f4" stroke="white" fill="none">
        <line x1="22"  y1="410" x2="182" y2="410" strokeWidth="0.8" />
        <line x1="22"  y1="406" x2="22"  y2="414" strokeWidth="0.8" />
        <line x1="102" y1="406" x2="102" y2="414" strokeWidth="0.8" />
        <line x1="182" y1="406" x2="182" y2="414" strokeWidth="0.8" />
      </g>
      <text x="22"  y="423" className="bp-f bp-f4" fill="white" stroke="none" fontSize="8" fontFamily="Josefin Sans, sans-serif">0</text>
      <text x="94"  y="423" className="bp-f bp-f4" fill="white" stroke="none" fontSize="8" fontFamily="Josefin Sans, sans-serif">5m</text>
      <text x="172" y="423" className="bp-f bp-f4" fill="white" stroke="none" fontSize="8" fontFamily="Josefin Sans, sans-serif">10m</text>

      {/* ── Room labels ── */}
      <g className="bp-f bp-f5" fill="white" stroke="none" fontFamily="Josefin Sans, sans-serif">
        <text x="110" y="100" textAnchor="middle" fontSize="10" letterSpacing="2" fontWeight="600">CH. 1</text>
        <text x="285" y="100" textAnchor="middle" fontSize="10" letterSpacing="2" fontWeight="600">CH. 2</text>
        <text x="445" y="70"  textAnchor="middle" fontSize="9"  letterSpacing="1">SDB</text>
        <text x="445" y="148" textAnchor="middle" fontSize="8"  letterSpacing="1">WC</text>
        <text x="195" y="268" textAnchor="middle" fontSize="12" letterSpacing="2" fontWeight="600">SÉJOUR</text>
        <text x="195" y="285" textAnchor="middle" fontSize="9"  letterSpacing="1">+ CUISINE</text>
        <text x="445" y="265" textAnchor="middle" fontSize="10" letterSpacing="2" fontWeight="600">ENTRÉE</text>
        <text x="250" y="396" textAnchor="middle" fontSize="9"  letterSpacing="2">TERRASSE</text>
      </g>

      {/* ── Title block ── */}
      <g className="bp-f bp-f5">
        <rect x="388" y="368" width="132" height="48" stroke="white" strokeWidth="0.7" fill="none" />
        <line x1="388" y1="378" x2="520" y2="378" stroke="white" strokeWidth="0.7" />
        <text x="454" y="376" fill="white" stroke="none" fontSize="7.5" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" letterSpacing="1.5">F. KERREMANS</text>
        <text x="454" y="392" fill="white" stroke="none" fontSize="8"   textAnchor="middle" fontFamily="Josefin Sans, sans-serif" letterSpacing="1">PLAN RDC</text>
        <text x="454" y="406" fill="white" stroke="none" fontSize="7"   textAnchor="middle" fontFamily="Josefin Sans, sans-serif">ÉCHELLE 1/100</text>
      </g>
    </svg>
  )
}
