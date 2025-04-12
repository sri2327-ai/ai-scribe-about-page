
import { motion } from "framer-motion";

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
              className="relative group"
              variants={itemVariants}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-blue-950/20 border border-blue-800/30 h-full flex flex-col justify-between transition-all duration-300 group-hover:bg-blue-950/30">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lg text-blue-300 mb-1">{member.title}</p>
                  {member.company && (
                    <p className="text-gray-400">{member.company}</p>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-300 hover:bg-blue-700 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-300 hover:bg-blue-700 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
