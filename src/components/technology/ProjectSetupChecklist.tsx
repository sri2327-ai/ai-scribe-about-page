
import React from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  FileText, 
  FolderKanban, 
  GitBranch, 
  Terminal, 
  Code,
  Package,
  Wrench,
  AlertCircle,
  LucideIcon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatedIconTooltip } from "@/components/ui/animated-icon-tooltip";

const ProjectSetupChecklist = () => {
  const setupSteps = [
    {
      id: 1,
      name: "Components UI Folder",
      description: "Project has /components/ui/ folder structure",
      icon: FolderKanban,
    },
    {
      id: 2,
      name: "Tailwind Config",
      description: "tailwind.config.ts is properly configured",
      icon: FileText,
    },
    {
      id: 3,
      name: "TypeScript Setup",
      description: "tsconfig.json with correct compiler options",
      icon: Code,
    },
  ];

  const setupGuide = [
    {
      id: 1,
      name: "Initialize Project",
      description: "npx create-next-app@latest my-app -e with-tailwindcss --typescript",
      icon: Terminal,
    },
    {
      id: 2,
      name: "Install shadcn/ui",
      description: "npx shadcn-ui@latest init",
      icon: Package,
    },
    {
      id: 3,
      name: "External Dependencies",
      description: "npm install lucide-react",
      icon: GitBranch,
    },
  ];

  // Define the security items with proper typing for the icons
  const securityItems = [
    {
      id: 1,
      name: "Encrypted by Default",
      description: "All data is protected with end-to-end encryption—whether at rest or in transit.",
      icon: Code,
    },
    {
      id: 2,
      name: "Built for Compliance",
      description: "Follows HIPAA, GDPR, PIPEDA standards with secure, certified infrastructure.",
      icon: FileText,
    },
    {
      id: 3,
      name: "Access Control",
      description: "Only you can access your data. Our team sees it only if you ask for help.",
      icon: Check,
    },
    {
      id: 4,
      name: "Privacy-First Processing",
      description: "Personal details are stripped before processing to keep data anonymous.",
      icon: AlertCircle,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-blue-950/30 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Project Setup Checklist
          </h2>
          <p className="text-blue-100/80 max-w-3xl mx-auto">
            Quick guide to confirm your project is configured correctly with shadcn, Tailwind, and TypeScript
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Current Project Status Check */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden relative h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-cyan-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Step 0: Check If Project Is Ready
                </h3>
                
                <div className="space-y-4">
                  {setupSteps.map((step) => (
                    <div 
                      key={step.id}
                      className="flex items-start p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="mr-3 p-2 rounded-full bg-green-500/20 text-green-400">
                        {React.createElement(step.icon, { size: 18 })}
                      </div>
                      <div>
                        <p className="font-medium text-white">{step.name}</p>
                        <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">
                          <Check size={14} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-green-900/20 border border-green-500/30">
                  <p className="text-center text-green-300 font-medium">
                    You're good to go! Proceed to Integration Instructions below.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Setup Guide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className={cn(
              "bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden relative h-full"
            )}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Wrench className="mr-2 h-5 w-5 text-blue-400" />
                  🛠️ Quick Setup Guide
                </h3>
                
                <div className="space-y-4">
                  {setupGuide.map((step) => (
                    <div 
                      key={step.id}
                      className="flex items-start p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="mr-3 p-2 rounded-full bg-blue-500/20 text-blue-400">
                        {React.createElement(step.icon, { size: 18 })}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">{step.name}</p>
                        <p className="text-sm text-gray-400 mt-1 break-all">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-500/30">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-300 text-sm">
                        It's important to use <code className="bg-blue-950/50 px-1 py-0.5 rounded text-xs">/components/ui</code> because shadcn uses this path convention to organize reusable UI components with proper colocation and design consistency.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Security Considerations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">
            How S10.AI Keeps Your Data Safe
          </h3>
          <p className="text-blue-100/70 max-w-3xl mx-auto mb-12">
            Our platform comes with these security measures by default
          </p>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <AnimatedIconTooltip items={securityItems} className="mb-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSetupChecklist;
