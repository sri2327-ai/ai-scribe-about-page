
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { useInView } from "framer-motion";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

const features = [
  {
    title: "CRM to EHR Data Transfer",
    description: "No more copy-pasting. S10.AI syncs patient details directly into your EHR with perfect accuracy."
  },
  {
    title: "Clinical Data Extraction from PDFs/Faxes",
    description: "Pulls diagnoses, allergies, meds, and more from scanned docs into the patient chart—instantly."
  },
  {
    title: "Smart Appointment Scheduling & Rescheduling",
    description: "Handles last-minute changes, fills canceled slots, and reduces no-shows."
  },
  {
    title: "Clinical Documentation Support",
    description: "If you're already using an AI scribe, S10.AI auto-pastes SOAP, HPI, and assessment notes directly into your EHR—fully structured and editable."
  },
  {
    title: "Insurance Verification & Pre-Auth Automation",
    description: "Completes payer forms, submits documentation, tracks status—no more long phone calls or delays."
  },
  {
    title: "Inbox Management & Patient Emails",
    description: "Responds to appointment requests, routes referrals, confirms forms—all via AI-powered email handling."
  }
];

export const CAWorkflowAnimation = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="relative w-full h-full min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background circles */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ backgroundColor: `${customAIAgentColors.tertiary}10` }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ backgroundColor: `${customAIAgentColors.tertiary}15` }}
        />
      </div>

      {/* Feature cards */}
      <div className="relative grid grid-cols-2 gap-6 max-w-[800px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-4 bg-white/95 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-sm font-semibold mb-2" style={{ color: customAIAgentColors.primary }}>
                {feature.title}
              </h4>
              <p className="text-xs text-gray-600">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Connecting lines */}
      <div className="absolute inset-0 pointer-events-none">
        <GradientTracing
          width={600}
          height={400}
          path="M100,200 Q300,100 500,200"
          strokeWidth={1.5}
          baseColor="#e2e8f0"
          gradientColors={["#143151", "#387E89", "#387E89"]}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <GradientTracing
          width={600}
          height={400}
          path="M100,200 Q300,300 500,200"
          strokeWidth={1.5}
          baseColor="#e2e8f0"
          gradientColors={["#143151", "#387E89", "#387E89"]}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
