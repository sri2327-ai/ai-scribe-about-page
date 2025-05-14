
import React, { memo } from "react";
import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { LazyLoad } from "@/components/ui/lazy-load";
import { SideIllustrations } from "./illustrations/SideIllustrations";
import { shadowStyles } from "@/lib/shadow-utils";

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
        className={`rounded-full px-8 py-6 text-lg text-white transition-all duration-300 hover:translate-y-[-4px] ${shadowStyles.prominent}`}
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
        className={`rounded-full px-8 py-6 text-lg border-2 transition-all duration-300 hover:translate-y-[-4px] hover:bg-white/50 ${shadowStyles.subtle}`}
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png')] opacity-5 bg-repeat bg-center"></div>
      </div>
      
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
                  sx={{ 
                    color: crushAIColors.text.primary,
                    textShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                  Can you believe all this starts at just{' '}
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                      color: ['#FF5CA2', '#FF5CA2', '#FF5CA2']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ 
                      willChange: 'transform',
                      display: 'inline-block',
                      padding: '0 5px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(255, 92, 162, 0.1)',
                      boxShadow: '0 0 20px rgba(255, 92, 162, 0.2)'
                    }}
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
                  sx={{ 
                    color: crushAIColors.text.secondary,
                    background: 'rgba(255,255,255,0.6)',
                    padding: '10px 15px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(4px)',
                    boxShadow: shadowStyles.subtle
                  }}>
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
      
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-100 opacity-20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-60 -left-40 w-[400px] h-[400px] bg-purple-100 opacity-10 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
});

PricingHeroSection.displayName = 'PricingHeroSection';
