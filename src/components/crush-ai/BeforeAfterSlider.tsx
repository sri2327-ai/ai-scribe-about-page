
import React from "react";
import { Box, Typography } from "@mui/material";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SplitView } from "@/components/ui/split-view";

export const BeforeAfterSlider = () => {
  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Before vs. After CRUSH</Badge>
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
            <Box sx={{ height: { xs: "250px", sm: "300px", md: "400px" } }}>
              <SplitView
                leftContent={
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(255,255,255,0.95)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 4,
                      backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
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
                }
                rightContent={
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(255,255,255,0.95)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 4,
                      backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
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
                }
                leftLabel={<Typography variant="body2" sx={{ fontWeight: 600, color: "#d32f2f" }}>Without CRUSH</Typography>}
                rightLabel={<Typography variant="body2" sx={{ fontWeight: 600, color: "#2e7d32" }}>With CRUSH</Typography>}
                className="border border-gray-200 shadow-md"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
