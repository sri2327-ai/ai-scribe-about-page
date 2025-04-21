
import React from 'react';
import { Box, Typography } from "@mui/material";
import { 
  Brain, User, Heart, Eye, 
  Building2, FlaskConical, Apple, Ambulance, 
  CircleDot, Stethoscope, Droplets, Activity, 
  HeartPulse, Ear, Microscope, ShieldPlus 
} from "lucide-react";
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

// Smaller, equal card size everywhere
const SpecialtyCard = ({ specialty, IconComponent }) => (
  <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFF',
      borderRadius: 2.5,
      py: 2,
      px: 1,
      minWidth: '100%',
      height: '100%',
      boxShadow: '0 2px 10px 0 rgba(0,0,0,0.04)',
      border: '1px solid #E0E0E0',
      gap: 1,
      transition: 'transform 0.23s, box-shadow 0.22s',
      "&:hover": {
        transform: 'translateY(-4px) scale(1.025)',
        boxShadow: '0 6px 22px 0 rgba(56,126,137,0.10)'
      }
    }}
  >
    <div>
      <IconComponent size={26} color="#143151" />
    </div>
    <Typography 
      variant="body1" 
      sx={{ 
        textAlign: 'center',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #143151, #387E89)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: { xs: '0.9rem', sm: '0.97rem', md: '1rem' },
        mt: 0.5
      }}
    >
      {specialty.name}
    </Typography>
  </Box>
);

export const SpecialtiesCarousel = () => {
  return (
    <Box sx={{ mt: 10, maxWidth: '1400px', mx: 'auto' }}>
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: "center",
          color: "#000",
          fontWeight: 800,
          mb: { xs: 3, md: 4 },
          fontSize: { xs: "1.55rem", sm: "2.05rem", md: "2.35rem" },
          letterSpacing: "-0.04em"
        }}
      >
        Specialized for Every Medical Field
      </Typography>
      <Box sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        <ResponsiveCarousel
          items={specialties}
          columnsDesktop={6}
          columnsTablet={3}
          columnsMobile={2}
          gap={16}
          showControls={true}
          itemWidth={140} // Small but even, overrides default width
          itemHeight={115}  // Uniform height for all
          cardClassName="flex flex-col items-center justify-center h-full"
          autoPlay={true}
          autoPlayInterval={3500}
          controlsBelow={true} // Arrows below carousel
          renderItem={(specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <SpecialtyCard specialty={specialty} IconComponent={IconComponent} />
            );
          }}
        />
      </Box>
    </Box>
  );
};

