
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const featuresData = [
  {
    title: "AI-Powered Automation",
    crush: "✓",
    competition: "X"
  },
  {
    title: "Seamless EHR Integration",
    crush: "✓",
    competition: "X"
  },
  {
    title: "Customizable Templates",
    crush: "✓",
    competition: "X"
  },
  {
    title: "Real-Time Documentation",
    crush: "✓",
    competition: "X"
  },
  {
    title: "Coding Assistance",
    crush: "✓",
    competition: "X"
  },
  {
    title: "Referral Automation",
    crush: "✓",
    competition: "X"
  }
];

export const CompetitionSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#ffffff"
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 3,
              color: "#000000",
              letterSpacing: "-0.02em"
            }}
          >
            Why CRUSH Crushes the Competition
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#403E43",
              fontWeight: 400
            }}
          >
            See why CRUSH stands out as the superior AI medical scribe compared to
            traditional methods and other solutions.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          {featuresData.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    textAlign: "center",
                    height: "100%"
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#000000",
                      fontSize: "1.1rem"
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      mt: 3
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#1EAEDB", fontWeight: 600, mb: 1 }}
                      >
                        CRUSH
                      </Typography>
                      {feature.crush === "✓" ? (
                        <CheckCircle size={24} className="text-green-500" />
                      ) : (
                        <X size={24} className="text-red-500" />
                      )}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#8A898C", fontWeight: 600, mb: 1 }}
                      >
                        Competition
                      </Typography>
                      {feature.competition === "✓" ? (
                        <CheckCircle size={24} className="text-green-500" />
                      ) : (
                        <X size={24} className="text-red-500" />
                      )}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
