import React from 'react';
import { CAHeroSection } from '@/components/custom-ai-agent/CAHeroSection';
import { CABentoGrid } from '@/components/custom-ai-agent/CABentoGrid';
import { CAWhyChooseSection } from '@/components/custom-ai-agent/CAWhyChooseSection';
import { CARoleBenefits } from '@/components/custom-ai-agent/CARoleBenefits';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

const CustomAIAgent = () => {
  return (
    <div className="bg-white min-h-screen">
      <CAHeroSection />
      <CABentoGrid />
      <CAWhyChooseSection />
      
      {/* Built for Busy Clinics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: customAIAgentColors.primary }}>
              Built for Busy Clinics, Designed for Care Teams
            </h2>
            <p className="text-lg mb-12 text-center" style={{ color: customAIAgentColors.text.secondary }}>
              From patient intake to insurance verifications, your daily workflow is full of manual steps that slow you down. S10.AI eliminates those bottlenecks with intelligent automation—purpose-built for outpatient clinics, specialty practices, and medical groups.
            </p>
          </div>
        </div>
      </section>

      {/* New Role Benefits Section */}
      <CARoleBenefits />

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: customAIAgentColors.primary }}>
              Why Choose Custom AI Agents?
            </h2>
            <p className="text-lg mb-8" style={{ color: customAIAgentColors.text.secondary }}>
              Every clinic has workflows that don't quite fit standard solutions. Maybe it's the way your cardiology team tracks stress tests, or how your pediatric practice manages developmental screenings. That's where S10.AI's Custom AI Agents shine—delivering hyper-specialized automation that's as unique as your practice.
            </p>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Precision for Your Workflows:</strong> From rare disease management to post-surgical care, our agents are engineered for your exact needs, ensuring no task is too complex.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Seamless Integration:</strong> Syncs effortlessly with any EHR, SIP, or PMS platform, working hand-in-hand with CRUSH and BRAVO for end-to-end efficiency.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Clinician-Centric Design:</strong> Adapts to your specialty's nuances, reducing cognitive load and restoring focus to patient interactions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Burnout Relief:</strong> Automates repetitive, niche tasks—like generating chemotherapy schedules or MIPS reporting—so you can reclaim your time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Trusted Security:</strong> HIPAA, GDPR, and ISO 27001 compliant, with AES-256 encryption and automated data erasure for peace of mind.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Custom AI Agents Transform Your Practice */}
      <section className="py-20 bg-gray-50" style={{ backgroundColor: customAIAgentColors.background.light }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: customAIAgentColors.primary }}>
              How Custom AI Agents Transform Your Practice
            </h2>
            <p className="text-lg mb-12" style={{ color: customAIAgentColors.text.secondary }}>
              Imagine an AI that feels like it was built just for you. Our Custom AI Agents tackle the workflows that standard tools overlook, delivering measurable impact across specialties. Here's how they work:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${customAIAgentColors.tertiary}50` }}>
                    <span className="text-xl font-bold" style={{ color: customAIAgentColors.primary }}>1️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>Discover Your Needs</h3>
                  <p style={{ color: customAIAgentColors.text.secondary }}>
                    We start with a consultative session to pinpoint your practice's unique challenges—whether it's automating prior authorizations for neurology or triaging dermatology referrals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${customAIAgentColors.tertiary}50` }}>
                    <span className="text-xl font-bold" style={{ color: customAIAgentColors.primary }}>2️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>Build Your Agent</h3>
                  <p style={{ color: customAIAgentColors.text.secondary }}>
                    Using IPKO's advanced AI, we craft a bespoke agent tailored to your workflow, trained on your specialty's terminology, protocols, and goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${customAIAgentColors.tertiary}50` }}>
                    <span className="text-xl font-bold" style={{ color: customAIAgentColors.primary }}>3️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>Seamless Deployment</h3>
                  <p style={{ color: customAIAgentColors.text.secondary }}>
                    Your agent integrates with your existing systems in under a week, syncing with CRUSH's real-time notes and BRAVO's patient engagement tools for a cohesive experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${customAIAgentColors.tertiary}50` }}>
                    <span className="text-xl font-bold" style={{ color: customAIAgentColors.primary }}>4️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>Ongoing Optimization</h3>
                  <p style={{ color: customAIAgentColors.text.secondary }}>
                    Our team monitors performance, refining your agent to ensure it evolves with your practice, delivering consistent efficiency and accuracy.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-12">
              <Button 
                className="px-8 py-6 text-lg rounded-md"
                style={{ 
                  backgroundColor: customAIAgentColors.secondary,
                  color: customAIAgentColors.text.white
                }}
              >
                See It in Action: Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: customAIAgentColors.primary }}>
              Real-World Impact: Custom AI Agents in Action
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <span className="mr-3 text-blue-500 text-xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: customAIAgentColors.secondary }}>Oncology</h3>
                    <p style={{ color: customAIAgentColors.text.secondary }}>
                      A custom agent automates chemotherapy dosing schedules, pulling real-time lab data and flagging potential complications, saving clinicians 12 hours weekly.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <span className="mr-3 text-blue-500 text-xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: customAIAgentColors.secondary }}>Orthopedics</h3>
                    <p style={{ color: customAIAgentColors.text.secondary }}>
                      An agent streamlines post-surgical rehab plans, integrating with CRUSH to document progress and with BRAVO to send patient reminders, reducing no-shows by 30%.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <span className="mr-3 text-blue-500 text-xl">•</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: customAIAgentColors.secondary }}>Compliance</h3>
                    <p style={{ color: customAIAgentColors.text.secondary }}>
                      A custom agent ensures MIPS reporting compliance, auto-generating audit-ready documentation and cutting administrative time by 50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-lg bg-gray-50 mb-12 italic" style={{ backgroundColor: `${customAIAgentColors.tertiary}15` }}>
              <p className="text-lg" style={{ color: customAIAgentColors.text.secondary }}>
                "S10.AI's Custom AI Agent transformed our rare disease clinic. It automates complex genetic screening workflows, letting us focus on patients, not paperwork. It's like having an extra specialist on staff!"
              </p>
              <p className="text-right mt-4 font-medium" style={{ color: customAIAgentColors.primary }}>
                — Dr. Sarah Patel, Genetic Medicine Specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stand Out Section */}
      <section className="py-20 bg-gray-50" style={{ backgroundColor: customAIAgentColors.background.light }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: customAIAgentColors.primary }}>
              Why S10.AI's Custom AI Agents Stand Out
            </h2>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Hyper-Personalized:</strong> Unlike generic AI tools, our agents are built for your workflow, leveraging IPKO's specialty-specific intelligence.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Ecosystem Synergy:</strong> Enhances CRUSH's documentation and BRAVO's engagement, creating a unified AI-powered practice.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Cost-Effective Expertise:</strong> Replaces the need for specialized staff, delivering high-value automation at a fraction of the cost.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Proven Trust:</strong> Backed by 1,000+ clinicians and S10.AI's industry-leading security, compliance, and integration standards.
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>
              Automate What's Unique. Elevate What's Human.
            </h3>
            <p className="text-lg mb-8" style={{ color: customAIAgentColors.text.secondary }}>
              Custom AI Agents don't just save time—they empower clinicians to practice at their best. By automating the workflows that make your specialty distinct, we help you reduce administrative fatigue, boost productivity, and deliver care that feels personal and precise.
            </p>
            
            <div className="p-6 bg-white rounded-lg shadow-md mb-12">
              <h3 className="text-xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>
                Ready to Build Your Custom AI Agent?
              </h3>
              <p className="mb-6" style={{ color: customAIAgentColors.text.secondary }}>
                Book a discovery session today, and let's design an AI that's as unique as your practice.
              </p>
              <Button 
                className="w-full py-4 text-lg rounded-md"
                style={{ 
                  backgroundColor: customAIAgentColors.secondary,
                  color: customAIAgentColors.text.white
                }}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: customAIAgentColors.primary }}>
              Trust & Technology Behind Custom AI Agents
            </h2>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Powered by IPKO:</strong> Our patented AI orchestrates medical knowledge, cross-lingual precision, and intuitive interfaces for unmatched adaptability.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Science-Driven Accuracy:</strong> Built on truth-first AI, ensuring reliable automation for even the most intricate workflows.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Unbreakable Security:</strong> HIPAA, PIPEDA, GDPR, and ISO 27001 compliant, with no data storage and AES-256 encryption.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 text-xl">•</span>
                <span style={{ color: customAIAgentColors.text.secondary }}>
                  <strong>Scalable for Growth:</strong> Adapts to your practice's evolving needs, from solo clinics to multispecialty enterprises.
                </span>
              </li>
            </ul>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: customAIAgentColors.primary }}>
                Join Top Clinics Transforming Care with S10.AI
              </h3>
              <p className="text-lg mb-8" style={{ color: customAIAgentColors.secondary }}>
                Optimize your practice with Custom AI Agents
              </p>
              <Button 
                className="px-8 py-6 text-lg rounded-md"
                style={{ 
                  backgroundColor: customAIAgentColors.secondary,
                  color: customAIAgentColors.text.white
                }}
              >
                Book a Demo Today!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAIAgent;
