import React from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { CompatibilitySection } from '@/components/bravo/sections/CompatibilitySection';
import { HowBravoWorksSection } from '@/components/bravo/sections/HowBravoWorksSection';
import { VoiceSelectionInterface } from '@/components/bravo/VoiceSelectionInterface';
import { BravoAutomationBentoGrid } from '@/components/bravo/sections/BravoAutomationBentoGrid';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ROISection } from '@/components/bravo/sections/ROISection';
import { BravoTestimonialsSection } from '@/components/bravo/sections/BravoTestimonialsSection';

const Bravo = () => {
  return (
    <div className="bg-black min-h-screen">
      <BravoHeroSection />
      <CompatibilitySection />
      <HowBravoWorksSection />
      <ROISection />
      <BravoTestimonialsSection />
      
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: bravoColors.background.light }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-teal-50/30 opacity-60 blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${bravoColors.primary}, ${bravoColors.secondary})`
              }}
            >
              Let BRAVO Handle Calls, Scheduling & Intake — So Your Staff Doesn't Have To
            </h2>
            <p 
              className="text-xl md:text-2xl opacity-90 transition-all duration-300"
              style={{ color: bravoColors.text.secondary }}
            >
              AI-powered front office. Available 24/7. No burnout.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full backdrop-blur-xl bg-white/95 border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                      <Phone className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      24/7 AI-Powered Patient Interaction
                    </h3>
                  </motion.div>
                  <ul className="space-y-4">
                    {[
                      'AI Chat & Phone Agents – Automate multilingual patient interactions',
                      '24/7 Availability – Never miss an inquiry, scale effortlessly',
                      'Seamless Scheduling – AI-driven booking, rescheduling & reminders'
                    ].map((text, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                        <span className="text-gray-700">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full backdrop-blur-xl bg-white/95 border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100">
                      <BarChart3 className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Reduce No-Shows & Boost Revenue
                    </h3>
                  </motion.div>
                  <ul className="space-y-4">
                    {[
                      'Smart Reminders & Follow-Ups – Minimize cancellations',
                      'Automated Workflows – Handle appointments, refills, intake',
                      'Revenue Protection – Denials reduced, RCM optimized'
                    ].map((text, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 mt-1 flex-shrink-0 text-teal-500" />
                        <span className="text-gray-700">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full backdrop-blur-xl bg-white/95 border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                      <Users className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Overcome Staffing Shortages with AI
                    </h3>
                  </motion.div>
                  <ul className="space-y-4">
                    {[
                      'AI Task Assignment – Smart delegation to the right person',
                      'Seamless Integration – Connects with EHR, CRM, PMS',
                      'Smarter Referrals – Automates triage & care coordination'
                    ].map((text, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 mt-1 flex-shrink-0 text-purple-500" />
                        <span className="text-gray-700">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              More Efficiency. Less Admin. Happier Patients.
            </p>
            <Button 
              size="lg"
              className="px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              style={{ 
                color: bravoColors.text.white
              }}
            >
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <VoiceSelectionInterface />

      <BravoAutomationBentoGrid />
    </div>
  );
};

export default Bravo;
