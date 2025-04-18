
import React from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const SmartScreening = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40">
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 300 }}
        >
          <ClipboardList size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>

        {/* Assessment Scores */}
        {[
          { name: "PHQ-9", score: 3, color: "blue" },
          { name: "GAD-7", score: 8, color: "purple" },
          { name: "PCL-5", score: 12, color: "teal" }
        ].map((assessment, i) => (
          <motion.div
            key={i}
            className={`absolute text-xs font-medium px-2 py-1 rounded-lg bg-${assessment.color}-100 text-${assessment.color}-600 border border-${assessment.color}-200`}
            style={{
              top: `${30 + i * 30}%`,
              right: i % 2 === 0 ? "10%" : "55%",
            }}
            initial={{ scale: 0, opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.5 + i * 0.2, 
              duration: 0.4, 
              type: "spring", 
              stiffness: 200 
            }}
          >
            {assessment.name}: {assessment.score}
          </motion.div>
        ))}

        {/* Completion Status */}
        <motion.div
          className="absolute bottom-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.2, 
            duration: 0.4, 
            type: "spring", 
            stiffness: 300 
          }}
        >
          Complete ✓
        </motion.div>
      </div>
    </div>
  );
};
