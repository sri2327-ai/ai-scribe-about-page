
import React from "react";
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

const features = [
  {
    name: "Multi-EHR Integration",
    crush: true,
    competitors: false,
    description: "Seamlessly connects with all major electronic health record systems",
  },
  {
    name: "Real-time Documentation",
    crush: true,
    competitors: false,
    description: "Creates structured notes during the patient visit",
  },
  {
    name: "Proprietary LLM",
    crush: true,
    competitors: true,
    description: "Leverages specialized AI models trained on medical data",
  },
  {
    name: "Automated Coding",
    crush: true,
    competitors: false,
    description: "Automatically suggests appropriate billing codes",
  },
  {
    name: "Customizable Workflows",
    crush: true,
    competitors: false,
    description: "Adapts to your existing clinical processes",
  },
  {
    name: "Specialty-specific Training",
    crush: true,
    competitors: false,
    description: "Tailored to different medical specialties",
  },
];

export const CompetitionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 800,
              mb: 3,
              color: crushAIColors.text.primary,
            }}
          >
            CRUSH vs. Competitor Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: crushAIColors.text.secondary,
              fontSize: { xs: "0.9rem", md: "1rem" },
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            See how CRUSH AI stacks up against other documentation solutions
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* Table header row - making it white and seamless */}
          <Grid
            container
            sx={{
              bgcolor: "white", // Changed to white background
              borderBottom: "1px solid #e5e7eb",
              py: 2,
            }}
          >
            <Grid
              item
              xs={6}
              md={7}
              sx={{
                px: 3,
                display: "flex",
                alignItems: "center",
                borderRight: "1px solid #e5e7eb",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: crushAIColors.text.primary,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Features
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={2.5}
              sx={{
                px: 2,
                textAlign: "center",
                borderRight: "1px solid #e5e7eb",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: crushAIColors.primaryFlat,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                CRUSH
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={2.5}
              sx={{
                px: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#6B7280",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Others
              </Typography>
            </Grid>
          </Grid>

          {/* Table rows */}
          {features.map((feature, index) => (
            <Grid
              container
              key={feature.name}
              sx={{
                bgcolor: index % 2 === 0 ? "#f9fafb" : "white",
                borderBottom:
                  index === features.length - 1
                    ? "none"
                    : "1px solid #e5e7eb",
              }}
            >
              <Grid
                item
                xs={6}
                md={7}
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRight: "1px solid #e5e7eb",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: crushAIColors.text.primary,
                    fontSize: { xs: "0.8rem", md: "0.95rem" },
                    mb: 0.5,
                  }}
                >
                  {feature.name}
                </Typography>
                {!isMobile && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6B7280",
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                    }}
                  >
                    {feature.description}
                  </Typography>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                md={2.5}
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid #e5e7eb",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    bgcolor: feature.crush
                      ? "rgba(4, 111, 144, 0.1)"
                      : "transparent",
                  }}
                >
                  {feature.crush ? (
                    <Check size={16} color={crushAIColors.primaryFlat} />
                  ) : (
                    <X size={16} color="#EF4444" />
                  )}
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={2.5}
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    bgcolor: feature.competitors
                      ? "rgba(107, 114, 128, 0.1)"
                      : "transparent",
                  }}
                >
                  {feature.competitors ? (
                    <Check size={16} color="#6B7280" />
                  ) : (
                    <X size={16} color="#EF4444" />
                  )}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
