
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = Math.random() * 360; // Random angle for radial effect
    return {
        x: width / 2, // Center the beams
        y: height / 2,
        width: 20 + Math.random() * 40, // Thinner beams
        length: Math.max(width, height) * 1.5, // Longer beams to reach edges
        angle: angle,
        speed: 0, // Static beams for this effect
        opacity: 0.2 + Math.random() * 0.3, // Higher opacity for brighter beams
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
    };
}

export function BeamsBackground({
    className,
    children,
    intensity = "strong",
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 15; // Fewer beams for a cleaner look

    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width / dpr, canvas.height / dpr)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function drawCentralGlow() {
            if (!ctx || !canvas) return;
            const gradient = ctx.createRadialGradient(
                canvas.width / 2 / (window.devicePixelRatio || 1),
                canvas.height / 2 / (window.devicePixelRatio || 1),
                0,
                canvas.width / 2 / (window.devicePixelRatio || 1),
                canvas.height / 2 / (window.devicePixelRatio || 1),
                Math.max(canvas.width, canvas.height) / 2 / (window.devicePixelRatio || 1)
            );
            gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Subtle white beams with a glowing effect
            gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
            gradient.addColorStop(0.1, `rgba(255, 255, 255, ${pulsingOpacity * 0.5})`);
            gradient.addColorStop(0.4, `rgba(255, 255, 255, ${pulsingOpacity})`);
            gradient.addColorStop(0.6, `rgba(255, 255, 255, ${pulsingOpacity})`);
            gradient.addColorStop(0.9, `rgba(255, 255, 255, ${pulsingOpacity * 0.5})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(50px)"; // Increased blur for a softer glow

            drawCentralGlow();

            beamsRef.current.forEach((beam) => {
                beam.pulse += beam.pulseSpeed;
                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden",
                className
            )}
            style={{
                background: "radial-gradient(circle at center, #046f90 0%, #0d252b 100%)", // Using your color codes
            }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(15px)" }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
