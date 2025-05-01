
import React, { memo } from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const PreCharting = memo(() => {
  const chartItems = [
    { label: "Vitals", value: "BP: 120/80" },
    { label: "Chief Complaint", value: "Headache" },
    { label: "Referral", value: "Neurology" }
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
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FileSpreadsheet size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
        </motion.div>

        {/* Chart Items Being Filled */}
        {chartItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 transform -translate-x-1/2 text-xs bg-white rounded-md shadow-sm border border-gray-200 p-1.5"
            style={{ top: `${20 + i * 30}%`, willChange: "transform, opacity" }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.3, duration: 0.4 }}
          >
            <div className="font-medium text-gray-600">{item.label}</div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8 + i * 0.3, duration: 0.5 }}
              className="h-0.5 bg-blue-400 my-1"
              style={{ willChange: "width" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.3, duration: 0.3 }}
              className="font-medium text-blue-600"
            >
              {item.value}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

PreCharting.displayName = 'PreCharting';
