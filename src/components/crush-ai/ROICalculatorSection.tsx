
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const ROICalculatorSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [providers, setProviders] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(150);
  const [hoursSpent, setHoursSpent] = useState<number>(2);
  
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [yearlySavings, setYearlySavings] = useState<number>(0);
  
  // Calculate savings whenever inputs change
  useEffect(() => {
    const dailySavings = providers * hourlyRate * hoursSpent;
    const monthly = dailySavings * 22; // Assuming 22 working days per month
    const yearly = monthly * 12;
    
    setMonthlySavings(monthly);
    setYearlySavings(yearly);
  }, [providers, hourlyRate, hoursSpent]);
  
  // Handle numeric input changes with validation
  const handleNumericChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only update if the value is a valid number or empty
    if (value === '' || /^\d+$/.test(value)) {
      setter(Number(value) || 0);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 5 }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 2,
              color: crushAIColors.text.primary,
            }}
          >
            Calculate Your Savings
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: crushAIColors.text.secondary,
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            See how much CRUSH AI can save your practice in documentation time and costs.
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            maxWidth: 900,
            mx: "auto",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: "white",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 700,
                    mb: 4,
                    color: crushAIColors.text.primary,
                  }}
                >
                  Your Practice
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "0.9rem",
                      color: crushAIColors.text.primary,
                      fontWeight: 500,
                    }}
                  >
                    Number of Providers
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: 1,
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      value={providers}
                      onChange={handleNumericChange(setProviders)}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "1rem",
                        color: crushAIColors.text.primary,
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "0.9rem",
                      color: crushAIColors.text.primary,
                      fontWeight: 500,
                    }}
                  >
                    Provider Hourly Rate ($)
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: 1,
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      value={hourlyRate}
                      onChange={handleNumericChange(setHourlyRate)}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "1rem",
                        color: crushAIColors.text.primary,
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "0.9rem",
                      color: crushAIColors.text.primary,
                      fontWeight: 500,
                    }}
                  >
                    Hours Spent on Documentation (daily)
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: 1,
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      value={hoursSpent}
                      onChange={handleNumericChange(setHoursSpent)}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "1rem",
                        color: crushAIColors.text.primary,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: crushAIColors.primary,
                  height: "100%",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 700,
                    mb: 4,
                    color: "white",
                  }}
                >
                  Your Savings with CRUSH
                </Typography>

                <Box sx={{ mb: 5 }}>
                  <Typography sx={{ fontSize: "0.9rem", mb: 1 }}>
                    Monthly Savings
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                      fontWeight: 700,
                    }}
                  >
                    ${monthlySavings.toLocaleString()}
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontSize: "0.9rem", mb: 1 }}>
                    Yearly Savings
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                      fontWeight: 700,
                    }}
                  >
                    ${yearlySavings.toLocaleString()}
                  </Typography>
                </Box>

                <Box sx={{ mt: 6 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    Save ${Math.round(monthlySavings / providers).toLocaleString()}+/month per provider
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontSize: "1rem",
                      mt: 1,
                    }}
                  >
                    Automate Notes with AI
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
