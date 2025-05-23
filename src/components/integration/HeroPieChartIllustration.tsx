import React from "react";
import {
  ChartPie,
  SquareCheck,
  Calendar,
  Cloud,
  Mail,
  CircleDot,
  Circle,
  CircleCheck,
  SquarePlus,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PIE_SEGMENTS = [
  { label: "EHR",           icon: SquareCheck,   gradient: "from-[#95e8ff] via-[#9b87f5] to-[#0ea5e9]" },
  { label: "PMS",           icon: SquarePlus,    gradient: "from-[#cbf7fc] to-[#7ccba0]" },
  { label: "SIP",           icon: Circle,        gradient: "from-[#fff6a2] to-[#ffd570]" },
  { label: "TeleHealth",    icon: CircleDot,     gradient: "from-[#fecaca] to-[#ff90ab]" },
  { label: "Platform",      icon: ChartPie,      gradient: "from-[#d6bcfa] via-[#8b5cf6] to-[#9b87f5]" },
  { label: "Calendar",      icon: Calendar,      gradient: "from-[#ecefd9] to-[#ffd770]" },
  { label: "Cloud Storage", icon: Cloud,         gradient: "from-[#bff4fc] to-[#87d5ec]" },
  { label: "Email",         icon: Mail,          gradient: "from-[#f0e6fe] to-[#aec6cf]" },
];

function FloatingSegmentBadge({
  x,
  y,
  icon: Icon,
  label,
  gradient,
  delay,
  isMobile,
}: {
  x: number;
  y: number;
  icon: React.ElementType;
  label: string;
  gradient: string;
  delay: number;
  isMobile: boolean;
}) {
  const scaleFactor = isMobile ? 0.8 : 1;
  
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 3,
        pointerEvents: "none",
        animation: "fade-in 0.7s cubic-bezier(.39,1.36,.57,1) both",
        animationDelay: `${delay}ms`,
        scale: scaleFactor,
      }}
      className="group"
    >
      <div
        className={`
          flex flex-col items-center gap-1
          shadow-lg rounded-2xl
          bg-white bg-opacity-90
          p-2 px-3 border backdrop-blur-md
          border-[#e2e8f0] 
          transition-all duration-200
          group-hover:scale-110
        `}
        style={{
          minWidth: isMobile ? 56 : 66,
          border: "1.5px solid #e3e4f6",
          boxShadow: "0 2px 8px 0 #b5b5b54a",
          background: `linear-gradient(110deg, ${gradient})`,
          cursor: "default",
        }}
      >
        <span
          className="rounded-full bg-white bg-opacity-80 shadow-sm mb-1 p-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid #f2f5fa",
            marginBottom: 2,
            boxShadow: "0 2px 7px 0 #cdf6ff52",
          }}
        >
          <Icon size={isMobile ? 16 : 19} className="text-[#387E89]" strokeWidth={2} />
        </span>
        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-bold text-[#143151] drop-shadow-sm`} style={{ letterSpacing: "-0.011em" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function getPositionOnArc(cx: number, cy: number, r: number, angle: number, distanceOut: number = 36) {
  const rad = ((angle - 90) * Math.PI) / 180.0;
  return {
    x: cx + (r + distanceOut) * Math.cos(rad),
    y: cy + (r + distanceOut) * Math.sin(rad),
  };
}

function PieSegment({
  startAngle,
  endAngle,
  colorId,
  delay,
  cx,
  cy,
  r,
}: {
  startAngle: number;
  endAngle: number;
  colorId: string;
  delay: number;
  cx: number;
  cy: number;
  r: number;
}) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
  const d = [
    `M ${cx},${cy}`,
    `L ${start.x},${start.y}`,
    `A ${r},${r} 0 ${largeArcFlag} 0 ${end.x},${end.y}`,
    "Z",
  ].join(" ");
  return (
    <path
      d={d}
      fill={`url(#${colorId})`}
      style={{
        filter: "drop-shadow(0 2px 7px #e0e7fa99)",
        opacity: 0.97,
        transformOrigin: `${cx}px ${cy}px`,
        animation: `segment-in 0.86s cubic-bezier(.49,1.46,.47,.79) both`,
        animationDelay: `${delay}ms`,
      } as React.CSSProperties}
    />
  );
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

const PieChartModern: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Dynamic sizing based on screen size
  const size = isMobile ? 220 : 256;
  const cx = size / 2;
  const cy = size / 2;
  const r = (size / 2) - 26;
  
  let angle = 0;
  const segmentAngle = 360 / PIE_SEGMENTS.length;
  
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      style={{
        minWidth: isMobile ? 220 : 260,
        minHeight: isMobile ? 220 : 260,
      }}
    >
      {PIE_SEGMENTS.map((seg, i) => {
        const midAngle = angle + segmentAngle / 2;
        const badgePos = getPositionOnArc(cx, cy, r, midAngle, isMobile ? 38 : 46);
        const out = (
          <FloatingSegmentBadge
            key={seg.label}
            x={badgePos.x - (isMobile ? 56 : 66)}
            y={badgePos.y - (isMobile ? 67 : 77)}
            icon={seg.icon}
            label={seg.label}
            gradient={seg.gradient}
            delay={i * 60 + 100}
            isMobile={isMobile}
          />
        );
        angle += segmentAngle;
        return out;
      })}

      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="block z-10"
        style={{
          borderRadius: 40,
          background: "transparent",
          boxShadow: "0 4px 20px #d2e1ff33",
          overflow: "visible",
          maxWidth: isMobile ? "260px" : "350px",
        }}
      >
        <defs>
          <radialGradient
            id="modern-glass"
            cx="47%" cy="50%" r="83%"
            fx="52%" fy="49%"
          >
            <stop offset="0%" stopColor="#f9fafc" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#e7e6fb" stopOpacity="0.65" />
          </radialGradient>
          <linearGradient id="seg0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0.1" stopColor="#95e8ff" />
            <stop offset="0.7" stopColor="#9b87f5" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="seg1" x1="30%" y1="10%" x2="90%" y2="80%">
            <stop stopColor="#cbf7fc" /> <stop offset="1" stopColor="#7ccba0" />
          </linearGradient>
          <linearGradient id="seg2" x1="0%" y1="25%" x2="100%" y2="80%">
            <stop stopColor="#fff6a2" /> <stop offset="1" stopColor="#ffd570" />
          </linearGradient>
          <linearGradient id="seg3" x1="0%" y1="30%" x2="100%" y2="100%">
            <stop stopColor="#fecaca" /> <stop offset="0.8" stopColor="#ff90ab" />
          </linearGradient>
          <linearGradient id="seg4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#d6bcfa" /> <stop offset="0.7" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#9b87f5" />
          </linearGradient>
          <linearGradient id="seg5" x1="0%" y1="20%" x2="100%" y2="90%">
            <stop stopColor="#ecefd9" /> <stop offset="1" stopColor="#ffd770" />
          </linearGradient>
          <linearGradient id="seg6" x1="15%" y1="10%" x2="85%" y2="100%">
            <stop stopColor="#bff4fc" /> <stop offset="1" stopColor="#87d5ec" />
          </linearGradient>
          <linearGradient id="seg7" x1="10%" y1="0%" x2="100%" y2="70%">
            <stop stopColor="#f0e6fe" /> <stop offset="1" stopColor="#aec6cf" />
          </linearGradient>
        </defs>

        <ellipse
          cx={cx}
          cy={cy + 17 * (isMobile ? 0.8 : 1)}
          rx={r + 6}
          ry={38 * (isMobile ? 0.8 : 1)}
          fill="#b7bef63b"
          opacity={0.21}
        />
        <circle
          cx={cx}
          cy={cy}
          r={r + 10}
          fill="url(#modern-glass)"
          opacity={0.91}
          style={{
            filter: "blur(2.8px)",
          }}
        />
        {PIE_SEGMENTS.map((seg, i) => {
          const startAngle = i * segmentAngle;
          const endAngle = (i + 1) * segmentAngle;
          return (
            <PieSegment
              key={seg.label}
              startAngle={startAngle}
              endAngle={endAngle}
              colorId={`seg${i}`}
              delay={i * 68 + 28}
              cx={cx}
              cy={cy}
              r={r}
            />
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r={isMobile ? 48 : 58}
          fill="#0ea5e9"
          opacity={0.95}
          style={{
            filter: "drop-shadow(0 1px 22px #8b5cf674) drop-shadow(0 1px 30px #b6ecfc8e)",
          }}
        />
        <circle
          cx={cx}
          cy={cy}
          r={isMobile ? 38 : 47}
          fill="#fff"
          opacity={0.99}
          style={{
            filter: "drop-shadow(0 1px 16px #9b87f5aa) drop-shadow(0 2px 8px #0ea5e929)",
          }}
        />

        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fill="#387E89"
          fontWeight="bold"
          fontFamily="'Inter',sans-serif"
          fontSize={isMobile ? "1.7rem" : "2.07rem"}
          style={{
            letterSpacing: "-1.9px",
            filter: "drop-shadow(0 2px 14px #8b5cf675) drop-shadow(0 2.5px 8px #87e1ea80)",
            textShadow: "0 1.5px 15px #74fae655, 0 1.5px 8px #bce3ec55",
            paintOrder: "stroke fill",
          }}
        >
          S10.AI
        </text>
        <style>
          {`
            @keyframes segment-in {
              0% { opacity: 0; transform: scale(0.78);}
              65% { opacity: 0.75; transform: scale(1.11);}
              100% { opacity: 1; transform: scale(1);}
            }
            @keyframes fade-in {
              0% { opacity: 0; transform: translateY(16px) scale(0.96);}
              100% { opacity: 1; transform: translateY(0) scale(1);}
            }
          `}
        </style>
      </svg>
    </div>
  );
};

const HeroPieChartIllustration = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="hover-scale"
        style={{
          maxWidth: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(109.6deg,rgba(223,234,247,0.70) 11.2%,rgba(244,248,252,0.35) 91.1%)",
          borderRadius: 32,
          padding: "1.37rem 1.1rem",
          boxShadow: "0 7px 38px rgba(24, 65, 96, 0.10), 0 3.5px 18px 0 rgba(17, 17, 17, 0.12)",
          backdropFilter: "blur(6.5px)",
          WebkitBackdropFilter: "blur(6.5px)",
          transition: "box-shadow 0.24s cubic-bezier(.17,.67,.82,.31)",
        }}
      >
        <PieChartModern />
      </div>
    </div>
  );
};

export default HeroPieChartIllustration;
