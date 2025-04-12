
import { motion } from "framer-motion";
import { Building, Globe, Users, Settings, Star, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { StarBorder } from "@/components/ui/star-border";

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
    <section className={`${isMobile ? 'py-10 pb-16' : 'py-16 pb-24 min-h-0 lg:min-h-screen'} flex items-center bg-black`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 xs:mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white font-wix-madefor">Who We Are</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StarBorder 
                as="div" 
                className="w-full h-full flex flex-col" 
                color="#4ECDC4"
                speed={`${6 + (index % 3)}s`}
              >
                <div className="p-3 xs:p-4 sm:p-6 flex flex-col h-[280px] xs:h-[300px] sm:h-[320px]">
                  <div className="bg-black/60 p-2 rounded-lg mb-2 xs:mb-3 sm:mb-4 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white font-wix-madefor">{feature.title}</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed font-wix-madefor">{feature.description}</p>
                </div>
              </StarBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
