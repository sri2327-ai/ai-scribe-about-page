
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { ImageTrail } from "@/components/ui/image-trail";
import { Phone, MessageSquare, Calendar, Database, Clock, Bell, FileCheck } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const CompatibilitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const icons = [
    <Phone key="phone" size={32} className="text-[#1EAEDB]" />,
    <MessageSquare key="message" size={32} className="text-[#1EAEDB]" />,
    <Calendar key="calendar" size={32} className="text-[#1EAEDB]" />,
    <Database key="database" size={32} className="text-[#1EAEDB]" />,
    <Clock key="clock" size={32} className="text-[#1EAEDB]" />,
    <Bell key="bell" size={32} className="text-[#1EAEDB]" />,
    <FileCheck key="filecheck" size={32} className="text-[#1EAEDB]" />,
  ];

  return (
    <div className="w-full py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Static visible icons for visual hint */}
          <motion.div 
            className="absolute top-1/4 left-1/4 opacity-20"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Phone size={32} className="text-[#1EAEDB]" />
          </motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-1/4 opacity-20"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Calendar size={32} className="text-[#1EAEDB]" />
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-1/3 opacity-20"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          >
            <Database size={32} className="text-[#1EAEDB]" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ color: bravoColors.primary }}>
            Compatible with Your Preferred SIP, Patient Platform & PMS
          </h2>
          
          <div className="mt-8 h-32 relative" ref={ref}>
            <div className="absolute inset-0">
              <ImageTrail
                containerRef={ref}
                rotationRange={12}
                interval={80}
              >
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-lg"
                  >
                    {icon}
                  </div>
                ))}
              </ImageTrail>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
