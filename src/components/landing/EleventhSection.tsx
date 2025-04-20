
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      className="py-8 w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #143151, #387E89, #F06292)`,
      }}
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
            color: 'white',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            textAlign: 'center',
            mb: 4,
            fontWeight: 700
          }}
        >
          Security, Compliance & Data Protection You Can Trust
        </Typography>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 h-full shadow-lg"
                  >
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: '#333',
                          fontStyle: 'italic',
                          mb: 3
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar className="w-12 h-12">
                          <img src={testimonial.image} alt={testimonial.author} />
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 600, color: '#143151' }}>
                            {testimonial.author}
                          </Typography>
                          <Typography sx={{ fontSize: '0.875rem', color: '#666' }}>
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default EleventhSection;
