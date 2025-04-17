
import React from 'react';
import { motion } from 'framer-motion';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";

// Animation variants for elements
const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const gridItemVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// Illustration components for each panel
const AppointmentIllustration = () => (
  <div className="relative h-40 w-full">
    <motion.div 
      className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-28 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-lg shadow-sm border border-blue-200"
      initial={{ y: 0 }}
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* Calendar grid */}
      <div className="grid grid-cols-5 grid-rows-4 gap-[2px] p-1 mt-5 mx-1">
        {Array(20).fill(0).map((_, i) => (
          <motion.div 
            key={i} 
            className={`h-4 rounded-sm ${i % 3 === 0 ? 'bg-blue-300' : 'bg-blue-200/50'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-5 bg-blue-400 rounded-t-lg flex items-center justify-center">
        <div className="text-white text-[8px] font-semibold">APRIL 2025</div>
      </div>
    </motion.div>
    
    {/* Reminder bubbles */}
    <motion.div 
      className="absolute top-2 right-4 w-16 h-10 bg-white rounded-lg shadow-md border border-blue-100 flex items-center justify-center text-[8px] font-medium text-blue-500"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1.05, 1],
        opacity: [0, 1, 1],
      }}
      transition={{ 
        repeat: Infinity, 
        repeatDelay: 5,
        duration: 0.5,
        times: [0, 0.8, 1]
      }}
    >
      <span>Appointment Reminder</span>
    </motion.div>
    
    {/* Call icon */}
    <motion.div 
      className="absolute bottom-6 right-8 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center shadow-md"
      animate={{ 
        boxShadow: ['0 0 0 0px rgba(45, 212, 191, 0.3)', '0 0 0 8px rgba(45, 212, 191, 0)'],
      }}
      transition={{ 
        repeat: Infinity,
        duration: 1.5
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    </motion.div>
  </div>
);

const RefillIllustration = () => (
  <div className="relative h-40 w-full">
    <motion.div 
      className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-tr from-green-50 to-green-100 rounded-lg shadow-sm border border-green-200"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* Tablet screen */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute top-0 w-full h-5 bg-green-500 flex items-center justify-center">
          <div className="text-white text-[8px] font-semibold">REFILL REQUEST</div>
        </div>
        
        <div className="mt-6 px-2">
          <div className="h-3 w-full bg-green-200 rounded-full mb-2"></div>
          <div className="h-3 w-3/4 bg-green-200 rounded-full mb-2"></div>
          
          <div className="mt-4 flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="ml-1">
              <div className="h-2 w-12 bg-green-200 rounded-full mb-1"></div>
              <div className="h-2 w-8 bg-green-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    
    {/* Medicine bottles */}
    <motion.div 
      className="absolute bottom-4 right-5 w-4 h-8 bg-orange-300 rounded-md"
      initial={{ rotate: 0 }}
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      <div className="absolute top-0 w-full h-1.5 bg-white rounded-t-md"></div>
    </motion.div>
    
    <motion.div 
      className="absolute bottom-6 right-10 w-4 h-6 bg-blue-300 rounded-md"
      initial={{ rotate: 0 }}
      animate={{ rotate: [5, -5, 5] }}
      transition={{ repeat: Infinity, duration: 3.5 }}
    >
      <div className="absolute top-0 w-full h-1.5 bg-white rounded-t-md"></div>
    </motion.div>
    
    {/* Verification badge */}
    <motion.div 
      className="absolute top-5 left-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-green-400"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1.2, 1],
        boxShadow: ['0 0 0 0px rgba(74, 222, 128, 0)', '0 0 0 4px rgba(74, 222, 128, 0.3)', '0 0 0 0px rgba(74, 222, 128, 0)'],
      }}
      transition={{ 
        duration: 0.6,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 5
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </motion.div>
  </div>
);

const RegistrationIllustration = () => (
  <div className="relative h-40 w-full">
    <motion.div 
      className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-tr from-purple-50 to-blue-50 rounded-lg shadow-sm border border-blue-200"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* Check-in form */}
      <div className="h-full w-full p-2 pt-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div 
            key={i}
            className="h-2.5 mb-2 rounded-sm bg-blue-200"
            initial={{ width: "20%" }}
            animate={{ width: "90%" }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        ))}
        
        <motion.div 
          className="h-3 w-12 mt-4 ml-auto bg-blue-400 rounded-md"
          animate={{ 
            backgroundColor: ['rgba(96, 165, 250, 0.7)', 'rgba(96, 165, 250, 1)', 'rgba(96, 165, 250, 0.7)']
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-5 bg-blue-400 rounded-t-lg flex items-center justify-center">
        <div className="text-white text-[8px] font-semibold">PATIENT REGISTRATION</div>
      </div>
    </motion.div>
    
    {/* ID Card */}
    <motion.div 
      className="absolute bottom-3 left-6 w-12 h-8 bg-white rounded-md shadow-md border border-gray-200 overflow-hidden"
      animate={{ 
        x: [0, 10, 0],
        boxShadow: ['0 0 0 0px rgba(255, 255, 255, 0)', '0 0 0 3px rgba(59, 130, 246, 0.3)', '0 0 0 0px rgba(255, 255, 255, 0)'],
      }}
      transition={{ 
        repeat: Infinity,
        repeatDelay: 5,
        duration: 1.5
      }}
    >
      <div className="h-2 w-full bg-blue-500 mb-1"></div>
      <div className="h-2 w-6 bg-gray-200 ml-1 mb-1 rounded-sm"></div>
      <div className="h-2 w-4 bg-gray-200 ml-1 rounded-sm"></div>
    </motion.div>
    
    {/* Match indicator */}
    <motion.div 
      className="absolute bottom-1 left-8 bg-green-500 text-white text-[6px] font-bold px-1 py-0.5 rounded"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.8],
        y: [0, -5, -5, 0]
      }}
      transition={{ 
        repeat: Infinity,
        repeatDelay: 5,
        duration: 2,
        times: [0, 0.1, 0.8, 1]
      }}
    >
      MATCH
    </motion.div>
  </div>
);

const PreVisitIllustration = () => (
  <div className="relative h-40 w-full">
    <motion.div 
      className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-28 bg-gradient-to-tr from-teal-50 to-purple-50 rounded-lg shadow-sm border border-teal-200"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* Patient chart */}
      <div className="absolute inset-0 p-2 pt-6">
        <motion.div 
          className="mb-3 bg-teal-100 rounded p-1 flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <div className="w-2 h-2 bg-teal-500 rounded-full mr-1"></div>
          <div className="text-[6px] font-semibold text-teal-700">CHIEF COMPLAINT</div>
        </motion.div>
        
        <motion.div 
          className="mb-3 bg-purple-100 rounded p-1 flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
          <div className="text-[6px] font-semibold text-purple-700">HISTORY</div>
        </motion.div>
        
        <motion.div 
          className="mb-3 bg-blue-100 rounded p-1 flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
          <div className="text-[6px] font-semibold text-blue-700">VITALS</div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-r from-teal-400 to-purple-400 rounded-t-lg flex items-center justify-center">
        <div className="text-white text-[8px] font-semibold">PATIENT SUMMARY</div>
      </div>
    </motion.div>
    
    {/* Provider eyes */}
    <motion.div 
      className="absolute bottom-2 right-6 flex space-x-2"
      animate={{ y: [0, -3, 0] }}
      transition={{ 
        repeat: Infinity,
        duration: 3,
        delay: 2
      }}
    >
      <div className="w-3 h-3 bg-white rounded-full border border-gray-400 flex items-center justify-center">
        <motion.div 
          className="w-1.5 h-1.5 bg-gray-700 rounded-full"
          animate={{ x: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
      <div className="w-3 h-3 bg-white rounded-full border border-gray-400 flex items-center justify-center">
        <motion.div 
          className="w-1.5 h-1.5 bg-gray-700 rounded-full"
          animate={{ x: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </motion.div>
    
    {/* Shimmer effect */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
      animate={{ 
        opacity: [0, 0.3, 0],
        x: [-100, 150, -100]
      }}
      transition={{ 
        repeat: Infinity,
        duration: 3,
        repeatDelay: 3
      }}
    />
  </div>
);

const PatientEducationIllustration = () => (
  <div className="relative h-40 w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-50/30 rounded-lg"></div>
    
    {/* Phone with alert */}
    <motion.div 
      className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-24 bg-gray-100 rounded-lg border-2 border-gray-300 overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <div className="h-4 w-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
      
      <motion.div 
        className="mt-1 mx-1 p-1 bg-blue-50 rounded border border-blue-200 shadow-sm"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.5
        }}
      >
        <div className="h-1 w-10 bg-blue-300 rounded-full mb-1"></div>
        <div className="h-1 w-12 bg-blue-300 rounded-full mb-1"></div>
        <div className="h-1 w-8 bg-blue-300 rounded-full"></div>
      </motion.div>
    </motion.div>
    
    {/* Pill bottles */}
    <motion.div 
      className="absolute bottom-4 right-6 w-4 h-7 bg-blue-300 rounded-md"
      animate={{ rotate: [0, -3, 0, 3, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      <div className="absolute top-0 w-full h-1.5 bg-white rounded-t-md"></div>
    </motion.div>
    
    <motion.div 
      className="absolute bottom-3 right-10 w-4 h-6 bg-green-300 rounded-md"
      animate={{ rotate: [0, 3, 0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
    >
      <div className="absolute top-0 w-full h-1.5 bg-white rounded-t-md"></div>
    </motion.div>
    
    {/* Health booklet animation */}
    <motion.div 
      className="absolute bottom-7 left-6 flex perspective-[400px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="w-10 h-14 bg-white border border-blue-200 rounded shadow-sm z-0 origin-left"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: [-5, 80, -5] }}
        transition={{ 
          repeat: Infinity,
          repeatDelay: 3,
          duration: 2
        }}
      >
        <div className="h-2 w-6 bg-blue-100 rounded mx-auto mt-2"></div>
        <div className="h-1 w-8 bg-blue-100 rounded mx-auto mt-1"></div>
        <div className="h-1 w-5 bg-blue-100 rounded mx-auto mt-1"></div>
        <div className="h-1 w-7 bg-blue-100 rounded mx-auto mt-1"></div>
      </motion.div>
      
      <motion.div 
        className="w-10 h-14 bg-blue-50 border border-blue-200 rounded shadow-sm absolute left-0 z-10 origin-left"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: [-5, 170, -5] }}
        transition={{ 
          repeat: Infinity,
          repeatDelay: 3,
          duration: 2
        }}
      >
        <div className="h-3 w-3 bg-blue-300 rounded-full mx-auto mt-4"></div>
        <div className="h-1 w-6 bg-blue-200 rounded mx-auto mt-2"></div>
      </motion.div>
    </motion.div>
  </div>
);

const PreventativeCareIllustration = () => (
  <div className="relative h-40 w-full">
    <motion.div 
      className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-30 bg-gradient-to-tr from-blue-50 to-teal-50 rounded-lg shadow-sm border border-teal-200"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* Dashboard screen */}
      <div className="absolute inset-0 p-2 pt-6">
        {/* Risk score dial */}
        <div className="flex justify-center">
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 0 0 31.831 a 15.9155 15.9155 0 0 0 0 -31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 0 0 31.831 a 15.9155 15.9155 0 0 0 0 -31.831"
                fill="none"
                stroke="#4ade80"
                strokeWidth="3"
                strokeDasharray="0, 100"
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: ["0, 100", "75, 100", "0, 100"] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <text 
                x="18" 
                y="21" 
                textAnchor="middle" 
                fontSize="8" 
                className="text-green-600 font-bold"
              >
                75%
              </text>
            </svg>
          </div>
        </div>
        
        {/* Horizontal chart */}
        <div className="mt-2 space-y-1.5">
          {[65, 40, 85].map((value, i) => (
            <div key={i} className="flex items-center space-x-1">
              <div className="text-[6px] w-6 text-gray-500">{['PHQ-9', 'GAD-7', 'AUDIT'][i]}</div>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${['bg-green-400', 'bg-yellow-400', 'bg-teal-400'][i]}`}
                  initial={{ width: '0%' }}
                  animate={{ width: `${value}%` }}
                  transition={{ 
                    repeat: Infinity,
                    repeatDelay: 5,
                    duration: 1.5,
                    delay: i * 0.3
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-t-lg flex items-center justify-center">
        <div className="text-white text-[8px] font-semibold">RISK ASSESSMENT</div>
      </div>
    </motion.div>
    
    {/* Emotion indicators */}
    <div className="absolute bottom-3 right-4 flex space-x-2">
      {['😐', '🙂', '😊'].map((emoji, i) => (
        <motion.div 
          key={i}
          className="w-5 h-5 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-200"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [0, -2, 0],
            boxShadow: [
              '0 1px 2px rgba(0,0,0,0.1)',
              '0 4px 6px rgba(0,0,0,0.1)',
              '0 1px 2px rgba(0,0,0,0.1)'
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            delay: i * 0.7
          }}
        >
          <span className="text-[10px]">{emoji}</span>
        </motion.div>
      ))}
    </div>
    
    {/* Flow diagram line */}
    <svg className="absolute bottom-12 left-8 w-16 h-8" viewBox="0 0 60 30">
      <motion.path 
        d="M5,15 Q20,5 30,15 T55,15" 
        stroke="#0ea5e9" 
        fill="transparent" 
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          repeat: Infinity,
          repeatDelay: 3,
          duration: 1.5
        }}
      />
      <motion.circle 
        cx="5" 
        cy="15" 
        r="3" 
        fill="#0ea5e9"
        animate={{ 
          r: [3, 4, 3],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <motion.circle 
        cx="30" 
        cy="15" 
        r="3" 
        fill="#0ea5e9"
        animate={{ 
          r: [3, 4, 3],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
      />
      <motion.circle 
        cx="55" 
        cy="15" 
        r="3" 
        fill="#0ea5e9"
        animate={{ 
          r: [3, 4, 3],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
      />
    </svg>
  </div>
);

// Content data for panels
const automationPanels = [
  {
    title: "Appointment Management",
    description: "AI-powered scheduling system handles bookings, reschedules & follows up with patients",
    illustration: <AppointmentIllustration />,
    details: [
      "Auto-schedules, confirms & reminds patients",
      "Manages cancellations & reschedules efficiently", 
      "Follows up automatically to minimize no-shows"
    ],
    bgClass: "bg-gradient-to-br from-blue-50 to-blue-100/50"
  },
  {
    title: "Refill Processing",
    description: "Streamlined medication refill handling with built-in verification",
    illustration: <RefillIllustration />,
    details: [
      "Verifies patient identity & medication details", 
      "Confirms pharmacy preference automatically", 
      "Drafts & processes refills instantly"
    ],
    bgClass: "bg-gradient-to-br from-green-50 to-green-100/50"
  },
  {
    title: "Patient Registration & Check-In",
    description: "Fast digital onboarding solution for seamless patient experience",
    illustration: <RegistrationIllustration />,
    details: [
      "Guides patients through efficient registration", 
      "Handles insurance & demographic updates", 
      "Integrates directly with practice EHR"
    ],
    bgClass: "bg-gradient-to-br from-indigo-50 to-purple-50/50"
  },
  {
    title: "Pre-Visit Assistance",
    description: "Intelligent preparation for more productive patient visits",
    illustration: <PreVisitIllustration />,
    details: [
      "Captures chief complaints & medical history", 
      "Prepares preliminary notes for providers", 
      "Reduces documentation time by up to 70%"
    ],
    bgClass: "bg-gradient-to-br from-teal-50 to-purple-50/50"
  },
  {
    title: "Patient Education & Adherence",
    description: "Personalized health information & medication reminders",
    illustration: <PatientEducationIllustration />,
    details: [
      "Delivers tailored health education content", 
      "Sends automated medication reminders", 
      "Improves treatment outcomes through adherence"
    ],
    bgClass: "bg-gradient-to-br from-amber-50 to-amber-100/50"
  },
  {
    title: "Preventative Care & Risk Assessments",
    description: "Proactive screening and health monitoring tools",
    illustration: <PreventativeCareIllustration />,
    details: [
      "Administers PHQ-9, GAD-7 and other assessments", 
      "Identifies at-risk patients automatically", 
      "Ensures timely preventative care interventions"
    ],
    bgClass: "bg-gradient-to-br from-blue-50 to-teal-50/50"
  }
];

export const BravoAutomationBentoGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans" style={{ color: bravoColors.primary }}>
            BRAVO Automates Every Front Office Task
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: bravoColors.text.secondary }}>
            One AI assistant handles all patient engagement & administrative workflows
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {automationPanels.map((panel, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={panelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              className={`overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${panel.bgClass}`}
            >
              <motion.div
                variants={gridItemVariants}
                className="h-full flex flex-col"
              >
                {panel.illustration}
                
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: bravoColors.primary }}>
                    {panel.title}
                  </h3>
                  <p className="text-sm mb-4 font-sans" style={{ color: bravoColors.text.secondary }}>
                    {panel.description}
                  </p>
                  
                  <ul className="mt-auto space-y-2">
                    {panel.details.map((detail, j) => (
                      <motion.li 
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (j * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start text-sm"
                      >
                        <span className="text-blue-500 mr-2 shrink-0 mt-1">•</span>
                        <span style={{ color: bravoColors.text.secondary }}>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold mb-8 font-sans" style={{ color: bravoColors.secondary }}>
            One AI agent - every front office task is automated
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            style={{ 
              color: bravoColors.text.white
            }}
          >
            Request a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
