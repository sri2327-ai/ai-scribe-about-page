
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Video, Shield, Globe, Calendar, Layers } from "lucide-react";
import { cheerColors } from '@/theme/cheer-theme';

const benefits = [
  { icon: Video, title: "All-in-One Telemedicine", description: "Built for end-to-end virtual care" },
  { icon: Shield, title: "Secure & Compliant", description: "Enterprise-grade privacy safeguards" },
  { icon: Globe, title: "No-Download Access", description: "Quick, universal participation" },
  { icon: Calendar, title: "Smarter Scheduling", description: "Fewer no-shows, better flow" },
  { icon: Layers, title: "Integrated with S10.AI Tools", description: "Extend care with automation" },
];

export const CheerWhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: cheerColors.primary }}>
                Why Clinicians Choose CHEER
              </h2>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#387E89]/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#143151] to-[#387E89]">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#143151]">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#143151] to-[#387E89] rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white transform -translate-x-1/2 translate-y-1/2" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Ready to Transform Your Virtual Care?
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    CHEER puts modern telemedicine tools into clinicians' hands—scalable, secure, and simple. Whether you're a solo provider or part of a larger health network, CHEER helps you focus on patients, not technology.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="rounded-full px-6 py-3 bg-white text-[#143151] hover:bg-gray-100 font-semibold"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="rounded-full px-6 py-3 border-white text-white hover:bg-white/10 font-semibold"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
