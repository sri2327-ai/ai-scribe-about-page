
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import TechHero from "@/components/technology/TechHero";
import MeetIpkoTimeline from "@/components/technology/MeetIpkoTimeline";
import TechFeatures from "@/components/technology/TechFeatures";
import SecurityCompliance from "@/components/technology/SecurityCompliance";
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

        {/* Technology Features Section */}
        <TechFeatures />

        {/* Call to Action Section */}
        <section className="py-16 md:py-28 bg-black border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-2xl font-normal text-white mb-6">
                Transform Your Healthcare Workflow
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-black text-white border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Request A Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <SecurityCompliance />
      </motion.div>
    </main>
  );
};

export default Technology;
