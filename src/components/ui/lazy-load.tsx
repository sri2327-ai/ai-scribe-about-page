
import React, { useEffect, useState, useRef } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

export const LazyLoad = ({
  children,
  threshold = 0.1,
  rootMargin = "100px",
  fallback
}: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wasTriggeredRef = useRef(false);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef || wasTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          wasTriggeredRef.current = true;
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div 
      ref={containerRef} 
      className="w-full"
      style={{ 
        minHeight: !isVisible ? '40px' : undefined,
        contain: 'content'
      }}
    >
      {isVisible ? children : fallback || (
        <div className="w-full h-10 flex items-center justify-center opacity-0">
          <span className="sr-only">Loading content...</span>
        </div>
      )}
    </div>
  );
};
