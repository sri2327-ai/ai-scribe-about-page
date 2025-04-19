
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage = ({ src, alt, className, ...props }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="relative">
      {isLoading && (
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
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoading(false)}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
