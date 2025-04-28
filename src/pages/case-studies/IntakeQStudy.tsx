
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
        <TabsList className="w-full border-b p-0 mb-2">
          <TabsTrigger value="case-study" className="flex items-center gap-2 data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="efficiency-calculator" className="flex items-center gap-2 data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4" /> Efficiency Calculator
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
            
            discussionTopics={[
              "How would automated intake data integration benefit your practice?",
              "What challenges do you face with your current intake process?",
              "How could saved documentation time be reinvested in patient care?",
              "What concerns do you have about system integration?"
            ]}
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
      </Tabs>
    </CaseStudyLayout>
  );
}
