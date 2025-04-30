
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgePercent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GradientSection } from "@/components/ui/gradient-section";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { WaveBackground } from "@/components/ui/wave-background";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { PracticeTypeSelector } from "@/components/pricing/PracticeTypeSelector";
import { PricingCards } from "@/components/pricing/PricingCards";
import { EnhancedFeatureTable } from "@/components/pricing/EnhancedFeatureTable";
import { InteractiveTestimonials } from "@/components/pricing/InteractiveTestimonials";

const Pricing = () => {
  console.log("Rendering Pricing page");
  const [activePlan, setActivePlan] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [activeFeatures, setActiveFeatures] = useState<'crush' | 'bravo'>('crush');
  
  useEffect(() => {
    console.log("Pricing page mounted");
    document.title = "Pricing - S10.AI | CRUSH & BRAVO Solutions";
  }, []);
  
  // Handle practice selection
  const handlePracticeSelection = (planType: string) => {
    if (planType.startsWith('crush')) {
      setActivePlan('crush');
    } else if (planType.startsWith('bravo')) {
      setActivePlan('bravo');
    } else if (planType.startsWith('bundle')) {
      setActivePlan('bundle');
    }
  };

  // Animate in variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Pricing - S10.AI | CRUSH & BRAVO AI Solutions</title>
        <meta name="description" content="Discover flexible pricing options for S10.AI's CRUSH AI Scribe and BRAVO Patient Engagement solutions. Save hours daily, starting at just $99/month." />
      </Helmet>

      {/* Hero Section */}
      <WaveBackground 
        intensity="medium" 
        baseColor={crushAIColors.tertiary}
        height="auto"
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#143151]">
              Reclaim Your Life with AI-Powered CRUSH & BRAVO
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#387E89]">
              Eliminate endless charting and no-shows with our HIPAA-compliant AI medical scribe and patient engagement tools. Save hours daily, starting at just $99/month.
            </p>
            <Button 
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Saving Time Today
              <ArrowRight className="ml-2" />
            </Button>
            <p className="mt-4 text-sm text-[#143151]/70">30-Day Money-Back Guarantee • No Contracts</p>
          </motion.div>
        </div>
      </WaveBackground>

      {/* Interactive Practice Type Selector */}
      <PracticeTypeSelector onSelect={handlePracticeSelection} />

      {/* Savings Calculator */}
      <PricingCalculator />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg max-w-2xl mx-auto text-[#387E89]"
            >
              Choose the right plan for your practice and start saving time immediately.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            <Button 
              variant={activePlan === 'crush' ? 'default' : 'outline'}
              onClick={() => setActivePlan('crush')}
              className={`rounded-full px-6 py-2 ${activePlan === 'crush' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              CRUSH (AI Scribe)
            </Button>
            <Button 
              variant={activePlan === 'bravo' ? 'default' : 'outline'}
              onClick={() => setActivePlan('bravo')}
              className={`rounded-full px-6 py-2 ${activePlan === 'bravo' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              BRAVO (Patient Engagement)
            </Button>
            <Button 
              variant={activePlan === 'bundle' ? 'default' : 'outline'}
              onClick={() => setActivePlan('bundle')}
              className={`rounded-full px-6 py-2 ${activePlan === 'bundle' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              Bundle
            </Button>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-full p-1">
              <Button 
                variant="ghost"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-full ${billingCycle === 'monthly' ? 'bg-[#143151] text-white' : 'text-gray-700 hover:text-[#143151]'}`}
              >
                Monthly
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setBillingCycle('annual')}
                className={`rounded-full flex items-center ${billingCycle === 'annual' ? 'bg-[#143151] text-white' : 'text-gray-700 hover:text-[#143151]'}`}
              >
                Annual
                <BadgePercent className="ml-2 h-4 w-4" />
                <span className="text-xs ml-1">Save 16%</span>
              </Button>
            </div>
          </div>

          {/* Render the appropriate pricing cards based on active plan */}
          <motion.div 
            key={activePlan + billingCycle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activePlan === 'crush' && (
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#143151]">
                  CRUSH: End Charting Nightmares with AI-Powered Precision
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
                  From pinpoint-accurate notes to seamless EHR integration, CRUSH saves 2+ hours daily. Don't let documentation ruin your evenings—start now!
                </p>
              </div>
            )}

            {activePlan === 'bravo' && (
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#143151]">
                  BRAVO: Slash No-Shows with Seamless Patient Engagement
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
                  Automate your front office and cut no-shows by 30% with AI-powered scheduling and patient communication. Focus on care—start today!
                </p>
              </div>
            )}

            {activePlan === 'bundle' && (
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#143151]">
                  Bundle: Transform Your Practice with Comprehensive AI Solutions
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
                  Combine CRUSH and BRAVO for unmatched efficiency and patient satisfaction. Save 10% with our time-saving, HIPAA-compliant bundle!
                </p>
              </div>
            )}

            <PricingCards activePlan={activePlan} billingCycle={billingCycle} />
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]"
            >
              Why CRUSH & BRAVO Are the Ultimate AI-Powered Solutions
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg max-w-3xl mx-auto text-[#387E89]"
            >
              Discover time-saving, customizable features that set CRUSH and BRAVO apart, boosting efficiency and patient satisfaction.
            </motion.p>
          </motion.div>

          {/* Feature Toggle */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant={activeFeatures === 'crush' ? 'default' : 'outline'}
              onClick={() => setActiveFeatures('crush')}
              className={`rounded-full px-6 py-2 ${activeFeatures === 'crush' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              CRUSH Features
            </Button>
            <Button 
              variant={activeFeatures === 'bravo' ? 'default' : 'outline'}
              onClick={() => setActiveFeatures('bravo')}
              className={`rounded-full px-6 py-2 ${activeFeatures === 'bravo' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              BRAVO Features
            </Button>
          </div>

          {/* Feature Tables */}
          <motion.div 
            key={activeFeatures}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <EnhancedFeatureTable product={activeFeatures} />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <InteractiveTestimonials />

      {/* Why Choose */}
      <GradientSection 
        intensity="light"
        variant="radial"
        sx={{ py: 16 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]"
            >
              Why Clinicians Trust CRUSH & BRAVO
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg max-w-3xl mx-auto text-[#387E89]"
            >
              Ditch outdated tools. Our HIPAA-compliant, AI-powered solutions are built for clinicians.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              variants={fadeInUpVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#143151]">Save Hours Daily</h3>
              <p className="text-gray-700">CRUSH's rapid charting and BRAVO's automation eliminate admin burdens, saving clinicians 2+ hours every day.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><path d="M16 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4Z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#143151]">Tailored for You</h3>
              <p className="text-gray-700">Specialty-specific scribe and seamless EHR/PMS integration fit your unique clinical workflow needs.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#143151]">Bulletproof Security</h3>
              <p className="text-gray-700">HIPAA, SOC 2, HITECH compliance keeps your patient data safe and secure at all times.</p>
            </motion.div>
          </div>
        </div>
      </GradientSection>

      {/* Security & Compliance */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]"
            >
              Industry-Leading Security & Compliance
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg max-w-3xl mx-auto text-[#387E89]"
            >
              Our HIPAA-compliant solutions protect your patients' data with top-tier standards.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {['HIPAA', 'SOC 2', 'HITECH', 'GDPR', 'ISO 27001', 'HITRUST', 'PHIPA'].map((badge, index) => (
              <Badge 
                key={index} 
                className="text-base font-medium py-2 px-4 bg-[#143151] hover:bg-[#143151]"
              >
                {badge}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Revolutionize Your Practice?
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg mb-8 max-w-3xl mx-auto"
            >
              Start saving hours of documentation time today. Experience the freedom of AI-powered clinical solutions with our 30-day money-back guarantee.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              custom={2}
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-white text-[#143151] hover:bg-gray-100 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your 30-Day Risk-Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-white/80">No credit card required for demo • Cancel anytime</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
