
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
        {/* Enhanced SEO-friendly content for search engines - Comprehensive coverage of all practice types */}
        <div className="sr-only">
          <h2 id="practice-solutions-heading">Tailored S10.AI Solutions for Every Practice Type</h2>
          <p>
            S10.AI offers specialized AI documentation solutions for different healthcare practice sizes, 
            from solo practitioners to large healthcare systems. Each solution is tailored to meet specific 
            workflow needs and optimize clinical documentation processes.
          </p>
          
          {/* Solo Practitioner Details */}
          <div>
            <h3>Solo Practitioner</h3>
            <p>Streamlined and fast—perfect for individual providers who need automated, real-time documentation without the overhead of complex systems.</p>
            <ul>
              <li>Perfect for individual healthcare providers</li>
              <li>Automated real-time documentation</li>
              <li>Streamlined workflow optimization</li>
              <li>Cost-effective AI solutions</li>
              <li>No complex system overhead</li>
              <li>Quick implementation and setup</li>
            </ul>
          </div>
          
          {/* Small Clinic Details - Enhanced */}
          <div>
            <h3>Small Clinic</h3>
            <p>Collaborative tools that help small teams work in sync. Real-time notes, shared tasks, and seamless coordination.</p>
            <ul>
              <li>Designed for small healthcare teams of 2-10 providers</li>
              <li>Collaborative documentation sharing</li>
              <li>Real-time clinical note synchronization</li>
              <li>Task management and assignment features</li>
              <li>Seamless team coordination tools</li>
              <li>Affordable per-provider pricing</li>
              <li>Simplified administrative workflows</li>
              <li>Quick onboarding for new team members</li>
            </ul>
          </div>
          
          {/* Multispecialty Group Details - Enhanced */}
          <div>
            <h3>Multispecialty Group</h3>
            <p>Handles complex medical language across departments—perfect for diverse clinical teams with varied documentation needs.</p>
            <ul>
              <li>Specialty-specific AI documentation models</li>
              <li>Cross-department collaboration features</li>
              <li>Support for various medical specialties including cardiology, neurology, orthopedics, and more</li>
              <li>Specialized terminology and jargon recognition</li>
              <li>Custom templates for each specialty</li>
              <li>Centralized patient record management</li>
              <li>Inter-department referral automation</li>
              <li>Unified billing and coding support</li>
              <li>Advanced analytics for specialty-specific metrics</li>
            </ul>
          </div>
          
          {/* Large Healthcare System Details - Enhanced */}
          <div>
            <h3>Large Healthcare System</h3>
            <p>Built to scale—S10.AI supports high patient volumes, multiple users, and enterprise-level workflows.</p>
            <ul>
              <li>Enterprise-grade scaling capabilities</li>
              <li>Support for hundreds of concurrent providers</li>
              <li>High-volume patient documentation handling</li>
              <li>Advanced security and compliance features</li>
              <li>Hospital-wide deployment solutions</li>
              <li>Integration with major EHR systems</li>
              <li>Administrative hierarchy management</li>
              <li>Department-level analytics and reporting</li>
              <li>Custom API access for system integration</li>
              <li>24/7 enterprise support services</li>
              <li>HIPAA and regulatory compliance assurance</li>
            </ul>
          </div>
          
          {/* Product Solutions */}
          <div>
            <h3>S10.AI Product Solutions</h3>
            <h4>CRUSH - AI Medical Documentation</h4>
            <p>CRUSH offers automated medical documentation with real-time note generation, reducing clinician documentation time by up to 75%.</p>
            
            <h4>BRAVO - AI Front Office Solution</h4>
            <p>BRAVO handles patient communication, scheduling, and intake processes, automating administrative tasks for front office staff.</p>
            
            <h4>Bundle Solutions</h4>
            <p>Combined CRUSH and BRAVO packages provide comprehensive end-to-end automation for medical practices of all sizes.</p>
          </div>
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
        
        {/* Static version for search engines and accessibility - Enhanced with comprehensive details */}
        <div className="hidden print:block">
          <h2 className="text-2xl font-bold mb-6">S10.AI Solutions by Practice Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Solo Practitioner Static Content */}
            <div className="border p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Solo Practitioner</h3>
              <p className="mb-4">Streamlined and fast—perfect for individual providers who need automated, real-time documentation without the overhead of complex systems.</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5">
                  <li>Specialized workflow optimization</li>
                  <li>Documentation tailored to individual providers</li>
                  <li>Efficient patient management</li>
                  <li>Seamless integration with existing tools</li>
                  <li>Practice-specific AI assistance</li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="#pricing" className="text-blue-600 hover:underline">
                  See pricing for Solo Practitioner solutions
                </a>
              </div>
            </div>
            
            {/* Small Clinic Static Content - Enhanced */}
            <div className="border p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Small Clinic</h3>
              <p className="mb-4">Collaborative tools that help small teams work in sync. Real-time notes, shared tasks, and seamless coordination.</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5">
                  <li>Team collaboration features</li>
                  <li>Shared patient documentation</li>
                  <li>Task assignment and tracking</li>
                  <li>Multi-user access controls</li>
                  <li>Small team workflow optimization</li>
                  <li>Resource allocation tools</li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="#pricing" className="text-blue-600 hover:underline">
                  See pricing for Small Clinic solutions
                </a>
              </div>
            </div>
            
            {/* Multispecialty Group Static Content - Enhanced */}
            <div className="border p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Multispecialty Group</h3>
              <p className="mb-4">Handles complex medical language across departments—perfect for diverse clinical teams with varied documentation needs.</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5">
                  <li>Specialty-specific documentation models</li>
                  <li>Cross-department patient management</li>
                  <li>Multi-specialty terminology support</li>
                  <li>Customizable documentation templates</li>
                  <li>Unified patient records across specialties</li>
                  <li>Interdepartmental referral automation</li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="#pricing" className="text-blue-600 hover:underline">
                  See pricing for Multispecialty Group solutions
                </a>
              </div>
            </div>
            
            {/* Large Healthcare System Static Content - Enhanced */}
            <div className="border p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Large Healthcare System</h3>
              <p className="mb-4">Built to scale—S10.AI supports high patient volumes, multiple users, and enterprise-level workflows.</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5">
                  <li>Enterprise-scale deployment</li>
                  <li>High-volume patient processing</li>
                  <li>Multi-facility coordination</li>
                  <li>Advanced security features</li>
                  <li>System-wide analytics</li>
                  <li>Custom implementation services</li>
                  <li>Administrative hierarchy management</li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="#pricing" className="text-blue-600 hover:underline">
                  See pricing for Large Healthcare System solutions
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced structured data for SEO - Added more details and specific characteristics for each practice type */}
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
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "highPrice": type.id === "large" ? "Customized" : "899",
                    "lowPrice": type.id === "solo" ? "199" : "399",
                    "priceCurrency": "USD",
                    "offerCount": 3
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "S10.AI"
                  }
                }
              }))
            })
          }}
        />
        
        {/* Enhanced FAQ Schema for practice types with more detailed Q&As */}
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
                    "text": "For solo practitioners, S10.AI provides streamlined and fast AI documentation solutions that are perfect for individual providers who need automated, real-time documentation without the overhead of complex systems. Features include automated note generation, simplified patient management, and cost-effective implementation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does S10.AI support small clinics?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S10.AI offers small clinics collaborative tools that help teams work in sync. Features include shared access to real-time notes, team-based task management, coordinated scheduling, and simplified administrative workflows that are specifically optimized for small healthcare teams."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What solutions does S10.AI provide for multispecialty groups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For multispecialty groups, S10.AI handles complex medical language across departments with specialty-specific AI models. The system includes cross-specialty documentation standards, unified patient records, specialized terminology recognition for different medical fields, and inter-department referral automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does S10.AI support large healthcare systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S10.AI's solutions for large healthcare systems are built to scale and support high patient volumes, multiple users, and enterprise-level workflows. Features include system-wide deployment, advanced security protocols, custom integration with existing healthcare infrastructure, multi-facility coordination, and comprehensive analytics across the entire healthcare system."
                  }
                }
              ]
            })
          }}
        />
        
        {/* New structured data for medical software products */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "S10.AI",
              "url": "https://s10.ai",
              "logo": "https://s10.ai/logo.png",
              "description": "Provider of AI-powered medical documentation and healthcare workflow automation solutions",
              "medicalSpecialty": [
                "Primary Care",
                "Family Medicine",
                "Internal Medicine",
                "Cardiology",
                "Neurology",
                "Psychiatry",
                "Orthopedics"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "S10.AI Healthcare Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "CRUSH AI Medical Documentation",
                      "applicationCategory": "Healthcare",
                      "operatingSystem": "Cloud-based"
                    },
                    "description": "AI-powered medical documentation that reduces clinician documentation time by up to 75%"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "BRAVO AI Front Office Solution",
                      "applicationCategory": "Healthcare",
                      "operatingSystem": "Cloud-based"
                    },
                    "description": "AI automation for patient communication, scheduling, and intake processes"
                  }
                ]
              }
            })
          }}
        />
      </div>
    </section>
  );
};

export default PracticeTypeSelector;
