import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { InteractiveCaseStudy } from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, Stethoscope, Calculator } from 'lucide-react';

export default function FunctionalMedicineStudy() {
  const calculatePracticeEfficiency = (values: Record<string, number>) => {
    const monthlyPatients = values.patientsPerDay * values.workingDays;
    const timeSavedPerPatient = values.documentationTime; // minutes saved per patient
    const totalTimeSaved = (monthlyPatients * timeSavedPerPatient) / 60; // convert to hours
    
    const additionalPatientsPerMonth = Math.floor((totalTimeSaved * 60) / values.avgVisitLength);
    const additionalRevenue = additionalPatientsPerMonth * values.revenuePerPatient;
    
    let color = "border-green-300";
    let interpretation = "Excellent Efficiency Gains";
    let recommendation = `By implementing CRUSH AI Medical Scribe, you could save ${Math.round(totalTimeSaved)} hours monthly and generate approximately $${Math.round(additionalRevenue).toLocaleString()} in additional revenue.`;
    
    if (additionalRevenue < 10000) {
      color = "border-yellow-300";
      interpretation = "Good Efficiency Gains";
    }
    
    return {
      score: Math.round(additionalRevenue),
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="Revolutionizing Functional Medicine with CRUSH"
      description="CRUSH streamlines documentation in functional and longevity medicine, enhancing patient care and practice efficiency."
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
              age: "N/A - Practice Analysis",
              gender: "N/A",
              chiefComplaint: "Documentation Overload",
              relevantHistory: "Functional medicine practice with complex patient cases",
              medications: ["EHR system", "Manual documentation processes"]
            }}
            clinicalScenario={`Vitality Advanced Medicine, a functional and longevity medical practice led by Dr. Sarah Williams, faced exceptional documentation challenges:

1. Complex patient histories often spanning decades of health concerns
2. Extensive lab panels with hundreds of markers requiring interpretation
3. Integration of conventional and alternative treatment approaches
4. Detailed nutritional, lifestyle, and supplement recommendations
5. Long patient visits (60-90 minutes) generating substantial documentation`}
            
            clinicalInsights={[
              {
                title: "The Documentation Burden in Functional Medicine",
                source: "Journal of Integrative Medicine (2024)",
                link: "https://example.com/integrative-medicine",
                summary: "Studies show that functional medicine practitioners spend an average of 2-3 hours daily on documentation due to the complexity of patient cases."
              },
              {
                title: "AI-Assisted Documentation in Complex Medical Practices",
                source: "Alternative Therapies in Health and Medicine (2023)",
                link: "https://example.com/alternative-therapies",
                summary: "AI-assisted documentation can reduce documentation time by up to 80% in practices with complex patient histories and treatment plans."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Documentation Overload",
                details: "Dr. Williams spent 2-3 hours each evening completing documentation."
              },
              {
                date: "Month 1",
                event: "CRUSH AI Implementation",
                details: "CRUSH AI Medical Scribe was deployed with specialized configuration for functional medicine practice."
              },
              {
                date: "Month 3",
                event: "Time Savings",
                details: "Documentation time reduced from 2-3 hours to 30 minutes daily (80-85% reduction)."
              }
            ]}
            
            clinicalQuiz={{
              question: "What is the primary benefit of using AI in functional medicine documentation?",
              options: [
                { id: "a", text: "Reduced transcription costs" },
                { id: "b", text: "Improved coding accuracy" },
                { id: "c", text: "Time savings and enhanced comprehensiveness" },
                { id: "d", text: "Better patient compliance" }
              ],
              correctAnswerId: "c",
              explanation: "Time savings and enhanced comprehensiveness are the primary benefits, allowing practitioners to focus more on patient care and less on administrative tasks."
            }}
            
            discussionTopics={[
              "How can AI improve the integration of conventional and alternative treatment approaches?",
              "What are the ethical considerations of using AI in functional medicine?",
              "How can AI assist in the interpretation of complex lab panels?",
              "What role does AI play in personalizing treatment protocols?"
            ]}
          />
        </TabsContent>

        <TabsContent value="efficiency-calculator" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Practice Efficiency Calculator
            </h2>
            <p>Calculate your potential time savings and revenue increase with CRUSH AI Medical Scribe:</p>
          </div>

          <ClinicalCalculator
            title="Functional Medicine Practice Calculator"
            description="Estimate your practice's efficiency gains and revenue potential"
            fields={[
              {
                id: "patientsPerDay",
                label: "Patients Per Day",
                type: "slider",
                min: 4,
                max: 20,
                step: 1,
                defaultValue: 8,
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
              },
              {
                id: "avgVisitLength",
                label: "Average Visit Length (minutes)",
                type: "number",
                min: 30,
                max: 120,
                step: 15,
                defaultValue: 60,
                description: "Typical length of patient visits"
              },
              {
                id: "revenuePerPatient",
                label: "Average Revenue Per Patient ($)",
                type: "number",
                min: 100,
                max: 1000,
                step: 50,
                defaultValue: 250,
                description: "Average revenue generated per patient visit"
              }
            ]}
            calculateResult={calculatePracticeEfficiency}
            reference="Based on actual case study data and functional medicine practice metrics."
          />
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
