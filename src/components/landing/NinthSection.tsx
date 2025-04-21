
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Shield, Award, Rocket } from "lucide-react"; // icon names corrected
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

export const NinthSection = () => {
  const cards = [
    {
      title: "Science-Driven AI",
      description:
        "Truth-first, responsible AI powered by S10's patented IPKO for smarter automation. Specialty-specific medical terminology understanding.",
    },
    {
      title: "Cross-Lingual Precision",
      description:
        "Advanced ASR and AI-powered speech-to-text for healthcare, offering unparalleled accuracy in speech recognition. Clinically validated accuracy rates of 98%+.",
    },
    {
      title: "Clinician-Centric",
      description:
        "AI that adapts to workflows, not disrupts them. Seamless integration with existing systems.",
    },
    {
      title: "Seamless Automation",
      description:
        "AI for physician workflows with robotic interoperability. Real-time EHR synchronization. Automated coding and billing optimization.",
    },
  ];

  // Icon mapping per card (in correct order)
  const iconMap = [
    Lightbulb,   // Science-Driven AI
    Shield,      // Cross-Lingual Precision
    Award,       // Clinician-Centric
    Rocket,      // Seamless Automation
  ];

  // Make the cards larger for more breathing room
  const cardWidth = 410;
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

      <Box sx={{ mb: 4, maxWidth: "1450px", mx: "auto" }}>
        <ResponsiveCarousel
          items={cards}
          columnsDesktop={3}
          columnsTablet={2}
          columnsMobile={1}
          gap={36}
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
                  sx={{
                    height: "100%",
                    minHeight: cardHeight,
                    minWidth: cardWidth,
                    maxWidth: cardWidth,
                    background: "#FFF",
                    borderRadius: 3.5,
                    p: { xs: 4.7, sm: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    boxShadow: "0 4px 22px 0px rgba(20, 49, 81, 0.09)",
                    border: "1.5px solid #E0E0E0",
                    cursor: "pointer",
                    transition: "all 0.34s",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #143151, #387E89)",
                      ".title": { color: "#FFF" },
                      ".description": { color: "#FFF", opacity: 1 },
                      ".icon-gradient": {
                        background:
                          "linear-gradient(135deg, #387E89, #143151)",
                      },
                      ".icon-svg": {
                        color: "#FFF !important",
                        filter: "drop-shadow(0 4px 12px #387E8966)",
                      },
                    },
                  }}
                >
                  {/* Icon in vivid gradient circle */}
                  <Box
                    className="icon-gradient"
                    sx={{
                      alignSelf: "center",
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #143151, #387E89)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 14px 0px #14315126",
                      mb: 3.2,
                    }}
                  >
                    <Icon
                      className="icon-svg"
                      size={38}
                      color="#FFF"
                      strokeWidth={2.3}
                      style={{
                        display: "block",
                        margin: "auto",
                        background:
                          "linear-gradient(135deg, #143151, #387E89)",
                        borderRadius: "50%",
                        padding: 4,
                      }}
                    />
                  </Box>
                  <Typography
                    className="title"
                    variant="h6"
                    component="h3"
                    fontWeight={700}
                    sx={{
                      color: "#143151",
                      fontSize: { xs: "1.30rem", sm: "1.42rem" },
                      textAlign: "center",
                      transition: "color 0.34s",
                      mb: 2.3,
                      lineHeight: 1.28,
                      letterSpacing: 0.1,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    className="description"
                    variant="body2"
                    sx={{
                      color: "#386381",
                      opacity: 0.93,
                      transition: "all 0.32s",
                      textAlign: "center",
                      fontWeight: 400,
                      letterSpacing: 0.01,
                      mb: 3.2,
                      fontSize: { xs: "1.07rem", sm: "1.11rem" },
                      lineHeight: 1.77,
                      maxWidth: 320,
                      mx: "auto",
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    className="icon-box"
                    sx={{
                      alignSelf: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#387E89",
                      fontSize: "1.4rem",
                      boxShadow: "0 1px 7px 0px rgba(20, 49, 81, 0.05)",
                      mb: 0.8,
                    }}
                  >
                    <ArrowUpRight className="h-5 w-5" />
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
