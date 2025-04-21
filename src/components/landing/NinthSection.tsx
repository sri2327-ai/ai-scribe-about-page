
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

  // Responsive card sizing
  const cardWidth = { xs: 300, sm: 350, md: 380, lg: 430 };
  const cardHeight = { xs: 380, sm: 400, md: 420, lg: 430 };

  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #143151, #387E89)",
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
          px: { xs: 2, sm: 3, md: 4 }
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

      <Box sx={{ mb: 4, maxWidth: "1450px", mx: "auto", px: { xs: 2, md: 4 } }}>
        <ResponsiveCarousel
          items={cards}
          columnsDesktop={3}
          columnsTablet={2}
          columnsMobile={1}
          gap={{ xs: 25, md: 45 }}
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
                    minHeight: { xs: 350, sm: 380, md: 400, lg: cardHeight.lg },
                    width: "100%",
                    maxWidth: { xs: "100%", sm: cardWidth.sm, md: cardWidth.md, lg: cardWidth.lg },
                    background: "#FFF",
                    borderRadius: { xs: 3, md: 4.5 },
                    p: { xs: 3, sm: 4, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    boxShadow: "0 4px 22px 0px rgba(20, 49, 81, 0.09)",
                    border: "1.5px solid #E0E0E0",
                    cursor: "pointer",
                    transition: "all 0.34s",
                    overflow: "hidden",
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
                  {/* Icon with correct proportions */}
                  <Box
                    className="icon-gradient"
                    sx={{
                      alignSelf: "center",
                      width: { xs: 60, sm: 70, md: 74 },
                      height: { xs: 60, sm: 70, md: 74 },
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #143151, #387E89)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 3px 20px 0px #14315126",
                      mb: { xs: 2.5, md: 3.5 },
                      mt: 0.5,
                    }}
                  >
                    <Icon
                      className="icon-svg"
                      size={{ xs: 36, sm: 40, md: 44 }}
                      color="#FFF"
                      strokeWidth={2.3}
                    />
                  </Box>
                  <Typography
                    className="title"
                    variant="h6"
                    component="h3"
                    fontWeight={700}
                    sx={{
                      color: "#143151",
                      fontSize: { xs: "1.2rem", sm: "1.33rem", md: "1.5rem" },
                      textAlign: "center",
                      transition: "color 0.34s",
                      mb: { xs: 2, md: 2.6 },
                      lineHeight: 1.29,
                      letterSpacing: 0.25,
                      maxWidth: "85%",
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
                      mb: { xs: 2.5, md: 3.7 },
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.16rem" },
                      lineHeight: 1.85,
                      maxWidth: { xs: "95%", md: 350 },
                      mx: "auto",
                      wordBreak: "break-word",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
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
                      width: { xs: 32, md: 38 },
                      height: { xs: 32, md: 38 },
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#387E89",
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                      boxShadow: "0 1px 7px 0px rgba(20, 49, 81, 0.05)",
                      mb: 0,
                      mt: "auto",
                    }}
                  >
                    <ArrowUpRight className={`h-${[5, 6][+(window.innerWidth >= 768)]} w-${[5, 6][+(window.innerWidth >= 768)]}`} />
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
