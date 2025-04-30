import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
import GastroIllustration from "@/components/case-studies/custom-illustrations/GastroIllustration";
import IntakeQIllustration from "@/components/case-studies/custom-illustrations/IntakeQIllustration";
import MultiProviderIllustration from "@/components/case-studies/custom-illustrations/MultiProviderIllustration";

type CaseStudy = {
  folder: string;
  title: string;
  description: string;
  image?: string;
  useCustomIllustration?: boolean;
  illustrationType?: "gastro" | "intakeQ" | "multiProvider";
};

const caseStudies: CaseStudy[] = [
  { folder: "100-accuracy-in-nordic-languages-fast-documentation", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/case-studies/nordic-languages.svg" },
  { folder: "80-faster-documentation-with-osmind-ehr-integration", title: "80% Faster Documentation with OSMIND EHR Integration", description: "S10.AI integrates with OSMIND EHR to reduce documentation time by 80%, increasing clinician efficiency.", image: "/case-studies/osmind-integration.svg" },
  { folder: "physician-earns-five-thousand-dollars-per-month", title: "Physician Earns $5,311 Per Month More", description: "Boost revenue with efficient and accurate AI scribing from S10.AI Medical Scribe.", image: "/case-studies/revenue-growth.svg" },
  { folder: "improving-patient-care-with-s10-ai-ai-medical-scribe", title: "Improving Patient Care With S10.AI", description: "Focus more on patients, less on paperwork with AI assistance.", image: "/case-studies/patient-care.svg" },
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", useCustomIllustration: true, illustrationType: "gastro" },
  { folder: "crush-intake-q-transforming-dr-strotman-practice", title: "S10.AI & INTAKE Q: Transforming Dr. Strotman's Practice", description: "S10.AI integrates seamlessly with INTAKE Q to automate documentation.", useCustomIllustration: true, illustrationType: "intakeQ" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "S10.AI Saves 2+ Hours Daily for Multi-Provider Practices", description: "Enhance workflow and save valuable time with S10.AI.", useCustomIllustration: true, illustrationType: "multiProvider" },
  { folder: "physician-saves-twenty-one-thousand-dollars-yearly", title: "Physician saves $21,144 yearly", description: "Cut costs by replacing traditional scribes with S10.AI Medical Scribe.", image: "/case-studies/cost-savings-improved.svg" },
  { folder: "physician-saves-seventeen-thousand-dollars-yearly", title: "Physician saves $17,796 yearly", description: "Eliminate transcription costs with S10.AI Medical Scribe.", image: "/case-studies/transcription-savings-improved.svg" },
  { folder: "alaska-therapy", title: "The Wasilla, Alaska Hospital Automated Their Therapy Notes With S10.AI", description: "Learn how a small hospital in Alaska improved documentation in just one week", image: "/case-studies/alaska-therapy.svg" },
];

const StunningCaseStudies = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const renderCaseStudyImage = (caseStudy: CaseStudy) => {
    if (caseStudy.useCustomIllustration) {
      if (caseStudy.illustrationType === "gastro") {
        return <GastroIllustration />;
      } else if (caseStudy.illustrationType === "intakeQ") {
        return <IntakeQIllustration />;
      } else if (caseStudy.illustrationType === "multiProvider") {
        return <MultiProviderIllustration />;
      }
    }
    
    return (
      <OptimizedImage
        src={caseStudy.image}
        alt={caseStudy.title}
        className="object-contain w-full h-full max-h-[180px]"
      />
    );
  };

  const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col"
      onClick={(event) => {
        const url = `/resources/casestudies/${caseStudy.folder}`;
        if (event.metaKey || event.ctrlKey) {
          window.open(url, "_blank");
        } else {
          navigate(url);
        }
      }}
    >
      <div className="relative h-48 p-4 bg-white flex items-center justify-center overflow-hidden">
        {renderCaseStudyImage(caseStudy)}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#143151] line-clamp-2">
          {caseStudy.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
          {caseStudy.description}
        </p>
        <div className="flex items-center text-[#387E89] text-sm font-medium hover:text-[#143151] transition-colors mt-auto">
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 md:px-6 py-6 md:py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#143151] mb-2 sm:mb-3">Case Studies</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover how healthcare providers are transforming their practices and improving patient care with S10.AI.
          </p>
        </div>
        
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
            controlsBelow={true}
            itemHeight={380}
            gap={16}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
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
