import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, MessageSquare, Calendar, Bell, ClipboardCheck, FileText, Users, UserPlus, User, LayoutDashboard, Settings, HelpCircle, ArrowUpRight, ArrowDownRight, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, PhoneCall, Mail, Phone, Database, FileTextIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BeamsBackground } from "@/components/ui/beams-background";
import { Button } from "@/components/ui/button";
import { LazyLoad } from "@/components/ui/lazy-load";
import { safeMotionStyle } from '@/lib/framer-motion-fixes';
import { safeAnimateProp } from '@/lib/safe-motion-animate';

const bravoColors = {
  primary: '#143151',
  secondary: '#387E89',
  accent: '#5192AE',
  light: '#A5CCF3',
  highlight: '#E9F4FD',
};

const bentoData = [
  {
    id: 'ai-chat',
    title: 'AI Chat & Calls',
    description: 'BRAVO connects with patients via chat and calls',
    icon: MessageSquare,
    color: bravoColors.primary,
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
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
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
                <p className="text-sm">I'll help you schedule that. What's your preferred time?</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 p-2 bg-green-50 rounded-lg border border-green-100">
            <PhoneCall className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-700">Calling Patient...</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling',
    description: 'Books appointments and manages refills',
    icon: Calendar,
    color: bravoColors.secondary,
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-2 rounded bg-blue-50 border border-blue-100">
                <div className="text-xs text-center text-blue-600">
                  {i === 1 ? "9:00 AM" : i === 2 ? "1:30 PM" : "4:00 PM"}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-100">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-xs text-orange-700">Refill Request Scheduled</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'automated-followups',
    title: 'Automated Follow-ups',
    description: 'Sends reminders through multiple channels',
    icon: Bell,
    color: bravoColors.accent,
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <Bell className="w-5 h-5 text-blue-500" />
          <div>
            <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="p-2 rounded bg-green-50 border border-green-100">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-green-600" />
              <p className="text-xs text-green-600">SMS Sent</p>
            </div>
          </div>
          <div className="p-2 rounded bg-blue-50 border border-blue-100">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <p className="text-xs text-blue-600">Email Sent</p>
            </div>
          </div>
          <div className="p-2 rounded bg-purple-50 border border-purple-100">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-600" />
              <p className="text-xs text-purple-600">Called and Reminded</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'previsit-intake',
    title: 'Pre-visit Intake',
    description: 'Handles questionnaires and documentation',
    icon: ClipboardCheck,
    color: bravoColors.primary,
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
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-blue-700">Clinical Summary Generated</span>
            </div>
            <div className="h-3 bg-blue-100 rounded w-full mb-1"></div>
            <div className="h-3 bg-blue-100 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'postvisit-feedback',
    title: 'Post-visit Patient Feedback',
    description: 'Collects and analyzes patient feedback',
    icon: FileText,
    color: bravoColors.secondary,
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <div className="flex-1">
              <div className="h-4 bg-gray-100 rounded w-full"></div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">Great experience!</span>
            </div>
            <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }
];

const AnimatedCard = ({ item, isExpanded, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden transform-gpu cursor-pointer group"
      style={safeMotionStyle({ backgroundColor: 'rgba(255,255,255,0.8)' })}
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(/images/bravo/bkg-bravo-tile.svg)` }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={safeMotionStyle({ backgroundColor: `${item.color}10` })}
            layout
          >
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </motion.div>
          <div>
            <motion.h3 className="text-lg font-semibold text-gray-900" layout>
              {item.title}
            </motion.h3>
            <motion.p className="text-sm text-gray-600" layout>
              {item.description}
            </motion.p>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.preview}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
        animate={safeAnimateProp({ 
          boxShadow: ["0 0 0px rgba(81, 146, 174, 0)", "0 0 20px rgba(81, 146, 174, 0.3)", "0 0 0px rgba(81, 146, 174, 0)"] 
        })}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      />
    </motion.div>
  );
};

const AnimatedCard2 = ({ item, isExpanded, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden transform-gpu cursor-pointer group"
      style={safeMotionStyle({ backgroundColor: 'rgba(255,255,255,0.8)' })}
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(/images/bravo/bkg-bravo-tile.svg)` }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={safeMotionStyle({ backgroundColor: `${item.color}10` })}
            layout
          >
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </motion.div>
          <div>
            <motion.h3 className="text-lg font-semibold text-gray-900" layout>
              {item.title}
            </motion.h3>
            <motion.p className="text-sm text-gray-600" layout>
              {item.description}
            </motion.p>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.preview}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
        animate={safeAnimateProp({ 
          boxShadow: ["0 0 0px rgba(81, 146, 174, 0)", "0 0 20px rgba(81, 146, 174, 0.3)", "0 0 0px rgba(81, 146, 174, 0)"] 
        })}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      />
    </motion.div>
  );
};

const AnimatedCard3 = ({ item, isExpanded, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden transform-gpu cursor-pointer group"
      style={safeMotionStyle({ backgroundColor: 'rgba(255,255,255,0.8)' })}
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(/images/bravo/bkg-bravo-tile.svg)` }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={safeMotionStyle({ backgroundColor: `${item.color}10` })}
            layout
          >
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </motion.div>
          <div>
            <motion.h3 className="text-lg font-semibold text-gray-900" layout>
              {item.title}
            </motion.h3>
            <motion.p className="text-sm text-gray-600" layout>
              {item.description}
            </motion.p>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.preview}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
        animate={safeAnimateProp({ 
          boxShadow: ["0 0 0px rgba(81, 146, 174, 0)", "0 0 20px rgba(81, 146, 174, 0.3)", "0 0 0px rgba(81, 146, 174, 0)"] 
        })}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      />
    </motion.div>
  );
};

const AnimatedCard4 = ({ item, isExpanded, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden transform-gpu cursor-pointer group"
      style={safeMotionStyle({ backgroundColor: 'rgba(255,255,255,0.8)' })}
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(/images/bravo/bkg-bravo-tile.svg)` }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={safeMotionStyle({ backgroundColor: `${item.color}10` })}
            layout
          >
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </motion.div>
          <div>
            <motion.h3 className="text-lg font-semibold text-gray-900" layout>
              {item.title}
            </motion.h3>
            <motion.p className="text-sm text-gray-600" layout>
              {item.description}
            </motion.p>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.preview}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
        animate={safeAnimateProp({ 
          boxShadow: ["0 0 0px rgba(81, 146, 174, 0)", "0 0 20px rgba(81, 146, 174, 0.3)", "0 0 0px rgba(81, 146, 174, 0)"] 
        })}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      />
    </motion.div>
  );
};

const AnimatedCard5 = ({ item, isExpanded, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden transform-gpu cursor-pointer group"
      style={safeMotionStyle({ backgroundColor: 'rgba(255,255,255,0.8)' })}
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(/images/bravo/bkg-bravo-tile.svg)` }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={safeMotionStyle({ backgroundColor: `${item.color}10` })}
            layout
          >
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </motion.div>
          <div>
            <motion.h3 className="text-lg font-semibold text-gray-900" layout>
              {item.title}
            </motion.h3>
            <motion.p className="text-sm text-gray-600" layout>
              {item.description}
            </motion.p>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.preview}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
        animate={safeAnimateProp({ 
          boxShadow: ["0 0 0px rgba(20,49,81,0)", "0 0 15px rgba(20,49,81,0.2)", "0 0 0px rgba(20,49,81,0)"] 
        })}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      />
    </motion.div>
  );
};

export const BravoAutomationBentoGrid = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <BeamsBackground className="py-16 px-4 md:px-6 relative overflow-hidden" intensity="medium">
      <div className="container mx-auto relative max-w-5xl">
        <LazyLoad threshold={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-sans">
              Automate Your Entire Patient Workflow
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto font-sans text-white/80">
              BRAVO handles everything from initial contact to post-visit feedback
            </p>
          </motion.div>
        </LazyLoad>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <AnimatedCard
            item={bentoData[0]}
            isExpanded={expandedCard === bentoData[0].id}
            onClick={() => handleCardClick(bentoData[0].id)}
          />
          <AnimatedCard2
            item={bentoData[1]}
            isExpanded={expandedCard === bentoData[1].id}
            onClick={() => handleCardClick(bentoData[1].id)}
          />
          <AnimatedCard3
            item={bentoData[2]}
            isExpanded={expandedCard === bentoData[2].id}
            onClick={() => handleCardClick(bentoData[2].id)}
          />
          <AnimatedCard4
            item={bentoData[3]}
            isExpanded={expandedCard === bentoData[3].id}
            onClick={() => handleCardClick(bentoData[3].id)}
          />
          <AnimatedCard5
            item={bentoData[4]}
            isExpanded={expandedCard === bentoData[4].id}
            onClick={() => handleCardClick(bentoData[4].id)}
          />
        </div>
      </div>
    </BeamsBackground>
  );
};
