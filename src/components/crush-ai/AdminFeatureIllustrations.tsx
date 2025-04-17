
import React from "react";
import { motion } from "framer-motion";
import { Pill, ClipboardList, FileSpreadsheet, Database, Workflow } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Common animation variants for consistent behavior
const circleVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const iconVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }
};

const elementVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } }
};

// Animated Prescription Refills Illustration
export const PrescriptionRefillsIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40">
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
        >
          <Pill size={48} color={crushAIColors.primaryFlat} />
        </motion.div>
        
        {/* Medication bottles */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-8 h-12 rounded-md bg-white border border-gray-200 flex items-center justify-center"
          initial={{ y: 20, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ rotate: [0, -5, 0], transition: { duration: 2, repeat: Infinity, repeatType: "loop" }}}
        >
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${crushAIColors.tertiary}50` }} />
        </motion.div>
        
        {/* Confirmation check */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            ✓
          </motion.div>
        </motion.div>
        
        {/* Flow lines */}
        <motion.div 
          className="absolute h-0.5 w-12 bg-gradient-to-r from-blue-400 to-teal-400"
          style={{ top: '60%', left: '60%', transform: 'rotate(45deg)' }}
          initial={{ width: 0 }}
          animate={{ width: 12 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>
    </div>
  );
};

// Smart Screening Illustration
export const SmartScreeningIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40">
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
        >
          <ClipboardList size={48} color={crushAIColors.primaryFlat} />
        </motion.div>
        
        {/* Assessment ring */}
        <motion.div 
          className="absolute top-1/5 right-1/5 w-10 h-10 rounded-full border-2 border-teal-400 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            className="text-xs font-bold text-teal-500"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            PHQ-9
          </motion.div>
        </motion.div>
        
        {/* Mood indicator */}
        <motion.div 
          className="absolute bottom-1/4 left-1/5 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            😊
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Pre-Charting Illustration
export const PreChartingIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
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
      >
        <FileSpreadsheet size={48} color={crushAIColors.primaryFlat} />
      </motion.div>
      
      {/* EHR chart blocks */}
      <motion.div 
        className="absolute top-1/5 right-1/5 w-12 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="text-xs text-gray-500">History</div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/5 w-12 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="text-xs text-gray-500">Complaint</div>
      </motion.div>
    </div>
  </div>
);

// CRM Sync Illustration
export const CRMSyncIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
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
      >
        <Database size={48} color={crushAIColors.primaryFlat} />
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
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop", times: [0, 0.1, 0.9, 1] }}
      >
        Synced
      </motion.div>
    </div>
  </div>
);

// Centralized Care Illustration 
export const CentralizedCareIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
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
      >
        <Workflow size={48} color={crushAIColors.primaryFlat} />
      </motion.div>
      
      {/* Connection lines - using staggered animation */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 h-0.5"
        style={{ backgroundColor: crushAIColors.secondary, transform: 'rotate(45deg)' }}
        initial={{ width: 0 }}
        animate={{ width: 8 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-8 h-0.5"
        style={{ backgroundColor: crushAIColors.secondary, transform: 'rotate(-45deg)' }}
        initial={{ width: 0 }}
        animate={{ width: 8 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </div>
  </div>
);
