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

      {/* Hero Section - Updated to fit first viewport */}
      <WaveBackground 
        intensity="medium" 
        baseColor={crushAIColors.tertiary}
        height="calc(100vh - 80px)"
        className="flex items-center"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 text-[#143151]">
              Reclaim Your Life with AI-Powered CRUSH & BRAVO
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-7 max-w-3xl mx-auto text-[#387E89]">
              Eliminate endless charting and no-shows with our HIPAA-compliant AI medical scribe and patient engagement tools. Save over 2 hours per day—plans start at just $99/month!
            </p>
            <Button 
              size="lg"
              className="rounded-full px-4 md:px-8 py-4 md:py-5 text-base md:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Try Risk-Free for 30 Days
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-[#143151]/70">30-Day Money-Back Guarantee • No Credit Card Required</p>
          </motion.div>
        </div>
      </WaveBackground>

      {/* Interactive Practice Type Selector */}
      <PracticeTypeSelector onSelect={handlePracticeSelection} />

      {/* Savings Calculator */}
      <PricingCalculator />

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#143151]"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg max-w-2xl mx-auto text-[#387E89]"
            >
              Choose the right plan for your practice and start saving time immediately.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            <Button 
              variant={activePlan === 'crush' ? 'default' : 'outline'}
              onClick={() => setActivePlan('crush')}
              className={`rounded-full px-4 md:px-6 py-1 md:py-2 text-sm ${activePlan === 'crush' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              CRUSH (AI Scribe)
            </Button>
            <Button 
              variant={activePlan === 'bravo' ? 'default' : 'outline'}
              onClick={() => setActivePlan('bravo')}
              className={`rounded-full px-4 md:px-6 py-1 md:py-2 text-sm ${activePlan === 'bravo' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              BRAVO (Patient Engagement)
            </Button>
            <Button 
              variant={activePlan === 'bundle' ? 'default' : 'outline'}
              onClick={() => setActivePlan('bundle')}
              className={`rounded-full px-4 md:px-6 py-1 md:py-2 text-sm ${activePlan === 'bundle' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''}`}
            >
              Bundle
            </Button>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex bg-gray-100 rounded-full p-1">
              <Button 
                variant="ghost"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-full text-xs md:text-sm ${billingCycle === 'monthly' ? 'bg-[#143151] text-white' : 'text-gray-700 hover:text-[#143151]'}`}
              >
                Monthly
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setBillingCycle('annual')}
                className={`rounded-full flex items-center text-xs md:text-sm ${billingCycle === 'annual' ? 'bg-[#143151] text-white' : 'text-gray-700 hover:text-[#143151]'}`}
              >
                Annual
                <BadgePercent className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
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
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-[#143151]">
                  CRUSH: End Charting Nightmares with AI-Powered Precision
                </h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto text-[#387E89]">
                  From pinpoint-accurate notes to seamless EHR integration, CRUSH saves 2+ hours daily. Don't let documentation ruin your evenings—start now!
                </p>
              </div>
            )}

            {activePlan === 'bravo' && (
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-[#143151]">
                  BRAVO: Slash No-Shows with Seamless Patient Engagement
                </h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto text-[#387E89]">
                  Automate your front office and cut no-shows by 30% with AI-powered scheduling and patient communication. Focus on care—start today!
                </p>
              </div>
            )}

            {activePlan === 'bundle' && (
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-[#143151]">
                  Bundle: Transform Your Practice with Comprehensive AI Solutions
                </h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto text-[#387E89]">
                  Combine CRUSH and BRAVO for unmatched efficiency and patient satisfaction. Save 10% with our time-saving, HIPAA-compliant bundle!
                </p>
              </div>
            )}

            <PricingCards activePlan={activePlan} billingCycle={billingCycle} />
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-14"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-5 text-[#143151]"
            >
              Why CRUSH & BRAVO Are the Ultimate AI-Powered Solutions
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#387E89]"
            >
              Discover time-saving, customizable features that set CRUSH and BRAVO apart, boosting efficiency and patient satisfaction.
            </motion.p>
          </motion.div>

          {/* Feature Toggle - Improved for mobile */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-6 md:mb-10">
            <Button 
              variant={activeFeatures === 'crush' ? 'default' : 'outline'}
              onClick={() => setActiveFeatures('crush')}
              className={`rounded-full px-5 md:px-8 py-2 md:py-3 text-sm md:text-base ${activeFeatures === 'crush' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'border-2 border-[#387E89]/50'}`}
            >
              CRUSH Features
            </Button>
            <Button 
              variant={activeFeatures === 'bravo' ? 'default' : 'outline'}
              onClick={() => setActiveFeatures('bravo')}
              className={`rounded-full px-5 md:px-8 py-2 md:py-3 text-sm md:text-base ${activeFeatures === 'bravo' ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'border-2 border-[#387E89]/50'}`}
            >
              BRAVO Features
            </Button>
          </div>

          {/* Feature Tables - Improved scrolling for mobile */}
          <motion.div 
            key={activeFeatures}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          >
            <div className="min-w-[768px] md:min-w-0">
              <EnhancedFeatureTable product={activeFeatures} />
            </div>
          </motion.div>
          
          {/* Mobile scroll indicator */}
          <div className="flex md:hidden justify-center mt-3 items-center text-sm text-[#387E89]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path></svg>
            Swipe to see all features
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <InteractiveTestimonials />

      {/* Why Choose */}
      <GradientSection 
        intensity="light"
        variant="radial"
        sx={{ py: { xs: 8, md: 16 } }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#143151]"
            >
              Why Clinicians Trust CRUSH & BRAVO
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg max-w-3xl mx-auto text-[#387E89]"
            >
              Ditch outdated tools. Our HIPAA-compliant, AI-powered solutions are built for clinicians.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div 
              variants={fadeInUpVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center text-white mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#143151]">Save Hours Daily</h3>
              <p className="text-sm md:text-base text-gray-700">CRUSH's rapid charting and BRAVO's automation eliminate admin burdens, saving clinicians 2+ hours every day.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center text-white mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><path d="M16 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4Z" /></svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#143151]">Tailored for You</h3>
              <p className="text-sm md:text-base text-gray-700">Specialty-specific scribe and seamless EHR/PMS integration fit your unique clinical workflow needs.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center text-white mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#143151]">Bulletproof Security</h3>
              <p className="text-sm md:text-base text-gray-700">HIPAA, SOC 2, HITECH compliance keeps your patient data safe and secure at all times.</p>
            </motion.div>
          </div>
        </div>
      </GradientSection>

      {/* Security & Compliance */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#143151]"
            >
              Industry-Leading Security & Compliance
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg max-w-3xl mx-auto text-[#387E89]"
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
            className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto"
          >
            {['HIPAA', 'SOC 2', 'HITECH', 'GDPR', 'ISO 27001', 'HITRUST', 'PHIPA'].map((badge, index) => (
              <Badge 
                key={index} 
                className="text-sm md:text-base font-medium py-1 md:py-2 px-3 md:px-4 bg-[#143151] hover:bg-[#143151]"
              >
                {badge}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUpVariants}
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
            >
              Ready to Revolutionize Your Practice?
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto"
            >
              Start saving hours of documentation time today. Experience the freedom of AI-powered clinical solutions with our 30-day money-back guarantee.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              custom={2}
            >
              <Button 
                size="lg" 
                className="rounded-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg bg-white text-[#143151] hover:bg-gray-100 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Your 30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/80">No credit card required for demo • Cancel anytime</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
