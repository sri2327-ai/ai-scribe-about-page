
import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/about/HeroSection";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhoWeAre from "@/components/about/WhoWeAre";
import StarTrekSection from "@/components/about/StarTrekSection";
import FounderMessage from "@/components/about/FounderMessage";
import TeamSection from "@/components/about/TeamSection";
import TrustedBy from "@/components/about/TrustedBy";

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full"
      >
        <HeroSection />
        <div className="w-full">
          <MissionVision />
          <CoreValues />
          <div className="relative">
            <WhoWeAre />
            <StarTrekSection />
          </div>
          <FounderMessage />
          <TeamSection />
          <TrustedBy />
        </div>
      </motion.div>
    </main>
  );
};

export default About;
