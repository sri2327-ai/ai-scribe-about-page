
import React from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { CompatibilitySection } from '@/components/bravo/sections/CompatibilitySection';
import { HowBravoWorksSection } from '@/components/bravo/sections/HowBravoWorksSection';
import { VoiceSelectionInterface } from '@/components/bravo/VoiceSelectionInterface';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

const Bravo = () => {
  return (
    <div className="bg-black min-h-screen">
      <BravoHeroSection />
      <CompatibilitySection />
      
      {/* How BRAVO Works Section */}
      <HowBravoWorksSection />

      {/* Handle Calls Section - Enhanced with animations */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: bravoColors.background.light }}>
        {/* Animated background gradient */}
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
            {/* ACCESS Card */}
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

            {/* EFFICIENCY Card */}
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

            {/* COORDINATION Card */}
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

      {/* Voice Selection Interface Section */}
      <VoiceSelectionInterface />

      {/* Tasks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: bravoColors.primary }}>
            BRAVO Automates Every Front Office Task
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: bravoColors.primary }}>
                Appointment Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>AI Scheduling</strong> – Manages bookings, reschedules & cancellations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Smart Reminders</strong> – Reduces no-shows & boosts efficiency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Follow-Up Calls</strong> – Proactively reminds patients about appointments.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: bravoColors.primary }}>
                Refill Processing
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Patient Verification</strong> – Confirms identity & medication details.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Pharmacy Confirmation</strong> – Ensures prescriptions go to the right place.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Fast Processing</strong> – Instantly drafts & approves refills.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: bravoColors.primary }}>
                Seamless Patient Registration & Check-In
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Fast Onboarding</strong> – Assists patients with registration & history updates.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Automated Documentation</strong> – Prepares preliminary notes & updates EHR.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: bravoColors.primary }}>
                Pre-Visit Assistance
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>AI-Powered Clinical Summaries</strong> – Captures chief complaints & history.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Prepares Visit Notes</strong> – Generates concise summaries for providers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Enhanced Patient Experience</strong> – Digital intake reduces waiting room delays.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: bravoColors.primary }}>
                Patient Education & Medication Adherence
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Personalized Health Education</strong> – Sends tailored health content.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Automated Medication Reminders</strong> – Boosts adherence & treatment outcomes.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: bravoColors.primary }}>
                Revenue Cycle Management (RCM) Automation
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Insurance Verification</strong> – Automates eligibility checks & EHR updates.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Prior Authorizations</strong> – Streamlines treatment & procedure approvals.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span style={{ color: bravoColors.text.secondary }}>
                    <strong>Payment Posting & Denial Management</strong> – Ensures timely claim resolution.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-2xl font-semibold mb-8" style={{ color: bravoColors.secondary }}>
              One AI agent - every front office task is automated
            </p>
            <div className="mt-12 mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: bravoColors.primary }}>TESTIMONIALS</h3>
            </div>
            <p className="text-2xl font-semibold mb-8" style={{ color: bravoColors.primary }}>
              Simplify Your Front Office with BRAVO
            </p>
            <Button 
              className="px-8 py-6 text-lg rounded-md"
              style={{ 
                backgroundColor: bravoColors.secondary,
                color: bravoColors.text.white
              }}
            >
              Book a Demo & Transform Patient Scheduling Today!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bravo;
