
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
        bgcolor: "#ffffff",
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
              colors={{ first: "#1EAEDB", second: "#8B5CF6" }}
              sparklesCount={15}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#403E43",
              fontWeight: 400,
              mb: 4
            }}
          >
            Other AI scribes talk a big game, but they're basically glorified typewriters.
            C.R.U.S.H. is in a league of its own, with features that redefine what an AI medical scribe can do.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* Feature List */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              borderRight: { md: "1px solid rgba(0,0,0,0.1)" },
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
                  mb: 1,
                  bgcolor: activeFeature === feature.id ? "rgba(30,174,219,0.1)" : "transparent",
                  borderLeft: activeFeature === feature.id ? "3px solid #1EAEDB" : "3px solid transparent",
                  transition: "all 0.2s ease"
                }}
                onClick={() => setActiveFeature(feature.id)}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <ChevronRight size={16} className={activeFeature === feature.id ? "text-blue-500" : "text-gray-400"} />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Comparison Details */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              bgcolor: "rgba(250,250,250,0.8)",
              borderRadius: 2,
              p: 4,
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
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Trophy size={24} className="text-yellow-500 mr-2" />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#1EAEDB" }}>
                    {feature.title}
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "flex", mb: 3, alignItems: "flex-start", gap: 2 }}>
                    <Box 
                      sx={{ 
                        bgcolor: "#f0f9ff", 
                        p: 1, 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle size={20} className="text-green-600" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        C.R.U.S.H.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#444" }}>
                        {feature.crushDescription}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box 
                      sx={{ 
                        bgcolor: "#fff1f2", 
                        p: 1, 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <XCircle size={20} className="text-red-500" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Other AI Scribes
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#444" }}>
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
