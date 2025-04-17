
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, ClipboardCheck } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const FrontOfficePreview = () => {
  return (
    <motion.div 
      className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Appointment Scheduling */}
      <motion.div className="mb-4 p-4 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Appointment Request</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
            Confirmed
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['9:00 AM', '1:30 PM', '4:00 PM'].map((time, i) => (
            <motion.div
              key={time}
              className="p-2 text-xs text-center rounded bg-blue-50 text-blue-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {time}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Refill Processing */}
      <motion.div className="mb-4 p-4 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Refill Request</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
            Approved
          </span>
        </div>
      </motion.div>

      {/* Intake Form */}
      <motion.div className="p-4 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Patient Intake</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-full">
            In Progress
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded-full w-3/4" />
          <div className="h-2 bg-gray-200 rounded-full w-1/2" />
        </div>
      </motion.div>
    </motion.div>
  );
};
