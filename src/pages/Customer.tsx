
import React from 'react';
import CustomersBanner from '@/components/customer/CustomersBanner';
import TestimonialCarousel from '@/components/customer/TestimonialCarousel';
import PromoBanner from '@/components/customer/PromoBanner';
import StunningCaseStudies from '@/components/customer/StunningCaseStudies';
import LogoScroll from '@/components/customer/LogoScroll';
import HeroSection from '@/components/customer/HeroSection';

const Customer = () => {
  return (
    <main className="min-h-screen bg-white">
      <CustomersBanner />
      <TestimonialCarousel />
      <PromoBanner />
      <StunningCaseStudies />
      <LogoScroll />
      <HeroSection />
    </main>
  );
};

export default Customer;
