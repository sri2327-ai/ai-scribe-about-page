
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PracticeTypeSelectorProps {
  onSelect: (planType: string) => void;
}

export const PracticeTypeSelector: React.FC<PracticeTypeSelectorProps> = ({ onSelect }) => {
  const practiceTypes = [
    {
      title: 'Solo Provider',
      description: 'Solo practitioners looking to reduce documentation burden and grow their practice.',
      icon: '👨‍⚕️',
      tag: 'Most Popular',
      plan: 'crush-bravo-bundle'
    },
    {
      title: 'Small Practice',
      description: 'Practices with 2-5 providers seeking efficiency and patient engagement tools.',
      icon: '👩‍⚕️👨‍⚕️',
      plan: 'crush-bravo-bundle'
    },
    {
      title: 'Mid-Size Group',
      description: 'Groups with 6-20 providers looking for scalable documentation solutions.',
      icon: '👩‍⚕️👨‍⚕️👩‍⚕️',
      tag: 'Best Value',
      plan: 'crush-bravo-bundle'
    },
    {
      title: 'Large Practice',
      description: 'Organizations with 20+ providers requiring enterprise-grade solutions.',
      icon: '🏥',
      plan: 'crush-bravo-bundle'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]">
              Which Solution Is Right for Your Practice?
            </h2>
            <p className="text-lg text-[#387E89] max-w-3xl mx-auto">
              We recommend both CRUSH and BRAVO for all practice types. CRUSH eases your documentation burden while BRAVO grows your practice by cutting no-shows and enhancing patient engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceTypes.map((type, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => onSelect(type.plan)}
              >
                <Card className="h-full p-6 flex flex-col relative overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                  {type.tag && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#387E89] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                        {type.tag}
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#143151]">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{type.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-auto w-full border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
                  >
                    View Recommendations
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
