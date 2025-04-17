
import React from 'react';
import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Calendar, ClipboardCheck, Bell, FileText } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "AI Chat & Calls",
    description: "BRAVO connects with patients via chat and calls",
    color: "#143151"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Books appointments based on priority",
    color: "#387E89"
  },
  {
    icon: Bell,
    title: "Automated Follow-ups",
    description: "Sends reminders to reduce no-shows",
    color: "#5192AE"
  },
  {
    icon: ClipboardCheck,
    title: "Pre-visit Intake",
    description: "Handles questionnaires and documentation",
    color: "#143151"
  },
  {
    icon: FileText,
    title: "Clinical Summaries",
    description: "Prepares and sends visit summaries",
    color: "#387E89"
  }
];

export const BravoWorkflowAnimation = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 relative overflow-hidden">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative p-4"
          >
            <motion.div
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${step.color}10` }}
              >
                <Icon className="w-6 h-6" style={{ color: step.color }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
