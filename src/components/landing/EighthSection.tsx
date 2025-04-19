
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Brain, User, Heart, Eye, Building2, FlaskConical, Apple, Ambulance, CircleDot, Stethoscope, Droplets, Activity, HeartPulse, Ear, Microscope, ShieldPlus } from "lucide-react";

export const EighthSection = () => {
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

  return (
    <section className="witOutSp" style={{ background: '#FFFFFF', paddingLeft: '15px', paddingRight: '15px', minHeight: 'unset' }}>
      <Box sx={{ display: 'flex', flex: 1, overflow: "hidden" }}>
        <Marquee pauseOnHover={true} gradient={false} speed={50} loop={0}>
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  mx: { xs: 1, sm: 2 }, 
                  background: '#FFFFFF',
                  borderRadius: 3, 
                  p: 3, 
                  my: 1,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #E0E0E0',
                  gap: 2,
                  alignItems: 'center'
                }}
              >
                <IconComponent
                  size={28}
                  stroke="#143151"
                  strokeWidth={2}
                  className="text-[#143151] hover:text-[#387E89] transition-colors duration-300"
                />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    textAlign: 'center',
                    color: '#143151',
                    fontWeight: 500
                  }}
                >
                  {specialty.name}
                </Typography>
              </Box>
            );
          })}
        </Marquee>
      </Box>
    </section>
  );
};
