import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, TextField, InputAdornment, Stack } from "@mui/material";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Info, BarChart2, DollarSign, Users, Magnet } from "lucide-react";
import { CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip, Bar, ResponsiveContainer, BarChart, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { crushAIColors } from "@/theme/crush-ai-theme";

const tealBlueColor = "#5192AE";

// Define fixed colors for chart
const barColors = {
  humanScribe: "#000000",
  crushAI: crushAIColors.secondary
};

// Define Particle interface
interface Particle {
  id: number;
  x: number;
  y: number;
}

export const ROICalculatorSection = () => {
  const [providersInput, setProvidersInput] = useState<string>("3");
  const [costPerProviderInput, setCostPerProviderInput] = useState<string>("99");
  const [patientsPerDayInput, setPatientsPerDayInput] = useState<string>("20");
  
  const [providers, setProviders] = useState<number>(3);
  const [costPerProvider, setCostPerProvider] = useState<number>(99);
  const [patientsPerDay, setPatientsPerDay] = useState<number>(20);
  const [savings, setSavings] = useState<number>(5703);
  
  const [savingsData, setSavingsData] = useState<Array<{ name: string; value: number }>>([
    { name: "Human Scribe", value: 6000 },
    { name: "Crush AI", value: 297 }
  ]);
  
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();
  
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const cardScale = useTransform(scrollYProgress, [0, 0.3], [0.98, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);
  
  const containerWidth = useTransform(scrollYProgress, [0, 0.3], ["98%", "100%"]);
  const containerHeight = useTransform(scrollYProgress, [0, 0.3], ["96%", "100%"]);
  const containerBorderRadius = useTransform(scrollYProgress, [0, 0.3], ["1.5rem", "0rem"]);
  
  const containerTop = useTransform(scrollYProgress, [0, 0.3], ["3%", "0%"]);
  
  useEffect(() => {
    const particleCount = 12;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }));
    setParticles(newParticles);
  }, []);

  const handleInteractionStart = async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  };

  const handleInteractionEnd = async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  };
  
  const calculateSavings = () => {
    const providersNum = parseInt(providersInput) || 1;
    const costPerProviderNum = parseInt(costPerProviderInput) || 99;
    const patientsPerDayNum = parseInt(patientsPerDayInput) || 1;
    
    setProviders(providersNum);
    setCostPerProvider(costPerProviderNum);
    setPatientsPerDay(patientsPerDayNum);
    
    const humanScribeCost = providersNum * 2000;
    const crushAICost = providersNum * costPerProviderNum;
    const calculatedSavings = humanScribeCost - crushAICost;
    
    setSavings(calculatedSavings);
    setSavingsData([
      { name: "Human Scribe", value: humanScribeCost },
      { name: "Crush AI", value: crushAICost }
    ]);
    
    handleInteractionStart();
    
    setTimeout(() => {
      handleInteractionEnd();
    }, 2000);
  };

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 0, md: 0 },
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "unset", sm: "unset", md: "unset" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        bgcolor: "#FFFFFF",
        marginBottom: 0
      }}
    >
      <motion.div
        ref={containerRef}
        className="overflow-visible shadow-xl z-10" 
        style={{
          width: containerWidth,
          height: containerHeight,
          borderRadius: containerBorderRadius,
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          position: "relative",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0 0 40px 0",
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: "relative", 
            zIndex: 5, 
            py: { xs: 4, md: 5 },
            px: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "visible",
            mb: { xs: 5, sm: 6, md: 8 },
          }}
        >
          <Box 
            sx={{ 
              width: "100%",
              textAlign: "center",
              mb: { xs: 2.5, md: 3.5 },
              mt: { xs: 1, md: 2 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ scale: cardScale }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  color: '#000000',
                  lineHeight: 1.2,
                }}
              >
                Save $1,800+/month per provider. Automate Notes with AI.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{
                  color: crushAIColors.text.secondary,
                  mb: 2,
                  maxWidth: "700px",
                  mx: "auto",
                  fontSize: { xs: "0.95rem", md: "1.05rem" }
                }}
              >
                Crush AI starts at just $99/month. Trusted by 1000+ providers to reduce burnout, save time, and cut costs.
              </Typography>
            </motion.div>
          </Box>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ 
              scale: cardScale,
              opacity: cardOpacity,
              width: "100%",
              flex: 1,
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start"
          >
            <div className="flex flex-col gap-4 p-4 md:p-5 border border-black/10 rounded-xl shadow-sm bg-white h-full">
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: crushAIColors.text.primary,
                  fontSize: { xs: "1.1rem", md: "1.25rem" }
                }}
              >
                <BarChart2 size={22} style={{ color: crushAIColors.icons.primary }} />
                Calculate Your Savings
              </Typography>
              
              <Stack spacing={2.5}>
                <TextField
                  label="Number of Providers"
                  type="number"
                  value={providersInput}
                  onChange={(e) => setProvidersInput(e.target.value)}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Users size={18} style={{ color: crushAIColors.icons.primary }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: crushAIColors.text.primary, // Explicitly set text color
                      '& input': {
                        color: crushAIColors.text.primary, // Ensure input text is visible
                      },
                      '& fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&:hover fieldset': {
                        borderColor: crushAIColors.icons.primary,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: crushAIColors.icons.primary,
                      },
                    },
                    '& .MuiFormLabel-root': {
                      color: 'rgba(0, 0, 0, 0.6)',
                      '&.Mui-focused': {
                        color: crushAIColors.icons.primary,
                      },
                    },
                  }}
                />
                
                <TextField
                  label="Monthly Cost per Provider"
                  type="number"
                  value={costPerProviderInput}
                  onChange={(e) => setCostPerProviderInput(e.target.value)}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DollarSign size={18} style={{ color: crushAIColors.icons.primary }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <div className="relative group">
                          <Info size={16} style={{ color: crushAIColors.icons.primary }} className="cursor-help" />
                          <div className="absolute invisible group-hover:visible right-0 -top-12 w-44 p-2 bg-[#143151] text-white text-xs rounded-md shadow-lg z-10">
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
                        borderColor: crushAIColors.icons.primary,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: crushAIColors.icons.primary,
                      },
                    },
                    '& .MuiFormLabel-root': {
                      color: 'rgba(0, 0, 0, 0.6)',
                      '&.Mui-focused': {
                        color: crushAIColors.icons.primary,
                      },
                    },
                  }}
                />
                
                <TextField
                  label="Patients per Day per Provider"
                  type="number"
                  value={patientsPerDayInput}
                  onChange={(e) => setPatientsPerDayInput(e.target.value)}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Users size={18} style={{ color: crushAIColors.icons.primary }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&:hover fieldset': {
                        borderColor: crushAIColors.icons.primary,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: crushAIColors.icons.primary,
                      },
                    },
                    '& .MuiFormLabel-root': {
                      color: 'rgba(0, 0, 0, 0.6)',
                      '&.Mui-focused': {
                        color: crushAIColors.icons.primary,
                      },
                    },
                  }}
                />
              </Stack>
              
              <div className="flex flex-col items-center justify-center mt-2 p-3 md:p-4 rounded-lg bg-[#F5F9FF]">
                <Typography variant="subtitle1" sx={{ color: crushAIColors.text.secondary, fontSize: { xs: "0.9rem", md: "1rem" } }}>
                  Your Monthly Savings:
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    my: 1,
                    color: crushAIColors.text.primary,
                    fontSize: { xs: "1.5rem", md: "1.75rem" }
                  }}
                >
                  ${savings.toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: crushAIColors.text.secondary, textAlign: 'center', fontSize: "0.8rem" }}>
                  Based on {providers} provider{providers > 1 ? 's' : ''} seeing {patientsPerDay} patient{patientsPerDay > 1 ? 's' : ''} per day
                </Typography>
              </div>
              
              <div className="flex justify-center mt-4">
                <Button
                  className={cn(
                    "min-w-40 relative touch-none",
                    "text-white",
                    "border border-[rgba(4,111,144,0.2)]",
                    "transition-all duration-300",
                    "py-2",
                  )}
                  style={{ 
                    background: crushAIColors.button.gradient,
                  }}
                  onClick={calculateSavings}
                  onMouseEnter={handleInteractionStart}
                  onMouseLeave={handleInteractionEnd}
                  onTouchStart={handleInteractionStart}
                  onTouchEnd={handleInteractionEnd}
                >
                  {particles.map((_, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial={{ x: particles[index].x, y: particles[index].y }}
                      animate={particlesControl}
                      className={cn(
                        "absolute text-xs font-bold",
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                      )}
                      style={{
                        color: "#FFD700",
                      }}
                    >
                      {index % 3 === 0 ? "$" : index % 3 === 1 ? "💰" : "💵"}
                    </motion.span>
                  ))}
                  <span className="relative w-full flex items-center justify-center gap-2">
                    <Magnet
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isAttracting && "scale-110"
                      )}
                    />
                    {isAttracting ? "Magnetizing Savings" : "Magnetize Savings"}
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="border border-black/10 rounded-xl p-4 md:p-5 shadow-sm bg-white h-full flex flex-col">
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: crushAIColors.text.primary,
                  fontSize: { xs: "1.1rem", md: "1.25rem" }
                }}
              >
                <BarChart2 size={22} style={{ color: crushAIColors.icons.primary }} />
                Monthly Cost Comparison
              </Typography>
              
              <div className="flex-1 min-h-[200px] md:min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={savingsData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 25 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: crushAIColors.text.primary, fontSize: 12 }}
                      axisLine={{ stroke: crushAIColors.text.primary }}
                    />
                    <YAxis
                      tickFormatter={(value) => `$${value}`}
                      tick={{ fill: crushAIColors.text.primary, fontSize: 12 }}
                      axisLine={{ stroke: crushAIColors.text.primary }}
                    />
                    <RechartsTooltip
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cost']}
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: `1px solid ${tealBlueColor}`,
                        borderRadius: '4px',
                        color: crushAIColors.text.primary
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill={barColors.crushAI}
                      radius={[8, 8, 0, 0]}
                      name="Cost"
                    >
                      {
                        savingsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === "Human Scribe" ? barColors.humanScribe : barColors.crushAI} />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <Button 
                className="w-full mt-6 rounded-md py-2.5 text-white"
                style={{ 
                  background: crushAIColors.button.gradient,
                }}
              >
                Book A Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </Box>
  );
};
