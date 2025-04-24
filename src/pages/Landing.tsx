import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { KeyBenefitsSection } from '@/components/landing/KeyBenefitsSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { IntegrationSection } from '@/components/landing/IntegrationSection';
import { CustomerSuccessSection } from '@/components/landing/CustomerSuccessSection';
import CaseStudyLink from '@/components/landing/CaseStudyLink';

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <KeyBenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FeaturesSection />
      <IntegrationSection />
      <CustomerSuccessSection />
      <PricingSection />
      <FAQSection />
      <CaseStudyLink />
      <ContactSection />
    </div>
  );
};

export default Landing;
