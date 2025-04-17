
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Laptop, Database } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const DeployBravoAnimation = () => {
  // Define animation elements for each integration type
  const integrations = [
    {
      title: "SIP & Phone Systems",
      icon: Phone,
      image: "/lovable-uploads/48f947bc-5dec-4c72-98a8-2611907a839a.png",
      delay: 0
    },
    {
      title: "Patient Platforms",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=300",
      delay: 0.2
    },
    {
      title: "EHR & PMS",
      icon: Database,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300",
      delay: 0.4
    }
  ];

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      {/* Central hub representing BRAVO */}
      <motion.div
        className="absolute z-10 bg-white rounded-full p-5 shadow-lg"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0px 5px 15px rgba(0,0,0,0.1)",
            "0px 8px 25px rgba(0,0,0,0.2)",
            "0px 5px 15px rgba(0,0,0,0.1)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-center">
          <span className="text-xl font-bold" style={{ color: bravoColors.primary }}>BRAVO</span>
        </div>
      </motion.div>

      {/* Integration system cards */}
      <div className="relative w-full h-full">
        {integrations.map((item, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: `${Math.cos(index * (Math.PI * 2 / 3) + Math.PI/6) * 140}px`,
              y: `${Math.sin(index * (Math.PI * 2 / 3) + Math.PI/6) * 110}px`,
            }}
            transition={{ 
              delay: item.delay, 
              duration: 0.5 
            }}
            style={{
              top: '50%',
              left: '50%',
              width: '180px',
              height: '180px',
              transformOrigin: 'center'
            }}
          >
            <div className="h-24 w-full bg-gray-200 overflow-hidden">
              <motion.img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2">
                <item.icon size={18} style={{ color: bravoColors.secondary }} />
                <h4 className="text-sm font-semibold" style={{ color: bravoColors.primary }}>{item.title}</h4>
              </div>
              <p className="text-xs mt-1" style={{ color: bravoColors.text.secondary }}>
                Seamless integration
              </p>
            </div>
          </motion.div>
        ))}

        {/* Connection lines */}
        {integrations.map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute top-1/2 left-1/2 h-0.5 origin-left"
            style={{
              width: '140px',
              background: `linear-gradient(90deg, ${bravoColors.tertiary}, rgba(255,255,255,0.2))`,
              transform: `rotate(${index * (360 / 3) + 30}deg)`,
              zIndex: 0
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};
