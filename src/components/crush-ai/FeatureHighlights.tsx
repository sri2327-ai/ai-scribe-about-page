
import React, { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    title: "AI-Powered Patient Scheduling",
    description: "Reduce scheduling workload by 80% with intelligent automation",
    benefits: [
      "24/7 booking availability",
      "Smart conflict resolution",
      "Automated reminders & follow-ups"
    ]
  },
  {
    title: "Intelligent Patient Communication",
    description: "Multilingual patient engagement that feels personal",
    benefits: [
      "Natural conversations in 100+ languages",
      "Context-aware responses",
      "Seamless handoff to human staff when needed"
    ]
  },
  {
    title: "EHR Integration & Documentation",
    description: "Reduce administrative burden with seamless workflows",
    benefits: [
      "Automated intake form processing",
      "Real-time EHR data synchronization",
      "Documentation assistance for providers"
    ]
  }
];

// Memoized feature card for better performance
const FeatureCard = memo(({ feature, index }: { feature: Feature, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <Card className="h-full bg-white/90 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
          
          <ul className="space-y-2">
            {feature.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export const FeatureHighlights = memo(() => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Key Features That Transform Healthcare
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience seamless automation that enhances patient satisfaction while reducing administrative burden
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

FeatureHighlights.displayName = 'FeatureHighlights';
