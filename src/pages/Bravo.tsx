
import React, { lazy, Suspense, memo } from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { LazyLoad } from '@/components/ui/lazy-load';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

// Lazy loaded components
const CompatibilitySection = lazy(() => import('@/components/bravo/sections/CompatibilitySection').then(module => ({
  default: memo(module.CompatibilitySection)
})));

const HowBravoWorksSection = lazy(() => import('@/components/bravo/sections/HowBravoWorksSection').then(module => ({
  default: memo(module.HowBravoWorksSection)
})));

const VoiceSelectionInterface = lazy(() => import('@/components/bravo/VoiceSelectionInterface').then(module => ({
  default: memo(module.VoiceSelectionInterface)
})));

const BravoAutomationBentoGrid = lazy(() => import('@/components/bravo/sections/BravoAutomationBentoGrid').then(module => ({
  default: memo(module.BravoAutomationBentoGrid)
})));

const ROISection = lazy(() => import('@/components/bravo/sections/ROISection').then(module => ({
  default: memo(module.ROISection)
})));

const BravoTestimonialsSection = lazy(() => import('@/components/bravo/sections/BravoTestimonialsSection').then(module => ({
  default: memo(module.BravoTestimonialsSection)
})));

// Optimized features section
const OptimizedFeaturesSection = memo(() => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: bravoColors.background.light }}>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#D299C2]/20 via-[#D299C2]/10 to-[#D299C2]/5 opacity-60 blur-3xl" 
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            Let BRAVO Handle Calls, Scheduling & Intake — So Your Staff Doesn't Have To
          </h2>
          <p 
            className="text-xl md:text-2xl opacity-90 text-black"
          >
            AI-powered front office. Available 24/7. No burnout.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Phone,
              title: "24/7 AI-Powered Patient Interaction",
              color: "blue",
              items: [
                'AI Chat & Phone Agents – Automate multilingual patient interactions',
                '24/7 Availability – Never miss an inquiry, scale effortlessly',
                'Seamless Scheduling – AI-driven booking, rescheduling & reminders'
              ]
            },
            {
              icon: BarChart3,
              title: "Reduce No-Shows & Boost Revenue",
              color: "teal",
              items: [
                'Smart Reminders & Follow-Ups – Minimize cancellations',
                'Automated Workflows – Handle appointments, refills, intake',
                'Revenue Protection – Denials reduced, RCM optimized'
              ]
            },
            {
              icon: Users,
              title: "Overcome Staffing Shortages with AI",
              color: "purple",
              items: [
                'AI Task Assignment – Smart delegation to the right person',
                'Seamless Integration – Connects with EHR, CRM, PMS',
                'Smarter Referrals – Automates triage & care coordination'
              ]
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="group h-full backdrop-blur-xl bg-white/95 border-none hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100`}>
                      <feature.icon className="w-6 h-6" style={{ color: bravoColors.text.light }} />
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {feature.items.map((text, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3"
                      >
                        <Check className={`w-5 h-5 mt-1 flex-shrink-0 text-${feature.color}-500`} />
                        <span className="text-gray-700">{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
            className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
            style={{ 
              color: bravoColors.text.white
            }}
          >
            Request a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

OptimizedFeaturesSection.displayName = 'OptimizedFeaturesSection';

const Bravo = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero section is important for initial render, so not lazy loaded */}
      <BravoHeroSection />
      
      {/* Lazy load remaining sections for better performance */}
      <LazyLoad>
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div></div>}>
          <CompatibilitySection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad>
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div></div>}>
          <HowBravoWorksSection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad>
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div></div>}>
          <ROISection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad>
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div></div>}>
          <BravoTestimonialsSection />
        </Suspense>
      </LazyLoad>
      
      {/* Optimized features section */}
      <LazyLoad>
        <OptimizedFeaturesSection />
      </LazyLoad>
      
      <LazyLoad>
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div></div>}>
          <VoiceSelectionInterface />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad>
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin"></div></div>}>
          <BravoAutomationBentoGrid />
        </Suspense>
      </LazyLoad>
    </div>
  );
};

export default Bravo;
