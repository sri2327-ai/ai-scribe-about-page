
import React, { memo } from "react";
import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { LazyLoad } from "@/components/ui/lazy-load";
import { SideIllustrations } from "./illustrations/SideIllustrations";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Separate the CTA buttons to prevent renders
const PricingCTAButtons = memo(() => {
  return (
    <motion.div 
      variants={fadeInUpVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
      style={{ willChange: 'transform, opacity' }}
    >
      <Button
        size="lg"
        className="rounded-full px-8 py-6 text-lg text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
        style={{
          background: crushAIColors.button.gradient,
        }}
      >
        Get Started
        <ArrowRight className="ml-2" />
      </Button>
      
      <Button
        size="lg"
        variant="outline"
        className="rounded-full px-8 py-6 text-lg border-2 transition-all duration-300 hover:translate-y-[-2px]"
        style={{
          borderColor: crushAIColors.primaryFlat,
          color: crushAIColors.primaryFlat
        }}
      >
        Book a Demo
        <Calculator className="ml-2" />
      </Button>
    </motion.div>
  );
});

PricingCTAButtons.displayName = 'PricingCTAButtons';

export const PricingHeroSection = memo(() => {
  return (
    <section 
      className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${crushAIColors.background.light} 0%, #fff 100%)`,
        contain: 'paint layout'
      }}
    >
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="relative flex flex-col items-center hidden lg:flex">
            <SideIllustrations />
          </div>

          <div className="lg:pl-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="py-8 relative"
            >
              <motion.div 
                variants={fadeInUpVariants}
                className="relative z-10"
                style={{ willChange: 'transform, opacity' }}
              >
                <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-6" 
                  sx={{ color: crushAIColors.text.primary }}>
                  Can you believe all this starts at just{' '}
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                      color: ['#FF5CA2', '#FF5CA2', '#FF5CA2']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ willChange: 'transform' }}
                  >
                    $99
                  </motion.span>
                  ?
                </Typography>
              </motion.div>

              <motion.div 
                variants={fadeInUpVariants}
                className="relative z-10"
                style={{ willChange: 'transform, opacity' }}
              >
                <Typography variant="body1" className="text-lg md:text-xl mb-8" 
                  sx={{ color: crushAIColors.text.secondary }}>
                  That's more time with patients, less time on charts, and real ROI—without breaking the bank.
                </Typography>
              </motion.div>

              <motion.div 
                variants={fadeInUpVariants}
                className="relative z-10"
                style={{ willChange: 'transform, opacity' }}
              >
                <Typography variant="h3" className="text-2xl font-semibold mb-8" 
                  sx={{ color: crushAIColors.text.primary }}>
                  Ready to reclaim your time?
                </Typography>
              </motion.div>

              <PricingCTAButtons />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
});

PricingHeroSection.displayName = 'PricingHeroSection';
