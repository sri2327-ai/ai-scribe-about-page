import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, TextField, InputAdornment, Stack } from "@mui/material";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { crushAIColors } from "@/theme/crush-ai-theme";

interface CostData {
  name: string;
  value: number;
}

const calculateSavings = (
  hourlyRate: number,
  timeSavedPerPatient: number,
  patientsPerDay: number,
  workdaysPerYear: number
): number => {
  const totalTimeSavedPerYear = timeSavedPerPatient * patientsPerDay * workdaysPerYear;
  const hourlySavings = hourlyRate * totalTimeSavedPerYear;
  return hourlySavings;
};

const calculateCost = (
  subscriptionCost: number,
  implementationCost: number
): number => {
  return subscriptionCost + implementationCost;
};

export const ROICalculatorSection = () => {
  const [hourlyRate, setHourlyRate] = useState<number>(75);
  const [timeSavedPerPatient, setTimeSavedPerPatient] = useState<number>(0.5);
  const [patientsPerDay, setPatientsPerDay] = useState<number>(20);
  const [workdaysPerYear, setWorkdaysPerYear] = useState<number>(220);
  const [subscriptionCost, setSubscriptionCost] = useState<number>(12000);
  const [implementationCost, setImplementationCost] = useState<number>(3000);

  const annualSavings = calculateSavings(
    hourlyRate,
    timeSavedPerPatient,
    patientsPerDay,
    workdaysPerYear
  );

  const totalCost = calculateCost(subscriptionCost, implementationCost);

  const annualCostData: CostData[] = [
    { name: "CRUSH Implementation", value: implementationCost },
    { name: "CRUSH Subscription", value: subscriptionCost },
    { name: "Time Saved", value: -annualSavings },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(to bottom, #e6eaf0, #d1d9e6)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          style={{ position: "relative" }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: crushAIColors.text.primary,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Unlock Your Practice's Potential: See the ROI
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  color: crushAIColors.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "800px",
                  mx: "auto",
                  fontWeight: 400,
                }}
              >
                Calculate the potential return on investment (ROI) of
                implementing CRUSH in your practice. Adjust the values to see
                how CRUSH can positively impact your bottom line.
              </Typography>
            </motion.div>
          </Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ mb: 6 }}
          >
            <motion.div variants={itemVariants} sx={{ flex: 1 }}>
              <TextField
                label="Hourly Rate ($)"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                fullWidth
                variant="outlined"
                color="primary"
              />
            </motion.div>
            <motion.div variants={itemVariants} sx={{ flex: 1 }}>
              <TextField
                label="Time Saved per Patient (Hours)"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Hours</InputAdornment>
                  ),
                }}
                value={timeSavedPerPatient}
                onChange={(e) => setTimeSavedPerPatient(Number(e.target.value))}
                fullWidth
                variant="outlined"
                color="primary"
              />
            </motion.div>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ mb: 6 }}
          >
            <motion.div variants={itemVariants} sx={{ flex: 1 }}>
              <TextField
                label="Patients per Day"
                type="number"
                value={patientsPerDay}
                onChange={(e) => setPatientsPerDay(Number(e.target.value))}
                fullWidth
                variant="outlined"
                color="primary"
              />
            </motion.div>
            <motion.div variants={itemVariants} sx={{ flex: 1 }}>
              <TextField
                label="Workdays per Year"
                type="number"
                value={workdaysPerYear}
                onChange={(e) => setWorkdaysPerYear(Number(e.target.value))}
                fullWidth
                variant="outlined"
                color="primary"
              />
            </motion.div>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ mb: 6 }}
          >
            <motion.div variants={itemVariants} sx={{ flex: 1 }}>
              <TextField
                label="Subscription Cost ($)"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                value={subscriptionCost}
                onChange={(e) => setSubscriptionCost(Number(e.target.value))}
                fullWidth
                variant="outlined"
                color="primary"
              />
            </motion.div>
            <motion.div variants={itemVariants} sx={{ flex: 1 }}>
              <TextField
                label="Implementation Cost ($)"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                value={implementationCost}
                onChange={(e) => setImplementationCost(Number(e.target.value))}
                fullWidth
                variant="outlined"
                color="primary"
              />
            </motion.div>
          </Stack>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: crushAIColors.text.primary,
                textAlign: "center",
              }}
            >
              Annual Impact
            </Typography>
          </motion.div>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={annualCostData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis 
                tickFormatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cost']}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: `1px solid #5192AE`,
                  borderRadius: '4px',
                  color: crushAIColors.text.primary
                }}
              />
              <Bar
                dataKey="value"
                fill="#5192AE" // Use a solid color for bar fill
                radius={[8, 8, 0, 0]}
                name="Cost"
              />
            </BarChart>
          </ResponsiveContainer>

          <motion.div variants={itemVariants} sx={{ textAlign: "center", mt: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: crushAIColors.text.primary,
                mb: 1,
              }}
            >
              Total Annual Savings: $
              {annualSavings.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: crushAIColors.text.secondary }}
            >
              This is the estimated amount your practice could save annually by
              implementing CRUSH.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};
