
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const OptimizedImage = ({ src, alt, className, priority = false, ...props }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading && !error && (
        <Skeleton 
          className={cn(
            "absolute inset-0 bg-slate-200",
            className
          )} 
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        className={cn(
          "transition-opacity duration-300 max-w-full max-h-full",
          isLoading ? "opacity-0" : "opacity-100",
          error ? "hidden" : "block",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
