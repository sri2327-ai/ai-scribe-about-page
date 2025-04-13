
"use client";

import { cn } from "@/lib/utils";
import { LucideIcon, Shield, Lock, FileCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

interface SecurityCardProps {
  className?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

function SecurityCard({
  className,
  icon: Icon,
  title,
  description,
  delay = 0
}: SecurityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className={cn(
        "relative flex h-36 w-full md:w-[24rem] -skew-y-[3deg] select-none flex-col justify-between rounded-xl border border-white/10 bg-black/70 backdrop-blur-sm px-5 py-4 transition-all duration-700 hover:border-blue-500/30 hover:bg-black/80",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="relative inline-block rounded-full bg-blue-950 p-2.5">
          <Icon className="h-5 w-5 text-blue-400" />
        </span>
        <p className="text-lg font-medium text-white">{title}</p>
      </div>
      <p className="text-gray-400 text-sm ml-1">{description}</p>
    </motion.div>
  );
}

interface SecurityStackedCardsProps {
  cards: SecurityCardProps[];
}

export default function SecurityStackedCards({ cards }: SecurityStackedCardsProps) {
  return (
    <div className="relative h-[22rem] md:h-[20rem] w-full max-w-3xl mx-auto">
      {cards.map((cardProps, index) => (
        <div 
          key={index} 
          className={cn(
            "absolute left-1/2 -translate-x-1/2",
            index === 0 && "top-0 z-30 hover:-translate-y-2",
            index === 1 && "top-[4rem] md:top-[3.5rem] z-20 hover:-translate-y-1",
            index === 2 && "top-[8rem] md:top-[7rem] z-10 hover:-translate-y-1",
            index === 3 && "top-[12rem] md:top-[10.5rem] z-0 hover:-translate-y-1"
          )}
          style={{ 
            transition: "transform 0.3s ease",
            width: `calc(100% - ${index * 20}px)`,
            opacity: 1 - index * 0.15
          }}
        >
          <SecurityCard {...cardProps} delay={index * 0.1} />
        </div>
      ))}
    </div>
  );
}
