
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

  // Animation for the patient engagement illustration
  useEffect(() => {
    console.log("DemoScene effect running with currentStage:", currentStage);
    
    if (currentStage === 0) {
      const interval = setInterval(() => {
        setSubStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    } else if (currentStage === 1) {
      // For AI Medical Scribe, advance steps automatically if not interacting
      if (!userInteracting) {
        const interval = setInterval(() => {
          setSubStep((prev) => {
            // Only advance if we're not in transcription mode (which requires click)
            if (prev === 2 && !transcriptionActive) return prev;
            if (prev === 3 && !noteGeneration) return prev;
            return (prev + 1) % 5;
          });
        }, 4000);
        return () => clearInterval(interval);
      }
    }
  }, [currentStage, userInteracting, transcriptionActive, noteGeneration]);

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

  // Handle mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      
      // Determine if mouse is hovering over interactive areas
      if (currentStage === 0) {
        // Logic for patient engagement step
        if (y > 100 && y < 250 && x > 50 && x < 250) {
          setTargetedArea("Chat");
        } else if (y > 100 && y < 250 && x > 300 && x < 500) {
          setTargetedArea("Calendar");
        } else if (y > 250 && y < 400 && x > 50 && x < 250) {
          setTargetedArea("Intake");
        } else if (y > 250 && y < 400 && x > 300 && x < 500) {
          setTargetedArea("Reminders");
        } else {
          setTargetedArea(null);
        }
      } else if (currentStage === 1) {
        // Logic for AI Medical Scribe step
        if (y > 100 && y < 200 && x > 600 && x < 740) {
          setTargetedArea("Login");
        } else if (y > 220 && y < 260 && x > 600 && x < 740) {
          setTargetedArea("Patient");
        } else if (y > 280 && y < 320 && x > 600 && x < 740) {
          setTargetedArea("Templates");
        } else if (y > 340 && y < 380 && x > 600 && x < 740) {
          setTargetedArea("StartEncounter");
        } else if (y > 400 && y < 440 && x > 600 && x < 740) {
          setTargetedArea("GenerateNotes");
        } else {
          setTargetedArea(null);
        }
      } else {
        setTargetedArea(null);
      }
    }
  };

  const handleMouseDown = () => {
    setUserInteracting(true);
    
    if (currentStage === 0) {
      // Logic for patient engagement step
      if (targetedArea === "Chat") {
        setSubStep(0);
        if (Math.random() > 0.5) {
          setIsProcessingCall(true);
          setTimeout(() => setIsProcessingCall(false), 2000);
        }
      }
      if (targetedArea === "Calendar") setSubStep(1);
      if (targetedArea === "Intake") setSubStep(2);
      if (targetedArea === "Reminders") setSubStep(3);
    } else if (currentStage === 1) {
      // Logic for AI Medical Scribe step
      if (targetedArea === "Login") setSubStep(0);
      if (targetedArea === "Patient") setSubStep(1);
      if (targetedArea === "Templates") setSubStep(2);
      if (targetedArea === "StartEncounter") {
        setSubStep(3);
        setTranscriptionActive(true);
      }
      if (targetedArea === "GenerateNotes") {
        setSubStep(4);
        setNoteGeneration(true);
      }
    }
    
    setTimeout(() => setUserInteracting(false), 300);
  };

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
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
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
      
      {/* Custom cursor with "You" label */}
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
                  <label className="block text-xs font-medium text-gray-500 mb-1">Reason for visit</label>
                  <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
                    <p className="text-sm text-gray-800">Annual physical exam and follow-up on previous visit</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Current medications</label>
                  <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
                    <div className="flex items-center text-sm text-gray-800 mb-1">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Lisinopril 10mg daily</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-800">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Metformin 500mg twice daily</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Allergies</label>
                  <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
                    <div className="flex items-center text-sm text-gray-800">
                      <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Penicillin</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Insurance Information</label>
                  <div className="border border-gray-200 rounded-lg p-2 bg-blue-50 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Shield size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-800">Auto-verified with provider</p>
                      <p className="text-xs text-blue-600">BlueCross ID: 2845792</p>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="border border-green-200 rounded-lg p-2 bg-green-50 flex items-center"
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 4px 6px rgba(0,0,0,0.1)", "0 0 0 rgba(0,0,0,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-800">Form completed and submitted</p>
                    <p className="text-xs text-green-600">AI has processed all required information</p>
                  </div>
                </motion.div>
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
                <div className="px-2 py-1 bg-green-100 rounded-md">
                  <span className="text-xs text-green-700">Active</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Calendar size={16} className="text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-800">Physical Exam with Dr. Smith</span>
                  </div>
                  <div className="pl-10 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={14} className="mr-2" />
                      <span>May 15, 2025 at 10:30 AM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageCircle size={14} className="mr-2" />
                      <span>SMS reminder 24 hours before</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText size={14} className="mr-2" />
                      <span>Intake forms completed</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">AI will send personalized reminders</span>
                      <motion.div
                        className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <BellRing size={12} className="text-blue-600" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3 opacity-70">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <FileText size={16} className="text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-800">Lab Results Review</span>
                  </div>
                  <div className="pl-10 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={14} className="mr-2" />
                      <span>June 3, 2025 at 2:15 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageCircle size={14} className="mr-2" />
                      <span>Video call with Dr. Smith</span>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="border border-green-200 rounded-lg p-3 bg-green-50"
                  animate={{ 
                    y: [0, -3, 0],
                    boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 3px 5px rgba(0,0,0,0.1)", "0 0 0 rgba(0,0,0,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckCircle size={16} className="text-green-600" />
                      </div>
                      <span className="font-medium text-green-800">All reminders configured</span>
                    </div>
                    <div className="px-2 py-1 bg-white rounded-md border border-green-200">
                      <span className="text-xs text-green-700">Auto-managed</span>
                    </div>
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

// Figma-style flat UI illustration for AI Medical Scribe
const FigmaAIMedicalScribeIllustration = ({ subStep, transcriptionActive, noteGeneration }) => {
  console.log("Rendering AIMedicalScribeIllustration with subStep:", subStep);
  return (
    <motion.div 
      className="w-full max-w-3xl aspect-video bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* App UI Header */}
      <div className="h-12 bg-blue-700 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <span className="text-white text-sm font-medium">S10.AI Medical Scribe</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Shield size={14} className="text-white" />
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Settings size={14} className="text-white" />
          </div>
        </div>
      </div>
      
      <div className="flex h-[calc(100%-3rem)] bg-gray-50">
        {/* Main Content Area */}
        <div className="flex-1 p-4 relative">
          <div className="grid grid-cols-3 gap-4 h-full">
            {/* Left Panel - Patient Info */}
            <div className="col-span-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col">
              <h3 className="font-medium text-gray-800 mb-3">Patient Information</h3>
              
              {/* Patient card */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-2">
                    <User size={16} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Sarah Johnson</p>
                    <p className="text-xs text-gray-500">DOB: 05/12/1985 (40y)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                  <div className="flex items-center">
                    <span className="mr-1 text-gray-500">MRN:</span>
                    <span className="text-gray-700">J-43829</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1 text-gray-500">Last Visit:</span>
                    <span className="text-gray-700">01/23/25</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-2">
                <div className={`p-2 rounded-md flex items-center ${subStep === 0 ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer transition-colors`}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <User size={14} className={subStep === 0 ? 'text-blue-600' : 'text-gray-500'} />
                  </div>
                  <span className="text-sm">Login & Authenticate</span>
                  {subStep === 0 && <CheckCircle size={14} className="ml-auto text-blue-600" />}
                </div>
                
                <div className={`p-2 rounded-md flex items-center ${subStep === 1 ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer transition-colors`}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <CalendarDays size={14} className={subStep === 1 ? 'text-blue-600' : 'text-gray-500'} />
                  </div>
                  <span className="text-sm">Sync Patient Schedule</span>
                  {subStep === 1 && <CheckCircle size={14} className="ml-auto text-blue-600" />}
                </div>
                
                <div className={`p-2 rounded-md flex items-center ${subStep === 2 ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer transition-colors`}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <ClipboardList size={14} className={subStep === 2 ? 'text-blue-600' : 'text-gray-500'} />
                  </div>
                  <span className="text-sm">Load Templates</span>
                  {subStep === 2 && <CheckCircle size={14} className="ml-auto text-blue-600" />}
                </div>
                
                <div className={`p-2 rounded-md flex items-center ${subStep === 3 ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer transition-colors`}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <Mic size={14} className={subStep === 3 ? 'text-green-600' : 'text-gray-500'} />
                  </div>
                  <span className="text-sm">Start Encounter</span>
                  {subStep === 3 && (
                    <motion.div 
                      className="ml-auto h-4 w-4 rounded-full bg-green-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                
                <div className={`p-2 rounded-md flex items-center ${subStep === 4 ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer transition-colors`}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <FileText size={14} className={subStep === 4 ? 'text-blue-600' : 'text-gray-500'} />
                  </div>
                  <span className="text-sm">Generate Notes</span>
                  {subStep === 4 && <CheckCircle size={14} className="ml-auto text-blue-600" />}
                </div>
              </div>

              <div className="mt-auto">
                {subStep >= 3 && (
                  <motion.div 
                    className="bg-blue-50 rounded-lg p-2 border border-blue-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-xs text-blue-700">
                      <span className="font-medium">AI Status:</span> {transcriptionActive ? "Transcribing and analyzing" : (noteGeneration ? "Generating EHR note" : "Ready")}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Middle Panel - Encounter */}
            <div className="col-span-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Current Encounter</h3>
                <div className="px-2 py-1 bg-blue-100 rounded text-xs text-blue-700">
                  {transcriptionActive ? "Active" : "Ready"}
                </div>
              </div>
              
              {subStep < 3 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                    <Mic size={24} className="text-blue-300" />
                  </div>
                  <p className="text-sm">Start encounter to begin</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <Stethoscope size={14} className="text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Follow-up Visit</span>
                    {transcriptionActive && (
                      <motion.div 
                        className="ml-auto h-3 w-3 rounded-full bg-green-500"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="p-2 border-l-2 border-blue-500 bg-blue-50">
                      <p className="text-blue-800 font-medium">Dr. Smith</p>
                      <p className="text-gray-700">Hello Sarah, how are you feeling today?</p>
                    </div>
                    
                    <div className="p-2 border-l-2 border-green-500 bg-green-50">
                      <p className="text-green-800 font-medium">Patient</p>
                      <p className="text-gray-700">I've been having these headaches for about three days now. They start at the back of my head and move to the front.</p>
                    </div>
                    
                    <div className="p-2 border-l-2 border-blue-500 bg-blue-50">
                      <p className="text-blue-800 font-medium">Dr. Smith</p>
                      <p className="text-gray-700">I see. Have you noticed any triggers or patterns with these headaches?</p>
                    </div>
                    
                    <div className="p-2 border-l-2 border-green-500 bg-green-50">
                      <p className="text-green-800 font-medium">Patient</p>
                      <p className="text-gray-700">They seem worse in the morning and when I haven't had enough water. I've been taking over-the-counter pain medication but it only helps a little.</p>
                    </div>
                    
                    {transcriptionActive && (
                      <motion.div 
                        className="p-2 border-l-2 border-blue-400 bg-blue-50 opacity-70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <p className="text-blue-800 font-medium">Live Transcription</p>
                        <p className="text-gray-700">I'd like to check your blood pressure and ask about your...</p>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={12} className="mr-1" />
                      <span>Duration: 8:24</span>
                    </div>
                    
                    <div className="flex items-center">
                      <motion.div 
                        className={`w-3 h-3 rounded-full mr-1 ${transcriptionActive ? 'bg-green-500' : 'bg-gray-300'}`}
                        animate={transcriptionActive ? { 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-xs text-gray-500">{transcriptionActive ? 'Recording' : 'Standby'}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Right Panel - Documentation */}
            <div className="col-span-1 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">EHR Documentation</h3>
                <div className={`px-2 py-1 rounded text-xs ${noteGeneration ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                  {noteGeneration ? "Generated" : "Pending"}
                </div>
              </div>
              
              {subStep < 4 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                    <FileText size={24} className="text-gray-300" />
                  </div>
                  <p className="text-sm">{transcriptionActive ? "Analyzing encounter..." : "Documentation will appear here"}</p>
                  
                  {transcriptionActive && (
                    <motion.div 
                      className="mt-3 w-24 h-1 bg-gray-100 rounded-full overflow-hidden"
                      initial={{ width: "40%" }}
                    >
                      <motion.div 
                        className="h-full bg-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 8, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">SOAP Note</h4>
                      <div className="text-xs space-y-2">
                        <div>
                          <p className="text-blue-700 font-medium">SUBJECTIVE:</p>
                          <p className="text-gray-700">Patient reports headaches lasting 3 days. Pain begins at the occiput and radiates frontally. Worse in the morning and with dehydration. OTC analgesics provide minimal relief.</p>
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <p className="text-blue-700 font-medium">OBJECTIVE:</p>
                          <p className="text-gray-700">BP 128/84, HR 72, RR 16, Temp 98.6°F. HEENT: No sinus tenderness. Mild tenderness to palpation of occipital region.</p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <p className="text-blue-700 font-medium">ASSESSMENT:</p>
                          <p className="text-gray-700">Tension headache with possible mild dehydration</p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <p className="text-blue-700 font-medium">PLAN:</p>
                          <p className="text-gray-700">1. Increase fluid intake to 64oz daily<br/>2. Prescribe Naproxen 500mg BID PRN for headache<br/>3. Sleep hygiene counseling provided<br/>4. Return in 2 weeks if symptoms persist</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Ready to sync with EHR</span>
                      <div className="flex items-center space-x-2">
                        <button className="text-xs py-1 px-2 bg-blue-50 rounded text-blue-700 border border-blue-200">Edit</button>
                        <motion.button
                          className="text-xs py-1 px-2 bg-green-500 rounded text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Approve & Sign
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2">
                      <div className="text-xs py-1 px-2 bg-blue-50 rounded-full text-blue-700 border border-blue-100 flex items-center">
                        <Server size={10} className="mr-1" />
                        <span>Epic</span>
                      </div>
                      <div className="text-xs py-1 px-2 bg-blue-50 rounded-full text-blue-700 border border-blue-100 flex items-center ml-2">
                        <CheckCircle size={10} className="mr-1" />
                        <span>SOAP</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
