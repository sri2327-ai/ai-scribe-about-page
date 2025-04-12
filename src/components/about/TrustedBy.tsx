
"use client";

import { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Alice Johnson",
    title: "Cardiologist",
    quote: "This platform completely transformed how we operate. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. James Lee",
    title: "Neurologist",
    quote: "Reliable, scalable, and beautifully designed. It just works.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Maria Gomez",
    title: "Pediatrician",
    quote: "The support team is phenomenal. I felt like a priority customer from day one.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Tommy Nguyen",
    title: "Radiologist",
    quote: "We doubled our efficiency in weeks. A game-changer for our workflow.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Oncologist",
    quote: "Reduced our administrative burden by 40%. Now I can focus more on patient care.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Dr. Michael Davis",
    title: "Surgeon",
    quote: "The AI assistance is remarkable. Accurate and intuitive - exactly what we needed.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];

// Stacked Card View Component - reused for mobile and modal
const StackedCardView = ({ 
  displayCount = 3, 
  initialActiveIndex = 0,
  testimonials = [], 
  className = "",
  cardHeight = "h-[200px]",
  autoRotate = true,
  onClick = undefined
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  return (
    <div className={`relative w-full mx-auto ${className}`}>
      {testimonials.map((card, index) => {
        const isActive = index === activeIndex;
        const distance = Math.abs(activeIndex - index);
        
        if (distance > displayCount) return null;
        
        const zIndex = testimonials.length - distance;
        const opacity = isActive ? 1 : 0.7 - (distance * 0.15);
        const scale = 1 - (distance * 0.05);
        const y = isActive ? 0 : 20 + (distance * 10);
        
        return (
          <motion.div
            key={`testimonial-${index}`}
            className={`absolute top-0 left-0 right-0 rounded-xl bg-black border border-gray-800 p-4 sm:p-5 flex flex-col items-center text-center shadow-xl ${cardHeight}`}
            style={{
              zIndex,
              opacity,
              scale,
              y
            }}
            animate={{
              opacity,
              scale,
              y,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            onClick={() => {
              if (onClick) onClick(card);
              else setActiveIndex(index);
            }}
          >
            <img
              src={card.avatar}
              alt={card.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gray-700 mb-3"
            />
            <div className="flex flex-col gap-1 mb-2">
              <p className="font-semibold text-white text-sm sm:text-base">{card.name}</p>
              <p className="text-xs text-gray-500">{card.title}</p>
            </div>
            <blockquote className="italic text-xs sm:text-sm text-gray-300 line-clamp-3 overflow-hidden">
              "{card.quote}"
            </blockquote>
          </motion.div>
        );
      })}
    </div>
  );
};

// Desktop Carousel using ShadCN Carousel
const TestimonialDesktopCarousel = ({ testimonials, onSelect }) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
            <div 
              className="rounded-xl bg-black border border-gray-800 p-4 sm:p-5 flex flex-col items-center text-center h-[220px] justify-between shadow-xl hover:border-gray-700 transition-all duration-300 cursor-pointer"
              onClick={() => onSelect(testimonial)}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border border-gray-700"
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
              <blockquote className="italic text-xs sm:text-sm text-gray-300 line-clamp-3 overflow-hidden">
                "{testimonial.quote}"
              </blockquote>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2 mt-4">
        <CarouselPrevious className="relative static transform-none mx-1" />
        <CarouselNext className="relative static transform-none mx-1" />
      </div>
    </Carousel>
  );
};

const TrustedBy = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-8 xs:py-10 sm:py-14 md:py-20 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 xs:mb-4 md:mb-6 text-white">Trusted by 1000+ Clinicians</h2>
          <div className="w-12 xs:w-16 md:w-20 h-[1px] bg-gray-700 mx-auto"></div>
        </motion.div>
        
        <div className="relative w-full">
          {/* Mobile View: Stacked Cards */}
          {isMobile ? (
            <div className="h-[280px] mb-4">
              <StackedCardView 
                testimonials={testimonials} 
                className="max-w-[300px]"
                cardHeight="h-[220px]"
                onClick={(testimonial) => setActiveTestimonial(testimonial)}
              />
            </div>
          ) : (
            /* Desktop View: Carousel */
            <TestimonialDesktopCarousel 
              testimonials={testimonials} 
              onSelect={(testimonial) => setActiveTestimonial(testimonial)}
            />
          )}
          
          {/* Testimonial Modal */}
          <AnimatePresence>
            {activeTestimonial && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={() => setActiveTestimonial(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-black border border-gray-800 rounded-xl p-6 max-w-md w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      className="w-20 h-20 rounded-full border border-gray-700 mb-4"
                    />
                    <h3 className="text-lg font-semibold text-white mb-1">{activeTestimonial.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{activeTestimonial.title}</p>
                    <blockquote className="italic text-gray-300 mb-5">
                      "{activeTestimonial.quote}"
                    </blockquote>
                    <button
                      className="text-sm border border-gray-700 rounded-full px-4 py-2 text-gray-400 hover:text-white hover:border-gray-500"
                      onClick={() => setActiveTestimonial(null)}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            className="rounded-full px-6 py-6 bg-transparent border border-white hover:bg-white/10 text-white font-semibold text-sm xs:text-base flex items-center gap-2 h-auto"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Us <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
