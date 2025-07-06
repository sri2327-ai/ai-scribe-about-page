
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";

interface ResponsiveCarouselProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  columnsDesktop?: number;
  columnsTablet?: number;
  columnsMobile?: number;
  gap?: number | string | { xs: number, sm?: number, md?: number, lg?: number };
  itemKey?: (item: T, idx: number) => string | number;
  showControls?: boolean;
  itemWidth?: number | string | { xs: number, sm?: number, md?: number, lg?: number };
  itemHeight?: number | string | { xs: number, sm?: number, md?: number, lg?: number };
  className?: string;
  cardClassName?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  controlsBelow?: boolean;
  showControlsOnlyMobile?: boolean;
}

export function ResponsiveCarousel<T>({
  items,
  renderItem,
  columnsDesktop = 4,
  columnsTablet = 2,
  columnsMobile = 1,
  gap = 24,
  itemKey,
  showControls = true,
  itemWidth,
  itemHeight,
  className,
  cardClassName,
  autoPlay = false,
  autoPlayInterval = 3000,
  controlsBelow = false,
  showControlsOnlyMobile = false,
}: ResponsiveCarouselProps<T>) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  let columns = columnsDesktop;
  if (isTablet) columns = columnsTablet;
  if (isMobile) columns = columnsMobile;

  // Hide controls for desktop/tablet views if showControlsOnlyMobile is true
  const shouldShowControls = showControls && (!showControlsOnlyMobile || (showControlsOnlyMobile && isMobile));

  // Handle responsive sizes
  const getResponsiveValue = (value: any, defaultVal: number) => {
    if (value === undefined) return defaultVal;
    if (typeof value === 'object') {
      if (isMobile && value.xs !== undefined) return value.xs;
      if (isTablet && value.sm !== undefined) return value.sm;
      if (!isMobile && !isTablet && value.md !== undefined) return value.md;
      if (!isMobile && !isTablet && value.lg !== undefined) return value.lg;
      return value.xs || defaultVal;
    }
    return value;
  };

  let minCardWidth = getResponsiveValue(itemWidth, isMobile ? 280 : isTablet ? 300 : 320);
  let maxCardWidth = getResponsiveValue(itemWidth, isMobile ? 320 : isTablet ? 340 : 360);
  let cardHeight = getResponsiveValue(itemHeight, isMobile ? 340 : isTablet ? 360 : 380);
  let gapValue = getResponsiveValue(gap, isMobile ? 16 : 24);

  const autoplayPlugin = React.useMemo(
    () =>
      autoPlay
        ? Autoplay({
            delay: autoPlayInterval,
            stopOnInteraction: true,
            stopOnMouseEnter: false,
          })
        : undefined,
    [autoPlay, autoPlayInterval]
  );

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <Carousel 
        className="w-full relative"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        plugins={autoplayPlugin ? [autoplayPlugin] : undefined}
      >
        <CarouselContent className={cn("-ml-2 md:-ml-4")}>
          {items.map((item, idx) => (
            <CarouselItem
              key={itemKey ? itemKey(item, idx) : idx}
              className={cn(
                "pl-2 md:pl-4 basis-full",
                isMobile ? "basis-[85%]" : "",
                isTablet && !isMobile ? "basis-1/2" : "",
                !isMobile && !isTablet ? `basis-1/${columns}` : ""
              )}
            >
              <div
                className={cn(
                  "h-full w-full",
                  cardClassName,
                  shadowStyles.cardHover,
                  "transition-all duration-300 rounded-xl border border-gray-100"
                )}
                style={{
                  minHeight: cardHeight,
                  maxHeight: cardHeight,
                }}
              >
                {renderItem(item, idx)}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {!controlsBelow && shouldShowControls && (
          <>
            <CarouselPrevious
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 z-20",
                "h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm",
                "border border-gray-200 shadow-lg",
                "hover:bg-white hover:scale-105 transition-all duration-200",
                "text-gray-700 hover:text-gray-900",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                isMobile ? "h-8 w-8 left-1" : "md:left-4"
              )}
            />
            <CarouselNext
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 z-20",
                "h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm",
                "border border-gray-200 shadow-lg",
                "hover:bg-white hover:scale-105 transition-all duration-200",
                "text-gray-700 hover:text-gray-900",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                isMobile ? "h-8 w-8 right-1" : "md:right-4"
              )}
            />
          </>
        )}

        {controlsBelow && shouldShowControls && (
          <div className="flex justify-center gap-3 mt-6">
            <CarouselPrevious
              className={cn(
                "static translate-y-0 h-11 w-11 rounded-full",
                "bg-white border border-gray-200 shadow-md",
                "hover:shadow-lg hover:scale-105 hover:-translate-y-1",
                "transition-all duration-300",
                "text-gray-700 hover:text-gray-900",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            />
            <CarouselNext
              className={cn(
                "static translate-y-0 h-11 w-11 rounded-full",
                "bg-white border border-gray-200 shadow-md",
                "hover:shadow-lg hover:scale-105 hover:-translate-y-1",
                "transition-all duration-300",
                "text-gray-700 hover:text-gray-900",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            />
          </div>
        )}
      </Carousel>
    </div>
  );
}
