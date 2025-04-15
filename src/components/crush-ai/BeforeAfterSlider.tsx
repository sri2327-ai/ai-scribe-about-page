
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { GripVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const BeforeAfterSlider = () => {
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
    <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Badge className="bg-blue-600 text-white">Before vs. After CRUSH</Badge>
          </Box>
          
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "center", mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              See the CRUSH Difference
            </Typography>
            <Typography variant="body2" sx={{ color: "#666666", maxWidth: "700px", mx: "auto" }}>
              Drag the slider to compare the clinical experience before and after implementing CRUSH AI
            </Typography>
          </Box>
          
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ pt: 2, width: "100%" }}
          >
            <Box
              className="relative aspect-video w-full overflow-hidden rounded-xl select-none border border-gray-200 shadow-md"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
              sx={{ 
                height: { xs: "250px", sm: "300px", md: "400px" },
                backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Box
                className="bg-white h-full w-1 absolute z-20 top-0 select-none"
                sx={{
                  left: `${inset}%`,
                  ml: "-1px"
                }}
              >
                <Box
                  component="button"
                  className="bg-white rounded-full hover:scale-110 transition-all select-none absolute z-30 cursor-ew-resize flex justify-center items-center"
                  sx={{
                    width: "40px",
                    height: "40px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    border: "2px solid #fff"
                  }}
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
                  <GripVertical className="h-5 w-5 text-gray-600" />
                </Box>
              </Box>
              
              {/* Before side */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.95)",
                  clipPath: `inset(0 ${100 - inset}% 0 0)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 4
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#d32f2f" }}>
                  BEFORE CRUSH
                </Typography>
                <Box sx={{ maxWidth: "400px", textAlign: "center" }}>
                  <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                    • Hours spent on documentation after each patient
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                    • Screen time taking away from patient care
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                    • Clinical burnout and stress
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    • Late nights completing notes and referrals
                  </Typography>
                </Box>
              </Box>
              
              {/* After side */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.95)",
                  clipPath: `inset(0 0 0 ${inset}%)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 4
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#2e7d32" }}>
                  AFTER CRUSH
                </Typography>
                <Box sx={{ maxWidth: "400px", textAlign: "center" }}>
                  <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                    • Documentation completed during the visit
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                    • Focus entirely on the patient
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                    • Reduced admin burden and stress
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    • Leave work on time with notes complete
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#d32f2f" }}>Without CRUSH</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#2e7d32" }}>With CRUSH</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
