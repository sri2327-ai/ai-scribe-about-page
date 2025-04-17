
import React from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { CompatibilitySection } from '@/components/bravo/sections/CompatibilitySection';
import { HowBravoWorksSection } from '@/components/bravo/sections/HowBravoWorksSection';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Bravo = () => {
  return (
    <div className="bg-black min-h-screen">
      <BravoHeroSection />
      <CompatibilitySection />
      
      {/* How BRAVO Works Section - Using the fixed animated component */}
      <HowBravoWorksSection />

      {/* Handle Calls Section */}
      <section className="py-20 bg-gray-50" style={{ backgroundColor: bravoColors.background.light }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: bravoColors.primary }}>
            Let BRAVO Handle Calls, Scheduling & Intake – So Your Staff Doesn't Have To
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-center mb-4" style={{ color: bravoColors.primary }}>
                  ACCESS – 24/7 AI-Powered Patient Interaction
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>AI Chat & Phone Agents</strong> – Automate multilingual patient interactions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>24/7 Availability</strong> – Never miss an inquiry, scale effortlessly.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>Seamless Scheduling</strong> – AI-driven booking, rescheduling & reminders.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-center mb-4" style={{ color: bravoColors.primary }}>
                  EFFICIENCY – Reduce No-Shows & Boost Revenue
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>Smart Reminders & Follow-Ups</strong> – Minimize cancellations & increase billable visits.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>Automated Workflows</strong> – Handle appointments, refills & intake with zero hassle.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>Revenue Protection</strong> – Reduce denials, streamline RCM & optimize reimbursements.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-center mb-4" style={{ color: bravoColors.primary }}>
                  COORDINATION – Overcome Staffing Shortages with AI
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>AI Task Assignment</strong> – Smart delegation for better front-office efficiency.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>Seamless Integration</strong> – Connects with EHR, CRM, PMS & call center systems.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span style={{ color: bravoColors.text.secondary }}>
                      <strong>Smarter Referrals</strong> – Automates patient triage, care coordination & messaging.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-2xl font-semibold mb-8" style={{ color: bravoColors.secondary }}>
              More Efficiency. Less Admin. Happier Patients.
            </p>
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
