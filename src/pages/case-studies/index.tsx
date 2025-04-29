
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const caseStudies = [
  {
    title: "How S10 AI Medical Scribe Assistant Improves EPIC Usability",
    description: "Optimize EPIC with AI-powered efficiency",
    path: "/case-studies/epic-usability",
    image: "/case-studies/epic-integration.svg"
  },
  {
    title: "Family Medicine Practitioner In Canada Moved To S10.AI From GPT4",
    description: "Learn how a Canadian doctor improved their practice with S10.AI",
    path: "/case-studies/family-medicine",
    image: "/case-studies/family-medicine.svg"
  },
  {
    title: "Improving Patient Care With S10.AI Medical Scribe",
    description: "Focus more on patients, less on paperwork with AI assistance",
    path: "/case-studies/improving-patient-care",
    image: "/case-studies/patient-care.svg"
  },
  {
    title: "Physician Earns $5,311 Per Month More with Crush AI Medical Scribe",
    description: "Boost revenue with efficient and accurate AI scribing",
    path: "/case-studies/five-thousand",
    image: "/case-studies/revenue-growth.svg"
  },
  {
    title: "Physician saves $21,144 yearly",
    description: "Cut costs by replacing traditional scribes with Crush AI Medical Scribe",
    path: "/case-studies/twentyone-thousand",
    image: "/case-studies/cost-savings.svg"
  },
  {
    title: "Physician saves $17,796 yearly",
    description: "Eliminate transcription costs with Crush S10.AI Medical Scribe",
    path: "/case-studies/seventeen-thousand",
    image: "/case-studies/transcription-savings.svg"
  },
  {
    title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists",
    description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation",
    path: "/case-studies/gastroenterology",
    image: "/case-studies/gastro-efficiency.svg"
  },
  {
    title: "The Wasilla, Alaska Hospital Automated Their Therapy Notes With CRUSH AI",
    description: "A small hospital implemented CRUSH AI and transformed their therapy documentation process",
    path: "/case-studies/alaska-therapy",
    image: "/case-studies/alaska-therapy.svg"
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
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.path} to={study.path} className="group">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-blue-50/50">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors min-h-[4rem] line-clamp-2">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {study.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform mt-auto">
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
