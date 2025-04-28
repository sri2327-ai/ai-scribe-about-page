
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { InteractiveCaseStudy } from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';

export default function ImprovingPatientCareCaseStudy() {
  const calculatePatientCareImprovements = (values: Record<string, number>) => {
    const monthlyPatients = values.patientsPerDay * values.workingDays;
    const additionalTimePerPatient = values.timeGained; // minutes gained per patient
    const totalAdditionalTime = (monthlyPatients * additionalTimePerPatient) / 60; // convert to hours
    
    const patientCareImprovement = Math.round((additionalTimePerPatient / values.visitLength) * 100);
    
    let color = "border-green-300";
    let interpretation = "Significant Improvement";
    let recommendation = `By implementing CRUSH AI Medical Scribe, you could gain approximately ${Math.round(totalAdditionalTime)} additional hours monthly for patient care, increasing quality time by ${patientCareImprovement}%.`;
    
    if (totalAdditionalTime < 20) {
      color = "border-yellow-300";
      interpretation = "Moderate Improvement";
    }
    
    return {
      score: Math.round(totalAdditionalTime),
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="Improving Patient Care With S10.AI Medical Scribe"
      description="Focus more on patients, less on paperwork with AI assistance."
      image="/ImprovePatientCare.webp"
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2">
          <TabsTrigger value="case-study" className="flex items-center gap-2 data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="care-calculator" className="flex items-center gap-2 data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4" /> Care Impact Calculator
          </TabsTrigger>
        </TabsList>

        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "N/A - Practice Analysis",
              gender: "N/A",
              chiefComplaint: "Reduced Patient Interaction Time",
              relevantHistory: "Healthcare system with high documentation burden",
              medications: ["EHR System", "Traditional documentation workflows"]
            }}
            clinicalScenario={`Healthcare providers faced significant challenges balancing documentation requirements with patient care:

1. Limited face-to-face time with patients
2. Increased documentation requirements
3. Provider burnout from administrative tasks
4. Delayed documentation completion
5. Reduced quality of patient interactions`}
            
            clinicalInsights={[
              {
                title: "Impact of Documentation on Patient Care",
                source: "Journal of Healthcare Quality (2024)",
                link: "https://example.com/healthcare-quality",
                summary: "Studies show that physicians spend only 27% of their time in direct patient care, with documentation taking up to 49% of their work day."
              },
              {
                title: "AI-Assisted Documentation Benefits",
                source: "Medical Practice Efficiency Review (2023)",
                link: "https://example.com/practice-efficiency",
                summary: "Implementation of AI scribes can increase direct patient interaction time by up to 40%, improving both patient and provider satisfaction."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Patient Care Assessment",
                details: "Limited patient interaction time due to documentation burden."
              },
              {
                date: "Month 1",
                event: "CRUSH Implementation",
                details: "Integration completed, workflow optimization begun."
              },
              {
                date: "Month 3",
                event: "Care Quality Metrics",
                details: "40% increase in direct patient interaction time."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the most significant impact of reduced documentation burden?",
              options: [
                { id: "a", text: "Cost savings" },
                { id: "b", text: "Increased patient satisfaction" },
                { id: "c", text: "More direct patient care time" },
                { id: "d", text: "Improved documentation quality" }
              ],
              correctAnswerId: "c",
              explanation: "While all benefits are important, increased direct patient care time has the most significant impact on both care quality and patient outcomes."
            }}
            
            discussionTopics={[
              "How does documentation time affect your patient interactions?",
              "What would you do with additional patient care time?",
              "How could increased face-to-face time improve outcomes?",
              "What aspects of patient care suffer most from documentation burden?"
            ]}
          />
        </TabsContent>

        <TabsContent value="care-calculator" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Patient Care Impact Calculator
            </h2>
            <p>Calculate the potential improvement in patient care time with CRUSH AI Medical Scribe:</p>
          </div>

          <ClinicalCalculator
            title="Patient Care Time Calculator"
            description="Estimate additional time gained for direct patient care"
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
                label: "Minutes Gained Per Patient",
                type: "slider",
                min: 2,
                max: 20,
                step: 1,
                defaultValue: 8,
                description: "Additional time gained for patient interaction"
              },
              {
                id: "visitLength",
                label: "Current Visit Length (minutes)",
                type: "number",
                min: 10,
                max: 60,
                step: 5,
                defaultValue: 20,
                description: "Average length of current patient visits"
              }
            ]}
            calculateResult={calculatePatientCareImprovements}
            reference="Based on healthcare quality metrics and implementation data."
          />
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
