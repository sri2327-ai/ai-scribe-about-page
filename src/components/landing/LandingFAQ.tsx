import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Plus, Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface FAQ {
  id: string;
  question: string;
  answer: string;
}
const landingFAQs: FAQ[] = [{
  id: "accuracy",
  question: "How accurate is S10.AI's medical documentation?",
  answer: "S10.AI achieves 99%+ accuracy in medical documentation through our advanced AI models specifically trained on medical terminology and clinical workflows. Our system continuously learns and improves with each interaction."
}, {
  id: "integration",
  question: "How quickly can we integrate S10.AI with our existing EHR?",
  answer: "Most practices are up and running within 24-48 hours. S10.AI integrates seamlessly with 100+ EHR systems including Epic, Cerner, and AllScripts through secure APIs with minimal workflow disruption."
}, {
  id: "security",
  question: "Is patient data secure with S10.AI?",
  answer: "Absolutely. S10.AI is fully HIPAA-compliant with end-to-end encryption, zero data retention policies, and SOC 2 Type II certification. Your patient data never leaves your secure environment."
}, {
  id: "specialties",
  question: "Does S10.AI work for all medical specialties?",
  answer: "Yes! S10.AI supports 50+ medical specialties with specialized terminology, templates, and workflows tailored to each field's unique documentation requirements, from primary care to complex subspecialties."
}, {
  id: "roi",
  question: "What kind of return on investment can we expect?",
  answer: "Practices typically see 20-30% productivity gains, saving 1-2 hours daily per provider on documentation. This reduces overtime costs and enables more patient visits, often paying for itself within the first month."
}, {
  id: "support",
  question: "What level of support do you provide during implementation?",
  answer: "We provide dedicated onboarding specialists, comprehensive training sessions, 24/7 technical support, and ongoing optimization to ensure your team gets maximum value from S10.AI."
}];
export const LandingFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-teal-100/40 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-100/40 to-blue-100/40 rounded-full blur-3xl translate-x-40 translate-y-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
        <motion.div variants={headerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 leading-tight">
            Everything you need to know
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common questions about implementing S10.AI in your practice
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="space-y-4">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
            {landingFAQs.map((faq, index) => <motion.div key={faq.id} variants={itemVariants}>
                <AccordionItem value={faq.id} className={cn("border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden", "hover:shadow-lg hover:border-teal-200 transition-all duration-300", "group data-[state=open]:shadow-xl data-[state=open]:border-teal-300 data-[state=open]:bg-white")}>
                  <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 w-full text-left">
                      <div className={cn("flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300", "bg-gradient-to-br from-blue-100 to-teal-100 text-tealBlue", "group-data-[state=open]:from-tealBlue group-data-[state=open]:to-tealBlueBright group-data-[state=open]:text-white", "group-hover:scale-110")}>
                        <Plus className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-tealBlue transition-colors duration-200">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="ml-14">
                      <div className="p-4 bg-gradient-to-br from-blue-50/50 to-teal-50/50 rounded-xl border border-teal-100/50">
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>)}
          </Accordion>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            
          </motion.div>
        </motion.div>
      </div>
    </section>;
};