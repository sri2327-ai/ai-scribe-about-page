
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import HeroStats from '@/components/customer/HeroStats';
import TestimonialCarousel from '@/components/customer/TestimonialCarousel';
import PromoBanner from '@/components/customer/PromoBanner';
import StunningCaseStudies from '@/components/customer/StunningCaseStudies';
import LogoScroll from '@/components/customer/LogoScroll';
import HeroSection from '@/components/customer/HeroSection';
import { useIsMobile } from '@/hooks/use-mobile';

const Customer = () => {
  const isMobile = useIsMobile();
  
  const sections = [
    { Component: TestimonialCarousel, id: 'testimonials' },
    { Component: StunningCaseStudies, id: 'case-studies' },
    { Component: LogoScroll, id: 'logos' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4 } 
    }
  };

  return (
    <motion.main 
      className="min-h-screen bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Customer Success Stories | S10.AI</title>
        <meta name="description" content="Discover how S10.AI has helped healthcare providers improve efficiency and patient care through AI-powered solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/customer">Customer Success Stories</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
          <HeroStats />
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
          <PromoBanner />
        </motion.div>
        
        <div className={isMobile ? "space-y-10 mt-6" : "space-y-14 sm:space-y-16 mt-8"}>
          {sections.map(({ Component, id }) => (
            <motion.div key={id} variants={itemVariants} className="py-2 sm:py-4">
              <Component />
            </motion.div>
          ))}
        </div>
        
        <motion.div variants={itemVariants} className="mt-6 sm:mt-10">
          <HeroSection />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Customer;
