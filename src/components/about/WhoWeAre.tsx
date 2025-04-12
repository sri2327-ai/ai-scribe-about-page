
import { motion } from "framer-motion";
import { Building, Globe, Users, Settings, Star, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: <Building className="h-5 w-5 text-white" />,
    title: "Company",
    description: "S10.AI Inc. & S10 Technologies, a major investor in virtual medical scribing, supporting 1,000+ physicians in the U.S."
  },
  {
    icon: <Globe className="h-5 w-5 text-white" />,
    title: "Operations",
    description: "Offices in the U.S. with three offshore delivery & support centers."
  },
  {
    icon: <Users className="h-5 w-5 text-white" />,
    title: "People",
    description: "A dedicated team of 500+ professionals transforming healthcare AI."
  },
  {
    icon: <Settings className="h-5 w-5 text-white" />,
    title: "Product",
    description: "The patented Intelligent Physician Knowledge Orchestrator (IPKO), revolutionizing medical documentation."
  },
  {
    icon: <Star className="h-5 w-5 text-white" />,
    title: "User Satisfaction",
    description: "Rapid adoption, phenomenal feedback, and growing demand prove its impact."
  },
  {
    icon: <Shield className="h-5 w-5 text-white" />,
    title: "Certifications",
    description: "ISO 27001, HIPAA & PIPEDA compliance, cybersecurity audits, and penetration testing."
  }
];

const WhoWeAre = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? 'py-16 pb-24' : 'min-h-screen py-20 pb-32'} flex items-center bg-black`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white font-wix-madefor">Who We Are</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl p-4 sm:p-6 h-full bg-black/40 transition-all duration-300 group hover:scale-[1.02]">
                <GlowingEffect
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={150}
                  inactiveZone={0}
                  borderWidth={1}
                  variant="teal"
                  blur={15}
                  dualBorder={true}
                  className="opacity-70 group-hover:opacity-90 transition-all duration-300"
                />
                
                <div className="relative z-10">
                  <div className="bg-black/60 p-2 rounded-lg mb-3 sm:mb-4 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white font-wix-madefor">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-wix-madefor">{feature.description}</p>
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
