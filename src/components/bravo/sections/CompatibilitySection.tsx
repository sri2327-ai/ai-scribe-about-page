
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { ImageTrail } from "@/components/ui/image-trail";
import { Phone, MessageSquare, Calendar, Database } from 'lucide-react';

export const CompatibilitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const icons = [
    <Phone key="phone" size={32} className="text-blue-500" />,
    <MessageSquare key="message" size={32} className="text-blue-500" />,
    <Calendar key="calendar" size={32} className="text-blue-500" />,
    <Database key="database" size={32} className="text-blue-500" />,
  ];

  return (
    <div className="w-full py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Compatible with Your SIP, Patient Platform & PMS
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
