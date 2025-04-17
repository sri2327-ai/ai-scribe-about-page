
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Pill, X, CheckCircle2 } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const ClinicalDecision = () => {
  // Drug interaction data
  const interactions = [
    { drug1: "Warfarin", drug2: "Aspirin", severity: "high" },
    { drug1: "Simvastatin", drug2: "Erythromycin", severity: "medium" },
  ];

  // Allergy data
  const allergyWarning = { drug: "Penicillin", allergy: "Severe" };

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
        
        {/* Center icon for clinical decision support */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AlertCircle size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>

        {/* Drug Interaction Warnings */}
        {interactions.map((interaction, i) => (
          <motion.div
            key={i}
            className={`absolute text-xs font-medium px-2 py-1 rounded-md ${
              interaction.severity === "high" ? "bg-red-100 text-red-600 border border-red-200" : 
              "bg-orange-100 text-orange-600 border border-orange-200"
            }`}
            style={{
              top: `${15 + i * 25}%`,
              right: "5%",
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.3, duration: 0.4 }}
          >
            <div className="flex items-center gap-1">
              <Pill size={12} />
              <X size={10} />
              <Pill size={12} />
            </div>
            <div className="mt-1 text-[9px]">
              {interaction.drug1} + {interaction.drug2}
            </div>
          </motion.div>
        ))}

        {/* Allergy Warning */}
        <motion.div
          className="absolute bottom-[15%] left-[10%] text-xs font-medium px-2 py-1 rounded-md bg-red-100 text-red-600 border border-red-200"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <div className="flex items-center gap-1">
            <Pill size={12} />
            <X size={10} />
            <span className="text-[9px]">Allergy</span>
          </div>
          <div className="mt-1 text-[9px]">
            {allergyWarning.drug}
          </div>
        </motion.div>

        {/* Guidelines Chip */}
        <motion.div
          className="absolute top-[30%] left-[15%] text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-600 border border-green-200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="flex items-center gap-1">
            <CheckCircle2 size={10} />
            <span className="text-[9px]">Guideline</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
