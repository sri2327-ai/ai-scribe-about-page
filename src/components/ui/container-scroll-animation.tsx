
"use client";
import React, { useRef, useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

export const ContainerScroll = memo(({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    
    // Use ResizeObserver with performance optimizations
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!entries || !entries.length) return;
        
        // Use requestAnimationFrame to throttle updates
        requestAnimationFrame(() => {
          checkMobile();
        });
      });
      
      if (document.body) {
        resizeObserver.observe(document.body);
      }
      
      return () => {
        resizeObserver.disconnect();
      };
    } else {
      // Fallback to throttled event listener
      const throttledResize = throttle(checkMobile, 200);
      window.addEventListener('resize', throttledResize);
      
      return () => {
        window.removeEventListener('resize', throttledResize);
      };
    }
  }, []);

  // Memoize children for performance
  const memoizedChildren = React.useMemo(() => children, [children]);

  return (
    <div
      className="flex items-center justify-center relative p-2 md:p-10 will-change-transform"
      ref={containerRef}
    >
      <div className="py-5 md:py-10 w-full relative">
        <Header titleComponent={titleComponent} />
        <Card>{memoizedChildren}</Card>
      </div>
    </div>
  );
});

ContainerScroll.displayName = 'ContainerScroll';

export const Header = memo(({ titleComponent }: { titleComponent: string | React.ReactNode }) => {
  return (
    <div className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </div>
  );
});

Header.displayName = 'Header';

// Use React.memo to prevent unnecessary re-renders
export const Card = memo(({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-5xl -mt-8 mx-auto h-auto min-h-[25rem] md:min-h-[35rem] w-full">
      <div className="h-full w-full overflow-hidden flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100">
        {children}
      </div>
    </div>
  );
});

Card.displayName = 'Card';

// Utility function to throttle events
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;
  
  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
