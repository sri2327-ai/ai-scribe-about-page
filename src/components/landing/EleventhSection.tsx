import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const EleventhSection = () => {
  const animation = useScrollAnimation();

  return (
    <motion.section 
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      className="py-12 w-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, #143151, #387E89, #F06292)`,
      }}
    >
      <Stack
        spacing={2}
        direction="column"
        sx={{
          maxWidth: { xs: '70%', sm: '400px', md: '500px' },
          width: '100%',
          alignItems: "center",
          p: { xs: 2, md: 3 }
        }}
        useFlexGap
      >
        <Typography 
          variant="h4" 
          fontWeight="semiBold" 
          sx={{ 
            textAlign: "center", 
            color: 'white',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          Elevate Patient Care with S10.AI
        </Typography>

        <Button 
          variant="outlined" 
          sx={{ 
            borderColor: 'white',
            color: 'white',
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 1.5 },
            borderRadius: "50px",
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
          startIcon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: '2px solid white',
                mr: 1
              }}
            >
              <ArrowRight className="h-3 w-3" />
            </Box>
          }
        >
          <Typography
            variant='h6' 
            fontWeight="semiBold" 
            sx={{
              fontSize: { xs: '0.8rem', md: '0.9rem' }
            }}
          >
            Book A Demo
          </Typography>
        </Button>
      </Stack>
    </motion.section>
  );
};
