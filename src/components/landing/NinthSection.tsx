
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowUpRight, Bulb, Shield, Award, Rocket } from "lucide-react"; // Only use allowed icons
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
    Bulb,   // Science-Driven AI
    Shield, // Cross-Lingual Precision
    Award,  // Clinician-Centric
    Rocket, // Seamless Automation
  ];

  // Increased card size for better readability
  const cardWidth = 380;
  const cardHeight = 300;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #143151, #387E89)",
        width: "100%",
        padding: "48px 24px"
      }}
    >
      <Stack
        spacing={3}
        direction="column"
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center" },
          mb: 5
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
              fontSize: { xs: "1.28rem", sm: "1.34rem", md: "1.45rem" }
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
              fontSize: { xs: "0.99rem", sm: "1.10rem" }
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
          gap={32}
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
                transition={{ duration: 0.36, delay: (index % 4) * 0.06 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: '100%',
                    minHeight: cardHeight,
                    minWidth: cardWidth,
                    maxWidth: cardWidth,
                    background: "#FFF",
                    borderRadius: 3,
                    p: { xs: 3.5, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 18px 0px rgba(20, 49, 81, 0.06)",
                    border: "1px solid #E0E0E0",
                    cursor: "pointer",
                    "&:hover": {
                      background: "linear-gradient(135deg, #143151, #387E89)",
                      ".title": { color: "#FFF" },
                      ".description": { color: "#FFF", opacity: 1 },
                      ".icon-gradient": {
                        background: "linear-gradient(135deg, #143151, #387E89)"
                      },
                      ".icon-svg": {
                        color: "#FFF"
                      }
                    },
                  }}
                >
                  <Box className="icon-gradient" sx={{
                    alignSelf: "center",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #143151, #387E89)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 10px 0px #14315130",
                    mb: 2.5,
                  }}>
                    <Icon className="icon-svg" size={30} color="#FFF" />
                  </Box>
                  <Typography
                    className="title"
                    variant="h6"
                    fontWeight={700}
                    sx={{
                      color: "#143151",
                      transition: "color 0.3s",
                      textAlign: "center",
                      mb: 2,
                      fontSize: { xs: "1.15rem", sm: "1.25rem" }
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
                      mb: 2.5,
                      fontSize: { xs: "1rem", sm: "1.05rem" },
                      lineHeight: 1.7
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
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#387E89",
                      fontSize: "1.3rem",
                      boxShadow: "0 1px 6px 0px rgba(20, 49, 81, 0.06)",
                      mb: 0.5
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

