
import React from 'react';
import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Calendar, ClipboardCheck, Bell, FileText } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "AI Chat & Calls",
    description: "BRAVO connects with patients via chat and calls",
    color: "#143151",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
              <p className="text-sm">Hi, how can I help you today?</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="flex-1">
            <div className="bg-blue-500 rounded-2xl p-3 max-w-[80%] ml-auto">
              <p className="text-sm text-white">I need to schedule an appointment</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-100"></div>
        </div>
      </div>
    )
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Books appointments based on priority",
    color: "#387E89",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-3">
          <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-100 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-2 rounded bg-blue-50 border border-blue-100">
              <div className="text-xs text-center text-blue-600">
                {i === 1 ? "9:00 AM" : i === 2 ? "1:30 PM" : "4:00 PM"}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    icon: Bell,
    title: "Automated Follow-ups",
    description: "Sends reminders to reduce no-shows",
    color: "#5192AE",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <Bell className="w-5 h-5 text-blue-500" />
          <div>
            <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 p-2 rounded bg-green-50 border border-green-100">
            <p className="text-xs text-center text-green-600">SMS Sent</p>
          </div>
          <div className="flex-1 p-2 rounded bg-blue-50 border border-blue-100">
            <p className="text-xs text-center text-blue-600">Email Sent</p>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: ClipboardCheck,
    title: "Pre-visit Intake",
    description: "Handles questionnaires and documentation",
    color: "#143151",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded text-gray-300" />
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: FileText,
    title: "Clinical Summaries",
    description: "Prepares and sends visit summaries",
    color: "#387E89",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <div>
              <div className="h-4 bg-gray-100 rounded w-full"></div>
            </div>
          </div>
          <div className="p-2 rounded bg-gray-50 border border-gray-100">
            <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }
];

export const BravoWorkflowAnimation = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <motion.div
              className="flex flex-col gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${step.color}10` }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                className="ml-16"
              >
                {step.preview}
              </motion.div>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                className="absolute left-6 top-12 w-[1px] h-[calc(100%+1.5rem)] bg-gradient-to-b from-gray-200 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
