
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
  {
    name: "SRIDHARAN SIVAN",
    title: "FOUNDER & CHAIRMAN",
    company: "S10.AI INC"
  },
  {
    name: "SHIVANTHIKA SRIDHARAN",
    title: "CO-FOUNDER & PRESIDENT",
    company: "S10.AI INC"
  },
  {
    name: "DR. SRI",
    title: "CEO & CHIEF MEDICAL OFFICER",
    company: "S10.AI INC"
  },
  {
    name: "JOHN REECE",
    title: "BOARD ADVISOR",
    company: ""
  },
  {
    name: "DV RAVI",
    title: "INVESTOR AND MANAGING DIRECTOR",
    company: "Shriram Capital Ltd"
  }
];

const TeamSection = () => {
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
          <h2 className="text-4xl font-bold mb-6 text-white">MEET THE TEAM</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <AnimatedTestimonials 
          testimonials={teamMembers} 
          autoplay={true}
          className="py-0"
        />
      </div>
    </section>
  );
};

export default TeamSection;
