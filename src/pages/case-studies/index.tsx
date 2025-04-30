
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import OptimizedImage from "@/components/ui/optimized-image";
import GastroIllustration from '@/components/case-studies/custom-illustrations/GastroIllustration';
import IntakeQIllustration from '@/components/case-studies/custom-illustrations/IntakeQIllustration';
import MultiProviderIllustration from '@/components/case-studies/custom-illustrations/MultiProviderIllustration';

type CaseStudy = {
  title: string;
  description: string;
  path: string;
  image?: string;
  useCustomIllustration?: boolean;
  illustrationType?: "gastro" | "intakeQ" | "multiProvider";
};

const caseStudies: CaseStudy[] = [
  {
    title: "How S10.AI Medical Scribe Assistant Improves EPIC Usability",
    description: "Optimize EPIC with AI-powered efficiency",
    path: "/resources/casestudies/how-s10-ai-medical-scribe-assistant-improves-epic-usability",
    image: "/case-studies/epic-integration.svg"
  },
  {
    title: "Family Medicine Practitioner In Canada Moved To S10.AI From GPT4",
    description: "Learn how a Canadian doctor improved their practice with S10.AI",
    path: "/resources/casestudies/family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4",
    image: "/case-studies/family-medicine.svg"
  },
  {
    title: "Improving Patient Care With S10.AI Medical Scribe",
    description: "Focus more on patients, less on paperwork with AI assistance",
    path: "/resources/casestudies/improving-patient-care-with-s10-ai-ai-medical-scribe",
    image: "/case-studies/patient-care.svg"
  },
  {
    title: "Physician Earns $5,311 Per Month More with S10.AI Medical Scribe",
    description: "Boost revenue with efficient and accurate AI scribing",
    path: "/resources/casestudies/physician-earns-five-thousand-dollars-per-month",
    image: "/case-studies/revenue-growth.svg"
  },
  {
    title: "Physician saves $21,144 yearly",
    description: "Cut costs by replacing traditional scribes with S10.AI Medical Scribe",
    path: "/resources/casestudies/physician-saves-twenty-one-thousand-dollars-yearly",
    image: "/case-studies/cost-savings-improved.svg"
  },
  {
    title: "Physician saves $17,796 yearly",
    description: "Eliminate transcription costs with S10.AI Medical Scribe",
    path: "/resources/casestudies/physician-saves-seventeen-thousand-dollars-yearly",
    image: "/case-studies/transcription-savings-improved.svg"
  },
  {
    title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists",
    description: "How S10.AI helps gastroenterologists save time on documentation",
    path: "/resources/casestudies/save-2-hours-daily-ai-efficiency-for-gastroenterologists",
    useCustomIllustration: true,
    illustrationType: "gastro"
  },
  {
    title: "The Wasilla, Alaska Hospital Automated Their Therapy Notes With S10.AI",
    description: "Learn how a small hospital in Alaska improved documentation in just one week",
    path: "/resources/casestudies/alaska-therapy",
    image: "/case-studies/nordic-languages.svg"
  },
  {
    title: "S10.AI Saves 2+ Hours Daily for Multi-Provider Practices",
    description: "S10.AI enhances workflow and saves over 2 hours daily for multi-provider practices",
    path: "/resources/casestudies/crush-saves-2-hours-daily-for-multi-provider-practices",
    useCustomIllustration: true,
    illustrationType: "multiProvider"
  },
  {
    title: "S10.AI & INTAKE Q: Transforming Dr. Strotman's Practice",
    description: "S10.AI integrates seamlessly with INTAKE Q to automate documentation",
    path: "/resources/casestudies/crush-intake-q-transforming-dr-strotman-practice",
    useCustomIllustration: true,
    illustrationType: "intakeQ"
  },
  {
    title: "Revolutionizing Functional Medicine with S10.AI",
    description: "S10.AI streamlines documentation in functional and longevity medicine",
    path: "/resources/casestudies/revolutionizing-functional-medicine-with-crush",
    image: "/case-studies/functional-medicine.svg"
  },
  {
    title: "100% Accuracy in Nordic Languages – Fast Documentation",
    description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors",
    path: "/resources/casestudies/100-accuracy-in-nordic-languages-fast-documentation",
    image: "/case-studies/nordic-languages.svg"
  }
];

const CaseStudiesIndex = () => {
  const renderCaseStudyImage = (study: CaseStudy) => {
    if (study.useCustomIllustration) {
      if (study.illustrationType === "gastro") {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <GastroIllustration />
          </div>
        );
      } else if (study.illustrationType === "intakeQ") {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <IntakeQIllustration />
          </div>
        );
      } else if (study.illustrationType === "multiProvider") {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <MultiProviderIllustration />
          </div>
        );
      }
    }
    
    return (
      <OptimizedImage 
        src={study.image} 
        alt={study.title}
        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50 pt-16 sm:pt-20 md:pt-24 pb-12 px-4 md:px-6">
      <Helmet>
        <title>Case Studies | S10.AI Medical Scribe</title>
        <meta name="description" content="Discover how healthcare providers are transforming their practices with S10.AI" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Case Studies
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl">
          Discover how healthcare providers are transforming their practices and improving patient care with S10.AI.
        </p>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.path} to={study.path} className="group">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-white p-4 flex items-center justify-center">
                  {renderCaseStudyImage(study)}
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#387E89] transition-colors line-clamp-2">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 flex-grow line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#387E89] font-medium group-hover:translate-x-1 transition-transform mt-auto">
                    Read More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesIndex;
