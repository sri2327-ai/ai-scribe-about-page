
import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <Box className="mx-auto rounded-2xl bg-gradient-to-r from-[#143151] to-[#387E89] p-6 md:p-12 text-center shadow-xl">
        <Typography 
          variant="h3" 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight"
        >
          <strong>9 out of 10 providers</strong> adopt both the{" "}
          <span className="text-pink-500">CRUSH AI Medical Scribe</span> and{" "}
          <span className="text-pink-500">AI Agent BRAVO</span>
          <br className="hidden md:block" />
          —saving time, reducing stress, addressing staffing shortages, and delivering superior patient care.
        </Typography>
        
        <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 md:px-6 md:py-3 text-base md:text-lg bg-white text-[#143151] hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl hover:scale-105">
          Book A Demo
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </Box>
    </section>
  );
};

export default PromoBanner;
