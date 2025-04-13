import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect, useState } from "react";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
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
  AtomIcon,
  Bot,
  Network,
  Layers,
  Chip,
  Cloud,
  CloudCog,
  ShieldAlert
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";

const FloatingSecurityItem = ({ icon: Icon, label, description, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute"
      style={position}
    >
      <Card className="w-48 md:w-56 backdrop-blur-md bg-black/40 border border-blue-500/20 shadow-lg text-white p-3 text-xs">
        <div className="flex items-center gap-2 mb-1">
          <Icon size={12} className="text-blue-400" />
          <p className="font-semibold">{label}</p>
        </div>
        <p className="text-[10px] text-gray-300">{description}</p>
      </Card>
    </motion.div>
  );
};

const SecurityIcon = ({ icon: Icon, delay, className = "", tooltip = "" }) => {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 1, scale: 1.2 }}
          className={`absolute text-blue-400/30 hover:text-blue-400 transition-all duration-300 ${className}`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `scale(${Math.random() * 0.5 + 0.8})`,
          }}
        >
          <Icon size={24} />
        </motion.div>
      </HoverCardTrigger>
      {tooltip && (
        <HoverCardContent className="w-52 bg-black/80 border border-blue-500/30 text-xs">
          <div className="flex flex-col gap-1">
            <p className="text-white/90">{tooltip}</p>
          </div>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          className="absolute backdrop-blur-sm bg-black/20 border border-tealBlueBright/30 rounded-full p-2.5"
          style={{
            ...position,
            boxShadow: "0 0 15px rgba(30, 174, 219, 0.2)",
          }}
        >
          <Icon size={20} className="text-tealBlueBright" />
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-56 bg-black/80 border border-tealBlueBright/30">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-white">{tooltip.title}</h4>
          <p className="text-xs text-white/70">{tooltip.description}</p>
        </div>
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
      icon: Chip,
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
    <section 
      className="relative w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasEffect id="tech-canvas" className="opacity-40" />
      </div>
      
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
      
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 md:px-0 text-center relative z-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-[4.5rem] font-bold mb-6 leading-tight font-wix-madefor text-white"
            >
              AI Innovation with Unbreakable Security
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1EAEDB] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1EAEDB]"></span>
              </span>
              <p className="text-sm text-[#1EAEDB] font-medium">Secure & HIPAA Compliant</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4 mt-4"
            >
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <Shield size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">HIPAA Compliant</h4>
                      <p className="text-xs text-white/70">
                        Health Insurance Portability and Accountability Act compliance for healthcare data protection.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <ShieldCheck size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">PIPEDA Compliant</h4>
                      <p className="text-xs text-white/70">
                        Personal Information Protection and Electronic Documents Act compliance for Canadian privacy standards.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <FileCheck size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">GDPR Compliant</h4>
                      <p className="text-xs text-white/70">
                        General Data Protection Regulation compliance for EU data protection and privacy standards.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <CheckCircle size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">ISO 27001 Certified</h4>
                      <p className="text-xs text-white/70">
                        International standard for information security management systems and best practices.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </motion.div>
          </motion.div>
        }
      >
        <div className="w-full h-full flex justify-center items-center p-4 md:p-8 relative z-20">
          <div className="w-full max-w-5xl aspect-[16/9] flex justify-center items-center relative">
            <div className="relative w-full h-full">
              <div className="absolute inset-0">
                <GlowBorderEffect 
                  variant="teal" 
                  blur={12}
                  proximity={150}
                  spread={80}
                  borderWidth={3}
                  movementDuration={3}
                  className="w-full h-full"
                />
              </div>
              <img
                src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
                alt="S10.AI Healthcare Platform"
                className="w-full h-full object-contain z-10 relative"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
