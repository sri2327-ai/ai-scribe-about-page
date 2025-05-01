
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BadgePercent } from "lucide-react";
import { Card } from "@/components/ui/card";

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

  // Calculate annual price with savings (16%)
  const calculateAnnualPrice = (monthlyPrice: string): string => {
    if (monthlyPrice.includes('$')) {
      const numericPart = monthlyPrice.match(/\$(\d+)/);
      if (numericPart && numericPart[1]) {
        const monthly = parseInt(numericPart[1]);
        const annual = (monthly * 10).toLocaleString(); // 12 months - 16% discount ≈ 10 months worth
        return `$${annual}`;
      }
    }
    return monthlyPrice;
  };

  // Render different plan cards based on the active plan
  const renderPlanCards = () => {
    if (activePlan === 'crush') {
      return (
        <>
          {/* Basic (No EHR) */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={1}
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
                  'Human RCPA Specialists',
                  'Care plan',
                  'Referral letters'
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
            </div>
          </motion.div>

          {/* Basic (With EHR) */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={2}
            style={{ 
              borderWidth: '2px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to right, #143151, #387E89) 1'
            }}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-2 rounded-b-xl font-bold shadow-lg text-sm translate-y-0.5">
                RECOMMENDED
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow mt-8">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
              <div className="mb-4">
                <p className="text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$149-$199' : '$1,490-$1,990'}
                  <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored to your practice
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
                  'Advanced Custom templates',
                  'Contextual pre-charting',
                  'Prescription refills & lab management'
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col relative"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={3}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center">
              <div className="bg-[#387E89] text-white px-6 py-2 rounded-b-xl font-bold shadow-lg text-sm translate-y-0.5">
                MOST POPULAR
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow mt-8">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-[#143151]">
                  Custom pricing
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-8 space-y-3 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span className="text-gray-700 font-semibold">All Basic (With EHR) features</span>
                </li>
                {[
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
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
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic</h3>
              <div className="mb-4">
                <p className="text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? 'From $99' : 'From $990'}
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={2}
            style={{ 
              borderWidth: '2px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to right, #143151, #387E89) 1'
            }}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center">
              <div className="bg-[#387E89] text-white px-6 py-2 rounded-b-xl font-bold shadow-lg text-sm translate-y-0.5">
                MOST POPULAR
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow mt-8">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-4xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? 'Up to $299' : 'Up to $2,990'}
                  <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored to your practice
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={3}
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
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$159-$399' : '$1,590-$3,990'}
                  <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored to your practice
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
            </div>
          </motion.div>

          {/* Basic (With EHR) */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={2}
          >
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-[#143151]">
                  {billingCycle === 'monthly' ? '$199-$399' : '$1,990-$3,990'}
                  <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored to your practice
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            whileHover={{ y: -5 }}
            variants={fadeInUpVariants}
            custom={3}
            style={{ 
              borderWidth: '2px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to right, #143151, #387E89) 1'
            }}
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-2 rounded-b-xl font-bold shadow-lg text-sm translate-y-0.5">
                BEST VALUE
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow mt-8">
              <h3 className="text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-[#143151]">
                  Custom pricing
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Tailored to your practice
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
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">No credit card required</p>
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
      className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {renderPlanCards()}
    </motion.div>
  );
};
