
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Spotlight } from "@/components/ui/spotlight";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { 
  Shield, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle, 
  Lock, 
  Server, 
  Database, 
  UserCheck,
  Brain,
  BrainCircuit,
  Cpu,
  Fingerprint,
  Atom as AtomIcon,
  Bot,
  Network,
  Layers,
  Terminal,
  Cloud,
  CloudCog,
  ShieldAlert
} from "lucide-react";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const FloatingSecurityItem = ({ icon: Icon, label, description, position }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'absolute',
        ...position
      }}
    >
      <Paper 
        sx={{ 
          width: { xs: '192px', md: '224px' },
          backdropFilter: 'blur(8px)',
          bgcolor: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: 'lg',
          color: 'white',
          p: 1.5,
          fontSize: '0.75rem'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Icon size={12} />
          <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
        </Box>
        <Typography sx={{ fontSize: '10px', color: 'grey.300' }}>{description}</Typography>
      </Paper>
    </Box>
  );
};

const SecurityIcon = ({ icon: Icon, delay, sx = {}, tooltip = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 1, scale: 1.2 }}
          sx={{
            position: 'absolute',
            color: 'rgba(96, 165, 250, 0.3)',
            '&:hover': { color: 'rgb(96, 165, 250)' },
            transition: 'all 0.3s',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `scale(${Math.random() * 0.5 + 0.8})`,
            ...sx
          }}
        >
          <Icon size={24} />
        </Box>
      </HoverCardTrigger>
      {tooltip && (
        <HoverCardContent className="w-52 bg-black/80 border border-blue-500/30 text-xs">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{tooltip}</Typography>
          </Box>
        </HoverCardContent>
      )}
    </HoverCard>
  ) : null;
};

const AiTechIcon = ({ icon: Icon, delay, position, tooltip }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          sx={{
            position: 'absolute',
            backdropFilter: 'blur(4px)',
            bgcolor: 'rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(30, 174, 219, 0.3)',
            borderRadius: '50%',
            p: 1.25,
            boxShadow: '0 0 15px rgba(30, 174, 219, 0.2)',
            ...position
          }}
        >
          <Icon size={20} style={{ color: "#1EAEDB" }} />
        </Box>
      </HoverCardTrigger>
      <HoverCardContent className="w-56 bg-black/80 border border-tealBlueBright/30">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>{tooltip.title}</Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>{tooltip.description}</Typography>
        </Box>
      </HoverCardContent>
    </HoverCard>
  ) : null;
};

const TechHero = () => {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const aiTechIcons = [
    {
      icon: BrainCircuit,
      position: { top: "15%", left: "10%" },
      delay: 200,
      tooltip: {
        title: "Neural Networks",
        description: "Deep learning algorithms modeled after human brain neural connections for complex pattern recognition."
      }
    },
    {
      icon: AtomIcon,
      position: { top: "25%", right: "15%" },
      delay: 500,
      tooltip: {
        title: "Quantum AI",
        description: "Next-generation algorithms leveraging quantum computing for unprecedented problem-solving capabilities."
      }
    },
    {
      icon: Bot,
      position: { bottom: "20%", left: "18%" },
      delay: 800,
      tooltip: {
        title: "IPKO AI Assistant",
        description: "S10.AI's proprietary conversational AI designed for healthcare workflow optimization."
      }
    },
    {
      icon: Terminal,
      position: { top: "65%", right: "20%" },
      delay: 1100,
      tooltip: {
        title: "Edge Computing",
        description: "Real-time AI processing at the point of care for immediate clinical decision support."
      }
    },
    {
      icon: CloudCog,
      position: { top: "40%", left: "22%" },
      delay: 1400,
      tooltip: {
        title: "Adaptive Learning",
        description: "Self-improving algorithms that continuously learn from new healthcare data inputs."
      }
    }
  ];

  return (
    <Box 
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        bgcolor: "black",
        height: { xs: 'auto', sm: '80vh', md: '100vh' },
        minHeight: { xs: '500px', sm: '550px', md: '700px' }
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          pointerEvents: 'none' 
        }}
      >
        <CanvasEffect id="tech-canvas" className="opacity-40" />
      </Box>
      
      <Spotlight
        className="-top-40 left-0 z-10"
        fill="#1EAEDB"
      />
      
      {isHovering && (
        <>
          <SecurityIcon icon={Shield} delay={100} tooltip="Zero Trust Architecture" />
          <SecurityIcon icon={ShieldCheck} delay={300} tooltip="Continuous Security Monitoring" />
          <SecurityIcon icon={Lock} delay={500} tooltip="End-to-End Encryption" />
          <SecurityIcon icon={FileCheck} delay={700} tooltip="Audit Trail & Compliance" />
          <SecurityIcon icon={Server} delay={900} tooltip="Secure Cloud Infrastructure" />
          <SecurityIcon icon={Database} delay={1100} tooltip="Protected Health Information" />
          <SecurityIcon icon={UserCheck} delay={1300} tooltip="Biometric Authentication" />
          <SecurityIcon icon={CheckCircle} delay={1500} tooltip="Automated Compliance Checks" />
          <SecurityIcon icon={Fingerprint} delay={1700} tooltip="Multi-factor Authentication" />
          <SecurityIcon icon={Network} delay={1900} tooltip="Secure Health Data Network" />
          <SecurityIcon icon={Cpu} delay={2100} tooltip="Hardware Security Modules" />
          <SecurityIcon icon={ShieldAlert} delay={2300} tooltip="Threat Detection System" />
          <SecurityIcon icon={Brain} delay={2500} tooltip="AI-powered Security" />
          
          {aiTechIcons.map((item, index) => (
            <AiTechIcon 
              key={index}
              icon={item.icon}
              delay={item.delay}
              position={item.position}
              tooltip={item.tooltip}
            />
          ))}
        </>
      )}
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 20,
          px: { xs: 2, md: 4 },
          py: { xs: 10, md: 0 }
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          sx={{
            width: '100%',
            maxWidth: '900px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 20
          }}
        >
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{
              fontSize: { xs: '1.875rem', md: '4.5rem' },
              fontWeight: 'light',
              mb: 3,
              lineHeight: 'tight',
              fontFamily: '"Wix Madefor Text", sans-serif',
              color: 'white'
            }}
          >
            AI Innovation with Unbreakable Security
          </Typography>
          
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 2
            }}
          >
            <Box sx={{ position: 'relative', display: 'flex', height: 12, width: 12 }}>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  display: 'inline-flex', 
                  height: '100%', 
                  width: '100%', 
                  animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                  borderRadius: '50%',
                  bgcolor: 'white',
                  opacity: 0.75
                }}
              />
              <Box 
                sx={{ 
                  position: 'relative', 
                  display: 'inline-flex', 
                  height: 8, 
                  width: 8, 
                  borderRadius: '50%',
                  bgcolor: 'white'
                }}
              />
            </Box>
            <Typography 
              sx={{ 
                fontSize: '0.875rem', 
                color: 'white', 
                fontWeight: 500 
              }}
            >
              Secure & HIPAA Compliant
            </Typography>
          </Box>
          
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mt: 2
            }}
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  disableRipple
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    minWidth: 'auto',
                    backdropFilter: 'blur(8px)', 
                    bgcolor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    borderRadius: 2,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&:hover': { 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.2)' 
                    },
                    transition: 'all 0.3s',
                    p: 0
                  }}
                >
                  <Shield size={20} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
                    HIPAA Compliant
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Health Insurance Portability and Accountability Act compliance for healthcare data protection.
                  </Typography>
                </Box>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  disableRipple
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    minWidth: 'auto',
                    backdropFilter: 'blur(8px)', 
                    bgcolor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    borderRadius: 2,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&:hover': { 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.2)' 
                    },
                    transition: 'all 0.3s',
                    p: 0
                  }}
                >
                  <ShieldCheck size={20} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
                    PIPEDA Compliant
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Personal Information Protection and Electronic Documents Act compliance for Canadian privacy standards.
                  </Typography>
                </Box>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  disableRipple
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    minWidth: 'auto',
                    backdropFilter: 'blur(8px)', 
                    bgcolor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    borderRadius: 2,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&:hover': { 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.2)' 
                    },
                    transition: 'all 0.3s',
                    p: 0
                  }}
                >
                  <FileCheck size={20} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
                    GDPR Compliant
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    General Data Protection Regulation compliance for EU data protection and privacy standards.
                  </Typography>
                </Box>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  disableRipple
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    minWidth: 'auto',
                    backdropFilter: 'blur(8px)', 
                    bgcolor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    borderRadius: 2,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&:hover': { 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.2)' 
                    },
                    transition: 'all 0.3s',
                    p: 0
                  }}
                >
                  <CheckCircle size={20} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
                    ISO 27001 Certified
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    International standard for information security management systems and best practices.
                  </Typography>
                </Box>
              </HoverCardContent>
            </HoverCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TechHero;
