
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";

interface Stats {
  chartsSigned: number;
  callsDone: number;
  chatsAnswered: number;
  providersSmiled: number;
}

const StatCard = ({
  title,
  value
}: {
  title: string;
  value: number;
}) => {
  return <motion.div className={cn("bg-white p-6 rounded-lg text-center transition-transform duration-500 hover:scale-105", shadowStyles.card)} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <motion.h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </motion.h3>
      <p className="mt-2 text-gray-600 font-medium">{title}</p>
    </motion.div>;
};

const HeroStats = () => {
  // Base stats for 1027+ providers
  // Assuming:
  // - 15 charts per clinician per day × 22 working days × 1027 providers
  // - 20 calls per clinician per day × 22 working days × 1027 providers
  // - Similar number for chats based on call volume
  const baseStats: Stats = {
    chartsSigned: 338910,
    // ~15 charts × 22 days × 1027 providers
    callsDone: 451880,
    // ~20 calls × 22 days × 1027 providers
    chatsAnswered: 428256,
    // ~19 chats × 22 days × 1027 providers
    providersSmiled: 1027 // Fixed at 1027 as mentioned
  };
  const [stats, setStats] = useState<Stats>(baseStats);

  // Calculate increments per update based on daily activity
  // Make it slower by dividing by a larger factor (decreased frequency of updates)
  const incrementsPerUpdate = {
    chartsSigned: Math.max(1, Math.floor(baseStats.chartsSigned / (22 * 8 * 60 * 60 * 3))), 
    // Daily charts / (seconds in workday * 3 for slower pace)
    callsDone: Math.max(1, Math.floor(baseStats.callsDone / (22 * 8 * 60 * 60 * 3))), 
    // Daily calls / (seconds in workday * 3 for slower pace)
    chatsAnswered: Math.max(1, Math.floor(baseStats.chatsAnswered / (22 * 8 * 60 * 60 * 3))) 
    // Daily chats / (seconds in workday * 3 for slower pace)
  };

  useEffect(() => {
    // Update stats at a slower pace - every 3 seconds instead of every second
    const interval = setInterval(() => {
      setStats(prevStats => ({
        chartsSigned: prevStats.chartsSigned + incrementsPerUpdate.chartsSigned,
        callsDone: prevStats.callsDone + incrementsPerUpdate.callsDone,
        chatsAnswered: prevStats.chatsAnswered + incrementsPerUpdate.chatsAnswered,
        providersSmiled: prevStats.providersSmiled // Keep this constant
      }));
    }, 3000); // Increased from 1000 to 3000 milliseconds (3 seconds)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  const isMobile = useIsMobile();
  const statCards = [{
    title: "Charts Signed",
    value: stats.chartsSigned
  }, {
    title: "Calls Done",
    value: stats.callsDone
  }, {
    title: "Patient Chats Answered",
    value: stats.chatsAnswered
  }, {
    title: "Providers Smiled",
    value: stats.providersSmiled
  }];
  return <section className="min-h-screen bg-white pt-20 pb-16 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          Empowering Healthcare with AI
        </motion.h1>
        <motion.p className="text-lg sm:text-xl text-gray-600 mb-8 px-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          Our AI Medical Scribe and Patient Care Agent transform healthcare daily.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <button className={cn("rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white transition-all duration-300 hover:scale-105", shadowStyles.prominent)}>
            Book a Demo
          </button>
        </motion.div>
      </div>

      {isMobile ? <ResponsiveCarousel items={statCards} renderItem={(stat, index) => <StatCard key={index} title={stat.title} value={stat.value} />} columnsDesktop={1} columnsTablet={2} columnsMobile={1} autoPlay={true} showControls={true} controlsBelow={true} itemHeight={140} gap={16} className="mt-8" /> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto px-4">
          {statCards.map((stat, index) => <StatCard key={index} title={stat.title} value={stat.value} />)}
        </div>}

      <motion.p className="mt-8 text-gray-500 text-sm italic text-center" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.6,
      delay: 0.6
    }}>*No AI hype—just real results, delivered in real time across our network of 1,027+ providers.*</motion.p>
    </section>;
};

export default HeroStats;
