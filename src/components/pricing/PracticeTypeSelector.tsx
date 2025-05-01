
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Users, Hospital, HeartPulse, Brain, Tooth } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

interface PracticeTypeSelectorProps {
  onSelect: (practiceType: string) => void;
}

export const PracticeTypeSelector = ({ onSelect }: PracticeTypeSelectorProps) => {
  const [selectedPractice, setSelectedPractice] = useState<string>('');
  
  const handleSelect = (practiceType: string) => {
    setSelectedPractice(practiceType);
    onSelect(practiceType);
  };
  
  const practiceTypes = [
    { 
      id: 'solo', 
      title: 'Solo Practice', 
      icon: Stethoscope,
      description: 'Perfect for independent clinicians'
    },
    { 
      id: 'group', 
      title: 'Group Practice', 
      icon: Users,
      description: 'Ideal for 2-10 providers'
    },
    { 
      id: 'enterprise', 
      title: 'Enterprise', 
      icon: Hospital,
      description: 'For hospitals & large organizations'
    },
    { 
      id: 'specialty_mental', 
      title: 'Mental Health', 
      icon: Brain,
      description: 'Therapists & psychiatrists'
    },
    { 
      id: 'specialty_primary', 
      title: 'Primary Care', 
      icon: HeartPulse,
      description: 'Family medicine & internists'
    },
    { 
      id: 'specialty_dental', 
      title: 'Dental', 
      icon: Tooth,
      description: 'For dental practices'
    },
  ];

  // SVG gradient definition
  const iconGradientStyle = {
    background: `linear-gradient(to right, ${crushAIColors.primaryFlat}, ${crushAIColors.secondaryFlat})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]">
            Which Solution Is Right for Your Practice?
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#387E89]">
            Tell us about your practice, and we'll recommend the optimal solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {practiceTypes.map((practice) => (
            <motion.div
              key={practice.id}
              className={`border rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedPractice === practice.id 
                ? 'border-2 border-[#387E89] bg-[#387E89]/5' 
                : 'border-gray-200 hover:border-[#387E89]/50'
              }`}
              onClick={() => handleSelect(practice.id)}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: selectedPractice === practice.id 
                      ? `linear-gradient(to right, ${crushAIColors.primaryFlat}, ${crushAIColors.secondaryFlat})` 
                      : '#EBF5F7'
                  }}
                >
                  <practice.icon 
                    size={32} 
                    className={selectedPractice === practice.id ? "text-white" : ""}
                    style={selectedPractice === practice.id ? {} : iconGradientStyle}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#143151]">{practice.title}</h3>
                <p className="text-sm text-gray-600">{practice.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              // Scroll to pricing section
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Recommendations
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
