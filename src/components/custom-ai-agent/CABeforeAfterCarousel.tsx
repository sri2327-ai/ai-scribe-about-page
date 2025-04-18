
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Component, 
  MessageSquare, 
  FileText, 
  Calendar, 
  LayoutDashboard,
  Clock,
  Layers,
  ArrowRight
} from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { useIsMobile } from '@/hooks/use-mobile';
import { useWindowSize } from '@/hooks/use-window-size';

const workflowData = [
  {
    step: "Patient Intake",
    before: "Manual data entry from forms",
    after: "Auto-sync from CRM to EHR",
    icon: LayoutDashboard
  },
  {
    step: "Faxed Lab Result",
    before: "Staff opens, reads, retypes into EHR",
    after: "AI reads, extracts & enters into EHR",
    icon: FileText
  },
  {
    step: "Appointment Reschedule",
    before: "Multiple phone calls & emails",
    after: "AI finds slot + sends confirmation",
    icon: Calendar
  },
  {
    step: "AI Scribe Note Handling",
    before: "Copy/paste between tools",
    after: "AI auto-pastes structured note into EHR",
    icon: Component
  },
  {
    step: "Insurance Pre-Auth",
    before: "45+ mins per case",
    after: "AI completes & tracks automatically",
    icon: Clock
  },
  {
    step: "Patient Emails",
    before: "Inbox overload",
    after: "AI triages & replies in real-time",
    icon: MessageSquare
  }
];

interface CarouselCardProps {
  step: string;
  before: string;
  after: string;
  icon: React.ElementType;
  index: number;
  activeIndex: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ step, before, after, icon: Icon, index, activeIndex }) => {
  const isActive = index === activeIndex;
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full bg-white">
        <CardContent className={`p-4 sm:p-6 h-full ${isMobile ? 'overflow-y-auto' : ''}`}>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 rounded-lg" style={{ backgroundColor: `${customAIAgentColors.tertiary}20` }}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: customAIAgentColors.primary }} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: customAIAgentColors.primary }}>{step}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col h-full">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-red-600">Before AI</h4>
              <div className="flex-1 p-3 sm:p-4 rounded-lg bg-red-50/50 border border-red-100">
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-red-100">
                  <div className="w-full h-2 sm:h-3 bg-red-100 rounded mb-2"></div>
                  <div className="w-2/3 h-2 sm:h-3 bg-red-50 rounded"></div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">{before}</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100"></div>
                  <div className="flex-1">
                    <div className="h-1.5 sm:h-2 w-3/4 bg-red-100 rounded mb-1 sm:mb-2"></div>
                    <div className="h-1.5 sm:h-2 w-1/2 bg-red-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-green-600">After AI</h4>
              <div className="flex-1 p-3 sm:p-4 rounded-lg bg-green-50/50 border border-green-100">
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-green-100">
                  <div className="w-full h-2 sm:h-3 bg-green-100 rounded mb-2"></div>
                  <div className="w-2/3 h-2 sm:h-3 bg-green-50 rounded"></div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">{after}</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100"></div>
                  <div className="flex-1">
                    <div className="h-1.5 sm:h-2 w-3/4 bg-green-100 rounded mb-1 sm:mb-2"></div>
                    <div className="h-1.5 sm:h-2 w-1/2 bg-green-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const CABeforeAfterCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const { width } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + workflowData.length) % workflowData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % workflowData.length);
  };

  const cardHeight = isMobile ? (width < 640 ? '450px' : '400px') : '400px';

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: customAIAgentColors.primary }}>
            Before vs. After AI Agent
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto" style={{ color: customAIAgentColors.text.secondary }}>
            See how our AI agents transform your daily workflow with intelligent automation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6" style={{ height: cardHeight }}>
            {workflowData.map((item, index) => (
              <CarouselCard
                key={index}
                step={item.step}
                before={item.before}
                after={item.after}
                icon={item.icon}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 rounded-full z-10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 rounded-full z-10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mb-8 sm:mb-12">
            {workflowData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View slide ${index + 1}`}
                style={{ 
                  backgroundColor: index === activeIndex 
                    ? customAIAgentColors.primary 
                    : undefined 
                }}
              />
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 md:mt-20 max-w-3xl mx-auto px-4"
        >
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2" style={{ color: customAIAgentColors.text.secondary }}>
            S10.AI connects with your tools, works with your staff, and delivers immediate impact—no code, no friction, no disruption.
          </p>
          <Button 
            className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl w-full sm:w-auto"
          >
            Book a discovery call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
