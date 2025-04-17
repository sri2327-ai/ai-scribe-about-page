
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, UserCheck, MessageSquare, Bot } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { ImageTrail } from "@/components/ui/image-trail";

export const FrontOfficeAnimation = () => {
  const documents = [
    { icon: Calendar, label: "Scheduling" },
    { icon: ClipboardCheck, label: "Intake" },
    { icon: UserCheck, label: "Registration" },
    { icon: MessageSquare, label: "Communication" },
  ];

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* AI Bot at center */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="p-8 bg-white rounded-full shadow-2xl">
          <Bot size={48} style={{ color: bravoColors.secondary }} />
        </div>
      </motion.div>

      {/* Orbital documents */}
      {documents.map((Doc, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: [0, 360],
            x: `${Math.cos(index * (Math.PI / 2)) * 150}px`,
            y: `${Math.sin(index * (Math.PI / 2)) * 150}px`,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="p-4 bg-white rounded-lg shadow-md">
            <Doc.icon size={24} style={{ color: bravoColors.tertiary }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
