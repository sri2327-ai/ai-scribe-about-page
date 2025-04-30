
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, Stethoscope, Calculator, DollarSign, Clock } from 'lucide-react';

export default function FiveThousandCaseStudy() {
  const calculateTimeROI = (values: Record<string, number>) => {
    const dailyPatients = values.patientsPerDay;
    const workingDays = values.workingDays;
    const revenuePerPatient = values.revenuePerPatient;
    const additionalPatientsPerDay = Math.floor(values.hoursSaved / 0.25); // Assuming 15 min per patient
    
    const monthlyAdditionalRevenue = additionalPatientsPerDay * workingDays * revenuePerPatient;
    const annualAdditionalRevenue = monthlyAdditionalRevenue * 12;
    
    let color = "border-green-300";
    let interpretation = "Excellent ROI";
    let recommendation = `By implementing S10.AI Medical Scribe and saving ${values.hoursSaved} hours daily, you could generate approximately $${Math.round(annualAdditionalRevenue).toLocaleString()} in additional annual revenue.`;
    
    if (annualAdditionalRevenue < 50000) {
      color = "border-yellow-300";
      interpretation = "Good ROI";
    }
    
    return {
      score: Math.round(annualAdditionalRevenue),
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="Physician Earns $5,311 Per Month More with S10.AI Medical Scribe"
      description="Boost revenue with efficient and accurate AI scribing."
      image="/case-studies/revenue-growth.svg"
    >
      <Tabs defaultValue="case-study" className="mb-8 overflow-hidden">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="roi-analysis" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <DollarSign className="h-4 w-4 mr-2 inline" /> ROI Analysis
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "48",
              gender: "Male",
              chiefComplaint: "EHR Documentation Burden",
              relevantHistory: "High-performing physician practice with increasing patient demand",
              medications: ["EHR system", "Manual documentation processes"]
            }}
            clinicalScenario={`Dr. Michael Ross, a successful physician, was spending 1.5 to 4 hours daily on EHR documentation, leading to:

1. Reduced patient interaction time
2. Missed revenue opportunities
3. Work-life balance challenges
4. Increased risk of burnout

These challenges were affecting both practice efficiency and personal well-being.`}
            
            clinicalInsights={[
              {
                title: "Impact of EHR Documentation on Physician Burnout",
                source: "Medical Economics Journal (2024)",
                link: "https://example.com/medical-economics",
                summary: "Studies indicate that physicians spend an average of 4.5 hours daily on EHR tasks, contributing significantly to burnout rates."
              },
              {
                title: "Economic Impact of Documentation Time",
                source: "Healthcare Revenue Management Review (2023)",
                link: "https://example.com/revenue-management",
                summary: "Each hour spent on documentation represents approximately $150-400 in lost revenue potential for most practices."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Week 1",
                event: "Implementation of S10.AI Medical Scribe",
                details: "Initial setup and training completed in one day."
              },
              {
                date: "Month 1",
                event: "Workflow optimization",
                details: "Documentation time reduced by 75%, enabling additional patient visits."
              },
              {
                date: "Month 3",
                event: "Practice assessment",
                details: "Additional revenue of $5,311 per month achieved through increased patient capacity."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the primary mechanism through which AI scribing increases practice revenue?",
              options: [
                { id: "a", text: "Reduced documentation costs" },
                { id: "b", text: "Increased patient volume capacity" },
                { id: "c", text: "Better insurance reimbursement" },
                { id: "d", text: "Improved coding accuracy" }
              ],
              correctAnswerId: "b",
              explanation: "While all factors contribute to improved practice performance, increased patient volume capacity through time savings is the primary driver of additional revenue, allowing physicians to see more patients during regular hours."
            }}
          />
        </TabsContent>
        
        <TabsContent value="roi-analysis" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Time-to-Revenue Calculator
            </h2>
            <p>
              Calculate your potential additional revenue by converting documentation time into patient care:
            </p>
          </div>
          
          <ClinicalCalculator
            title="Practice Revenue Calculator"
            description="Estimate additional revenue from time saved on documentation"
            fields={[
              {
                id: "hoursSaved",
                label: "Hours Saved Per Day",
                type: "slider",
                min: 0.5,
                max: 4,
                step: 0.5,
                defaultValue: 1.5,
                description: "Average hours saved on documentation daily"
              },
              {
                id: "patientsPerDay",
                label: "Current Patients Per Day",
                type: "slider",
                min: 5,
                max: 40,
                step: 1,
                defaultValue: 18,
                description: "Current average patient volume"
              },
              {
                id: "workingDays",
                label: "Working Days Per Month",
                type: "slider",
                min: 10,
                max: 25,
                step: 1,
                defaultValue: 20,
                description: "Number of clinic days per month"
              },
              {
                id: "revenuePerPatient",
                label: "Average Revenue Per Patient ($)",
                type: "number",
                min: 50,
                max: 500,
                step: 10,
                defaultValue: 150,
                description: "Average revenue generated per patient visit"
              }
            ]}
            calculateResult={calculateTimeROI}
            reference="Based on actual case study data and industry standard healthcare economics calculations."
          />
        </TabsContent>

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Financial Performance</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Additional monthly revenue: <span className="font-medium text-emerald-600">$5,311</span></li>
                  <li>Annual revenue increase: <span className="font-medium text-emerald-600">$63,732</span></li>
                  <li>Return on investment: <span className="font-medium text-emerald-600">785%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Clinical Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation time reduced: <span className="font-medium text-emerald-600">75%</span></li>
                  <li>Additional patients seen daily: <span className="font-medium text-emerald-600">4.2</span></li>
                  <li>Hours saved per week: <span className="font-medium text-emerald-600">11.5</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Practice Transformation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Work-life balance improvement: <span className="font-medium text-emerald-600">+47%</span></li>
                  <li>Provider satisfaction increase: <span className="font-medium text-emerald-600">+68%</span></li>
                  <li>Patient satisfaction scores: <span className="font-medium text-emerald-600">Increased by 29%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
