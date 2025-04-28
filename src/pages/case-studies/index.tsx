
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const caseStudies = [
  {
    title: "How S10 AI Medical Scribe Assistant Improves EPIC Usability",
    description: "Optimize EPIC with AI-powered efficiency",
    path: "/case-studies/epic-usability",
    image: "/ImprovePatientCare.webp"
  },
  {
    title: "Family Medicine Practitioner In Canada Moved To S10.AI From GPT4",
    description: "Learn how a Canadian doctor improved their practice with S10.AI",
    path: "/case-studies/family-medicine",
    image: "/ImprovePatientCare.webp"
  },
  {
    title: "Improving Patient Care With S10.AI Medical Scribe",
    description: "Focus more on patients, less on paperwork with AI assistance",
    path: "/case-studies/improving-patient-care",
    image: "/ImprovePatientCare.webp"
  },
  {
    title: "Physician Earns $5,311 Per Month More with Crush AI Medical Scribe",
    description: "Boost revenue with efficient and accurate AI scribing",
    path: "/case-studies/five-thousand",
    image: "/ImprovePatientCare.webp"
  },
  {
    title: "Physician saves $21,144 yearly",
    description: "Cut costs by replacing traditional scribes with Crush AI Medical Scribe",
    path: "/case-studies/twentyone-thousand",
    image: "/ImprovePatientCare.webp"
  },
  {
    title: "Physician saves $17,796 yearly",
    description: "Eliminate transcription costs with Crush S10.AI Medical Scribe",
    path: "/case-studies/seventeen-thousand",
    image: "/ImprovePatientCare.webp"
  }
];

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Case Studies
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.path} to={study.path}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
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
