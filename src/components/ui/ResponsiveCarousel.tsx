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

interface ResponsiveCarouselProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  columnsDesktop?: number;
  columnsTablet?: number;
  columnsMobile?: number;
  gap?: number | string;
  itemKey?: (item: T, idx: number) => string | number;
  showControls?: boolean;
  itemWidth?: number | string;
  itemHeight?: number | string;
  className?: string;
  cardClassName?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  controlsBelow?: boolean;
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
}: ResponsiveCarouselProps<T>) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  let columns = columnsDesktop;
  if (isTablet) columns = columnsTablet;
  if (isMobile) columns = columnsMobile;

  let minCardWidth: string | number = itemWidth ?? 310;
  let maxCardWidth: string | number = itemWidth ?? 310;
  let cardHeight: string | number = itemHeight ?? 180;
  if (isMobile) {
    minCardWidth = itemWidth ?? 280;
    maxCardWidth = itemWidth ?? 280;
    cardHeight = itemHeight ?? 155;
  } else if (isTablet) {
    minCardWidth = itemWidth ?? 285;
    maxCardWidth = itemWidth ?? 285;
    cardHeight = itemHeight ?? 170;
  }

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
                marginRight: gap,
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
              }}
            >
              <div
                className={cardClassName ?? ""}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {renderItem(item, idx)}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!controlsBelow && showControls && (
          <>
            <CarouselPrevious
              className="
                !rounded-full h-9 w-9 bg-white shadow-lg border absolute
                z-20 
                top-1/2 
                -translate-y-1/2
                opacity-90
                hover:opacity-100
                left-2
                md:left-4
              "
            />
            <CarouselNext
              className="
                !rounded-full h-9 w-9 bg-white shadow-lg border absolute
                z-20
                top-1/2
                -translate-y-1/2
                opacity-90
                hover:opacity-100
                right-2
                md:right-4
              "
            />
          </>
        )}
        {controlsBelow && showControls && (
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious
              className="
                static relative left-0 translate-y-0 !rounded-full h-9 w-9 bg-white shadow border
                opacity-90 hover:opacity-100"
            />
            <CarouselNext
              className="
                static relative left-0 translate-y-0 !rounded-full h-9 w-9 bg-white shadow border
                opacity-90 hover:opacity-100"
            />
          </div>
        )}
      </Carousel>
    </div>
  );
}
