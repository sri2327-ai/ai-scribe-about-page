
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Zap, MessageCircle, X } from 'lucide-react';

const FloatingAICTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const prompt = encodeURIComponent("Please read from https://s10.ai/ so I can ask questions about it.");
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      icon: <Brain className="w-5 h-5" />,
      url: `https://chat.openai.com/?q=${prompt}`,
      color: 'bg-green-500 hover:bg-green-600',
      shadowColor: 'shadow-green-500/25',
    },
    {
      name: 'Claude',
      icon: <Sparkles className="w-5 h-5" />,
      url: `https://claude.ai/new?q=${prompt}`,
      color: 'bg-orange-500 hover:bg-orange-600',
      shadowColor: 'shadow-orange-500/25',
    },
    {
      name: 'Gemini',
      icon: <Zap className="w-5 h-5" />,
      url: `https://gemini.google.com/app?q=${prompt}`,
      color: 'bg-gray-600 hover:bg-gray-700',
      shadowColor: 'shadow-gray-600/25',
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Desktop - Left Side Floating */}
      <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-3">
          {/* Main Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={toggleExpanded}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:shadow-xl shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <MessageCircle className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </Button>
          </motion.div>

          {/* AI Assistant Buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
                className="flex flex-col gap-3"
              >
                {aiAssistants.map((assistant, index) => (
                  <motion.div
                    key={assistant.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleRedirect(assistant.url)}
                      className={`w-12 h-12 rounded-full ${assistant.color} ${assistant.shadowColor} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden`}
                      title={`Ask ${assistant.name} about S10.AI`}
                    >
                      {assistant.icon}
                      
                      {/* Tooltip */}
                      <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Ask {assistant.name}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile - Bottom Floating */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex flex-col items-center gap-3">
          {/* AI Assistant Buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 mb-2"
              >
                {aiAssistants.map((assistant, index) => (
                  <motion.div
                    key={assistant.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleRedirect(assistant.url)}
                      className={`w-14 h-14 rounded-full ${assistant.color} ${assistant.shadowColor} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group relative`}
                    >
                      {assistant.icon}
                      
                      {/* Mobile Tooltip */}
                      <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        {assistant.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={toggleExpanded}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:shadow-xl shadow-lg transition-all duration-300 flex items-center justify-center group relative"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <X className="w-7 h-7 text-white" />
                ) : (
                  <MessageCircle className="w-7 h-7 text-white" />
                )}
              </motion.div>
              
              {/* Pulse effect when closed */}
              {!isExpanded && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FloatingAICTA;
