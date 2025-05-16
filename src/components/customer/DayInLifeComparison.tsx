
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Clock, Calendar, FileText, MessageSquare, Laptop, Smile, Home, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { shadowStyles } from "@/lib/shadow-utils";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

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
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Add a subtle background pattern for better visibility */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto relative">
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

        {/* Desktop view: Visual comparison header with enhanced visibility */}
        {!isMobile && (
          <motion.div 
            className="hidden md:block mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white p-4 shadow-lg border-2 border-gray-200">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="text-center p-6 border-r-4 border-red-300 bg-red-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-600">WITHOUT S10.AI</h3>
                  <p className="text-gray-700 mt-1 font-medium">Longer days, more stress</p>
                </div>
                <div className="text-center p-6 border-l-4 border-green-300 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600">WITH S10.AI</h3>
                  <p className="text-gray-700 mt-1 font-medium">Better balance, improved efficiency</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Toggle between Before/After - Only shown on mobile */}
        <div className="flex flex-col items-center justify-center mb-8 md:hidden">
          <div className="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-xl w-full max-w-xs shadow-md">
            <span className={`font-medium ${activeView === 'before' ? 'text-blue-900' : 'text-gray-500'}`}>Without S10.AI</span>
            <Switch 
              checked={activeView === 'after'}
              onCheckedChange={(checked) => setActiveView(checked ? 'after' : 'before')}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`font-medium ${activeView === 'after' ? 'text-blue-900' : 'text-gray-500'}`}>With S10.AI</span>
          </div>
        </div>

        {/* Timeline Visualization - Enhanced for better desktop visibility */}
        <div className="relative mt-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Before Column - Enhanced visibility on desktop */}
            {(!isMobile || activeView === 'before') && (
              <motion.div 
                className="relative flex flex-col space-y-8 md:border-r md:border-gray-300 md:pr-8 md:bg-white/70 md:p-6 md:rounded-lg md:shadow-lg"
                variants={itemVariants}
                key="before-timeline"
                initial={isMobile ? "hidden" : undefined}
                animate={isMobile ? "show" : undefined}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 bg-red-100 py-2 px-4 rounded-full inline-block">Without S10.AI</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    <p className="text-red-500 font-medium">12+ hour workday</p>
                  </div>
                </div>
                
                {/* Timeline items */}
                <div className="relative">
                  {/* Vertical line - Made more visible */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-red-300" />
                  
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
                        "border-2 border-red-200", // Added border for better visibility
                        shadowStyles.subtle
                      )}>
                        {step.icon}
                      </div>
                      <div className={cn(
                        "ml-6 p-4 rounded-lg flex-1",
                        step.highlight ? "bg-red-50 border-l-4 border-red-400" : "bg-white",
                        "border border-red-100", // Added border for better visibility
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
            
            {/* Desktop Comparison Arrow - Enhanced for better visibility */}
            {!isMobile && (
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white rounded-full p-4 shadow-xl border-2 border-blue-300 pulse-animation">
                  <ArrowRight className="h-10 w-10 text-blue-600" />
                </div>
              </div>
            )}
            
            {/* After Column - Enhanced visibility on desktop */}
            {(!isMobile || activeView === 'after') && (
              <motion.div 
                className="relative flex flex-col space-y-8 md:pl-8 md:bg-white/70 md:p-6 md:rounded-lg md:shadow-lg"
                variants={itemVariants}
                key="after-timeline"
                initial={isMobile ? "hidden" : undefined}
                animate={isMobile ? "show" : undefined}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 bg-green-100 py-2 px-4 rounded-full inline-block">With S10.AI</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    <p className="text-green-500 font-medium">8-hour workday</p>
                  </div>
                </div>
                
                {/* Timeline items */}
                <div className="relative">
                  {/* Vertical line - Made more visible */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-300" />
                  
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
                        "border-2 border-green-200", // Added border for better visibility
                        shadowStyles.subtle
                      )}>
                        {step.icon}
                      </div>
                      <div className={cn(
                        "ml-6 p-4 rounded-lg flex-1",
                        step.highlight ? "bg-green-50 border-l-4 border-green-400" : "bg-white",
                        "border border-green-100", // Added border for better visibility
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

        {/* Key Results - Enhanced for better desktop visibility */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* First stat - Enhanced contrast */}
          <div className={cn(
            "p-6 rounded-lg text-center",
            isMobile 
              ? (activeView === 'before' 
                  ? "bg-white border-2 border-red-300" 
                  : "bg-white border-2 border-green-300")
              : "bg-gradient-to-r from-red-50 via-white to-green-50 border-2 border-gray-300 shadow-lg",
          )}>
            <div className="flex md:flex-row flex-col justify-center md:space-x-6">
              {/* Before stat */}
              {(!isMobile || activeView === 'before') && (
                <div className="text-center md:border-r-2 md:pr-6 md:border-gray-300 mb-4 md:mb-0 md:bg-red-50 md:p-3 md:rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-red-500">
                    -2 hrs
                  </div>
                  <p className="text-gray-700 text-sm font-medium">
                    Less patient time per day
                  </p>
                </div>
              )}

              {/* After stat */}
              {(!isMobile || activeView === 'after') && (
                <div className="text-center md:pl-0 md:bg-green-50 md:p-3 md:rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-green-500">
                    +2 hrs
                  </div>
                  <p className="text-gray-700 text-sm font-medium">
                    Additional patient time per day
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Second stat - Enhanced contrast */}
          <div className={cn(
            "p-6 rounded-lg text-center",
            isMobile 
              ? (activeView === 'before' 
                  ? "bg-white border-2 border-red-300" 
                  : "bg-white border-2 border-green-300")
              : "bg-gradient-to-r from-red-50 via-white to-green-50 border-2 border-gray-300 shadow-lg",
          )}>
            <div className="flex md:flex-row flex-col justify-center md:space-x-6">
              {/* Before stat */}
              {(!isMobile || activeView === 'before') && (
                <div className="text-center md:border-r-2 md:pr-6 md:border-gray-300 mb-4 md:mb-0 md:bg-red-50 md:p-3 md:rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-red-500">
                    40%
                  </div>
                  <p className="text-gray-700 text-sm font-medium">
                    Documentation completed during office hours
                  </p>
                </div>
              )}

              {/* After stat */}
              {(!isMobile || activeView === 'after') && (
                <div className="text-center md:pl-0 md:bg-green-50 md:p-3 md:rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-green-500">
                    98%
                  </div>
                  <p className="text-gray-700 text-sm font-medium">
                    Documentation completed during office hours
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Third stat - Enhanced contrast */}
          <div className={cn(
            "p-6 rounded-lg text-center",
            isMobile 
              ? (activeView === 'before' 
                  ? "bg-white border-2 border-red-300" 
                  : "bg-white border-2 border-green-300")
              : "bg-gradient-to-r from-red-50 via-white to-green-50 border-2 border-gray-300 shadow-lg",
          )}>
            <div className="flex md:flex-row flex-col justify-center md:space-x-6">
              {/* Before stat */}
              {(!isMobile || activeView === 'before') && (
                <div className="text-center md:border-r-2 md:pr-6 md:border-gray-300 mb-4 md:mb-0 md:bg-red-50 md:p-3 md:rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-red-500">
                    -3 hrs
                  </div>
                  <p className="text-gray-700 text-sm font-medium">
                    Work-life balance reduced daily
                  </p>
                </div>
              )}

              {/* After stat */}
              {(!isMobile || activeView === 'after') && (
                <div className="text-center md:pl-0 md:bg-green-50 md:p-3 md:rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-green-500">
                    3 hrs
                  </div>
                  <p className="text-gray-700 text-sm font-medium">
                    Work-life balance improved daily
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f1f5f9 1px, transparent 1px),
                           linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default DayInLifeComparison;
