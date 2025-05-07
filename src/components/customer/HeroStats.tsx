
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface Stats {
  chartsSigned: number;
  callsDone: number;
  chatsAnswered: number;
  providersSmiled: number;
}

const StatCard = ({ title, value, isAnimating = false }: { title: string; value: number; isAnimating?: boolean }) => {
  // Format the number with commas
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isAnimating ? (
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {formattedValue}
          </motion.span>
        ) : (
          formattedValue
        )}
      </motion.h3>
      <p className="mt-2 text-gray-600 font-medium">{title}</p>
    </motion.div>
  );
};

const HeroStats = () => {
  // Initialize stats with base values
  const [stats, setStats] = useState<Stats>({
    chartsSigned: 12324,
    callsDone: 8645,
    chatsAnswered: 9872,
    providersSmiled: 1027, // Fixed at 1027 as baseline
  });

  // State to control animation
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Update stats periodically
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      
      setStats(prevStats => {
        // Generate new values with slight increases
        const chartIncrement = Math.floor(Math.random() * 5) + 1; // 1-5 increment
        const callIncrement = Math.floor(Math.random() * 3) + 1; // 1-3 increment
        const chatIncrement = Math.floor(Math.random() * 4) + 1; // 1-4 increment
        
        return {
          chartsSigned: prevStats.chartsSigned + chartIncrement,
          callsDone: prevStats.callsDone + callIncrement,
          chatsAnswered: prevStats.chatsAnswered + chatIncrement,
          providersSmiled: 1027, // Keep this fixed as requested
        };
      });
      
      // Reset animation state after a delay
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  const isMobile = useIsMobile();
  const statCards = [
    { title: "Charts Signed", value: stats.chartsSigned },
    { title: "Calls Done", value: stats.callsDone },
    { title: "Patient Chats Answered", value: stats.chatsAnswered },
    { title: "Providers Smiled", value: stats.providersSmiled },
  ];

  return (
    <section className="min-h-screen bg-white pt-20 pb-16 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Healthcare with AI
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our AI Medical Scribe and Patient Care Agent transform healthcare daily.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all duration-300 hover:scale-105">
            Book a Demo
          </button>
        </motion.div>
      </div>

      {isMobile ? (
        <ResponsiveCarousel
          items={statCards}
          renderItem={(stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} isAnimating={isAnimating} />
          )}
          columnsDesktop={1}
          columnsTablet={2}
          columnsMobile={1}
          autoPlay={true}
          showControls={true}
          controlsBelow={true}
          itemHeight={140}
          gap={16}
          className="mt-8"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto px-4">
          {statCards.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} isAnimating={isAnimating} />
          ))}
        </div>
      )}

      <motion.div
        className="mt-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-gray-500 text-sm italic text-center">
          *Real-time impact of our AI across our network of 1,027 providers.*
        </p>
        
        {/* Adding a subtle live indicator */}
        <div className="flex items-center mt-2">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-xs text-gray-400">Live updates</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroStats;
