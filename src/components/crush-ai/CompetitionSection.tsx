
import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const CompetitionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const features = [
    {
      id: 1,
      name: "Real-time Documentation",
      crush: true,
      competitors: { a: false, b: "partial", c: false }
    },
    {
      id: 2,
      name: "Zero Setup Time",
      crush: true,
      competitors: { a: false, b: false, c: false }
    },
    {
      id: 3,
      name: "Auto Note Generation",
      crush: true,
      competitors: { a: true, b: true, c: true }
    },
    {
      id: 4,
      name: "Automated Clinical Decision Support",
      crush: true,
      competitors: { a: false, b: "partial", c: false }
    },
    {
      id: 5,
      name: "Automatic Workflows",
      crush: true,
      competitors: { a: false, b: false, c: "partial" }
    },
    {
      id: 6,
      name: "$99 Starting Price",
      crush: true,
      competitors: { a: false, b: false, c: false }
    }
  ];

  // Improved rendering for status cells
  const renderStatus = (status: boolean | string) => {
    if (status === true) {
      return (
        <div className="flex justify-center">
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
            <Check className="h-5 w-5 text-green-600" />
          </span>
        </div>
      );
    } else if (status === "partial") {
      return (
        <div className="flex justify-center">
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
          </span>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center">
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100">
            <X className="h-5 w-5 text-red-600" />
          </span>
        </div>
      );
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
        position: "relative"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              mb: 2,
              color: crushAIColors.text.primary
            }}
          >
            Why CRUSH Crushes the Competition
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: crushAIColors.text.secondary,
              maxWidth: "800px",
              mx: "auto"
            }}
          >
            See how CRUSH AI compares to other clinical documentation solutions
          </Typography>
        </Box>

        <ContainerScroll
          titleComponent={
            <div className="max-w-5xl mx-auto text-center">
              <div className={cn(
                "text-2xl md:text-4xl font-bold",
                "bg-clip-text text-transparent bg-gradient-to-r",
                "from-blue-500 to-purple-500",
                "transition-all duration-500"
              )}>
                Compare Features
              </div>
              <div className="text-base md:text-lg text-gray-500 mt-4">
                Drag to scroll and see all feature comparisons
              </div>
            </div>
          }
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{ p: { xs: 2, md: 4 } }}
          >
            <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-lg bg-white">
              <Table className="w-full">
                <TableHeader className="bg-gray-50/70">
                  <TableRow className="hover:bg-gray-50/90 transition-colors">
                    <TableHead className="w-1/3 py-4 text-base font-medium text-gray-900">Feature</TableHead>
                    <TableHead className="w-1/6 py-4 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-blue-600">C</span>
                        </div>
                        <span className="text-blue-900 font-semibold">CRUSH AI</span>
                      </div>
                    </TableHead>
                    <TableHead className="w-1/6 py-4 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-600">A</span>
                        </div>
                        <span className="text-gray-900 font-medium">Competitor A</span>
                      </div>
                    </TableHead>
                    <TableHead className="w-1/6 py-4 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-600">B</span>
                        </div>
                        <span className="text-gray-900 font-medium">Competitor B</span>
                      </div>
                    </TableHead>
                    <TableHead className="w-1/6 py-4 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-600">C</span>
                        </div>
                        <span className="text-gray-900 font-medium">Competitor C</span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow 
                      key={feature.id} 
                      className={index % 2 === 0 ? "bg-white hover:bg-blue-50/30" : "bg-blue-50/10 hover:bg-blue-50/30"}
                    >
                      <TableCell className="py-4 font-medium text-gray-900">{feature.name}</TableCell>
                      <TableCell>
                        {renderStatus(feature.crush)}
                      </TableCell>
                      <TableCell>
                        {renderStatus(feature.competitors.a)}
                      </TableCell>
                      <TableCell>
                        {renderStatus(feature.competitors.b)}
                      </TableCell>
                      <TableCell>
                        {renderStatus(feature.competitors.c)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="text-center mt-6 text-sm text-gray-500">
              *Based on publicly available information as of April 2023
            </div>
          </Box>
        </ContainerScroll>
      </Container>
    </Box>
  );
};
