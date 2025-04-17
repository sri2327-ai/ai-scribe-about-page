
import React, { useState } from "react";
import { motion, Variant } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import styles from "@/styles/AnimatedCards.module.css";

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
  // Fixed type issue by removing hover variant
};

const contentAnimationVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  // Fixed type issue by removing hover variant
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
        styles.featureCard,
        className
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-30px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ delay: animationDelay }}
    >
      {/* Background decoration elements */}
      <div className={cn(styles.decorationCircle, styles.circleLarge)} 
        style={{ backgroundColor: tertiaryColor }}
      />
      <div className={cn(styles.decorationCircle, styles.circleSmall)} 
        style={{ backgroundColor: secondaryColor }}
      />
      <div className={cn(styles.decorationCircle, styles.circleTiny)} 
        style={{ backgroundColor: primaryColor }}
      />
      <div className={styles.shimmer} />

      <div className="flex flex-col gap-3 z-10">
        <motion.div 
          className={cn("w-12 h-12 rounded-lg flex items-center justify-center", styles.iconContainer)}
          style={{ backgroundColor: iconBackground }}
          variants={iconAnimationVariants}
          animate={isHovered ? { 
            scale: [1, 1.1, 1], 
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop", 
              ease: "easeInOut" 
            }
          } : "animate"}
        >
          <Icon size={iconSize} className="stroke-[1.5]" style={{ color: primaryColor }} />
        </motion.div>
        
        <motion.div
          className={styles.cardContent}
          variants={contentAnimationVariants}
          animate={isHovered ? { 
            y: -5, 
            transition: { duration: 0.2 } 
          } : "animate"}
          transition={{ delay: animationDelay + 0.1 }}
        >
          <h3 className="text-xl font-semibold text-black mb-2">
            {title}
          </h3>
          <p className="text-black">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
