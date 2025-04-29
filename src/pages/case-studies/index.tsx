
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import OptimizedImage from "@/components/ui/optimized-image";

const caseStudies = [
  {
    title: "How CRUSH AI Medical Scribe Assistant Improves EPIC Usability",
    description: "Optimize EPIC with AI-powered efficiency",
    path: "/case-studies/EPICUsabilityCaseStudy",
    image: "/case-studies/epic-integration.svg"
  },
  {
    title: "Family Medicine Practitioner In Canada Moved To CRUSH From GPT4",
    description: "Learn how a Canadian doctor improved their practice with CRUSH AI",
    path: "/case-studies/FamilyMedicineCaseStudy",
    image: "/case-studies/family-medicine.svg"
  },
  {
    title: "Improving Patient Care With CRUSH AI Medical Scribe",
    description: "Focus more on patients, less on paperwork with AI assistance",
    path: "/case-studies/ImprovingPatientCareCaseStudy",
    image: "/case-studies/patient-care.svg"
  },
  {
    title: "Physician Earns $5,311 Per Month More with CRUSH AI Medical Scribe",
    description: "Boost revenue with efficient and accurate AI scribing",
    path: "/case-studies/FiveThousandCaseStudy",
    image: "/case-studies/revenue-growth.svg"
  },
  {
    title: "Physician saves $21,144 yearly",
    description: "Cut costs by replacing traditional scribes with CRUSH AI Medical Scribe",
    path: "/case-studies/TwentyoneThousandCaseStudy",
    image: "/case-studies/cost-savings.svg"
  },
  {
    title: "Physician saves $17,796 yearly",
    description: "Eliminate transcription costs with CRUSH AI Medical Scribe",
    path: "/case-studies/SeventeenThousandCaseStudy",
    image: "/case-studies/transcription-savings.svg"
  },
  {
    title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists",
    description: "How CRUSH AI helps gastroenterologists save time on documentation",
    path: "/case-studies/GastroenterologyStudy",
    image: "/case-studies/patient-care.svg"
  },
  {
    title: "The Wasilla, Alaska Hospital Automated Their Therapy Notes With CRUSH",
    description: "Learn how a small hospital in Alaska improved documentation in just one week",
    path: "/case-studies/AlaskaTherapyStudy",
    image: "/case-studies/cost-savings.svg"
  },
  {
    title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices",
    description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices",
    path: "/case-studies/MultiProviderPracticesStudy",
    image: "/case-studies/patient-care.svg"
  },
  {
    title: "CRUSH & INTAKE Q: Transforming Dr. Strotman's Practice",
    description: "CRUSH integrates seamlessly with INTAKE Q to automate documentation",
    path: "/case-studies/IntakeQStudy",
    image: "/case-studies/epic-integration.svg"
  },
  {
    title: "Revolutionizing Functional Medicine with CRUSH",
    description: "CRUSH streamlines documentation in functional and longevity medicine",
    path: "/case-studies/FunctionalMedicineStudy",
    image: "/case-studies/family-medicine.svg"
  }
];

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50 pt-20 md:pt-24 pb-12 px-4 md:px-6">
      <Helmet>
        <title>Case Studies | CRUSH AI Medical Scribe</title>
        <meta name="description" content="Discover how healthcare providers are transforming their practices with CRUSH AI Medical Scribe" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Case Studies
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          Discover how healthcare providers are transforming their practices and improving patient care with CRUSH AI Medical Scribe.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.path} to={study.path} className="group">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <OptimizedImage 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-base md:text-lg font-semibold mb-3 text-gray-900 group-hover:text-[#387E89] transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-5 flex-grow">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#387E89] font-medium group-hover:translate-x-1 transition-transform mt-auto">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
