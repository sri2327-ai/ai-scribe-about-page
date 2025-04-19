
import React from 'react';
import DisplayCards from "@/components/ui/display-cards";
import { Brain, Zap, TrendingUp } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

const cards = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "Smarter Than Simple Automations",
    description: "Understands clinical context—not just 'if-this-then-that' logic.",
    iconClassName: "bg-gradient-to-r from-[#143151] to-[#387E89]",
    titleClassName: "text-[#143151]",
    className: "md:col-span-2"
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Fast Setup, Easy Scaling",
    description: "Deployed in less than a week. New workflows? Add them anytime.",
    iconClassName: "bg-gradient-to-r from-[#387E89] to-[#5192AE]",
    titleClassName: "text-[#387E89]",
    className: "md:col-span-1"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Real Impact, Proven ROI",
    description: "Used by 1,000+ clinicians to save 10–20 hours per week, improve documentation quality, and cut admin overhead.",
    iconClassName: "bg-gradient-to-r from-[#5192AE] to-[#A5CCF3]",
    titleClassName: "text-[#5192AE]",
    className: "md:col-span-1"
  }
];

export const CAWhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: customAIAgentColors.primary }}>
          Why Choose Custom AI Agents?
        </h2>
        <div className="max-w-6xl mx-auto">
          <DisplayCards cards={cards} />
        </div>
      </div>
    </section>
  );
};
