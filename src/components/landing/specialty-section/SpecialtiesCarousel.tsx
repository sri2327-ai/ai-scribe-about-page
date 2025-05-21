
import React, { useState } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { 
  Brain, User, Heart, Eye, 
  Building2, FlaskConical, Apple, Ambulance, 
  CircleDot, Stethoscope, Droplets, Activity, 
  HeartPulse, Ear, Microscope, ShieldPlus, 
  Syringe, Bone, Dna, 
  Pill, Baby, Scissors,
  MoreHorizontal, Utensils, Footprints, UserRound,
  Users, Spline, Bandage
} from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const allSpecialties = [
  { name: "Cardiology", icon: Heart, complex: true },
  { name: "Neurology", icon: Brain, complex: true },
  { name: "Pulmonology", icon: Activity, complex: true },
  { name: "Endocrinology", icon: Microscope, complex: true },
  { name: "Oncology", icon: FlaskConical, complex: true, highlight: true },
  { name: "Rheumatology", icon: Bone, complex: true },
  { name: "Gastroenterology", icon: Utensils, complex: true, highlight: true },
  { name: "Nephrology", icon: Droplets, complex: true },
  { name: "Hematology", icon: FlaskConical, complex: true },
  { name: "Infectious Disease", icon: Pill, complex: true },
  { name: "Orthopedics", icon: Bone, highlight: true },
  { name: "Urology", icon: Droplets },
  { name: "Pediatrics", icon: User, highlight: true },
  { name: "Ophthalmology", icon: Eye, complex: true, highlight: true },
  { name: "Hospital Medicine", icon: Building2 },
  { name: "Gynecology", icon: HeartPulse },
  { name: "Psychiatry", icon: Brain, highlight: true },
  { name: "Geriatrics", icon: Activity },
  { name: "Emergency Medicine", icon: Ambulance },
  { name: "Hepatology", icon: CircleDot },
  { name: "Internal Medicine", icon: Pill, highlight: true },
  { name: "Urgent Care", icon: HeartPulse },
  { name: "ENT", icon: Ear, highlight: true },
  { name: "Dermatology", icon: ShieldPlus },
  { name: "Immunology", icon: Dna },
  { name: "Surgery", icon: Scissors },
  { name: "Neonatology", icon: Baby },
  { name: "Pain Management", icon: Activity },
  { name: "Allergy", icon: Syringe },
  { name: "Chiropractor", icon: Spline, highlight: true },
  { name: "Functional Medicine", icon: Activity, highlight: true },
  { name: "Podiatry", icon: Footprints, highlight: true },
  { name: "Therapist", icon: UserRound, highlight: true }
];

const SpecialtyCard = ({ specialty, IconComponent }) => (
  <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFF',
      borderRadius: 2.5,
      py: { xs: 1.5, sm: 2 },
      px: { xs: 0.5, sm: 1 },
      minWidth: '100%',
      height: '100%',
      boxShadow: '0 2px 10px 0 rgba(0,0,0,0.04)',
      border: specialty.complex ? '1px solid #387E89' : '1px solid #E0E0E0',
      gap: { xs: 0.5, sm: 1 },
      transition: 'transform 0.23s, box-shadow 0.22s',
      "&:hover": {
        transform: 'translateY(-4px) scale(1.025)',
        boxShadow: '0 6px 22px 0 rgba(56,126,137,0.10)'
      }
    }}
  >
    <div className="flex items-center justify-center">
      <IconComponent 
        size="100%" 
        color={specialty.complex ? "#387E89" : "#143151"} 
        className="responsive-icon w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px]"
      />
    </div>
    <Typography 
      variant="body1" 
      sx={{ 
        textAlign: 'center',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #143151, #387E89)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
        mt: 0.5,
        lineHeight: 1.2
      }}
    >
      {specialty.name}
    </Typography>
  </Box>
);

export const SpecialtiesCarousel = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const initialSpecialties = allSpecialties
    .filter(specialty => specialty.highlight || allSpecialties.indexOf(specialty) < 14)
    .slice(0, 18);

  return (
    <Box sx={{ mt: { xs: 6, sm: 8, md: 10 }, maxWidth: '1400px', mx: 'auto' }}>
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: "center",
          color: "#000",
          fontWeight: 800,
          mb: { xs: 1, md: 2 },
          fontSize: { xs: "1.55rem", sm: "2.05rem", md: "2.35rem" },
          letterSpacing: "-0.04em"
        }}
      >
        Specialized for Every Medical Field
      </Typography>

      <div className="flex justify-center mb-4">
        <Badge 
          variant="outline" 
          className="text-sm sm:text-base px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200"
        >
          Works with any medical specialty, even those not listed
        </Badge>
      </div>
      
      <Box sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        <ResponsiveCarousel
          items={initialSpecialties}
          columnsDesktop={6}
          columnsTablet={4}
          columnsMobile={3}
          gap={8}
          showControls={true}
          itemWidth={{ xs: 90, sm: 120, md: 140 }}
          itemHeight={{ xs: 90, sm: 100, md: 115 }}
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
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 4 } }}>
          <Button 
            variant="outlined" 
            onClick={() => setIsDialogOpen(true)}
            sx={{
              borderColor: '#387E89',
              color: '#143151',
              borderRadius: '24px',
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 0.75, md: 1 },
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
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
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-4 border-b sticky top-0 bg-white z-10">
            <DialogTitle className="text-xl md:text-2xl font-bold text-center text-gray-800">
              All Medical Specialties
            </DialogTitle>
            <p className="text-center text-gray-500 text-sm mt-1">
              CRUSH AI adapts to any medical specialty's unique documentation requirements
            </p>
          </DialogHeader>
          <ScrollArea className="h-[60vh] md:h-[70vh]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 md:p-4 lg:p-5">
              {allSpecialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 ${specialty.complex ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}
                  >
                    <IconComponent 
                      size={20} 
                      className={specialty.complex ? 'text-blue-600 flex-shrink-0' : 'text-gray-700 flex-shrink-0'}
                    />
                    <span className="ml-2 font-medium text-sm md:text-base">
                      {specialty.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="p-4 mt-2 bg-gradient-to-r from-blue-50 to-teal-50 mx-4 mb-4 rounded-lg border border-blue-100">
              <p className="text-center font-medium text-blue-800">
                Don't see your specialty? CRUSH AI can be customized for <span className="underline">any medical field</span>.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <style>
        {`
        .responsive-icon {
          width: auto;
          height: auto;
        }
        @media (max-width: 600px) {
          .responsive-icon {
            width: 20px;
            height: 20px;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .responsive-icon {
            width: 24px;
            height: 24px;
          }
        }
        @media (min-width: 901px) {
          .responsive-icon {
            width: 26px;
            height: 26px;
          }
        }
        `}
      </style>
    </Box>
  );
};

