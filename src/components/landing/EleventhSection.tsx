
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "S10.AI has transformed our practice workflow. Our providers now spend more time with patients and less time on documentation.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "/path/to/sarah.jpg"
  },
  {
    quote: "The AI medical scribe functionality is remarkably accurate. It's like having an extra team member in every patient encounter.",
    author: "Dr. Michael Chen",
    role: "Primary Care Physician",
    image: "/path/to/michael.jpg"
  },
  {
    quote: "Implementation was seamless and the ROI was immediate. We've reduced administrative staff needs while improving patient satisfaction scores.",
    author: "Jennifer Williams",
    role: "Practice Manager",
    image: "/path/to/jennifer.jpg"
  }
];

export const EleventhSection = () => {
  return (
    <section 
      className="py-6 w-full flex items-center justify-center relative overflow-hidden bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full container mx-auto"
      >
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#143151',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            textAlign: 'center',
            mb: 2,
            fontWeight: 700
          }}
        >
          Security, Compliance & Data Protection You Can Trust
        </Typography>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 md:p-6 h-full shadow-md border border-gray-100"
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        color: '#333',
                        fontStyle: 'italic',
                        mb: 3
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar className="w-10 h-10">
                        <img src={testimonial.image} alt={testimonial.author} />
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600, color: '#143151', fontSize: '0.9rem' }}>
                          {testimonial.author}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 md:left-0 bg-white shadow-md" />
          <CarouselNext className="hidden md:flex -right-4 md:right-0 bg-white shadow-md" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default EleventhSection;
