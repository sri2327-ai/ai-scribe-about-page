
import React, { useState, useEffect, memo, useRef } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholderClassName?: string;
  containerClassName?: string;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className, 
  priority = false, 
  placeholderClassName,
  containerClassName,
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(priority ? src : "");
  const imageRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Reset states when src changes
    if (src !== imageSrc && !priority) {
      setIsLoaded(false);
      setError(false);
      setImageSrc("");
    }
    
    // If priority, load immediately
    if (priority) {
      setImageSrc(src);
      return;
    }
    
    // If not priority and image ref exists, use intersection observer
    if (!priority && imageRef.current) {
      // Clear previous observer if exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      // Create new observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            
            img.onload = () => {
              requestAnimationFrame(() => {
                setImageSrc(src);
                setIsLoaded(true);
              });
            };
            
            img.onerror = () => {
              console.error(`Failed to load image: ${src}`);
              setError(true);
              setIsLoaded(true);
            };
            
            // Stop observing once triggered
            if (observerRef.current && imageRef.current) {
              observerRef.current.unobserve(imageRef.current);
            }
          }
        },
        { 
          rootMargin: '200px',
          threshold: 0.01
        }
      );
      
      observerRef.current.observe(imageRef.current);
    }
    
    return () => {
      if (observerRef.current && imageRef.current) {
        observerRef.current.unobserve(imageRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [src, priority, imageSrc]);

  return (
    <div 
      ref={imageRef}
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        containerClassName
      )}
      style={{ contain: 'paint layout' }}
    >
      {(!isLoaded && !error) && (
        <Skeleton 
          className={cn(
            "absolute inset-0 bg-slate-200",
            placeholderClassName
          )} 
          style={{ willChange: 'opacity' }}
        />
      )}
      {(priority || imageSrc) && (
        <img
          src={priority ? src : imageSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setIsLoaded(true);
            setError(true);
          }}
          className={cn(
            "transition-opacity duration-300 max-w-full max-h-full",
            isLoaded ? "opacity-100" : "opacity-0",
            error ? "hidden" : "block",
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

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
