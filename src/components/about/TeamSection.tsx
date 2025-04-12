
import { motion } from "framer-motion";
import TeamMember from "./TeamMember";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

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
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.7 }}
            >
              <TeamMember 
                name={member.name} 
                title={member.title} 
                company={member.company} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
