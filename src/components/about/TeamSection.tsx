
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
  {
    name: "Sridharan Sivan",
    title: "Founder & Chairman",
    company: "S10.AI Inc"
  },
  {
    name: "Shivanthika Sridharan",
    title: "Co-Founder & President",
    company: "S10.AI Inc"
  },
  {
    name: "Dr. Sri",
    title: "CEO & Chief Medical Officer",
    company: "S10.AI Inc"
  },
  {
    name: "John Reece",
    title: "Board Advisor",
    company: ""
  },
  {
    name: "DV Ravi",
    title: "Investor and Managing Director",
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
          <h2 className="text-4xl font-bold mb-6 text-white">Meet The Team</h2>
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
