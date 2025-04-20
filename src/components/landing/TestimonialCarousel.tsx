
import React from 'react';
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "S10.AI has transformed our practice workflow. Our providers now spend more time with patients and less time on documentation.",
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "/placeholder.svg"
  },
  {
    quote: "The AI medical scribe functionality is remarkably accurate. It's like having an extra team member in every patient encounter.",
    name: "Dr. Michael Chen",
    role: "Primary Care Physician",
    image: "/placeholder.svg"
  },
  {
    quote: "Implementation was seamless and the ROI was immediate. We've reduced administrative staff needs while improving patient satisfaction scores.",
    name: "Jennifer Williams",
    role: "Practice Manager",
    image: "/placeholder.svg"
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <Box 
      sx={{
        width: '100%',
        position: 'relative',
        my: 4
      }}
    >
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center px-4 md:px-8"
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    lineHeight: 1.7,
                    fontWeight: 500,
                    mb: 4,
                    color: '#000000',
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Avatar
                  className="w-16 h-16 mb-4 border-2"
                  style={{ borderColor: '#387E89' }}
                >
                  <img src={testimonial.image} alt={testimonial.name} />
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    fontWeight: 600,
                    mb: 1,
                    color: '#000000'
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {testimonial.role}
                </Typography>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-gray-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-gray-200"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Carousel>
    </Box>
  );
};
