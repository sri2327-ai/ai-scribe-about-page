
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, Globe, Users, Settings, Star, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";

const features = [
  {
    icon: <Building className="h-6 w-6 text-white" />,
    title: "Company",
    description: "S10.AI Inc. & S10 Technologies, a major investor in virtual medical scribing, supporting 1,000+ physicians in the U.S."
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Operations",
    description: "Offices in the U.S. with three offshore delivery & support centers."
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "People",
    description: "A dedicated team of 500+ professionals transforming healthcare AI."
  },
  {
    icon: <Settings className="h-6 w-6 text-white" />,
    title: "Product",
    description: "The patented Intelligent Physician Knowledge Orchestrator (IPKO), revolutionizing medical documentation."
  },
  {
    icon: <Star className="h-6 w-6 text-white" />,
    title: "User Satisfaction",
    description: "Rapid adoption, phenomenal feedback, and growing demand prove its impact."
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Certifications",
    description: "ISO 27001, HIPAA & PIPEDA compliance, cybersecurity audits, and penetration testing."
  }
];

const WhoWeAre = () => {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`${isMobile ? 'py-10 pb-16' : 'py-16 pb-24 min-h-0 lg:min-h-screen'} flex items-center bg-black`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 xs:mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-normal mb-4 sm:mb-6 text-white font-wix-madefor">Who We Are</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="relative rounded-lg border border-neutral-700/50 bg-black overflow-hidden transition-all duration-300 h-[260px] flex flex-col group"
                style={{
                  borderColor: hoveredIndex === index ? 'rgba(120, 120, 120, 0.6)' : 'rgba(80, 80, 80, 0.4)'
                }}
              >
                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <GlowBorderEffect 
                    variant="white"
                    glow={true}
                    className="opacity-70"
                  />
                )}
                
                <div className="p-6 flex flex-col h-full justify-between z-10">
                  {/* Top section with icon */}
                  <div className="flex flex-col">
                    <div className="mb-4">
                      {React.cloneElement(feature.icon, {
                        className: "h-7 w-7 text-white"
                      })}
                    </div>
                    
                    <h3 className="text-2xl font-normal mb-3 text-white font-wix-madefor">
                      {feature.title}
                    </h3>
                    
                    <p 
                      className="text-gray-400 leading-relaxed font-wix-madefor text-sm font-normal"
                      style={{
                        opacity: hoveredIndex === index ? '1' : '0.7',
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(0)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
