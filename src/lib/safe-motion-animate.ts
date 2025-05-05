
/**
 * This utility provides a safe way to use animate properties in framer-motion
 * that TypeScript doesn't recognize out of the box
 */

// For TargetAndTransition objects used in animate prop
export interface SafeMotionAnimateProps {
  boxShadow?: string | string[];
  backgroundColor?: string | string[];
  background?: string | string[];
  borderRadius?: string | string[];
  opacity?: number | number[];
  scale?: number | number[];
  x?: number | number[];
  y?: number | number[];
  [key: string]: any; // Allow any property
}

/**
 * Safely pass animation properties to framer-motion's animate prop
 * @param props Animation properties that TypeScript might not recognize
 * @returns The same props, but safely typed for framer-motion
 */
export function safeAnimateProp(props: SafeMotionAnimateProps): any {
  return props;
}

/**
 * Component props with className for shadcn components that don't accept it
 */
export interface WithClassName {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // Allow any other prop
}
