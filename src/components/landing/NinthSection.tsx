
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Shield, Award, Rocket } from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

export const NinthSection = () => {
  const cards = [
    {
      title: "Science-Driven AI",
      description:
        "Truth-first, responsible AI powered by S10's patented IPKO for smarter automation. Specialty-specific medical terminology understanding.",
      link: "/technology",
    },
    {
      title: "Cross-Lingual Precision",
      description:
        "Advanced ASR and AI-powered speech-to-text for healthcare, offering unparalleled accuracy in speech recognition. Clinically validated accuracy rates of 98%+.",
      link: "/specialty",
    },
    {
      title: "Clinician-Centric",
      description:
        "AI that adapts to workflows, not disrupts them. Seamless integration with existing systems.",
      link: "/bravo",
    },
    {
      title: "Seamless Automation",
      description:
        "AI for physician workflows with robotic interoperability. Real-time EHR synchronization. Automated coding and billing optimization.",
      link: "/crush-ai",
    },
  ];

  // Icon mapping per card (in correct order)
  const iconMap = [
    Lightbulb,   // Science-Driven AI
    Shield,      // Cross-Lingual Precision
    Award,       // Clinician-Centric
    Rocket,      // Seamless Automation
  ];

  // Reduced card size for better UX
  const cardWidth = 320;
  const cardHeight = 340;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #143151, #387E89)",
        width: "100%",
        padding: "54px 0 54px 0",
      }}
    >
      <Stack
        spacing={3}
        direction="column"
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center" },
          mb: 5,
        }}
        useFlexGap
      >
        <Box sx={{ width: { xs: "100%", sm: "90%", md: "80%" }, mb: 1 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "white",
              mb: 1,
              textAlign: "center",
              fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.7rem" },
              letterSpacing: 0.5,
            }}
          >
            The S10.AI Competitive Edge
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "white",
              opacity: 0.85,
              textAlign: "center",
              fontSize: { xs: "1.05rem", sm: "1.18rem" },
            }}
          >
            Leading the Future of Healthcare AI
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ mb: 4, maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 } }}>
        <ResponsiveCarousel
          items={cards}
          columnsDesktop={3}
          columnsTablet={2}
          columnsMobile={1}
          gap={24}
          itemWidth={cardWidth}
          itemHeight={cardHeight}
          controlsBelow={true}
          showControls={true}
          renderItem={(card, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.36, delay: (index % 4) * 0.05 }}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.18 },
                }}
                style={{ height: "100%" }}
              >
                <Box
                  component="a"
                  href={card.link}
                  sx={{
                    height: "100%",
                    width: "100%",
                    background: "#FFF",
                    borderRadius: 3,
                    p: { xs: 4, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    boxShadow: "0 4px 22px 0px rgba(20, 49, 81, 0.09)",
                    border: "1px solid #E0E0E0",
                    cursor: "pointer",
                    transition: "all 0.34s",
                    overflow: "hidden",
                    textDecoration: "none",
                    position: "relative",
                    "&:hover": {
                      background: "linear-gradient(135deg, #143151, #387E89)",
                      ".title": { color: "#FFF" },
                      ".description": { color: "#FFF", opacity: 1 },
                      ".icon-gradient": {
                        background: "linear-gradient(135deg, #387E89, #143151)",
                      },
                      ".icon-svg": {
                        color: "#FFF",
                        filter: "drop-shadow(0 4px 12px #387E8966)",
                      },
                      ".arrow-icon": {
                        transform: "translate(-8px, -8px)",
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-gradient"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #143151, #387E89)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 3px 20px 0px #14315126",
                      mb: 3,
                    }}
                  >
                    <Icon
                      className="icon-svg"
                      size={32}
                      color="#FFF"
                      strokeWidth={2}
                    />
                  </Box>
                  <Typography
                    className="title"
                    variant="h6"
                    component="h3"
                    sx={{
                      color: "#143151",
                      fontSize: { xs: "1.25rem", sm: "1.35rem" },
                      fontWeight: 600,
                      textAlign: "center",
                      transition: "color 0.34s",
                      mb: 2,
                      px: 2,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    className="description"
                    variant="body1"
                    sx={{
                      color: "#386381",
                      opacity: 0.93,
                      transition: "all 0.32s",
                      textAlign: "center",
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      lineHeight: 1.6,
                      px: 3,
                      mb: 3,
                    }}
                  >
                    {card.description}
                  </Typography>
                  
                  {/* Arrow icon to indicate link */}
                  <Box
                    className="arrow-icon"
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      right: 16,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      opacity: 0.7,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-blue-800 group-hover:text-white"
                      strokeWidth={2.5}
                    />
                  </Box>
                </Box>
              </motion.div>
            );
          }}
        />
      </Box>
    </section>
  );
};

export default NinthSection;
