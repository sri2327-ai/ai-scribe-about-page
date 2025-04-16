
import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ShieldCheck, AlertCircle, Check, X } from "lucide-react";

export const CompetitionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const featureRows = [
    {
      feature: "Pinpoint Accuracy",
      crush: "Nails every detail of your medical jargon with precision",
      others: "Produces botched notes that need constant fixing"
    },
    {
      feature: "EHR Integration",
      crush: "Seamlessly connects with any EHR system",
      others: "Limited integration capabilities"
    },
    {
      feature: "Multilingual Mastery",
      crush: "Supports multiple languages and dialects",
      others: "English-only or limited language support"
    },
    {
      feature: "Human-Backed Customization",
      crush: "Tailored to your specific workflows with human oversight",
      others: "One-size-fits-all automation"
    },
    {
      feature: "Complete Workflow Automation",
      crush: "End-to-end automation of clinical documentation",
      others: "Partial automation requiring manual steps"
    },
    {
      feature: "Clinical Intelligence",
      crush: "Built with deep medical expertise and constantly updated",
      others: "Generic AI without specialized clinical training"
    },
    {
      feature: "Rapid Documentation",
      crush: "Immediate note generation with minimal delay",
      others: "Slow processing times, causing bottlenecks"
    },
    {
      feature: "Ironclad Security",
      crush: "HIPAA-compliant with robust security measures",
      others: "Basic security protocols with potential vulnerabilities"
    },
    {
      feature: "Specialty Adaptation",
      crush: "Adapts to any medical specialty with ease",
      others: "Limited specialty coverage"
    },
    {
      feature: "AI Template Builder",
      crush: "Create custom templates with AI assistance",
      others: "Rigid templates with minimal customization"
    }
  ];

  return (
    <Box
      component="section"
      id="competition"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: crushAIColors.secondary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SparklesTextAdvanced
              text="Why CRUSH Crushes the Competition"
              className="text-4xl md:text-5xl text-white mb-6 leading-tight tracking-tight"
              colors={{ first: "#ffffff", second: "#ffffff" }}
            />
          </motion.div>
        </Box>

        {isMobile ? (
          // Mobile view: card-based comparison
          <Box>
            {featureRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4 bg-white/95 border-none shadow-lg">
                  <CardContent className="p-4">
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: crushAIColors.primary }}>
                      {row.feature}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}>
                      <ShieldCheck className="text-green-500 mr-2 shrink-0 mt-1" size={18} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        <strong className="text-green-500">CRUSH:</strong> {row.crush}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <AlertCircle className="text-red-500 mr-2 shrink-0 mt-1" size={18} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        <strong className="text-red-500">Others:</strong> {row.others}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        ) : (
          // Tablet/Desktop view: table comparison
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="animate-fadeIn"
          >
            <Card className="bg-white/95 shadow-lg border-none overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/80">
                    <TableHead className="w-[250px] font-bold text-black">Feature</TableHead>
                    <TableHead className="font-bold text-green-600">CRUSH</TableHead>
                    <TableHead className="font-bold text-red-500">Other AI Scribes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featureRows.map((row, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      viewport={{ once: true }}
                      className={index % 2 === 0 ? "bg-gray-50/50" : ""}
                    >
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Check size={18} className="text-green-500 mr-2 shrink-0" />
                          {row.crush}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <X size={18} className="text-red-500 mr-2 shrink-0" />
                          {row.others}
                        </Box>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};
