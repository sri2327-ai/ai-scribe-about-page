
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
}: ResponsiveCarouselProps<T>) {
  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  // Use carousel if mobile or tablet
  const useCarousel = isMobile || isTablet;

  if (useCarousel) {
    return (
      <Carousel className="w-full relative">
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem
              key={itemKey ? itemKey(item, idx) : idx}
              className="md:basis-1/2 px-2"
              style={{ 
                minWidth: itemWidth || (isMobile ? "85vw" : "45vw"), 
                maxWidth: itemWidth || (isMobile ? 400 : 450) 
              }}
            >
              {renderItem(item, idx)}
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showControls && (
          <>
            <CarouselPrevious className="absolute left-1 md:left-2 opacity-70 hover:opacity-100" />
            <CarouselNext className="absolute right-1 md:right-2 opacity-70 hover:opacity-100" />
          </>
        )}
      </Carousel>
    );
  }

  // Desktop: grid view
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${columnsDesktop}, 1fr)`,
        gap,
        width: "100%",
        mt: 3,
      }}
    >
      {items.map((item, idx) => (
        <Box key={itemKey ? itemKey(item, idx) : idx}>{renderItem(item, idx)}</Box>
      ))}
    </Box>
  );
}
