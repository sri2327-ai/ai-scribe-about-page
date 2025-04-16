
import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Motion values for smooth animations
  const x = useMotionValue(0);
  const percent = useTransform(x, [-150, 150], [0, 100]);
  
  useEffect(() => {
    const unsubscribe = percent.onChange((latest) => {
      // Clamp the value between 5 and 95 to prevent disappearing at the edges
      setSliderPosition(Math.min(Math.max(latest, 5), 95));
    });
    
    // Initial animation
    animate(x, 0, { duration: 0.5 });
    
    return () => unsubscribe();
  }, [percent, x]);

  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Prevent the slider from getting too close to the edges
    if (sliderPosition < 10) {
      animate(x, -140, { duration: 0.3 }); // This will set sliderPosition to ~10%
    } else if (sliderPosition > 90) {
      animate(x, 140, { duration: 0.3 }); // This will set sliderPosition to ~90%
    }
  };

  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <Badge className="bg-black text-white py-1.5 px-3 rounded-full">
              Before vs. After CRUSH
            </Badge>
          </Box>
          
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "center", mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "black" }}>
              See the CRUSH Difference
            </Typography>
            <Typography variant="body1" sx={{ 
              color: "#666", 
              maxWidth: "700px", 
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1.1rem" }
            }}>
              Drag the slider to compare clinical experience before and after CRUSH AI
            </Typography>
          </Box>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%" }}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              {/* Main container with black and white sides */}
              <div className="absolute inset-0 flex items-stretch">
                {/* Black side (Before) */}
                <div 
                  className="h-full bg-black text-white flex items-center justify-center relative overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 bg-[url('/public/lovable-uploads/5737eb5e-abd2-4c80-b961-6676d913887e.png')] bg-center bg-no-repeat bg-cover opacity-10"></div>
                  <div className="z-10 max-w-md p-8">
                    <div className="mb-4">
                      <Badge className="bg-white text-black text-xs font-medium py-1 px-2 rounded-full">WITHOUT CRUSH</Badge>
                    </div>
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-4`}>The old way of documentation</h2>
                    <p className={`text-gray-300 ${isMobile ? 'text-sm' : 'text-lg'} mb-6`}>
                      Managing patient documentation is already tedious and time-consuming. 
                      Avoid further complications by ditching outdated, screen-focused methods.
                    </p>
                    <ul className={`space-y-2 text-gray-300 ${isMobile ? 'text-xs' : 'text-base'}`}>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>Hours of typing after each visit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>Constantly looking at screens instead of patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>Increased clinician burnout and stress</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* White side (After) */}
                <div 
                  className="h-full bg-white text-black flex items-center justify-center relative overflow-hidden"
                  style={{ width: `${100 - sliderPosition}%` }}
                >
                  <div className="absolute inset-0 bg-gray-50"></div>
                  <div className="z-10 max-w-md p-8">
                    <div className="mb-4">
                      <Badge className="bg-black text-white text-xs font-medium py-1 px-2 rounded-full">WITH CRUSH</Badge>
                    </div>
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-4`}>Focus on what matters</h2>
                    <p className={`text-gray-600 ${isMobile ? 'text-sm' : 'text-lg'} mb-6`}>
                      Our goal is to streamline clinical documentation, making it easier and faster than ever.
                      Let AI handle the administrative work.
                    </p>
                    <ul className={`space-y-2 text-gray-600 ${isMobile ? 'text-xs' : 'text-base'}`}>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>Documentation completed during the visit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>Full attention on your patients, not screens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>Leave work on time with notes completed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Slider divider - prevent it from fully disappearing by limiting drag boundaries */}
              <motion.div 
                className="absolute top-0 bottom-0 w-px bg-white z-20"
                style={{ 
                  left: `${sliderPosition}%`,
                  x: x,
                }}
                drag="x"
                dragConstraints={{ left: -140, right: 140 }} // Limit how far it can go
                dragElastic={0.05} // Make it less elastic to avoid edges
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {/* Slider handle with better touch target */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center z-30 cursor-ew-resize touch-none ${isDragging ? 'scale-110' : ''} transition-transform duration-200`}
                >
                  <div 
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center"
                  >
                    <div className="flex flex-col gap-[3px]">
                      <div className="flex gap-[3px]">
                        <div className="w-[3px] h-[3px] rounded-full bg-gray-400"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-gray-400"></div>
                      </div>
                      <div className="flex gap-[3px]">
                        <div className="w-[3px] h-[3px] rounded-full bg-gray-400"></div>
                        <div className="w-[3px] h-[3px] rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Navigation indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 z-30">
                <div className={`flex items-center gap-2 ${sliderPosition < 15 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <ArrowRight className="h-4 w-4 rotate-180 text-white" />
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-white font-medium`}>Without CRUSH</span>
                </div>
                <div className={`flex items-center gap-2 ${sliderPosition > 85 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-black font-medium`}>With CRUSH</span>
                  <ArrowRight className="h-4 w-4 text-black" />
                </div>
              </div>
            </div>
            
            {/* Bottom labels */}
            <div className="flex justify-between mt-6 px-4">
              <div className="flex items-center">
                <span className={`text-gray-700 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>Screen-Focused Care</span>
              </div>
              <div className="flex items-center">
                <span className={`text-gray-700 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>Patient-Focused Care</span>
              </div>
            </div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};
