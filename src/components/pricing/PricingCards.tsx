
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface PricingCardsProps {
  activePlan: 'crush' | 'bravo' | 'bundle';
  billingCycle: 'monthly' | 'annual';
}

export const PricingCards = ({ activePlan, billingCycle }: PricingCardsProps) => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  // Render different plan cards based on the active plan
  const renderPlanCards = () => {
    if (activePlan === 'crush') {
      return (
        <>
          {/* Basic (No EHR) */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$99' : '$990'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $198)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Reclaim Your Time
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
            </div>
          </motion.div>

          {/* Basic (With EHR) */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative h-full"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={2}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center z-10">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-2 rounded-full font-bold shadow-lg transform -translate-y-1/2 text-sm">
                RECOMMENDED
              </div>
            </div>
            <div 
              className="p-6 md:p-8 flex flex-col flex-grow mt-4 border-2 h-full" 
              style={{ 
                borderColor: '#143151',
                borderRadius: 'inherit'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$139' : '$1,390'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $278)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">All Basic (No EHR) features</span>
                </li>
                {[
                  'EHR integration (all EHRs)',
                  'Referral letters',
                  'Patient instructions',
                  'Custom templates',
                  'Contextual pre-charting'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-x-2 border-b-2 border-[#143151]" style={{ borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Reclaim Your Time
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col relative h-full"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={3}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center z-10">
              <div className="bg-[#387E89] text-white px-6 py-2 rounded-full font-bold shadow-lg transform -translate-y-1/2 text-sm">
                MOST POPULAR
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow mt-4">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$175' : '$1,750'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $350)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
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
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Reclaim Your Time
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
            </div>
          </motion.div>
        </>
      );
    } else if (activePlan === 'bravo') {
      return (
        <>
          {/* Basic */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$99' : '$990'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $198)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Engage Patients Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={2}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center z-10">
              <div className="bg-[#387E89] text-white px-6 py-2 rounded-full font-bold shadow-lg transform -translate-y-1/2 text-sm">
                MOST POPULAR
              </div>
            </div>
            <div 
              className="p-6 md:p-8 flex flex-col flex-grow mt-4 border-2 h-full" 
              style={{ 
                borderColor: '#143151',
                borderRadius: 'inherit'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$299' : '$2,990'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $598)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-x-2 border-b-2 border-[#143151]" style={{ borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
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
            variants={fadeInUpVariants}
            custom={3}
          >
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Enterprise</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  Custom
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored for large practices
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">Custom pricing for your needs</p>
            </div>
          </motion.div>
        </>
      );
    } else {
      return (
        <>
          {/* Basic (No EHR) */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$179' : '$1,790'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $358)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
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
            variants={fadeInUpVariants}
            custom={2}
          >
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$209' : '$2,090'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $418)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Transform Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={3}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center z-10">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-2 rounded-full font-bold shadow-lg transform -translate-y-1/2 text-sm">
                BEST VALUE
              </div>
            </div>
            <div 
              className="p-6 md:p-8 flex flex-col flex-grow mt-4 border-2 h-full" 
              style={{ 
                borderColor: '#143151',
                borderRadius: 'inherit'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$399' : '$3,990'}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save $798)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-3 flex-grow">
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
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-x-2 border-b-2 border-[#143151]" style={{ borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
              <Button 
                className="w-full rounded-full py-5 md:py-6 font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300"
              >
                Transform Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">30-day money-back guarantee</p>
            </div>
          </motion.div>
        </>
      );
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
    >
      {renderPlanCards()}
    </motion.div>
  );
};
