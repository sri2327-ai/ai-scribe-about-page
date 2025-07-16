import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ChevronDown, MessageSquare, Book, Download, Users } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'resources' | 'platform' | 'implementation' | 'support';
}

interface ResourceLibraryFAQProps {
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQ[] = [
  {
    id: "access-resources",
    question: "How do I access and download resources?",
    answer: "Simply fill out the form with your professional details and click 'Download Resource'. Your selected guide, template, or workbook will be immediately available for download as a PDF.",
    category: "resources"
  },
  {
    id: "resource-types",
    question: "What types of resources are available?",
    answer: "Our library includes comprehensive guides, practical templates, interactive workbooks, implementation checklists, industry reports, and visual infographics—all designed specifically for healthcare professionals.",
    category: "resources"
  },
  {
    id: "specialty-specific",
    question: "Are resources available for my medical specialty?",
    answer: "Yes! Our resources cover 50+ medical specialties including cardiology, dermatology, pediatrics, mental health, surgery, and more. Each resource is tailored to specialty-specific workflows and terminology.",
    category: "resources"
  },
  {
    id: "implementation-time",
    question: "How quickly can I implement these strategies?",
    answer: "Most of our implementation guides are designed for immediate use. Simple changes can be implemented within hours, while comprehensive workflow transformations typically take 1-2 weeks with our step-by-step guidance.",
    category: "implementation"
  },
  {
    id: "roi-measurement",
    question: "How do I measure ROI from these resources?",
    answer: "Our resources include built-in ROI tracking templates and KPI dashboards. You'll be able to measure time savings, efficiency gains, patient satisfaction improvements, and cost reductions within the first month.",
    category: "platform"
  },
  {
    id: "ehr-integration",
    question: "Do these resources work with my EHR system?",
    answer: "Absolutely! Our resources are designed to work with 100+ EHR systems including Epic, Cerner, AllScripts, and more. No API access required—seamless integration with your existing workflow.",
    category: "platform"
  },
  {
    id: "team-training",
    question: "Can I share these resources with my team?",
    answer: "Yes! All downloaded resources can be shared within your practice. We also provide team training materials and onboarding guides to ensure smooth adoption across your entire organization.",
    category: "support"
  },
  {
    id: "ongoing-support",
    question: "What ongoing support is available?",
    answer: "Beyond our comprehensive resource library, we provide dedicated implementation support, regular webinars, a community forum, and direct access to our healthcare AI experts for personalized guidance.",
    category: "support"
  }
];

const categoryIcons = {
  resources: Book,
  platform: Download,
  implementation: Users,
  support: MessageSquare
};

const categoryColors = {
  resources: "text-blue-600 bg-blue-50",
  platform: "text-green-600 bg-green-50", 
  implementation: "text-purple-600 bg-purple-50",
  support: "text-orange-600 bg-orange-50"
};

export const ResourceLibraryFAQ: React.FC<ResourceLibraryFAQProps> = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our healthcare resource library"
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Questions', count: defaultFAQs.length },
    { key: 'resources', label: 'Resources', count: defaultFAQs.filter(faq => faq.category === 'resources').length },
    { key: 'platform', label: 'Platform', count: defaultFAQs.filter(faq => faq.category === 'platform').length },
    { key: 'implementation', label: 'Implementation', count: defaultFAQs.filter(faq => faq.category === 'implementation').length },
    { key: 'support', label: 'Support', count: defaultFAQs.filter(faq => faq.category === 'support').length }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? defaultFAQs 
    : defaultFAQs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-2xl border-0 bg-white">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#387E89] to-[#143151] p-6 sm:p-8 lg:p-12 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
                <p className="text-white/90 text-lg sm:text-xl">{subtitle}</p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.key
                      ? 'bg-white text-[#387E89] shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            <Accordion 
              type="multiple" 
              value={openItems}
              onValueChange={setOpenItems}
              className="space-y-4"
            >
              {filteredFAQs.map((faq) => {
                const CategoryIcon = categoryIcons[faq.category];
                return (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border border-gray-100 rounded-xl px-6 py-2 bg-white hover:shadow-md transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-start gap-4 w-full">
                        <div className={`p-2 rounded-lg ${categoryColors[faq.category]} flex-shrink-0 mt-1`}>
                          <CategoryIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-gray-900 text-lg block text-left pr-4">{faq.question}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-200 data-[state=open]:rotate-180 flex-shrink-0" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="ml-12 text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#387E89]/5 to-[#143151]/5 rounded-2xl border border-[#387E89]/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Practice?
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Join thousands of healthcare professionals who have already optimized their workflows with our comprehensive resource library and AI-powered solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-[#387E89] to-[#143151] hover:from-[#2c6269] hover:to-[#0d1f31] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Browse All Resources
                  </button>
                  <button className="bg-white border-2 border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};