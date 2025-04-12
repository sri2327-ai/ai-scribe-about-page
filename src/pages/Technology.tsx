
import { useEffect } from "react";
import { motion } from "framer-motion";
import TechHero from "@/components/technology/TechHero";
import TechSolutions from "@/components/technology/TechSolutions";
import TechInnovation from "@/components/technology/TechInnovation";
import TechArchitecture from "@/components/technology/TechArchitecture";

const Technology = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Add a listener to handle viewport height on mobile devices
  useEffect(() => {
    const setVh = () => {
      // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set the initial value
    setVh();
    
    // Update on window resize
    window.addEventListener('resize', setVh);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full"
      >
        <TechHero />
        <div className="w-full">
          <TechSolutions />
          <TechInnovation />
          <TechArchitecture />
        </div>
      </motion.div>
    </main>
  );
};

export default Technology;
