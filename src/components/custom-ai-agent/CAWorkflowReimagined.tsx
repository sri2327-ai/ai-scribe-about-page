
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Calendar, 
  FileText, 
  ClipboardCheck, 
  Mail, 
  User, 
  Star, 
  CheckCheck, 
  MessageSquare, 
  BellRing 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import OptimizedImage from '@/components/ui/optimized-image';

// Define workflow steps with their automated status and improved icons
const workflowSteps = [
  {
    title: "Customer Books Appointment",
    description: "Client schedules a session via the therapist's website",
    automated: false,
    icon: <Calendar className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-32 h-14 bg-gray-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="w-full h-3 bg-gray-200 rounded-t-sm flex items-center justify-center">
            <div className="w-4 h-1.5 bg-white rounded-sm"></div>
          </div>
          <div className="grid grid-cols-7 gap-0.5 mt-1">
            {[...Array(14)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  backgroundColor: i === 3 || i === 10 ? ['#dbeafe', '#3b82f6', '#dbeafe'] : ['#e5e7eb', '#e5e7eb']
                }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                className="w-3 h-3 bg-gray-200 rounded-sm"
              />
            ))}
          </div>
          <Calendar className="absolute -top-3 -right-3 w-6 h-6 text-blue-500 bg-white rounded-full p-1 shadow-md" />
        </div>
      </div>
    )
  },
  {
    title: "Post Customer Info to PMS",
    description: "Client's details are posted to Patient Management Software",
    automated: true,
    icon: <FileText className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative h-14 flex items-center">
          <div className="w-20 h-12 bg-blue-50 rounded-lg shadow-md p-1.5 flex flex-col mr-6">
            <div className="w-full h-1.5 bg-blue-200 mb-1 rounded-sm"></div>
            <div className="w-full h-1.5 bg-blue-200 mb-1 rounded-sm"></div>
            <div className="w-3/4 h-1.5 bg-blue-200 rounded-sm"></div>
            <User className="absolute -top-2 -left-2 w-5 h-5 text-blue-500 bg-white rounded-full p-1 shadow-sm" />
          </div>
          
          <motion.div 
            className="absolute left-16 w-8"
            animate={{ x: [0, 20, 20], opacity: [1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 0.5 }}
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
            <div className="w-0 h-0 border-t-4 border-r-4 border-b-4 border-t-transparent border-b-transparent border-r-green-300 absolute right-0 -mt-1.5"></div>
          </motion.div>
          
          <div className="w-20 h-12 bg-green-50 rounded-lg shadow-md p-1.5 flex flex-col">
            <div className="w-full flex items-center mb-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
              <div className="flex-1 h-1.5 bg-green-200 rounded-sm"></div>
            </div>
            <div className="w-full flex items-center mb-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
              <div className="flex-1 h-1.5 bg-green-200 rounded-sm"></div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
              <div className="flex-1 h-1.5 bg-green-200 rounded-sm"></div>
            </div>
            <FileText className="absolute -top-2 -right-2 w-5 h-5 text-green-500 bg-white rounded-full p-1 shadow-sm" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Create Contact Record",
    description: "A contact record is created in the PMS to store client info",
    automated: true,
    icon: <User className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-32 h-14 bg-teal-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
            <User className="w-5 h-5 text-teal-500" />
          </div>
          <div className="w-full mt-2 flex items-center justify-between">
            <div className="w-16 h-1.5 bg-teal-200 rounded-sm"></div>
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-teal-200"></div>
            </div>
          </div>
          <div className="w-full mt-1.5 flex gap-1">
            <div className="w-5 h-5 rounded-md bg-teal-200"></div>
            <div className="flex-1">
              <div className="w-full h-1 bg-teal-200 mb-0.5 rounded-sm"></div>
              <div className="w-3/4 h-1 bg-teal-200 rounded-sm"></div>
            </div>
          </div>
          <motion.div
            className="absolute -right-2 -bottom-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <CheckCheck className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "Send Forms & Confirmation",
    description: "System sends confirmation and a link to an intake form",
    automated: true,
    icon: <Mail className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="absolute w-10 h-7"
            animate={{ 
              y: [0, -10, -10],
              x: [0, 15, 15],
              opacity: [1, 0.8, 0],
              rotate: [0, 5, 5]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-10 h-6 rounded-sm bg-blue-500 flex items-center justify-center">
              <div className="w-6 h-2.5 rounded-sm bg-white"></div>
            </div>
            <div className="w-0 h-0 mx-auto border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-blue-500"></div>
          </motion.div>
          
          <div className="w-32 h-14 bg-indigo-50 rounded-lg shadow-md p-2 flex flex-col">
            <div className="w-full flex justify-between mb-2">
              <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
            </div>
            <div className="w-full h-1.5 bg-indigo-200 rounded-sm mb-1"></div>
            <div className="w-full h-1.5 bg-indigo-200 rounded-sm mb-1"></div>
            <div className="w-2/3 h-1.5 bg-indigo-200 rounded-sm"></div>
            <Mail className="absolute -bottom-2 -right-2 w-5 h-5 text-indigo-500 bg-white rounded-full p-1 shadow-sm" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Client Submits Intake Form",
    description: "Client completes the intake form with health history",
    automated: false,
    icon: <ClipboardCheck className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-32 h-14 bg-amber-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center p-1">
            <ClipboardCheck className="w-full h-full text-amber-500" />
          </div>
          <div className="w-full mb-1 flex items-center">
            <div className="w-3 h-3 rounded-sm border border-amber-300 mr-1 flex items-center justify-center">
              <motion.div 
                className="w-2 h-2 rounded-sm bg-amber-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <div className="flex-1 h-1.5 bg-amber-200 rounded-sm"></div>
          </div>
          <div className="w-full mb-1 flex items-center">
            <div className="w-3 h-3 rounded-sm border border-amber-300 mr-1 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-amber-400"></div>
            </div>
            <div className="flex-1 h-1.5 bg-amber-200 rounded-sm"></div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-3 h-3 rounded-sm border border-amber-300 mr-1"></div>
            <div className="flex-1 h-1.5 bg-amber-200 rounded-sm"></div>
          </div>
          <motion.div
            className="absolute -right-2 bottom-1 w-8 h-8"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M13.5 7.5L14.6716 8.67157C16.0049 10.0049 16.6716 10.6716 16.6716 12C16.6716 13.3284 16.0049 13.9951 14.6716 15.3284L13.5 16.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "Prepare Therapist",
    description: "Therapist receives client details to prepare for the session",
    automated: true,
    icon: <BellRing className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-32 h-14 bg-purple-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="w-full flex justify-between items-center mb-1.5">
            <div className="w-20 h-2 bg-purple-200 rounded-sm"></div>
            <motion.div
              animate={{ rotate: [0, 15, 0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <BellRing className="w-4 h-4 text-purple-500" />
            </motion.div>
          </div>
          <div className="w-full flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
              <User className="w-4 h-4 text-purple-500" />
            </div>
            <div className="flex-1">
              <div className="w-full h-1.5 bg-purple-200 mb-1 rounded-sm"></div>
              <div className="w-3/4 h-1.5 bg-purple-200 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Send Appointment Reminder",
    description: "System sends a reminder with pre-visit instructions",
    automated: true,
    icon: <BellRing className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-10 h-16">
          <div className="absolute top-0 w-10 h-16 bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-3 bg-blue-500"></div>
            <div className="p-1">
              <div className="w-full h-1.5 bg-blue-200 mb-1 rounded-sm"></div>
              <div className="w-full h-1.5 bg-blue-200 mb-1 rounded-sm"></div>
              <div className="w-full h-1.5 bg-blue-200 rounded-sm"></div>
            </div>
          </div>
          <motion.div
            className="absolute -right-2 -top-2 w-7 h-7 bg-red-50 rounded-full shadow-md flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <div className="relative">
              <BellRing className="w-4 h-4 text-red-500" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "Therapy Session",
    description: "Therapist conducts the therapy session",
    automated: false,
    icon: <MessageSquare className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-32 h-14 bg-gray-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="flex justify-between mb-1">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-blue-200"></div>
          </div>
          <div className="flex gap-1">
            <motion.div
              className="w-10 h-3 rounded-full bg-gray-200"
              animate={{ width: [10, 16, 10] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div
              className="w-14 h-3 rounded-full bg-blue-200 ml-auto"
              animate={{ width: [14, 20, 14] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            />
          </div>
          <MessageSquare className="absolute -bottom-2 -right-2 w-5 h-5 text-blue-500 bg-white rounded-full p-1 shadow-sm" />
        </div>
      </div>
    )
  },
  {
    title: "AI Session Summary",
    description: "AI generates a session summary and emails the client",
    automated: true,
    icon: <FileText className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative flex items-center">
          <div className="w-20 h-12 bg-indigo-50 rounded-lg shadow-md p-1.5 flex flex-col mr-6">
            <div className="w-full h-1.5 bg-indigo-200 mb-1 rounded-sm"></div>
            <div className="w-full h-1.5 bg-indigo-200 mb-1 rounded-sm"></div>
            <div className="w-3/4 h-1.5 bg-indigo-200 rounded-sm"></div>
            <motion.div 
              className="absolute -top-2 -left-2 w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent"></div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute left-16 w-8"
            animate={{ x: [0, 20, 20], opacity: [1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 0.5 }}
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-blue-300"></div>
            <div className="w-0 h-0 border-t-4 border-r-4 border-b-4 border-t-transparent border-b-transparent border-r-blue-300 absolute right-0 -mt-1.5"></div>
          </motion.div>
          
          <div className="w-10 h-16 bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-3 bg-blue-500"></div>
            <div className="p-1">
              <div className="w-full h-1.5 bg-blue-200 mb-1 rounded-sm"></div>
              <div className="w-full h-1.5 bg-blue-200 rounded-sm"></div>
            </div>
            <FileText className="absolute -bottom-2 -right-2 w-5 h-5 text-blue-500 bg-white rounded-full p-1 shadow-sm" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Feedback & Follow-Up",
    description: "System manages feedback, reviews, and marketing sequences",
    automated: true,
    icon: <Star className="w-5 h-5" />,
    illustration: (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="relative w-32 h-14 bg-yellow-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="absolute -top-2 -left-2 w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          </div>
          <div className="w-full flex justify-between mb-2">
            <div className="space-x-0.5 flex">
              {[1, 2, 3, 4, 5].map((star, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: i === 2 ? [1, 1.2, 1] : 1
                  }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                >
                  <Star 
                    className={`w-3 h-3 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < 4 ? 'currentColor' : 'none'}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Mail className="w-4 h-4 text-blue-500" />
            </motion.div>
          </div>
          <div className="w-full h-1.5 bg-yellow-200 mb-1 rounded-sm"></div>
          <div className="w-3/4 h-1.5 bg-yellow-200 rounded-sm"></div>
        </div>
      </div>
    )
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
          {/* Legend with improved styling */}
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

          {/* Workflow Chart with improved illustrations */}
          <motion.div 
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xl font-bold mb-4 shadow-lg"
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
                  className={`w-full max-w-2xl rounded-lg p-5 border-2 shadow-sm ${
                    step.automated 
                      ? "border-[#5192AE]/30 bg-[#5192AE]/5" 
                      : "border-gray-300/50 bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-sm ${
                      step.automated ? "bg-[#5192AE]/20" : "bg-gray-200"
                    }`}>
                      <span className="text-[#143151]">{step.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#143151] text-lg">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {step.automated && (
                      <div className="ml-auto bg-[#5192AE]/20 text-[#143151] text-xs font-semibold py-1.5 px-3 rounded-full">
                        AI Automated
                      </div>
                    )}
                  </div>
                  
                  {/* Add the new illustration */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {step.illustration}
                  </div>
                </motion.div>
              </React.Fragment>
            ))}

            <motion.div variants={itemVariants} className="flex justify-center my-1">
              <ArrowDown className="text-gray-400 w-6 h-10" />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xl font-bold mt-2 shadow-lg"
            >
              End
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action with improved styling */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-full px-10 py-7 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl h-auto"
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};
