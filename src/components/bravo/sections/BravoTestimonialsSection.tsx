"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from '@/data/testimonials';
import { StyledAvatar } from '@/components/ui/styled-avatar';

const quoteAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const authorAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.3
    }
  }
};

const BravoTestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // Start auto-rotation only when in view
      startAutoRotation();
    } else {
      controls.start("hidden");
      // Clear interval when not in view
      stopAutoRotation();
    }

    return () => stopAutoRotation(); // Cleanup on unmount
  }, [inView, controls]);

  useEffect(() => {
    // Reset the interval when testimonials change
    startAutoRotation();
    return () => stopAutoRotation();
  }, [currentTestimonial]);

  const startAutoRotation = () => {
    stopAutoRotation(); // Clear existing interval first

    intervalRef.current = window.setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleTestimonialChange = (index: number) => {
    stopAutoRotation(); // Stop auto-rotation on manual change
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          variants={quoteAnimation}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from healthcare professionals who are transforming their
            practices with Bravo.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto" ref={ref}>
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 relative"
            variants={quoteAnimation}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute top-6 left-6 text-gray-200 text-6xl opacity-50">
              “
            </div>
            <p className="text-gray-700 italic text-xl leading-relaxed">
              {testimonials[currentTestimonial].quote}
            </p>
            <div className="absolute bottom-6 right-6 text-gray-200 text-6xl opacity-50 text-right">
              ”
            </div>
          </motion.div>

          <motion.div
            className="flex items-center mt-6"
            variants={authorAnimation}
            initial="hidden"
            animate={controls}
          >
            <StyledAvatar className="h-8 w-8">
              <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
              <AvatarFallback className="bg-slate-100 text-slate-600">
                {testimonial.name[0]}
              </AvatarFallback>
            </StyledAvatar>
            <div className="ml-4">
              <h4 className="text-gray-800 font-semibold">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-500 text-sm">
                {testimonials[currentTestimonial].title}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1 transition-colors duration-300",
                  index === currentTestimonial
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => handleTestimonialChange(index)}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          variants={authorAnimation}
          initial="hidden"
          animate={controls}
        >
          <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white rounded-full px-8 py-3">
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BravoTestimonialsSection;
