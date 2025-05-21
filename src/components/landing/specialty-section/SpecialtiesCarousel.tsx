
import React, { useState } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { 
  Brain, User, Heart, Eye, 
  Building2, FlaskConical, Apple, Ambulance, 
  CircleDot, Stethoscope, Droplets, Activity, 
  HeartPulse, Ear, Microscope, ShieldPlus, 
  Syringe, Bone, Dna, 
  Pill, Baby, Scissors,
  MoreHorizontal
} from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const allSpecialties = [
  { name: "Cardiology", icon: Heart, complex: true },
  { name: "Neurology", icon: Brain, complex: true },
  { name: "Pulmonology", icon: Activity, complex: true }, // Changed from Lungs to Activity
  { name: "Endocrinology", icon: Microscope, complex: true },
  { name: "Oncology", icon: CircleDot, complex: true },
  { name: "Rheumatology", icon: Bone, complex: true },
  { name: "Gastroenterology", icon: Apple, complex: true },
  { name: "Nephrology", icon: Droplets, complex: true },
  { name: "Hematology", icon: FlaskConical, complex: true },
  { name: "Infectious Disease", icon: Pill, complex: true },
  { name: "Orthopedics", icon: Activity },
  { name: "Urology", icon: Droplets },
  { name: "Pediatrics", icon: User },
  { name: "Ophthalmology", icon: Eye },
  { name: "Hospital Medicine", icon: Building2 },
  { name: "Gynecology", icon: HeartPulse },
  { name: "Psychiatry", icon: Brain },
  { name: "Geriatrics", icon: Activity },
  { name: "Emergency Medicine", icon: Ambulance },
  { name: "Hepatology", icon: CircleDot },
  { name: "Internal Medicine", icon: Stethoscope },
  { name: "Urgent Care", icon: HeartPulse },
  { name: "ENT", icon: Ear },
  { name: "Dermatology", icon: ShieldPlus },
  { name: "Immunology", icon: Dna },
  { name: "Surgery", icon: Scissors },
  { name: "Neonatology", icon: Baby },
  { name: "Pain Management", icon: Activity }, // Changed from Thermostat to Activity
  { name: "Allergy", icon: Syringe }
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
      border: specialty.complex ? '1px solid #387E89' : '1px solid #E0E0E0',
      gap: 1,
      transition: 'transform 0.23s, box-shadow 0.22s',
      "&:hover": {
        transform: 'translateY(-4px) scale(1.025)',
        boxShadow: '0 6px 22px 0 rgba(56,126,137,0.10)'
      }
    }}
  >
    <div>
      <IconComponent size={26} color={specialty.complex ? "#387E89" : "#143151"} />
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const initialSpecialties = allSpecialties.slice(0, 18); // Show first 18 specialties

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
          items={initialSpecialties}
          columnsDesktop={6}
          columnsTablet={3}
          columnsMobile={2}
          gap={16}
          showControls={true}
          itemWidth={140}
          itemHeight={115}
          cardClassName="flex flex-col items-center justify-center h-full"
          autoPlay={true}
          autoPlayInterval={3500}
          controlsBelow={true}
          renderItem={(specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <SpecialtyCard specialty={specialty} IconComponent={IconComponent} />
            );
          }}
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            onClick={() => setIsDialogOpen(true)}
            sx={{
              borderColor: '#387E89',
              color: '#143151',
              borderRadius: '24px',
              px: 4, 
              '&:hover': {
                borderColor: '#143151',
                backgroundColor: 'rgba(56,126,137,0.04)'
              }
            }}
            startIcon={<MoreHorizontal size={18} />}
          >
            View All Specialties
          </Button>
        </Box>
      </Box>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-gray-800">
              All Medical Specialties
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {allSpecialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg ${specialty.complex ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}
                  >
                    <IconComponent 
                      size={20} 
                      className={specialty.complex ? 'text-blue-600' : 'text-gray-700'}
                    />
                    <span className="ml-2 font-medium">
                      {specialty.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
