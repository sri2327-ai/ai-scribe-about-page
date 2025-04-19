
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Brain, User, Heart, Lungs, Eye, Hospital, FlaskRound, Wheelchair, Stomach, Ambulance, Liver, Stethoscope, Kidney, Activity, FirstAid, Ear, Flask, Skin } from "lucide-react";

export const EighthSection = () => {
  const specialties = [
    { name: "Orthopedics", icon: Activity },
    { name: "Urology", icon: Activity },
    { name: "Neurology", icon: Brain },
    { name: "Pediatrics", icon: User },
    { name: "Cardiology", icon: Heart },
    { name: "Oncology", icon: Activity },
    { name: "Pulmonology", icon: Lungs },
    { name: "Gynecology", icon: Activity },
    { name: "Psychiatry", icon: Brain },
    { name: "Ophthalmology", icon: Eye },
    { name: "Hospital Medicine", icon: Hospital },
    { name: "Hematology", icon: FlaskRound },
    { name: "Geriatrics", icon: Wheelchair },
    { name: "Gastroenterology", icon: Stomach },
    { name: "Emergency Medicine", icon: Ambulance },
    { name: "Hepatology", icon: Liver },
    { name: "Internal Medicine", icon: Stethoscope },
    { name: "Nephrology", icon: Kidney },
    { name: "Rheumatology", icon: Activity },
    { name: "Urgent Care", icon: FirstAid },
    { name: "ENT", icon: Ear },
    { name: "Endocrinology", icon: Flask },
    { name: "Dermatology", icon: Skin }
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
                  style={{
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    strokeWidth: 2
                  }}
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
