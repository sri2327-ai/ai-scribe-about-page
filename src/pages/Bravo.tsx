
import React, { lazy, Suspense, memo, useCallback, useMemo, useState, useEffect } from 'react';
import { BravoHeroSection } from '@/components/bravo/BravoHeroSection';
import { LazyLoad } from '@/components/ui/lazy-load';
import { bravoColors } from '@/theme/bravo-theme';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";

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
const BravoTrySection = lazy(() => 
  import("@/components/bravo/sections/BravoTrySection").then(module => ({ default: module.BravoTrySection }))
);

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

const BravoAudioDemoSection = lazy(() => {
  const module = import("@/components/bravo/sections/BravoAudioDemoSection").then(module => ({ default: module.BravoAudioDemoSection }));
  return module;
});

// Memoized feature card to prevent unnecessary re-renders
const FeatureCard = memo(({ feature, index }: { feature: typeof featuresData[0], index: number }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
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
    );
  }

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use useMemo for static content that doesn't change between renders
  const headerContent = useMemo(() => {
    if (!isClient) {
      return (
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Let BRAVO Handle Calls, Scheduling & Intake — So Your Staff Doesn't Have To
          </h2>
          <p className="text-xl md:text-2xl opacity-90 text-black">
            AI-powered front office. Available 24/7. No burnout.
          </p>
        </div>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-4xl mx-auto mb-16"
        style={{ willChange: 'transform, opacity' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Let BRAVO Handle Calls, Scheduling & Intake — So Your Staff Doesn't Have To
        </h2>
        <p className="text-xl md:text-2xl opacity-90 text-black">
          AI-powered front office. Available 24/7. No burnout.
        </p>
      </motion.div>
    );
  }, [isClient]);
  
  const ctaContent = useMemo(() => {
    if (!isClient) {
      return (
        <div className="text-center mt-16">
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
        </div>
      );
    }

    return (
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
    );
  }, [isClient]);

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { shouldShow, markAsShown } = useExitIntent({
    threshold: 50,
    delay: 1000,
    inactivityTimeout: 15000,
    enabled: isClient
  });

  const handleBookDemo = useCallback(() => {
    console.log('Book demo clicked');
    markAsShown();
    window.open('/contact', '_blank');
  }, [markAsShown]);

  const handleClosePopup = useCallback(() => {
    console.log('Popup closed');
    markAsShown();
  }, [markAsShown]);

  // Preload critical assets only on client-side
  useEffect(() => {
    if (!isClient) return;
    
    const preloadNextSections = async () => {
      try {
        const [compatibilityModule, howItWorksModule] = await Promise.all([
          import("@/components/bravo/sections/CompatibilitySection"),
          import("@/components/bravo/sections/HowBravoWorksSection")
        ]);
      } catch (error) {
        console.error("Error preloading modules:", error);
      }
    };
    
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadNextSections);
    } else {
      setTimeout(preloadNextSections, 200);
    }
  }, [isClient]);

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" />
      </div>
    );
  }
  
  return (
    <div 
      className="bg-black min-h-screen"
      style={{ scrollBehavior: 'smooth' }}
    >
      <BravoHeroSection />
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <BravoTrySection />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad rootMargin="400px" threshold={0.01}>
        <Suspense fallback={<LoadingIndicator />}>
          <BravoAudioDemoSection />
        </Suspense>
      </LazyLoad>
      
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

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#FAF8F6]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Hub illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#143151]/10 to-[#387E89]/10 border border-[#387E89]/20" />
                {/* Inner ring */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#143151]/15 to-[#387E89]/15" />
                {/* Core */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl sm:text-3xl tracking-tight">BRAVO</span>
                </div>
                {/* Orbiting integration icons */}
                {[
                  { label: 'EHR', angle: -30, color: 'bg-blue-100 text-blue-600' },
                  { label: 'PMS', angle: 30, color: 'bg-teal-100 text-teal-600' },
                  { label: 'CRM', angle: 90, color: 'bg-purple-100 text-purple-600' },
                  { label: 'SIP', angle: 150, color: 'bg-amber-100 text-amber-600' },
                  { label: 'Cal', angle: 210, color: 'bg-green-100 text-green-600' },
                  { label: '+', angle: 270, color: 'bg-gray-100 text-gray-600' },
                ].map((item) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const r = 140;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <motion.div
                      key={item.label}
                      className={`absolute w-11 h-11 rounded-full ${item.color} flex items-center justify-center text-xs font-bold shadow-md border border-white`}
                      style={{ left: `calc(50% + ${x}px - 22px)`, top: `calc(50% + ${y}px - 22px)` }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + item.angle / 500, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.label}
                    </motion.div>
                  );
                })}
                {/* Connecting lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                  {[
                    { angle: -30 }, { angle: 30 }, { angle: 90 },
                    { angle: 150 }, { angle: 210 }, { angle: 270 },
                  ].map((item) => {
                    const rad = (item.angle * Math.PI) / 180;
                    const x2 = 160 + Math.cos(rad) * 120;
                    const y2 = 160 + Math.sin(rad) * 120;
                    return (
                      <line
                        key={item.angle}
                        x1="160" y1="160" x2={x2} y2={y2}
                        stroke="#387E89" strokeWidth="1" opacity="0.2"
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>

            {/* Right: Copy + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143151] mb-6 leading-tight">
                Built to fit{' '}
                <span className="italic text-[#387E89]">your practice</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                <p>Every practice runs differently.</p>
                <p>
                  BRAVO is configured around your existing workflows and systems, with or without deep integration. We offer dedicated support to ensure reliable performance at scale.
                </p>
                <p>
                  Here are some of the leading EHR/PMS systems we seamlessly integrate with:{' '}
                  <strong className="text-[#143151]">Epic, Athena, eClinicalWorks, DrChrono, Kareo, NextGen</strong> and more.
                </p>
              </div>
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
                onClick={() => window.open('/contact', '_blank')}
              >
                Book a Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Exit Intent Popup - only render on client */}
      {isClient && (
        <ExitIntentPopup
          isOpen={shouldShow}
          onClose={handleClosePopup}
          onBookDemo={handleBookDemo}
          variant="bravo"
        />
      )}
    </div>
  );
};

export default Bravo;
