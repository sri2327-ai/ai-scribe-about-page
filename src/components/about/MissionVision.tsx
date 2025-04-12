
import { motion } from "framer-motion";
import { LampSection } from "@/components/ui/lamp";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Mission Section with Lamp Effect */}
      <LampSection title="Our Mission" color="teal">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          To make life easy for clinicians by eliminating administrative burdens with intelligent automation.
        </motion.p>
      </LampSection>
      
      {/* Vision Section with Lamp Effect - different color */}
      <LampSection title="Our Vision" color="teal">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
        </motion.p>
      </LampSection>
    </section>
  );
};

export default MissionVision;
