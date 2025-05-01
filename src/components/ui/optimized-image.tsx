
import React, { useState, useEffect, memo } from 'react';
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
  
  useEffect(() => {
    // If not priority, load the image when component mounts
    if (!priority && !imageSrc) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setError(true);
        setIsLoaded(true);
      };
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [priority, src, imageSrc]);

  return (
    <div className={cn(
      "relative w-full h-full flex items-center justify-center",
      containerClassName
    )}>
      {(!isLoaded && !error) && (
        <Skeleton 
          className={cn(
            "absolute inset-0 bg-slate-200",
            placeholderClassName
          )} 
        />
      )}
      {(priority || imageSrc) && (
        <img
          src={priority ? src : imageSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
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
          style={{ willChange: isLoaded ? 'auto' : 'opacity' }}
          {...props}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
