
import React from 'react';
import { useNavigate } from "react-router-dom";
import OptimizedImage from "@/components/ui/optimized-image";
import { ChevronRight } from "lucide-react";
import GastroIllustration from '@/components/case-studies/custom-illustrations/GastroIllustration';
import IntakeQIllustration from '@/components/case-studies/custom-illustrations/IntakeQIllustration';
import MultiProviderIllustration from '@/components/case-studies/custom-illustrations/MultiProviderIllustration';

const caseStudies = [
  { folder: "100-accuracy-in-nordic-languages-fast-documentation", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/case-studies/nordic-languages.svg" },
  { folder: "80-faster-documentation-with-osmind-ehr-integration", title: "80% Faster Documentation with OSMIND EHR Integration", description: "S10.AI integrates with OSMIND EHR to reduce documentation time by 80%, increasing clinician efficiency.", image: "/case-studies/osmind-integration.svg" },
  { folder: "family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4", title: "Family Medicine Practitioner In Canada Moved To S10.AI From GPT4", description: "Learn how a Canadian doctor improved their practice with S10.AI", image: "/case-studies/family-medicine.svg" },
  { folder: "how-s10-ai-medical-scribe-assistant-improves-epic-usability", title: "How S10 AI Medical Scribe Assistant Improves EPIC Usability", description: "Optimize EPIC with AI-powered efficiency.", image: "/case-studies/epic-integration.svg" },
  { folder: "improving-patient-care-with-s10-ai-ai-medical-scribe", title: "Improving Patient Care With S10.AI AI Medical Scribe", description: "Focus more on patients, less on paperwork with AI assistance", image: "/case-studies/patient-care.svg" },
  { folder: "physician-earns-five-thousand-dollars-per-month", title: "Physician Earns $5,311 Per Month More with S10.AI Medical Scribe", description: "Boost revenue with efficient and accurate AI scribing.", image: "/case-studies/revenue-growth.svg" },
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/case-studies/epic-integration.svg", useCustomIllustration: true, illustrationType: "gastro" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "S10.AI Saves 2+ Hours Daily for Multi-Provider Practices", description: "S10.AI enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/case-studies/patient-care.svg", useCustomIllustration: true, illustrationType: "multiProvider" },
  { folder: "crush-intake-q-transforming-dr-strotman-practice", title: "S10.AI & INTAKE Q: Transforming Dr. Strotman's Practice", description: "S10.AI integrates seamlessly with INTAKE Q to automate documentation, saving time and improving efficiency.", image: "/case-studies/osmind-integration.svg", useCustomIllustration: true, illustrationType: "intakeQ" },
  { folder: "revolutionizing-functional-medicine-with-crush", title: "Revolutionizing Functional Medicine with S10.AI", description: "S10.AI streamlines documentation in functional and longevity medicine, enhancing patient care and practice efficiency.", image: "/case-studies/functional-medicine.svg" },
  { folder: "physician-saves-twenty-one-thousand-dollars-yearly", title: "Physician saves $21,144 yearly", description: "Cut costs by replacing traditional scribes with S10.AI Medical Scribe.", image: "/case-studies/cost-savings-improved.svg" },
  { folder: "physician-saves-seventeen-thousand-dollars-yearly", title: "Physician saves $17,796 yearly", description: "Eliminate transcription costs with S10.AI Medical Scribe.", image: "/case-studies/transcription-savings-improved.svg" },
  { folder: "alaska-therapy", title: "The Wasilla, Alaska Hospital Automated Their Therapy Notes With S10.AI", description: "Learn how a small hospital in Alaska improved documentation in just one week", image: "/case-studies/nordic-languages.svg" },
];

const CaseStudy = () => {
  const navigate = useNavigate();
  
  const renderCaseStudyImage = (caseStudy) => {
    if (caseStudy.useCustomIllustration) {
      if (caseStudy.illustrationType === "gastro") {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <GastroIllustration />
          </div>
        );
      } else if (caseStudy.illustrationType === "intakeQ") {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <IntakeQIllustration />
          </div>
        );
      } else if (caseStudy.illustrationType === "multiProvider") {
        return (
          <div className="w-full h-full flex items-center justify-center">
            <MultiProviderIllustration />
          </div>
        );
      }
    }
    
    return (
      <OptimizedImage
        src={caseStudy.image}
        alt={caseStudy.title}
        className="w-full h-full object-contain max-h-[400px] transition-transform duration-500 hover:scale-105"
      />
    );
  };

  // Featured case study - using a case study with custom illustration
  const featuredCaseStudy = caseStudies.find(cs => cs.useCustomIllustration) || caseStudies[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50 pt-24">
      {/* Hero Section with Featured Case Study */}
      <section className="py-12 md:py-20" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #A5CCF3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how healthcare providers are transforming their practices with our AI solutions
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{featuredCaseStudy.title}</h2>
              <p className="text-lg text-gray-600">{featuredCaseStudy.description}</p>
              
              <button 
                onClick={() => navigate(`/resources/casestudies/${featuredCaseStudy.folder}`)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white rounded-md transition-colors"
              >
                Read Full Case Study <ChevronRight size={18} />
              </button>
            </div>
            <div className="md:w-1/2 p-6 flex items-center justify-center bg-white">
              <div className="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
                {renderCaseStudyImage(featuredCaseStudy)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Explore All Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.folder} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-2 transition-transform duration-300" 
                onClick={() => navigate(`/resources/casestudies/${caseStudy.folder}`)}
              >
                <div className="h-52 overflow-hidden bg-white p-4 flex items-center justify-center">
                  {renderCaseStudyImage(caseStudy)}
                </div>
                <div className="p-6 flex flex-col min-h-[12rem]">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{caseStudy.description}</p>
                  <div className="mt-auto pt-4 flex justify-end border-t border-gray-100">
                    <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                      Read more <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
