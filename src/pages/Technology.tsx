import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LampSection } from "@/components/ui/lamp";
import { Shield, Clock, CheckCircle, DollarSign, Users, ExternalLink, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { StarBorder } from "@/components/ui/star-border";
import TechHero from "@/components/technology/TechHero";
import TechInnovation from "@/components/technology/TechInnovation";
import TechSolutions from "@/components/technology/TechSolutions";
import TechArchitecture from "@/components/technology/TechArchitecture";
import { MeetIpkoAnimation } from "@/components/technology/MeetIpkoAnimation";

const Technology = () => {
  const isMobile = useIsMobile();

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
        {/* Hero Section with AI Innovation & Security */}
        <TechHero />

        {/* Meet IPKO Animation Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black via-blue-950/40 to-purple-950/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-12"
            >
              <MeetIpkoAnimation 
                animateText={true}
                animateLines={true}
                animateMarkers={true}
                lineMarkerSize={6}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                IPKO combines powerful AI inference engines to transform healthcare 
                automation, delivering unmatched security and knowledge engineering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* IPKO Section - Redesigned with Huly.io style */}
        <section className="py-16 md:py-28 bg-gradient-to-br from-black via-blue-950/20 to-purple-950/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Meet IPKO – The Intelligent Physician Knowledge Orchestrator
              </h2>
              <p className="text-xl text-blue-100/90">
                IPKO, built on S10's patented AI, leverages powerful AI inference engines for unmatched automation, security, and knowledge engineering.
              </p>
            </motion.div>

            {isMobile ? (
              <div className="space-y-6">
                {ipkoCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <div className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-3 text-blue-300">{card.title}</h3>
                      <p className="text-gray-300">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {ipkoCards.map((card, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full"
                      >
                        <div className="p-6 h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                          <h3 className="text-xl font-semibold mb-3 text-blue-300">{card.title}</h3>
                          <p className="text-gray-300 line-clamp-3">{card.description}</p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative static border-blue-500/50 hover:bg-blue-500/20 text-blue-300" />
                  <CarouselNext className="relative static border-blue-500/50 hover:bg-blue-500/20 text-blue-300" />
                </div>
              </Carousel>
            )}
          </div>
        </section>

        {/* Technology Components */}
        <TechSolutions />
        <TechArchitecture />
        <TechInnovation />

        {/* Technology That Delivers Section - Huly.io style */}
        <section className="py-16 md:py-28 bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Technology That Delivers
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-purple-900/10 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300 mb-2">{feature.title}</h3>
                      <p className="text-blue-100/80">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl font-semibold text-white mb-6">
                AI That Works—So You Can Focus on Care.
              </p>
              <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-lg shadow-purple-900/20">
                Request A Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Security Section - Huly.io style */}
        <section className="py-16 md:py-28 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Uncompromising Security & Compliance
              </h2>
              <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
                Our state-of-the-art security ensures your data remains protected at all times.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            >
              {securityFeatures.map((feature, index) => (
                <div key={index} className="p-6 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 text-left">
                    <div className="text-2xl text-blue-400">🔒</div>
                    <div>
                      <h3 className="font-semibold text-blue-300 mb-2">{feature.title}</h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-lg text-blue-300 mb-6">
                <span className="text-2xl">💡</span> S10.AI ensures data security, privacy, and compliance—so you can trust every interaction.
              </p>
              
              <p className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                High-Powered AI. Rock-Solid Security. Future-Ready Healthcare.
              </p>
              
              <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-lg shadow-purple-900/20">
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

const ipkoCards = [
  {
    title: "Cross-Lingual Conversation Inference Engine (CCIE)",
    description: "16-language diarization for seamless multilingual communication."
  },
  {
    title: "Physician Knowledge Inference Engine (PKIE)",
    description: "Learns and mimics physician workflows for personalized AI scribing."
  },
  {
    title: "Medical Knowledge Inference Engine (MKIE)",
    description: "AI-driven clinical pathways for precise documentation improvement."
  },
  {
    title: "Intuitive Interface Inference Engine (IIIE)",
    description: "Breaks integration barriers for effortless deployment."
  }
];

const technologyFeatures = [
  {
    icon: <Clock className="h-6 w-6 text-white" />,
    title: "Real-Time, 24/7 Automation",
    description: "Always available, no downtime."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    title: "Unmatched Accuracy",
    description: "AI-driven precision for documentation & workflows."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-white" />,
    title: "Cost-Effective Efficiency",
    description: "Reduces overhead without sacrificing quality."
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Enhanced Patient Care",
    description: "AI automation for faster, better decision-making."
  },
  {
    icon: <ExternalLink className="h-6 w-6 text-white" />,
    title: "Autonomous Operations",
    description: "AI-powered staffing, scribing & clinical support."
  }
];

const securityFeatures = [
  {
    title: "HIPAA, GDPR, & PIPEDA Compliant",
    description: "Meets global healthcare data standards."
  },
  {
    title: "ISO 27001 Certified",
    description: "Industry-leading information security management."
  },
  {
    title: "SOC-2 Audit in Progress",
    description: "Ensuring AICPA compliance for trust & transparency."
  },
  {
    title: "No Data Storage",
    description: "Real-time transcription with automatic erasure."
  },
  {
    title: "Multi-Factor Authentication & Encryption",
    description: "Secured access at every level."
  },
  {
    title: "Risk Management & Limited Access",
    description: "Only authorized personnel can view data."
  },
  {
    title: "Hosted in the US & Canada",
    description: "Complies with federal & state regulations."
  }
];

export default Technology;
