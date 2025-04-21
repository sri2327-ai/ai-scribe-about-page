
import React from 'react';
import { Box, Typography, useMediaQuery } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Brain, User, Heart, Eye, Building2, FlaskConical, Apple, Ambulance, CircleDot, Stethoscope, Droplets, Activity, HeartPulse, Ear, Microscope, ShieldPlus } from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

const specialties = [
  { name: "Orthopedics", icon: Activity },
  { name: "Urology", icon: Droplets },
  { name: "Neurology", icon: Brain },
  { name: "Pediatrics", icon: User },
  { name: "Cardiology", icon: Heart },
  { name: "Oncology", icon: CircleDot },
  { name: "Pulmonology", icon: Activity },
  { name: "Gynecology", icon: HeartPulse },
  { name: "Psychiatry", icon: Brain },
  { name: "Ophthalmology", icon: Eye },
  { name: "Hospital Medicine", icon: Building2 },
  { name: "Hematology", icon: FlaskConical },
  { name: "Geriatrics", icon: Activity },
  { name: "Gastroenterology", icon: Apple },
  { name: "Emergency Medicine", icon: Ambulance },
  { name: "Hepatology", icon: CircleDot },
  { name: "Internal Medicine", icon: Stethoscope },
  { name: "Nephrology", icon: Droplets },
  { name: "Rheumatology", icon: Activity },
  { name: "Urgent Care", icon: HeartPulse },
  { name: "ENT", icon: Ear },
  { name: "Endocrinology", icon: Microscope },
  { name: "Dermatology", icon: ShieldPlus }
];

const SpecialtyCard = ({ specialty, IconComponent }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      mx: { xs: 1, sm: 2 }, 
      background: '#FFFFFF',
      borderRadius: 3, 
      p: { xs: 2, sm: 3 }, 
      my: 1,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E0E0E0',
      gap: 2,
      alignItems: 'center',
      minWidth: { xs: '120px', sm: '140px' },
      height: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.08)'
      }
    }}
  >
    <div className="group">
      <IconComponent
        size={28}
        color="black"
        className="group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <Typography 
      variant="body1" 
      sx={{ 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #143151, #387E89)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 600,
        fontSize: { xs: '0.75rem', sm: '0.875rem' }
      }}
    >
      {specialty.name}
    </Typography>
  </Box>
);

export const SpecialtiesCarousel = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');
  
  return (
    <Box sx={{ mt: 12, maxWidth: '1400px', mx: 'auto' }}>
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: "center",
          color: "#000000",
          fontWeight: 700,
          mb: { xs: 3, md: 4 },
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" }
        }}
      >
        Specialized for Every Medical Field
      </Typography>
      
      {isMobile || isTablet ? (
        <Box sx={{ px: 2 }}>
          <ResponsiveCarousel
            items={specialties}
            columnsDesktop={6}
            columnsTablet={4}
            columnsMobile={2}
            gap={16}
            itemWidth="150px"
            renderItem={(specialty, index) => {
              const IconComponent = specialty.icon;
              return <SpecialtyCard specialty={specialty} IconComponent={IconComponent} />;
            }}
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flex: 1, overflow: "hidden" }}>
          <Marquee pauseOnHover={true} gradient={false} speed={50} loop={0}>
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <SpecialtyCard 
                  key={index}
                  specialty={specialty} 
                  IconComponent={IconComponent} 
                />
              );
            })}
          </Marquee>
        </Box>
      )}
    </Box>
  );
};
