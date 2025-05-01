
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Stethoscope, Building, Users, Activity, Heart } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface PracticeTypeSelectorProps {
  onSelect: (planType: string) => void;
}

export const PracticeTypeSelector: React.FC<PracticeTypeSelectorProps> = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  
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
      name: 'Clinic/Group/Enterprise', 
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
    }
  ];
  
  // Define product recommendations
  const productRecommendations = {
    crush: {
      'solo': { name: 'CRUSH Basic', description: 'Perfect for solo providers', price: '$99/month' },
      'small': { name: 'CRUSH Plus', description: 'Ideal for small practices', price: '$149-$199/provider/month' },
      'clinic': { name: 'Bundle Enterprise', description: 'Complete solution for clinics & groups', price: 'Custom pricing' },
      'specialty': { name: 'CRUSH Pro', description: 'Advanced features for specialty practices', price: 'Custom pricing' }
    },
    bravo: {
      'solo': { name: 'BRAVO Basic', description: 'Streamlined patient management', price: '$99/month' },
      'small': { name: 'BRAVO Pro', description: 'Enhanced patient engagement', price: 'Up to $299/month' },
      'clinic': { name: 'BRAVO Enterprise', description: 'Multi-clinic management', price: 'Custom pricing' },
      'specialty': { name: 'BRAVO Pro', description: 'Specialty-specific workflows', price: 'Up to $299/month' }
    },
    bundle: {
      'solo': { name: 'Basic Bundle', description: 'CRUSH + BRAVO with discount', price: 'From $159/month' },
      'small': { name: 'Plus Bundle', description: 'Premium integration package', price: 'From $199/month' },
      'clinic': { name: 'Enterprise Bundle', description: 'Complete enterprise solution', price: 'Custom pricing' },
      'specialty': { name: 'Pro Bundle', description: 'Specialty-specific bundle', price: 'Custom pricing' }
    }
  };
  
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
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#143151]">
              Which Solution Is Right for Your Practice?
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
              Select your practice type for a custom recommendation or explore our comprehensive pricing options below.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
                    className={`p-4 md:p-6 cursor-pointer transition-all duration-300 h-full flex flex-col ${
                      isSelected 
                        ? 'border-[#387E89] shadow-lg' 
                        : 'border-gray-200 hover:border-[#387E89]/50 hover:shadow-md'
                    }`}
                    onClick={() => handleSelect(type.id)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#143151] to-[#387E89]'
                          : 'bg-gradient-to-r from-gray-200 to-gray-100'
                      }`}>
                        <Icon size={20} className={isSelected ? 'text-white' : 'text-gray-600'} />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold ml-3 md:ml-4 text-[#143151]">{type.name}</h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">{type.description}</p>
                    
                    <div className={`mt-2 flex justify-end ${isSelected ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                      <Button
                        variant="link"
                        className="p-0 text-[#387E89] text-sm md:text-base font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(type.plan);
                        }}
                      >
                        View Recommendations
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-bold text-[#143151] text-base md:text-lg mb-2">Recommended Plans</h4>
                        
                        <Tabs 
                          defaultValue="crush" 
                          className="w-full" 
                          onValueChange={(value) => setActiveTab(value as 'crush' | 'bravo' | 'bundle')}
                        >
                          <TabsList className="w-full mb-2 bg-gray-100 flex">
                            <TabsTrigger value="crush" className="flex-1 text-xs md:text-sm py-1 md:py-2">CRUSH</TabsTrigger>
                            <TabsTrigger value="bravo" className="flex-1 text-xs md:text-sm py-1 md:py-2">BRAVO</TabsTrigger>
                            <TabsTrigger value="bundle" className="flex-1 text-xs md:text-sm py-1 md:py-2">Bundle</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="crush" className="mt-0">
                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 md:p-3 rounded-lg">
                              <h5 className="font-semibold text-sm md:text-base text-[#387E89]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].name}</h5>
                              <p className="text-xs md:text-sm text-gray-600">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].description}</p>
                              <div className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#143151]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].price}</div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="bravo" className="mt-0">
                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 md:p-3 rounded-lg">
                              <h5 className="font-semibold text-sm md:text-base text-[#387E89]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].name}</h5>
                              <p className="text-xs md:text-sm text-gray-600">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].description}</p>
                              <div className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#143151]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].price}</div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="bundle" className="mt-0">
                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 md:p-3 rounded-lg">
                              <h5 className="font-semibold text-sm md:text-base text-[#387E89]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].name}</h5>
                              <p className="text-xs md:text-sm text-gray-600">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].description}</p>
                              <div className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#143151]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].price}</div>
                            </div>
                          </TabsContent>
                        </Tabs>
                        
                        <div className="mt-3">
                          <Button
                            className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xs md:text-sm py-1 md:py-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              const pricingSection = document.getElementById('pricing');
                              if (pricingSection) {
                                pricingSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            size="sm"
                          >
                            See Full Details
                            <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
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
