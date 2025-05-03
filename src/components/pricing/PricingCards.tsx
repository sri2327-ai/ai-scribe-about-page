
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BadgePercent } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CurrencyCode } from './CurrencySelector';
import { getPricingByCurrency } from '@/utils/pricing';

interface PricingCardsProps {
  activePlan: 'crush' | 'bravo' | 'bundle';
  billingCycle: 'monthly' | 'annual';
  selectedCurrency: CurrencyCode;
}

export const PricingCards = ({ activePlan, billingCycle, selectedCurrency }: PricingCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // Reset index when plan changes
    setCurrentIndex(0);
  }, [activePlan]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };
  
  // Get pricing for the selected currency and billing cycle
  const pricingData = getPricingByCurrency(selectedCurrency, billingCycle);
  
  // For mobile carousel
  const getNumCards = () => {
    if (activePlan === 'crush' || activePlan === 'bravo' || activePlan === 'bundle') {
      return 3;
    }
    return 0;
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
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-4xl font-bold text-[#143151]">
                  {pricingData.crush.noEhr}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save 16%)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
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
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">No credit card required</p>
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
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 md:px-6 py-1 md:py-2 rounded-b-xl font-bold shadow-lg text-xs md:text-sm translate-y-0.5">
                RECOMMENDED
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-4xl font-bold text-[#143151]">
                  {pricingData.crush.withEhr}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                  <span className="text-gray-700 font-semibold">All Basic (No EHR) features</span>
                </li>
                {[
                  'EHR integration (all EHRs)',
                  'Advanced Custom templates',
                  'Contextual pre-charting',
                  'Prescription refills & lab management'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                Contact For Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">Tailored to your needs</p>
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
              <div className="bg-[#387E89] text-white px-4 md:px-6 py-1 md:py-2 rounded-b-xl font-bold shadow-lg text-xs md:text-sm translate-y-0.5">
                MOST POPULAR
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-bold text-[#143151]">
                  {pricingData.crush.pro}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
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
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                Contact For Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">Tailored to your needs</p>
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
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Basic</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-4xl font-bold text-[#143151]">
                  From {pricingData.bravo.noEhr}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually (save 16%)'}
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                {[
                  'Appointment Management',
                  'Patient Registration & Check-In',
                  'EHR/PMS/RCM integration',
                  'Standard support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">No credit card required</p>
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
              <div className="bg-[#387E89] text-white px-4 md:px-6 py-1 md:py-2 rounded-b-xl font-bold shadow-lg text-xs md:text-sm translate-y-0.5">
                MOST POPULAR
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-4xl font-bold text-[#143151]">
                  {pricingData.bravo.withEhr}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
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
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                Contact For Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">Tailored to your needs</p>
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
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Enterprise</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-bold text-[#143151]">
                  {pricingData.bravo.pro}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored for large practices
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                  <span className="text-gray-700 font-semibold">All Pro features</span>
                </li>
                {[
                  'Multi-clinic management',
                  'Advanced reporting',
                  'Dedicated account manager',
                  'Custom workflows'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">Custom pricing for your needs</p>
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
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Basic (No EHR)</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-bold text-[#143151]">
                  From {pricingData.bundle.noEhr}
                  <span className="text-base md:text-lg text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                {[
                  'CRUSH Basic (No EHR)',
                  'BRAVO Basic',
                  '10% discount vs. separate'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                30-Day Money-Back Guarantee
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">No credit card required</p>
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
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Basic (With EHR)</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-bold text-[#143151]">
                  {pricingData.bundle.withEhr}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                {[
                  'CRUSH Basic (With EHR)',
                  'BRAVO Basic',
                  '10% discount vs. separate'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                Contact For Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">Tailored to your needs</p>
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
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 md:px-6 py-1 md:py-2 rounded-b-xl font-bold shadow-lg text-xs md:text-sm translate-y-0.5">
                BEST VALUE
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#143151]">Pro</h3>
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-bold text-[#143151]">
                  {pricingData.bundle.pro}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Tailored to your practice
                </p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow text-sm md:text-base">
                {[
                  'CRUSH Pro',
                  'BRAVO Pro',
                  '10% discount vs. separate',
                  'Enhanced integration',
                  'Priority onboarding'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button 
                className="w-full rounded-full py-3 md:py-6 text-xs md:text-sm font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 whitespace-normal"
              >
                Contact For Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 md:mt-4">Tailored to your needs</p>
            </div>
          </motion.div>
        </>
      );
    }
  };

  // Mobile carousel display
  const renderMobileCarousel = () => {
    const cards = renderPlanCards();
    const cardArray = React.Children.toArray(cards);
    
    return (
      <div className="relative">
        <div 
          className="overflow-hidden"
          ref={cardsContainerRef}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {React.Children.map(cardArray, (card, index) => (
              <div key={index} className="w-full flex-shrink-0 px-1">
                {card}
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots instead of navigation arrows */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: getNumCards() }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-6 bg-[#387E89]" : "w-2 bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  // Desktop display
  const renderDesktopGrid = () => {
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

  return (
    <>
      {/* Mobile View with Carousel */}
      <div className="md:hidden">
        {renderMobileCarousel()}
      </div>
      
      {/* Desktop View with Grid */}
      <div className="hidden md:block">
        {renderDesktopGrid()}
      </div>
    </>
  );
};
