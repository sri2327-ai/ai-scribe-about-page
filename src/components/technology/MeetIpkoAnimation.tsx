
import { cn } from "@/lib/utils";
import React from "react";

interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const MeetIpkoAnimation = ({
  className,
  width = "100%",
  height = "100%",
  text = "Meet IPKO",
  showCpuConnections = true,
  lineMarkerSize = 8,
  animateText = true,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background Grid */}
        <g opacity="0.15" stroke="#4ECDC4">
          {Array.from({ length: 12 }, (_, i) => (
            <React.Fragment key={`grid-h-${i}`}>
              <line
                x1="0"
                y1={i * 70}
                x2="1200"
                y2={i * 70}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </React.Fragment>
          ))}
          {Array.from({ length: 18 }, (_, i) => (
            <React.Fragment key={`grid-v-${i}`}>
              <line
                x1={i * 70}
                y1="0"
                x2={i * 70}
                y2="800"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </React.Fragment>
          ))}
        </g>

        {/* CPU Central Unit */}
        <g>
          <rect
            x="500"
            y="300"
            width="200"
            height="200"
            rx="20"
            fill="url(#cpu-gradient)"
            stroke="#4ECDC4"
            strokeWidth="3"
            className={animateText ? "animate-pulse" : ""}
          />

          {/* CPU Label */}
          <text
            x="600"
            y="400"
            fontSize="32"
            fontWeight="bold"
            textAnchor="middle"
            className="font-wix-madefor"
            fill="white"
          >
            IPKO
          </text>

          {/* CPU Description Lines */}
          <text
            x="600"
            y="440"
            fontSize="12"
            textAnchor="middle"
            fill="#E0E0E0"
            className="font-wix-madefor"
          >
            Intelligent Physician
          </text>
          <text
            x="600"
            y="460"
            fontSize="12"
            textAnchor="middle"
            fill="#E0E0E0"
            className="font-wix-madefor"
          >
            Knowledge Orchestrator
          </text>
        </g>

        {/* Main Text */}
        <g>
          <text
            x="600"
            y="140"
            fontSize="48"
            fontWeight="bold"
            textAnchor="middle"
            fill="url(#text-gradient)"
            className={cn("font-wix-madefor", animateText ? "animate-fade-in" : "")}
          >
            {text}
          </text>
          <text
            x="600"
            y="180"
            fontSize="18"
            textAnchor="middle"
            fill="#A0A0A0"
            className="font-wix-madefor"
          >
            The Intelligent Physician Knowledge Orchestrator
          </text>
        </g>

        {/* Connection Lines and Modules */}
        {showCpuConnections && (
          <>
            {/* Top Module */}
            <g>
              <rect
                x="550"
                y="100"
                width="100"
                height="60"
                rx="10"
                fill="rgba(78, 205, 196, 0.1)"
                stroke="#4ECDC4"
                strokeWidth="2"
              />
              <text
                x="600"
                y="130"
                fontSize="14"
                textAnchor="middle"
                fill="#E0E0E0"
                className="font-wix-madefor"
              >
                CCIE
              </text>
              <text
                x="600"
                y="150"
                fontSize="10"
                textAnchor="middle"
                fill="#A0A0A0"
                className="font-wix-madefor"
              >
                Conversation Engine
              </text>

              {/* Line from Top to CPU */}
              <path
                d={`M600 160 L600 300`}
                stroke="#4ECDC4"
                strokeWidth="2"
                strokeDasharray={animateLines ? "6,6" : "0,0"}
                className={animateLines ? "animate-dash" : ""}
              />
              {animateMarkers && (
                <circle
                  cx="600"
                  cy="230"
                  r={lineMarkerSize}
                  fill="#4ECDC4"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="cy"
                    from="160"
                    to="300"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>

            {/* Left Module */}
            <g>
              <rect
                x="320"
                y="370"
                width="100"
                height="60"
                rx="10"
                fill="rgba(78, 205, 196, 0.1)"
                stroke="#4ECDC4"
                strokeWidth="2"
              />
              <text
                x="370"
                y="400"
                fontSize="14"
                textAnchor="middle"
                fill="#E0E0E0"
                className="font-wix-madefor"
              >
                PKIE
              </text>
              <text
                x="370"
                y="420"
                fontSize="10"
                textAnchor="middle"
                fill="#A0A0A0"
                className="font-wix-madefor"
              >
                Physician Knowledge
              </text>

              {/* Line from Left to CPU */}
              <path
                d={`M420 400 L500 400`}
                stroke="#4ECDC4"
                strokeWidth="2"
                strokeDasharray={animateLines ? "6,6" : "0,0"}
                className={animateLines ? "animate-dash" : ""}
              />
              {animateMarkers && (
                <circle
                  cx="460"
                  cy="400"
                  r={lineMarkerSize}
                  fill="#4ECDC4"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="cx"
                    from="420"
                    to="500"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>

            {/* Right Module */}
            <g>
              <rect
                x="780"
                y="370"
                width="100"
                height="60"
                rx="10"
                fill="rgba(78, 205, 196, 0.1)"
                stroke="#4ECDC4"
                strokeWidth="2"
              />
              <text
                x="830"
                y="400"
                fontSize="14"
                textAnchor="middle"
                fill="#E0E0E0"
                className="font-wix-madefor"
              >
                MKIE
              </text>
              <text
                x="830"
                y="420"
                fontSize="10"
                textAnchor="middle"
                fill="#A0A0A0"
                className="font-wix-madefor"
              >
                Medical Knowledge
              </text>

              {/* Line from Right to CPU */}
              <path
                d={`M780 400 L700 400`}
                stroke="#4ECDC4"
                strokeWidth="2"
                strokeDasharray={animateLines ? "6,6" : "0,0"}
                className={animateLines ? "animate-dash" : ""}
              />
              {animateMarkers && (
                <circle
                  cx="740"
                  cy="400"
                  r={lineMarkerSize}
                  fill="#4ECDC4"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="cx"
                    from="780"
                    to="700"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>

            {/* Bottom Module */}
            <g>
              <rect
                x="550"
                y="580"
                width="100"
                height="60"
                rx="10"
                fill="rgba(78, 205, 196, 0.1)"
                stroke="#4ECDC4"
                strokeWidth="2"
              />
              <text
                x="600"
                y="610"
                fontSize="14"
                textAnchor="middle"
                fill="#E0E0E0"
                className="font-wix-madefor"
              >
                IIIE
              </text>
              <text
                x="600"
                y="630"
                fontSize="10"
                textAnchor="middle"
                fill="#A0A0A0"
                className="font-wix-madefor"
              >
                Interface Engine
              </text>

              {/* Line from Bottom to CPU */}
              <path
                d={`M600 580 L600 500`}
                stroke="#4ECDC4"
                strokeWidth="2"
                strokeDasharray={animateLines ? "6,6" : "0,0"}
                className={animateLines ? "animate-dash" : ""}
              />
              {animateMarkers && (
                <circle
                  cx="600"
                  cy="540"
                  r={lineMarkerSize}
                  fill="#4ECDC4"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="cy"
                    from="580"
                    to="500"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          </>
        )}

        {/* Gradients */}
        <defs>
          <linearGradient
            id="cpu-gradient"
            x1="500"
            y1="300"
            x2="700"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#143151" />
            <stop offset="100%" stopColor="#0a1a2c" />
          </linearGradient>
          <linearGradient
            id="text-gradient"
            x1="400"
            y1="120"
            x2="800"
            y2="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="100%" stopColor="#2E8B84" />
          </linearGradient>
          <style>
            {`
              @keyframes animate-dash {
                to {
                  stroke-dashoffset: 24;
                }
              }
              .animate-dash {
                animation: animate-dash 2s linear infinite;
              }
              
              @keyframes fade-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
              .animate-fade-in {
                animation: fade-in 2s ease-in-out;
              }
              
              @keyframes pulse {
                0% { opacity: 0.4; }
                50% { opacity: 1; }
                100% { opacity: 0.4; }
              }
              .animate-pulse {
                animation: pulse 2s infinite ease-in-out;
              }
            `}
          </style>
        </defs>
      </svg>
    </div>
  );
};

export default MeetIpkoAnimation;
