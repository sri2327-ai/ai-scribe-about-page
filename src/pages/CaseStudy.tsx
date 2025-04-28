
import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "@/styles/casestudy.module.scss";
import OptimizedImage from "@/components/ui/optimized-image";
import { ChevronRight } from "lucide-react";

const caseStudies = [
  { folder: "100-accuracy-in-nordic-languages-fast-documentation", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/ImprovePatientCare.webp" },
  { folder: "80-faster-documentation-with-osmind-ehr-integration", title: "80% Faster Documentation with OSMIND EHR Integration", description: "CRUSH integrates with OSMIND EHR to reduce documentation time by 80%, increasing clinician efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4", title: "Family Medicine Practitioner In Canada Moved To S10.AI From GPT4", description: "Learn how a Canadian doctor improved their practice with S10.AI", image: "/ImprovePatientCare.webp" },
  { folder: "how-s10-ai-medical-scribe-assistant-improves-epic-usability", title: "How S10 AI Medical Scribe Assistant Improves EPIC Usability", description: "Optimize EPIC with AI-powered efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "improving-patient-care-with-s10-ai-ai-medical-scribe", title: "Improving Patient Care With S10.AI AI Medical Scribe", description: "Focus more on patients, less on paperwork with AI assistance", image: "/ImprovePatientCare.webp" },
  { folder: "physician-earns-five-thousand-dollars-per-month", title: "Physician Earns $5,311 Per Month More with Crush AI Medical Scribe", description: "Boost revenue with efficient and accurate AI scribing.", image: "/ImprovePatientCare.webp" },
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices", description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-intake-q-transforming-dr-strotman-practice", title: "CRUSH & INTAKE Q: Transforming Dr. Strotman's Practice", description: "CRUSH integrates seamlessly with INTAKE Q to automate patient intake and documentation, saving time and improving efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "revolutionizing-functional-medicine-with-crush", title: "Revolutionizing Functional Medicine with CRUSH", description: "CRUSH streamlines documentation in functional and longevity medicine, enhancing patient care and practice efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "physician-saves-twenty-one-thousand-dollars-yearly", title: "Physician saves $21,144 yearly", description: "Cut costs by replacing traditional scribes with Crush AI Medical Scribe.", image: "/ImprovePatientCare.webp" },
  { folder: "physician-saves-seventeen-thousand-dollars-yearly", title: "Physician saves $17,796 yearly", description: "Eliminate transcription costs with Crush S10.AI Medical Scribe.", image: "/ImprovePatientCare.webp" },
  { folder: "how-the-s10-ai-medical-scribe-assistant-transforms-epic-ehr-usability", title: "How the S10 AI Medical Scribe Assistant Transforms EPIC EHR Usability", description: "Streamline workflows and reduce documentation burden.", image: "/ImprovePatientCare.webp" },
];

const CaseStudy = () => {
  const navigate = useNavigate();

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
          
          <div className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">100% Accuracy in Nordic Languages – Fast Documentation</h2>
              <p className="text-lg text-gray-600">AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.</p>
              
              <button 
                onClick={() => navigate(`/resources/casestudies/100-accuracy-in-nordic-languages-fast-documentation`)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Read Full Case Study <ChevronRight size={18} />
              </button>
            </div>
            <div className={styles.featuredImage}>
              <OptimizedImage
                src="/ImprovePatientCare.webp"
                alt="Featured Case Study"
                className="w-full h-full object-cover rounded-xl"
              />
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
                <div className="h-48 overflow-hidden">
                  <OptimizedImage
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col h-56">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{caseStudy.description}</p>
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
