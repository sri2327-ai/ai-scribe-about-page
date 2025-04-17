import React from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { CompatibilitySection } from '@/components/bravo/sections/CompatibilitySection';
import { HowBravoWorksSection } from '@/components/bravo/sections/HowBravoWorksSection';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, BarChart3, Users } from "lucide-react";

const Bravo = () => {
  return (
    <div className="bg-black min-h-screen">
      <BravoHeroSection />
      <CompatibilitySection />
      
      {/* How BRAVO Works Section - Using the fixed animated component */}
      <HowBravoWorksSection />

      {/* Handle Calls Section */}
      <section className="py-20" style={{ backgroundColor: bravoColors.background.light }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: bravoColors.primary }}>
              Let BRAVO Handle Calls, Scheduling & Intake — So Your Staff Doesn't Have To
            </h2>
            <p className="text-xl md:text-2xl opacity-90" style={{ color: bravoColors.text.secondary }}>
              AI-powered front office. Available 24/7. No burnout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ACCESS Card */}
            <Card className="group backdrop-blur-lg bg-white/90 border-none hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${bravoColors.background.light}` }}>
                    <Phone className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: bravoColors.primary }}>
                    24/7 AI-Powered Patient Interaction
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'AI Chat & Phone Agents – Automate multilingual patient interactions',
                    '24/7 Availability – Never miss an inquiry, scale effortlessly',
                    'Seamless Scheduling – AI-driven booking, rescheduling & reminders'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: bravoColors.text.secondary }}>
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: bravoColors.accent.blue }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* EFFICIENCY Card */}
            <Card className="group backdrop-blur-lg bg-white/90 border-none hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${bravoColors.background.light}` }}>
                    <BarChart3 className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: bravoColors.primary }}>
                    Reduce No-Shows & Boost Revenue
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Smart Reminders & Follow-Ups – Minimize cancellations',
                    'Automated Workflows – Handle appointments, refills, intake',
                    'Revenue Protection – Denials reduced, RCM optimized'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: bravoColors.text.secondary }}>
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: bravoColors.accent.blue }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* COORDINATION Card */}
            <Card className="group backdrop-blur-lg bg-white/90 border-none hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${bravoColors.background.light}` }}>
                    <Users className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: bravoColors.primary }}>
                    Overcome Staffing Shortages with AI
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'AI Task Assignment – Smart delegation to the right person',
                    'Seamless Integration – Connects with EHR, CRM, PMS',
                    'Smarter Referrals – Automates triage & care coordination'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: bravoColors.text.secondary }}>
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: bravoColors.accent.blue }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: bravoColors.secondary }}>
              More Efficiency. Less Admin. Happier Patients.
            </p>
            <Button 
              size="lg"
              className="px-8 py-6 text-lg rounded-xl"
              style={{ 
                backgroundColor: bravoColors.secondary,
                color: bravoColors.text.white
              }}
            >
              Talk to an AI Specialist
            </Button>
          </div>
        </div>
      </section>

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
