
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

  // Consistent card size
  const cardWidth = 315;
  const cardHeight = 235;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #143151, #387E89)",
        width: "100%",
        padding: "30px"
      }}
    >
      <Stack
        spacing={3}
        direction="column"
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center" },
          mb: 4
        }}
        useFlexGap
      >
        <Box sx={{ width: { xs: "100%", sm: "90%", md: "80%" }, mb: 1 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "white",
              mb: 0.5,
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

      <Box sx={{ mb: 2, maxWidth: "1320px", mx: "auto" }}>
        <ResponsiveCarousel
          items={cards}
          columnsDesktop={4}
          columnsTablet={2}
          columnsMobile={1}
          gap={24}
          itemWidth={cardWidth}
          itemHeight={cardHeight}
          controlsBelow={true}
          showControls={true}
          renderItem={(card, index) => (
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
                  p: { xs: 2.2, sm: 3 },
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
                    ".icon-box": { color: "#FFF" },
                  },
                }}
              >
                <Typography
                  className="title"
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: "#143151",
                    transition: "color 0.3s",
                    textAlign: "center",
                    mb: 1.3,
                    fontSize: { xs: "1.04rem", sm: "1.12rem" }
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
                    mb: 1.6,
                    fontSize: { xs: "0.98rem", sm: "1.04rem" },
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
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#F1F5F9",
                    color: "#387E89",
                    fontSize: "1.3rem",
                    boxShadow: "0 1px 6px 0px rgba(20, 49, 81, 0.06)",
                  }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Box>
              </Box>
            </motion.div>
          )}
        />
      </Box>
    </section>
  );
};
export default NinthSection;
