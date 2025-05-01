
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const LazyImage = ({
  src,
  alt,
  className,
  placeholderClassName,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);
  
  return (
    <>
      {!isLoaded && (
        <div 
          className={cn(
            "bg-gray-200 animate-pulse rounded",
            placeholderClassName
          )} 
          style={{ 
            width: props.width || "100%", 
            height: props.height || "100%"
          }}
        />
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300",
            className
          )}
          {...props}
        />
      )}
    </>
  );
};
