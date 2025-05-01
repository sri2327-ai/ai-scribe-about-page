
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PracticeSelectorProps {
  onSelect: (plan: string) => void;
}

export const PracticeTypeSelector = ({ onSelect }: PracticeSelectorProps) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const practiceTypes = [
    { 
      id: 'solo',
      name: 'Solo Practice', 
      description: '1 provider seeing patients independently',
      recommendedPlan: 'crush-basic-ehr'
    },
    { 
      id: 'small', 
      name: 'Small Practice', 
      description: '2-5 providers working together',
      recommendedPlan: 'crush-pro'
    },
    { 
      id: 'medium', 
      name: 'Mid-sized Group', 
      description: '6-20 providers across one or more locations',
      recommendedPlan: 'bundle-pro'
    },
    { 
      id: 'large', 
      name: 'Large Group', 
      description: '20+ providers or multi-location practice',
      recommendedPlan: 'bundle-enterprise'
    },
    { 
      id: 'telehealth', 
      name: 'Telehealth Practice', 
      description: 'Primarily virtual patient visits',
      recommendedPlan: 'crush-pro'
    }
  ];

  const handleTypeSelect = (type: string, plan: string) => {
    setSelectedType(type);
    setRecommendation(plan);
  };

  const getPlanDisplayName = (planId: string) => {
    switch(planId) {
      case 'crush-basic-no-ehr':
        return 'CRUSH Basic (No EHR)';
      case 'crush-basic-ehr':
        return 'CRUSH Basic (With EHR)';
      case 'crush-pro':
        return 'CRUSH Pro';
      case 'bravo-basic':
        return 'BRAVO Basic';
      case 'bravo-pro':
        return 'BRAVO Pro';
      case 'bundle-basic-no-ehr':
        return 'Bundle Basic (No EHR)';
      case 'bundle-basic-ehr':
        return 'Bundle Basic (With EHR)';
      case 'bundle-pro':
        return 'Bundle Pro';
      case 'bundle-enterprise':
        return 'Enterprise Solution';
      default:
        return planId;
    }
  };

  const handleContinue = () => {
    if (recommendation) {
      onSelect(recommendation);
      
      // Scroll to pricing section
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]">
              Which Solution Is Right For Your Practice?
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-[#387E89]">
              Select your practice type below, and we'll recommend the perfect plan to maximize efficiency and patient satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {practiceTypes.map((type) => (
              <Card 
                key={type.id}
                onClick={() => handleTypeSelect(type.id, type.recommendedPlan)}
                className={`p-6 transition-all cursor-pointer hover:shadow-lg ${
                  selectedType === type.id 
                    ? 'border-2 border-[#387E89] bg-blue-50' 
                    : 'border border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#143151]">{type.name}</h3>
                  {selectedType === type.id && <Check className="h-5 w-5 text-[#387E89]" />}
                </div>
                <p className="text-sm text-gray-600">{type.description}</p>
              </Card>
            ))}
          </div>

          {recommendation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 bg-white p-6 rounded-xl shadow-md border border-[#387E89]/20"
            >
              <div className="flex items-center mb-4">
                <Badge className="mr-3 bg-[#387E89] text-white">Recommended</Badge>
                <h3 className="text-xl font-semibold text-[#143151]">
                  {getPlanDisplayName(recommendation)}
                </h3>
              </div>
              <p className="mb-6 text-gray-600">
                Based on your practice type, we recommend {getPlanDisplayName(recommendation)} for optimal results. 
                This plan will provide the right balance of features and affordability for your needs.
              </p>
              <Button 
                onClick={handleContinue}
                className="rounded-full py-2 px-6 bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90 text-white"
              >
                See Pricing Details
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
