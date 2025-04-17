
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, FileText, MessageSquare, Phone, Mail } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';

export const FrontOfficeAnimation = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Chat/Call animation */}
      <motion.div 
        className="absolute top-0 left-0 bg-white rounded-lg shadow-md overflow-hidden w-[300px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 space-y-4">
          <div className="flex items-start gap-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-500" />
            </div>
            <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
              <p className="text-sm text-gray-700">Hi, how can I help you today?</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-blue-500 rounded-2xl p-3 max-w-[80%]">
              <p className="text-sm text-white">I need to schedule an appointment</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-500" />
            </div>
            <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
              <p className="text-sm text-gray-700">I'll help you schedule that. What's your preferred time?</p>
            </div>
          </div>
          
          <motion.div 
            className="flex items-center justify-center gap-2 mt-4 p-3 bg-green-50 rounded-lg border border-green-100"
            animate={{ 
              y: [0, -5, 0],
              boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Calling Patient...</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scheduling animation */}
      <motion.div 
        className="absolute top-0 right-0 bg-white rounded-lg shadow-md overflow-hidden w-[300px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-6">
            {["9:00 AM", "1:30 PM", "4:00 PM"].map((time, i) => (
              <motion.div 
                key={i}
                className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-center"
                whileHover={{ scale: 1.05, backgroundColor: "#EFF6FF" }}
                animate={{ 
                  y: i === 1 ? [0, -3, 0] : 0,
                  boxShadow: i === 1 ? 
                    ["0px 0px 0px rgba(0,0,0,0)", "0px 3px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"] : 
                    "none"
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: i * 0.5
                }}
              >
                <p className="text-sm text-blue-600 font-medium">{time}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-100"
            animate={{ 
              x: [0, 5, 0],
              boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700">Refill Request Scheduled</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Automated follow-ups animation */}
      <motion.div 
        className="absolute bottom-0 left-0 bg-white rounded-lg shadow-md overflow-hidden w-[300px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-center mb-2">
            <motion.div
              className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 10px rgba(59, 130, 246, 0.5)", "0px 0px 0px rgba(0,0,0,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
                <Bell className="w-5 h-5 text-blue-500" />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="p-3 rounded-lg bg-green-50 border border-green-100"
            animate={{ 
              y: [0, -3, 0],
              boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 3px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-green-600" />
              <p className="text-sm text-green-700">SMS Sent</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="p-3 rounded-lg bg-blue-50 border border-blue-100"
            animate={{ 
              y: [0, -3, 0],
              boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 3px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <p className="text-sm text-blue-700">Email Sent</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="p-3 rounded-lg bg-purple-50 border border-purple-100"
            animate={{ 
              y: [0, -3, 0],
              boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 3px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-600" />
              <p className="text-sm text-purple-700">Called and Reminded</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Clinical documentation animation */}
      <motion.div 
        className="absolute bottom-0 right-0 bg-white rounded-lg shadow-md overflow-hidden w-[300px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-1 mb-3 justify-center">
              {[1, 2, 3, 4, 5].map(star => (
                <motion.svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, 0] }}
                  transition={{ delay: 0.2 * star, duration: 0.5 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            
            <motion.p 
              className="text-sm text-center text-gray-700 font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Great experience!
            </motion.p>
            
            <motion.div 
              className="h-3 bg-gray-200 rounded w-full mb-2"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.8, duration: 1 }}
            />
            
            <motion.div 
              className="h-3 bg-gray-200 rounded w-2/3"
              initial={{ width: 0 }}
              animate={{ width: "66%" }}
              transition={{ delay: 2, duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
