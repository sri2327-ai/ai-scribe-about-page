
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PracticeTypeSelectorProps {
  onSelect: (planType: 'crush' | 'bravo' | 'bundle') => void;
}

export const PracticeTypeSelector: React.FC<PracticeTypeSelectorProps> = ({ onSelect }) => {
  const practiceTypes = [
    {
      title: "CRUSH AI",
      description: "Perfect for clinicians who want to eliminate charting and documentation burdens.",
      features: ["AI Medical Scribe", "SOAP Note Automation", "EHR Integration"],
      planType: 'crush' as const
    },
    {
      title: "BRAVO AI",
      description: "Ideal for practices looking to streamline patient engagement and reduce no-shows.",
      features: ["Patient Communication", "Appointment Management", "Front Office Automation"],
      planType: 'bravo' as const
    },
    {
      title: "BUNDLE (Best Value)",
      description: "The complete solution for practices wanting to transform both clinical and front office operations.",
      features: ["CRUSH + BRAVO combined", "Save 10% vs. separate products", "Full practice optimization"],
      planType: 'bundle' as const
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#143151]">
            Which Solution Is Right For Your Practice?
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-[#387E89]">
            Choose the AI solution that fits your practice's needs and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {practiceTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#143151]">{type.title}</h3>
                <p className="text-sm md:text-base mb-6 text-gray-600">{type.description}</p>
                
                <ul className="mb-8 space-y-2">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm md:text-base text-gray-700">
                      <span className="mr-2 text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => {
                    onSelect(type.planType);
                    // Scroll to pricing section
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full rounded-full py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white"
                >
                  See Full Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
