
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, FileText, MessageSquare } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const FrontOfficeAnimation = () => {
  // Define tasks that BRAVO automates
  const tasks = [
    {
      title: "Appointment Scheduling",
      icon: Calendar,
      preview: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300",
      delay: 0
    },
    {
      title: "Refill Processing",
      icon: MessageSquare,
      preview: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300",
      delay: 0.2
    },
    {
      title: "Patient Intake",
      icon: ClipboardCheck,
      preview: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300",
      delay: 0.4
    },
    {
      title: "Patient Communication",
      icon: FileText,
      preview: "https://images.unsplash.com/photo-1516549655669-94e804cabf36?auto=format&fit=crop&q=80&w=300",
      delay: 0.6
    }
  ];

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Center AI system */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-4 shadow-lg"
        animate={{
          boxShadow: [
            "0px 5px 15px rgba(0,0,0,0.1)",
            "0px 10px 30px rgba(0,0,0,0.2)",
            "0px 5px 15px rgba(0,0,0,0.1)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-center">
          <span className="text-xl font-bold" style={{ color: bravoColors.primary }}>AI</span>
        </div>
      </motion.div>

      {/* Glowing orbital path */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
        style={{
          width: '320px',
          height: '320px',
          border: `1px dashed ${bravoColors.tertiary}50`
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Task cards in orbit */}
      {tasks.map((task, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-lg overflow-hidden shadow-lg"
          style={{
            width: '160px',
            height: '200px',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            zIndex: 10
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: Math.cos(index * (Math.PI / 2)) * 160 - 80,
            y: Math.sin(index * (Math.PI / 2)) * 160 - 100,
          }}
          transition={{
            delay: task.delay,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div className="h-28 overflow-hidden bg-gray-100">
            <motion.img 
              src={task.preview}
              alt={task.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2 mb-1">
              <task.icon size={16} style={{ color: bravoColors.secondary }} />
              <h4 className="text-sm font-semibold" style={{ color: bravoColors.primary }}>{task.title}</h4>
            </div>
            <motion.div 
              className="h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mt-2 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: task.delay + 0.5, repeat: Infinity, repeatDelay: 5 }}
            >
              <motion.div 
                className="h-full"
                style={{ background: `linear-gradient(90deg, ${bravoColors.tertiary}, ${bravoColors.secondary})` }}
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 2, delay: task.delay + 0.5, repeat: Infinity, repeatDelay: 5 }}
              />
            </motion.div>
            <p className="text-xs mt-2 text-gray-500">Processing...</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
