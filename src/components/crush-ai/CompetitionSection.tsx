
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy, ChevronRight, FileText, Copy, Import, FilePlus, Database, Users } from "lucide-react";
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
  const [activeFeature, setActiveFeature] = React.useState<string>("accuracy");

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#FFFFFF",
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
              colors={{ first: "#0EA5E9", second: "#1EAEDB" }}
              sparklesCount={20}
              textColor="black"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#333333",
              fontWeight: 400,
              mb: 4
            }}
          >
            Other AI scribes talk a big game, but they're basically glorified typewriters.
            C.R.U.S.H. is in a league of its own, with features that redefine what an AI medical scribe can do.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
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
                      color: activeFeature === feature.id ? "#333333" : "#8E9196",
                      letterSpacing: "0.01em"
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <ChevronRight 
                    size={16} 
                    className={activeFeature === feature.id ? "text-purple-400" : "text-gray-500"} 
                    strokeWidth={2}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              bgcolor: "rgba(249,250,252,0.8)",
              borderRadius: 2,
              p: 4,
              border: "1px solid rgba(155,135,245,0.3)",
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
                  <Trophy size={22} className="text-purple-400 mr-2" stroke="#000000" strokeWidth={1.5} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: "#333333", letterSpacing: "0.02em" }}>
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
                      <CheckCircle size={20} className="text-purple-400" stroke="#000000" strokeWidth={1.5} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: "#333333" }}>
                        C.R.U.S.H.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555555", lineHeight: 1.6, letterSpacing: "0.01em" }}>
                        {feature.crushDescription}
                      </Typography>
                      
                      {/* Special additional content for the new Template Builder feature */}
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
                            { icon: <Copy size={16} />, text: "Generate from your instructions" },
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
                                bgcolor: "rgba(155,135,245,0.05)",
                                border: "1px solid rgba(155,135,245,0.1)"
                              }}
                            >
                              <Box sx={{ 
                                color: "#9b87f5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}>
                                {item.icon}
                              </Box>
                              <Typography variant="body2" sx={{ color: "#333", fontSize: "0.85rem" }}>
                                {item.text}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}
                      
                      {/* Special additional content for the Specialty feature */}
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
                                bgcolor: "rgba(155,135,245,0.1)",
                                border: "1px solid rgba(155,135,245,0.2)",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                color: "#333"
                              }}
                            >
                              {specialty}
                            </Box>
                          ))}
                        </Box>
                      )}
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
                      <XCircle size={20} className="text-red-400" stroke="#000000" strokeWidth={1.5} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: "#333333" }}>
                        Other AI Scribes
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555555", lineHeight: 1.6, letterSpacing: "0.01em" }}>
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
