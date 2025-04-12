
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  name: string;
  title: string;
  company?: string;
  src?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 sm:py-12", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <div className="relative h-72 xs:h-80 w-full flex items-center justify-center">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom bg-black rounded-3xl flex items-center justify-center p-6 sm:p-8 border border-white/30"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white mb-4 sm:mb-6 flex items-center justify-center mx-auto border border-white/30">
                      <span className="text-xl sm:text-2xl font-bold text-black">{testimonial.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">{testimonial.title}</p>
                    {testimonial.company && <p className="text-gray-400 mt-1 text-sm sm:text-base">{testimonial.company}</p>}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {testimonials[active].name}
            </h3>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">
              {testimonials[active].title}
              {testimonials[active].company && (
                <span className="text-gray-400"> at {testimonials[active].company}</span>
              )}
            </p>
          </motion.div>
          <div className="flex gap-4 pt-8 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-transparent flex items-center justify-center group/button border border-white"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover/button:translate-x-[-2px] transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-transparent flex items-center justify-center group/button border border-white"
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover/button:translate-x-[2px] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
