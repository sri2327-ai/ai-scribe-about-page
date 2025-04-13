
"use client"

import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, RecursivePartial } from "@tsparticles/engine";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  background?: string;
  options?: RecursivePartial<ISourceOptions>;
}

export function Sparkles({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // We'll use dynamic import instead of direct import from @tsparticles/slim
      // This resolves the build error
      const { loadSlim } = await import("@tsparticles/slim");
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const id = useId();

  const defaultOptions: RecursivePartial<ISourceOptions> = {
    background: {
      color: { value: background },
    },
    fullScreen: { enable: false, zIndex: 1 },
    fpsLimit: 120,
    particles: {
      color: { value: color },
      move: {
        enable: true,
        direction: "none",
        speed: {
          min: minSpeed || speed / 10,
          max: speed,
        },
        straight: false,
      },
      number: { value: density },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  };

  return isReady && (
    <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} />
  );
}
