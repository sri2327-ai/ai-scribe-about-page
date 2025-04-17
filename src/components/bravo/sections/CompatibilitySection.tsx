
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
    <div className="w-full min-h-[500px] bg-white relative overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
        {/* Static visible icons for visual hint */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-2">
            <Phone size={24} className="text-[#1EAEDB]" />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-2">
            <Calendar size={24} className="text-[#1EAEDB]" />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-2">
            <Database size={24} className="text-[#1EAEDB]" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10 max-w-2xl"
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
