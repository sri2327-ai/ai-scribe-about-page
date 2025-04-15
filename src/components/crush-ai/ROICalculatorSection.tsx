
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, TextField, InputAdornment, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Info, BarChart2, DollarSign, Users } from "lucide-react";
import { CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip, Bar, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ROICalculatorSection = () => {
  const [providers, setProviders] = useState<number>(3);
  const [costPerProvider, setCostPerProvider] = useState<number>(99);
  const [patientsPerDay, setPatientsPerDay] = useState<number>(20);
  const [savingsData, setSavingsData] = useState<Array<{ name: string; value: number }>>([]);
  
  // Calculate savings data
  useEffect(() => {
    const humanScribeCost = providers * 2000;
    const crushAICost = providers * costPerProvider;
    const monthlySavings = humanScribeCost - crushAICost;
    
    setSavingsData([
      { name: "Human Scribe", value: humanScribeCost },
      { name: "Crush AI", value: crushAICost }
    ]);
  }, [providers, costPerProvider, patientsPerDay]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#fff",
        color: "#000",
        position: "relative"
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5 }}>
        <Box sx={{ mb: 5, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.5rem" }
              }}
            >
              Save $1,800+/month per provider. Automate Notes with AI.
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{
                color: "rgba(0,0,0,0.7)",
                mb: 4,
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" }
              }}
            >
              Crush AI starts at just $99/month. Trusted by 90+ providers to reduce burnout, save time, and cut costs.
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Calculator Section */}
          <div className="flex flex-col gap-6 p-6 border border-black/10 rounded-xl shadow-sm">
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >
              <BarChart2 size={24} className="stroke-black" />
              Calculate Your Savings
            </Typography>
            
            <Stack spacing={3}>
              <TextField
                label="Number of Providers"
                type="number"
                value={providers}
                onChange={(e) => setProviders(Number(e.target.value) || 1)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Users size={20} className="stroke-black" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                  '& .MuiFormLabel-root': {
                    color: 'rgba(0, 0, 0, 0.6)',
                    '&.Mui-focused': {
                      color: 'black',
                    },
                  },
                }}
              />
              
              <TextField
                label="Monthly Cost per Provider"
                type="number"
                value={costPerProvider}
                onChange={(e) => setCostPerProvider(Number(e.target.value) || 99)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DollarSign size={20} className="stroke-black" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <div className="relative group">
                        <Info size={18} className="stroke-black cursor-help" />
                        <div className="absolute invisible group-hover:visible right-0 -top-12 w-44 p-2 bg-black text-white text-xs rounded-md shadow-lg z-10">
                          Starting price of $99/month per provider
                        </div>
                      </div>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                  '& .MuiFormLabel-root': {
                    color: 'rgba(0, 0, 0, 0.6)',
                    '&.Mui-focused': {
                      color: 'black',
                    },
                  },
                }}
              />
              
              <TextField
                label="Patients per Day per Provider"
                type="number"
                value={patientsPerDay}
                onChange={(e) => setPatientsPerDay(Number(e.target.value) || 1)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Users size={20} className="stroke-black" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                  '& .MuiFormLabel-root': {
                    color: 'rgba(0, 0, 0, 0.6)',
                    '&.Mui-focused': {
                      color: 'black',
                    },
                  },
                }}
              />
            </Stack>
            
            <div className="flex flex-col items-center justify-center mt-4 p-4 rounded-lg bg-black/5">
              <Typography variant="subtitle1" sx={{ color: 'rgba(0,0,0,0.7)' }}>
                Your Monthly Savings:
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: 'black'
                }}
              >
                ${(providers * 2000 - providers * costPerProvider).toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)', textAlign: 'center', mt: 1 }}>
                Based on {providers} provider{providers > 1 ? 's' : ''} seeing {patientsPerDay} patient{patientsPerDay > 1 ? 's' : ''} per day
              </Typography>
            </div>
          </div>
          
          {/* Chart Section */}
          <div className="border border-black/10 rounded-xl p-6 shadow-sm">
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                mb: 3,
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >
              <BarChart2 size={24} className="stroke-black" />
              Monthly Cost Comparison
            </Typography>
            
            <ResponsiveContainer width="100%" height={300}>
              <ChartContainer
                className="w-full"
                config={{
                  "Human Scribe": { 
                    color: "#000000" 
                  },
                  "Crush AI": { 
                    color: "#333333" 
                  }
                }}
              >
                <BarChart
                  data={savingsData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#000000' }}
                    axisLine={{ stroke: '#000000' }}
                  />
                  <YAxis
                    tickFormatter={(value) => `$${value}`}
                    tick={{ fill: '#000000' }}
                    axisLine={{ stroke: '#000000' }}
                  />
                  <RechartsTooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cost']}
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #000',
                      borderRadius: '4px'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="currentColor"
                    radius={[8, 8, 0, 0]}
                    className="fill-[var(--color-Human-Scribe,#000)]"
                    name="Cost"
                  />
                </BarChart>
              </ChartContainer>
            </ResponsiveContainer>
            
            <Button 
              className="w-full mt-6 bg-black hover:bg-black/90 text-white rounded-md py-2"
            >
              Book A Demo
            </Button>
          </div>
        </motion.div>
      </Container>
    </Box>
  );
};
