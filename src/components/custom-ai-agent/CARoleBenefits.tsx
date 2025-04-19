
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { cn } from "@/lib/utils";
import { UserCircle, Building2, Stethoscope, TrendingUp } from "lucide-react";

const roleCards = [
  {
    title: "For Primary Care Physicians",
    icon: UserCircle,
    benefits: [
      "Close preventive care gaps faster",
      "Automate wellness visit reminders",
      "Pre-fill forms like school or FMLA paperwork"
    ],
    className: "md:col-span-1",
  },
  {
    title: "For Clinic Administrators",
    icon: Building2,
    benefits: [
      "Cut down appointment scheduling/re-scheduling back-and-forth by up to 80%",
      "Route tasks automatically—no more inbox overload",
      "Get real-time visibility into task status and follow-ups"
    ],
    className: "md:col-span-1",
  },
  {
    title: "For Specialists",
    subtitle: "(Cardiology, Ortho, Neurology, Genetics, etc.)",
    icon: Stethoscope,
    benefits: [
      "Streamline referrals, automate test result documentation",
      "Auto-schedule follow-ups based on treatment plans",
      "Integrate external data (imaging, labs, etc.) directly into patient records"
    ],
    className: "md:col-span-1",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const CARoleBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: customAIAgentColors.primary }}>
            Clinician & Admin Role-Based Benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {roleCards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={cn("h-full", card.className)}
            >
              <Card className="h-full backdrop-blur-xl bg-white/95 border-none shadow-lg">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#143151] to-[#387E89]">
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: customAIAgentColors.primary }}>
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-sm text-gray-600 mt-1">{card.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {card.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-10 shadow-xl"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <TrendingUp className="h-8 w-8 text-white" />
            <h3 className="text-2xl font-bold text-white">
              Designed to Ease Burnout and Boost Revenue
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
