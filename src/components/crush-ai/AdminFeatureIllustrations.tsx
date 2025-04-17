
import React from "react";
import { motion } from "framer-motion";
import { Pill, ClipboardList, FileSpreadsheet, Database, Workflow, Stethoscope, ShieldCheck, LineChart } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Common animation variants for consistent behavior
const circleVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const iconVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  hover: { 
    scale: [1, 1.1, 1],
    transition: { duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
  }
};

const elementVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  hover: { y: -5, transition: { duration: 0.3 } }
};

const floatingVariants = {
  animate: {
    y: [0, -5, 0],
    transition: { 
      duration: 2.5, 
      repeat: Infinity, 
      repeatType: "loop", 
      ease: "easeInOut" 
    }
  }
};

// Animated Prescription Refills Illustration
export const PrescriptionRefillsIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center py-6">
      <motion.div 
        className="relative w-40 h-40"
        whileHover="hover"
      >
        {/* Background circle */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Pill icon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Pill size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>
        
        {/* Medication bottles */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-8 h-12 rounded-md bg-white border border-gray-200 flex items-center justify-center"
          variants={elementVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${crushAIColors.tertiary}50` }} />
        </motion.div>
        
        {/* Confirmation check */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
          variants={elementVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
          >
            ✓
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Smart Screening Illustration
export const SmartScreeningIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center py-6">
      <motion.div 
        className="relative w-40 h-40"
        whileHover="hover"
      >
        {/* Background circle */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Clipboard icon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <ClipboardList size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>
        
        {/* Assessment ring */}
        <motion.div 
          className="absolute top-1/5 right-1/5 w-10 h-10 rounded-full border-2 border-teal-400 flex items-center justify-center"
          variants={elementVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.div
            className="text-xs font-bold text-teal-500"
            variants={floatingVariants}
            animate="animate"
          >
            PHQ-9
          </motion.div>
        </motion.div>
        
        {/* Mood indicator */}
        <motion.div 
          className="absolute bottom-1/4 left-1/5 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center"
          variants={elementVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            😊
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Pre-Charting Illustration
export const PreChartingIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FileSpreadsheet size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
      </motion.div>
      
      {/* EHR chart blocks */}
      <motion.div 
        className="absolute top-1/5 right-1/5 w-12 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="text-xs text-gray-500">History</div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/5 w-12 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="text-xs text-gray-500">Complaint</div>
      </motion.div>
    </motion.div>
  </div>
);

// CRM Sync Illustration
export const CRMSyncIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Database size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
      </motion.div>
      
      {/* Sync animation */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full border-2 border-teal-400 border-t-transparent"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 text-xs font-bold px-2 py-1 rounded bg-green-100 text-green-600"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", times: [0, 0.1, 0.9, 1] }}
        >
          Synced
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

// Centralized Care Illustration 
export const CentralizedCareIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Workflow size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
      </motion.div>
      
      {/* Connection lines - using staggered animation */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 h-0.5"
        style={{ backgroundColor: crushAIColors.secondary, transform: 'rotate(45deg)' }}
        initial={{ width: 0 }}
        animate={{ width: 8 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ width: 10, transition: { duration: 0.3 } }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-8 h-0.5"
        style={{ backgroundColor: crushAIColors.secondary, transform: 'rotate(-45deg)' }}
        initial={{ width: 0 }}
        animate={{ width: 8 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{ width: 10, transition: { duration: 0.3 } }}
      />
    </motion.div>
  </div>
);

// Clinical Decision Support Illustration
export const ClinicalDecisionIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Stethoscope size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
      </motion.div>
      
      {/* Medical guideline document */}
      <motion.div 
        className="absolute top-1/5 right-1/5 w-10 h-12 rounded-sm bg-white border border-gray-200 flex flex-col items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="w-6 h-0.5 bg-gray-300 mb-1"></div>
        <div className="w-5 h-0.5 bg-gray-300 mb-1"></div>
        <div className="w-7 h-0.5 bg-gray-300"></div>
      </motion.div>
      
      {/* Assistance bubble */}
      <motion.div 
        className="absolute bottom-1/4 left-1/5 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="text-blue-500 font-bold"
        >
          ?
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

// HCC Tracking Illustration
export const HCCTrackingIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <ShieldCheck size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
      </motion.div>
      
      {/* HCC tracking blocks */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-10 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="text-xs text-green-500 font-bold">HCC</div>
      </motion.div>
      
      {/* Checkmark for compliance */}
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="text-green-500"
        >
          ✓
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

// Longitudinal Intelligence Illustration
export const LongitudinalIntelligenceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <LineChart size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
      </motion.div>
      
      {/* Timeline dots */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-full flex space-x-2"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-blue-500"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0 }}
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-teal-500"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-green-500"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 1 }}
        />
      </motion.div>
      
      {/* Data points */}
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-10 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center"
        variants={elementVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="text-xs text-gray-500">History</div>
      </motion.div>
    </motion.div>
  </div>
);
