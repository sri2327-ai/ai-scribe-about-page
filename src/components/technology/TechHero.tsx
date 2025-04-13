
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect, useState } from "react";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Shield, ShieldCheck, FileCheck, CheckCircle, Lock, Server, 
  Database, UserCheck, Brain, BrainCircuit, Cpu, Network, KeyRound, 
  Fingerprint, Code, Bot, Satellite, CloudCog, Zap 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// AI and Security concepts to display randomly
const aiConcepts = [
  { icon: Brain, label: "Neural Networks", description: "Computational models inspired by biological neural networks in the brain" },
  { icon: BrainCircuit, label: "Deep Learning", description: "Advanced AI capable of unsupervised feature extraction and pattern recognition" },
  { icon: Cpu, label: "Quantum Computing", description: "Next-generation computing using quantum-mechanical phenomena" },
  { icon: Bot, label: "IPKO Assistant", description: "AI-powered clinical assistant that augments healthcare workflows" },
  { icon: Code, label: "NLP Processing", description: "Converting natural language to structured clinical documentation" },
  { icon: CloudCog, label: "Cloud Processing", description: "Distributed AI computing infrastructure with scalable resources" }
];

const securityConcepts = [
  { icon: Shield, label: "Threat Protection", description: "Advanced security measures to protect against cyber threats" },
  { icon: Lock, label: "End-to-End Encryption", description: "Data is encrypted from origin to destination, inaccessible to intermediaries" },
  { icon: Database, label: "Secure Data Storage", description: "Multi-layered protection for patient and clinical data" },
  { icon: Fingerprint, label: "Biometric Authentication", description: "Identity verification through unique biological characteristics" },
  { icon: KeyRound, label: "Zero-Knowledge Proofs", description: "Cryptographic method for verifying data without revealing it" },
  { icon: Network, label: "Secure Network", description: "Protected communication channels for sensitive information" }
];

const certifications = [
  { icon: ShieldCheck, label: "HIPAA Compliant", description: "Health Insurance Portability and Accountability Act compliance for healthcare data protection" },
  { icon: FileCheck, label: "GDPR Compliant", description: "General Data Protection Regulation compliance for EU data protection and privacy standards" },
  { icon: Shield, label: "PIPEDA Compliant", description: "Personal Information Protection and Electronic Documents Act compliance for Canadian privacy standards" },
  { icon: CheckCircle, label: "ISO 27001 Certified", description: "International standard for information security management systems and best practices" },
  { icon: UserCheck, label: "SOC 2 Certified", description: "Service Organization Control 2 compliance for data security and privacy" },
  { icon: Server, label: "HITRUST Certified", description: "Health Information Trust Alliance framework for regulatory compliance and risk management" }
];

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

const BackgroundIcon = ({ icon: Icon, delay, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const colors = {
    ai: "text-purple-400",
    security: "text-blue-400",
    certification: "text-tealBlueBright"
  };
  const baseColor = `${colors[type]}/20`;
  const hoverColor = colors[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      whileHover={{ opacity: 1, scale: 1.1 }}
      className={`absolute ${hovered ? hoverColor : baseColor} hover:${hoverColor} transition-all duration-300`}
      style={{
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        transform: `scale(${Math.random() * 0.5 + 0.8})`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={24} />
    </motion.div>
  );
};

// Special IPKO badge that appears in the background
const IpkoBadge = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  // Random position but always in view
  const top = Math.random() * 60 + 20;
  const left = Math.random() * 60 + 20;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ 
            opacity: { repeat: Infinity, duration: 3 },
            scale: { repeat: Infinity, duration: 3 }
          }}
          className="absolute cursor-pointer"
          style={{
            top: `${top}%`,
            left: `${left}%`,
          }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-md"></div>
            <div className="z-10 w-12 h-12 rounded-full backdrop-blur-md bg-black/40 border border-blue-500/30 flex items-center justify-center">
              <span className="text-[10px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">IPKO</span>
            </div>
          </div>
        </motion.div>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-black/90 border border-blue-500/30">
        <div className="flex flex-col gap-3 p-2">
          <h4 className="text-sm font-bold text-white">IPKO - Intelligent Physician Knowledge Orchestrator</h4>
          <p className="text-xs text-white/70">
            Our patented AI system designed specifically for healthcare providers. IPKO transforms clinical documentation with real-time transcription, contextual understanding, and adaptive learning.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Zap size={14} className="text-tealBlueBright" />
            <span className="text-[10px] text-tealBlueBright">Increases physician productivity by 37%</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const GlassmorphismEffect = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Background security concepts */}
      {securityConcepts.map((item, index) => (
        <BackgroundIcon 
          key={`security-${index}`} 
          icon={item.icon} 
          delay={100 * (index + 1)} 
          type="security"
        />
      ))}
      
      {/* Background AI concepts */}
      {aiConcepts.map((item, index) => (
        <BackgroundIcon 
          key={`ai-${index}`} 
          icon={item.icon} 
          delay={120 * (index + 1)} 
          type="ai"
        />
      ))}
      
      {/* Background certifications */}
      {certifications.map((item, index) => (
        <BackgroundIcon 
          key={`cert-${index}`} 
          icon={item.icon} 
          delay={140 * (index + 1)} 
          type="certification"
        />
      ))}
      
      {/* IPKO Badge */}
      <IpkoBadge delay={1000} />
    </div>
  );
};

const TechHero = () => {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section 
      className="relative w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Canvas Effect positioned as background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasEffect id="tech-canvas" className="opacity-40" />
      </div>
      
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 z-10"
        fill="#1EAEDB"
      />
      
      {/* Enhanced Glassmorphism Effect with AI and Security Icons */}
      <GlassmorphismEffect isVisible={isHovering} />
      
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
            
            {/* Security Icons with Glassmorphism */}
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
          <div className="w-full max-w-5xl aspect-[16/9] flex justify-center items-center">
            <img
              src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
              alt="S10.AI Healthcare Platform"
              className="w-full h-full object-contain z-10"
            />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
