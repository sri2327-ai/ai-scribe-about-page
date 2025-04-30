
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BadgePercent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GradientSection } from "@/components/ui/gradient-section";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { WaveBackground } from "@/components/ui/wave-background";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [activeFeatures, setActiveFeatures] = useState<'crush' | 'bravo'>('crush');
  
  // Calculator state
  const [providers, setProviders] = useState<string>('');
  const [patients, setPatients] = useState<string>('');
  const [product, setProduct] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  const [savingsResult, setSavingsResult] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const calculateSavings = () => {
    const providersNum = parseInt(providers);
    const patientsNum = parseInt(patients);
    
    if (isNaN(providersNum) || isNaN(patientsNum) || providersNum < 1 || patientsNum < 1) {
      setShowError(true);
      setSavingsResult('');
      return;
    }
    
    setShowError(false);
    let costSavings = 0;
    let hoursSaved = 0;
    
    if (product === 'crush') {
      costSavings = providersNum * patientsNum * 95;
      hoursSaved = providersNum * 2;
    } else if (product === 'bravo') {
      costSavings = providersNum * patientsNum * 50;
      hoursSaved = providersNum * 1;
    } else {
      costSavings = providersNum * patientsNum * 145;
      hoursSaved = providersNum * 3;
    }
    
    setSavingsResult(`Save $${costSavings.toLocaleString()}/month and ${hoursSaved} hours daily!`);
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

      {/* Savings Calculator */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                Calculate Your Time & Cost Savings
              </motion.h2>
              <motion.p 
                variants={fadeInUpVariants}
                custom={1}
                className="text-lg mb-8 max-w-2xl mx-auto text-[#387E89]"
              >
                Discover how CRUSH and BRAVO's time-saving automation can save thousands monthly and free up hours for patient care.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              custom={2}
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-between">
                <div className="w-full md:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Providers</label>
                  <input 
                    type="number" 
                    value={providers} 
                    onChange={(e) => setProviders(e.target.value)} 
                    placeholder="Number of Providers" 
                    min="1" 
                    className="w-full md:w-40 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patients per Day</label>
                  <input 
                    type="number" 
                    value={patients}
                    onChange={(e) => setPatients(e.target.value)}
                    placeholder="Patients per Day" 
                    min="1" 
                    className="w-full md:w-40 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
                  <select 
                    value={product}
                    onChange={(e) => setProduct(e.target.value as 'crush' | 'bravo' | 'bundle')}
                    className="w-full md:w-40 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="crush">CRUSH</option>
                    <option value="bravo">BRAVO</option>
                    <option value="bundle">Bundle</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Button 
                  onClick={calculateSavings}
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 w-full md:w-auto"
                >
                  Calculate Savings Now
                </Button>
                {showError && (
                  <p className="text-red-600 text-sm mt-2">Please enter valid numbers for providers and patients.</p>
                )}
                {savingsResult && (
                  <motion.p 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-lg font-semibold mt-6 text-[#143151] bg-blue-50 px-6 py-3 rounded-full"
                  >
                    {savingsResult}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

          {/* CRUSH Pricing */}
          {activePlan === 'crush' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#143151]">
                  CRUSH: End Charting Nightmares with AI-Powered Precision
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
                  From pinpoint-accurate notes to seamless EHR integration, CRUSH saves 2+ hours daily. Don't let documentation ruin your evenings—start now!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic (No EHR) */}
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$99' : '$990'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $198)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      {[
                        'Pinpoint accuracy',
                        'Multilingual support',
                        'Rapid documentation',
                        'AI Template Builder',
                        'Specialty Adaptation',
                        'AI Coding (ICD-10, CPT, E/M, HCC)',
                        'Telehealth Support',
                        'Available on Devices',
                        '24x7 Support',
                        'Human RCPA Specialists'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Reclaim Your Time
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>

                {/* Basic (With EHR) */}
                <motion.div 
                  className="bg-white border-2 border-[#387E89] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
                  whileHover={{ y: -5 }}
                >
                  <Badge className="absolute top-5 right-5 bg-[#387E89] hover:bg-[#387E89]">Recommended</Badge>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$139' : '$1,390'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $278)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-gray-700 font-semibold">All Basic (No EHR) features</span>
                      </li>
                      {[
                        'EHR integration (all EHRs)',
                        'Referral letters',
                        'Patient instructions',
                        'Custom templates',
                        'Contextual pre-charting'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Reclaim Your Time
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>

                {/* Pro */}
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col relative"
                  whileHover={{ y: -5 }}
                >
                  <Badge className="absolute top-5 right-5 bg-[#143151] hover:bg-[#143151]">Most Popular</Badge>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$175' : '$1,750'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $350)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-gray-700 font-semibold">All Basic (With EHR) features</span>
                      </li>
                      {[
                        'Prescription refills & lab management',
                        'Smart screening & assessments',
                        'Pre-charting & document management',
                        'Clinical decision support',
                        'Longitudinal intelligence',
                        'HCC tracking & documentation'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Reclaim Your Time
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* BRAVO Pricing */}
          {activePlan === 'bravo' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#143151]">
                  BRAVO: Slash No-Shows with Seamless Patient Engagement
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
                  Automate your front office and cut no-shows by 30% with AI-powered scheduling and patient communication. Focus on care—start today!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic */}
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$99' : '$990'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $198)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      {[
                        'Appointment Management',
                        'Patient Registration & Check-In',
                        'EHR/PMS/RCM integration',
                        'Standard support'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Engage Patients Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>

                {/* Pro */}
                <motion.div 
                  className="bg-white border-2 border-[#387E89] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
                  whileHover={{ y: -5 }}
                >
                  <Badge className="absolute top-5 right-5 bg-[#143151] hover:bg-[#143151]">Most Popular</Badge>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$299' : '$2,990'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $598)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-gray-700 font-semibold">All Basic features</span>
                      </li>
                      {[
                        'Refill Processing',
                        'Pre-Visit Assistance',
                        'Patient Education & Adherence',
                        'Preventative Care & Risk Assessments',
                        'Priority support'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Engage Patients Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>

                {/* Enterprise */}
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Enterprise</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        Custom
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Tailored for large practices
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-gray-700 font-semibold">All Pro features</span>
                      </li>
                      {[
                        'Multi-clinic management',
                        'Advanced reporting',
                        'Dedicated account manager',
                        'Custom workflows'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">Custom pricing for your needs</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Bundle Pricing */}
          {activePlan === 'bundle' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#143151]">
                  Bundle: Transform Your Practice with Comprehensive AI Solutions
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]">
                  Combine CRUSH and BRAVO for unmatched efficiency and patient satisfaction. Save 10% with our time-saving, HIPAA-compliant bundle!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic (No EHR) */}
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$179' : '$1,790'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $358)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      {[
                        'CRUSH Basic (No EHR)',
                        'BRAVO Basic',
                        '10% discount vs. separate'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Transform Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>

                {/* Basic (With EHR) */}
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$209' : '$2,090'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $418)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      {[
                        'CRUSH Basic (With EHR)',
                        'BRAVO Basic',
                        '10% discount vs. separate'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Transform Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>

                {/* Pro */}
                <motion.div 
                  className="bg-white border-2 border-[#387E89] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
                  whileHover={{ y: -5 }}
                >
                  <Badge className="absolute top-5 right-5 bg-[#143151] hover:bg-[#143151]">Best Value</Badge>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-[#143151]">
                        {billingCycle === 'monthly' ? '$399' : '$3,990'}
                        <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $798)'}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    <ul className="mb-8 space-y-3 flex-grow">
                      {[
                        'CRUSH Pro',
                        'BRAVO Pro',
                        '10% discount vs. separate',
                        'Enhanced integration',
                        'Priority onboarding'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <Button 
                      className="w-full rounded-full py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
                    >
                      Transform Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
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
          <div className="overflow-x-auto rounded-xl bg-white shadow-lg border border-gray-100">
            {activeFeatures === 'crush' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-w-full"
              >
                <table className="min-w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic (No EHR)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic (With EHR)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Documentation & Coding */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Documentation & Coding
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Pinpoint Accuracy: Nails every detail of medical jargon</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">Multilingual Support: Fluent in English, Spanish, French+</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Rapid Documentation: Charts done in under a minute</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">AI Coding: Accurate ICD-10, CPT, E/M, HCC</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>

                    {/* Customization */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Customization
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">AI Template Builder: Customize workflows easily</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">Specialty Adaptation: Cardiology, psychiatry+</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Custom Templates: Tailored to your practice</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>

                    {/* Integration */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Integration
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">EHR Integration: Seamless sync with all EHRs (Epic, Cerner, Athena)</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>

                    {/* Clinical Support */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Clinical Support
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Pre-Charting & Document Management: Proactive prep</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">Clinical Decision Support: Real-time care tips</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-w-full"
              >
                <table className="min-w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Patient Engagement */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Patient Engagement
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Appointment Management: AI-powered scheduling</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">Patient Registration & Check-In: Fast digital onboarding</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Patient Education & Adherence: Tailored content</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>

                    {/* Automation */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Automation
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Refill Processing: Streamlined medication refill handling</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">Pre-Visit Assistance: Captures complaints, prepares notes</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>

                    {/* Enterprise Features */}
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Enterprise Features
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-sm text-gray-800">Multi-clinic management</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-800">Dedicated account manager</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center">—</td>
                      <td className="px-6 py-3 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Clinicians Love CRUSH & BRAVO's Time-Saving Features
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg max-w-3xl mx-auto text-[#387E89]"
            >
              Join doctors who've eliminated late-night charting and no-shows with our AI-powered solutions.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              variants={fadeInUpVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[#143151] h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl font-serif">
                "
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">CRUSH Pro's telehealth support and HCC tracking transformed my cardiology practice. Charting's done in minutes, and I can finally focus on patients instead of paperwork!</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#387E89] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SJ
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-[#143151]">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Cardiologist, Boston Medical Center</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[#143151] h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl font-serif">
                "
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">BRAVO Pro's AI-powered scheduling and refill processing cut no-shows by 30%. My patients and staff are thrilled with the improved flow and communication!</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#387E89] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MC
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-[#143151]">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-500">Primary Care, Northwestern Memorial Hospital</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
