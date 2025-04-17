
import React from "react";
import { motion } from "framer-motion";
import { LineChart, History, Calendar } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const LongitudinalIntelligence = () => {
  // Visit history data
  const visitHistory = [
    { date: "01/15", notes: "Hypertension" },
    { date: "03/22", notes: "Follow-up" },
    { date: "Today", notes: "Check-up" }
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
        
        {/* Center icon for longitudinal intelligence */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <LineChart size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="absolute top-[25%] left-[15%] w-[70%] h-0.5 bg-blue-300"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ originX: 0 }}
        />

        {/* Visit Timeline Points */}
        {visitHistory.map((visit, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="absolute w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white"
              style={{
                top: "25%",
                left: `${15 + (i * 28)}%`,
                marginTop: "-4px",
                zIndex: 2
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + (i * 0.2), duration: 0.3 }}
            />
            
            <motion.div
              className="absolute text-[9px] font-medium"
              style={{
                top: "32%",
                left: `${14 + (i * 28)}%`,
                width: "50px",
                textAlign: i === 2 ? "right" : "center"
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (i * 0.2), duration: 0.4 }}
            >
              {visit.date}
            </motion.div>
          </React.Fragment>
        ))}

        {/* Previous Visit Context */}
        <motion.div
          className="absolute left-[10%] text-[9px] px-2 py-1 rounded-md bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-1"
          style={{ top: "45%" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <History size={10} />
          <span>Previous: BP 130/85</span>
        </motion.div>

        {/* Current Analysis */}
        <motion.div
          className="absolute right-[10%] text-[9px] px-2 py-1 rounded-md bg-green-100 text-green-700 border border-green-200 flex items-center gap-1"
          style={{ top: "45%" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <span>Current: BP 120/80</span>
        </motion.div>

        {/* Trend Analysis */}
        <motion.div
          className="absolute bottom-[15%] left-[50%] transform -translate-x-1/2 text-[9px] px-2 py-1 rounded-md bg-purple-100 text-purple-700 border border-purple-200 flex items-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <span>Trend: Improving</span>
        </motion.div>
      </div>
    </div>
  );
};
