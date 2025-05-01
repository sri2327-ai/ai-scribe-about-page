
import React, { useEffect, useState, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = "100px" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return (
    <div ref={setRef} className="w-full">
      {isVisible ? children : (
        <div className="w-full h-40 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
