
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Database } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const DeployBravoPreview = () => {
  return (
    <motion.div 
      className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        {/* Incoming Call Card */}
        <motion.div 
          className="p-4 rounded-lg border border-gray-100"
          animate={{ boxShadow: ['0px 0px 0px rgba(81,146,174,0)', '0px 0px 20px rgba(81,146,174,0.2)', '0px 0px 0px rgba(81,146,174,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Incoming Call</span>
            </div>
            <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
              Call Answered
            </span>
          </div>
          
          {/* Live Transcription */}
          <div className="space-y-2">
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MessageSquare className="w-4 h-4 mt-1 text-gray-400" />
              <motion.p 
                className="text-sm text-gray-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.7 }}
              >
                "Hi, I'd like to schedule an appointment..."
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* EHR Integration */}
        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">EHR Connected</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded-full w-3/4" />
            <div className="h-2 bg-gray-200 rounded-full w-1/2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
