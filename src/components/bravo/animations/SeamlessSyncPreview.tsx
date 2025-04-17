
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileCheck, UserCheck } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const SeamlessSyncPreview = () => {
  return (
    <motion.div 
      className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Insurance Verification */}
      <motion.div className="mb-4 p-4 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Insurance Status</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
            Verified
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-blue-100 rounded-full w-full" />
          <div className="h-2 bg-blue-100 rounded-full w-2/3" />
        </div>
      </motion.div>

      {/* Payment Processing */}
      <motion.div className="mb-4 p-4 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Payment Status</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
            Confirmed
          </span>
        </div>
      </motion.div>

      {/* Clinical Documentation */}
      <motion.div className="p-4 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Clinical Note</span>
          </div>
          <motion.span 
            className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Generated
          </motion.span>
        </div>
        <motion.div 
          className="space-y-2"
          animate={{ opacity: [0.7, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="h-2 bg-gray-200 rounded-full w-full" />
          <div className="h-2 bg-gray-200 rounded-full w-3/4" />
          <div className="h-2 bg-gray-200 rounded-full w-1/2" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
