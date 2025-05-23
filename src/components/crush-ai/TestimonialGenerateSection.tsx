
"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { shadowStyles } from "@/lib/shadow-utils";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  React.useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0" 
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-black text-xl md:text-2xl leading-snug tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export const TestimonialGenerateSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: crushAIColors.background.white,
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(
          circle at 50% 50%,
          rgba(165, 204, 243, 0.3) 0%,
          rgba(81, 146, 174, 0.2) 50%,
          rgba(255, 255, 255, 0.1) 100%
        ), #FFFFFF`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 900,
            mx: "auto",
            position: "relative",
            zIndex: 5,
            borderRadius: "1.5rem",
            padding: { xs: 2, sm: 4, md: 6 },
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
            boxShadow: theme => shadowStyles.prominent,
            "&:hover": {
              boxShadow: theme => shadowStyles.floating,
              transform: "translateY(-5px)",
            },
            transition: "all 0.4s ease"
          }}
        >
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              mb: 6
            }}
          >
            <Box 
              component={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              sx={{ 
                width: 80, 
                height: 80, 
                borderRadius: "50%", 
                backgroundColor: `rgba(${parseInt(crushAIColors.tertiary.slice(1, 3), 16)},${parseInt(crushAIColors.tertiary.slice(3, 5), 16)},${parseInt(crushAIColors.tertiary.slice(5, 7), 16)},0.1)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid rgba(${parseInt(crushAIColors.tertiary.slice(1, 3), 16)},${parseInt(crushAIColors.tertiary.slice(3, 5), 16)},${parseInt(crushAIColors.tertiary.slice(5, 7), 16)},0.3)`,
                boxShadow: `0px 4px 15px rgba(${parseInt(crushAIColors.tertiary.slice(1, 3), 16)},${parseInt(crushAIColors.tertiary.slice(3, 5), 16)},${parseInt(crushAIColors.tertiary.slice(5, 7), 16)},0.2)`
              }}
            >
              <QuoteIcon size={32} className="text-[#A5CCF3]" stroke={crushAIColors.text.primary} strokeWidth={2} />
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              textAlign: "center", 
              mb: 6,
              position: "relative",
              px: { xs: 2, sm: 0 }
            }}
          >
            <Box 
              className="absolute -inset-1 rounded-lg blur-md"
              sx={{
                background: `radial-gradient(circle at 50% 50%, rgba(${parseInt(crushAIColors.tertiary.slice(1, 3), 16)},${parseInt(crushAIColors.tertiary.slice(3, 5), 16)},${parseInt(crushAIColors.tertiary.slice(5, 7), 16)},0.15), transparent 70%)`,
                zIndex: -1
              }}
            />
            
            <TextGenerateEffect
              words="CRUSH has completely transformed how I practice medicine. I've gained back at least 2 hours each day, and my notes are more thorough than ever. It's like having a medical assistant, scribe, and coding expert all in one."
              className="mb-6 max-w-4xl mx-auto"
              duration={0.7}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: crushAIColors.text.primary,
                  mb: 1,
                  letterSpacing: "-0.01em"
                }}
              >
                Dr. Sarah Johnson
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: crushAIColors.text.secondary,
                  fontWeight: 500
                }}
              >
                Family Medicine, Boston Medical Center
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(${parseInt(crushAIColors.tertiary.slice(1, 3), 16)},${parseInt(crushAIColors.tertiary.slice(3, 5), 16)},${parseInt(crushAIColors.tertiary.slice(5, 7), 16)},0.03) 0%, rgba(255,255,255,0) 50%)`,
          zIndex: 1
        }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{
              opacity: Math.random() * 0.5 + 0.3,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              opacity: [
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.5 + 0.5,
                Math.random() * 0.5 + 0.3,
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            sx={{
              position: "absolute",
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              borderRadius: "50%",
              backgroundColor: `rgba(${parseInt(crushAIColors.tertiary.slice(1, 3), 16)},${parseInt(crushAIColors.tertiary.slice(3, 5), 16)},${parseInt(crushAIColors.tertiary.slice(5, 7), 16)},0.4)`,
              border: "0.5px solid rgba(0,0,0,0.2)",
              boxShadow: "0 0 5px rgba(255,255,255,0.3)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
