
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    title: "Is S10.AI HIPAA compliant?",
    content:
      "Yes. S10.AI is fully HIPAA compliant and uses continuous compliance monitoring—not just annual audits. We protect PHI with strict administrative, physical, and technical safeguards."
  },
  {
    id: "2",
    title: "Do you provide a Business Associate Agreement (BAA)?",
    content:
      "Yes. We offer BAAs for all healthcare providers and partners who need one. Just request it via our support team."
  },
  {
    id: "3",
    title: "Do you have a DPIA and DPA?",
    content:
      "Yes. We maintain DPIAs and DPAs for all regions we operate in. Reach out if you need a copy."
  },
  {
    id: "4",
    title: "Can S10.AI access my patient's information?",
    content:
      "No. All data is de-identified before processing. We don't retain or use any patient-identifiable information."
  },
  {
    id: "5",
    title: "Are audio recordings saved?",
    content:
      "No. Audio is transcribed in real time and never stored—whether live or uploaded."
  },
  {
    id: "6",
    title: "Where is my data stored?",
    content:
      "Data stays within your region to meet local data residency and compliance laws like HIPAA and GDPR."
  },
  {
    id: "7",
    title: "How does S10.AI prevent data breaches?",
    content:
      "We follow ISO27001, SOC2, and Cyber Essentials standards, with annual penetration testing. PHI is de-identified and processed securely. All users are covered under our compliance program."
  },
  {
    id: "8",
    title: "How do you prevent AI 'hallucinations'?",
    content:
      "We minimize errors through expert-reviewed models and templates. Still, we recommend clinicians review notes before adding them to the EHR. Your feedback helps us improve."
  }
];

const S10AISafetyFAQs = () => {
  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
            S10.AI Safety FAQs
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Common questions about our security and compliance standards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-white/10 last:border-0"
                >
                  <AccordionTrigger 
                    className="py-5 text-white text-left font-normal text-lg hover:no-underline"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-gray-300">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default S10AISafetyFAQs;
