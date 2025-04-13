
import { PulseBeams } from "@/components/ui/pulse-beams";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { useWindowSize } from "@/hooks/use-window-size";
import { useEffect, useState } from "react";

export const MeetIpkoPulseBeams = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Custom beam patterns specifically for IPKO section
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

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="h-[80vh] min-h-[600px] relative w-full">
        {/* Added GradientTracing components for background - only render client-side */}
        {isMounted && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <GradientTracing
              width={width}
              height={200}
              path={`M0,100 C${width * 0.3},50 ${width * 0.7},150 ${width},100`}
              gradientColors={["#4ECDC4", "#1EAEDB", "#4ECDC4"]}
              animationDuration={5}
              strokeWidth={3}
              className="absolute top-[20%]"
            />
            <GradientTracing
              width={width}
              height={200}
              path={`M0,100 C${width * 0.4},180 ${width * 0.6},20 ${width},100`}
              gradientColors={["#1EAEDB", "#9E00FF", "#1EAEDB"]}
              animationDuration={7}
              strokeWidth={3}
              className="absolute top-[60%]"
            />
            <GradientTracing
              width={width}
              height={200}
              path={`M0,100 C${width * 0.2},20 ${width * 0.8},180 ${width},100`}
              gradientColors={["#9E00FF", "#4ECDC4", "#9E00FF"]}
              animationDuration={6}
              strokeWidth={3}
              className="absolute top-[40%]"
            />
          </div>
        )}

        <PulseBeams 
          beams={ipkoBeams}
          gradientColors={["#4ECDC4", "#1EAEDB"]}
          className="absolute inset-0 !h-full"
          background={
            <div className="absolute inset-0 bg-black">
              {/* Black background as requested */}
            </div>
          }
        >
          <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl">
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
              className="p-6 rounded-lg border border-white bg-black/80 backdrop-blur-sm max-w-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ipkoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-lg border border-white/20 bg-black hover:bg-black/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-blue-100/80">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8"
            >
              <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-200 border border-white">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </PulseBeams>
      </div>
    </section>
  );
};

// Features for the IPKO section
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
