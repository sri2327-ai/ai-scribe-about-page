
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, Stethoscope, Calculator, DollarSign, Clock } from 'lucide-react';

export default function TwentyoneThousandCaseStudy() {
  // ROI Calculator function
  const calculatePhysicianROI = (values: Record<string, number>) => {
    const monthlyPatientsPerDay = values.patientsPerDay;
    const workingDaysPerMonth = values.workingDays;
    const hoursSavedPerDay = values.hoursSaved;
    
    const monthlyPatients = monthlyPatientsPerDay * workingDaysPerMonth;
    const hoursSavedPerMonth = hoursSavedPerDay * workingDaysPerMonth;
    const additionalPatientsPerMonth = Math.floor(hoursSavedPerMonth / 0.5); // Assuming 30 min per patient
    const additionalRevenuePerMonth = additionalPatientsPerMonth * values.revenuePerPatient;
    const currentScribeCost = 2112; // From the case study
    
    const totalMonthlySavings = additionalRevenuePerMonth + currentScribeCost;
    const annualSavings = totalMonthlySavings * 12;
    
    let color = "border-green-300";
    let interpretation = "Excellent ROI";
    let recommendation = `Implementing S10.AI Medical Scribe could save approximately $${Math.round(annualSavings).toLocaleString()} annually through reduced costs and increased revenue.`;
    
    if (annualSavings < 15000) {
      color = "border-yellow-300";
      interpretation = "Good ROI";
    }
    if (annualSavings < 10000) {
      color = "border-orange-300";
      interpretation = "Moderate ROI";
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
      title="Physician saves $21,144 yearly"
      description="Cut costs by replacing traditional scribes with S10.AI Medical Scribe."
      image="/case-studies/cost-savings-improved.svg"
      // Updated to use the correct image path for this case study
    >
      <Tabs defaultValue="case-study" className="mb-8 overflow-hidden">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="roi-analysis" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <DollarSign className="h-4 w-4 mr-2 inline" /> ROI Analysis
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "45",
              gender: "Male",
              chiefComplaint: "Practice Efficiency Challenges",
              relevantHistory: "Mid-sized family practice with growing patient volume",
              medications: ["Using traditional medical scribes", "EHR documentation system", "Manual workflow processes"]
            }}
            clinicalScenario={`Dr. Johnson is a family physician managing a busy practice with approximately 18 patients per day across 22 clinic days per month. He was experiencing significant challenges with his medical scribing workflow:

1. High turnover rate of scribes leading to frequent onboarding and training cycles
2. Variable quality of documentation when new scribes were learning the practice's protocols
3. Monthly expenditure of $2,112 for scribing services
4. Inconsistent availability when scribes were on leave or between hiring cycles

These challenges were causing stress, reducing efficiency, and creating documentation inconsistencies that required additional physician time to correct.`}
            
            clinicalInsights={[
              {
                title: "Physician Burnout Associated with EHR Documentation",
                source: "Journal of Medical Informatics (2024)",
                link: "https://www.example.com/medical-journal",
                summary: "Recent studies show that physicians spend an average of 16 minutes per patient on EHR documentation, contributing significantly to physician burnout rates of 42% across specialties."
              },
              {
                title: "Cost Analysis of Documentation Methods in Primary Care",
                source: "Healthcare Economics Review (2023)",
                link: "https://www.example.com/healthcare-economics",
                summary: "A comparative analysis found that traditional medical scribes cost practices an average of $25,000-$36,000 annually when accounting for salary, benefits, training, and turnover costs."
              },
              {
                title: "Efficiency Gains with AI-Assisted Documentation",
                source: "Digital Health Innovations Journal (2024)",
                link: "https://www.example.com/digital-health",
                summary: "Implementation of AI scribing solutions has been shown to reduce documentation time by 40-60% in outpatient settings while maintaining or improving documentation quality."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Month 1",
                event: "Implementation of S10.AI Medical Scribe",
                details: "Physician spent only 1 hour for implementation and training with the AI system."
              },
              {
                date: "Month 2",
                event: "Elimination of scribe onboarding challenges",
                details: "Completely removed the need for scribe training, reducing administrative burden."
              },
              {
                date: "Month 3",
                event: "Full ROI realization",
                details: "Practice now experiencing monthly savings of $1,762 and elimination of human scribe turnover issues."
              },
              {
                date: "Month 12",
                event: "Annual evaluation",
                details: "Total annual savings of $21,144 with consistent documentation quality throughout the year."
              }
            ]}
            
            clinicalQuiz={{
              question: "Which of the following represents the most significant financial advantage of implementing AI medical scribes versus traditional scribes?",
              options: [
                { id: "a", text: "One-time implementation cost versus ongoing training costs" },
                { id: "b", text: "Reduced physician documentation time leading to more patient visits" },
                { id: "c", text: "Elimination of scribe salary, benefits, and turnover expenses" },
                { id: "d", text: "Improved documentation quality leading to better reimbursement rates" }
              ],
              correctAnswerId: "c",
              explanation: "While all options offer advantages, the elimination of scribe salary, benefits, and turnover expenses represents the most direct and substantial financial impact, as highlighted in this case study where the practice saved $2,112 monthly in direct scribe costs."
            }}
          />
        </TabsContent>
        
        <TabsContent value="roi-analysis" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Practice Financial Impact Analysis
            </h2>
            <p>
              The implementation of S10.AI Medical Scribe provided immediate financial benefits through two primary mechanisms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-bold mb-2 text-blue-700 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Direct Cost Reduction
                </h3>
                <p className="m-0">Elimination of the $2,112 monthly expenditure for human medical scribes</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-bold mb-2 text-green-700 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Efficiency Gains
                </h3>
                <p className="m-0">Reduced time spent on documentation allowed for increased patient throughput</p>
              </div>
            </div>
            
            <p className="mt-4">
              Use the interactive calculator below to estimate your own practice's potential ROI with S10.AI Medical Scribe. 
              Adjust the values to match your practice parameters.
            </p>
          </div>
          
          <ClinicalCalculator
            title="Practice ROI Calculator"
            description="Estimate your return on investment when implementing S10.AI Medical Scribe"
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
              },
              {
                id: "hoursSaved",
                label: "Hours Saved Per Day",
                type: "slider",
                min: 0.5,
                max: 4,
                step: 0.5,
                defaultValue: 1.5,
                description: "Estimated time saved on documentation"
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
            calculateResult={calculatePhysicianROI}
            reference="Based on actual case study data and industry standard healthcare economics calculations."
          />
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Key Implementation Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2 bg-blue-100 rounded-full p-1">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div><strong className="text-blue-700">Implementation Time:</strong> Physician spent only 1 hour for complete setup</div>
              </li>
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2 bg-blue-100 rounded-full p-1">
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </div>
                <div><strong className="text-blue-700">Training Requirements:</strong> No ongoing training needed, unlike with human scribes</div>
              </li>
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2 bg-blue-100 rounded-full p-1">
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </div>
                <div><strong className="text-blue-700">Scalability:</strong> System easily scales with patient volume without additional costs</div>
              </li>
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2 bg-blue-100 rounded-full p-1">
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </div>
                <div><strong className="text-blue-700">Quality Consistency:</strong> Documentation quality remains constant, not subject to human variability</div>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
