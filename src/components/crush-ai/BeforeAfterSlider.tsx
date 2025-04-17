
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export const BeforeAfterSlider = () => {
  // Create a ref for the slider container
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Motion values for smooth animations
  const x = useMotionValue(0);
  const percent = useTransform(x, [-150, 150], [0, 100]);
  
  // State to trigger bounce animation when hitting edges
  const [bounceLeftActive, setBounceLeftActive] = useState(false);
  const [bounceRightActive, setBounceRightActive] = useState(false);
  
  // Light blue color for the left side
  const lightBlueColor = "#5192AE";
  
  useEffect(() => {
    const unsubscribe = percent.onChange((latest) => {
      // Clamp the value between 5 and 95 to prevent disappearing at the edges
      const safeValue = Math.min(Math.max(latest, 5), 95);
      
      // Trigger bounce animation if we hit the boundaries
      if (latest < 5) {
        setBounceLeftActive(true);
        setTimeout(() => setBounceLeftActive(false), 500);
      } else if (latest > 95) {
        setBounceRightActive(true);
        setTimeout(() => setBounceRightActive(false), 500);
      }
      
      setSliderPosition(safeValue);
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
    if (sliderPosition < 15) {
      animate(x, -120, { duration: 0.3 }); // This will set sliderPosition to ~15%
    } else if (sliderPosition > 85) {
      animate(x, 120, { duration: 0.3 }); // This will set sliderPosition to ~85%
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
    // Clamp the value between 5 and 95 to prevent disappearing at the edges
    const safePosition = Math.max(5, Math.min(95, position));
    setSliderPosition(safePosition);
  };
  
  // Helper buttons to move the slider when it gets stuck
  const moveSliderLeft = () => {
    const newPosition = Math.max(10, sliderPosition - 10);
    setSliderPosition(newPosition);
    animate(x, (newPosition - 50) * 3, { duration: 0.3 });
  };
  
  const moveSliderRight = () => {
    const newPosition = Math.min(90, sliderPosition + 10);
    setSliderPosition(newPosition);
    animate(x, (newPosition - 50) * 3, { duration: 0.3 });
  };

  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
            <div 
              ref={sliderContainerRef}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-xl"
              onMouseMove={handleDrag}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchMove={handleDrag}
              onTouchEnd={handleDragEnd}
            >
              <div className="absolute inset-0 flex items-stretch">
                {/* Blue side (Before) - Changed to light blue */}
                <div 
                  className="h-full flex items-center justify-center relative overflow-hidden"
                  style={{ 
                    width: `${sliderPosition}%`,
                    backgroundColor: lightBlueColor, // Changed to light blue color
                    color: 'white'
                  }}
                >
                  <div className="absolute inset-0 bg-[url('/public/lovable-uploads/5737eb5e-abd2-4c80-b961-6676d913887e.png')] bg-center bg-no-repeat bg-cover opacity-10"></div>
                  
                  {/* Add Badge for Without CRUSH */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white text-black text-xs font-medium py-1 px-2 rounded-full">WITHOUT CRUSH</span>
                  </div>
                  
                  <div className="z-10 max-w-md p-8">
                    <div className="mb-4">
                      <span className="bg-white text-black text-xs font-medium py-1 px-2 rounded-full">WITHOUT CRUSH</span>
                    </div>
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-4`}>The old way of documentation</h2>
                    <p className={`text-white ${isMobile ? 'text-sm' : 'text-lg'} mb-6`}>
                      Managing patient documentation is already tedious and time-consuming. 
                      Avoid further complications by ditching outdated, screen-focused methods.
                    </p>
                    <ul className={`space-y-2 text-white ${isMobile ? 'text-xs' : 'text-base'}`}>
                      <li className="flex items-start gap-2">
                        <span className="text-white">•</span> {/* Fixed white bullet point */}
                        <span>Hours of typing after each visit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white">•</span> {/* Fixed white bullet point */}
                        <span>Constantly looking at screens instead of patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white">•</span> {/* Fixed white bullet point */}
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
                  
                  {/* Add Badge for With CRUSH */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-black text-white text-xs font-medium py-1 px-2 rounded-full">WITH CRUSH</span>
                  </div>
                  
                  <div className="z-10 max-w-md p-8">
                    <div className="mb-4">
                      <span className="bg-black text-white text-xs font-medium py-1 px-2 rounded-full">WITH CRUSH</span>
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
                className={cn(
                  "absolute top-0 bottom-0 w-1 bg-white z-20",
                  bounceLeftActive && "animate-bounce-left",
                  bounceRightActive && "animate-bounce-right"
                )}
                style={{ 
                  left: `${sliderPosition}%`,
                  x: x,
                }}
                drag="x"
                dragConstraints={{ left: -150, right: 150 }} // Limited drag boundaries
                dragElastic={0.05} // Less elastic to prevent edge disappearance
                dragMomentum={false} // Disable momentum to prevent overshooting
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {/* Slider handle with better touch target */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center z-30 cursor-ew-resize touch-none ${isDragging ? 'scale-110' : ''} transition-transform duration-200`}
                >
                  <div 
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center"
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
                  {/* Larger invisible touch area for better mobile interaction */}
                  <div className="absolute w-24 h-24 rounded-full touch-none cursor-grab"></div>
                </div>
              </motion.div>
              
              {/* Navigation indicators - only show if not too close to edge */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 z-30">
                <div className={`flex items-center gap-2 ${sliderPosition < 20 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <ArrowRight className="h-4 w-4 rotate-180 text-white" />
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-white font-medium`}>Without CRUSH</span>
                </div>
                <div className={`flex items-center gap-2 ${sliderPosition > 80 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-black font-medium`}>With CRUSH</span>
                  <ArrowRight className="h-4 w-4 text-black" />
                </div>
              </div>
              
              {/* Helper buttons that appear when the slider gets close to the edges */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-40 shadow-lg ${sliderPosition > 15 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                      onClick={moveSliderRight}
                      animate={sliderPosition < 15 ? { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="h-5 w-5 rotate-180" />
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Move slider right</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-40 shadow-lg ${sliderPosition < 85 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                      onClick={moveSliderLeft}
                      animate={sliderPosition > 85 ? { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Move slider left</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Bottom labels - kept but no badge */}
            <div className="flex justify-between mt-6 px-4">
              <div className="flex items-center">
                <span className={`text-gray-700 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>Screen-Focused Care</span>
              </div>
              <div className="flex items-center">
                <span className={`text-gray-700 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>Patient-Focused Care</span>
              </div>
            </div>

            {/* Mobile helper: alternate control for mobile devices */}
            {isMobile && (
              <div className="mt-4 px-6">
                <Slider 
                  value={[sliderPosition]}
                  min={5}
                  max={95}
                  step={1}
                  onValueChange={(values) => {
                    setSliderPosition(values[0]);
                    animate(x, (values[0] - 50) * 3, { duration: 0.1 });
                  }}
                  className="pt-2 pb-4"
                />
              </div>
            )}
          </motion.div>
        </Box>
      </Box>

      {/* Fix: Use proper style tag without jsx attribute */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        
        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        
        .animate-bounce-left {
          animation: bounce-left 0.5s;
        }
        
        .animate-bounce-right {
          animation: bounce-right 0.5s;
        }
        
        /* Additional keyframe needed for subtle bounce */
        @keyframes bounce-subtle {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 0.5s;
        }
      `}}/>
    </Box>
  );
};

function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(" ");
}
