
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, FileCheck, Clock, Check, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { bravoColors } from '@/theme/bravo-theme';

interface ComparisonAnimationProps {
  savings: {
    monthly: number;
    yearly: number;
    multiplier: number;
  };
}

export const ComparisonAnimation: React.FC<ComparisonAnimationProps> = ({ savings }) => {
  const tasks = [
    { icon: Phone, label: 'Phone Calls' },
    { icon: Calendar, label: 'Scheduling' },
    { icon: FileCheck, label: 'Intake Forms' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="overflow-hidden backdrop-blur-xl bg-white/80 border-none">
          <CardContent className="p-6">
            <div className="text-lg font-semibold mb-4" style={{ color: bravoColors.text.secondary }}>
              Traditional Staffing
            </div>
            
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -right-2 -top-2"
              >
                <Clock className="w-6 h-6 text-red-500" />
              </motion.div>
              
              <div className="space-y-4">
                {tasks.map((task, i) => (
                  <motion.div
                    key={task.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                  >
                    <task.icon className="w-5 h-5 text-gray-500" />
                    <span className="flex-1 text-sm">{task.label}</span>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <X className="w-5 h-5 text-red-500" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                <motion.div
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Experiencing delays and burnout
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden backdrop-blur-xl bg-white/80 border-none">
          <CardContent className="p-6">
            <div className="text-lg font-semibold mb-4" style={{ color: bravoColors.primary }}>
              BRAVO AI Assistant
            </div>
            
            <div className="relative">
              <motion.div
                className="absolute -right-2 -top-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </motion.div>
              
              <div className="space-y-4">
                {tasks.map((task, i) => (
                  <motion.div
                    key={task.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50"
                  >
                    <task.icon className="w-5 h-5 text-teal-500" />
                    <span className="flex-1 text-sm">{task.label}</span>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <Check className="w-5 h-5 text-green-500" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-600 text-sm">
                <motion.div
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Instant response, 24/7 availability
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-sm text-gray-500 mb-2">Projected Annual Savings</div>
        <div className="text-3xl font-bold text-green-500">
          ${savings.yearly.toLocaleString()}
        </div>
      </motion.div>
    </div>
  );
};
