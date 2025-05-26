
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
        {/* Enhanced SEO-friendly content for search engines - Comprehensive coverage of all practice types and solutions */}
        <div className="sr-only">
          <h2 id="practice-solutions-seo-heading">Tailored S10.AI Solutions for Every Healthcare Practice Type</h2>
          <p>
            S10.AI offers specialized AI documentation and staffing solutions for different healthcare practice sizes, 
            from solo practitioners to large healthcare systems. Each solution is tailored to meet specific 
            workflow needs and optimize clinical documentation processes with AI medical scribes, AI staffing agents, and custom AI solutions.
          </p>
          
          {/* Solo Practitioner Comprehensive Details */}
          <section>
            <h3>Solo Practitioner AI Solutions</h3>
            <p>Streamlined and fast AI solutions perfect for individual healthcare providers who need automated, real-time documentation without the overhead of complex systems. S10.AI's solo practitioner solutions focus on efficiency and cost-effectiveness.</p>
            
            <h4>CRUSH AI Medical Scribe for Solo Practitioners</h4>
            <p>CRUSH Basic provides automated medical documentation with real-time note generation specifically designed for individual healthcare providers.</p>
            <ul>
              <li>Perfect for individual healthcare providers and independent practices</li>
              <li>Automated real-time medical documentation and clinical note generation</li>
              <li>Streamlined workflow optimization for solo practice efficiency</li>
              <li>Cost-effective AI medical scribe solutions with transparent pricing</li>
              <li>No complex system overhead or unnecessary enterprise features</li>
              <li>Quick implementation and setup within 24-48 hours</li>
              <li>Specialty-specific templates for various medical specialties</li>
              <li>HIPAA-compliant patient data protection</li>
              <li>Integration with popular solo practice EHR systems</li>
            </ul>
            
            <h4>BRAVO AI Front Office for Solo Practitioners</h4>
            <p>BRAVO Basic handles patient communication, scheduling, and intake processes for solo practitioners.</p>
            <ul>
              <li>Automated appointment scheduling and patient reminders</li>
              <li>AI-powered patient intake and registration</li>
              <li>Insurance verification and eligibility checking</li>
              <li>Patient communication and follow-up automation</li>
              <li>Basic front office task automation</li>
            </ul>
            
            <h4>Bundle Solutions for Solo Practitioners</h4>
            <p>Combined CRUSH and BRAVO packages provide comprehensive end-to-end automation for solo medical practices.</p>
            <ul>
              <li>Integrated AI medical scribe and front office automation</li>
              <li>Discounted pricing for combined solutions</li>
              <li>Unified dashboard for practice management</li>
              <li>Comprehensive workflow automation</li>
            </ul>
            
            <a href="/pricing?type=solo">View Solo Practitioner Pricing</a>
          </section>
          
          {/* Small Clinic Comprehensive Details */}
          <section>
            <h3>Small Clinic AI Solutions</h3>
            <p>Collaborative tools that help small healthcare teams work in sync. Real-time notes, shared tasks, and seamless coordination designed for small clinics with 2-10 providers.</p>
            
            <h4>CRUSH AI Medical Scribe for Small Clinics</h4>
            <p>CRUSH Pro offers enhanced features for small clinic collaboration and team documentation management.</p>
            <ul>
              <li>Designed for small healthcare teams of 2-10 providers</li>
              <li>Collaborative documentation sharing and team access</li>
              <li>Real-time clinical note synchronization across providers</li>
              <li>Task management and assignment features for clinical teams</li>
              <li>Seamless team coordination tools and communication</li>
              <li>Affordable per-provider pricing with volume discounts</li>
              <li>Simplified administrative workflows and reporting</li>
              <li>Quick onboarding for new team members and providers</li>
              <li>Multi-provider scheduling and resource management</li>
              <li>Shared patient documentation and care coordination</li>
            </ul>
            
            <h4>BRAVO AI Front Office for Small Clinics</h4>
            <p>BRAVO Pro provides enhanced patient engagement with multilingual support for small clinics.</p>
            <ul>
              <li>Advanced appointment scheduling for multiple providers</li>
              <li>Multilingual patient communication support</li>
              <li>Team-based task management and delegation</li>
              <li>Enhanced patient intake and registration workflows</li>
              <li>Insurance verification and prior authorization assistance</li>
            </ul>
            
            <h4>Bundle Solutions for Small Clinics</h4>
            <p>Pro Bundle combines CRUSH Pro and BRAVO Pro for comprehensive small clinic automation.</p>
            <ul>
              <li>Complete clinic management and automation suite</li>
              <li>Team collaboration and communication tools</li>
              <li>Integrated reporting and analytics</li>
              <li>Cost-effective bundle pricing for small teams</li>
            </ul>
            
            <a href="/pricing?type=small">View Small Clinic Pricing</a>
          </section>
          
          {/* Multispecialty Group Comprehensive Details */}
          <section>
            <h3>Multispecialty Group AI Solutions</h3>
            <p>Handles complex medical language across departments—perfect for diverse clinical teams with varied documentation needs. S10.AI supports multiple medical specialties with specialty-specific AI models and workflows.</p>
            
            <h4>CRUSH AI Medical Scribe for Multispecialty Groups</h4>
            <p>CRUSH Enterprise provides specialty-specific documentation models for diverse medical specialties.</p>
            <ul>
              <li>Specialty-specific AI documentation models for cardiology, neurology, orthopedics, psychiatry, and more</li>
              <li>Cross-department collaboration features and shared documentation</li>
              <li>Support for various medical specialties including primary care, internal medicine, and specialty practices</li>
              <li>Specialized terminology and medical jargon recognition across specialties</li>
              <li>Custom templates and workflows for each medical specialty</li>
              <li>Centralized patient record management across departments</li>
              <li>Inter-department referral automation and care coordination</li>
              <li>Unified billing and coding support for multiple specialties</li>
              <li>Advanced analytics for specialty-specific metrics and performance</li>
              <li>Department-level reporting and practice management</li>
            </ul>
            
            <h4>BRAVO AI Front Office for Multispecialty Groups</h4>
            <p>BRAVO Enterprise offers multi-clinic management with multilingual support for complex healthcare organizations.</p>
            <ul>
              <li>Multi-department scheduling and resource allocation</li>
              <li>Specialty-specific patient intake and registration</li>
              <li>Advanced insurance verification and prior authorization</li>
              <li>Multilingual support for diverse patient populations</li>
              <li>Cross-department communication and coordination</li>
            </ul>
            
            <h4>Bundle Solutions for Multispecialty Groups</h4>
            <p>Enterprise Bundle provides complete automation for multispecialty healthcare organizations.</p>
            <ul>
              <li>Comprehensive multispecialty practice management</li>
              <li>Advanced integration with multiple EHR systems</li>
              <li>Enterprise-level security and compliance</li>
              <li>Custom implementation and training programs</li>
            </ul>
            
            <a href="/pricing?type=multispecialty">View Multispecialty Group Pricing</a>
          </section>
          
          {/* Large Healthcare System Comprehensive Details */}
          <section>
            <h3>Large Healthcare System AI Solutions</h3>
            <p>Built to scale—S10.AI supports high patient volumes, multiple users, and enterprise-level workflows for large healthcare systems, hospitals, and health networks.</p>
            
            <h4>CRUSH AI Medical Scribe for Large Healthcare Systems</h4>
            <p>CRUSH Enterprise provides enterprise-grade scaling capabilities for large healthcare organizations.</p>
            <ul>
              <li>Enterprise-grade scaling capabilities for unlimited users</li>
              <li>Support for hundreds of concurrent providers and clinicians</li>
              <li>High-volume patient documentation handling and processing</li>
              <li>Advanced security and compliance features for enterprise environments</li>
              <li>Hospital-wide deployment solutions and implementation</li>
              <li>Integration with major EHR systems including Epic, Cerner, and Allscripts</li>
              <li>Administrative hierarchy management and role-based access</li>
              <li>Department-level analytics and comprehensive reporting</li>
              <li>Custom API access for system integration and development</li>
              <li>24/7 enterprise support services and dedicated account management</li>
              <li>HIPAA and regulatory compliance assurance across all systems</li>
              <li>Multi-facility coordination and centralized management</li>
            </ul>
            
            <h4>BRAVO AI Front Office for Large Healthcare Systems</h4>
            <p>BRAVO Enterprise delivers enterprise-level patient engagement and administrative automation.</p>
            <ul>
              <li>System-wide appointment scheduling and management</li>
              <li>Enterprise patient communication and engagement</li>
              <li>Advanced insurance verification and prior authorization</li>
              <li>Multi-facility coordination and management</li>
              <li>Enterprise-level analytics and reporting</li>
            </ul>
            
            <h4>Bundle Solutions for Large Healthcare Systems</h4>
            <p>Enterprise Bundle offers complete healthcare system automation with custom implementation.</p>
            <ul>
              <li>Complete healthcare system automation and integration</li>
              <li>Custom implementation and deployment services</li>
              <li>Advanced security and compliance management</li>
              <li>Dedicated support and account management</li>
            </ul>
            
            <a href="/pricing?type=enterprise">View Large Healthcare System Pricing</a>
          </section>
          
          {/* AI Product Solutions Detailed Description */}
          <section>
            <h3>S10.AI Product Solutions Overview</h3>
            
            <h4>CRUSH - AI Medical Documentation Platform</h4>
            <p>CRUSH offers automated medical documentation with real-time note generation, reducing clinician documentation time by up to 75%. Available in Basic, Pro, and Enterprise tiers.</p>
            <ul>
              <li>Real-time medical conversation transcription and analysis</li>
              <li>Automated clinical note generation and documentation</li>
              <li>Specialty-specific templates and terminology recognition</li>
              <li>EHR integration with major healthcare systems</li>
              <li>HIPAA-compliant data processing and storage</li>
              <li>Customizable workflows for different practice types</li>
            </ul>
            
            <h4>BRAVO - AI Front Office Solution</h4>
            <p>BRAVO handles patient communication, scheduling, and intake processes, automating administrative tasks for front office staff. Available in Basic, Pro, and Enterprise versions.</p>
            <ul>
              <li>Automated appointment scheduling and patient reminders</li>
              <li>AI-powered patient intake and registration</li>
              <li>Insurance verification and prior authorization</li>
              <li>Multilingual patient communication support</li>
              <li>Patient follow-up and engagement automation</li>
              <li>Integration with practice management systems</li>
            </ul>
            
            <h4>Bundle Solutions - Complete Practice Automation</h4>
            <p>Combined CRUSH and BRAVO packages provide comprehensive end-to-end automation for medical practices of all sizes with discounted pricing.</p>
            <ul>
              <li>Integrated AI medical scribe and front office automation</li>
              <li>Unified dashboard and practice management</li>
              <li>Comprehensive workflow optimization</li>
              <li>Cost-effective bundle pricing and volume discounts</li>
              <li>Single point of support and implementation</li>
            </ul>
          </section>

          {/* Implementation and Support Details */}
          <section>
            <h3>Implementation and Support for All Practice Types</h3>
            <p>S10.AI provides comprehensive implementation and support services tailored to each practice type and size.</p>
            <ul>
              <li>Custom implementation planning and deployment</li>
              <li>Practice-specific training and onboarding programs</li>
              <li>24/7 technical support and customer service</li>
              <li>Regular software updates and feature enhancements</li>
              <li>Dedicated account management for enterprise clients</li>
              <li>Compliance and security audit support</li>
            </ul>
          </section>
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
                  <li>Specialized workflow optimization for individual providers</li>
                  <li>Documentation tailored to solo practice needs</li>
                  <li>Efficient patient management and scheduling</li>
                  <li>Seamless integration with existing solo practice tools</li>
                  <li>Practice-specific AI assistance and automation</li>
                  <li>Cost-effective implementation and pricing</li>
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
                  <li>Team collaboration features and shared access</li>
                  <li>Shared patient documentation and care coordination</li>
                  <li>Task assignment and tracking for clinical teams</li>
                  <li>Multi-user access controls and permissions</li>
                  <li>Small team workflow optimization and efficiency</li>
                  <li>Resource allocation tools and scheduling</li>
                  <li>Volume discounts for multiple providers</li>
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
                  <li>Specialty-specific documentation models and templates</li>
                  <li>Cross-department patient management and coordination</li>
                  <li>Multi-specialty terminology support and recognition</li>
                  <li>Customizable documentation templates for each specialty</li>
                  <li>Unified patient records across multiple specialties</li>
                  <li>Interdepartmental referral automation and workflow</li>
                  <li>Advanced analytics for specialty-specific metrics</li>
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
                  <li>Enterprise-scale deployment and management</li>
                  <li>High-volume patient processing and documentation</li>
                  <li>Multi-facility coordination and centralized control</li>
                  <li>Advanced security features and compliance management</li>
                  <li>System-wide analytics and comprehensive reporting</li>
                  <li>Custom implementation services and support</li>
                  <li>Administrative hierarchy management and access control</li>
                  <li>24/7 enterprise support and dedicated account management</li>
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
              "name": "S10.AI Healthcare Solutions by Practice Type",
              "description": "Comprehensive AI solutions tailored for different healthcare practice sizes and types",
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
                    "audienceType": type.title,
                    "name": `${type.title} Healthcare Providers`
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "highPrice": type.id === "large" ? "Custom" : "899",
                    "lowPrice": type.id === "solo" ? "199" : "399",
                    "priceCurrency": "USD",
                    "offerCount": 3,
                    "availability": "https://schema.org/InStock"
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "S10.AI"
                  },
                  "manufacturer": {
                    "@type": "Organization",
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
                    "text": "S10.AI offers tailored solutions for different practice types, from solo practitioners to large healthcare systems. Each solution is designed to meet the specific workflow needs, documentation requirements, and patient volume of the practice type, with scalable pricing and features."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI features does S10.AI offer for solo practitioners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For solo practitioners, S10.AI provides streamlined and fast AI documentation solutions including automated real-time documentation, cost-effective implementation, simplified patient management, and quick setup within 24-48 hours. The CRUSH Basic plan is specifically designed for individual providers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does S10.AI support small clinic collaboration?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S10.AI offers small clinics collaborative tools including shared access to real-time notes, team-based task management, coordinated scheduling, multi-provider documentation sharing, and simplified administrative workflows specifically optimized for small healthcare teams of 2-10 providers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What specialty-specific solutions does S10.AI provide for multispecialty groups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For multispecialty groups, S10.AI handles complex medical language across departments with specialty-specific AI models for cardiology, neurology, orthopedics, psychiatry, and more. The system includes cross-specialty documentation standards, unified patient records, specialized terminology recognition, and inter-department referral automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does S10.AI scale for large healthcare systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S10.AI's solutions for large healthcare systems include enterprise-grade scaling for unlimited users, support for hundreds of concurrent providers, high-volume patient documentation, system-wide deployment, advanced security protocols, custom integration capabilities, multi-facility coordination, and 24/7 enterprise support services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the differences between CRUSH, BRAVO, and Bundle solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CRUSH is S10.AI's AI medical documentation platform that reduces charting time by 75%. BRAVO is the AI front office solution that automates patient communication, scheduling, and administrative tasks. Bundle solutions combine both CRUSH and BRAVO with discounted pricing for comprehensive practice automation."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Enhanced Medical Software Products structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "S10.AI",
              "url": "https://s10.ai",
              "logo": "https://s10.ai/logo.png",
              "description": "Provider of AI-powered medical documentation and healthcare workflow automation solutions for all practice sizes",
              "medicalSpecialty": [
                "Primary Care",
                "Family Medicine", 
                "Internal Medicine",
                "Cardiology",
                "Neurology",
                "Psychiatry",
                "Orthopedics",
                "Dermatology",
                "Emergency Medicine",
                "Pediatrics"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "S10.AI Healthcare Solutions by Practice Type",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "CRUSH AI Medical Documentation",
                      "applicationCategory": "Healthcare AI",
                      "operatingSystem": "Cloud-based"
                    },
                    "description": "AI-powered medical documentation that reduces clinician documentation time by up to 75% for all practice sizes",
                    "audience": {
                      "@type": "Audience",
                      "audienceType": "Healthcare Providers"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "BRAVO AI Front Office Solution",
                      "applicationCategory": "Healthcare AI",
                      "operatingSystem": "Cloud-based"
                    },
                    "description": "AI automation for patient communication, scheduling, and intake processes for practices of all sizes",
                    "audience": {
                      "@type": "Audience",
                      "audienceType": "Healthcare Administrative Staff"
                    }
                  }
                ]
              },
              "areaServed": [
                "Solo Practitioners",
                "Small Clinics",
                "Multispecialty Groups", 
                "Large Healthcare Systems",
                "Hospitals",
                "Health Networks"
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default PracticeTypeSelector;
