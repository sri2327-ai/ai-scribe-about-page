
import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Zap, RefreshCw, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { WaveBackground } from "@/components/ui/wave-background";

export const EhrIntegrationSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  const features = [
    {
      title: "Works on Any Device",
      description: "Desktop, laptop, tablet, or mobile.",
      icon: <Zap size={36} style={{ color: crushAIColors.secondary }} />
    },
    {
      title: "Instant Sync",
      description: "AI-generated notes go directly into your EHR.",
      icon: <RefreshCw size={36} style={{ color: crushAIColors.secondary }} />
    },
    {
      title: "Automated Updates",
      description: "Lab results, prescriptions, and referrals auto-sync.",
      icon: <FileCheck size={36} style={{ color: crushAIColors.secondary }} />
    }
  ];

  return (
    <WaveBackground 
      baseColor={crushAIColors.secondary}
      intensity="light"
    >
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 6, md: 12 },
          position: "relative",
          zIndex: 1
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 6, textAlign: 'center' }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.75rem', md: '2.75rem' },
                fontWeight: 800,
                mb: 3,
                color: crushAIColors.text.primary,
                letterSpacing: '-0.04em', // More condensed letter spacing like x.ai
                lineHeight: 1.1 // Tighter line height for more modern feel
              }}
            >
              Seamless EHR Integration
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 720, // Slightly narrower for better readability
                mx: 'auto',
                color: crushAIColors.text.primary,
                fontWeight: 400,
                mb: 5,
                fontSize: { xs: '0.95rem', md: '1.05rem' }, // Slightly larger on desktop
                lineHeight: 1.6 // Better line height for readability
              }}
            >
              CRUSH syncs effortlessly with any EHR system, eliminating copy-pasting and manual entry.
            </Typography>
          </Box>

          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 3,
              mb: 6
            }}
          >
            {["Epic", "Cerner", "Meditech", "NextGen"].map((item, index) => (
              <Box 
                key={index}
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 40, md: 60 },
                  bgcolor: 'rgba(255, 255, 255, 0.95)', // Higher opacity for better visibility
                  borderRadius: 1.5, // Slightly more rounded corners like x.ai
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  zIndex: 2,
                  position: 'relative',
                  transition: 'all 0.3s ease', // Smooth transition for hover effects
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                <Typography variant="body2" sx={{ color: crushAIColors.text.primary, fontWeight: 600 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {isMobile ? (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {features.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 bg-white/95">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <Box 
                            sx={{ 
                              mb: 3,
                              p: 2,
                              borderRadius: '50%',
                              bgcolor: `${crushAIColors.secondary}20`,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              mb: 1.5,
                              fontWeight: 600,
                              color: crushAIColors.text.primary,
                              fontSize: '1.25rem',
                              letterSpacing: '-0.01em' // Slightly tighter spacing
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="body1"
                            sx={{ color: crushAIColors.text.secondary, fontSize: '0.95rem', lineHeight: 1.5 }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="relative static left-auto translate-y-0" />
                <CarouselNext className="relative static right-auto translate-y-0" />
              </div>
            </Carousel>
          ) : (
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: { xs: 2, sm: 2, md: 3 },
                width: '100%',
                px: 2,
                overflow: 'visible',
                position: 'relative',
                zIndex: 2
              }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ 
                    width: isTablet ? 'calc(33.333% - 16px)' : '300px',
                    minWidth: isTablet ? 'auto' : '300px'
                  }}
                >
                  <Card className="h-full overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 bg-white/95">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Box 
                        sx={{ 
                          mb: 3,
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: `${crushAIColors.secondary}20`,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 1.5,
                          fontWeight: 600,
                          color: crushAIColors.text.primary,
                          fontSize: '1.25rem',
                          letterSpacing: '-0.01em' // More x.ai-like typography
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ color: crushAIColors.text.secondary, fontSize: '0.95rem', lineHeight: 1.5 }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          )}
        </Container>
      </Box>
    </WaveBackground>
  );
};
