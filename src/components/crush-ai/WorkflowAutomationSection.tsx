
import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Monitor, Mic, FileText } from "lucide-react";

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
        bgcolor: "#f9f9f9"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <Badge className="bg-blue-500 text-white hover:bg-blue-600">Workflow</Badge>
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
                className="relative aspect-video w-full h-full overflow-hidden rounded-xl select-none shadow-xl"
                onMouseMove={onMouseMove}
                onMouseUp={() => setOnMouseDown(false)}
                onTouchMove={onMouseMove}
                onTouchEnd={() => setOnMouseDown(false)}
              >
                <div
                  className="bg-white h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                  style={{
                    left: inset + "%",
                  }}
                >
                  <button
                    className="bg-white rounded-full hover:scale-110 transition-all w-10 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-md"
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
                    <GripVertical className="h-5 w-5 text-blue-500 select-none" />
                  </button>
                </div>
                
                {/* Before - Traditional Documentation */}
                <div
                  className="absolute left-0 top-0 z-10 w-full h-full rounded-xl select-none border overflow-hidden"
                  style={{
                    clipPath: "inset(0 0 0 " + inset + "%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gray-50 flex flex-col">
                    <div className="bg-gray-200 p-4 flex items-center">
                      <Monitor className="text-gray-700 mr-2" size={20} />
                      <div className="text-gray-800 font-medium">Without CRUSH</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="max-w-md mx-auto text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                          <div className="flex items-center justify-center mb-4">
                            <div className="p-3 bg-red-100 rounded-full">
                              <Monitor className="h-8 w-8 text-red-500" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Screen-Focused</h3>
                          <p className="text-gray-600 mb-4">Constantly typing notes during patient visits, breaking eye contact and missing important cues</p>
                          <div className="flex items-center justify-center text-sm">
                            <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded">8+ hours of documentation daily</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* After - CRUSH Documentation */}
                <div className="absolute left-0 top-0 w-full h-full aspect-video rounded-xl select-none border overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center">
                      <FileText className="text-white mr-2" size={20} />
                      <div className="text-white font-medium">With CRUSH</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="max-w-md mx-auto text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                          <div className="flex items-center justify-center mb-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                              <Mic className="h-8 w-8 text-blue-500" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Patient-Focused</h3>
                          <p className="text-gray-600 mb-4">Engage fully with patients while CRUSH automatically documents your visit with pinpoint accuracy</p>
                          <div className="flex items-center justify-center text-sm">
                            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">Notes complete in &lt;60 seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-6 px-4">
                <div className="flex items-center">
                  <Monitor className="text-gray-500 mr-2" size={20} />
                  <span className="text-gray-800 font-medium">Screen-Focused Care</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-800 font-medium">Patient-Focused Care</span>
                  <Mic className="text-blue-500 ml-2" size={20} />
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
