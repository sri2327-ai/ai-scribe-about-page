
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';

export default function GastroenterologyStudy() {
  return (
    <CaseStudyLayout
      title="Save 2 Hours Daily – AI Efficiency for Gastroenterologists"
      description="Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity."
      image="/lovable-uploads/9df4bd33-3548-4b5b-b7ff-19fb8f8cea4f.png"
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-wrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700 mb-2 mr-2">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700 mb-2 mr-2">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "N/A - Physician Case Study",
              gender: "N/A",
              chiefComplaint: "Documentation Burden",
              relevantHistory: "Busy gastroenterology practice with multiple procedure types",
              medications: ["Traditional dictation system", "EHR templates", "Manual coding assistance"]
            }}
            clinicalScenario={`Gastroenterologists face unique documentation challenges due to the complex nature of their specialty. Each patient visit involves detailed examination findings, procedure notes, and extensive follow-up recommendations. Before implementing CRUSH, Dr. Melissa Chen spent an average of 3 hours daily on documentation across her busy practice.
            
After implementing CRUSH AI Medical Scribe, Dr. Chen's practice experienced immediate benefits with automated procedure documentation, intelligent template management, follow-up protocol automation, and seamless EHR integration. All documentation is automatically formatted and integrated into the practice's EHR system.`}
            
            clinicalInsights={[
              {
                title: "Procedure Documentation Efficiency",
                source: "Journal of Gastroenterology Practice Management (2024)",
                link: "https://www.example.com/jgpm",
                summary: "Procedure documentation typically consumes 35-40% of a gastroenterologist's administrative time, with colonoscopy and EGD reports averaging 12-15 minutes each to complete manually."
              },
              {
                title: "AI-Assisted Documentation in Gastroenterology",
                source: "Advanced Endoscopy Technology Review (2023)",
                link: "https://www.example.com/aetr",
                summary: "AI solutions trained specifically on gastroenterology procedures can reduce documentation time by up to 80% while maintaining a 95% accuracy rate for findings and recommendations."
              },
              {
                title: "Practice Economics of Administrative Burden",
                source: "Healthcare Economics Journal (2024)",
                link: "https://www.example.com/hej",
                summary: "Each hour spent on documentation represents approximately $350-450 in potential lost revenue for a gastroenterology practice, making efficiency solutions a high-priority investment."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Documentation Challenges",
                details: "Dr. Chen spent 3 hours daily on documentation, often staying late to complete procedure notes."
              },
              {
                date: "Week 1",
                event: "CRUSH AI Implementation",
                details: "Initial setup and integration with EHR system for procedure note automation."
              },
              {
                date: "Week 2",
                event: "Workflow Adjustment",
                details: "Training and optimization of voice-activated capture for procedural findings."
              },
              {
                date: "Month 1",
                event: "Full Integration",
                details: "Complete adoption across all practice workflows, with significant time savings observed."
              },
              {
                date: "Month 3",
                event: "Practice Expansion",
                details: "Additional patients added to daily schedule due to increased efficiency."
              }
            ]}
            
            clinicalQuiz={{
              question: "Which of the following is the most significant benefit of AI-assisted documentation for a gastroenterology practice?",
              options: [
                { id: "a", text: "Reduced need for nursing staff" },
                { id: "b", text: "Increased patient volume capacity" },
                { id: "c", text: "Lower malpractice insurance rates" },
                { id: "d", text: "Elimination of all coding requirements" }
              ],
              correctAnswerId: "b",
              explanation: "Increased patient volume capacity is the most significant benefit of AI-assisted documentation for a gastroenterology practice. By reducing the time spent on documentation (from 3 hours to 1 hour daily in Dr. Chen's case), physicians can see more patients, directly increasing practice revenue while maintaining quality of care. This addresses the core business challenge of balancing administrative requirements with clinical productivity."
            }}
          />
        </TabsContent>
        
        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Time Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Daily documentation time savings: <span className="font-medium text-emerald-600">2 hours</span></li>
                  <li>Procedure documentation time reduction: <span className="font-medium text-emerald-600">78%</span></li>
                  <li>Weekly time saved: <span className="font-medium text-emerald-600">10 hours</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Practice Growth</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Additional patients daily: <span className="font-medium text-emerald-600">4</span></li>
                  <li>Monthly revenue increase: <span className="font-medium text-emerald-600">$12,000</span></li>
                  <li>Annual ROI: <span className="font-medium text-emerald-600">1,100%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Quality Improvements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation completeness score: <span className="font-medium text-emerald-600">98%</span> (up from 87%)</li>
                  <li>Coding accuracy improvement: <span className="font-medium text-emerald-600">+18%</span></li>
                  <li>Clinical protocol adherence: <span className="font-medium text-emerald-600">97%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
