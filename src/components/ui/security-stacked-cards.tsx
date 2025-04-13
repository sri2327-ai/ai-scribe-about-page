
"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SecurityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

function SecurityCard({
  icon: Icon,
  title,
  description,
  delay = 0
}: SecurityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay }}
        className="relative flex h-36 w-full md:w-[24rem] -skew-y-[3deg] select-none flex-col justify-between rounded-xl border border-white/20 bg-black backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:border-white/40 cursor-pointer shadow-lg"
        onClick={() => setIsExpanded(true)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3">
          <span className="relative inline-block rounded-full bg-black p-2.5 border border-white">
            <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
          </span>
          <p className="text-lg font-normal text-white">{title}</p>
        </div>
        <p className="text-gray-400 text-sm ml-1 line-clamp-2">{description}</p>
      </motion.div>

      {isExpanded && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsExpanded(false)}
        >
          <motion.div 
            className="w-full max-w-md bg-black border border-white/20 rounded-xl p-6 text-left -skew-y-[3deg] m-4"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative inline-block rounded-full bg-black p-3 border border-white">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </span>
              <p className="text-xl md:text-2xl font-normal text-white">{title}</p>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">{description}</p>
            <button 
              className="mt-4 bg-black hover:bg-gray-900 text-white py-2 px-6 rounded-md transition-colors border border-white/20 hover:border-white/40"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

interface SecurityStackedCardsProps {
  cards: SecurityCardProps[];
}

export default function SecurityStackedCards({ cards }: SecurityStackedCardsProps) {
  return (
    <div className="relative h-[32rem] md:h-[28rem] w-full max-w-3xl mx-auto">
      {cards.map((cardProps, index) => (
        <div 
          key={index} 
          className={cn(
            "absolute left-1/2 -translate-x-1/2 w-full max-w-md transition-all duration-300",
            index === 0 && "top-0 z-40 hover:-translate-y-2",
            index === 1 && "top-[6rem] z-30 hover:-translate-y-1",
            index === 2 && "top-[12rem] z-20 hover:-translate-y-1",
            index === 3 && "top-[18rem] z-10 hover:-translate-y-1"
          )}
        >
          <SecurityCard {...cardProps} delay={index * 0.1} />
        </div>
      ))}
    </div>
  );
}
