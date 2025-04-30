
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const InteractiveTestimonials = () => {
  const [activeCategory, setActiveCategory] = useState<'physicians' | 'practices' | 'specialists'>('physicians');

  const testimonials = {
    physicians: [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Cardiologist',
        company: 'Boston Medical Center',
        quote: "CRUSH Pro's telehealth support and HCC tracking transformed my cardiology practice. Charting's done in minutes, and I can finally focus on patients instead of paperwork!"
      },
      {
        name: 'Dr. Michael Chen',
        title: 'Primary Care Physician',
        company: 'Northwestern Memorial Hospital',
        quote: "BRAVO Pro's AI-powered scheduling and refill processing cut no-shows by 30%. My patients and staff are thrilled with the improved flow and communication!"
      },
      {
        name: 'Dr. Jessica Martinez',
        title: 'Family Medicine',
        company: 'Mayo Clinic',
        quote: "The CRUSH & BRAVO bundle completely revolutionized my practice workflow. I'm saving over 2 hours daily and my patients love the seamless communication."
      }
    ],
    practices: [
      {
        name: 'Mountain View Medical Group',
        title: 'Multi-Provider Practice',
        company: 'Colorado Springs',
        quote: "Implementing CRUSH across our 12-provider practice was seamless. The AI adapts to each physician's style while maintaining consistent documentation standards."
      },
      {
        name: 'Lakeview Primary Care',
        title: '5-Physician Practice',
        company: 'Chicago',
        quote: "BRAVO's automated appointment management reduced our no-show rate from 18% to just 5%. The ROI was immediate and substantial for our growing practice."
      },
      {
        name: 'Sunshine Health Partners',
        title: '8-Provider Group',
        company: 'Orlando',
        quote: "The bundle solution streamlined everything from documentation to patient engagement. We're operating more efficiently and our patients feel more connected to our practice."
      }
    ],
    specialists: [
      {
        name: 'Dr. Robert Williams',
        title: 'Orthopedic Surgeon',
        company: 'Cleveland Clinic',
        quote: "CRUSH's specialty-specific templates for orthopedics capture exactly what I need for surgical notes. The longitudinal intelligence feature helps me track patient progress seamlessly."
      },
      {
        name: 'Dr. Amanda Peterson',
        title: 'Psychiatrist',
        company: 'Private Practice',
        quote: "As a psychiatrist, I was skeptical about AI documentation, but CRUSH perfectly captures the nuance in my patient interactions. It's transformed my note-taking process."
      },
      {
        name: 'Dr. David Garcia',
        title: 'Dermatologist',
        company: 'University Medical Center',
        quote: "BRAVO's patient education features have significantly improved adherence to treatment plans. My patients appreciate the timely reminders and educational materials."
      }
    ]
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

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]">
            Real Clinicians, Real Results
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#387E89]">
            Join healthcare providers who've transformed their practices with our AI-powered solutions
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.div
            variants={categoryVariants}
            animate={activeCategory === 'physicians' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('physicians')}
            className={`px-5 py-2 rounded-full cursor-pointer transition-colors ${
              activeCategory === 'physicians' 
                ? 'bg-[#143151] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Individual Physicians
          </motion.div>
          <motion.div
            variants={categoryVariants}
            animate={activeCategory === 'practices' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('practices')}
            className={`px-5 py-2 rounded-full cursor-pointer transition-colors ${
              activeCategory === 'practices' 
                ? 'bg-[#143151] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Medical Practices
          </motion.div>
          <motion.div
            variants={categoryVariants}
            animate={activeCategory === 'specialists' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('specialists')}
            className={`px-5 py-2 rounded-full cursor-pointer transition-colors ${
              activeCategory === 'specialists' 
                ? 'bg-[#143151] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Specialists
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl py-6 md:py-10 px-4"
            >
              <AnimatedTestimonials
                testimonials={testimonials[activeCategory]}
                autoplay={true}
                className="text-white"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-5 hover:shadow-lg transition-shadow border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-[#143151]">30% Fewer No-Shows</h3>
              <p className="text-center text-gray-600">BRAVO's automated patient engagement reduces missed appointments and improves practice revenue</p>
            </Card>
            
            <Card className="p-5 hover:shadow-lg transition-shadow border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-[#143151]">2+ Hours Saved Daily</h3>
              <p className="text-center text-gray-600">CRUSH's AI documentation speeds up charting by up to 70%, giving time back to clinicians</p>
            </Card>
            
            <Card className="p-5 hover:shadow-lg transition-shadow border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-500 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-[#143151]">95% Patient Satisfaction</h3>
              <p className="text-center text-gray-600">Improved communication and efficiency leads to happier patients and better outcomes</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
