import React from "react";
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

const competitorsData = [
  {
    name: "DeepScribe",
    automaticNoteGeneration: true,
    ehrIntegration: false,
    ambientListening: true,
    customizableTemplates: false,
    realTimeUpdates: true,
  },
  {
    name: "Nuance DAX",
    automaticNoteGeneration: true,
    ehrIntegration: true,
    ambientListening: true,
    customizableTemplates: false,
    realTimeUpdates: false,
  },
  {
    name: "Abridge",
    automaticNoteGeneration: true,
    ehrIntegration: false,
    ambientListening: true,
    customizableTemplates: false,
    realTimeUpdates: true,
  },
  {
    name: "Suki",
    automaticNoteGeneration: true,
    ehrIntegration: true,
    ambientListening: true,
    customizableTemplates: false,
    realTimeUpdates: false,
  },
  {
    name: "Crush AI",
    automaticNoteGeneration: true,
    ehrIntegration: true,
    ambientListening: true,
    customizableTemplates: true,
    realTimeUpdates: true,
  },
];

export const CompetitionSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: crushAIColors.background.white,
        color: crushAIColors.text.primary,
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 2,
            }}
          >
            See How CRUSH AI Stacks Up Against the Competition
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: crushAIColors.text.secondary,
            }}
          >
            We offer a comprehensive solution tailored to meet the evolving needs
            of modern healthcare practices.
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table aria-label="competition comparison table" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem", color: crushAIColors.text.primary }}>
                  Competitor
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem", color: crushAIColors.text.primary }}>
                  Automatic Note Generation
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem", color: crushAIColors.text.primary }}>
                  EHR Integration
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem", color: crushAIColors.text.primary }}>
                  Ambient Listening
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem", color: crushAIColors.text.primary }}>
                  Customizable Templates
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem", color: crushAIColors.text.primary }}>
                  Real-Time Updates
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {competitorsData.map((competitor, index) => (
                <motion.tr
                  key={competitor.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <TableCell component="th" scope="row" sx={{ color: crushAIColors.text.primary }}>
                    {competitor.name}
                  </TableCell>
                  <TableCell align="center">
                    {competitor.automaticNoteGeneration ? (
                      <CheckCircle color="green" size={isMobile ? 20 : 24} />
                    ) : (
                      <XCircle color="red" size={isMobile ? 20 : 24} />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {competitor.ehrIntegration ? (
                      <CheckCircle color="green" size={isMobile ? 20 : 24} />
                    ) : (
                      <XCircle color="red" size={isMobile ? 20 : 24} />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {competitor.ambientListening ? (
                      <CheckCircle color="green" size={isMobile ? 20 : 24} />
                    ) : (
                      <XCircle color="red" size={isMobile ? 20 : 24} />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {competitor.customizableTemplates ? (
                      <CheckCircle color="green" size={isMobile ? 20 : 24} />
                    ) : (
                      <XCircle color="red" size={isMobile ? 20 : 24} />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {competitor.realTimeUpdates ? (
                      <CheckCircle color="green" size={isMobile ? 20 : 24} />
                    ) : (
                      <XCircle color="red" size={isMobile ? 20 : 24} />
                    )}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
