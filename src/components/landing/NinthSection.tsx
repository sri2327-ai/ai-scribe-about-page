import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const NinthSection = () => {
  const theme = useTheme();
  const isMobTabScr = useMediaQuery("(max-width:900px)");

  const MotionBox = motion(Box);

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
        <Typography variant="h3" fontWeight="semiBold" sx={{ color: 'white' }}>
          The S10.AI<br />Competitive Edge 
        </Typography>
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

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
        gap: 3,
        width: '100%',
        mt: 3
      }}>
        {[
          {
            title: "Science-Driven AI",
            description: "Truth-first, responsible AI powered by S10's patented IPKO for smarter automation."
          },
          {
            title: "Cross-Lingual Precision",
            description: "Advanced ASR and AI-powered speech-to-text for healthcare, offering unparalleled accuracy in speech recognition."
          },
          {
            title: "Clinician-Centric",
            description: "AI that adapts to workflows, not disrupts them."
          },
          {
            title: "Seamless Automation",
            description: "AI for physician workflows with robotic interoperability."
          }
        ].map((card, index) => (
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
    </section>
  );
};
