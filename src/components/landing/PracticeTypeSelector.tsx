
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
        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only">
          <h2 id="practice-solutions-heading">Tailored S10.AI Solutions for Every Practice Type</h2>
          <p>
            S10.AI offers specialized AI documentation solutions for different healthcare practice sizes, 
            from solo practitioners to large healthcare systems. Each solution is tailored to meet specific 
            workflow needs and optimize clinical documentation processes.
          </p>
          
          {practiceTypes.map((type) => (
            <div key={`seo-practice-${type.id}`}>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
              <ul>
                <li>Perfect match for {type.title} workflows</li>
                <li>Specialized documentation solutions</li>
                <li>Streamlined patient management</li>
                <li>Optimized for specific practice sizes</li>
                <li>Integration with existing systems</li>
                <li>Workflow automation tailored to {type.title} needs</li>
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-10 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#143151]"
            id="practice-solutions-visible-heading"
          >
            Tailored Solutions for Every Practice Type
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
            S10.AI adapts to your practice size and workflow needs
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
                    
                    {/* Product selection tabs */}
                    <div className="w-full pt-4">
                      
                      
                      
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Static version for search engines and accessibility */}
        <div className="hidden print:block">
          <h2 className="text-2xl font-bold mb-6">S10.AI Solutions by Practice Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {practiceTypes.map((type) => (
              <div key={`print-${type.id}`} className="border p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="mb-4">{type.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="list-disc pl-5">
                    <li>Specialized workflow optimization</li>
                    <li>Documentation tailored to practice size</li>
                    <li>Efficient patient management</li>
                    <li>Seamless integration capabilities</li>
                    <li>Practice-specific AI assistance</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <a href="#pricing" className="text-blue-600 hover:underline">
                    See pricing for {type.title} solutions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Structured data for SEO */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": practiceTypes.map((type, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "item": {
                  "@type": "Product",
                  "name": `S10.AI for ${type.title}`,
                  "description": type.description,
                  "category": "Healthcare AI Software",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": type.title
                  }
                }
              }))
            })
          }}
        />
        
        {/* FAQ Schema for practice types */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does S10.AI adapt to different healthcare practice sizes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S10.AI offers tailored solutions for different practice types, from solo practitioners to large healthcare systems. Each solution is designed to meet the specific workflow needs, documentation requirements, and patient volume of the practice type."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What features does S10.AI offer for solo practitioners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For solo practitioners, S10.AI provides streamlined and fast AI documentation solutions that are perfect for individual providers who need automated, real-time documentation without the overhead of complex systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does S10.AI support large healthcare systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S10.AI's solutions for large healthcare systems are built to scale and support high patient volumes, multiple users, and enterprise-level workflows, ensuring seamless documentation and workflow automation across the entire organization."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default PracticeTypeSelector;
