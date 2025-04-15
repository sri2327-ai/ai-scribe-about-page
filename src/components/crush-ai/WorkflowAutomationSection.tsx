
import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Monitor, Mic, FileText, Computer, Users, ClipboardList, Clock } from "lucide-react";

export const WorkflowAutomationSection = () => {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.2,
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              <Badge 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border border-black/10 py-2 px-4 text-xs font-medium tracking-wider"
              >
                <motion.span
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-1.5"
                >
                  🔥
                </motion.span>
                NEW COMPARISON
              </Badge>
            </motion.div>
          </Box>
          
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
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 800,
                mb: 2,
                color: "#000000",
                maxWidth: "800px"
              }}
            >
              Talk to Patients, Not Screens – CRUSH Handles the Rest
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: "1.1rem",
                mb: 2,
                maxWidth: "800px"
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
                className="relative aspect-video w-full h-full overflow-hidden rounded-xl select-none shadow-xl bg-white"
                onMouseMove={onMouseMove}
                onMouseUp={() => setOnMouseDown(false)}
                onTouchMove={onMouseMove}
                onTouchEnd={() => setOnMouseDown(false)}
              >
                {/* Interactive Slider Divider */}
                <div
                  className="bg-gradient-to-b from-gray-200 via-white to-gray-200 h-full w-2 absolute z-20 top-0 -ml-[1px] select-none shadow-md"
                  style={{
                    left: inset + "%",
                  }}
                >
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 border border-white/50 rounded-full hover:scale-110 transition-all w-12 h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-5 z-30 cursor-ew-resize flex justify-center items-center shadow-xl"
                    onTouchStart={(e) => {
                      setOnMouseDown(true);
                      onMouseMove(e);
                    }}
                    onMouseDown={(e) => {
                      setOnMouseDown(true);
                      onMouseMove(e);
                    }}
                    onTouchEnd={() => setOnMouseDown(false)}
                    onMouseUp={() => setOnMouseDown(false)}
                  >
                    <GripVertical className="h-6 w-6 text-white select-none" />
                  </button>
                </div>
                
                {/* Without CRUSH Side */}
                <div
                  className="absolute left-0 top-0 z-10 w-full h-full rounded-xl select-none border border-black/10 overflow-hidden"
                  style={{
                    clipPath: "inset(0 0 0 " + inset + "%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 flex items-center">
                      <Computer className="text-white mr-2" size={20} />
                      <div className="text-white font-medium">Without CRUSH</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="max-w-md mx-auto text-center">
                        <motion.div 
                          className="bg-white p-6 rounded-lg shadow-md mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Illustration of doctor focused on screen */}
                          <div className="relative mb-6 mx-auto w-64 h-40 bg-gray-100 rounded-lg overflow-hidden">
                            <motion.div 
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-80"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 bg-gray-700 rounded-md shadow-md"></div>
                                <div className="absolute bottom-2 right-8 w-10 h-10 rounded-full bg-gray-400 shadow-md flex items-center justify-center">
                                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                </div>
                                <div className="absolute top-6 left-8 w-16 h-10 rounded-md bg-gray-400 shadow-md"></div>
                                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                  <Monitor className="h-12 w-12 text-gray-800" />
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          <div className="flex items-center justify-center mb-4">
                            <motion.div 
                              className="p-3 bg-red-100 rounded-full"
                              animate={{ 
                                scale: [1, 1.05, 1],
                                backgroundColor: ["rgb(254 226 226)", "rgb(254 202 202)", "rgb(254 226 226)"]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            >
                              <Computer className="h-8 w-8 text-red-500" />
                            </motion.div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Screen-Focused</h3>
                          <p className="text-gray-600 mb-4">Constantly typing notes during patient visits, breaking eye contact and missing important cues</p>
                          
                          <div className="flex items-center justify-center gap-2">
                            <span className="inline-flex items-center bg-red-100 text-red-800 px-2 py-1 rounded">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              <span className="text-sm">8+ hours of documentation</span>
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* With CRUSH Side */}
                <div className="absolute left-0 top-0 w-full h-full aspect-video rounded-xl select-none border border-black/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex items-center">
                      <Users className="text-white mr-2" size={20} />
                      <div className="text-white font-medium">With CRUSH</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="max-w-md mx-auto text-center">
                        <motion.div 
                          className="bg-white p-6 rounded-lg shadow-md mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Illustration of doctor focused on patient */}
                          <div className="relative mb-6 mx-auto w-64 h-40 bg-blue-50 rounded-lg overflow-hidden">
                            <motion.div 
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{
                                opacity: [0.9, 1, 0.9],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-70"></div>
                                
                                {/* Doctor and patient figures */}
                                <div className="absolute bottom-2 left-10 w-10 h-14 rounded-t-full bg-blue-400 shadow-md"></div>
                                <div className="absolute bottom-2 left-10 w-6 h-6 rounded-full bg-blue-500 shadow-md transform translate-x-2 -translate-y-10"></div>
                                
                                <div className="absolute bottom-2 right-10 w-10 h-12 rounded-t-full bg-indigo-300 shadow-md"></div>
                                <div className="absolute bottom-2 right-10 w-6 h-6 rounded-full bg-indigo-400 shadow-md transform translate-x-2 -translate-y-8"></div>
                                
                                {/* Sound waves */}
                                <motion.div 
                                  className="absolute top-5 left-1/2 transform -translate-x-1/2"
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Mic className="h-8 w-8 text-blue-500" />
                                </motion.div>
                                
                                {/* Document being generated */}
                                <motion.div 
                                  className="absolute top-20 right-6"
                                  animate={{
                                    opacity: [0, 1, 1],
                                    y: [0, -5, -5],
                                    x: [0, 5, 5]
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <ClipboardList className="h-6 w-6 text-indigo-600" />
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>

                          <div className="flex items-center justify-center mb-4">
                            <motion.div 
                              className="p-3 bg-blue-100 rounded-full"
                              animate={{ 
                                boxShadow: [
                                  "0 0 0 0 rgba(59, 130, 246, 0)",
                                  "0 0 0 10px rgba(59, 130, 246, 0.2)",
                                  "0 0 0 0 rgba(59, 130, 246, 0)"
                                ],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                              }}
                            >
                              <Mic className="h-8 w-8 text-blue-500" />
                            </motion.div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Patient-Focused</h3>
                          <p className="text-gray-600 mb-4">Engage fully with patients while CRUSH automatically documents your visit with pinpoint accuracy</p>
                          
                          <div className="flex items-center justify-center">
                            <motion.span 
                              className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded"
                              animate={{ 
                                backgroundColor: ["rgb(219 234 254)", "rgb(191 219 254)", "rgb(219 234 254)"]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              <span className="text-sm">Notes complete in &lt;60 seconds</span>
                            </motion.span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-6 px-4">
                <div className="flex items-center">
                  <Computer className="text-gray-800 mr-2" size={20} />
                  <span className="text-gray-800 font-medium">Screen-Focused Care</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-800 font-medium">Patient-Focused Care</span>
                  <Users className="text-blue-500 ml-2" size={20} />
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
