import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { DemoStage } from './S10Demo';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  MessageCircle, 
  Calendar, 
  FileText, 
  BellRing, 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  User, 
  Database, 
  Shield, 
  ClipboardCheck, 
  ArrowRight,
  Settings, 
  CalendarDays, 
  ClipboardList, 
  Mic, 
  Stethoscope, 
  Server
} from 'lucide-react';

interface DemoSceneProps {
  currentStage: number;
  scrollProgress: any;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  console.log("DemoScene rendering with currentStage:", currentStage);
  
  const isMobile = useIsMobile();
  const [subStep, setSubStep] = useState(0);
  const [aiAction, setAiAction] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });
  const [userInteracting, setUserInteracting] = useState(false);
  const [targetedArea, setTargetedArea] = useState<string | null>(null);
  const [isProcessingCall, setIsProcessingCall] = useState(false);
  const [transcriptionActive, setTranscriptionActive] = useState(false);
  const [noteGeneration, setNoteGeneration] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Reset substep when stage changes
  useEffect(() => {
    setSubStep(0);
    setTranscriptionActive(false);
    setNoteGeneration(false);
    setTargetedArea(null);
  }, [currentStage]);

  // Animation for the Patient Engagement and AI Medical Scribe illustrations
  // Automatically advance steps without requiring user interaction
  useEffect(() => {
    console.log("DemoScene effect running with currentStage:", currentStage);
    
    // For Patient Engagement
    if (currentStage === 0) {
      const interval = setInterval(() => {
        setSubStep((prev) => (prev + 1) % 4);
        
        // Randomly simulate call processing
        if (Math.random() > 0.7) {
          setIsProcessingCall(true);
          setTimeout(() => setIsProcessingCall(false), 3000);
        }
      }, 3500);
      return () => clearInterval(interval);
    } 
    // For AI Medical Scribe
    else if (currentStage === 1) {
      const interval = setInterval(() => {
        setSubStep((prev) => {
          const nextStep = (prev + 1) % 5;
          
          // Auto-activate transcription and note generation at appropriate steps
          if (nextStep === 3) {
            setTranscriptionActive(true);
          } else if (nextStep === 4) {
            setNoteGeneration(true);
          }
          
          return nextStep;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentStage]);

  // Set AI actions based on the current step
  useEffect(() => {
    if (currentStage === 0) {
      const actions = [
        "AI Assistant Processing Messages",
        "AI Checking Calendar Availability",
        "AI Automating Patient Intake",
        "AI Sending Appointment Reminders"
      ];
      setAiAction(actions[subStep]);
    } else if (currentStage === 1) {
      const actions = [
        "AI Authenticating User",
        "AI Syncing Patient Schedule",
        "AI Loading Preferred Templates",
        "AI Transcribing Encounter",
        "AI Generating EHR Documentation"
      ];
      setAiAction(actions[subStep]);
    } else {
      setAiAction(null);
    }
  }, [currentStage, subStep]);

  // Handle simulated mouse movement - for visual effect only
  useEffect(() => {
    if (currentStage === 0 || currentStage === 1) {
      const interval = setInterval(() => {
        const areas = currentStage === 0 
          ? ["Chat", "Calendar", "Intake", "Reminders"] 
          : ["Login", "Patient", "Templates", "StartEncounter", "GenerateNotes"];
        
        // Target the area corresponding to the current substep
        const targetArea = areas[subStep >= areas.length ? 0 : subStep];
        setTargetedArea(targetArea);
        
        // Simulate mouse movement to the targeted area
        const newX = 300 + (Math.random() * 100);
        const newY = 200 + (Math.random() * 100);
        setMousePosition({ x: newX, y: newY });
        
        // Simulate clicks
        setUserInteracting(true);
        setTimeout(() => setUserInteracting(false), 300);
        
      }, 4000); // Move mouse every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [currentStage, subStep]);

  console.log("Current stage in DemoScene:", currentStage);

  // Choose the appropriate content to display based on currentStage
  const renderStageContent = () => {
    if (currentStage === 0) {
      return (
        <FigmaPatientEngagementIllustration 
          subStep={subStep} 
          cursorPosition={mousePosition}
          isProcessingCall={isProcessingCall} 
        />
      );
    } 
    else if (currentStage === 1) {
      return (
        <FigmaAIMedicalScribeIllustration
          subStep={subStep}
          transcriptionActive={transcriptionActive}
          noteGeneration={noteGeneration}
        />
      );
    }
    // For other stages, show SVG illustrations
    else {
      const stage = stages[currentStage];
      return (
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
                console.error(`Error loading image for stage: ${stage.id}`);
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
      );
    }
  };

  return (
    <div 
      className="w-full h-full relative bg-white"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),rgba(255,255,255,0))]" />
      
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
        {renderStageContent()}
      </div>
      
      {/* AI agent action label */}
      {(currentStage === 0 || currentStage === 1) && aiAction && (
        <motion.div 
          className="absolute left-8 top-16 md:left-12 md:top-24 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          key={aiAction} // Force re-render on action change
        >
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2">
              <div className="text-xs">AI</div>
            </div>
            <span>{aiAction}</span>
          </div>
          <motion.div 
            className="absolute -bottom-1 left-3 w-3 h-3 bg-blue-500 rotate-45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.div>
      )}
      
      {/* Call processing overlay */}
      {isProcessingCall && (
        <motion.div 
          className="absolute top-16 right-16 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-2">
              <PhoneCall className="h-3 w-3 text-white" />
            </div>
            <span>AI Answering Patient Call</span>
            <motion.div 
              className="ml-2 h-2 w-2 rounded-full bg-white"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>
        </motion.div>
      )}
      
      {/* Animated UI elements for other stages */}
      {currentStage === 1 && transcriptionActive && (
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
      
      {/* UI elements for Admin Tasks stage */}
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
      
      {/* UI elements for ROI stage */}
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
      
      {/* Simulated cursor with "You" label */}
      {(currentStage === 0 || currentStage === 1) && (
        <motion.div 
          className="absolute z-50 pointer-events-none"
          animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="relative">
            {/* Cursor pointer */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 3L19 12L12 14L9 21L5 3Z" 
                fill={userInteracting ? "#1E40AF" : "#3B82F6"} 
                stroke="white" 
                strokeWidth="1.5" 
              />
            </svg>
            
            {/* "You" label */}
            <motion.div 
              className="absolute top-6 left-0 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
              animate={{ scale: userInteracting ? 1.1 : 1 }}
              style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
            >
              You {targetedArea && `(${targetedArea})`}
            </motion.div>
            
            {/* Click indicator */}
            {userInteracting && (
              <motion.div
                className="absolute top-0 left-0"
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-5 h-5 rounded-full border-2 border-blue-500" />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Figma-style flat UI illustration for patient engagement
const FigmaPatientEngagementIllustration = ({ subStep, cursorPosition, isProcessingCall }) => {
  console.log("Rendering PatientEngagementIllustration with subStep:", subStep);
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
            <Database size={20} />
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
                  <div className={`w-8 h-8 rounded-full ${isProcessingCall ? 'bg-green-100' : 'bg-blue-100'} flex items-center justify-center`}>
                    <PhoneCall size={16} className={isProcessingCall ? 'text-green-600' : 'text-blue-600'} />
                    {isProcessingCall && (
                      <motion.div
                        className="absolute w-12 h-12 rounded-full border-2 border-green-300"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <MessageCircle size={16} className="text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    {isProcessingCall 
                      ? "Hello! I'm connecting you with our scheduling team. How can I help you today?" 
                      : "Hello! How can I help you today?"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                  <p className="text-sm text-gray-700">
                    {isProcessingCall 
                      ? "Hi, I need to speak with someone about scheduling an appointment" 
                      : "I need to schedule an appointment with Dr. Smith"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10:31 AM</p>
                </div>
                
                <motion.div 
                  className="bg-blue-50 p-3 rounded-lg rounded-tl-none max-w-[80%]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-700">
                    {isProcessingCall 
                      ? "I can help you with that. Would you prefer a morning or afternoon appointment?" 
                      : "I can help you with that. What day and time works best for you?"}
                  </p>
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
                {['9:00 AM', '10:30 AM', '1:15 PM', '2:45 PM', '4:00 PM', '5:30 PM'].map((time, i) => (
                  <div 
                    key={time} 
                    className={`p-2 border rounded-md text-center text-sm cursor-pointer ${
                      i === 1 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
                  Confirm Appointment
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Step 3: Patient Intake */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Patient Intake</h3>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-blue-100 rounded-md flex items-center">
                    <span className="text-xs text-blue-700">AI Assisted</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Reason for visit
                  </label>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-800">Annual physical examination and prescription refill</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Current symptoms
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['None', 'Headache', 'Cough', 'Fatigue', 'Sore throat'].map((symptom, i) => (
                      <div 
                        key={symptom}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {symptom}
                      </div>
                    ))}
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600 border border-blue-200 border-dashed flex items-center">
                      <span>+ Add</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Medications
                  </label>
                  <div className="space-y-2">
                    <div className="p-2 border border-gray-200 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-800">Lisinopril 10mg</p>
                        <p className="text-xs text-gray-500">1 tablet daily</p>
                      </div>
                      <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">Refill needed</span>
                    </div>
                    <div className="p-2 border border-gray-200 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-800">Atorvastatin 20mg</p>
                        <p className="text-xs text-gray-500">1 tablet at bedtime</p>
                      </div>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Allergies
                  </label>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                      Penicillin
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600 border border-blue-200 border-dashed flex items-center">
                      <span>+ Add</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 text-sm font-medium">
                    Submit Intake Form
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 4: Reminders */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Appointment Reminders</h3>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-blue-100 rounded-md">
                    <span className="text-xs text-blue-700">Upcoming</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">Dr. Smith - Annual Physical</h4>
                      <p className="text-sm text-gray-500">Tomorrow, 10:30 AM</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-full bg-white border border-gray-300">
                        <Calendar size={16} className="text-gray-500" />
                      </button>
                      <button className="p-1.5 rounded-full bg-white border border-gray-300">
                        <MessageCircle size={16} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <div className="px-3 py-1 rounded-full text-xs bg-white text-gray-600 border border-gray-200">
                      <span>Bring insurance card</span>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs bg-white text-gray-600 border border-gray-200">
                      <span>Fasting required</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">Lab Results Ready</h4>
                      <p className="text-sm text-gray-500">Cholesterol Panel</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-full bg-white border border-gray-300">
                        <FileText size={16} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-blue-600 border border-blue-200">
                      View Results
                    </button>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">Prescription Refill</h4>
                      <p className="text-sm text-gray-500">Lisinopril - Ready for pickup</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-full bg-white border border-gray-300">
                        <PhoneCall size={16} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <div className="px-3 py-1 rounded-full text-xs bg-white text-gray-600 border border-gray-200 flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>Available until 8PM</span>
                    </div>
                  </div>
                </motion.div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-gray-500">Notifications</span>
                  <div className="relative inline-block w-10 align-middle select-none">
                    <input type="checkbox" name="toggle" id="toggle" className="sr-only" defaultChecked />
                    <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Figma-style flat UI illustration for AI Medical Scribe
const FigmaAIMedicalScribeIllustration = ({ subStep, transcriptionActive, noteGeneration }) => {
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
            <Stethoscope size={14} className="text-white" />
          </div>
          <span className="text-white text-sm font-medium">S10.AI Medical Scribe</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Settings size={14} className="text-white" />
          </div>
        </div>
      </div>
      
      <div className="flex h-[calc(100%-3rem)] bg-gray-50">
        {/* Sidebar Navigation */}
        <div className="w-16 bg-blue-800 flex flex-col items-center py-4 space-y-6">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 0 ? 'bg-white text-blue-600' : 'text-blue-200'}`}>
            <Shield size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 1 ? 'bg-white text-blue-600' : 'text-blue-200'}`}>
            <CalendarDays size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 2 ? 'bg-white text-blue-600' : 'text-blue-200'}`}>
            <ClipboardList size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 3 ? 'bg-white text-blue-600' : 'text-blue-200'}`}>
            <Mic size={20} />
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subStep === 4 ? 'bg-white text-blue-600' : 'text-blue-200'}`}>
            <FileText size={20} />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 p-4 relative">
          {/* Step 1: Authentication */}
          <motion.div 
            className="absolute inset-0 p-4 flex flex-col justify-center items-center"
            animate={{ opacity: subStep === 0 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg w-full max-w-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: subStep === 0 ? 1 : 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Secure Authentication</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Username
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value="dr.smith@healthcare.org"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value="••••••••••••"
                    readOnly
                  />
                </div>
                
                <div className="pt-2">
                  <motion.button 
                    className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgb(37, 99, 235)" }}
                  >
                    <motion.div 
                      className="flex items-center"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span>Authenticating</span>
                      <motion.div 
                        className="ml-2 flex space-x-1"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </div>
                
                <div className="flex items-center justify-between text-sm text-blue-600 pt-2">
                  <span className="hover:underline cursor-pointer">Forgot Password?</span>
                  <span className="hover:underline cursor-pointer">Two-Factor Auth</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Shield size={14} className="mr-1" />
                  <span>HIPAA Compliant &amp; Secure</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Step 2: Patient Schedule */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 1 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Today's Patient Schedule</h3>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-blue-100 rounded-md">
                    <span className="text-xs text-blue-700">May 8, 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { time: "9:00 AM", name: "Sarah Johnson", reason: "Follow-up", status: "Completed" },
                  { time: "10:30 AM", name: "Michael Chen", reason: "Headache", status: "In Progress", highlight: true },
                  { time: "1:00 PM", name: "Emma Davis", reason: "Annual Physical", status: "Scheduled" },
                  { time: "2:15 PM", name: "Robert Wilson", reason: "Medication Review", status: "Scheduled" },
                  { time: "3:30 PM", name: "Olivia Martinez", reason: "Lab Results", status: "Scheduled" }
                ].map((appointment, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 rounded-lg ${
                      appointment.highlight 
                        ? 'border-2 border-blue-400 bg-blue-50' 
                        : 'border border-gray-200'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      boxShadow: appointment.highlight ? '0 0 0 2px rgba(96, 165, 250, 0.3)' : 'none'
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          appointment.status === 'Completed' ? 'bg-green-500' :
                          appointment.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <span className="font-medium text-gray-800">{appointment.time}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    
                    <div className="mt-2">
                      <p className="font-medium text-gray-800">{appointment.name}</p>
                      <p className="text-sm text-gray-500">{appointment.reason}</p>
                    </div>
                    
                    <div className="mt-2 flex justify-end space-x-2">
                      <button className="px-2 py-1 text-xs rounded bg-white border border-gray-300 text-gray-700">
                        EHR
                      </button>
                      <button className="px-2 py-1 text-xs rounded bg-white border border-gray-300 text-gray-700">
                        Notes
                      </button>
                      {appointment.highlight && (
                        <button className="px-2 py-1 text-xs rounded bg-blue-500 text-white">
                          Start
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Step 3: Templates */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Note Templates</h3>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                    + New Template
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 border-2 border-blue-400 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">SOAP Note - General</h4>
                      <p className="text-xs text-gray-500 mt-1">Default template for standard examinations</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Selected
                    </span>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="text-xs font-medium text-gray-700">S: Subjective</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="text-xs font-medium text-gray-700">O: Objective</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="text-xs font-medium text-gray-700">A: Assessment</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="text-xs font-medium text-gray-700">P: Plan</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">New Patient Intake</h4>
                      <p className="text-xs text-gray-500 mt-1">Comprehensive template for new patient visits</p>
                    </div>
                    <button className="text-xs px-2 py-0.5 rounded text-blue-600 hover:bg-blue-50">
                      Select
                    </button>
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">Follow-up Visit</h4>
                      <p className="text-xs text-gray-500 mt-1">Brief template for routine follow-ups</p>
                    </div>
                    <button className="text-xs px-2 py-0.5 rounded text-blue-600 hover:bg-blue-50">
                      Select
                    </button>
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">Specialist Referral</h4>
                      <p className="text-xs text-gray-500 mt-1">Template for creating referrals to specialists</p>
                    </div>
                    <button className="text-xs px-2 py-0.5 rounded text-blue-600 hover:bg-blue-50">
                      Select
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Configuration Options</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="auto-populate" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="auto-populate" className="ml-2 text-sm text-gray-700">Auto-populate from EHR</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="include-vitals" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="include-vitals" className="ml-2 text-sm text-gray-700">Include Vitals</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="include-meds" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="include-meds" className="ml-2 text-sm text-gray-700">Include Medications</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="include-allergies" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="include-allergies" className="ml-2 text-sm text-gray-700">Include Allergies</label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 4: Encounter Recording */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm relative flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium text-gray-800">Michael Chen</h3>
                  <p className="text-xs text-gray-500">DOB: 04/15/1985 • MRN: 78432-B • Reason: Headache</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-red-100 text-red-600 rounded-full flex items-center">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <span className="text-xs font-medium">Recording</span>
                  </div>
                  <span className="text-xs text-gray-500">10:34</span>
                </div>
              </div>
              
              <div className="flex-1 border border-gray-200 rounded-lg p-3 mb-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-blue-600">DR. SMITH:</span>
                    <p className="text-sm text-gray-800">Hello Mr. Chen, how are you feeling today?</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-green-600">PATIENT:</span>
                    <p className="text-sm text-gray-800">I've been having these headaches for the past three days. They seem to be getting worse, especially in the morning.</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-blue-600">DR. SMITH:</span>
                    <p className="text-sm text-gray-800">I'm sorry to hear that. Can you describe the pain? Is it on one side or both sides of your head?</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-green-600">PATIENT:</span>
                    <p className="text-sm text-gray-800">It's mostly on the right side, above my eye. It feels like pressure, and sometimes it throbs.</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-blue-600">DR. SMITH:</span>
                    <p className="text-sm text-gray-800">Have you taken any medications for it?</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-green-600">PATIENT:</span>
                    <p className="text-sm text-gray-800">I tried some over-the-counter ibuprofen, but it only helps a little bit.</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-blue-600">DR. SMITH:</span>
                    <p className="text-sm text-gray-800">Any other symptoms along with the headache? Nausea? Visual changes? Sensitivity to light?</p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-xs font-medium text-green-600">PATIENT:</span>
                    <p className="text-sm text-gray-800">Yes, I do feel a bit nauseated when the headache is really bad, and bright lights make it worse.</p>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="9" y="9" width="2" height="6" fill="currentColor" />
                      <rect x="13" y="9" width="2" height="6" fill="currentColor" />
                    </svg>
                    Pause
                  </button>
                  <button className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm flex items-center">
                    <ClipboardCheck size={16} className="mr-1" />
                    Generate Note
                  </button>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <Server size={14} className="mr-1" />
                  <span>Synced with EHR</span>
                </div>
              </div>
              
              {/* AI processing indicators */}
              <div className="absolute left-1/2 bottom-16 transform -translate-x-1/2">
                <motion.div 
                  className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs flex items-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0px 0px rgba(59,130,246,0)", 
                      "0 0px 16px rgba(59,130,246,0.7)",
                      "0 0px 0px rgba(59,130,246,0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 15H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>AI analyzing conversation</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 5: Generated Notes */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 4 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium text-gray-800">Medical Note</h3>
                  <p className="text-xs text-gray-500">Michael Chen • DOB: 04/15/1985 • Visit Date: May 8, 2025</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                    Finalize
                  </button>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg space-y-4 bg-gray-50">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-medium text-blue-800">S: Subjective</h4>
                  <p className="text-sm text-gray-800 mt-1">
                    Patient is a 40-year-old male presenting with complaints of headache for the past three days, gradually worsening. Describes the pain as pressure-like and throbbing, primarily located on the right side above the eye. Reports associated symptoms of nausea during severe headache episodes and photophobia. Has tried OTC ibuprofen with minimal relief.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-medium text-blue-800">O: Objective</h4>
                  <div className="text-sm text-gray-800 mt-1 space-y-2">
                    <p><span className="font-medium">Vitals:</span> BP 128/82, HR 76, Temp 98.6°F, RR 16, O2 Sat 99% on RA</p>
                    <p><span className="font-medium">General:</span> Alert and oriented x3, in mild distress due to headache</p>
                    <p><span className="font-medium">HEENT:</span> Normocephalic, atraumatic. No periorbital edema, sclera clear. Pupils equal, round, reactive to light. Extraocular movements intact. Mild tenderness to palpation over right temporal region.</p>
                    <p><span className="font-medium">Neuro:</span> CN II-XII intact. No focal deficits. Negative Romberg. Normal gait.</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-medium text-blue-800">A: Assessment</h4>
                  <div className="text-sm text-gray-800 mt-1 space-y-1">
                    <p>1. Migraine with aura (G43.109)</p>
                    <p>2. Dehydration, mild (E86.0)</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="font-medium text-blue-800">P: Plan</h4>
                  <div className="text-sm text-gray-800 mt-1 space-y-2">
                    <p>1. Prescribe sumatriptan 50mg PO at onset of migraine, may repeat in 2 hours if no relief, not to exceed 200mg in 24 hours.</p>
                    <p>2. Recommend increasing fluid intake, maintaining regular sleep schedule, and identifying potential triggers.</p>
                    <p>3. Headache diary to track frequency, duration, and potential triggers.</p>
                    <p>4. Follow-up in 4 weeks to reassess, sooner if symptoms worsen or change.</p>
                    <p>5. Patient educated on medication usage, side effects, and red flag symptoms that would require immediate attention.</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center text-xs text-gray-600">
                  <Clock size={14} className="mr-1" />
                  <span>Generated in 8 seconds</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm">
                    Save Draft
                  </button>
                  <button className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Push to EHR
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
