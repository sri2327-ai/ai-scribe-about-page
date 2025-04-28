
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { InteractiveCaseStudy } from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';

export default function OsmindCaseStudy() {
  const calculateEfficiencyGains = (values: Record<string, number>) => {
    const monthlyPatients = values.patientsPerDay * values.workingDays;
    const timeSavedPerPatient = values.documentationTime; // minutes saved per patient
    const totalTimeSaved = (monthlyPatients * timeSavedPerPatient) / 60; // convert to hours
    
    const efficiencyGain = Math.round((totalTimeSaved / (values.patientsPerDay * values.workingDays * 8)) * 100);
    
    let color = "border-green-300";
    let interpretation = "Excellent Efficiency";
    let recommendation = `By implementing CRUSH AI Medical Scribe with OSMIND, you could save approximately ${Math.round(totalTimeSaved)} hours monthly, improving documentation efficiency by ${efficiencyGain}%.`;
    
    if (totalTimeSaved < 20) {
      color = "border-yellow-300";
      interpretation = "Good Efficiency";
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
      title="80% Faster Documentation with OSMIND EHR Integration"
      description="CRUSH integrates with OSMIND EHR to reduce documentation time by 80%, increasing clinician efficiency."
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
              age: "35",
              gender: "Female",
              chiefComplaint: "Documentation Overload",
              relevantHistory: "Psychiatric practice with high documentation requirements",
              medications: ["OSMIND EHR System", "Manual documentation processes"]
            }}
            clinicalScenario={`Heather Rosdail, a leading psychiatric provider at Insights Psychiatric, faced significant documentation challenges:

1. Documentation consuming 1-2 hours daily
2. After-hours work impacting work-life balance
3. Complex psychiatric evaluations requiring detailed notes
4. Inefficient EHR data entry process
5. Time taken away from patient care`}
            
            clinicalInsights={[
              {
                title: "Documentation Time in Psychiatric Practice",
                source: "Journal of Psychiatric Practice (2024)",
                link: "https://example.com/psychiatric-practice",
                summary: "Studies show psychiatrists spend up to 40% of their time on documentation, significantly impacting patient care quality and provider burnout rates."
              },
              {
                title: "EHR Integration Benefits",
                source: "Healthcare Technology Review (2023)",
                link: "https://example.com/ehr-integration",
                summary: "AI-assisted documentation integrated with EHR systems can reduce documentation time by up to 80% while improving note quality."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Documentation Assessment",
                details: "1-2 hours spent daily on documentation, often during personal time."
              },
              {
                date: "Week 1",
                event: "CRUSH Implementation",
                details: "Integration with OSMIND completed, initial training provided."
              },
              {
                date: "Month 1",
                event: "Efficiency Metrics",
                details: "80% reduction in documentation time, no more after-hours work."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the primary benefit of AI-assisted documentation in psychiatric practice?",
              options: [
                { id: "a", text: "Cost reduction" },
                { id: "b", text: "Time savings and improved work-life balance" },
                { id: "c", text: "Better billing accuracy" },
                { id: "d", text: "Reduced staff requirements" }
              ],
              correctAnswerId: "b",
              explanation: "While all benefits are valuable, time savings and improved work-life balance are the primary benefits, directly impacting both provider satisfaction and patient care quality."
            }}
            
            discussionTopics={[
              "How does documentation burden affect your patient interactions?",
              "What specific OSMIND features would you like to see automated?",
              "How would reduced documentation time impact your practice?",
              "What concerns do you have about AI integration?"
            ]}
          />
        </TabsContent>

        <TabsContent value="efficiency-calculator" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Documentation Efficiency Calculator
            </h2>
            <p>Calculate your potential time savings with CRUSH AI Medical Scribe:</p>
          </div>

          <ClinicalCalculator
            title="Practice Efficiency Calculator"
            description="Estimate time saved and efficiency gains in your practice"
            fields={[
              {
                id: "patientsPerDay",
                label: "Patients Per Day",
                type: "slider",
                min: 5,
                max: 30,
                step: 1,
                defaultValue: 12,
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
                id: "documentationTime",
                label: "Minutes Saved Per Patient",
                type: "slider",
                min: 5,
                max: 45,
                step: 5,
                defaultValue: 20,
                description: "Estimated time saved on documentation per patient"
              }
            ]}
            calculateResult={calculateEfficiencyGains}
            reference="Based on actual implementation data and psychiatric practice metrics."
          />
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
