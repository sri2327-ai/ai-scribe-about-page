
"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

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
              className="text-white opacity-0"
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
        <div className="text-white text-xl md:text-2xl leading-snug tracking-wide">
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
        bgcolor: "#000000",
        position: "relative",
        overflow: "hidden"
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
            zIndex: 5
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
                backgroundColor: "rgba(155,135,245,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(155,135,245,0.3)",
              }}
            >
              <QuoteIcon size={32} className="text-purple-400" />
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              textAlign: "center", 
              mb: 6,
              position: "relative"
            }}
          >
            {/* Radial gradient background for text */}
            <Box 
              className="absolute -inset-1 rounded-lg blur-md"
              sx={{
                background: "radial-gradient(circle at 50% 50%, rgba(155,135,245,0.15), transparent 70%)",
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
                  color: "#fff",
                  mb: 1
                }}
              >
                Dr. Sarah Johnson
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: "#8E9196",
                  fontWeight: 500
                }}
              >
                Family Medicine, Boston Medical Center
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>
      
      {/* Background dots/particles effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(155,135,245,0.03) 0%, rgba(0,0,0,0) 50%)",
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
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              borderRadius: "50%",
              backgroundColor: "rgba(155,135,245,0.4)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
