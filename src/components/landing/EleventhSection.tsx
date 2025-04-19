
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";

export const EleventhSection = () => {
  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, #143151, #387E89, #143151, #F06292)`,
      }}
    >
      <Stack
        spacing={4}
        direction="column"
        sx={{
          maxWidth: { xs: '90%', sm: '650px', md: '750px', lg: '850px' },
          width: '100%',
          alignItems: "center",
          p: { xs: 3, md: 5 }
        }}
        useFlexGap
      >
        <Typography 
          variant="h3" 
          fontWeight="semiBold" 
          sx={{ 
            textAlign: "center", 
            color: 'white',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Join Top Clinics Elevating Patient Care with S10.AI!
        </Typography>

        <Typography 
          variant="h5" 
          fontWeight="semiBold" 
          sx={{ 
            textAlign: "center", 
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
          }}
        >
          Optimize Your Practice with Bravo & CRUSH
        </Typography>

        <Button 
          variant="outlined" 
          sx={{ 
            borderColor: 'white',
            color: 'white',
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
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
                width: 25,
                height: 25,
                borderRadius: "50%",
                border: '2px solid white',
                mr: 1
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </Box>
          }
        >
          <Typography
            variant='h6' 
            fontWeight="semiBold" 
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Book A Demo
          </Typography>
        </Button>
      </Stack>
    </section>
  );
};
