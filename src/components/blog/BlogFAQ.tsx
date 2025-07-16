import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ChevronRight } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface BlogFAQProps {
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQ[] = [
  {
    id: "ai-accuracy",
    question: "How accurate is AI medical documentation?",
    answer: "Modern AI medical scribes achieve 99%+ accuracy rates when properly trained on medical terminology and contexts. Our AI is specifically designed for healthcare with continuous learning capabilities."
  },
  {
    id: "integration",
    question: "How does AI integrate with existing EHR systems?",
    answer: "AI scribes integrate seamlessly with 100+ EHR systems including Epic, Cerner, and AllScripts through secure APIs and direct plugins, requiring no workflow changes."
  },
  {
    id: "security",
    question: "Is patient data secure with AI documentation?",
    answer: "Yes, all AI medical documentation solutions are HIPAA-compliant with end-to-end encryption, zero data retention policies, and SOC 2 Type II certification."
  },
  {
    id: "specialties",
    question: "Does AI work for all medical specialties?",
    answer: "AI scribes support 50+ medical specialties with specialized terminology, templates, and workflows tailored to each field's unique documentation requirements."
  },
  {
    id: "implementation",
    question: "How long does it take to implement AI documentation?",
    answer: "Most practices are up and running within 24-48 hours with our guided onboarding process, including training sessions and dedicated support."
  },
  {
    id: "cost-savings",
    question: "What kind of cost savings can practices expect?",
    answer: "Practices typically save 1-2 hours daily per provider on documentation, reducing overtime costs and enabling more patient visits, resulting in 20-30% productivity gains."
  }
];

export const BlogFAQ: React.FC<BlogFAQProps> = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about AI medical documentation"
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <Card className="mb-8 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 border-b">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </div>

      {/* FAQ Content */}
      <div className="p-6 md:p-8">
        <Accordion 
          type="multiple" 
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-4"
        >
          {defaultFAQs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-gray-100 rounded-lg px-6 py-2 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-3 w-full">
                  <ChevronRight className="w-5 h-5 text-blue-600 transition-transform duration-200 data-[state=open]:rotate-90" />
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <div className="ml-8 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to Action */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team of experts is here to help you understand how AI can transform your practice.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};