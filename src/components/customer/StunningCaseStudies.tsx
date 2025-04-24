
import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const caseStudies = [
  { folder: "100-accuracy-in-nordic-languages-fast-documentation", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/ImprovePatientCare.webp" },
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices", description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/ImprovePatientCare.webp" },
];

const StunningCaseStudies = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const CaseStudyCard = ({ caseStudy }: { caseStudy: typeof caseStudies[0] }) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer h-full"
      onClick={(event) => {
        const url = `/resources/casestudies/${caseStudy.folder}`;
        if (event.metaKey || event.ctrlKey) {
          window.open(url, "_blank");
        } else {
          navigate(url);
        }
      }}
    >
      <div className="relative h-36">
        <OptimizedImage
          src={caseStudy.image}
          alt={caseStudy.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-[#143151] line-clamp-2">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {caseStudy.description}
        </p>
        <div className="flex items-center text-[#387E89] text-sm font-medium hover:text-[#143151] transition-colors">
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 md:px-8 py-6 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <Typography 
          variant="h2" 
          className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent px-2"
        >
          Success Stories from Our Clients
        </Typography>

        {isMobile ? (
          <ResponsiveCarousel
            items={caseStudies}
            renderItem={(caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            )}
            columnsDesktop={1}
            columnsTablet={1}
            columnsMobile={1}
            autoPlay={true}
            showControls={true}
            controlsBelow={false}
            itemHeight={380}
            gap={16}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StunningCaseStudies;
