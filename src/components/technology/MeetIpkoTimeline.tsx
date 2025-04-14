
import React, { useRef, useEffect } from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { Timeline } from "@/components/ui/timeline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Separate component for each timeline item with parallax effect
const ParallaxTimelineItem = ({ item, index, scrollYProgress }) => {
  // Create transform values for each timeline item
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 100 : 50, index % 2 === 0 ? -50 : -100]
  );
  
  return (
    <Box
      component={motion.div}
      key={index}
      style={{ y: yOffset }}
      sx={{ mb: 4, '&:last-child': { mb: 0 } }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Box 
          sx={{ 
            height: 32, 
            width: 32, 
            borderRadius: '50%', 
            bgcolor: 'black', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '1px solid', 
            borderColor: 'tealBlueBright' 
          }}
        >
          <Box 
            sx={{ 
              height: 12, 
              width: 12, 
              borderRadius: '50%', 
              bgcolor: 'tealBlueBright' 
            }}
          />
        </Box>
        <Typography 
          variant="h3"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          {item.title}
        </Typography>
      </Box>
      {item.content}
    </Box>
  );
};

// Compact card for mobile carousel view
const TimelineCard = ({ item }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: 'black',
        p: 2,
        borderRadius: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        height: '100%'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box 
          sx={{ 
            height: 32, 
            width: 32, 
            borderRadius: '50%', 
            bgcolor: 'black', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '1px solid', 
            borderColor: 'tealBlueBright' 
          }}
        >
          <Box 
            sx={{ 
              height: 12, 
              width: 12, 
              borderRadius: '50%', 
              bgcolor: 'tealBlueBright' 
            }}
          />
        </Box>
        <Typography 
          variant="h6"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          {item.title}
        </Typography>
      </Box>
      
      <Typography
        sx={{
          color: 'gray.400',
          fontSize: '0.875rem'
        }}
      >
        {item.description}
      </Typography>
    </Paper>
  );
};

const MeetIpkoTimeline = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const timelineData = [
    {
      title: "CCIE",
      subtitle: "Cross-Lingual Conversation Inference Engine",
      description: "Our advanced language processing system enables seamless multilingual communication with 16-language capabilities.",
      content: (
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'black',
            p: 3,
            borderRadius: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'normal',
                color: 'white'
              }}
            >
              Cross-Lingual Conversation Inference Engine
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'gray.400',
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: 3,
              fontWeight: 'normal'
            }}
          >
            Our advanced language processing system enables seamless multilingual communication with 16-language diarization capabilities, breaking down language barriers in healthcare.
          </Typography>
          <Grid container spacing={2}>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="multilingual">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Multilingual Support
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Supports 16 languages with real-time translation and diarization
                </Typography>
              </Paper>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="contextual">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Contextual Understanding
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Maintains context across languages for accurate communication
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      ),
    },
    {
      title: "PKIE",
      subtitle: "Physician Knowledge Inference Engine",
      description: "PKIE learns and mimics physician workflows for personalized AI scribing and documentation.",
      content: (
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'black',
            p: 3,
            borderRadius: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'normal',
                color: 'white'
              }}
            >
              Physician Knowledge Inference Engine
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'gray.400',
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: 3,
              fontWeight: 'normal'
            }}
          >
            PKIE learns and mimics physician workflows for personalized AI scribing, adapting to each doctor's unique documentation style and preferences.
          </Typography>
          <Grid container spacing={2}>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="adaptive">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Adaptive Learning
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Continuously improves by learning from physician interactions
                </Typography>
              </Paper>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="workflow">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Workflow Integration
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Seamlessly fits into existing clinical documentation processes
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      ),
    },
    {
      title: "MKIE",
      subtitle: "Medical Knowledge Inference Engine",
      description: "AI-driven clinical pathways for precise documentation improvement and medical validation.",
      content: (
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'black',
            p: 3,
            borderRadius: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'normal',
                color: 'white'
              }}
            >
              Medical Knowledge Inference Engine
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'gray.400',
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: 3,
              fontWeight: 'normal'
            }}
          >
            MKIE powers AI-driven clinical pathways for precise documentation improvement, ensuring accuracy and completeness in medical records.
          </Typography>
          <Grid container spacing={2}>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="clinical">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Clinical Pathways
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Evidence-based workflows for comprehensive documentation
                </Typography>
              </Paper>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="medical">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Medical Validation
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Ensures clinical accuracy and completeness of documentation
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      ),
    },
    {
      title: "IIIE",
      subtitle: "Intuitive Interface Inference Engine",
      description: "Breaks integration barriers for effortless deployment across all healthcare platforms.",
      content: (
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'black',
            p: 3,
            borderRadius: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'normal',
                color: 'white'
              }}
            >
              Intuitive Interface Inference Engine
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'gray.400',
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: 3,
              fontWeight: 'normal'
            }}
          >
            IIIE breaks integration barriers for effortless deployment across platforms, making our AI technology accessible to any healthcare system.
          </Typography>
          <Grid container spacing={2}>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="seamless">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Seamless Integration
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Works with existing EMR systems without complex setup
                </Typography>
              </Paper>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }} key="cross">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'black',
                  p: 2,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                    mb: 1
                  }}
                >
                  Cross-Platform
                </Typography>
                <Typography
                  sx={{
                    color: 'gray.400',
                    fontSize: '0.875rem',
                    fontWeight: 'normal'
                  }}
                >
                  Functions across web, mobile, and desktop environments
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      ),
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        bgcolor: "black"
      }}
      ref={containerRef}
    >
      <Container sx={{ pt: { xs: 4, md: 8 } }}>
        {isMobile ? (
          // Mobile view with carousel to save space
          <Box sx={{ px: 2, py: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.25rem' },
                mb: 2,
                color: 'white',
                maxWidth: '4xl'
              }}
            >
              Meet IPKO – The Intelligent Physician Knowledge Orchestrator
            </Typography>
            <Typography
              sx={{
                color: 'gray.400',
                fontSize: '0.875rem',
                mb: 3
              }}
            >
              IPKO leverages powerful AI inference engines for unmatched automation, security, and knowledge engineering.
            </Typography>
            
            <Typography
              sx={{
                mb: 1,
                color: 'gray.300',
                fontSize: '0.875rem'
              }}
            >
              Swipe to explore IPKO's engines →
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {timelineData.map((item, index) => (
                <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }} key={index}>
                  <TimelineCard item={item} />
                </Grid>
              ))}
            </Grid>
            
            {/* Visual timeline connection */}
            <Box
              sx={{
                position: 'relative',
                height: 80,
                my: 4,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  height: '100%',
                  width: 2,
                  background: 'linear-gradient(to bottom, transparent, rgba(30, 174, 219, 1), transparent)'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: 16,
                  width: 16,
                  borderRadius: '50%',
                  border: '2px solid rgba(30, 174, 219, 1)',
                  bgcolor: 'black'
                }}
              />
            </Box>
          </Box>
        ) : (
          // Desktop view with regular timeline
          <Timeline data={timelineData} />
        )}
      </Container>
    </Box>
  );
};

export default MeetIpkoTimeline;
