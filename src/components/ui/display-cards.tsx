
"use client";

import { cn } from "@/lib/utils";
import { shadowStyles } from "@/lib/shadow-utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DisplayCardProps {
  className?: string;
  cardClassName?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  cardClassName,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  date,
  iconClassName = "bg-gray-100 rounded-lg",
  titleClassName = "text-black",
}: DisplayCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative flex h-full min-h-[180px] w-full -skew-y-[3deg] select-none flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 transition-all duration-500",
        "hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        cardClassName || "",
        className,
        shadowStyles.depthEffect
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div>
        <span className={cn("relative inline-block rounded-full bg-gray-100 p-2 shadow-md", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <AnimatePresence>
        {isExpanded ? (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <motion.div 
              className={cn(
                "w-full max-w-md bg-white border border-gray-300 rounded-xl p-6 text-left -skew-y-[3deg]",
                shadowStyles.floating
              )}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={cn("relative inline-block rounded-full bg-gray-100 p-2 shadow-md", iconClassName)}>
                  {icon}
                </span>
                <p className={cn("text-2xl font-medium", titleClassName)}>{title}</p>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{description}</p>
              {date && <p className="text-gray-500 text-sm">{date}</p>}
              <button 
                className={cn(
                  "mt-4 bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded-md transition-colors",
                  shadowStyles.button
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        )}
      </AnimatePresence>
      {date && !isExpanded && <p className="text-gray-500 text-xs">{date}</p>}
    </motion.div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayCards.map((cardProps, index) => (
        <div key={index} className={cardProps.className || ""}>
          <DisplayCard {...cardProps} />
        </div>
      ))}
    </div>
  );
}
