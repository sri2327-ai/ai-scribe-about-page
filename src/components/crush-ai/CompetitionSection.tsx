
import React, { useState } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy, ChevronRight, FilePlus, Copy, Import, Users } from "lucide-react";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface ComparisonFeature {
  id: string;
  title: string;
  crushDescription: string;
  competitionDescription: string;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    id: "accuracy",
    title: "Pinpoint Accuracy",
    crushDescription: "Nails every detail of your medical jargon with precision",
    competitionDescription: "Produces botched notes that need constant fixing"
  },
  {
    id: "ehr-sync",
    title: "EHR Integration",
    crushDescription: "Seamless sync with any EHR system - Epic, Cerner, or custom setups",
    competitionDescription: "Stuck in copy-paste purgatory with limited compatibility"
  },
  {
    id: "multilingual",
    title: "Multilingual Mastery",
    crushDescription: "Fluent in English, Spanish, French, and more",
    competitionDescription: "Fumbles anything beyond basic English"
  },
  {
    id: "customization",
    title: "Human-Backed Customization",
    crushDescription: "Expert team tailors notes and workflows to your exact needs",
    competitionDescription: "Generic templates with minimal personalization"
  },
  {
    id: "automation",
    title: "Complete Workflow Automation",
    crushDescription: "Handles referrals, prescriptions, and screenings automatically",
    competitionDescription: "Still learning to spell 'referral'"
  },
  {
    id: "clinical-smarts",
    title: "Clinical Intelligence",
    crushDescription: "Real-time tips, HCC tracking, and preventive care flags",
    competitionDescription: "Just a glorified stenographer"
  },
  {
    id: "efficiency",
    title: "Rapid Documentation",
    crushDescription: "Charts done in under a minute, no late-night edits",
    competitionDescription: "Keeps you working late with constant revisions"
  },
  {
    id: "security",
    title: "Ironclad Security",
    crushDescription: "HIPAA, SOC 2, HITECH compliant - your data is secure",
    competitionDescription: "Security as flimsy as a paper chart"
  },
  {
    id: "specialty",
    title: "Specialty Adaptation",
    crushDescription: "Customized for any specialty from cardiology to psychiatry",
    competitionDescription: "One-size-fits-all approach that fits none"
  },
  {
    id: "template-builder",
    title: "AI Template Builder",
    crushDescription: "Build, modify or import personalized templates with one click",
    competitionDescription: "Locked into rigid templates with no flexibility"
  }
];

export const CompetitionSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>("accuracy");
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  // Animation variants for rows
  const tableRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 1
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
          <Box sx={{ mb: 2, position: "relative" }}>
            <SparklesTextAdvanced 
              text="Why CRUSH Crushes the Competition" 
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
              colors={{ first: "#FFFFFF", second: "#EEEEEE" }}
              sparklesCount={20}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#FFFFFF",
              fontWeight: 400,
              mb: 4
            }}
          >
            Other AI scribes talk a big game, but they're basically glorified typewriters.
            C.R.U.S.H. is in a league of its own, with features that redefine what an AI medical scribe can do.
          </Typography>
        </Box>

        {/* Tablet and desktop view: Display tabular comparison */}
        {!isMobile && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ 
              borderRadius: 2, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              overflow: 'hidden',
            }}
            className="bg-white/90 backdrop-blur-md border border-gray-300/50"
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-white border-b border-gray-200">
                  <TableHead className="font-semibold text-lg text-gray-800 w-1/3">Feature</TableHead>
                  <TableHead className="font-semibold text-lg text-gray-800 w-1/3">C.R.U.S.H.</TableHead>
                  <TableHead className="font-semibold text-lg text-gray-800 w-1/3">Other AI Scribes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((feature, index) => (
                  <TableRow 
                    key={feature.id}
                    className={index % 2 === 0 ? "bg-gray-100/90" : "bg-white/90"}
                  >
                    <TableCell className="font-medium text-gray-900">{feature.title}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box
                          sx={{ 
                            color: crushAIColors.icons.primary,
                            flexShrink: 0,
                            mt: 0.5
                          }}
                        >
                          <CheckCircle size={20} />
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ color: crushAIColors.text.primary }}>
                            {feature.crushDescription}
                          </Typography>
                          
                          {feature.id === "specialty" && (
                            <Box 
                              sx={{ 
                                mt: 1,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1
                              }}
                            >
                              {[
                                "Cardiology", "Dermatology", "Orthopedics", 
                                "Pediatrics", "Psychiatry", "Neurology", 
                                "Oncology", "Primary Care", "+ More"
                              ].map((specialty, idx) => (
                                <Box 
                                  key={idx}
                                  sx={{ 
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 5,
                                    bgcolor: `rgba(0, 0, 0, 0.05)`,
                                    border: `1px solid rgba(0, 0, 0, 0.1)`,
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    color: crushAIColors.text.primary
                                  }}
                                >
                                  {specialty}
                                </Box>
                              ))}
                            </Box>
                          )}
                          
                          {feature.id === "template-builder" && (
                            <Box 
                              sx={{ 
                                mt: 1, 
                                display: "grid", 
                                gridTemplateColumns: "1fr 1fr", 
                                gap: 1 
                              }}
                            >
                              {[
                                { icon: <FilePlus size={16} />, text: "Create a template from scratch" },
                                { icon: <Copy size={16} />, text: "Generate from instructions" },
                                { icon: <Import size={16} />, text: "Import templates" },
                                { icon: <Users size={16} />, text: "Browse community" }
                              ].map((item, idx) => (
                                <Box 
                                  key={idx}
                                  sx={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    gap: 1,
                                    fontSize: "0.75rem"
                                  }}
                                >
                                  <Box sx={{ color: crushAIColors.icons.primary }}>
                                    {item.icon}
                                  </Box>
                                  <Typography variant="body2" sx={{ fontSize: "0.75rem", color: crushAIColors.text.primary }}>
                                    {item.text}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box
                          sx={{ 
                            color: "#E57373",
                            flexShrink: 0,
                            mt: 0.5
                          }}
                        >
                          <XCircle size={20} />
                        </Box>
                        <Typography variant="body2" sx={{ color: crushAIColors.text.primary }}>
                          {feature.competitionDescription}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}

        {isMobile && (
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  pr: { md: 2 },
                  borderRadius: 2,
                  overflow: "hidden"
                }}
              >
                {comparisonFeatures.map((feature) => (
                  <Box
                    key={feature.id}
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    sx={{
                      p: 2.5,
                      cursor: "pointer",
                      borderRadius: 1,
                      mb: 1,
                      bgcolor: activeFeature === feature.id 
                        ? `rgba(255,255,255,0.9)` 
                        : "rgba(255,255,255,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease"
                    }}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 500, 
                        color: crushAIColors.text.primary,
                        fontSize: { xs: '0.95rem', md: '1rem' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <ChevronRight 
                      size={20} 
                      color={crushAIColors.icons.primary}
                    />
                  </Box>
                ))}
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                sx={{
                  width: { xs: "100%", md: "60%" },
                  borderRadius: 2,
                  p: 4,
                  border: `1px solid rgba(255, 255, 255, 0.5)`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
                }}
                className="bg-white/90 backdrop-blur-md"
              >
                {comparisonFeatures.map((feature) => (
                  <Box
                    key={feature.id}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeFeature === feature.id ? 1 : 0,
                      y: activeFeature === feature.id ? 0 : 20,
                      display: activeFeature === feature.id ? "block" : "none"
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(0, 0, 0, 0.05)',
                          p: 1.5,
                          borderRadius: 1,
                          mr: 2
                        }}
                      >
                        <Trophy size={24} color={crushAIColors.icons.primary} />
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          color: crushAIColors.text.primary, 
                          letterSpacing: "0.02em"
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 5 }}>
                      <Box 
                        sx={{ 
                          display: "flex", 
                          mb: 4, 
                          alignItems: "flex-start", 
                          gap: 3, 
                          bgcolor: 'rgba(0, 0, 0, 0.02)',
                          p: 3,
                          borderRadius: 2,
                          border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        <Box 
                          sx={{ 
                            bgcolor: `rgba(0, 0, 0, 0.05)`, 
                            p: 1.5, 
                            borderRadius: "50%", 
                            display: "flex", 
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                          }}
                        >
                          <CheckCircle size={24} color={crushAIColors.icons.primary} />
                        </Box>
                        <Box>
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 600, 
                              mb: 1, 
                              color: crushAIColors.text.primary,
                              bgcolor: 'rgba(0, 0, 0, 0.03)',
                              display: 'inline-block',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1
                            }}
                          >
                            C.R.U.S.H.
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: crushAIColors.text.primary, 
                              lineHeight: 1.6,
                              bgcolor: 'rgba(0, 0, 0, 0.03)',
                              display: 'inline-block',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1
                            }}
                          >
                            {feature.crushDescription}
                          </Typography>
                          
                          {feature.id === "template-builder" && (
                            <Box 
                              component={motion.div}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              sx={{ 
                                mt: 3, 
                                display: "grid", 
                                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
                                gap: 2 
                              }}
                            >
                              {[
                                { icon: <FilePlus size={16} />, text: "Create a template from scratch" },
                                { icon: <Copy size={16} />, text: "Generate content from your instructions or paste previous notes" },
                                { icon: <Import size={16} />, text: "Import current templates" },
                                { icon: <Users size={16} />, text: "Browse template community" }
                              ].map((item, idx) => (
                                <Box 
                                  key={idx}
                                  component={motion.div}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + (idx * 0.1) }}
                                  sx={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    gap: 1.5,
                                    p: 1.5,
                                    borderRadius: 1,
                                    bgcolor: `rgba(255, 255, 255, 0.1)`,
                                    border: `1px solid rgba(255, 255, 255, 0.2)`
                                  }}
                                >
                                  <Box sx={{ 
                                    color: crushAIColors.icons.primary,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}>
                                    {item.icon}
                                  </Box>
                                  <Typography variant="body2" sx={{ color: crushAIColors.text.white, fontSize: "0.85rem" }}>
                                    {item.text}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          )}
                          
                          {feature.id === "specialty" && (
                            <Box 
                              component={motion.div}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              sx={{ 
                                mt: 3,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1
                              }}
                            >
                              {[
                                "Cardiology", "Dermatology", "Orthopedics", 
                                "Pediatrics", "Psychiatry", "Neurology", 
                                "Oncology", "Primary Care", "+ More"
                              ].map((specialty, idx) => (
                                <Box 
                                  key={idx}
                                  component={motion.div}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + (idx * 0.05) }}
                                  sx={{ 
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 5,
                                    bgcolor: `rgba(255, 255, 255, 0.15)`,
                                    border: `1px solid rgba(255, 255, 255, 0.25)`,
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    color: crushAIColors.text.white
                                  }}
                                >
                                  {specialty}
                                </Box>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Box>

                      <Box 
                        sx={{ 
                          display: "flex", 
                          alignItems: "flex-start", 
                          gap: 3,
                          bgcolor: 'rgba(255, 100, 100, 0.05)',
                          p: 3,
                          borderRadius: 2,
                          border: '1px solid rgba(255, 100, 100, 0.2)'
                        }}
                      >
                        <Box 
                          sx={{ 
                            bgcolor: "rgba(255,100,100,0.1)", 
                            p: 1.5, 
                            borderRadius: "50%", 
                            display: "flex", 
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            border: "1px solid rgba(255,100,100,0.3)"
                          }}
                        >
                          <XCircle size={24} className="text-red-400" />
                        </Box>
                        <Box>
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 600, 
                              mb: 1, 
                              color: crushAIColors.text.primary,
                              bgcolor: 'rgba(255, 100, 100, 0.05)',
                              display: 'inline-block',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1
                            }}
                          >
                            Other AI Scribes
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: crushAIColors.text.primary, 
                              lineHeight: 1.6,
                              bgcolor: 'rgba(255, 100, 100, 0.05)',
                              display: 'inline-block',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1
                            }}
                          >
                            {feature.competitionDescription}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
      </Container>
    </Box>
  );
};
