
import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Brain, User, Heart, Eye, Building2, FlaskConical, Apple, Ambulance, CircleDot, Stethoscope, Droplets, Activity, HeartPulse, Ear, Microscope, ShieldPlus } from "lucide-react";

export const EighthSection = () => {
  const animation = useScrollAnimation();
  
  // Define specialties array outside of the JSX
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
    <motion.section
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate} 
      className="witOutSp" 
      style={{ background: '#FFFFFF', paddingLeft: '15px', paddingRight: '15px', minHeight: 'unset' }}
    >
      <Box sx={{ display: 'flex', flex: 1, overflow: "hidden" }}>
        <Marquee pauseOnHover={true} gradient={false} speed={50} loop={0}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
                      fontWeight: 500
                    }}
                  >
                    {specialty.name}
                  </Typography>
                </Box>
              );
            })}
          </motion.div>
        </Marquee>
      </Box>
    </motion.section>
  );
};
