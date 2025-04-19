
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";

export const EleventhSection = () => {
  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, #143151, #387E89, #F06292)`,
      }}
    >
      <Stack
        spacing={3}  // Reduced spacing
        direction="column"
        sx={{
          maxWidth: { xs: '80%', sm: '500px', md: '600px', lg: '700px' },  // Reduced maximum widths
          width: '100%',
          alignItems: "center",
          p: { xs: 2, md: 3 }  // Reduced padding
        }}
        useFlexGap
      >
        <Typography 
          variant="h3" 
          fontWeight="semiBold" 
          sx={{ 
            textAlign: "center", 
            color: 'white',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }  // Reduced font sizes
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
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }  // Reduced font sizes
          }}
        >
          Optimize Your Practice with Bravo & CRUSH
        </Typography>

        <Button 
          variant="outlined" 
          sx={{ 
            borderColor: 'white',
            color: 'white',
            px: { xs: 3, md: 4 },
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
                width: 20,
                height: 20,
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
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}
          >
            Book A Demo
          </Typography>
        </Button>
      </Stack>
    </section>
  );
};

