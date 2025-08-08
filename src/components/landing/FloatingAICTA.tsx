import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Brain, Sparkles, Zap, ChevronRight, X, Search, Compass } from 'lucide-react';

const FloatingAICTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get current page URL dynamically
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://s10.ai/';
  const prompt = encodeURIComponent(`Please visit the following URL: ${currentUrl} and read the content on the page.

Summarize the page clearly and concisely, highlighting:

• Key features and capabilities of S10.AI
• Main benefits for users or customers  
• Any unique value propositions or differentiators mentioned
• Relevant technical or implementation details

The goal is to produce a summary that allows me to ask informed and specific questions based on the exact content from that page.`);
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      description: 'Get instant AI insights about S10.AI',
      icon: MessageSquare,
      url: `https://chat.openai.com/?q=${prompt}`,
      gradient: 'from-emerald-500 to-teal-600',
      hoverGradient: 'from-emerald-400 to-teal-500',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/80'
    },
    {
      name: 'Claude',
      description: 'Explore features with Claude AI',
      icon: Brain,
      url: `https://claude.ai/new?q=${prompt}`,
      gradient: 'from-orange-500 to-red-600',
      hoverGradient: 'from-orange-400 to-red-500',
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50/80'
    },
    {
      name: 'Gemini',
      description: 'Discover solutions with Google AI',
      icon: Sparkles,
      url: `https://gemini.google.com/app?q=${prompt}`,
      gradient: 'from-blue-500 to-indigo-600',
      hoverGradient: 'from-blue-400 to-indigo-500',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50/80'
    },
    {
      name: 'Perplexity',
      description: 'Quick web answers about this page',
      icon: Compass,
      url: `https://www.perplexity.ai/search?q=${prompt}`,
      gradient: 'from-violet-500 to-purple-600',
      hoverGradient: 'from-violet-400 to-purple-500',
      iconColor: 'text-violet-600',
      bgColor: 'bg-violet-50/80'
    },
    {
      name: 'Google AI Overviews',
      description: 'See AI Overview results on Google',
      icon: Search,
      url: `https://www.google.com/search?udm=50&q=${prompt}`,
      gradient: 'from-green-500 to-emerald-600',
      hoverGradient: 'from-green-400 to-emerald-500',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/80'
    },
    {
      name: 'Grok',
      description: 'Ask Grok about healthcare AI',
      icon: Zap,
      url: `https://grok.com/?q=${prompt}`,
      gradient: 'from-gray-700 to-black',
      hoverGradient: 'from-gray-600 to-gray-800',
      iconColor: 'text-gray-700',
      bgColor: 'bg-gray-50/80'
    }
  ];

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoaded(true), 100);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleRedirect = (url: string) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  // Don't render anything until visible
  if (!isVisible) {
    return <div ref={containerRef} style={{ position: 'fixed', bottom: 0, left: 0, width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 left-6 z-[1000] flex flex-col items-start gap-2"
    >
      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative group bg-gradient-to-r from-[#143151] to-[#387E89] text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/10 backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <MessageSquare size={20} />
              <span className="text-sm font-medium hidden sm:block">Ask AI</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse indicator when collapsed */}
        {!isExpanded && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* AI Assistants Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 min-w-[280px] max-w-[320px]"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Ask AI about S10.AI</h3>
              <p className="text-sm text-gray-600">Get instant insights and answers</p>
            </div>

            {/* AI Assistant Cards */}
            <div className="space-y-2">
              {aiAssistants.map((assistant, index) => (
                <motion.button
                  key={assistant.name}
                  onClick={() => handleRedirect(assistant.url)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full p-3 rounded-xl border border-gray-200/50 hover:border-gray-300/80 transition-all duration-200 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${assistant.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    layoutId={`bg-${index}`}
                  />
                  
                  <div className="relative flex items-center gap-3">
                    {/* Icon container */}
                    <div className={`p-2 rounded-lg ${assistant.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                      <assistant.icon 
                        size={20} 
                        className={`${assistant.iconColor} group-hover:scale-110 transition-transform duration-200`}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-left">
                      <div className="font-medium text-gray-800 text-sm group-hover:text-gray-900 transition-colors">
                        {assistant.name}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                        {assistant.description}
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <ChevronRight 
                      size={16} 
                      className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" 
                    />
                  </div>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"
                    style={{ willChange: 'transform' }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200/50">
              <p className="text-xs text-gray-500 text-center">
                Click any assistant to start chatting about this page
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingAICTA;