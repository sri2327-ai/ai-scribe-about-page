
import React from "react";
import { motion } from "framer-motion";
import { Pill, TestTubes, ClipboardCheck } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const PrescriptionRefills = () => {
  return (
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Pill size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>

        {/* Medication Names */}
        {["Metformin", "Lisinopril", "Atorvastatin"].map((med, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-600 border border-blue-200"
            style={{
              top: `${20 + i * 25}%`,
              right: "10%",
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
          >
            {med} ✓
          </motion.div>
        ))}

        {/* Lab Orders */}
        {["CBC", "A1C", "Lipids"].map((lab, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-600 border border-green-200"
            style={{
              top: `${30 + i * 25}%`,
              left: "5%",
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
          >
            {lab} ✓
          </motion.div>
        ))}
      </div>
    </div>
  );
};
