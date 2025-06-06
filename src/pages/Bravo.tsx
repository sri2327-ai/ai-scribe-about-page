import React, { lazy, Suspense, memo, useCallback, useMemo } from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { LazyLoad } from '@/components/ui/lazy-load';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";
import { useExitIntent } from "@/hooks/useExitIntent";

// Define feature data outside component to prevent recreation on render
const featuresData = [
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
];

// Use dynamic imports with prefetch to improve loading performance
const CompatibilitySection = lazy(() => {
  const module = import("@/components/bravo/sections/CompatibilitySection").then(module => ({ default: module.CompatibilitySection }));
  return module;
});

const HowBravoWorksSection = lazy(() => {
  const module = import("@/components/bravo/sections/HowBravoWorksSection").then(module => ({ default: module.HowBravoWorksSection }));
  return module;
});

const VoiceSelectionInterface = lazy(() => {
  const module = import("@/components/bravo/VoiceSelectionInterface").then(module => ({ default: module.VoiceSelectionInterface }));
  return module;
});

const BravoAutomationBentoGrid = lazy(() => {
  const module = import("@/components/bravo/sections/BravoAutomationBentoGrid").then(module => ({ default: module.BravoAutomationBentoGrid }));
  return module;
});

const ROISection = lazy(() => {
  const module = import("@/components/bravo/sections/ROISection").then(module => ({ default: module.ROISection }));
  return module;
});

const BravoTestimonialsSection = lazy(() => {
  const module = import("@/components/bravo/sections/BravoTestimonialsSection").then(module => ({ default: module.BravoTestimonialsSection }));
  return module;
});

// Memoized feature card to prevent unnecessary re-renders
const FeatureCard = memo(({ feature, index }: { feature: typeof featuresData[0], index: number }) => {
  return (
    <motion.div
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
  );
});

FeatureCard.displayName = 'FeatureCard';

// Optimized features section with reduced re-renders
const OptimizedFeaturesSection = memo(() => {
  // Use useMemo for static content that doesn't change between renders
  const headerContent = useMemo(() => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center max-w-4xl mx-auto mb-16"
      style={{ willChange: 'transform, opacity' }}
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
  ), []);
  
  const ctaContent = useMemo(() => (
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      style={{ willChange: 'transform, opacity' }}
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
  ), []);

  return (
    <section 
      className="py-20 relative overflow-hidden" 
      style={{ 
        backgroundColor: bravoColors.background.light,
        willChange: 'contents',
        contain: 'content'
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#D299C2]/20 via-[#D299C2]/10 to-[#D299C2]/5 opacity-60 blur-3xl"
        style={{ transform: 'translateZ(0)' }}
      />
      
      <div className="container mx-auto px-4 relative">
        {headerContent}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
        
        {ctaContent}
      </div>
    </section>
  );
});

OptimizedFeaturesSection.displayName = 'OptimizedFeaturesSection';

// Optimized loading indicator
const LoadingIndicator = memo(() => (
  <div className="h-20 flex items-center justify-center">
    <div 
      className="w-6 h-6 border-2 border-t-transparent border-primary rounded-full animate-spin" 
      style={{ willChange: 'transform' }}
    />
  </div>
));

LoadingIndicator.displayName = 'LoadingIndicator';

// Main Bravo component with optimized rendering
const Bravo = () => {
  const { shouldShow, markAsShown } = useExitIntent({
    threshold: 80,
    delay: 2500,
    inactivityTimeout: 35000,
    enabled: true
  });

  const handleBookDemo = () => {
    markAsShown();
    window.open('/contact', '_blank');
  };

  const handleClosePopup = () => {
    markAsShown();
  };

  // Preload critical assets
  React.useEffect(() => {
    // Preload next sections as soon as the page loads
    const preloadNextSections = async () => {
      try {
        // Use dynamic import to preload the next sections that will be visible soon
        const [compatibilityModule, howItWorksModule] = await Promise.all([
          import("@/components/bravo/sections/CompatibilitySection"),
          import("@/components/bravo/sections/HowBravoWorksSection")
        ]);
      } catch (error) {
        console.error("Error preloading modules:", error);
      }
    };
    
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadNextSections);
    } else {
      setTimeout(preloadNextSections, 200);
    }
  }, []);
  
  return (
    <div 
      className="bg-black min-h-screen"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Hero section is important for initial render, so not lazy loaded */}
      <BravoHeroSection />
      
      {/* Lazy load remaining sections for better performance */}
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <CompatibilitySection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <HowBravoWorksSection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <ROISection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <BravoTestimonialsSection />
        </Suspense>
      </LazyLoad>
      
      {/* Optimized features section */}
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <OptimizedFeaturesSection />
      </LazyLoad>
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <VoiceSelectionInterface />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <BravoAutomationBentoGrid />
        </Suspense>
      </LazyLoad>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={shouldShow}
        onClose={handleClosePopup}
        onBookDemo={handleBookDemo}
      />
    </div>
  );
};

export default Bravo;
