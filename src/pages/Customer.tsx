
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
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Customer = () => {
  const isMobile = useIsMobile();
  
  const sections = [
    { Component: TestimonialCarousel, id: 'testimonials', title: 'Customer Testimonials' },
    { Component: StunningCaseStudies, id: 'case-studies', title: 'Case Studies' },
    { Component: LogoScroll, id: 'logos', title: 'Trusted By' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

      <div className="max-w-7xl mx-auto px-4 pt-8">
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

      {/* Fixed-width container to ensure consistent alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants}>
          <HeroStats />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <PromoBanner />
        </motion.div>
        
        {isMobile ? (
          <div className="py-4">
            <div className="my-8 space-y-16">
              {sections.map(({ Component, id, title }) => (
                <motion.div key={id} className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-[#143151] mb-6 text-center">{title}</h2>
                  <Component />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-24 py-12">
            {sections.map(({ Component, id, title }) => (
              <motion.div key={id} variants={itemVariants} className="py-6">
                <h2 className="text-3xl font-bold text-[#143151] mb-8 text-center">{title}</h2>
                <Component />
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center py-12">
          <Link to="/case-study" className="inline-flex items-center gap-2 text-[#143151] font-medium hover:underline">
            View All Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Customer;
