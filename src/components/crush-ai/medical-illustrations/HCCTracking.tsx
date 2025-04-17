
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ListChecks, CheckCircle2 } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const HCCTracking = () => {
  // MEAT criteria data
  const meatCriteria = [
    { letter: "M", description: "Monitor", status: "complete" },
    { letter: "E", description: "Evaluate", status: "complete" },
    { letter: "A", description: "Assess", status: "pending" },
    { letter: "T", description: "Treat", status: "pending" }
  ];

  // Risk adjustment scores
  const riskScores = [
    { condition: "Diabetes", hcc: "HCC 18", score: 0.28 },
    { condition: "CHF", hcc: "HCC 85", score: 0.36 }
  ];

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
        
        {/* Center icon for HCC tracking */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ShieldCheck size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>

        {/* MEAT Criteria */}
        <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 flex gap-1">
          {meatCriteria.map((criteria, i) => (
            <motion.div
              key={i}
              className={`text-[10px] font-bold px-1.5 py-1 rounded-full flex items-center justify-center ${
                criteria.status === "complete" 
                  ? "bg-green-100 text-green-600 border border-green-200" 
                  : "bg-amber-100 text-amber-600 border border-amber-200"
              }`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
            >
              {criteria.letter}
            </motion.div>
          ))}
        </div>

        {/* Risk Adjustment Scores */}
        {riskScores.map((score, i) => (
          <motion.div
            key={i}
            className="absolute text-[9px] font-medium px-2 py-1 rounded-md bg-blue-100 text-blue-600 border border-blue-200"
            style={{
              top: `${40 + i * 22}%`,
              left: "10%",
              width: "80%"
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
          >
            <div className="flex justify-between items-center">
              <span>{score.condition}</span>
              <span className="font-bold">{score.hcc}</span>
            </div>
            <motion.div 
              className="mt-1 w-full h-1.5 bg-blue-200 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${score.score * 100}%` }}
                transition={{ delay: 1.2 + i * 0.2, duration: 0.7 }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Compliance Indicator */}
        <motion.div
          className="absolute bottom-[12%] right-[15%] text-xs font-medium px-1.5 py-1 rounded-full bg-green-100 text-green-600 border border-green-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          <div className="flex items-center gap-1">
            <CheckCircle2 size={12} />
            <span className="text-[9px]">Compliant</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
