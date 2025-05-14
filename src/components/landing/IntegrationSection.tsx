
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { ResponsiveCarousel } from '@/components/ui/ResponsiveCarousel';

const integrationPartners = [
  { name: 'AWS', logo: '/aws.png' },
  { name: 'Epic', logo: '/img.png' },
  { name: 'Cerner', logo: '/img.png' },
  { name: 'Allscripts', logo: '/img.png' },
  { name: 'NextGen', logo: '/img.png' },
  { name: 'Athenahealth', logo: '/img.png' },
  { name: 'eClinicalWorks', logo: '/img.png' },
  { name: 'DrChrono', logo: '/img.png' },
];

const IntegrationSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <Container maxWidth="lg" className="px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className={cn(typography.h2, "mb-4")}>
            Seamless Integration with Your Workflow
          </h2>
          <p className={cn(typography.description, "mb-6")}>
            S10.AI connects with your existing healthcare systems through our secure, 
            HIPAA-compliant integration platform. We support all major EHR systems and thousands 
            of healthcare applications.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12">
          <Card className="p-6 sm:p-8 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm">
            <h3 className={cn(typography.h3, "mb-6 text-center")}>
              Integration Partners
            </h3>
            
            <ResponsiveCarousel
              items={integrationPartners}
              renderItem={(item) => (
                <div className="flex items-center justify-center p-4 h-full">
                  <div className="relative aspect-video w-full h-full flex items-center justify-center">
                    <img 
                      src={item.logo} 
                      alt={`${item.name} logo`} 
                      className="max-h-16 sm:max-h-20 object-contain"
                    />
                  </div>
                  <p className={cn(typography.caption, "absolute bottom-2 text-center w-full")}>
                    {item.name}
                  </p>
                </div>
              )}
              columnsDesktop={4}
              columnsTablet={3}
              columnsMobile={2}
              showControls={true}
              autoPlay={true}
            />
            
            <div className="mt-8 text-center">
              <p className={cn(typography.body, "mb-4 italic")}>
                "S10.AI's integration with our EHR system was smooth and the support team 
                was responsive throughout the process."
              </p>
              <p className={cn(typography.caption, "font-semibold")}>
                — Dr. Emily Chen, Chief Medical Officer
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default IntegrationSection;
