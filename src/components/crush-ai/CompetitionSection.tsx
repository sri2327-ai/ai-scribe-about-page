
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy, ChevronRight } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

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
  }
];

export const CompetitionSection = () => {
  const [activeFeature, setActiveFeature] = React.useState<string>("accuracy");

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#000000",
        overflow: "hidden"
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
          <Box sx={{ mb: 2 }}>
            <SparklesText 
              text="Why CRUSH Crushes the Competition" 
              className="text-4xl md:text-5xl font-bold text-center mb-6"
              colors={{ first: "#9b87f5", second: "#D6BCFA" }}
              sparklesCount={20}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#8E9196",
              fontWeight: 400,
              mb: 4
            }}
          >
            Other AI scribes talk a big game, but they're basically glorified typewriters.
            C.R.U.S.H. is in a league of its own, with features that redefine what an AI medical scribe can do.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          {/* Feature List */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              pr: { md: 4 }
            }}
          >
            {comparisonFeatures.map((feature) => (
              <Box
                key={feature.id}
                component={motion.div}
                initial={{ opacity: 0.7 }}
                whileHover={{ x: 5 }}
                sx={{
                  p: 2,
                  cursor: "pointer",
                  borderRadius: 1,
                  mb: 1.5,
                  bgcolor: activeFeature === feature.id ? "rgba(155,135,245,0.1)" : "transparent",
                  borderLeft: activeFeature === feature.id ? "2px solid #9b87f5" : "2px solid transparent",
                  transition: "all 0.2s ease"
                }}
                onClick={() => setActiveFeature(feature.id)}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 500, 
                      color: activeFeature === feature.id ? "#fff" : "#8E9196",
                      letterSpacing: "0.01em"
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <ChevronRight 
                    size={16} 
                    className={activeFeature === feature.id ? "text-purple-400" : "text-gray-500"} 
                  />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Comparison Details */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              bgcolor: "rgba(26,31,44,0.5)",
              borderRadius: 2,
              p: 4,
              border: "1px solid rgba(155,135,245,0.2)",
              backdropFilter: "blur(10px)"
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
                  <Trophy size={22} className="text-purple-400 mr-2" />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>
                    {feature.title}
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "flex", mb: 4, alignItems: "flex-start", gap: 2 }}>
                    <Box 
                      sx={{ 
                        bgcolor: "rgba(155,135,245,0.1)", 
                        p: 1, 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid rgba(155,135,245,0.3)"
                      }}
                    >
                      <CheckCircle size={20} className="text-purple-400" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: "#fff" }}>
                        C.R.U.S.H.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#8E9196", lineHeight: 1.6, letterSpacing: "0.01em" }}>
                        {feature.crushDescription}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box 
                      sx={{ 
                        bgcolor: "rgba(255,100,100,0.1)", 
                        p: 1, 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid rgba(255,100,100,0.3)"
                      }}
                    >
                      <XCircle size={20} className="text-red-400" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: "#fff" }}>
                        Other AI Scribes
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#8E9196", lineHeight: 1.6, letterSpacing: "0.01em" }}>
                        {feature.competitionDescription}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
