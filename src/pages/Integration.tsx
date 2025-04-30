
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import IntegrationHeroSection from "../components/integration/IntegrationHeroSection";
import IntegrationTabs from "../components/integration/IntegrationTabs";
import WhyChooseS10 from "../components/integration/WhyChooseS10";
import LastScroll from "../components/integration/LastScroll";

const IntegrationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Integrations | S10.AI</title>
        <meta name="description" content="S10.AI seamlessly integrates with your existing healthcare systems, from EHR to telehealth platforms, ensuring a smooth workflow." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/integration">Integrations</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-6 sm:space-y-10 md:space-y-14">
        <motion.div variants={itemVariants}>
          <IntegrationHeroSection />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <IntegrationTabs />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <WhyChooseS10 />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <LastScroll />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntegrationPage;
