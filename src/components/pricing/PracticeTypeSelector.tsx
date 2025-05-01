
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Stethoscope, Building, Users, Heart } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface PracticeTypeSelectorProps {
  onSelect: (planType: string) => void;
}

export const PracticeTypeSelector: React.FC<PracticeTypeSelectorProps> = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState<string>("solo"); // Default selected
  const [activeTab, setActiveTab] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  useEffect(() => {
    // Select solo by default on component mount
    onSelect("crush_basic");
  }, [onSelect]);
  
  const handleSelect = (type: string) => {
    setSelectedType(type);
    onSelect(type === 'solo' ? "crush_basic" : 
             type === 'small' ? "crush_plus" : 
             type === 'clinic' ? "bundle_enterprise" : "crush_pro");
  };
  
  // Updated practice types with minor change to description text
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
  
  // For mobile carousel
  const nextPractice = () => {
    setCurrentIndex(prev => (prev + 1) % practiceTypes.length);
    handleSelect(practiceTypes[(currentIndex + 1) % practiceTypes.length].id);
  };
  
  const prevPractice = () => {
    setCurrentIndex(prev => (prev - 1 + practiceTypes.length) % practiceTypes.length);
    handleSelect(practiceTypes[(currentIndex - 1 + practiceTypes.length) % practiceTypes.length].id);
  };

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-[#143151]">
              Which Solution Is Right for Your Practice?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-[#387E89]">
              Select your practice type below for a personalized recommendation.
            </p>
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:block">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {practiceTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.id;
                
                return (
                  <motion.div key={type.id} variants={itemVariants} className="h-full">
                    <Card 
                      className={`p-4 md:p-6 lg:p-8 cursor-pointer transition-all duration-300 h-full flex flex-col ${
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
                      
                      {/* Always show recommendations */}
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
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Mobile View with Carousel */}
          <div className="block md:hidden">
            <div className="relative">
              <Card 
                className="p-4 border-[#387E89] shadow-lg"
              >
                {practiceTypes.map((type, index) => {
                  const Icon = type.icon;
                  const isActive = index === currentIndex;
                  
                  if (!isActive) return null;
                  
                  return (
                    <div key={type.id} className="h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89]">
                          <Icon size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-semibold ml-3 text-[#143151]">{type.name}</h3>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-bold text-[#143151] text-base mb-2">Recommended Plans</h4>
                        
                        <Tabs 
                          defaultValue="crush" 
                          className="w-full" 
                          onValueChange={(value) => setActiveTab(value as 'crush' | 'bravo' | 'bundle')}
                        >
                          <TabsList className="w-full mb-2 bg-gray-100 flex">
                            <TabsTrigger value="crush" className="flex-1 text-xs py-1">CRUSH</TabsTrigger>
                            <TabsTrigger value="bravo" className="flex-1 text-xs py-1">BRAVO</TabsTrigger>
                            <TabsTrigger value="bundle" className="flex-1 text-xs py-1">Bundle</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="crush" className="mt-0">
                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 rounded-lg">
                              <h5 className="font-semibold text-sm text-[#387E89]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].name}</h5>
                              <p className="text-xs text-gray-600">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].description}</p>
                              <div className="mt-1 font-bold text-sm text-[#143151]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].price}</div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="bravo" className="mt-0">
                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 rounded-lg">
                              <h5 className="font-semibold text-sm text-[#387E89]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].name}</h5>
                              <p className="text-xs text-gray-600">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].description}</p>
                              <div className="mt-1 font-bold text-sm text-[#143151]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].price}</div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="bundle" className="mt-0">
                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 rounded-lg">
                              <h5 className="font-semibold text-sm text-[#387E89]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].name}</h5>
                              <p className="text-xs text-gray-600">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].description}</p>
                              <div className="mt-1 font-bold text-sm text-[#143151]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].price}</div>
                            </div>
                          </TabsContent>
                        </Tabs>
                        
                        <div className="mt-3">
                          <Button
                            className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xs py-1"
                            onClick={() => {
                              const pricingSection = document.getElementById('pricing');
                              if (pricingSection) {
                                pricingSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            size="sm"
                          >
                            See Full Details
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Card>
              
              {/* Navigation arrows */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#387E89]"
                  onClick={prevPractice}
                >
                  <ChevronLeft className="h-4 w-4 text-[#387E89]" />
                </Button>
                <div className="text-sm text-[#387E89]">
                  {currentIndex + 1} / {practiceTypes.length}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#387E89]"
                  onClick={nextPractice}
                >
                  <ChevronRight className="h-4 w-4 text-[#387E89]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
