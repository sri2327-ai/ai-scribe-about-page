import { Box, Button, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const NinthSection = () => {
  const isMobile = useIsMobile();
  const MotionBox = motion(Box);

  const cards = [
    {
      title: "Science-Driven AI",
      description: "Truth-first, responsible AI powered by S10's patented IPKO for smarter automation. Specialty-specific medical terminology understanding."
    },
    {
      title: "Cross-Lingual Precision",
      description: "Advanced ASR and AI-powered speech-to-text for healthcare, offering unparalleled accuracy in speech recognition. Clinically validated accuracy rates of 98%+."
    },
    {
      title: "Clinician-Centric",
      description: "AI that adapts to workflows, not disrupts them. Seamless integration with existing systems."
    },
    {
      title: "Seamless Automation",
      description: "AI for physician workflows with robotic interoperability. Real-time EHR synchronization. Automated coding and billing optimization."
    }
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #143151, #387E89)',
      width: '100%',
      padding: '30px'
    }}>
      <Stack
        spacing={3}
        direction="column"
        sx={{
          flexWrap: 'wrap',
          justifyContent: "space-between",
          alignItems: 'flex-start',
        }}
        useFlexGap
      >
        <Box>
          <Typography variant="h3" fontWeight="semiBold" sx={{ color: 'white', mb: 2 }}>
            The S10.AI Competitive Edge
          </Typography>
          <Typography variant="h5" fontWeight="regular" sx={{ color: 'white', opacity: 0.9 }}>
            Leading the Future of Healthcare AI
          </Typography>
        </Box>
        <Button 
          variant="text" 
          sx={{ 
            textTransform: "capitalize",
            background: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.white}`,
            px: 3,
            py: 1.5,
            borderRadius: "50px",
            "&:hover": {
              ".icon-box": {
                transform: "rotate(-270deg)",
                color: "white",
                borderColor: "white",
              },
              ".button-text": {
                color: "white",
              },
              background: 'linear-gradient(135deg, #143151, #387E89)',
            },
            boxShadow: 1
          }}
          startIcon={
            <Box
              className="icon-box"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 25,
                height: 25,
                borderRadius: "50%", 
                color: "#143151",
                border: `2px solid #143151`,
                transition: "transform 0.3s ease",
                transform: "rotate(0deg)",
                mr: 1
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </Box>
          }
        >
          <Typography
            className="button-text"
            variant='h6' 
            fontWeight="semiBold" 
            sx={{
              color: "#143151",
              transition: "color 0.3s ease"
            }}
          >
            View More
          </Typography>
        </Button>
      </Stack>

      {isMobile ? (
        <Box sx={{ mt: 3 }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cards.map((card, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <AnimatePresence>
                    <MotionBox
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      sx={{
                        height: '100%',
                        minHeight: '280px',
                        background: 'white',
                        borderRadius: 3,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        mx: 1,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #143151, #387E89)',
                          '.title': {
                            color: 'white',
                          },
                          '.description': {
                            color: 'white',
                            opacity: 1,
                          },
                          '.icon-box': {
                            transform: 'rotate(360deg)',
                            color: 'white'
                          }
                        }
                      }}
                    >
                      <Typography 
                        className="title"
                        variant="h5" 
                        fontWeight="semiBold" 
                        sx={{ 
                          color: 'black',
                          transition: 'color 0.3s ease',
                          textAlign: 'center',
                          mb: 2
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography 
                        className="description"
                        variant="body1" 
                        sx={{ 
                          color: 'black',
                          opacity: 0.8,
                          transition: 'all 0.3s ease',
                          textAlign: 'center',
                          mb: 2
                        }}
                      >
                        {card.description}
                      </Typography>
                      <Box
                        className="icon-box"
                        sx={{
                          alignSelf: 'center',
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 25,
                          height: 25,
                          color: 'black',
                          transition: "all 0.3s ease",
                          transform: "rotate(0deg)",
                        }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Box>
                    </MotionBox>
                  </AnimatePresence>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Box>
      ) : (
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 3,
          width: '100%',
          mt: 3
        }}>
          {cards.map((card, index) => (
            <AnimatePresence key={index}>
              <MotionBox
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                sx={{
                  height: '100%',
                  minHeight: '280px',
                  background: 'white',
                  borderRadius: 3,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    '.title': {
                      color: 'white',
                    },
                    '.description': {
                      color: 'white',
                      opacity: 1,
                    },
                    '.icon-box': {
                      transform: 'rotate(360deg)',
                      color: 'white'
                    }
                  }
                }}
              >
                <Typography 
                  className="title"
                  variant="h5" 
                  fontWeight="semiBold" 
                  sx={{ 
                    color: 'black',
                    transition: 'color 0.3s ease',
                    textAlign: 'center',
                    mb: 2
                  }}
                >
                  {card.title}
                </Typography>
                <Typography 
                  className="description"
                  variant="body1" 
                  sx={{ 
                    color: 'black',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    mb: 2
                  }}
                >
                  {card.description}
                </Typography>
                <Box
                  className="icon-box"
                  sx={{
                    alignSelf: 'center',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 25,
                    height: 25,
                    color: 'black',
                    transition: "all 0.3s ease",
                    transform: "rotate(0deg)",
                  }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Box>
              </MotionBox>
            </AnimatePresence>
          ))}
        </Box>
      )}
    </section>
  );
};

export default NinthSection;
