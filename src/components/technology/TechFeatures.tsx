
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Workflow, BarChart3, HeartPulse, Bot } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Feature {
  step: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

interface TechFeaturesProps {
  features: Feature[];
  className?: string;
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
}

export function TechFeatures({
  features,
  className,
  title = "Technology That Delivers",
  subtitle = "Our platform combines cutting-edge AI with healthcare expertise",
  autoPlayInterval = 5000,
}: TechFeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setLoading(true);
        setTimeout(() => {
          setCurrentFeature((prev) => (prev + 1) % features.length);
          setProgress(0);
          setLoading(false);
        }, 300);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'black',
        position: 'relative',
        ...(className && { className })
      }}
    >
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: { xs: '3rem', md: '4rem' },
            position: 'relative'
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
              fontWeight: 'normal',
              mb: 2,
              color: 'white',
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '36rem',
              mx: 'auto'
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ maxWidth: '7xl', mx: 'auto' }}>
          <Grid item xs={12} lg={6} sx={{ order: { xs: 2, lg: 1 }, position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.5 }}
                  animate={{ 
                    opacity: index === currentFeature ? 1 : 0.5,
                    scale: index === currentFeature ? 1.02 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    setCurrentFeature(index);
                    setProgress(0);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    cursor: 'pointer'
                  }}
                >
                  <motion.div
                    sx={{
                      mt: 0.25,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: index === currentFeature
                        ? '1px solid white'
                        : '1px solid rgba(255, 255, 255, 0.2)',
                      bgcolor: 'black',
                      color: index === currentFeature
                        ? 'white'
                        : 'rgba(255, 255, 255, 0.6)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index <= currentFeature ? (
                      <Typography
                        sx={{
                          fontSize: '1.125rem',
                          fontWeight: 'bold',
                          color: index === currentFeature ? 'white' : 'rgba(156, 163, 175, 1)'
                        }}
                      >
                        ✓
                      </Typography>
                    ) : (
                      <Typography sx={{ fontSize: '1.125rem', fontWeight: 600 }}>
                        {index + 1}
                      </Typography>
                    )}
                  </motion.div>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        mb: 1,
                        color: index === currentFeature ? 'white' : 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: index === currentFeature ? 'rgba(209, 213, 219, 1)' : 'rgba(156, 163, 175, 1)'
                      }}
                    >
                      {feature.content}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} sx={{ order: { xs: 1, lg: 2 }, position: 'relative' }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'black',
                backdropFilter: 'blur(4px)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                p: { xs: 3, md: 5 },
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <AnimatePresence mode="wait">
                {features.map((feature, index) =>
                  index === currentFeature ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        position: 'relative',
                        zIndex: 10
                      }}
                    >
                      <Box sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Box sx={{ width: 256, height: 256, color: 'white' }}>
                          {feature.icon}
                        </Box>
                      </Box>
                      
                      <Box sx={{
                        position: 'absolute',
                        bottom: 24,
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '9999px',
                        overflow: 'hidden'
                      }}>
                        <motion.div 
                          style={{
                            height: '100%',
                            backgroundColor: 'white',
                            width: `${progress}%`
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      </Box>
                      
                      {loading && (
                        <Box sx={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(0, 0, 0, 0.5)',
                          backdropFilter: 'blur(4px)',
                          zIndex: 20
                        }}>
                          <Box sx={{ position: 'relative', width: 64, height: 64 }}>
                            <Box sx={{
                              position: 'absolute',
                              inset: 0,
                              borderTop: '2px solid rgba(255, 255, 255, 0.8)',
                              borderRight: '2px solid rgba(255, 255, 255, 0.8)',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite'
                            }}></Box>
                            <Box sx={{
                              position: 'absolute',
                              inset: 16,
                              borderBottom: '2px solid rgba(255, 255, 255, 0.6)',
                              borderLeft: '2px solid rgba(255, 255, 255, 0.6)',
                              borderRadius: '50%',
                              animation: 'spin 1.5s linear infinite reverse'
                            }}></Box>
                            <Box sx={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Box sx={{
                                width: 8,
                                height: 8,
                                bgcolor: 'white',
                                borderRadius: '50%',
                                animation: 'pulse 1s ease infinite'
                              }}></Box>
                            </Box>
                            <Box sx={{
                              position: 'absolute',
                              height: 1,
                              width: '100%',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              bgcolor: 'rgba(255, 255, 255, 0.3)',
                              animation: 'pulse 1s ease infinite'
                            }}></Box>
                            <Box sx={{
                              position: 'absolute',
                              width: 1,
                              height: '100%',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              bgcolor: 'rgba(255, 255, 255, 0.3)',
                              animation: 'pulse 1s ease infinite'
                            }}></Box>
                          </Box>
                        </Box>
                      )}
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const TechFeaturesContent = () => {
  const features = [
    {
      step: 'Step 1',
      title: 'Real-Time, 24/7 Automation',
      content: 'Always available, no downtime. Our AI systems work around the clock providing continuous service and support.',
      icon: <Brain className="w-full h-full stroke-[1] text-white" strokeWidth={0.5} />
    },
    {
      step: 'Step 2',
      title: 'Unmatched Accuracy',
      content: 'AI-driven precision for documentation & workflows, ensuring clinical details are captured with exceptional fidelity.',
      icon: <Workflow className="w-full h-full stroke-[1] text-white" strokeWidth={0.5} />
    },
    {
      step: 'Step 3',
      title: 'Cost-Effective Efficiency',
      content: 'Reduces overhead without sacrificing quality, allowing healthcare providers to allocate resources more effectively.',
      icon: <BarChart3 className="w-full h-full stroke-[1] text-white" strokeWidth={0.5} />
    },
    {
      step: 'Step 4',
      title: 'Enhanced Patient Care',
      content: 'AI automation for faster, better decision-making, enabling clinicians to focus more on direct patient care.',
      icon: <HeartPulse className="w-full h-full stroke-[1] text-white" strokeWidth={0.5} />
    },
    {
      step: 'Step 5',
      title: 'Autonomous Operations',
      content: 'AI-powered staffing, scribing & clinical support that works intelligently alongside your team.',
      icon: <Bot className="w-full h-full stroke-[1] text-white" strokeWidth={0.5} />
    },
  ];

  return (
    <TechFeatures
      features={features}
      title="Technology That Delivers"
      subtitle="Transforming healthcare delivery with intelligent automation"
      autoPlayInterval={5000}
    />
  );
};

export default TechFeaturesContent;
