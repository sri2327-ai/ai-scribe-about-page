
import React from 'react';
import HeroStats from '@/components/customer/HeroStats';
import TestimonialCarousel from '@/components/customer/TestimonialCarousel';
import PromoBanner from '@/components/customer/PromoBanner';
import StunningCaseStudies from '@/components/customer/StunningCaseStudies';
import LogoScroll from '@/components/customer/LogoScroll';
import HeroSection from '@/components/customer/HeroSection';

const Customer = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroStats />
      <TestimonialCarousel />
      <PromoBanner />
      <StunningCaseStudies />
      <LogoScroll />
      <HeroSection />
    </main>
  );
};

export default Customer;
