
import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";

const caseStudies = [
  { folder: "100-accuracy-in-nordic-languages-fast-documentation", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/ImprovePatientCare.webp" },
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices", description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/ImprovePatientCare.webp" },
];

const StunningCaseStudies = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <Typography 
          variant="h2" 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent"
        >
          Success Stories from Our Clients
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.folder}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(event) => {
                const url = `/resources/casestudies/${caseStudy.folder}`;
                if (event.metaKey || event.ctrlKey) {
                  window.open(url, "_blank");
                } else {
                  navigate(url);
                }
              }}
            >
              <div className="relative h-40 md:h-48">
                <OptimizedImage
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#143151] line-clamp-2">
                  {caseStudy.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                  {caseStudy.description}
                </p>
                <div className="flex items-center text-[#387E89] text-sm md:text-base font-medium hover:text-[#143151] transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StunningCaseStudies;
