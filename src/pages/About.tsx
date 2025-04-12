
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
import { ScrollArea } from "@/components/ui/scroll-area";

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col"
      >
        <HeroSection />
        <ScrollArea className="flex-1 h-full">
          <div className="flex flex-col space-y-0">
            <MissionVision />
            <TrustedBy />
            <CoreValues />
            <WhoWeAre />
            <StarTrekSection />
            <FounderMessage />
            <TeamSection />
          </div>
        </ScrollArea>
      </motion.div>
    </main>
  );
};

export default About;
