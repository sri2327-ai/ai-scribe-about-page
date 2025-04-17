
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

interface AnimatedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  animationDelay?: number;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  iconBackground?: string;
  iconSize?: number;
}

const iconAnimationVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hover: { 
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
  }
};

const contentAnimationVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { y: -5, transition: { duration: 0.2 } }
};

export const AnimatedFeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  animationDelay = 0,
  primaryColor = "#046f90",
  secondaryColor = "#5192AE",
  tertiaryColor = "#A5CCF3",
  iconBackground = "#F5F9FF",
  iconSize = 24
}: AnimatedFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-xl p-6 border border-black/5 transition-all duration-300 shadow-sm hover:shadow-md bg-white",
        className
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-30px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ delay: animationDelay }}
    >
      <div className="flex flex-col gap-3 z-10">
        <motion.div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBackground }}
          variants={iconAnimationVariants}
          animate={isHovered ? "hover" : "animate"}
        >
          <Icon size={iconSize} className="stroke-[1.5]" style={{ color: primaryColor }} />
        </motion.div>
        
        <motion.div
          variants={contentAnimationVariants}
          animate={isHovered ? "hover" : "animate"}
          transition={{ delay: animationDelay + 0.1 }}
        >
          <h3 className="text-xl font-semibold text-black mb-2">
            {title}
          </h3>
          <p className="text-black">{description}</p>
        </motion.div>
      </div>

      {/* Abstract background decorations - using AnimatePresence for clean unmounting */}
      <motion.div 
        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10"
        style={{ backgroundColor: tertiaryColor }}
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute top-4 right-4 w-2 h-2 rounded-full"
        style={{ backgroundColor: secondaryColor }}
        initial={{ scale: 0 }}
        animate={{ 
          scale: isHovered ? [1, 1.5, 1] : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ 
          duration: 1.5, 
          repeat: isHovered ? Infinity : 0,
          repeatType: "loop"
        }}
      />
    </motion.div>
  );
};
