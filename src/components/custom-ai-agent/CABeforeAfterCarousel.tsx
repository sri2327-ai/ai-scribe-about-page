import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Component, MessageSquare, FileText, Calendar, Layers, Clock, LayoutDashboard } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

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
  
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full bg-white">
        <CardContent className="p-6 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg" style={{ backgroundColor: `${customAIAgentColors.tertiary}20` }}>
              <Icon className="w-6 h-6" style={{ color: customAIAgentColors.primary }} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: customAIAgentColors.primary }}>{step}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-3 text-red-600">Before AI</h4>
              <div className="flex-1 p-4 rounded-lg bg-red-50/50 border border-red-100">
                <div className="mb-4 p-3 bg-white rounded-lg shadow-sm border border-red-100">
                  <div className="w-full h-3 bg-red-100 rounded mb-2" />
                  <div className="w-2/3 h-3 bg-red-50 rounded" />
                </div>
                <p className="text-gray-600 mb-3">{before}</p>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100" />
                  <div className="flex-1">
                    <div className="h-2 w-3/4 bg-red-100 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-red-50 rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-3 text-green-600">After AI</h4>
              <div className="flex-1 p-4 rounded-lg bg-green-50/50 border border-green-100">
                <div className="mb-4 p-3 bg-white rounded-lg shadow-sm border border-green-100">
                  <div className="w-full h-3 bg-green-100 rounded mb-2" />
                  <div className="w-2/3 h-3 bg-green-50 rounded" />
                </div>
                <p className="text-gray-600 mb-3">{after}</p>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100" />
                  <div className="flex-1">
                    <div className="h-2 w-3/4 bg-green-100 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-green-50 rounded" />
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: customAIAgentColors.primary }}>
            Before vs. After AI Agent
          </h2>
          <p className="text-lg mb-8" style={{ color: customAIAgentColors.text.secondary }}>
            See how our AI agents transform your daily workflow with intelligent automation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-6">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2">
            {workflowData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                style={{ 
                  backgroundColor: index === activeIndex 
                    ? customAIAgentColors.primary 
                    : undefined 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
