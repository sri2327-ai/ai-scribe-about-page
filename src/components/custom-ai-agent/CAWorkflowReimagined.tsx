
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

// Define workflow steps with their automated status
const workflowSteps = [
  {
    title: "Customer Books Appointment",
    description: "Client schedules a session via the therapist's website",
    automated: false,
    icon: "📅",
  },
  {
    title: "Post Customer Info to PMS",
    description: "Client's details are posted to Patient Management Software",
    automated: true,
    icon: "📋",
  },
  {
    title: "Create Contact Record",
    description: "A contact record is created in the PMS to store client info",
    automated: true,
    icon: "👤",
  },
  {
    title: "Send Forms & Confirmation",
    description: "System sends confirmation and a link to an intake form",
    automated: true,
    icon: "📩",
  },
  {
    title: "Client Submits Intake Form",
    description: "Client completes the intake form with health history",
    automated: false,
    icon: "✏️",
  },
  {
    title: "Prepare Therapist",
    description: "Therapist receives client details to prepare for the session",
    automated: true,
    icon: "🔔",
  },
  {
    title: "Send Appointment Reminder",
    description: "System sends a reminder with pre-visit instructions",
    automated: true,
    icon: "🔔",
  },
  {
    title: "Therapy Session",
    description: "Therapist conducts the therapy session",
    automated: false,
    icon: "🗣️",
  },
  {
    title: "AI Session Summary",
    description: "AI generates a session summary and emails the client",
    automated: true,
    icon: "🤖",
  },
  {
    title: "Feedback & Follow-Up",
    description: "System manages feedback, reviews, and marketing sequences",
    automated: true,
    icon: "⭐",
  }
];

export const CAWorkflowReimagined = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#143151] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Clinic's Workflow, Reimagined with AI
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            This example shows how S10.AI transforms a therapy clinic's operations, 
            from booking to follow-up, with zero disruption. Ready to build your own?
          </motion.p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-10">
          {/* Legend */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#5192AE]"></div>
              <span className="text-sm text-gray-700">AI Automated Steps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span className="text-sm text-gray-700">Manual Steps</span>
            </div>
          </div>

          {/* Workflow Chart */}
          <motion.div 
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-[#143151] text-white text-2xl font-bold mb-2"
            >
              Start
            </motion.div>

            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  variants={itemVariants} 
                  className="flex justify-center my-1"
                >
                  <ArrowDown className="text-gray-400 w-6 h-10" />
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className={`w-full max-w-2xl rounded-lg p-4 border-2 shadow-sm ${
                    step.automated ? "border-[#5192AE]/30 bg-[#5192AE]/10" : "border-gray-300/50 bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{step.icon}</div>
                    <div>
                      <h3 className="font-semibold text-[#143151]">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {step.automated && (
                      <div className="ml-auto bg-[#5192AE]/20 text-[#143151] text-xs font-semibold py-1 px-2 rounded">
                        AI Automated
                      </div>
                    )}
                  </div>
                </motion.div>
              </React.Fragment>
            ))}

            <motion.div variants={itemVariants} className="flex justify-center my-1">
              <ArrowDown className="text-gray-400 w-6 h-10" />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-[#143151] text-white text-2xl font-bold mt-2"
            >
              End
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl h-auto"
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};
