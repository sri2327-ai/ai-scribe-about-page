
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LampSection } from "@/components/ui/lamp";
import { Shield, Clock, CheckCircle, DollarSign, Users, ExternalLink } from "lucide-react";
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
import MatrixRain from "@/components/ui/matrix-rain";

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
        {/* Matrix Hero Section with AI Innovation & Security */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Matrix Rain Background */}
          <div className="absolute inset-0 bg-black">
            <MatrixRain 
              fontSize={16}
              color="#143151" 
              characters="01"
              fadeOpacity={0.05}
              speed={0.8}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-black/80" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <StarBorder as="div" className="inline-block" color="#4ECDC4" speed="5s">
                  <div className="px-6 py-2">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider">
                      NEXT-GEN TECHNOLOGY
                    </span>
                  </div>
                </StarBorder>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="block relative metallic-text">
                  Advanced AI Innovation &<br /> Unbreakable Security
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-8"
              >
                Our innovative AI solutions combine cutting-edge technology with enterprise-grade security.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Explore Our Technology
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IPKO Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Meet IPKO – The Intelligent Physician Knowledge Orchestrator
              </h2>
              <p className="text-xl text-blue-100">
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
                    <StarBorder 
                      as="div" 
                      className="w-full" 
                      color="#4ECDC4"
                      speed={`${5 + (index % 3)}s`}
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-white">{card.title}</h3>
                        <p className="text-gray-300">{card.description}</p>
                      </div>
                    </StarBorder>
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
                        <StarBorder 
                          as="div" 
                          className="h-full" 
                          color="#4ECDC4"
                          speed={`${5 + (index % 3)}s`}
                        >
                          <div className="p-6 h-48">
                            <h3 className="text-xl font-semibold mb-3 text-white">{card.title}</h3>
                            <p className="text-gray-300 line-clamp-3">{card.description}</p>
                          </div>
                        </StarBorder>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative static" />
                  <CarouselNext className="relative static" />
                </div>
              </Carousel>
            )}
          </div>
        </section>

        {/* Technology That Delivers Section */}
        <section className="py-16 md:py-24 bg-blue-950">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
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
                  className="border border-blue-400/30 rounded-lg p-6 bg-blue-900/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
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
              <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request A Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <LampSection title="Uncompromising Security & Compliance" color="teal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <div className="text-2xl text-white">🔒</div>
                <div>
                  <p className="text-gray-100">
                    <span className="font-semibold">{feature.title}</span> – {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-lg text-teal-200 mb-6">
              <span className="text-2xl">💡</span> S10.AI ensures data security, privacy, and compliance—so you can trust every interaction.
            </p>
            
            <p className="text-2xl font-semibold text-white mb-8">
              High-Powered AI. Rock-Solid Security. Future-Ready Healthcare.
            </p>
            
            <Button variant="default" size="lg" className="bg-teal-600 hover:bg-teal-700">
              Request A Demo
            </Button>
          </motion.div>
        </LampSection>
      </motion.div>
    </main>
  );
};

// Data for the IPKO cards
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

// Data for technology features
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

// Data for security features
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
