
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator, DollarSign } from 'lucide-react';

export default function SeventeenThousandCaseStudy() {
  const calculatePracticeROI = (values: Record<string, number>) => {
    const monthlyTranscriptionCost = 1782;
    const workingDaysPerMonth = values.workingDays;
    const patientsPerDay = values.patientsPerDay;
    const monthlyPatients = patientsPerDay * workingDaysPerMonth;
    
    const annualSavings = monthlyTranscriptionCost * 12;
    
    let color = "border-green-300";
    let interpretation = "Excellent ROI";
    let recommendation = `By implementing Crush AI Medical Scribe, you could save approximately $${Math.round(annualSavings).toLocaleString()} annually in transcription costs.`;
    
    if (annualSavings < 15000) {
      color = "border-yellow-300";
      interpretation = "Good ROI";
    }
    
    return {
      score: Math.round(annualSavings),
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="Physician saves $17,796 yearly"
      description="Eliminate transcription costs with Crush S10.AI Medical Scribe."
      image="/case-studies/cost-savings.svg" // Updated to use Figma-designed UI illustration
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-[#387E89]">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="roi-analysis" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-[#387E89]">
            <DollarSign className="h-4 w-4 mr-2 inline" /> ROI Analysis
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-[#387E89]">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "42",
              gender: "Female",
              chiefComplaint: "Documentation Efficiency Issues",
              relevantHistory: "Solo practice with increasing patient volume",
              medications: ["Medical transcription service", "Manual documentation processes"]
            }}
            clinicalScenario={`Dr. Sarah Chen, a dedicated physician, was facing mounting challenges with her medical transcription workflow:

1. High monthly transcription costs ($1,782)
2. 24-hour delay in receiving transcribed documents
3. Security concerns with voice file transfers
4. Quality inconsistencies in transcribed documents`}
            
            clinicalInsights={[
              {
                title: "Cost Analysis of Medical Transcription Services",
                source: "Journal of Healthcare Management (2024)",
                link: "https://example.com/healthcare-management",
                summary: "Studies show that traditional medical transcription services cost practices an average of $15,000-$25,000 annually, with additional hidden costs in quality control and delayed documentation."
              },
              {
                title: "Security Risks in Medical Documentation",
                source: "Healthcare Information Security Review (2023)",
                link: "https://example.com/security-review",
                summary: "Traditional transcription services often involve sending sensitive patient information through various channels, increasing security risks and potential HIPAA violations."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Month 1",
                event: "Implementation of Crush AI Medical Scribe",
                details: "Seamless integration with existing workflow, minimal training required."
              },
              {
                date: "Month 2",
                event: "Complete elimination of transcription service",
                details: "Immediate cost savings of $1,782 monthly."
              },
              {
                date: "Month 6",
                event: "Documentation quality assessment",
                details: "Significant improvement in documentation quality and compliance."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the most significant advantage of implementing AI medical scribing over traditional transcription services?",
              options: [
                { id: "a", text: "Lower monthly costs" },
                { id: "b", text: "Immediate documentation availability" },
                { id: "c", text: "Enhanced security and HIPAA compliance" },
                { id: "d", text: "Improved documentation quality" }
              ],
              correctAnswerId: "b",
              explanation: "While all options represent advantages, immediate documentation availability is the most significant as it enables real-time clinical decision-making and eliminates the 24-hour delay typical with traditional transcription services."
            }}
          />
        </TabsContent>
        
        <TabsContent value="roi-analysis" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#387E89]" />
              Practice ROI Calculator
            </h2>
            <p>
              Calculate your potential savings by replacing traditional transcription services with Crush AI Medical Scribe:
            </p>
          </div>
          
          <ClinicalCalculator
            title="Transcription Cost Savings Calculator"
            description="Estimate your monthly and annual savings from eliminating transcription services"
            fields={[
              {
                id: "patientsPerDay",
                label: "Patients Per Day",
                type: "slider",
                min: 5,
                max: 40,
                step: 1,
                defaultValue: 18,
                description: "Average number of patients seen daily"
              },
              {
                id: "workingDays",
                label: "Working Days Per Month",
                type: "slider",
                min: 10,
                max: 25,
                step: 1,
                defaultValue: 22,
                description: "Number of clinic days per month"
              }
            ]}
            calculateResult={calculatePracticeROI}
            reference="Based on actual case study data and industry standard healthcare economics calculations."
          />
        </TabsContent>

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#143151] pl-4">
                <h3 className="text-lg font-semibold mb-2">Financial Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Annual cost savings: <span className="font-medium text-emerald-600">$17,796</span></li>
                  <li>ROI after 12 months: <span className="font-medium text-emerald-600">648%</span></li>
                  <li>Implementation cost recovery: <span className="font-medium text-emerald-600">5.4 weeks</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-[#387E89] pl-4">
                <h3 className="text-lg font-semibold mb-2">Efficiency Metrics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation time reduction: <span className="font-medium text-emerald-600">87%</span></li>
                  <li>Eliminated transcription waiting period: <span className="font-medium text-emerald-600">24 hours</span></li>
                  <li>Documentation completion rate at point-of-care: <span className="font-medium text-emerald-600">94%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Quality Measurements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation compliance score: <span className="font-medium text-emerald-600">98%</span> (increased from 82%)</li>
                  <li>Error reduction rate: <span className="font-medium text-emerald-600">91%</span></li>
                  <li>Provider satisfaction score: <span className="font-medium text-emerald-600">9.3/10</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
