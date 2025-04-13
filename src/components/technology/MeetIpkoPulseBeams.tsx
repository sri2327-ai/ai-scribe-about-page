import { PulseBeams } from "@/components/ui/pulse-beams";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { useWindowSize } from "@/hooks/use-window-size";
import { useEffect, useState } from "react";
import { FeatureCard } from "@/components/ui/feature-card";
import ParallaxSection from "@/components/ui/parallax-section";
import { Cpu, Database, Network, Zap } from "lucide-react";

export const MeetIpkoPulseBeams = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ipkoBeams = [
    {
      path: "M500,200 C600,100 800,300 900,200 C950,150 950,50 900,0",
      gradientId: "ipko-beam-1",
      animate: {
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
      },
    },
    {
      path: "M500,200 C400,300 200,300 100,200 C50,150 50,50 100,0",
      gradientId: "ipko-beam-2",
      animate: {
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
      },
    },
    {
      path: "M500,800 C600,700 800,700 900,800 C950,850 950,950 900,1000",
      gradientId: "ipko-beam-3",
      animate: {
        x1: "0%",
        y1: "100%",
        x2: "100%",
        y2: "0%",
      },
    },
    {
      path: "M500,800 C400,700 200,700 100,800 C50,850 50,950 100,1000",
      gradientId: "ipko-beam-4",
      animate: {
        x1: "100%",
        y1: "100%",
        x2: "0%",
        y2: "0%",
      },
    },
    {
      path: "M200,500 C300,400 700,400 800,500 C850,550 850,650 800,700",
      gradientId: "ipko-beam-5",
      animate: {
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
      },
    },
  ];

  const icons = [
    <Network key="network" className="h-6 w-6" />,
    <Cpu key="cpu" className="h-6 w-6" />,
    <Database key="database" className="h-6 w-6" />,
    <Zap key="zap" className="h-6 w-6" />
  ];

  const colors = ['blue', 'purple', 'cyan', 'indigo'];

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="h-[90vh] min-h-[600px] relative w-full">
        {isMounted && (
          <div className="absolute inset-0 z-0 w-full overflow-hidden">
            <GradientTracing
              width={width || window.innerWidth}
              height={200}
              path={`M0,100 C${(width || window.innerWidth) * 0.3},50 ${(width || window.innerWidth) * 0.7},150 ${width || window.innerWidth},100`}
              gradientColors={["#4ECDC4", "#1EAEDB", "#4ECDC4"]}
              animationDuration={15}
              strokeWidth={3}
              className="absolute top-[20%] left-0 w-full"
            />
            <GradientTracing
              width={width || window.innerWidth}
              height={200}
              path={`M0,100 C${(width || window.innerWidth) * 0.4},180 ${(width || window.innerWidth) * 0.6},20 ${width || window.innerWidth},100`}
              gradientColors={["#1EAEDB", "#9E00FF", "#1EAEDB"]}
              animationDuration={18}
              strokeWidth={3}
              className="absolute top-[50%] left-0 w-full"
            />
            <GradientTracing
              width={width || window.innerWidth}
              height={200}
              path={`M0,100 C${(width || window.innerWidth) * 0.2},20 ${(width || window.innerWidth) * 0.8},180 ${width || window.innerWidth},100`}
              gradientColors={["#9E00FF", "#4ECDC4", "#9E00FF"]}
              animationDuration={20}
              strokeWidth={3}
              className="absolute top-[80%] left-0 w-full"
            />
          </div>
        )}

        <PulseBeams 
          beams={ipkoBeams}
          gradientColors={["#4ECDC4", "#1EAEDB"]}
          className="absolute inset-0 !h-full"
          background={
            <div className="absolute inset-0 bg-black">
            </div>
          }
        >
          <ParallaxSection speed={0.2} direction="up" className="h-full">
            <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Meet IPKO – The Intelligent Physician Knowledge Orchestrator
                </h2>
                <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
                  IPKO, built on S10's patented AI, leverages powerful AI inference engines for unmatched automation, security, and knowledge engineering.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ipkoFeatures.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      title={feature.title}
                      description={feature.description}
                      index={index}
                      icon={icons[index]}
                      color={colors[index % colors.length]}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-12"
              >
                <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none shadow-lg shadow-indigo-900/20">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </ParallaxSection>
        </PulseBeams>
      </div>
    </section>
  );
};

const ipkoFeatures = [
  {
    title: "Cross-Lingual Conversation Engine",
    description: "16-language diarization for seamless multilingual communication.",
  },
  {
    title: "Physician Knowledge Engine",
    description: "Learns and mimics physician workflows for personalized AI scribing.",
  },
  {
    title: "Medical Knowledge Engine",
    description: "AI-driven clinical pathways for precise documentation improvement.",
  },
  {
    title: "Intuitive Interface Engine",
    description: "Breaks integration barriers for effortless deployment across platforms.",
  },
];

export default MeetIpkoPulseBeams;
