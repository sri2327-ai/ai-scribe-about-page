
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
  className?: string;
  cardClassName?: string;
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
  className,
  cardClassName,
}: ResponsiveCarouselProps<T>) {
  // Always use carousel for consistency across all breakpoints
  // But for desktop, we show more columns by shrinking basis
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  // Calculate columns for current breakpoint
  let columns = columnsDesktop;
  if (isTablet) columns = columnsTablet;
  if (isMobile) columns = columnsMobile;

  // Card min/max width
  let carouselWidth: string | number = "95vw";
  let minCardWidth: string | number = 250;
  let maxCardWidth: string | number = 370;
  if (isMobile) {
    carouselWidth = "100vw";
    minCardWidth = 220;
    maxCardWidth = 330;
  } else if (isTablet) {
    carouselWidth = "98vw";
    minCardWidth = 220;
    maxCardWidth = 340;
  }

  return (
    <Carousel className={`w-full relative ${className || ""}`}>
      <CarouselContent>
        {items.map((item, idx) => (
          <CarouselItem
            key={itemKey ? itemKey(item, idx) : idx}
            className={`
              px-2 
              ${isMobile ? "basis-[80vw] max-w-[340px]" : ""}
              ${isTablet && !isMobile ? "basis-1/2 max-w-[340px]" : ""}
              ${!isMobile && !isTablet ? `basis-1/${columns}` : ""}
            `}
            style={{
              minWidth: itemWidth || minCardWidth,
              maxWidth: itemWidth || maxCardWidth,
              marginRight: gap,
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div className={cardClassName ?? ""} style={{ height: "100%" }}>{renderItem(item, idx)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {showControls && (
        <>
          {/* Arrows always visible, on right side for mobile+tablet */}
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
    </Carousel>
  );
}

