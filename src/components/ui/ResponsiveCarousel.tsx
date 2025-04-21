
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ResponsiveCarouselProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  columnsDesktop?: number;
  columnsTablet?: number;
  columnsMobile?: number;
  gap?: number | string;
  itemKey?: (item: T, idx: number) => string | number;
}

export function ResponsiveCarousel<T>({
  items,
  renderItem,
  columnsDesktop = 4,
  columnsTablet = 2,
  columnsMobile = 1,
  gap = 24,
  itemKey,
}: ResponsiveCarouselProps<T>) {
  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  // Use carousel if mobile or tablet
  const useCarousel = isMobile || isTablet;

  if (useCarousel) {
    return (
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem
              key={itemKey ? itemKey(item, idx) : idx}
              className="px-2"
              style={{ minWidth: "85vw", maxWidth: 400 }}
            >
              {renderItem(item, idx)}
            </CarouselItem>
          ))}
        </CarouselContent>
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
