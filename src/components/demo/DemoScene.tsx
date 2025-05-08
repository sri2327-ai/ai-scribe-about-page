
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './S10Demo';
import { useIsMobile } from '@/hooks/use-mobile';
import { MessageCircle, Calendar, FileText, BellRing, PhoneCall, CheckCircle, Clock, User } from 'lucide-react';

interface DemoSceneProps {
  currentStage: number;
  scrollProgress: any;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  const isMobile = useIsMobile();
  const [cursorPosition, setCursorPosition] = useState({ x: 20, y: 20 });
  const [subStep, setSubStep] = useState(0);
  
  // Animation for the patient engagement illustration
  useEffect(() => {
    if (currentStage === 0) {
      const interval = setInterval(() => {
        setSubStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentStage]);
  
  // Move cursor for interactive demonstration
  useEffect(() => {
    if (currentStage === 0) {
      const positions = [
        { x: 80, y: 120 }, // AI chat position
        { x: 280, y: 180 }, // Calendar position
        { x: 160, y: 240 }, // Symptoms form position
        { x: 220, y: 100 }  // Notification position
      ];
      
      setCursorPosition(positions[subStep]);
    }
  }, [currentStage, subStep]);

  return (
    <div className="w-full h-full relative bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),rgba(255,255,255,0))]" />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.02),rgba(255,255,255,0)_70%)]"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Dynamic grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/4"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent top-2/4"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-3/4"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent left-1/4"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent left-2/4"
          animate={{ y: ["100%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent left-3/4"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Central Display Area */}
      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        {currentStage === 0 && (
          <FigmaPatientEngagementIllustration subStep={subStep} cursorPosition={cursorPosition} />
        )}
        
        {/* Show other illustrations for other stages */}
        {currentStage !== 0 && stages.map((stage, index) => (
          index === currentStage && (
            <motion.div
              key={stage.id}
              className="w-full max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ 
                duration: 0.7, 
                ease: "easeOut",
              }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 overflow-hidden flex items-center justify-center shadow-lg">
                <img 
                  src={`/demo/${stage.id}.svg`} 
                  alt={stage.title} 
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.currentTarget.src = "/demo/placeholder.svg";
                  }}
                />
                
                {/* Animated highlight ring */}
                <motion.div
                  className="absolute inset-0 border-2 rounded-xl border-blue-400/0"
                  animate={{
                    borderColor: ["rgba(59,130,246,0)", "rgba(59,130,246,0.3)", "rgba(59,130,246,0)"],
                    boxShadow: [
                      "0 0 0px rgba(59,130,246,0)",
                      "0 0 15px rgba(59,130,246,0.3)",
                      "0 0 0px rgba(59,130,246,0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          )
        ))}
      </div>
      
      {/* Animated UI elements for other stages */}
      {currentStage === 1 && (
        <motion.div 
          className="absolute right-4 bottom-4 md:right-1/4 md:bottom-1/4 bg-white p-4 rounded-lg border border-blue-200 text-sm text-gray-800 max-w-xs z-20 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span>Voice Recognition Active</span>
            <span className="flex items-center">
              <motion.span 
                className="h-2 w-2 rounded-full bg-green-500 mr-1"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}  
              />
              Recording
            </span>
          </div>
          <div className="font-mono text-xs text-blue-600 mb-2">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              "Patient reports headache that started three days ago..."
            </motion.span>
          </div>
          <div className="bg-blue-50 p-2 rounded border border-blue-100">
            <p className="text-xs text-blue-700">Generating SOAP Note...</p>
            <div className="h-1 w-full bg-blue-100 rounded-full mt-1 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} 
              />
            </div>
          </div>
        </motion.div>
      )}
      
      {currentStage === 2 && (
        <motion.div 
          className="absolute left-4 top-4 md:left-1/4 md:top-1/3 flex flex-col gap-2 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['Prescription', 'Lab Order', 'Referral', 'Visit Summary'].map((task, i) => (
            <motion.div 
              key={task}
              className="bg-white p-3 rounded-lg border border-blue-200 text-gray-800 flex items-center gap-3 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                transition: { delay: 0.3 + (i * 0.15) } 
              }}
            >
              <motion.span 
                className={`h-4 w-4 rounded-full ${i < 2 ? 'bg-green-500' : 'bg-blue-500'} flex-shrink-0`}
                animate={i >= 2 ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                } : {}}
                transition={i >= 2 ? {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                } : {}}
              />
              <span>{task} {i < 2 ? 'Completed' : 'In Progress'}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {currentStage === 4 && (
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-6 w-full max-w-4xl px-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { metric: '95%', label: 'Reduced Documentation Time' },
            { metric: '40%', label: 'Increased Patient Throughput' },
            { metric: '2x', label: 'ROI Within Months' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="bg-white p-6 rounded-lg border border-blue-200 text-center flex-1 shadow-md"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.2), duration: 0.5 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (i * 0.2), duration: 0.6, type: "spring" }}
              >
                {stat.metric}
              </motion.div>
              <div className="text-gray-700 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {/* Interactive cursor for the patient engagement illustration */}
      {currentStage === 0 && (
        <motion.div 
          className="absolute z-50 pointer-events-none"
          animate={{ x: cursorPosition.x, y: cursorPosition.y }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12.5L10.5 18L19 6.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      )}
    </div>
  );
};

// Figma-style flat UI illustration for patient engagement
const FigmaPatientEngagementIllustration = ({ subStep, cursorPosition }) => {
  return (
    <motion.div 
      className="w-full max-w-3xl aspect-video bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* App UI Header */}
      <div className="h-12 bg-blue-600 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <span className="text-white text-sm font-medium">Patient Portal</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex h-[calc(100%-3rem)] bg-gray-50">
        {/* Sidebar Navigation */}
        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 0 ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}>
            <MessageCircle size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 1 ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}>
            <Calendar size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 2 ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}>
            <FileText size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 3 ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}>
            <BellRing size={20} />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 p-4 relative">
          {/* Step 1: AI Chats & Calls */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 0 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">AI Assistant</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <PhoneCall size={16} className="text-blue-600" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <MessageCircle size={16} className="text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm text-gray-700">Hello! How can I help you today?</p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                  <p className="text-sm text-gray-700">I need to schedule an appointment with Dr. Smith</p>
                  <p className="text-xs text-gray-500 mt-1">10:31 AM</p>
                </div>
                
                <motion.div 
                  className="bg-blue-50 p-3 rounded-lg rounded-tl-none max-w-[80%]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-700">I can help you with that. What day and time works best for you?</p>
                  <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
                </motion.div>
                
                <div className="flex items-center">
                  <motion.div 
                    className="h-8 bg-white border border-gray-300 rounded-full flex-1 mx-2"
                    animate={{ boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 0 4px rgba(59, 130, 246, 0.1)", "0 0 0 rgba(59, 130, 246, 0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="h-full px-4 flex items-center">
                      <span className="text-gray-400 text-sm">Type your message...</span>
                    </div>
                  </motion.div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 2: Book Appointments */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 1 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Schedule Appointment</h3>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-blue-100 rounded-md">
                    <span className="text-xs text-blue-700">May 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="h-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-500">{day}</span>
                  </div>
                ))}
                
                {[...Array(31)].map((_, i) => {
                  const isSelected = i === 14;
                  const isAvailable = [3, 8, 14, 17, 22, 25, 28].includes(i);
                  return (
                    <motion.div 
                      key={i} 
                      className={`h-10 rounded-lg flex items-center justify-center cursor-pointer ${
                        isSelected 
                          ? 'bg-blue-500 text-white' 
                          : isAvailable 
                            ? 'hover:bg-blue-50 border border-gray-200' 
                            : 'text-gray-300'
                      }`}
                      whileHover={isAvailable && !isSelected ? { scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' } : {}}
                    >
                      <span className="text-sm">{i + 1}</span>
                    </motion.div>
                  );
                })}
              </div>
              
              <h4 className="text-sm font-medium text-gray-700 mb-2">Available Times</h4>
              <div className="grid grid-cols-3 gap-2">
                {['9:00 AM', '10:30 AM', '1:15 PM', '2:45 PM', '4:00 PM'].map((time, i) => (
                  <motion.div 
                    key={i}
                    className={`px-4 py-2 rounded-lg border ${i === 1 ? 'bg-blue-50 border-blue-300' : 'border-gray-200'} flex items-center justify-center`}
                    whileHover={{ scale: 1.03 }}
                  >
                    <span className={`text-sm ${i === 1 ? 'text-blue-700 font-medium' : 'text-gray-700'}`}>{time}</span>
                    {i === 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="ml-2"
                      >
                        <CheckCircle size={14} className="text-blue-500" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="absolute bottom-8 right-8">
                <motion.button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">Book Appointment</span>
                  <CheckCircle size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Step 3: Describe Symptoms */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Pre-Visit Questionnaire</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What symptoms are you experiencing?</label>
                  <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
                    <motion.p 
                      className="text-sm text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Headache and mild fever for the past two days. Also experiencing some congestion.
                    </motion.p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">When did your symptoms begin?</label>
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 h-10">
                    <span className="text-sm text-gray-800">2 days ago</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rate your pain level (1-10)</label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <motion.div 
                        key={num}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                          num === 4 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-xs font-medium">{num}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Have you taken any medication?</label>
                  <div className="flex items-center space-x-2">
                    <div className="border border-blue-300 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
                      <span className="mr-1">Ibuprofen</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="border border-gray-300 px-3 h-8 rounded-full flex items-center">
                      <span className="text-xs text-gray-400">Add another...</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <motion.button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">Continue</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Step 4: Send Reminders */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Notifications</h3>
                <div className="flex items-center">
                  <motion.div 
                    className="w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <span className="text-xs">3</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-3">
                <motion.div 
                  className="border border-blue-200 bg-blue-50 rounded-lg p-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        <Calendar size={16} className="text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-gray-800">Appointment Reminder</h4>
                        <p className="text-xs text-gray-600 mt-1">Your appointment with Dr. Smith is tomorrow at 10:30 AM.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-xs text-gray-500">9:01 AM</div>
                    </div>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <motion.button 
                      className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Confirm
                    </motion.button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded-md">
                      Reschedule
                    </button>
                  </div>
                </motion.div>
                
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                        <FileText size={16} className="text-amber-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-gray-800">Forms Required</h4>
                        <p className="text-xs text-gray-600 mt-1">Please complete your health history form before your visit.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-xs text-gray-500">Yesterday</div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Clock size={16} className="text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-gray-800">Medication Reminder</h4>
                        <p className="text-xs text-gray-600 mt-1">Time to take your prescribed medication.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-xs text-gray-500">2 days ago</div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute bottom-8 right-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-full shadow-md flex items-center">
                    <span className="mr-1">All notifications sent</span>
                    <CheckCircle size={14} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
