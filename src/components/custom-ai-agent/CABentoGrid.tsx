
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
    className: "md:col-span-2"
  },
  {
    title: "Works With the Tools You Already Use",
    description: "Seamlessly connects with over 7,000 apps—your EHR, CRM, scheduling, billing, and fax systems—without code or workflow disruption.",
    icon: ArrowRight,
    className: "md:col-span-1"
  },
  {
    title: "No Disruption to Your Workflow",
    description: "Your team keeps working as usual. S10.AI just picks up the manual, repetitive pieces—quietly and reliably.",
    icon: Users,
    className: "md:col-span-1"
  },
  {
    title: "Secure and Compliant",
    description: "Fully compliant with HIPAA, GDPR, and ISO 27001, using AES-256 encryption and role-based access controls.",
    icon: Shield,
    className: "md:col-span-1"
  },
  {
    title: "Scales with You",
    description: "Whether you're a solo practice or a multi-location clinic, S10.AI adapts to your team size, patient volume, and specialty workflows.",
    icon: LineChart,
    className: "md:col-span-2"
  }
];

export const CABentoGrid = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F9FF] to-white opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: customAIAgentColors.primary }}>
            Why Clinics Choose S10.AI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              className={cn("group", item.className)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-xl bg-white/95 border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#143151] to-[#387E89]">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: customAIAgentColors.primary }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
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
