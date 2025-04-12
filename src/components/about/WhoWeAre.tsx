
import { motion } from "framer-motion";
import { Building, Globe, Users, Settings, BarChart, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: <Building className="h-8 w-8" />,
    title: "Company",
    description: "S10.AI Inc. & S10 Technologies, a major investor in virtual medical scribing, supporting 1,000+ physicians in the U.S."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Operations",
    description: "Offices in the U.S. with three offshore delivery & support centers."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "People",
    description: "A dedicated team of 500+ professionals transforming healthcare AI."
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Product",
    description: "The patented Intelligent Physician Knowledge Orchestrator (IPKO), revolutionizing medical documentation."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "User Satisfaction",
    description: "Rapid adoption, phenomenal feedback, and growing demand prove its impact."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Certifications",
    description: "ISO 27001, HIPAA & PIPEDA compliance, cybersecurity audits, and penetration testing."
  }
];

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Who We Are</h2>
          <div className="w-20 h-1 bg-[#1EAEDB] mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl border border-gray-600 hover:border-[#1EAEDB]/70 p-6 h-full bg-black/40 transition-all duration-300 group">
                <GlowingEffect
                  spread={100}
                  glow={true}
                  disabled={false}
                  proximity={120}
                  inactiveZone={0.01}
                  borderWidth={4}
                  variant="white"
                  blur={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="bg-[#1EAEDB]/20 p-1 rounded-xl mb-6 inline-block relative z-10">
                  <div className="bg-[#1EAEDB]/30 p-3 rounded-lg text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
