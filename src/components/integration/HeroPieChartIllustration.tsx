
import React from "react";

/**
 * Figma-style pie chart hero illustration
 * 8 segments, unique color per segment, central S10.AI marking
 */
const SEGMENTS = [
  { label: "EHR", color: "#50A9D7" },
  { label: "PMS", color: "#7CCBA0" },
  { label: "SIP", color: "#FFD570" },
  { label: "TeleHealth", color: "#FF90AB" },
  { label: "Platform", color: "#C6A2FC" },
  { label: "Calendar", color: "#FFD770" },
  { label: "Cloud Storage", color: "#87D5EC" },
  { label: "Email", color: "#AEC6CF" },
];

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  // Utility to draw pie chart arcs in SVG
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", cx, cy,
    "L", start.x, start.y,
    "A", r, r, 0, arcSweep, 0, end.x, end.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * Math.PI / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}

const PieChartSVG: React.FC = () => {
  const cx = 128;
  const cy = 128;
  const r = 100;
  const labelR = 86;
  const segmentAngle = 360 / SEGMENTS.length;
  let angle = 0;

  return (
    <svg width={256} height={256} viewBox="0 0 256 256" style={{
      background: "white",
      borderRadius: 20,
      boxShadow: "0 4px 22px rgba(42,48,61,0.10),0 1.5px 4px 0 rgba(17, 17, 17, 0.08)"
    }}>
      {/* Pie chart segments */}
      {SEGMENTS.map((seg, i) => {
        const startAngle = angle;
        const endAngle = angle + segmentAngle;
        // Central angle for label
        const midAngle = (startAngle + endAngle) / 2;
        const labelPos = polarToCartesian(cx, cy, labelR, midAngle);

        const path = describeArc(cx, cy, r, startAngle, endAngle);

        angle = endAngle;
        return (
          <g key={seg.label}>
            <path d={path} fill={seg.color} stroke="white" strokeWidth={2} />
            <text
              x={labelPos.x}
              y={labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#134151"
              fontSize="0.97rem"
              fontFamily="'Inter',sans-serif"
              style={{
                fontWeight: 600,
                pointerEvents: "none",
                userSelect: "none",
                textShadow: "0 1px 4px #fff7"
              }}
            >
              {seg.label}
            </text>
          </g>
        );
      })}
      {/* Center circle with S10.AI */}
      <circle cx={cx} cy={cy} r={53} fill="#004e70" />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fill="#fff"
        fontWeight="bold"
        fontFamily="'Inter',sans-serif"
        fontSize="1.7rem"
        style={{
          letterSpacing: "-1.5px",
          filter: "drop-shadow(0 1px 4px #006ca399)"
        }}
      >
        S10.AI
      </text>
      <text
        x={cx}
        y={cy + 22}
        textAnchor="middle"
        fill="#bce3ec"
        fontFamily="'Inter',sans-serif"
        fontSize="0.9rem"
        style={{
          fontWeight: 600,
          letterSpacing: "0.04em"
        }}
      >
        INTEGRATES WITH EVERYTHING
      </text>
    </svg>
  );
};

const HeroPieChartIllustration = () => (
  <div style={{
    maxWidth: 370,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <PieChartSVG />
  </div>
);

export default HeroPieChartIllustration;
