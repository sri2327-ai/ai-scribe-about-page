
import React, { useState, useEffect, useRef, memo } from 'react';
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const LazyImage = memo(({
  src,
  alt,
  className,
  placeholderClassName,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const imgRef = useRef<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    if (!imgRef.current) return;
    
    // Cleanup previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Use intersection observer for better performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Load image only when it's in viewport
          const img = new Image();
          img.decoding = 'async';
          img.onload = () => {
            setImageSrc(src);
            setIsLoaded(true);
          };
          img.src = src;
          
          // Stop observing once triggered
          if (observerRef.current && imgRef.current) {
            observerRef.current.unobserve(imgRef.current);
          }
        }
      },
      { 
        rootMargin: '200px',
        threshold: 0.01
      }
    );
    
    observerRef.current.observe(imgRef.current);
    
    return () => {
      if (observerRef.current && imgRef.current) {
        observerRef.current.unobserve(imgRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [src]);
  
  return (
    <div ref={imgRef} className="relative">
      {!isLoaded && (
        <div 
          className={cn(
            "bg-gray-200 animate-pulse rounded",
            placeholderClassName
          )} 
          style={{ 
            width: props.width || "100%", 
            height: props.height || "100%",
            willChange: "opacity",
            contain: "strict"
          }}
          aria-hidden="true"
        />
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority="auto"
          className={cn(
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300",
            "will-change-opacity",
            className
          )}
          style={{
            willChange: isLoaded ? 'auto' : 'opacity',
            contain: 'content'
          }}
          {...props}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';
