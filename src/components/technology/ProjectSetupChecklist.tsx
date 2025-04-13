
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const ProjectSetupChecklist = () => {
  // Define the security cards
  const securityCards = [
    {
      icon: Lock,
      title: "Encrypted by Default",
      description: "All data is protected with end-to-end encryption—whether at rest or in transit.",
    },
    {
      icon: FileCheck,
      title: "Built for Compliance",
      description: "Follows HIPAA, GDPR, PIPEDA standards with secure, certified infrastructure.",
    },
    {
      icon: UserCheck,
      title: "Access Control",
      description: "Only you can access your data. Our team sees it only if you ask for help.",
    },
    {
      icon: Shield,
      title: "Privacy-First Processing",
      description: "Personal details are stripped before processing to keep data anonymous.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
            How S10.AI Keeps Your Data Safe
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-3xl relative">
            <Carousel className="w-full">
              <CarouselContent>
                {securityCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/1 lg:basis-1/2">
                      <div className="p-1">
                        <div className="bg-black border border-white/20 rounded-xl p-6 h-[280px] flex flex-col justify-between transition-all duration-300 hover:border-white/40">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="relative inline-block rounded-full bg-black p-3 border border-white">
                              <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                            </span>
                            <h3 className="text-xl font-normal text-white">{card.title}</h3>
                          </div>
                          <div className="mb-4">
                            <p className="text-gray-300 leading-relaxed">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
                <CarouselPrevious className="relative static border border-white/20 text-white bg-black hover:bg-black/80 hover:text-white" />
                <CarouselNext className="relative static border border-white/20 text-white bg-black hover:bg-black/80 hover:text-white" />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSetupChecklist;
