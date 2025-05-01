
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Stethoscope, Building, Users, Activity, Heart, Brain, Baby } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

interface PracticeTypeSelectorProps {
  onSelect: (planType: string) => void;
}

export const PracticeTypeSelector: React.FC<PracticeTypeSelectorProps> = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const handleSelect = (type: string) => {
    setSelectedType(type);
    onSelect(type);
  };
  
  const practiceTypes = [
    { 
      id: 'solo', 
      name: 'Solo Provider', 
      icon: Stethoscope,
      description: 'Perfect for independent providers looking to save time and costs',
      plan: 'crush_basic'
    },
    { 
      id: 'small', 
      name: 'Small Practice', 
      icon: Users,
      description: '2-5 providers wanting to optimize workflows and reduce no-shows',
      plan: 'crush_plus'
    },
    { 
      id: 'clinic', 
      name: 'Clinic/Group', 
      icon: Building,
      description: '6+ providers seeking enterprise-grade solutions at scale',
      plan: 'bundle_enterprise'
    },
    { 
      id: 'specialty', 
      name: 'Specialty', 
      icon: Heart,
      description: 'For specialty practices with unique documentation needs',
      plan: 'crush_pro'
    },
    { 
      id: 'mental', 
      name: 'Mental Health', 
      icon: Brain,
      description: 'Solutions tailored for behavioral health and psychiatry',
      plan: 'bundle_standard'
    },
    { 
      id: 'pediatrics', 
      name: 'Pediatrics', 
      icon: Baby,
      description: 'Designed for the specific needs of pediatric practices',
      plan: 'crush_plus'
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]">
              Which Solution Is Right for Your Practice?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
              Select your practice type for a custom recommendation or explore our comprehensive pricing options below.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {practiceTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              
              return (
                <motion.div key={type.id} variants={itemVariants}>
                  <Card 
                    className={`p-6 cursor-pointer transition-all duration-300 h-full flex flex-col ${
                      isSelected 
                        ? 'border-[#387E89] shadow-lg' 
                        : 'border-gray-200 hover:border-[#387E89]/50 hover:shadow-md'
                    }`}
                    onClick={() => handleSelect(type.id)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#143151] to-[#387E89]'
                          : 'bg-gradient-to-r from-gray-200 to-gray-100'
                      }`}>
                        <Icon size={24} className={isSelected ? 'text-white' : 'text-gray-600'} />
                      </div>
                      <h3 className="text-xl font-semibold ml-4 text-[#143151]">{type.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 flex-grow">{type.description}</p>
                    
                    <div className={`mt-2 flex justify-end ${isSelected ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                      <Button
                        variant="link"
                        className="p-0 text-[#387E89] font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(type.plan);
                          const pricingSection = document.getElementById('pricing');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        View Recommendations
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
