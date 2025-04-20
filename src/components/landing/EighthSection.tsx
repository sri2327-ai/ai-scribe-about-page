
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
    <section className="py-8 md:py-12" style={{ background: '#FFFFFF', minHeight: 'unset' }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 } }}>
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
                    p: { xs: 2, sm: 3 }, 
                    my: 1,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #E0E0E0',
                    gap: 2,
                    alignItems: 'center',
                    minWidth: { xs: '100px', sm: '120px' },
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
            })}
          </Marquee>
        </Box>
      </Box>
    </section>
  );
};

export default EighthSection;
