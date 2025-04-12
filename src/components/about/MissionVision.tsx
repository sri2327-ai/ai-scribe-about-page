
import { motion } from "framer-motion";
import { LampSection } from "@/components/ui/lamp";
import { ScrollArea } from "@/components/ui/scroll-area";

const MissionVision = () => {
  return (
    <div className="flex flex-col">
      {/* Mission Section with Lamp Effect */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <LampSection title="Our Mission" color="teal">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
          >
            To make life easy for clinicians by eliminating administrative burdens with intelligent automation.
          </motion.p>
        </LampSection>
      </section>
      
      {/* Vision Section with Lamp Effect - different color */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center -mt-20">
        <LampSection title="Our Vision" color="teal">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
          >
            We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
          </motion.p>
        </LampSection>
      </section>
    </div>
  );
};

export default MissionVision;
