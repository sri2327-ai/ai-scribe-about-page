
import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { MagicStarEffect } from "@/components/ui/magic-star-effect";
import { ChemicalBurnEffect } from "@/components/ui/chemical-burn-effect";

export const CompetitionSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const competitiveAdvantages = [
    { title: "Pinpoint Accuracy", description: "Superior AI model trained on millions of clinical notes" },
    { title: "EHR Integration", description: "Seamless integration with all major EHR systems" },
    { title: "Multilingual Mastery", description: "Supports 30+ languages and dialects" },
    { title: "Human-Backed Customization", description: "Fine-tuned for your specialty and preferences" },
    { title: "Complete Workflow Automation", description: "End-to-end automation of clinical documentation" },
    { title: "Clinical Intelligence", description: "Suggests diagnoses and treatment plans" },
    { title: "Rapid Documentation", description: "Notes completed in under 60 seconds" },
    { title: "Ironclad Security", description: "HIPAA compliant with enterprise-grade security" },
    { title: "Specialty Adaptation", description: "Customized for 40+ medical specialties" },
    { title: "AI Template Builder", description: "Create personalized templates with AI assistance" }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: crushAIColors.background.light
      }}
    >
      <ChemicalBurnEffect 
        colors={['#143151', '#5192AE', '#A5CCF3']}
        intensity={0.3}
        className="opacity-20"
      />

      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            textAlign: 'center',
            mb: 6
          }}
        >
          <MagicStarEffect color="white" count={30}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.75rem', md: '2.75rem' },
                fontWeight: 800,
                mb: 3,
                color: crushAIColors.text.primary,
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Why CRUSH Crushes the Competition
            </Typography>
          </MagicStarEffect>
          
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 800,
              mx: 'auto',
              color: crushAIColors.text.secondary,
              fontSize: { xs: '0.95rem', md: '1.1rem' }
            }}
          >
            CRUSH delivers unmatched medical scribing accuracy and efficiency compared to alternatives.
          </Typography>
        </Box>

        <Box component={motion.div} sx={{ position: 'relative', zIndex: 1 }}>
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: '1fr 1fr', 
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)' 
              },
              gap: 2,
              width: '100%'
            }}
          >
            {competitiveAdvantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <Box 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
                      backgroundColor: crushAIColors.primary,
                      '& .advantage-title': {
                        color: 'white'
                      },
                      '& .advantage-desc': {
                        color: 'rgba(255,255,255,0.8)'
                      }
                    }
                  }}
                >
                  <Typography 
                    className="advantage-title"
                    variant="h6" 
                    sx={{ 
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      fontWeight: 700,
                      mb: 1,
                      color: crushAIColors.text.primary,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography 
                    className="advantage-desc"
                    variant="body2" 
                    sx={{ 
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      color: crushAIColors.text.secondary,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {advantage.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
