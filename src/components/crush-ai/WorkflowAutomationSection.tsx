
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Computer, Mic, Users, ClipboardList, Clock } from "lucide-react";
import { SplitView } from "@/components/ui/split-view";

export const WorkflowAutomationSection = () => {
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
              <SplitView
                leftContent={
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
                }
                rightContent={
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
                }
                leftLabel={
                  <div className="flex items-center">
                    <Computer className="text-gray-800 mr-2" size={20} />
                    <span className="text-gray-800 font-medium">Screen-Focused Care</span>
                  </div>
                }
                rightLabel={
                  <div className="flex items-center">
                    <span className="text-gray-800 font-medium">Patient-Focused Care</span>
                    <Users className="text-blue-500 ml-2" size={20} />
                  </div>
                }
                className="aspect-video h-full rounded-xl shadow-xl overflow-hidden"
                dividerClassName="backdrop-blur-sm bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-blue-500/40"
                handleClassName="bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl"
              />
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
