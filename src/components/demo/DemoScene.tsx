
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './S10Demo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMouseVector } from '@/hooks/use-mouse-vector';
import { MessageCircle, Calendar, FileText, BellRing, PhoneCall, CheckCircle, Clock, User, Database, Shield, Clipboard, Microphone, ClipboardCheck, ArrowRight } from 'lucide-react';

interface DemoSceneProps {
  currentStage: number;
  scrollProgress: any;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
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

  // Animation for the patient engagement illustration
  useEffect(() => {
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

  return (
    <div 
      className="w-full h-full relative bg-white"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
    >
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
          <FigmaPatientEngagementIllustration 
            subStep={subStep} 
            cursorPosition={mousePosition}
            isProcessingCall={isProcessingCall} 
          />
        )}
        
        {currentStage === 1 && (
          <FigmaAIMedicalScribeIllustration
            subStep={subStep}
            transcriptionActive={transcriptionActive}
            noteGeneration={noteGeneration}
          />
        )}
        
        {/* Show SVG illustrations for other stages */}
        {currentStage !== 0 && currentStage !== 1 && stages.map((stage, index) => (
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
                  <motion.div 
                    key={i}
                    className="border border-gray-200 rounded-md p-2 text-center text-sm cursor-pointer hover:bg-blue-50 hover:border-blue-200"
                    whileHover={{ scale: 1.03 }}
                  >
                    {time}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Step 3: Patient Intake & Insurance Verification */}
          <motion.div 
            className="absolute inset-0 p-4"
            animate={{ opacity: subStep === 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Patient Intake</h3>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="px-2 py-1 bg-green-100 rounded-md flex items-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                    <span className="text-xs text-green-700">Automated</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="mb-6 p-3 bg-green-50 rounded-md border border-green-100">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-green-800">Insurance Verified</h4>
                    <p className="text-xs text-green-700 mt-1">Blue Cross Blue Shield PPO | Member #: XXX-XX-1234</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-0.5 bg-green-100 rounded text-xs text-green-700">Coverage: 80%</span>
                      <span className="px-2 py-0.5 bg-green-100 rounded text-xs text-green-700">Co-pay: $25</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Medical History</h4>
                <div className="border border-gray-200 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-600">Last Updated</span>
                    <motion.span 
                      className="text-xs text-blue-600"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Updating...
                    </motion.span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Allergies</span>
                      <span className="text-gray-900">Penicillin, Peanuts</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Current Medications</span>
                      <span className="text-gray-900">Lisinopril, Metformin</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Past Surgeries</span>
                      <span className="text-gray-900">Appendectomy (2020)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Family History</span>
                      <span className="text-gray-900">Hypertension, Diabetes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Reason for Visit</h4>
                <div className="border border-gray-200 rounded-md p-3 bg-blue-50">
                  <p className="text-sm text-gray-800">Annual physical examination and medication review</p>
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
            <div className="bg-white h-full rounded-lg border border-gray-200 p-4 shadow-sm overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Appointment Reminders</h3>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BellRing size={14} className="text-blue-600" />
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-blue-200 rounded-lg p-3 bg-blue-50">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mr-3">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Appointment Confirmation</h4>
                      <p className="text-sm text-gray-700 mt-1">Your appointment with Dr. Smith is confirmed for May 15th at 10:30 AM.</p>
                      <div className="mt-2 flex gap-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded">Add to Calendar</button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded">Reschedule</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-3">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pre-Appointment Forms</h4>
                      <p className="text-sm text-gray-700 mt-1">Please complete the following forms before your appointment.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded flex items-center">
                          <FileText className="w-3 h-3 mr-1" />
                          Health History
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded flex items-center">
                          <FileText className="w-3 h-3 mr-1" />
                          Insurance Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Arrival Information</h4>
                      <p className="text-sm text-gray-700 mt-1">Please arrive 15 minutes early to complete check-in. Bring your insurance card and ID.</p>
                      <div className="mt-2">
                        <motion.div 
                          className="h-1 bg-gray-200 rounded-full overflow-hidden"
                          initial={{ width: "100%" }}
                        >
                          <motion.div 
                            className="h-full bg-blue-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 30 }}
                          />
                        </motion.div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-500">Now</span>
                          <span className="text-xs text-gray-500">May 15th</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="border border-green-200 rounded-lg p-3 bg-green-50"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mr-3">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">New Message</h4>
                      <p className="text-sm text-gray-700">You have a new message about your upcoming appointment.</p>
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
          <span className="text-white text-sm font-medium">S10 AI Medical Scribe</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Shield size={14} className="text-white" />
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex h-[calc(100%-3rem)] bg-gray-50">
        {/* Main Content Area */}
        <div className="flex-1 p-4 relative flex">
          {/* Left Content */}
          <div className="w-2/3 pr-2">
            {/* Patient Info Panel */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={20} className="text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                    <p className="text-xs text-gray-500">36 yo F | MRN: 293847 | DOB: 04/12/1989</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {transcriptionActive && (
                    <motion.div 
                      className="flex items-center px-2 py-1 bg-green-100 rounded-md"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      <span className="text-xs text-green-700">Recording</span>
                    </motion.div>
                  )}
                  {noteGeneration && (
                    <motion.div 
                      className="flex items-center px-2 py-1 bg-blue-100 rounded-md"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                      <span className="text-xs text-blue-700">Generating</span>
                    </motion.div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                  <p className="text-xs text-gray-500">Chief Complaint</p>
                  <p className="text-sm font-medium text-gray-900">Headache, Dizziness</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                  <p className="text-xs text-gray-500">Allergies</p>
                  <p className="text-sm font-medium text-gray-900">Penicillin, Sulfa</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                  <p className="text-xs text-gray-500">Vitals</p>
                  <p className="text-sm font-medium text-gray-900">BP: 120/80, HR: 72</p>
                </div>
              </div>
              
              {(subStep >= 3) && transcriptionActive && (
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Microphone size={14} className="text-blue-600 mr-1" />
                      <h5 className="text-sm font-medium text-blue-800">Live Transcription</h5>
                    </div>
                    <span className="text-xs text-blue-600">00:02:47</span>
                  </div>
                  
                  <div className="text-sm text-gray-800 space-y-2">
                    <p><span className="font-medium">Dr. Smith:</span> Hello Sarah, how are you feeling today?</p>
                    <p><span className="font-medium">Patient:</span> I've been having these headaches for about three days now. They start at the back of my head and sort of wrap around to the front.</p>
                    <p><span className="font-medium">Dr. Smith:</span> I see. And you mentioned some dizziness too?</p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    ><span className="font-medium">Patient:</span> Yes, especially when I stand up quickly. I've also been having trouble sleeping.</motion.p>
                  </div>
                  
                  {/* Audio visualization */}
                  <div className="h-6 flex items-center gap-0.5 my-2">
                    {[...Array(30)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="w-1 bg-blue-400"
                        style={{ height: `${Math.random() * 100}%` }}
                        animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {(subStep >= 4) && noteGeneration && (
                <motion.div 
                  className="mt-4 p-3 bg-white rounded-md border border-blue-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <ClipboardCheck size={14} className="text-blue-600 mr-1" />
                      <h5 className="text-sm font-medium text-blue-800">AI Generated SOAP Note</h5>
                    </div>
                    <span className="text-xs text-blue-600">Auto-populated</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <h6 className="font-medium text-gray-900">Subjective:</h6>
                      <p className="text-gray-800">
                        36-year-old female presents with headache of 3 days duration. The headache is described as starting at the occiput and radiating to the frontal area. Patient also reports dizziness upon standing and difficulty sleeping. No fever or visual changes reported.
                      </p>
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-gray-900">Objective:</h6>
                      <p className="text-gray-800">
                        Vitals: BP 120/80, HR 72, Temp 98.6°F, RR 16, SpO2 99%<br/>
                        General: Alert and oriented x3, in no acute distress<br/>
                        HEENT: PERRLA, EOM intact, TMs normal, no sinus tenderness<br/>
                        Neck: Supple, no lymphadenopathy, mild tenderness to palpation at occipital insertion
                      </p>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <h6 className="font-medium text-gray-900">Assessment:</h6>
                      <p className="text-gray-800">
                        1. Tension headache<br/>
                        2. Possible orthostatic hypotension<br/>
                        3. Insomnia
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <h6 className="font-medium text-gray-900">Plan:</h6>
                      <p className="text-gray-800">
                        1. NSAIDs for headache - Ibuprofen 600mg PO q6h PRN<br/>
                        2. Lifestyle modifications for sleep hygiene<br/>
                        3. Follow-up in 2 weeks if symptoms persist<br/>
                        4. CBC, CMP to rule out other causes
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Right Panel - Controls */}
          <div className="w-1/3 pl-2">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm h-full">
              <h4 className="font-medium text-gray-900 mb-4">AI Scribe Controls</h4>
              
              <div className="space-y-3">
                {/* Step 1: Login */}
                <motion.div 
                  className={`p-3 rounded-lg border ${subStep === 0 ? 'bg-blue-50 border-blue-200' : 'border-gray-200'} flex items-center justify-between cursor-pointer`}
                  whileHover={{ backgroundColor: subStep !== 0 ? 'rgba(239, 246, 255, 0.6)' : '' }}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${subStep === 0 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                      <User size={16} className={`${subStep === 0 ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm ${subStep === 0 ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>Login Authentication</span>
                  </div>
                  
                  {subStep > 0 ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : subStep === 0 ? (
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300" />
                  )}
                </motion.div>
                
                {/* Step 2: Sync Patient */}
                <motion.div 
                  className={`p-3 rounded-lg border ${subStep === 1 ? 'bg-blue-50 border-blue-200' : 'border-gray-200'} flex items-center justify-between cursor-pointer`}
                  whileHover={{ backgroundColor: subStep !== 1 ? 'rgba(239, 246, 255, 0.6)' : '' }}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${subStep === 1 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                      <Calendar size={16} className={`${subStep === 1 ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm ${subStep === 1 ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>Sync Patient Schedule</span>
                  </div>
                  
                  {subStep > 1 ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : subStep === 1 ? (
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300" />
                  )}
                </motion.div>
                
                {/* Step 3: Load Templates */}
                <motion.div 
                  className={`p-3 rounded-lg border ${subStep === 2 ? 'bg-blue-50 border-blue-200' : 'border-gray-200'} flex items-center justify-between cursor-pointer`}
                  whileHover={{ backgroundColor: subStep !== 2 ? 'rgba(239, 246, 255, 0.6)' : '' }}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${subStep === 2 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                      <FileText size={16} className={`${subStep === 2 ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm ${subStep === 2 ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>Load Preferred Templates</span>
                  </div>
                  
                  {subStep > 2 ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : subStep === 2 ? (
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300" />
                  )}
                </motion.div>
                
                {/* Step 4: Start Encounter */}
                <motion.div 
                  className={`p-3 rounded-lg border ${subStep === 3 ? 'bg-blue-50 border-blue-200' : 'border-gray-200'} flex items-center justify-between cursor-pointer`}
                  whileHover={{ backgroundColor: subStep !== 3 ? 'rgba(239, 246, 255, 0.6)' : '' }}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${subStep === 3 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                      <Microphone size={16} className={`${subStep === 3 ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm ${subStep === 3 ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>Start Encounter</span>
                  </div>
                  
                  {subStep > 3 ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : subStep === 3 ? (
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300" />
                  )}
                </motion.div>
                
                {/* Step 5: Generate Notes */}
                <motion.div 
                  className={`p-3 rounded-lg border ${subStep === 4 ? 'bg-blue-50 border-blue-200' : 'border-gray-200'} flex items-center justify-between cursor-pointer`}
                  whileHover={{ backgroundColor: subStep !== 4 ? 'rgba(239, 246, 255, 0.6)' : '' }}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${subStep === 4 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                      <ClipboardCheck size={16} className={`${subStep === 4 ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm ${subStep === 4 ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>Generate EHR Notes</span>
                  </div>
                  
                  {subStep === 4 ? (
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300" />
                  )}
                </motion.div>
                
                {/* Navigation */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <button className={`w-full py-2 rounded-lg flex items-center justify-center ${subStep === 4 ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}`}>
                    {subStep === 4 ? (
                      <>
                        <CheckCircle size={16} className="mr-2" />
                        Push to EHR
                      </>
                    ) : (
                      <>
                        <ArrowRight size={16} className="mr-2" />
                        Continue
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

