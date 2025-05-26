
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building, Building2, Hospital, ArrowRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PracticeType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const practiceTypes: PracticeType[] = [{
  id: "solo",
  title: "Solo Practitioner",
  description: "Streamlined and fast—perfect for individual providers who need automated, real-time documentation without the overhead of complex systems.",
  icon: User
}, {
  id: "small",
  title: "Small Clinic",
  description: "Collaborative tools that help small teams work in sync. Real-time notes, shared tasks, and seamless coordination.",
  icon: Building
}, {
  id: "multi",
  title: "Multispecialty Group",
  description: "Handles complex medical language across departments—perfect for diverse clinical teams with varied documentation needs.",
  icon: Building2
}, {
  id: "large",
  title: "Large Healthcare System",
  description: "Built to scale—S10.AI supports high patient volumes, multiple users, and enterprise-level workflows.",
  icon: Hospital
}];

export const PracticeTypeSelector = ({
  onSelect
}: {
  onSelect: (type: string) => void;
}) => {
  const [selectedType, setSelectedType] = useState(practiceTypes[0].id);
  const [selectedTab, setSelectedTab] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  
  const handleSeeDetails = () => {
    // Navigate to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Dispatch event to change tab in pricing section
    const event = new CustomEvent('pricingTabChange', {
      detail: {
        tab: selectedTab
      }
    });
    window.dispatchEvent(event);

    // Store selected tab in localStorage for persistence
    localStorage.setItem('activePricingTab', selectedTab);

    // Call onSelect prop
    onSelect(selectedTab);
  };

  return (
    <section 
      id="practice-solutions" 
      aria-labelledby="practice-solutions-heading"
      className="w-full py-14 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Static SEO-friendly content - Always visible */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <h2 id="practice-solutions-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#143151] text-center">
            Tailored S10.AI Solutions for Every Practice Type
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal text-center mb-8">
            S10.AI offers specialized AI documentation solutions for different healthcare practice sizes, 
            from solo practitioners to large healthcare systems. Each solution is tailored to meet specific 
            workflow needs and optimize clinical documentation processes.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {practiceTypes.map((type, index) => (
              <div key={`static-practice-${index}`} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
                    <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#143151]">{type.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">{type.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {type.id === 'solo' && (
                      <>
                        <li>• Perfect for individual healthcare providers</li>
                        <li>• Automated real-time documentation</li>
                        <li>• Streamlined workflow optimization</li>
                        <li>• Cost-effective AI solutions</li>
                        <li>• No complex system overhead</li>
                        <li>• Quick implementation and setup</li>
                      </>
                    )}
                    {type.id === 'small' && (
                      <>
                        <li>• Designed for small healthcare teams of 2-10 providers</li>
                        <li>• Collaborative documentation sharing</li>
                        <li>• Real-time clinical note synchronization</li>
                        <li>• Task management and assignment features</li>
                        <li>• Seamless team coordination tools</li>
                        <li>• Affordable per-provider pricing</li>
                      </>
                    )}
                    {type.id === 'multi' && (
                      <>
                        <li>• Specialty-specific AI documentation models</li>
                        <li>• Cross-department collaboration features</li>
                        <li>• Support for various medical specialties</li>
                        <li>• Specialized terminology recognition</li>
                        <li>• Custom templates for each specialty</li>
                        <li>• Unified billing and coding support</li>
                      </>
                    )}
                    {type.id === 'large' && (
                      <>
                        <li>• Enterprise-grade scaling capabilities</li>
                        <li>• Support for hundreds of concurrent providers</li>
                        <li>• High-volume patient documentation handling</li>
                        <li>• Advanced security and compliance features</li>
                        <li>• Hospital-wide deployment solutions</li>
                        <li>• 24/7 enterprise support services</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">S10.AI Product Solutions</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#387E89] mb-2">CRUSH - AI Medical Documentation</h4>
                <p className="text-sm text-gray-600">CRUSH offers automated medical documentation with real-time note generation, reducing clinician documentation time by up to 75%.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#387E89] mb-2">BRAVO - AI Front Office Solution</h4>
                <p className="text-sm text-gray-600">BRAVO handles patient communication, scheduling, and intake processes, automating administrative tasks for front office staff.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#387E89] mb-2">Bundle Solutions</h4>
                <p className="text-sm text-gray-600">Combined CRUSH and BRAVO packages provide comprehensive end-to-end automation for medical practices of all sizes.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-10 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#143151]"
            id="practice-solutions-visible-heading"
          >
            Interactive Practice Type Selector
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
            Choose your practice type for personalized recommendations
          </p>
        </div>

        <Tabs defaultValue={practiceTypes[0].id} value={selectedType} onValueChange={setSelectedType} className="w-full">
          {/* Improved mobile grid layout */}
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-transparent h-auto p-0 overflow-x-auto">
            {practiceTypes.map(type => (
              <TabsTrigger 
                key={type.id} 
                value={type.id} 
                className="data-[state=active]:bg-gradient-to-r from-[#143151] to-[#387E89] data-[state=active]:text-white px-3 md:px-4 py-2 md:py-3 h-auto flex flex-col items-center gap-2 rounded-lg border border-gray-200 hover:border-[#387E89] transition-all min-w-[120px]"
                aria-label={`Select ${type.title} practice type`}
              >
                <type.icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                <span className="text-xs md:text-sm font-semibold">{type.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {practiceTypes.map(type => (
            <TabsContent 
              key={type.id} 
              value={type.id}
              role="tabpanel"
              id={`tabpanel-${type.id}`}
              aria-labelledby={`tab-${type.id}`}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="mt-6"
              >
                <Card className="border-2 border-[#387E89]/10 hover:border-[#387E89]/20 transition-all shadow-sm hover:shadow-md overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4 flex-wrap sm:flex-nowrap">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white" aria-hidden="true">
                      <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#143151]">{type.title}</h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
