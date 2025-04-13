
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import TechHero from "@/components/technology/TechHero";
import TechInnovation from "@/components/technology/TechInnovation";
import MeetIpkoTimeline from "@/components/technology/MeetIpkoTimeline";
import { ArrowRight } from "lucide-react";

const Technology = () => {
  const isMobile = useIsMobile();

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full"
      >
        {/* Hero Section with AI Innovation & Security */}
        <TechHero />

        {/* Meet IPKO Section with Timeline */}
        <MeetIpkoTimeline />

        {/* Tech Innovation Section */}
        <TechInnovation />

        {/* Call to Action Section */}
        <section className="py-16 md:py-28 bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-2xl font-semibold text-white mb-6">
                AI That Works—So You Can Focus on Care.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-lg shadow-purple-900/20"
              >
                Request A Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </main>
  );
};

export default Technology;

