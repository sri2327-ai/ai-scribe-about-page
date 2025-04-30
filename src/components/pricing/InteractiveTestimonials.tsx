
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const InteractiveTestimonials = () => {
  const [activeCategory, setActiveCategory] = useState<'physicians' | 'practices' | 'specialists'>('physicians');
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = {
    physicians: [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Cardiologist',
        company: 'Boston Medical Center',
        quote: "CRUSH Pro's telehealth support and HCC tracking transformed my cardiology practice. Charting's done in minutes, and I can finally focus on patients instead of paperwork!",
        avatar: '👩‍⚕️'
      },
      {
        name: 'Dr. Michael Chen',
        title: 'Primary Care Physician',
        company: 'Northwestern Memorial Hospital',
        quote: "BRAVO Pro's AI-powered scheduling and refill processing cut no-shows by 30%. My patients and staff are thrilled with the improved flow and communication!",
        avatar: '👨‍⚕️'
      },
      {
        name: 'Dr. Jessica Martinez',
        title: 'Family Medicine',
        company: 'Mayo Clinic',
        quote: "The CRUSH & BRAVO bundle completely revolutionized my practice workflow. I'm saving over 2 hours daily and my patients love the seamless communication.",
        avatar: '👩‍⚕️'
      }
    ],
    practices: [
      {
        name: 'Mountain View Medical Group',
        title: 'Multi-Provider Practice',
        company: 'Colorado Springs',
        quote: "Implementing CRUSH across our 12-provider practice was seamless. The AI adapts to each physician's style while maintaining consistent documentation standards.",
        avatar: '🏥'
      },
      {
        name: 'Lakeview Primary Care',
        title: '5-Physician Practice',
        company: 'Chicago',
        quote: "BRAVO's automated appointment management reduced our no-show rate from 18% to just 5%. The ROI was immediate and substantial for our growing practice.",
        avatar: '🏥'
      },
      {
        name: 'Sunshine Health Partners',
        title: '8-Provider Group',
        company: 'Orlando',
        quote: "The bundle solution streamlined everything from documentation to patient engagement. We're operating more efficiently and our patients feel more connected to our practice.",
        avatar: '🏥'
      }
    ],
    specialists: [
      {
        name: 'Dr. Robert Williams',
        title: 'Orthopedic Surgeon',
        company: 'Cleveland Clinic',
        quote: "CRUSH's specialty-specific templates for orthopedics capture exactly what I need for surgical notes. The longitudinal intelligence feature helps me track patient progress seamlessly.",
        avatar: '👨‍⚕️'
      },
      {
        name: 'Dr. Amanda Peterson',
        title: 'Psychiatrist',
        company: 'Private Practice',
        quote: "As a psychiatrist, I was skeptical about AI documentation, but CRUSH perfectly captures the nuance in my patient interactions. It's transformed my note-taking process.",
        avatar: '👩‍⚕️'
      },
      {
        name: 'Dr. David Garcia',
        title: 'Dermatologist',
        company: 'University Medical Center',
        quote: "BRAVO's patient education features have significantly improved adherence to treatment plans. My patients appreciate the timely reminders and educational materials.",
        avatar: '👨‍⚕️'
      }
    ]
  };

  useEffect(() => {
    // Reset active index when category changes
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials[activeCategory].length - 1 ? 0 : current + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeCategory, testimonials]);

  const currentTestimonials = testimonials[activeCategory];

  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === currentTestimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? currentTestimonials.length - 1 : current - 1
    );
  };

  const categoryVariants = {
    inactive: { 
      opacity: 0.7, 
      scale: 0.95,
      y: 5
    },
    active: { 
      opacity: 1, 
      scale: 1,
      y: 0
    }
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#143151]">
            Real Clinicians, Real Results
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-[#387E89]">
            Join healthcare providers who've transformed their practices with our AI-powered solutions
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap">
          <motion.button
            variants={categoryVariants}
            animate={activeCategory === 'physicians' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('physicians')}
            className={`px-4 md:px-5 py-2 rounded-full cursor-pointer transition-colors ${
              activeCategory === 'physicians' 
                ? 'bg-[#143151] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Individual Physicians
          </motion.button>
          <motion.button
            variants={categoryVariants}
            animate={activeCategory === 'practices' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('practices')}
            className={`px-4 md:px-5 py-2 rounded-full cursor-pointer transition-colors ${
              activeCategory === 'practices' 
                ? 'bg-[#143151] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Medical Practices
          </motion.button>
          <motion.button
            variants={categoryVariants}
            animate={activeCategory === 'specialists' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('specialists')}
            className={`px-4 md:px-5 py-2 rounded-full cursor-pointer transition-colors ${
              activeCategory === 'specialists' 
                ? 'bg-[#143151] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Specialists
          </motion.button>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-[300px] md:h-[340px] mb-10 md:mb-12">
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={activeIndex}
                custom={1}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <Card className="bg-white shadow-xl rounded-2xl overflow-hidden border-0">
                  <div className="md:flex">
                    <div className="bg-gradient-to-br from-[#143151] to-[#387E89] text-white p-6 md:p-8 md:w-1/3 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-4xl md:text-5xl rounded-full bg-white/20 backdrop-blur-sm mb-4">
                        {currentTestimonials[activeIndex].avatar}
                      </div>
                      <h3 className="text-xl font-bold">{currentTestimonials[activeIndex].name}</h3>
                      <p className="text-sm opacity-90">{currentTestimonials[activeIndex].title}</p>
                      <p className="text-sm opacity-80">{currentTestimonials[activeIndex].company}</p>
                    </div>
                    <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                      <div className="text-5xl text-[#143151] opacity-20 font-serif mb-2">"</div>
                      <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                        {currentTestimonials[activeIndex].quote}
                      </p>
                      <div className="text-5xl text-right text-[#143151] opacity-20 font-serif">"</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {currentTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-[#143151] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-4 md:p-5 hover:shadow-lg transition-shadow border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-[#143151]">30% Fewer No-Shows</h3>
              <p className="text-center text-gray-600 text-sm md:text-base">BRAVO's automated patient engagement reduces missed appointments and improves practice revenue</p>
            </Card>
            
            <Card className="p-4 md:p-5 hover:shadow-lg transition-shadow border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-[#143151]">2+ Hours Saved Daily</h3>
              <p className="text-center text-gray-600 text-sm md:text-base">CRUSH's AI documentation speeds up charting by up to 70%, giving time back to clinicians</p>
            </Card>
            
            <Card className="p-4 md:p-5 hover:shadow-lg transition-shadow border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-[#143151]">95% Patient Satisfaction</h3>
              <p className="text-center text-gray-600 text-sm md:text-base">Improved communication and efficiency leads to happier patients and better outcomes</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
