
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { Brain, Globe, Layers } from "lucide-react";
import { SignatureAnimation } from "@/components/ui/signature-animation";

// Simpler text rotate without animations that were causing errors
const TextRotate = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [texts]);
  
  return (
    <Box component="span" sx={{ display: 'inline-block', position: 'relative', color: 'white' }}>
      {texts.map((text, i) => (
        <Box
          component="span" 
          key={i} 
          sx={{
            transition: 'opacity 500ms',
            position: i === currentIndex ? 'relative' : 'absolute',
            opacity: i === currentIndex ? 1 : 0,
            left: 0
          }}
        >
          {text}
        </Box>
      ))}
    </Box>
  );
};

const innovationPoints = [
  {
    title: "Medical Knowledge Inference Engine (MKIE)",
    description: "Generates accurate medical concepts for documentation improvement.",
    icon: <Brain size={24} color="white" />
  },
  {
    title: "Cross-lingual Conversation Inference Engine (CCIE)",
    description: "A Star Trek-inspired Universal Translator for seamless doctor-patient interactions.",
    icon: <Globe size={24} color="white" />
  },
  {
    title: "Intuitive Interface Inference Engine (IIIE)",
    description: "Breaks integration barriers, making AI effortlessly interact with existing systems.",
    icon: <Layers size={24} color="white" />
  }
];

const FounderMessage = () => {
  const listRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      const items = Array.from(listElement.querySelectorAll('.innovation-item'));
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 150);
      });
    }
  }, []);
  
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        bgcolor: 'black',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Teal Blue Beams Background */}
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.3 
        }}
      >
        <CanvasEffect id="founder-canvas" className="opacity-60" />
      </Box>
      
      <Container sx={{ position: 'relative', zIndex: 10 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mb: 8
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: '2.25rem',
              fontWeight: 'normal',
              mb: 3,
              color: 'white',
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            A Message from Our Founder
          </Typography>
        </Box>
        
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            backdropFilter: 'blur(8px)',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            width: '100%',
            mx: 'auto',
            maxWidth: '6xl',
            border: '1px solid rgba(30, 174, 219, 0.2)',
            position: 'relative'
          }}
        >
          {/* Add spotlight effect inside the card */}
          <Spotlight
            className="inset-0 z-0"
            fill="#1EAEDB"
          />
          
          <Box 
            sx={{ 
              p: { xs: 4, md: 8 }, 
              position: 'relative', 
              zIndex: 10 
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    lineHeight: 1.5,
                    fontWeight: 'normal',
                    color: 'rgba(209, 213, 219, 1)',
                    fontFamily: '"Wix Madefor Text", sans-serif'
                  }}
                >
                  In 2017, inspired by Star Trek's mission to "<TextRotate texts={["boldly go", "explore", "discover", "innovate"]} /> where no one has gone before," we set out to revolutionize AI in healthcare.
                </Typography>
              </Box>
              
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography 
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.7,
                    fontWeight: 'normal',
                    color: 'rgba(156, 163, 175, 1)',
                    fontFamily: '"Wix Madefor Text", sans-serif'
                  }}
                >
                  Breakthroughs like AlphaGo and GPT-2 revealed AI's potential—yet also its limitations in bias and accuracy. Our focus became truth-first AI that enhances clinical decision-making.
                </Typography>
              </Box>
              
              <Box sx={{ mt: 2 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      fontWeight: 'normal',
                      mb: 3,
                      color: 'rgba(209, 213, 219, 1)',
                      fontFamily: '"Wix Madefor Text", sans-serif'
                    }}
                  >
                    The Innovation Behind S10.AI
                  </Typography>
                </Box>
                
                <Box 
                  ref={listRef}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                  {innovationPoints.map((point, index) => (
                    <Box
                      component={motion.div}
                      key={index}
                      className="innovation-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      viewport={{ once: true }}
                      sx={{
                        transition: 'all 500ms',
                        borderLeft: '2px solid rgba(30, 174, 219, 0.4)',
                        pl: 2
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box 
                          sx={{ 
                            flexShrink: 0, 
                            mt: 0.5,
                            animation: 'pulse 2s infinite'
                          }}
                        >
                          {point.icon}
                        </Box>
                        <Box>
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
                          >
                            <Typography 
                              variant="h6"
                              sx={{
                                fontSize: '1.125rem',
                                fontWeight: 'normal',
                                mb: 1,
                                color: 'rgba(209, 213, 219, 1)',
                                fontFamily: '"Wix Madefor Text", sans-serif'
                              }}
                            >
                              {point.title}
                            </Typography>
                          </Box>
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
                          >
                            <Typography 
                              sx={{
                                color: 'rgba(156, 163, 175, 1)',
                                fontFamily: '"Wix Madefor Text", sans-serif'
                              }}
                            >
                              {point.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                    lineHeight: 1.7,
                    mt: 3,
                    fontWeight: 'normal',
                    color: 'rgba(209, 213, 219, 1)',
                    fontFamily: '"Wix Madefor Text", sans-serif'
                  }}
                >
                  S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
                </Typography>
              </Box>
              
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography 
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.7,
                    fontWeight: 'normal',
                    color: 'rgba(156, 163, 175, 1)',
                    fontFamily: '"Wix Madefor Text", sans-serif'
                  }}
                >
                  We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more <TextRotate texts={["efficient", "accurate", "humane", "intelligent"]} />, and patient-centric.
                </Typography>
              </Box>
              
              <Box 
                sx={{ 
                  mt: 4, 
                  pt: 4, 
                  borderTop: '1px solid rgba(75, 85, 99, 1)' 
                }}
              >
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: 3
                  }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <Box 
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        borderRadius: '50%', 
                        bgcolor: 'rgba(75, 85, 99, 1)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography 
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 'normal',
                          color: 'white'
                        }}
                      >
                        SS
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                  }}>
                    <Typography 
                      variant="h6"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 'normal',
                        color: 'white',
                        fontFamily: '"Wix Madefor Text", sans-serif'
                      }}
                    >
                      Sridharan Sivan
                    </Typography>
                    <Typography 
                      sx={{
                        color: 'rgba(156, 163, 175, 1)',
                        fontFamily: '"Wix Madefor Text", sans-serif',
                        mb: 2
                      }}
                    >
                      Founder & Chairman, S10.AI Inc.
                    </Typography>
                    
                    {/* Animated Signature */}
                    <SignatureAnimation 
                      width={180} 
                      height={60} 
                      color="#1EAEDB" 
                      className="mt-2" 
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FounderMessage;
