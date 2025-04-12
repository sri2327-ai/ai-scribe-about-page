import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Separator } from "@/components/ui/separator";

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

export default function TeamSection() {
  return (
    <section className="pt-16 pb-24 bg-black overflow-hidden">
      {/* Section Divider at the top */}
      <div className="w-full flex justify-center mb-12">
        <Separator className="w-2/3 max-w-4xl bg-gray-800" />
      </div>
      
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
}
