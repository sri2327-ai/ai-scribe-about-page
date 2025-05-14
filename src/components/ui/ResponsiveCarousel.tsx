
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
      if (!isMobile && !isTablet && !isTablet && value.lg !== undefined) return value.lg;
      return value.xs || defaultVal;
    }
    return value;
  };

  let minCardWidth = getResponsiveValue(itemWidth, isMobile ? 280 : isTablet ? 285 : 310);
  let maxCardWidth = getResponsiveValue(itemWidth, isMobile ? 280 : isTablet ? 285 : 310);
  let cardHeight = getResponsiveValue(itemHeight, isMobile ? 155 : isTablet ? 170 : 180);
  let gapValue = getResponsiveValue(gap, 24);

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
    <div className={`w-full flex flex-col ${className || ""}`}>
      <Carousel 
        className="w-full relative"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={autoplayPlugin ? [autoplayPlugin] : undefined}
      >
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem
              key={itemKey ? itemKey(item, idx) : idx}
              className={`
                px-2 flex
                ${isMobile ? "" : ""}
                ${isTablet && !isMobile ? "" : ""}
                ${!isMobile && !isTablet ? "" : ""}
              `}
              style={{
                minWidth: minCardWidth,
                maxWidth: maxCardWidth,
                height: cardHeight,
                marginRight: gapValue,
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
              }}
            >
              <div
                className={cn(cardClassName ?? "", shadowStyles.carousel)}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
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
                "!rounded-full h-10 w-10 bg-white shadow-lg border absolute",
                "z-20 top-1/2 -translate-y-1/2",
                "opacity-90 hover:opacity-100",
                "left-2 md:left-4",
                "text-gray-800",
                "border-gray-100",
                shadowStyles.subtle,
                "flex items-center justify-center"
              )}
            />
            <CarouselNext
              className={cn(
                "!rounded-full h-10 w-10 bg-white shadow-lg border absolute",
                "z-20 top-1/2 -translate-y-1/2",
                "opacity-90 hover:opacity-100",
                "right-2 md:right-4",
                "text-gray-800",
                "border-gray-100",
                shadowStyles.subtle,
                "flex items-center justify-center"
              )}
            />
          </>
        )}
        {controlsBelow && shouldShowControls && (
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious
              className={cn(
                "static relative left-0 translate-y-0 !rounded-full h-10 w-10 bg-white border",
                "opacity-90 hover:opacity-100",
                "text-gray-800",
                "border-gray-200",
                shadowStyles.subtle,
                "flex items-center justify-center"
              )}
            />
            <CarouselNext
              className={cn(
                "static relative left-0 translate-y-0 !rounded-full h-10 w-10 bg-white border",
                "opacity-90 hover:opacity-100", 
                "text-gray-800",
                "border-gray-200",
                shadowStyles.subtle,
                "flex items-center justify-center"
              )}
            />
          </div>
        )}
      </Carousel>
    </div>
  );
}
