
import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

interface SpecialtyHeaderProps {
  laptopVw: boolean;
}

export const SpecialtyHeader = ({ laptopVw }: SpecialtyHeaderProps) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: { xs: 'center', md: 'flex-start' },
        maxWidth: laptopVw ? '240px' : { xs: '100%', sm: '500px', md: '320px', lg: '380px' },
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          color: '#000000', 
          lineHeight: 1.2,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
          fontWeight: 700
        }}
      >
        AI Solutions Designed for Every Medical Specialty
      </Typography>
      <Button 
        variant="outlined" 
        sx={{ 
          textTransform: "capitalize",
          color: '#143151',
          borderColor: '#143151',
          px: 3,
          py: 1.5,
          borderRadius: "50px",
          "&:hover":{
            backgroundColor: '#F0F4F7',
            ".icon-box": {
              transform: "rotate(-270deg)",
              color: '#387E89',
              borderColor: '#387E89',
            },
            ".button-text": {
              color: '#387E89',
            },
          },
          boxShadow: 'none',
          mt: 1,
          alignSelf: { xs: 'center', md: 'flex-start' }
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
              color: '#143151',
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
          sx={{
            background: 'linear-gradient(135deg, #143151, #387E89)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: "color 0.3s ease",
            fontWeight: 600
          }}
        >
          View More
        </Typography>
      </Button>
    </Box>
  );
};
