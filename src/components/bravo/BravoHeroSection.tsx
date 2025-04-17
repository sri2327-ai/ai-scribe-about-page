
import React from 'react';
import { Container, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Stethoscope, Brain } from "lucide-react";
import { Gravity, MatterBody } from './physics/PhysicsProvider';
import { bravoColors } from '@/theme/bravo-theme';

const FloatingIcon = ({ children, x, y }: { children: React.ReactNode; x: number; y: number }) => (
  <MatterBody
    x={x}
    y={y}
    bodyType="circle"
    matterBodyOptions={{
      friction: 0.1,
      restitution: 0.5,
      density: 0.001,
    }}
    className="w-12 h-12 flex items-center justify-center text-primary bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
  >
    {children}
  </MatterBody>
);

export const BravoHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from
    -[#F5F9FF] to-white flex items-center">
      <Gravity className="!relative" debug={false} autoStart={true}>
        <Container maxWidth="lg" className="relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 700,
                mb: 4,
                color: bravoColors.primary,
                lineHeight: 1.1
              }}
            >
              B.R.A.V.O – The AI Agent That Revolutionizes Patient Care
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                fontWeight: 500,
                mb: 6,
                color: bravoColors.text.secondary,
                maxWidth: "800px",
                mx: "auto"
              }}
            >
              Automate Scheduling, Cut No-Shows, and Elevate Patient Experience!
            </Typography>
            <Button 
              className="px-8 py-6 text-lg rounded-md shadow-xl"
              style={{ 
                backgroundColor: bravoColors.secondary,
                color: bravoColors.text.white
              }}
            >
              Book a Demo
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </Container>

        <FloatingIcon x={200} y={100}>
          <Activity className="w-6 h-6" style={{ color: bravoColors.primary }} />
        </FloatingIcon>
        <FloatingIcon x={800} y={200}>
          <Stethoscope className="w-6 h-6" style={{ color: bravoColors.primary }} />
        </FloatingIcon>
        <FloatingIcon x={500} y={150}>
          <Brain className="w-6 h-6" style={{ color: bravoColors.primary }} />
        </FloatingIcon>
      </Gravity>
    </section>
  );
};
