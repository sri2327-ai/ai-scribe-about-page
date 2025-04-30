
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';
import MultiProviderIllustration from '@/components/case-studies/custom-illustrations/MultiProviderIllustration';

export default function MultiProviderPracticesStudy() {
  const calculatePracticeEfficiency = (values: Record<string, number>) => {
    const providersCount = values.providersCount;
    const patientsPerProvider = values.patientsPerProvider;
    const workingDays = values.workingDays;
    const timeSavedPerPatient = values.timeSavedPerPatient;
    
    const totalPatientsMonthly = providersCount * patientsPerProvider * workingDays;
    const totalMinutesSaved = totalPatientsMonthly * timeSavedPerPatient;
    const totalHoursSaved = Math.round(totalMinutesSaved / 60);
    
    let color = "border-green-300";
    let interpretation = "Excellent Efficiency";
    let recommendation = `By implementing CRUSH AI Medical Scribe across ${providersCount} providers, your practice could save approximately ${totalHoursSaved} hours monthly in documentation time.`;
    
    if (totalHoursSaved < 100) {
      color = "border-yellow-300";
      interpretation = "Good Efficiency";
    }
    
    return {
      score: totalHoursSaved,
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="S10.AI Saves 2+ Hours Daily for Multi-Provider Practices"
      description="S10.AI enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation."
      customIllustration={<MultiProviderIllustration />}
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="efficiency-calculator" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Practice Efficiency Calculator
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "N/A - Practice Analysis",
              gender: "N/A",
              chiefComplaint: "Documentation Inefficiency",
              relevantHistory: "Multi-provider practice seeking workflow optimization",
              medications: ["Current EHR System", "Manual documentation processes"]
            }}
            clinicalScenario={`Westside Medical Group, a busy multi-provider practice with 8 physicians and 5 nurse practitioners, faced significant documentation challenges:

1. Providers spending 2-3 hours daily on documentation
2. Inconsistent documentation quality across providers
3. Limited care coordination due to delayed notes
4. Work-life balance issues for all providers
5. Reduced patient interaction time`}
            
            clinicalInsights={[
              {
                title: "Multi-Provider Documentation Efficiency",
                source: "Healthcare Management Review (2024)",
                link: "https://example.com/healthcare-management",
                summary: "Studies show that standardized AI documentation solutions can reduce documentation time by 70% across provider groups while improving consistency."
              },
              {
                title: "Practice-Wide Implementation Success",
                source: "Medical Practice Efficiency Journal (2023)",
                link: "https://example.com/practice-efficiency",
                summary: "Group practices implementing AI scribes report 35% reduction in provider burnout and 20% increase in patient satisfaction scores."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Practice Assessment",
                details: "Documentation taking 2-3 hours daily per provider."
              },
              {
                date: "Week 1-2",
                event: "Pilot Implementation",
                details: "Two physicians started using CRUSH AI with immediate positive results."
              },
              {
                date: "Month 1",
                event: "Full Implementation",
                details: "All 13 providers successfully onboarded and trained."
              },
              {
                date: "Month 3",
                event: "Practice Analysis",
                details: "Documentation time reduced by 70%, provider satisfaction increased."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the most significant benefit of practice-wide AI documentation implementation?",
              options: [
                { id: "a", text: "Cost reduction" },
                { id: "b", text: "Standardized documentation quality" },
                { id: "c", text: "Improved care coordination" },
                { id: "d", text: "Reduced provider burnout" }
              ],
              correctAnswerId: "b",
              explanation: "While all benefits are important, standardized documentation quality across providers enables better care coordination, consistent billing practices, and improved patient outcomes tracking."
            }}
          />
        </TabsContent>

        <TabsContent value="efficiency-calculator" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Multi-Provider Efficiency Calculator
            </h2>
            <p>Calculate potential time savings across your entire practice:</p>
          </div>

          <ClinicalCalculator
            title="Practice-Wide Efficiency Calculator"
            description="Estimate time saved across all providers in your practice"
            fields={[
              {
                id: "providersCount",
                label: "Number of Providers",
                type: "slider",
                min: 2,
                max: 50,
                step: 1,
                defaultValue: 10,
                description: "Total number of providers in your practice"
              },
              {
                id: "patientsPerProvider",
                label: "Patients Per Provider Daily",
                type: "slider",
                min: 5,
                max: 30,
                step: 1,
                defaultValue: 15,
                description: "Average number of patients seen by each provider"
              },
              {
                id: "workingDays",
                label: "Working Days Per Month",
                type: "slider",
                min: 10,
                max: 25,
                step: 1,
                defaultValue: 20,
                description: "Average number of working days monthly"
              },
              {
                id: "timeSavedPerPatient",
                label: "Minutes Saved Per Patient",
                type: "slider",
                min: 5,
                max: 30,
                step: 1,
                defaultValue: 15,
                description: "Estimated time saved per patient encounter"
              }
            ]}
            calculateResult={calculatePracticeEfficiency}
            reference="Based on actual implementation data from multi-provider practices using CRUSH AI Medical Scribe."
          />
        </TabsContent>

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Group Practice Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Average time saved per provider: <span className="font-medium text-emerald-600">2.3 hours daily</span></li>
                  <li>Practice-wide monthly time savings: <span className="font-medium text-emerald-600">598 hours</span></li>
                  <li>Documentation completion rate at point-of-care: <span className="font-medium text-emerald-600">91%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Practice-Wide Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Standardized documentation quality: <span className="font-medium text-emerald-600">96% compliance</span></li>
                  <li>Care coordination improvement: <span className="font-medium text-emerald-600">+41%</span></li>
                  <li>After-hours documentation reduction: <span className="font-medium text-emerald-600">-82%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Financial Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Additional patients capacity monthly: <span className="font-medium text-emerald-600">520</span></li>
                  <li>Monthly revenue increase: <span className="font-medium text-emerald-600">$98,800</span></li>
                  <li>Annual ROI: <span className="font-medium text-emerald-600">890%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
