
import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, CreditCard, Layers } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";

export const SeamlessSyncAnimation = () => {
  // Define documents being synchronized
  const syncItems = [
    {
      title: "Insurance Verification",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=300",
      delay: 0.2,
      position: { top: "20%", left: "30%" }
    },
    {
      title: "Clinical Documentation",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=300",
      delay: 0.4,
      position: { top: "60%", left: "70%" }
    }
  ];

  return (
    <div className="relative h-[400px] w-full">
      {/* Central database/EHR representation */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <Layers size={40} style={{ color: bravoColors.primary }} />
          <div className="mt-2 text-center text-sm font-semibold" style={{ color: bravoColors.primary }}>
            EHR System
          </div>
        </div>
      </motion.div>

      {/* Connecting lines with gradient tracing */}
      <div className="absolute inset-0 z-10">
        <GradientTracing
          width={400}
          height={400}
          path="M100,200 L300,200 M200,100 L200,300"
          baseColor={`${bravoColors.tertiary}30`}
          gradientColors={[bravoColors.secondary, bravoColors.primary, bravoColors.tertiary]}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Documents being synchronized */}
      {syncItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: item.delay
          }}
          style={item.position}
        >
          <motion.div 
            className="p-1 bg-white rounded-lg shadow-lg"
            animate={{
              y: [-5, 5, -5],
              boxShadow: [
                "0px 4px 10px rgba(0,0,0,0.1)",
                "0px 10px 20px rgba(0,0,0,0.2)",
                "0px 4px 10px rgba(0,0,0,0.1)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-60 overflow-hidden rounded-t-md bg-gray-100">
              <motion.img 
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 mb-1">
                <item.icon size={16} style={{ color: bravoColors.secondary }} />
                <h4 className="text-sm font-semibold" style={{ color: bravoColors.primary }}>{item.title}</h4>
              </div>
              
              {/* Sync animation */}
              <div className="flex items-center gap-1 mt-2">
                <div className="text-xs text-gray-500">Syncing</div>
                <motion.div
                  animate={{
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1]
                  }}
                  className="flex space-x-1"
                >
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-blue-500"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Data particles flowing to/from central system */}
          <motion.div
            className="absolute top-1/2 w-full z-0"
            style={{ height: '2px' }}
          >
            {[0, 1, 2].map(particle => (
              <motion.div
                key={particle}
                className="absolute w-2 h-2 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, ${bravoColors.tertiary}, ${bravoColors.secondary})`,
                  top: '-3px'
                }}
                animate={{
                  x: index === 0 ? ["0%", "100%"] : ["100%", "0%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: particle * 0.8
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
