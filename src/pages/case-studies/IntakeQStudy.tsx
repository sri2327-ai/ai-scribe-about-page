
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { InteractiveCaseStudy } from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';

export default function IntakeQStudy() {
  const calculateIntakeEfficiency = (values: Record<string, number>) => {
    const monthlyPatients = values.patientsPerDay * values.workingDays;
    const timeSavedPerPatient = values.timeGained;
    const totalTimeSaved = (monthlyPatients * timeSavedPerPatient) / 60; // convert to hours
    
    const efficiencyGain = Math.round((totalTimeSaved / (values.patientsPerDay * values.workingDays * 8)) * 100);
    
    let color = "border-green-300";
    let interpretation = "Significant Improvement";
    let recommendation = `By implementing CRUSH AI Medical Scribe with IntakeQ, you could save approximately ${Math.round(totalTimeSaved)} hours monthly, improving documentation efficiency by ${efficiencyGain}%.`;
    
    if (totalTimeSaved < 20) {
      color = "border-yellow-300";
      interpretation = "Moderate Improvement";
    }
    
    return {
      score: Math.round(totalTimeSaved),
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="CRUSH & INTAKE Q: Transforming Dr. Strotman's Practice"
      description="CRUSH integrates seamlessly with INTAKE Q to automate patient intake and documentation, saving time and improving efficiency."
      image="/ImprovePatientCare.webp"
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="efficiency-calculator" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Efficiency Calculator
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "45",
              gender: "Male",
              chiefComplaint: "Documentation Inefficiency",
              relevantHistory: "Growing family practice with INTAKE Q integration needs",
              medications: ["INTAKE Q System", "Manual documentation processes"]
            }}
            clinicalScenario={`Dr. Robert Strotman's growing family practice faced significant challenges with patient intake and documentation workflow:

1. Manual transfer of intake data to clinical notes
2. Inconsistent documentation quality
3. Time-consuming pre-visit preparation
4. Limited integration between systems
5. Inefficient patient information management`}
            
            clinicalInsights={[
              {
                title: "Integrated Documentation Impact",
                source: "Healthcare Technology Review (2024)",
                link: "https://example.com/healthcare-tech",
                summary: "Practices implementing integrated intake and documentation solutions report 75% reduction in administrative workload and improved data accuracy."
              },
              {
                title: "Practice Workflow Optimization",
                source: "Medical Practice Management Journal (2023)",
                link: "https://example.com/practice-management",
                summary: "Integration of intake and clinical documentation systems can save practices up to 38 minutes per patient encounter."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Initial Assessment",
                details: "Manual workflow taking 43 minutes per patient for documentation."
              },
              {
                date: "Week 1",
                event: "Integration Setup",
                details: "CRUSH AI and INTAKE Q integration completed, staff training initiated."
              },
              {
                date: "Month 1",
                event: "Full Implementation",
                details: "Automated workflow reducing documentation time to 5 minutes per patient."
              },
              {
                date: "Month 3",
                event: "ROI Analysis",
                details: "Practice seeing 4 additional patients daily, significant efficiency gains."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the most significant benefit of integrating intake and documentation systems?",
              options: [
                { id: "a", text: "Cost reduction" },
                { id: "b", text: "Time savings and workflow efficiency" },
                { id: "c", text: "Patient satisfaction" },
                { id: "d", text: "Data accuracy" }
              ],
              correctAnswerId: "b",
              explanation: "While all benefits are important, time savings and workflow efficiency have the most immediate impact on practice operations and provider satisfaction, enabling providers to see more patients and improve care quality."
            }}
          />
        </TabsContent>

        <TabsContent value="efficiency-calculator" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              IntakeQ Integration Efficiency Calculator
            </h2>
            <p>Calculate your potential time savings with CRUSH AI and IntakeQ integration:</p>
          </div>

          <ClinicalCalculator
            title="Practice Efficiency Calculator"
            description="Estimate time saved with integrated intake and documentation"
            fields={[
              {
                id: "patientsPerDay",
                label: "Patients Per Day",
                type: "slider",
                min: 5,
                max: 40,
                step: 1,
                defaultValue: 15,
                description: "Average number of patients seen daily"
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
                id: "timeGained",
                label: "Minutes Saved Per Patient",
                type: "slider",
                min: 5,
                max: 45,
                step: 5,
                defaultValue: 20,
                description: "Estimated time saved on documentation per patient"
              }
            ]}
            calculateResult={calculateIntakeEfficiency}
            reference="Based on actual implementation data from practices using CRUSH with IntakeQ integration."
          />
        </TabsContent>

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Workflow Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation time reduction: <span className="font-medium text-emerald-600">88%</span> (from 43 to 5 minutes per patient)</li>
                  <li>Data transfer automation: <span className="font-medium text-emerald-600">100%</span></li>
                  <li>Data accuracy improvement: <span className="font-medium text-emerald-600">96%</span> (from 82%)</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Practice Performance</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Daily patient capacity increase: <span className="font-medium text-emerald-600">+4 patients</span></li>
                  <li>Monthly revenue increase: <span className="font-medium text-emerald-600">$14,400</span></li>
                  <li>Administrative staff time savings: <span className="font-medium text-emerald-600">12.5 hours weekly</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Experience Metrics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Patient intake experience rating: <span className="font-medium text-emerald-600">9.4/10</span> (from 7.2/10)</li>
                  <li>Provider satisfaction score: <span className="font-medium text-emerald-600">9.7/10</span></li>
                  <li>Staff satisfaction improvement: <span className="font-medium text-emerald-600">+86%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
