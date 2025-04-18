import React from "react";
import { motion } from "framer-motion";
import { Container, Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Calculator } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { EMRChartIllustration } from "./illustrations/EMRChartIllustration";
import { CliniciansIllustration } from "./illustrations/CliniciansIllustration";
import { ROICalculatorIllustration } from "./illustrations/ROICalculatorIllustration";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const PricingHeroSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${crushAIColors.background.light} 0%, #fff 100%)`,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Background Illustrations */}
          <EMRChartIllustration />
          <CliniciansIllustration />
          <ROICalculatorIllustration />

          {/* Logo Icon */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5 }
              }
            }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="w-16 h-16 rounded-full bg-[#009CA6]/10 flex items-center justify-center mb-6 mx-auto">
                <Laptop className="w-8 h-8 text-[#009CA6]" />
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
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
          >
            <motion.div variants={fadeInUpVariants}>
              <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-6" 
                sx={{ color: crushAIColors.text.primary }}>
                Can you believe all this starts at just{' '}
                <motion.span
                  variants={pulseVariants}
                  animate="pulse"
                  className="inline-block text-[#FF5CA2]"
                >
                  $99
                </motion.span>
                ?
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <Typography variant="body1" className="text-lg md:text-xl mb-8" 
                sx={{ color: crushAIColors.text.secondary }}>
                That's more time with patients, less time on charts, and real ROI—without breaking the bank.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <Typography variant="h3" className="text-2xl font-semibold mb-8" 
                sx={{ color: crushAIColors.text.primary }}>
                Ready to reclaim your time?
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg shadow-xl text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl"
                style={{
                  background: `linear-gradient(90deg, #009CA6, #007A82)`,
                }}
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                style={{
                  borderColor: '#009CA6',
                  color: '#009CA6'
                }}
              >
                Book a Demo
                <Calculator className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ background: '#009CA6' }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ background: '#FF5CA2' }}
        />
      </Container>
    </Box>
  );
};
