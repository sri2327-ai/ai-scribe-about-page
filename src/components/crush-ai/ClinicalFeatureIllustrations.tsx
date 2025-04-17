
import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck, FileText, AlertTriangle, LineChart } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Clinical Decision Support Illustration
export const ClinicalDecisionIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Background circle */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Stethoscope icon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Stethoscope size={48} color={crushAIColors.primaryFlat} />
        </motion.div>
        
        {/* Tooltip */}
        <motion.div 
          className="absolute top-1/5 right-1/5 w-14 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-xs text-gray-500">Guideline</div>
        </motion.div>
        
        {/* Lightbulb effect */}
        <motion.div 
          className="absolute bottom-1/4 left-1/5 w-8 h-8 rounded-full"
          style={{ backgroundColor: `${crushAIColors.tertiary}60` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center text-yellow-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💡
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// HCC Tracking Illustration
export const HCCTrackingIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Background circle */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Shield icon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ShieldCheck size={48} color={crushAIColors.primaryFlat} />
        </motion.div>
        
        {/* MEAT tag */}
        <motion.div 
          className="absolute top-1/5 right-1/5 px-2 py-0.5 rounded-full bg-teal-100 border border-teal-300"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-xs text-teal-600 font-medium">M</div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/5 right-1/4 px-2 py-0.5 rounded-full bg-blue-100 border border-blue-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-xs text-blue-600 font-medium">E</div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/5 px-2 py-0.5 rounded-full bg-purple-100 border border-purple-300"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="text-xs text-purple-600 font-medium">A</div>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/4 left-1/5 px-2 py-0.5 rounded-full bg-pink-100 border border-pink-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="text-xs text-pink-600 font-medium">T</div>
        </motion.div>
      </div>
    </div>
  );
};

// Treatment Plans Illustration
export const TreatmentPlansIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <FileText size={48} color={crushAIColors.primaryFlat} />
      </motion.div>
      
      {/* SMART chips */}
      <motion.div 
        className="absolute top-1/5 right-1/5 px-2 py-0.5 rounded-full bg-pink-100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="text-xs text-pink-600">S</div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/5 right-1/4 px-2 py-0.5 rounded-full bg-blue-100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-xs text-blue-600">M</div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/5 px-2 py-0.5 rounded-full bg-teal-100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="text-xs text-teal-600">A</div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/4 left-1/5 px-2 py-0.5 rounded-full bg-purple-100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="text-xs text-purple-600">RT</div>
      </motion.div>
    </div>
  </div>
);

export const PreventiveScreeningIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <AlertTriangle size={48} color={crushAIColors.primaryFlat} />
      </motion.div>
      
      {/* Risk flags */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-red-400"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 0.4, duration: 1.5, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-400"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 0.6, duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-1/5 left-1/3 text-xs font-semibold px-1.5 py-0.5 rounded bg-pink-100 text-pink-600"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Alert
      </motion.div>
    </div>
  </div>
);

export const LongitudinalIntelligenceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <LineChart size={48} color={crushAIColors.primaryFlat} />
      </motion.div>
      
      {/* Timeline */}
      <motion.div 
        className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-blue-400"
        initial={{ width: 0 }}
        animate={{ width: '50%' }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-2/3 w-2 h-2 rounded-full bg-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        History
      </motion.div>
    </div>
  </div>
);
