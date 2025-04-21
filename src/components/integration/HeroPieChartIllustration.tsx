
import React from "react";

/**
 * Visually appealing, modern Figma-style pie chart hero illustration for Integration
 * - 8 segments, vibrant gradients, glassmorphic background, smooth segment animation
 * - Curved labels, glowing central logo
 */

const SEGMENTS = [
  {
    label: "EHR",
    color: "url(#ehr-gradient)",
  },
  {
    label: "PMS",
    color: "url(#pms-gradient)",
  },
  {
    label: "SIP",
    color: "url(#sip-gradient)",
  },
  {
    label: "TeleHealth",
    color: "url(#telehealth-gradient)",
  },
  {
    label: "Platform",
    color: "url(#platform-gradient)",
  },
  {
    label: "Calendar",
    color: "url(#calendar-gradient)",
  },
  {
    label: "Cloud Storage",
    color: "url(#cloud-gradient)",
  },
  {
    label: "Email",
    color: "url(#email-gradient)",
  },
];

// Helper: Make an SVG arc path
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    cx,
    cy,
    "L",
    start.x,
    start.y,
    "A",
    r,
    r,
    0,
    arcSweep,
    0,
    end.x,
    end.y,
    "Z",
  ].join(" ");
}

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angle: number
) {
  const rad = ((angle - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

const PieChartSVG: React.FC = () => {
  const cx = 128;
  const cy = 128;
  const r = 106;
  const labelR = 95;
  const segmentAngle = 360 / SEGMENTS.length;
  let angle = 0;

  return (
    <svg
      width={292}
      height={292}
      viewBox="0 0 256 256"
      className="animate-fade-in"
      style={{
        background: "transparent",
        borderRadius: 32,
        filter: "drop-shadow(0 2px 14px #9b87f51a) drop-shadow(0 7px 44px #00596a1f)",
        overflow: "visible",
      }}
    >
      {/* Glassmorphic background circle */}
      <defs>
        {/* Gradient definitions for each segment for modern look */}
        <radialGradient
          id="bg-glass"
          cx="50%" cy="50%" r="85%"
          fx="50%" fy="50%"
        >
          <stop offset="0%" stopColor="#f9fafc" stopOpacity="0.96" />
          <stop offset="100%" stopColor="#e7e6fb" stopOpacity="0.74" />
        </radialGradient>
        <linearGradient id="ehr-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#95e8ff" /> <stop offset="0.7" stopColor="#9b87f5" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="pms-gradient" x1="30%" y1="10%" x2="90%" y2="80%">
          <stop stopColor="#cbf7fc" /> <stop offset="1" stopColor="#7ccba0" />
        </linearGradient>
        <linearGradient id="sip-gradient" x1="0%" y1="25%" x2="100%" y2="80%">
          <stop stopColor="#fff6a2" /> <stop offset="1" stopColor="#ffd570" />
        </linearGradient>
        <linearGradient id="telehealth-gradient" x1="0%" y1="30%" x2="100%" y2="100%">
          <stop stopColor="#fecaca" /> <stop offset="0.8" stopColor="#ff90ab" />
        </linearGradient>
        <linearGradient id="platform-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#d6bcfa" /> <stop offset="0.7" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="calendar-gradient" x1="0%" y1="20%" x2="100%" y2="90%">
          <stop stopColor="#ecefd9" /> <stop offset="1" stopColor="#ffd770" />
        </linearGradient>
        <linearGradient id="cloud-gradient" x1="15%" y1="10%" x2="85%" y2="100%">
          <stop stopColor="#bff4fc" /> <stop offset="1" stopColor="#87d5ec" />
        </linearGradient>
        <linearGradient id="email-gradient" x1="10%" y1="0%" x2="100%" y2="70%">
          <stop stopColor="#f0e6fe" /> <stop offset="1" stopColor="#aec6cf" />
        </linearGradient>
      </defs>

      {/* Shadow behind chart */}
      <ellipse
        cx={cx}
        cy={cy + 13}
        rx={101}
        ry={34}
        fill="#b7bef63b"
        opacity={0.33}
      />

      {/* Glassmorphic, blurred background */}
      <circle
        cx={cx}
        cy={cy}
        r={112}
        fill="url(#bg-glass)"
        opacity={0.93}
        style={{
          filter: "blur(2.5px)",
        }}
      />

      {/* Pie chart segments with modern gradients and animation */}
      {SEGMENTS.map((seg, i) => {
        const startAngle = angle;
        const endAngle = angle + segmentAngle;
        const midAngle = (startAngle + endAngle) / 2;
        const labelPos = polarToCartesian(cx, cy, labelR, midAngle);

        const path = describeArc(cx, cy, r, startAngle, endAngle);

        // Animate each segment in with stagger
        const animationDelay = `${i * 60 + 120}ms`;

        // Make label curve slightly if wide enough
        const rotate = midAngle - 90;

        angle = endAngle;
        return (
          <g key={seg.label}>
            <path
              d={path}
              fill={seg.color}
              stroke="#fff"
              strokeWidth={2.7}
              style={{
                filter: "drop-shadow(0 2px 7px #e0e7fa99)",
                opacity: 0.96,
                transition: "transform 0.6s cubic-bezier(.53,1.67,.49,.92), opacity 0.5s",
                transformOrigin: `${cx}px ${cy}px`,
                animation: `pie-in .9s cubic-bezier(.51,1.1,.55,.92) both`,
                animationDelay,
              } as React.CSSProperties}
            />

            {/* Curved/rotated label for segment */}
            <text
              x={labelPos.x}
              y={labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#1A1F2C"
              fontSize="0.98rem"
              fontFamily="'Inter',sans-serif"
              style={{
                fontWeight: 700,
                pointerEvents: "none",
                userSelect: "none",
                textShadow: "0 1px 7px #fafafd,0 1px 4px #b5b5b56d",
                transform: `rotate(${rotate}deg)`,
                filter: "drop-shadow(0 2.5px 6px #e0e7fa6a)",
              }}
            >
              {seg.label}
            </text>
          </g>
        );
      })}

      {/* Center circle with neon-glow & S10.AI wording */}
      <circle
        cx={cx}
        cy={cy}
        r={57}
        fill="#0ea5e9"
        opacity={0.90}
        style={{
          filter: "drop-shadow(0 1px 20px #8b5cf680), drop-shadow(0 1px 30px #b6ecfc60)",
        }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={48}
        fill="#1A1F2C"
        opacity={0.965}
        style={{
          filter:
            "drop-shadow(0 2px 7px #9b87f580) drop-shadow(0 6px 30px #0ea5e950)",
        }}
      />

      {/* Central logo text: S10.AI */}
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        fill="#FFF"
        fontWeight="bold"
        fontFamily="'Inter',sans-serif"
        fontSize="2.15rem"
        style={{
          letterSpacing: "-1.7px",
          filter: "drop-shadow(0 2px 15px #8b5cf670) drop-shadow(0 1px 8px #00eaf1b1)",
          textShadow: "0 1.5px 15px #74fae688, 0 1.5px 8px #bce3ec60",
          paintOrder: "stroke fill",
        }}
      >
        S10.AI
      </text>
      <text
        x={cx}
        y={cy + 25}
        textAnchor="middle"
        fill="#bce3ec"
        fontFamily="'Inter',sans-serif"
        fontSize="1.07rem"
        style={{
          fontWeight: 700,
          letterSpacing: "0.037em",
          filter: "drop-shadow(0 0.5px 6px #021b2b34)",
        }}
      >
        INTEGRATES WITH EVERYTHING
      </text>
      <style>
        {`
          @keyframes pie-in {
            0% { opacity: 0; transform: scale(0.86);}
            60% { opacity: 0.7; transform: scale(1.05);}
            100% { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </svg>
  );
};

const HeroPieChartIllustration = () => (
  <div
    className="hover-scale"
    style={{
      maxWidth: 405,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(109.6deg,rgba(223,234,247,0.70) 11.2%,rgba(244,248,252,0.35) 91.1%)",
      borderRadius: 32,
      padding: "1.2rem 0.7rem",
      boxShadow:
        "0 6.5px 34px rgba(24, 65, 96, 0.09), 0 3.5px 12px 0 rgba(17, 17, 17, 0.10)",
      backdropFilter: "blur(3.8px)",
      WebkitBackdropFilter: "blur(3.8px)",
      transition: "box-shadow 0.24s cubic-bezier(.17,.67,.82,.31)",
    }}
  >
    <PieChartSVG />
  </div>
);

export default HeroPieChartIllustration;
