
import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, Users, Shield, LineChart } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { Card, CardContent } from "@/components/ui/card";

const bentoItems = [
  {
    title: "Specialty-Tuned Automation",
    description: "AI agents built around your clinical protocols to handle tasks like prior authorizations, chart updates, documentation, and MIPS reporting—just like a trained assistant would.",
    icon: Check,
    className: "col-span-1 md:col-span-2"
  },
  {
    title: "Works With the Tools You Already Use",
    description: "Seamlessly connects with over 7,000 apps—your EHR, CRM, scheduling, billing, and fax systems—without code or workflow disruption.",
    icon: ArrowRight,
    className: "col-span-1"
  },
  {
    title: "No Disruption to Your Workflow",
    description: "Your team keeps working as usual. S10.AI just picks up the manual, repetitive pieces—quietly and reliably.",
    icon: Users,
    className: "col-span-1"
  },
  {
    title: "Secure and Compliant",
    description: "Fully compliant with HIPAA, GDPR, and ISO 27001, using AES-256 encryption and role-based access controls.",
    icon: Shield,
    className: "col-span-1"
  },
  {
    title: "Scales with You",
    description: "Whether you're a solo practice or a multi-location clinic, S10.AI adapts to your team size, patient volume, and specialty workflows.",
    icon: LineChart,
    className: "col-span-1 md:col-span-2"
  }
];

export const CABentoGrid = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F9FF] to-white opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: customAIAgentColors.primary }}>
            Why Clinics Choose S10.AI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              className={cn("group relative", item.className)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white backdrop-blur-xl border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 md:p-6 h-full flex flex-col">
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: customAIAgentColors.primary }} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold flex-1" style={{ color: customAIAgentColors.primary }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 flex-1 font-normal">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
