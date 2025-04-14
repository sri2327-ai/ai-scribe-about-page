
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SecondSection() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const docRevData = [
    { 
      "docImg": "https://images.s10.ai/images/Harold.jpg",
      "docImgAlt": "Harold",
      "docReview": "\"I've tried them all—S10.AI is hands down the best AI assistant for healthcare. Whether it's documentation with CRUSH or patient engagement with BRAVO, S10.AI delivers unparalleled efficiency and accuracy.\"",
      "docNm": "— Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik"
    },
    { 
      "docImg": "https://images.s10.ai/images/Dr-Humera-Naqvi.jpeg",
      "docImgAlt": "Dr-Humera-Naqvi",
      "docReview": "\"With S10.AI, I can focus on patient interactions without worrying about administrative burdens. The seamless automation and real-time documentation make my workflow effortless.\"",
      "docNm": "— Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy"
    },
    { 
      "docImg": "https://images.s10.ai/images/Dr-Lisbeth-Roy.png.webp",
      "docImgAlt": "Dr-Lisbeth-Roy",
      "docReview": "\"S10.AI is effortless, customizable, and exceeds expectations! From streamlining clinical documentation to enhancing patient care, it's a game-changer for my organisation\"",
      "docNm": "— Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio"
    },
  ];
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trusted By Leading Healthcare Organisations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docRevData.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={isMounted ? { y: 30, opacity: 0 } : false}
              animate={isMounted ? { y: 0, opacity: 1 } : false}
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
              className="border border-gray-300 rounded-lg overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="cursor-pointer">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={testimonial.docImg}
                    alt={testimonial.docImgAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between min-h-[200px]">
                  <p className="text-center text-gray-700 mb-4">{testimonial.docReview}</p>
                  <p className="text-center font-semibold">{testimonial.docNm}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
