
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Clock, Calendar, FileText, MessageSquare, Laptop, Smile, Home } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { shadowStyles } from "@/lib/shadow-utils";

type TimelineStep = {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const DayInLifeComparison = () => {
  const [activeView, setActiveView] = useState<'before' | 'after'>('before');
  const isMobile = useIsMobile();

  // Timeline for "Before" scenario
  const beforeTimeline: TimelineStep[] = [
    {
      time: "8:00 AM",
      title: "Start of day",
      description: "Rushing to review charts before first patient",
      icon: <Calendar className="h-6 w-6 text-blue-400" />
    },
    {
      time: "9:00 AM",
      title: "Patient visits",
      description: "Taking notes while trying to maintain eye contact",
      icon: <MessageSquare className="h-6 w-6 text-blue-400" />
    },
    {
      time: "1:00 PM",
      title: "Lunch break",
      description: "Catching up on documentation instead of eating",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      highlight: true
    },
    {
      time: "5:00 PM",
      title: "End of appointments",
      description: "Still have 3 hours of charting ahead",
      icon: <Laptop className="h-6 w-6 text-blue-400" />
    },
    {
      time: "8:30 PM",
      title: "Finally home",
      description: "Exhausted, with little family time left",
      icon: <Home className="h-6 w-6 text-blue-400" />,
      highlight: true
    }
  ];

  // Timeline for "After" scenario
  const afterTimeline: TimelineStep[] = [
    {
      time: "8:00 AM",
      title: "Start of day",
      description: "Pre-populated charts ready for review",
      icon: <Calendar className="h-6 w-6 text-green-400" />
    },
    {
      time: "9:00 AM",
      title: "Patient visits",
      description: "Focused on patient, notes captured by AI",
      icon: <MessageSquare className="h-6 w-6 text-green-400" />
    },
    {
      time: "1:00 PM",
      title: "Lunch break",
      description: "Actual break to recharge",
      icon: <Smile className="h-6 w-6 text-green-400" />,
      highlight: true
    },
    {
      time: "5:00 PM",
      title: "End of appointments",
      description: "Charts completed in real-time",
      icon: <FileText className="h-6 w-6 text-green-400" />
    },
    {
      time: "5:30 PM",
      title: "Heading home",
      description: "Work stays at work, family time ahead",
      icon: <Home className="h-6 w-6 text-green-400" />,
      highlight: true
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
            A Day in the Life of a Clinician
          </h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            See how our AI medical scribe transforms the daily workflow and work-life balance for healthcare providers.
          </p>
        </motion.div>

        {/* Toggle between Before/After - Always visible regardless of viewport */}
        <div className="flex justify-center mb-8">
          <div className={cn(
            "p-1 rounded-xl bg-gray-200 flex w-full max-w-xs",
            shadowStyles.subtle
          )}>
            <button
              className={cn(
                "relative z-10 flex-1 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm",
                activeView === 'before' 
                  ? "bg-white text-blue-900" 
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setActiveView('before')}
            >
              Without S10.AI
              {activeView === 'before' && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-lg z-0"
                  layoutId="bubble"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
            <button
              className={cn(
                "relative z-10 flex-1 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm",
                activeView === 'after' 
                  ? "bg-white text-blue-900" 
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setActiveView('after')}
            >
              With S10.AI
              {activeView === 'after' && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-lg z-0"
                  layoutId="bubble"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mt-8">
          <motion.div
            className={cn(
              "grid",
              isMobile ? "grid-cols-1" : "grid-cols-2 gap-16"
            )}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Before Column - Always visible on desktop, conditionally on mobile */}
            {(!isMobile || activeView === 'before') && (
              <motion.div 
                className="relative flex flex-col space-y-8"
                variants={itemVariants}
                key="before-timeline"
                initial={isMobile ? "hidden" : undefined}
                animate={isMobile ? "show" : undefined}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Without S10.AI</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    <p className="text-red-500 font-medium">12+ hour workday</p>
                  </div>
                </div>
                
                {/* Timeline items */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
                  
                  {/* Steps */}
                  {beforeTimeline.map((step, index) => (
                    <motion.div 
                      key={`before-${index}`}
                      className={cn(
                        "relative flex items-start mb-8 last:mb-0",
                        step.highlight ? "z-10" : ""
                      )}
                      variants={itemVariants}
                    >
                      <div className={cn(
                        "min-w-16 h-16 rounded-full flex items-center justify-center z-10",
                        step.highlight ? "bg-red-100" : "bg-white",
                        shadowStyles.subtle
                      )}>
                        {step.icon}
                      </div>
                      <div className={cn(
                        "ml-6 p-4 rounded-lg flex-1",
                        step.highlight ? "bg-red-50 border-l-4 border-red-400" : "bg-white",
                        shadowStyles.card
                      )}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-500">{step.time}</span>
                          {step.highlight && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Pain Point</span>
                          )}
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* After Column - Always visible on desktop, conditionally on mobile */}
            {(!isMobile || activeView === 'after') && (
              <motion.div 
                className="relative flex flex-col space-y-8"
                variants={itemVariants}
                key="after-timeline"
                initial={isMobile ? "hidden" : undefined}
                animate={isMobile ? "show" : undefined}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">With S10.AI</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    <p className="text-green-500 font-medium">8-hour workday</p>
                  </div>
                </div>
                
                {/* Timeline items */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
                  
                  {/* Steps */}
                  {afterTimeline.map((step, index) => (
                    <motion.div 
                      key={`after-${index}`}
                      className={cn(
                        "relative flex items-start mb-8 last:mb-0",
                        step.highlight ? "z-10" : ""
                      )}
                      variants={itemVariants}
                    >
                      <div className={cn(
                        "min-w-16 h-16 rounded-full flex items-center justify-center z-10",
                        step.highlight ? "bg-green-100" : "bg-white",
                        shadowStyles.subtle
                      )}>
                        {step.icon}
                      </div>
                      <div className={cn(
                        "ml-6 p-4 rounded-lg flex-1",
                        step.highlight ? "bg-green-50 border-l-4 border-green-400" : "bg-white",
                        shadowStyles.card
                      )}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-500">{step.time}</span>
                          {step.highlight && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Benefit</span>
                          )}
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Key Results - with color-coded result boxes that change based on active view */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={cn(
            "p-6 rounded-lg text-center",
            activeView === 'before' ? "bg-white border-2 border-red-300" : "bg-white",
            shadowStyles.card
          )}>
            <div className={cn(
              "text-3xl md:text-4xl font-bold mb-2",
              activeView === 'before' ? "text-red-500" : "text-green-500"
            )}>
              {activeView === 'before' ? '-2 hrs' : '+2 hrs'}
            </div>
            <p className="text-gray-700">
              {activeView === 'before' ? 'Less patient time per day' : 'Additional patient time per day'}
            </p>
          </div>
          <div className={cn(
            "p-6 rounded-lg text-center",
            activeView === 'before' ? "bg-white border-2 border-red-300" : "bg-white",
            shadowStyles.card
          )}>
            <div className={cn(
              "text-3xl md:text-4xl font-bold mb-2",
              activeView === 'before' ? "text-red-500" : "text-green-500"
            )}>
              {activeView === 'before' ? '40%' : '98%'}
            </div>
            <p className="text-gray-700">
              {activeView === 'before' ? 'Documentation completed during office hours' : 'Documentation completed during office hours'}
            </p>
          </div>
          <div className={cn(
            "p-6 rounded-lg text-center",
            activeView === 'before' ? "bg-white border-2 border-red-300" : "bg-white",
            shadowStyles.card
          )}>
            <div className={cn(
              "text-3xl md:text-4xl font-bold mb-2",
              activeView === 'before' ? "text-red-500" : "text-green-500"
            )}>
              {activeView === 'before' ? '-3 hrs' : '3 hrs'}
            </div>
            <p className="text-gray-700">
              {activeView === 'before' ? 'Work-life balance reduced daily' : 'Work-life balance improved daily'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DayInLifeComparison;
