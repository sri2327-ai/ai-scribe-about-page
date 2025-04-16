import React, { useState } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy, ChevronRight, FilePlus, Copy, Import, Users } from "lucide-react";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { WaveBackground } from "@/components/ui/wave-background";
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
    <WaveBackground 
      baseColor={crushAIColors.secondary}
      intensity="light"
    >
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
                color: crushAIColors.text.primary,
                fontWeight: 400,
                mb: 4
              }}
            >
              Other AI scribes talk a big game, but they're basically glorified typewriters.
              C.R.U.S.H. is in a league of its own, with features that redefine what an AI medical scribe can do.
            </Typography>
          </Box>

          {!isMobile && (
            <Box 
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: `1px solid rgba(165,204,243,0.2)`,
                backgroundColor: 'rgba(255,255,255,0.9)'
              }}
            >
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-100">
                    <TableHead 
                      className="w-1/5 text-blue-700 font-semibold tracking-tight text-base"
                      style={{ color: crushAIColors.primary }}
                    >
                      Feature
                    </TableHead>
                    <TableHead 
                      className="w-2/5 text-blue-700 font-semibold tracking-tight text-base"
                      style={{ color: crushAIColors.primary }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Trophy size={16} color={crushAIColors.primary} />
                        C.R.U.S.H.
                      </Box>
                    </TableHead>
                    <TableHead 
                      className="w-2/5 text-red-500 font-semibold tracking-tight text-base"
                    >
                      Other AI Scribes
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFeatures.map((feature, index) => {
                    return (
                      <motion.tr
                        key={feature.id}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={tableRowVariants}
                        className="hover:bg-blue-50 border-b border-blue-50"
                      >
                        <TableCell 
                          className="font-medium tracking-tight"
                          style={{ color: crushAIColors.text.primary }}
                        >
                          {feature.title}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box 
                              sx={{ 
                                bgcolor: `rgba(165,204,243,0.2)`, 
                                p: 0.8, 
                                borderRadius: "50%", 
                                mt: 0.5,
                                display: "flex", 
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                              }}
                            >
                              <CheckCircle size={16} color={crushAIColors.primary} />
                            </Box>
                            <Typography 
                              variant="body2" 
                              sx={{ color: crushAIColors.text.secondary, lineHeight: 1.6 }}
                            >
                              {feature.crushDescription}
                            </Typography>
                          </Box>

                          {feature.id === "template-builder" && !isTablet && (
                            <Box 
                              component={motion.div}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              sx={{ 
                                mt: 2, 
                                display: "grid", 
                                gridTemplateColumns: "1fr 1fr", 
                                gap: 1.5 
                              }}
                            >
                              {[
                                { icon: <FilePlus size={14} />, text: "Create from scratch" },
                                { icon: <Copy size={14} />, text: "Generate from instructions" },
                                { icon: <Import size={14} />, text: "Import templates" },
                                { icon: <Users size={14} />, text: "Browse community" }
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
                                    gap: 1,
                                    p: 1,
                                    borderRadius: 1,
                                    bgcolor: `rgba(165,204,243,0.05)`,
                                    border: `1px solid rgba(165,204,243,0.1)`
                                  }}
                                >
                                  <Box sx={{ 
                                    color: crushAIColors.primary,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}>
                                    {item.icon}
                                  </Box>
                                  <Typography variant="body2" sx={{ color: crushAIColors.text.primary, fontSize: "0.75rem" }}>
                                    {item.text}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          )}

                          {feature.id === "specialty" && !isTablet && (
                            <Box 
                              component={motion.div}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              sx={{ 
                                mt: 2,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.8
                              }}
                            >
                              {[
                                "Cardiology", "Dermatology", "Orthopedics", 
                                "Pediatrics", "Psychiatry", "+ More"
                              ].map((specialty, idx) => (
                                <Box 
                                  key={idx}
                                  component={motion.div}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + (idx * 0.05) }}
                                  sx={{ 
                                    px: 1.2,
                                    py: 0.4,
                                    borderRadius: 5,
                                    bgcolor: `rgba(165,204,243,0.1)`,
                                    border: `1px solid rgba(165,204,243,0.2)`,
                                    fontSize: "0.7rem",
                                    fontWeight: 500,
                                    color: crushAIColors.text.primary
                                  }}
                                >
                                  {specialty}
                                </Box>
                              ))}
                            </Box>
                          )}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box 
                              sx={{ 
                                bgcolor: "rgba(255,100,100,0.1)", 
                                p: 0.8, 
                                borderRadius: "50%", 
                                mt: 0.5,
                                display: "flex", 
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                border: "1px solid rgba(255,100,100,0.2)"
                              }}
                            >
                              <XCircle size={16} className="text-red-400" />
                            </Box>
                            <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6 }}>
                              {feature.competitionDescription}
                            </Typography>
                          </Box>
                        </TableCell>
                      </motion.tr>
                    );
                  })}
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
                        ? `rgba(255,255,255,0.8)` 
                        : "rgba(255,255,255,0.5)",
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
                      color={crushAIColors.primary}
                    />
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  width: { xs: "100%", md: "60%" },
                  bgcolor: "rgba(255,255,255,0.9)",
                  borderRadius: 2,
                  p: 4,
                  border: `1px solid rgba(165,204,243,0.3)`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                }}
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
                          bgcolor: 'rgba(240, 245, 250, 0.95)',
                          p: 1.5,
                          borderRadius: 1,
                          mr: 2
                        }}
                      >
                        <Trophy size={24} color={crushAIColors.primary} />
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
                          bgcolor: 'rgba(240, 245, 250, 0.5)',
                          p: 3,
                          borderRadius: 2,
                          border: '1px solid rgba(165,204,243,0.2)'
                        }}
                      >
                        <Box 
                          sx={{ 
                            bgcolor: `rgba(165,204,243,0.2)`, 
                            p: 1.5, 
                            borderRadius: "50%", 
                            display: "flex", 
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                          }}
                        >
                          <CheckCircle size={24} color={crushAIColors.primary} />
                        </Box>
                        <Box>
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 600, 
                              mb: 1, 
                              color: crushAIColors.primary,
                              bgcolor: 'rgba(240, 245, 250, 0.8)',
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
                              color: crushAIColors.text.secondary, 
                              lineHeight: 1.6,
                              bgcolor: 'rgba(240, 245, 250, 0.8)',
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
                                    bgcolor: `rgba(165,204,243,0.05)`,
                                    border: `1px solid rgba(165,204,243,0.1)`
                                  }}
                                >
                                  <Box sx={{ 
                                    color: crushAIColors.primary,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}>
                                    {item.icon}
                                  </Box>
                                  <Typography variant="body2" sx={{ color: crushAIColors.text.primary, fontSize: "0.85rem" }}>
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
                                    bgcolor: `rgba(165,204,243,0.1)`,
                                    border: `1px solid rgba(165,204,243,0.2)`,
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
                        </Box>
                      </Box>

                      <Box 
                        sx={{ 
                          display: "flex", 
                          alignItems: "flex-start", 
                          gap: 3,
                          bgcolor: 'rgba(255, 240, 240, 0.3)',
                          p: 3,
                          borderRadius: 2,
                          border: '1px solid rgba(255, 200, 200, 0.2)'
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
                              color: '#444',
                              bgcolor: 'rgba(255, 240, 240, 0.7)',
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
                              color: '#444', 
                              lineHeight: 1.6,
                              bgcolor: 'rgba(255, 240, 240, 0.7)',
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
    </WaveBackground>
  );
};
