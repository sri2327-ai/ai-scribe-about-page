
import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <Box className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-[#143151] to-[#387E89] p-8 md:p-12 text-center shadow-xl">
        <Typography 
          variant="h3" 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight"
        >
          <strong>9 out of 10 providers</strong> adopt both the{" "}
          <span className="text-yellow-300">CRUSH AI Medical Scribe</span> and{" "}
          <span className="text-yellow-300">AI Agent BRAVO</span>
          <br className="hidden md:block" />
          —saving time, reducing stress, addressing staffing shortages, and delivering superior patient care.
        </Typography>
        
        <button className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg bg-white text-[#143151] hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl hover:scale-105">
          Book A Demo
          <ArrowRight className="w-5 h-5" />
        </button>
      </Box>
    </section>
  );
};

export default PromoBanner;
