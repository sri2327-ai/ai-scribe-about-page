import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Monitor, Users, Mic, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

const sliderBlueColor = "#5192AE";

export const WorkflowAutomationSection = () => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
  
  const x = useMotionValue(0);
  const percent = useTransform(x, [-150, 150], [0, 100]);
  
  useEffect(() => {
    const unsubscribe = percent.onChange((latest) => {
      setSliderPosition(Math.min(Math.max(latest, 5), 95));
    });
    
    return () => unsubscribe();
  }, [percent]);
  
  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (sliderPosition < 15) {
      animate(x, -120, { duration: 0.3 });
    } else if (sliderPosition > 85) {
      animate(x, 120, { duration: 0.3 });
    }
  };
  
  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !sliderContainerRef.current) return;
    
    const container = sliderContainerRef.current;
    const rect = container.getBoundingClientRect();
    let clientX: number;
    
    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    } else if ("clientX" in e) {
      clientX = e.clientX;
    } else {
      return;
    }
    
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, position)));
  };

  const handleDirectClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging || !sliderContainerRef.current) return;
    
    const container = sliderContainerRef.current;
    const rect = container.getBoundingClientRect();
    let clientX: number;
    
    if ("touches" in e && e.touches[0]) {
      clientX = e.touches[0].clientX;
    } else if ("clientX" in e) {
      clientX = e.clientX;
    } else {
      return;
    }
    
    const position = ((clientX - rect.left) / rect.width) * 100;
    const newPosition = Math.max(5, Math.min(95, position));
    setSliderPosition(newPosition);
    animate(x, (newPosition - 50) * 3, { duration: 0.3 });
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ 
              mb: 4
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.75rem" },
                fontWeight: 700,
                mb: 2,
                color: crushAIColors.text.primary,
                maxWidth: "800px"
              }}
            >
              Talk to Patients, Not Screens – CRUSH Handles the Rest
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: crushAIColors.text.secondary,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                mb: 2,
                maxWidth: "800px",
                fontWeight: 400
              }}
            >
              Engage fully with your patients while CRUSH automatically documents everything. No more typing during visits or staying late to finish notes. Let AI do the admin work so you can focus on what matters most - patient care.
            </Typography>
          </Box>

          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <div
                ref={sliderContainerRef}
                className={`relative ${isMobile ? 'aspect-[4/5]' : 'aspect-video'} w-full h-full overflow-hidden rounded-xl select-none shadow-xl`}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchMove={handleDrag}
                onTouchEnd={handleDragEnd}
                onClick={handleDirectClick}
                onTouchStart={handleDirectClick}
              >
                <div className="absolute inset-0 flex items-stretch">
                  <div 
                    className="h-full flex items-center justify-center relative overflow-hidden"
                    style={{ 
                      width: `${sliderPosition}%`,
                      backgroundColor: "#A5CCF3",
                      color: 'white'
                    }}
                  >
                    <div className={`z-10 p-4 ${isMobile ? 'max-w-[90%]' : 'max-w-md p-8'}`}>
                      <h2 className={`${isMobile ? 'text-xl' : 'text-3xl md:text-4xl'} font-bold mb-2 md:mb-4`}>The old way of documentation</h2>
                      <p className={`text-white ${isMobile ? 'text-sm' : 'text-base md:text-lg'} mb-3 md:mb-6`}>
                        Managing patient documentation is tedious and time-consuming. 
                        Avoid further complications by ditching outdated methods.
                      </p>
                      <ul className={`space-y-2 md:space-y-3 text-white ${isMobile ? 'text-sm' : ''}`}>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-300 mt-1">•</span>
                          <span>Hours of typing after each visit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-300 mt-1">•</span>
                          <span>Constantly looking at screens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-300 mt-1">•</span>
                          <span>Increased clinician burnout</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div 
                    className="h-full bg-white text-black flex items-center justify-center relative overflow-hidden"
                    style={{ width: `${100 - sliderPosition}%` }}
                  >
                    <div className={`z-10 p-4 ${isMobile ? 'max-w-[90%]' : 'max-w-md p-8'}`}>
                      <h2 
                        className={`${isMobile ? 'text-xl' : 'text-3xl md:text-4xl'} font-bold mb-2 md:mb-4`}
                        style={{ color: crushAIColors.text.primary }}
                      >
                        Focus on what matters
                      </h2>
                      <p 
                        className={`${isMobile ? 'text-sm' : 'text-base md:text-lg'} mb-3 md:mb-6`}
                        style={{ color: crushAIColors.text.secondary }}
                      >
                        Our goal is to streamline clinical documentation, making it easier and faster than ever.
                      </p>
                      <ul className={`space-y-2 md:space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                        <li className="flex items-start gap-2">
                          <span style={{ color: crushAIColors.text.light }} className="mt-1">•</span>
                          <span style={{ color: crushAIColors.text.secondary }}>Documentation during the visit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: crushAIColors.text.light }} className="mt-1">•</span>
                          <span style={{ color: crushAIColors.text.secondary }}>Full attention on your patients</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: crushAIColors.text.light }} className="mt-1">•</span>
                          <span style={{ color: crushAIColors.text.secondary }}>Leave work on time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute top-0 bottom-0 w-1 bg-white/50 z-20 cursor-ew-resize"
                  style={{ 
                    left: `${sliderPosition}%`,
                    x: x
                  }}
                  drag="x"
                  dragConstraints={{ left: -120, right: 120 }}
                  dragElastic={0.05}
                  dragMomentum={false}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 ${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-white shadow-lg flex items-center justify-center z-30 cursor-ew-resize ${isDragging ? 'scale-110' : ''} transition-transform duration-200`}
                    style={{ 
                      borderColor: crushAIColors.primary,
                      backgroundColor: 'white',
                      border: '2px solid #A5CCF3'
                    }}
                  >
                    <div className="grid grid-cols-3 gap-[2px]">
                      {Array.from({ length: 9 }).map((_, index) => (
                        <div 
                          key={index} 
                          className="w-[2px] h-[2px] rounded-full"
                          style={{ backgroundColor: `#A5CCF3` }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute w-20 h-20 rounded-full touch-none cursor-grab"></div>
                  </div>
                </motion.div>
                
                {!isMobile && (
                  <>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 z-30">
                      <div className={`flex items-center gap-2 ${sliderPosition < 20 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                        <Monitor className="h-4 w-4 text-white" />
                        <span className="text-sm text-white font-medium">Screen-Focused</span>
                      </div>
                      <div className={`flex items-center gap-2 ${sliderPosition > 80 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                        <span 
                          className="text-sm font-medium"
                          style={{ color: crushAIColors.text.primary }}
                        >
                          Patient-Focused
                        </span>
                        <Users 
                          className="h-4 w-4"
                          style={{ color: crushAIColors.primary }}
                        />
                      </div>
                    </div>
                    
                    <div className="absolute top-6 left-0 right-0 flex justify-between px-8 z-30">
                      <div className={`flex items-center gap-2 p-2 rounded-full ${sliderPosition < 20 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                        style={{ backgroundColor: `#A5CCF3CC` }}
                      >
                        <Clock className="h-3 w-3 text-white" />
                        <span className="text-xs text-white font-medium">Hours of documentation</span>
                      </div>
                      <div 
                        className={`flex items-center gap-2 p-2 rounded-full ${sliderPosition > 80 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                        style={{ backgroundColor: `${crushAIColors.primary}20` }}
                      >
                        <Clock 
                          className="h-3 w-3"
                          style={{ color: crushAIColors.primary }}
                        />
                        <span 
                          className="text-xs font-medium"
                          style={{ color: crushAIColors.text.primary }}
                        >
                          Notes in &lt;60 seconds
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="flex justify-between mt-6 px-4">
                <div className="flex items-center">
                  <Monitor className="text-black mr-2" size={isMobile ? 16 : 20} />
                  <span className={`text-black font-medium ${isMobile ? 'text-sm' : ''}`}>Screen-Focused Care</span>
                </div>
                <div className="flex items-center">
                  <span 
                    className={`font-medium ${isMobile ? 'text-sm' : ''}`}
                    style={{ color: crushAIColors.text.primary }}
                  >
                    Patient-Focused Care
                  </span>
                  <Users 
                    className="ml-2" 
                    size={isMobile ? 16 : 20}
                    style={{ color: crushAIColors.primary }}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
