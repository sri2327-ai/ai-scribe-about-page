
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

const SpecialtyCard = ({ specialty, IconComponent }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      m: 1,
      background: '#FFF',
      borderRadius: 3, 
      p: { xs: 2, sm: 2.5, md: 2.5 }, 
      minWidth: { xs: '130px', sm: '150px', md: '170px' },
      maxWidth: { xs: '180px', sm: '220px', md: '240px' },
      height: { xs: '120px', sm: '130px', md: '140px' },
      boxShadow: '0 2px 10px 0 rgba(0,0,0,0.04)',
      border: '1px solid #E0E0E0',
      gap: 2,
      transition: 'transform 0.28s, box-shadow 0.25s',
      "&:hover": {
        transform: 'translateY(-5px) scale(1.04)',
        boxShadow: '0 6px 24px 0 rgba(56,126,137,0.14)'
      }
    }}
  >
    <div>
      <IconComponent size={28} color="#143151" />
    </div>
    <Typography 
      variant="body1" 
      sx={{ 
        textAlign: 'center',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #143151, #387E89)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: { xs: '0.92rem', sm: '1rem', md: '1.05rem' },
        mt: 1
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
          gap={12}
          showControls={true}
          itemWidth={null}
          autoPlay={true}
          autoPlayInterval={4000}
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
