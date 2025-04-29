
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
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
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="care-calculator" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Care Impact Calculator
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

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Patient Interaction Metrics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Direct patient interaction time increase: <span className="font-medium text-emerald-600">40%</span></li>
                  <li>Average additional minutes per patient: <span className="font-medium text-emerald-600">7.5 minutes</span></li>
                  <li>Patient satisfaction scores: <span className="font-medium text-emerald-600">Increased by 32%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Provider Experience</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provider burnout reduction: <span className="font-medium text-emerald-600">43%</span></li>
                  <li>Work-life balance improvement: <span className="font-medium text-emerald-600">+38%</span></li>
                  <li>Documentation satisfaction: <span className="font-medium text-emerald-600">92%</span> (increased from 41%)</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Clinical Outcomes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Treatment plan adherence: <span className="font-medium text-emerald-600">Increased by 28%</span></li>
                  <li>Preventive care measure completion: <span className="font-medium text-emerald-600">+33%</span></li>
                  <li>Follow-up appointment attendance: <span className="font-medium text-emerald-600">Improved by 24%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
