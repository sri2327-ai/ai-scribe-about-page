
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
    <section className="py-0" style={{ background: '#FFFFFF', minHeight: 'unset' }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 2 } }}>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: "center",
            color: "#000000",
            fontWeight: 600,
            mb: { xs: 0.5, md: 0.5 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }
          }}
        >
          Specialized for Every Medical Field
        </Typography>
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
                    mx: { xs: 0.5, sm: 0.5 }, 
                    background: '#FFFFFF',
                    borderRadius: 2, 
                    p: { xs: 0.5, sm: 0.75 }, 
                    my: 0.5,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #E0E0E0',
                    gap: 0.25,
                    alignItems: 'center',
                    minWidth: { xs: '60px', sm: '70px' },
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                >
                  <div className="group">
                    <IconComponent
                      size={16}
                      color="black"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #143151, #387E89)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      fontSize: { xs: '0.55rem', sm: '0.6rem' }
                    }}
                  >
                    {specialty.name}
                  </Typography>
                </Box>
              );
            })}
          </Marquee>
        </Box>
      </Box>
    </section>
  );
};

export default EighthSection;
