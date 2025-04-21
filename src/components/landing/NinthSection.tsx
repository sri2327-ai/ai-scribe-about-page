import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

export const NinthSection = () => {
  const theme = useTheme();
  const isMobTabScr = useMediaQuery("(max-width:900px)");
  const MotionBox = motion(Box);

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
        }}
        useFlexGap
      >
        <Box sx={{ width: { xs: "100%", sm: "90%", md: "80%" }, mb: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              color: "white",
              mb: 0.5,
              textAlign: "center",
              fontSize: { xs: "1.02rem", sm: "1.12rem", md: "1.20rem" }
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
              fontSize: { xs: "0.95rem", sm: "1.02rem" }
            }}
          >
            Leading the Future of Healthcare AI
          </Typography>
        </Box>
        <Button
          variant="text"
          sx={{
            textTransform: "capitalize",
            background: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.white}`,
            px: 3,
            py: 1.5,
            borderRadius: "50px",
            "&:hover": {
              ".icon-box": {
                transform: "rotate(-270deg)",
                color: "white",
                borderColor: "white",
              },
              ".button-text": {
                color: "white",
              },
              background: "linear-gradient(135deg, #143151, #387E89)",
            },
            boxShadow: 1,
          }}
          startIcon={
            <Box
              className="icon-box"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 25,
                height: 25,
                borderRadius: "50%",
                color: "#143151",
                border: `2px solid #143151`,
                transition: "transform 0.3s ease",
                transform: "rotate(0deg)",
                mr: 1,
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </Box>
          }
        >
          <Typography
            className="button-text"
            variant="subtitle1"
            fontWeight="semiBold"
            sx={{
              color: "#143151",
              transition: "color 0.3s ease",
              fontSize: { xs: "1rem", sm: "1.08rem" }
            }}
          >
            View More
          </Typography>
        </Button>
      </Stack>

      <ResponsiveCarousel
        items={cards}
        columnsDesktop={4}
        columnsTablet={2}
        columnsMobile={1}
        gap={24}
        renderItem={(card, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            style={{ height: "100%" }}
          >
            <Box
              sx={{
                height: "100%",
                minHeight: "280px",
                background: "white",
                borderRadius: 3,
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #143151, #387E89)",
                  ".title": { color: "white" },
                  ".description": { color: "white", opacity: 1 },
                  ".icon-box": { transform: "rotate(360deg)", color: "white" },
                },
              }}
            >
              <Typography
                className="title"
                variant="h6"
                fontWeight={600}
                sx={{
                  color: "black",
                  transition: "color 0.3s ease",
                  textAlign: "center",
                  mb: 2,
                  fontSize: { xs: "1rem", sm: "1.15rem" }
                }}
              >
                {card.title}
              </Typography>
              <Typography
                className="description"
                variant="body2"
                sx={{
                  color: "black",
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  mb: 2,
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
                  width: 25,
                  height: 25,
                  color: "black",
                  transition: "all 0.3s ease",
                  transform: "rotate(0deg)",
                }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </Box>
            </Box>
          </motion.div>
        )}
      />
    </section>
  );
};
export default NinthSection;
