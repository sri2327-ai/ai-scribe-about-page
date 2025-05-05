
import { CSSProperties } from "react";

/**
 * This utility helps with TypeScript type errors related to framer-motion styles
 * It provides type-safe ways to use CSS properties with framer-motion
 */

// For style props in motion components
export interface SafeMotionStyle extends CSSProperties {
  willChange?: string;
  zIndex?: number;
  transform?: string;
  backgroundColor?: string;
  background?: string;
  backdropFilter?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  width?: string | number;
  height?: string | number;
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  opacity?: number;
  position?: string;
}

// For animate props in motion components
export interface SafeMotionAnimate {
  opacity?: number | number[];
  scale?: number | number[];
  x?: number | number[];
  y?: number | number[];
  rotate?: number | number[];
  borderRadius?: string | string[];
  boxShadow?: string | string[];
  backgroundColor?: string | string[];
  background?: string | string[];
  width?: string | number | (string | number)[];
  height?: string | number | (string | number)[];
  left?: string | number | (string | number)[];
  right?: string | number | (string | number)[];
  top?: string | number | (string | number)[];
  bottom?: string | number | (string | number)[];
  [key: string]: any; // Allow any property in animate prop
}

// Helper to safely use CSS properties in style prop
export function safeMotionStyle(style: SafeMotionStyle): any {
  return style as any;
}

// Helper to safely use CSS properties in animate prop
export function safeMotionAnimate(animate: SafeMotionAnimate): any {
  return animate as any;
}
