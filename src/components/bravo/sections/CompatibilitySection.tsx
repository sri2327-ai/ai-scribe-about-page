import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FileCheck, Phone, BarChart2, CalendarDays, Users, MessageCircle, Database, ArrowRightLeft } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      when: "beforeChildren", 
      staggerChildren: 0.3,
      duration: 0.5
    }
  }
};

const flowVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 1.5,
      ease: "easeInOut",
      delay: 1,
      repeat: Infinity,
      repeatType: "loop" as const,
      repeatDelay: 2
    }
  }
};

const featureVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export const CompatibilitySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev < 5 ? prev + 1 : 0));
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [activeStep]);

  const ehrFeatures = [
    {
      icon: <FileCheck size={20} color="#ffffff" />,
      label: "Patient Records"
    },
    {
      icon: <BarChart2 size={20} color="#ffffff" />,
      label: "Analytics"
    },
    {
      icon: <CalendarDays size={20} color="#ffffff" />,
      label: "Scheduling"
    }
  ];
  
  const voipFeatures = [
    {
      icon: <Phone size={20} color="#ffffff" />,
      label: "Call Center"
    },
    {
      icon: <Users size={20} color="#ffffff" />,
      label: "Contacts"
    },
    {
      icon: <MessageCircle size={20} color="#ffffff" />,
      label: "Messaging"
    }
  ];
  
  const integrationFeatures = [
    {
      icon: <ArrowRightLeft size={20} color="#ffffff" />,
      label: "Real-time Sync",
      gradient: ["#0EA5E9", "#38BDF8", "#7DD3FC"]
    },
    {
      icon: <MessageCircle size={20} color="#ffffff" />,
      label: "Unified Communication",
      gradient: ["#D946EF", "#E879F9", "#F0ABFC"]
    },
    {
      icon: <Database size={20} color="#ffffff" />,
      label: "Data Accessibility",
      gradient: ["#10B981", "#34D399", "#6EE7B7"]
    }
  ];

  return (
    <div 
      className="relative w-full py-28 overflow-hidden bg-gradient-to-r from-[#143151] to-[#387E89]" 
    >
      <div className="absolute inset-0 z-0">
        <AnimatedGradientBackground 
          gradientColors={["#143151", "#387E89", "#143151"]} 
          gradientStops={[0, 50, 100]}
          startingGap={250}
          animationSpeed={0.05}
          breathingRange={30}
        />
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-20">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold text-white shadow-text tracking-wide leading-relaxed">
            BRAVO seamlessly integrates with your PMS/EHR System and VOIP infrastructure.
          </p>
        </motion.div>

        <motion.div 
          className="relative flex items-center justify-center min-h-[500px] rounded-xl h-full p-6 backdrop-blur-2xl bg-white/10 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="relative z-20 w-full">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-20 relative"
              animate={{ 
                opacity: activeStep < 3 ? 1 : 0.5,
                scale: activeStep < 3 ? 1 : 0.95,
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className={`relative ${activeStep >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-80'}`}
                animate={{ 
                  x: activeStep >= 2 ? 0 : -16,
                  opacity: activeStep >= 2 ? 1 : 0.8
                }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
              >
                <div className="w-64 h-64 rounded-xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg overflow-hidden hover:bg-white/25 transition-all duration-300">
                  <div className="h-8 bg-gradient-to-r from-[#143151]/80 to-[#387E89]/80 flex items-center px-3">
                    <div className="mr-1.5 w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="mr-1.5 w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="ml-auto text-xs font-medium text-white">PMS/EHR System</div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {ehrFeatures.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center p-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all duration-300"
                        variants={featureVariants}
                        custom={idx}
                        transition={{ delay: idx * 0.2 }}
                      >
                        <div className="mr-3 w-8 h-8 rounded-md bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <span className="text-sm font-medium text-white font-sans">
                          {feature.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute z-30"
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  visible: { opacity: 1, scale: 1 }
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: activeStep >= 2 ? 1 : 0
                }}
                transition={{
                  scale: {
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse"
                  },
                  opacity: { duration: 0.8 }
                }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full backdrop-blur-xl bg-white/5 flex items-center justify-center shadow-lg border-2 border-white/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 z-0" />
                    <GlowBorderEffect glow variant="white" />
                    <span className="text-xl font-bold z-10 relative text-white">BRAVO</span>
                  </div>
                  
                  {activeStep >= 3 && (
                    <>
                      <motion.div 
                        className="absolute left-[-100px] top-[10px] w-[100px] h-[1px]"
                        variants={flowVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <GradientTracing
                          width={100}
                          height={1}
                          path={`M0,0 L100,0`}
                          gradientColors={["#0EA5E9", "#38BDF8", "#0EA5E9"]}
                          animationDuration={2}
                          baseColor="#ffffff"
                          strokeWidth={3}
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute right-[-100px] top-[10px] w-[100px] h-[1px]"
                        variants={flowVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <GradientTracing
                          width={100}
                          height={1}
                          path={`M0,0 L100,0`}
                          gradientColors={["#D946EF", "#E879F9", "#D946EF"]}
                          animationDuration={2}
                          baseColor="#ffffff"
                          strokeWidth={3}
                        />
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                className={`relative ${activeStep >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-80'}`}
                animate={{ 
                  x: activeStep >= 2 ? 0 : 16,
                  opacity: activeStep >= 2 ? 1 : 0.8
                }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
              >
                <div className="w-64 h-64 rounded-xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg overflow-hidden hover:bg-white/25 transition-all duration-300">
                  <div className="h-8 bg-gradient-to-r from-[#143151]/80 to-[#387E89]/80 flex items-center px-3">
                    <div className="mr-1.5 w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="mr-1.5 w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="ml-auto text-xs font-medium text-white">VOIP System</div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {voipFeatures.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center p-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all duration-300"
                        variants={featureVariants}
                        custom={idx}
                        transition={{ delay: idx * 0.2 }}
                      >
                        <div className="mr-3 w-8 h-8 rounded-md bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <span className="text-sm font-medium text-white font-sans">
                          {feature.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
              animate={{ 
                opacity: activeStep >= 4 ? 1 : 0,
                pointerEvents: activeStep >= 4 ? 'auto' : 'none'
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-[90%] max-w-xl h-80 rounded-xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="h-10 bg-gradient-to-r from-[#143151]/80 to-[#387E89]/80 flex items-center px-4">
                  <div className="mr-1.5 w-2.5 h-2.5 rounded-full bg-white/70"></div>
                  <div className="mr-1.5 w-2.5 h-2.5 rounded-full bg-white/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/70"></div>
                  <div className="mx-auto flex items-center gap-2">
                    <span className="text-sm font-medium text-white">Integrated Dashboard</span>
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center border border-white/30">
                      <span className="text-[8px] font-bold text-white">B</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 backdrop-blur-md">
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {integrationFeatures.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex flex-col items-center"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.3 + idx * 0.2 }
                          }
                        }}
                        animate={activeStep >= 4 ? "visible" : "hidden"}
                      >
                        <div className="mb-2 w-12 h-12 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-r from-[#143151] to-[#387E89] border border-white/30" 
                        >
                          {feature.icon}
                        </div>
                        <span className="text-sm font-medium text-white">{feature.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="h-6 w-24 rounded-md bg-white/20 animate-pulse backdrop-blur-sm border border-white/20"></div>
                    <div className="h-6 w-32 rounded-md bg-white/20 animate-pulse backdrop-blur-sm border border-white/20"></div>
                    <div className="h-6 w-20 rounded-md bg-white/20 animate-pulse backdrop-blur-sm border border-white/20"></div>
                    <div className="h-6 w-28 rounded-md bg-white/20 animate-pulse backdrop-blur-sm border border-white/20"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
