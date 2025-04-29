
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { ClinicalCalculator } from '@/components/case-studies/ClinicalCalculator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, Stethoscope, Calculator } from 'lucide-react';

export default function EPICUsabilityCaseStudy() {
  const calculateTimeAndClicks = (values: Record<string, number>) => {
    const dailyOrders = values.ordersPerDay;
    const workingDays = values.workingDays;
    const monthlyOrders = dailyOrders * workingDays;
    
    const traditionalClicksPerOrder = 20; // Average clicks per order in traditional EPIC
    const traditionalTimePerOrder = 70; // Average seconds per order
    
    const totalTraditionalClicks = monthlyOrders * traditionalClicksPerOrder;
    const totalTraditionalTime = (monthlyOrders * traditionalTimePerOrder) / 3600; // Convert to hours
    
    const timeSavedPercentage = 75; // Based on case study data
    const timeSaved = (totalTraditionalTime * timeSavedPercentage) / 100;
    
    let color = "border-green-300";
    let interpretation = "Significant Time Savings";
    let recommendation = `By implementing CRUSH AI Medical Scribe with EPIC, you could save approximately ${Math.round(timeSaved)} hours monthly, reducing clicks by ${Math.round(totalTraditionalClicks * 0.8).toLocaleString()}.`;
    
    return {
      score: Math.round(timeSaved),
      interpretation,
      color,
      recommendation
    };
  };

  return (
    <CaseStudyLayout
      title="How S10 AI Medical Scribe Assistant Improves EPIC Usability"
      description="Optimize EPIC with AI-powered efficiency"
      image="/case-studies/epic-integration.svg"
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
              age: "N/A - System Implementation Case",
              gender: "N/A",
              chiefComplaint: "EPIC Usability Challenges",
              relevantHistory: "Healthcare system with high documentation burden",
              medications: ["EPIC EHR System", "Traditional documentation workflows"]
            }}
            clinicalScenario={`A large healthcare system was experiencing significant challenges with their EPIC EHR system:

1. Excessive clicks required for routine tasks
2. Time-consuming documentation processes
3. Provider burnout due to administrative burden
4. Reduced patient interaction time
5. Inconsistent documentation quality`}
            
            clinicalInsights={[
              {
                title: "EHR Usage Impact on Physician Burnout",
                source: "Journal of Medical Informatics (2024)",
                link: "https://example.com/medical-informatics",
                summary: "Studies show that physicians spend an average of 4.5 hours daily on EHR tasks, with EPIC users reporting higher click counts for routine tasks."
              },
              {
                title: "AI Integration with EPIC Systems",
                source: "Healthcare Technology Review (2023)",
                link: "https://example.com/healthcare-tech",
                summary: "AI-assisted documentation can reduce EPIC interaction time by up to 75%, significantly improving provider satisfaction and efficiency."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "EPIC Usability Assessment",
                details: "Baseline metrics showed providers spending 4+ hours daily on documentation."
              },
              {
                date: "Month 1",
                event: "CRUSH AI Implementation",
                details: "Integration with EPIC completed, initial training provided."
              },
              {
                date: "Month 3",
                event: "Efficiency Metrics",
                details: "75% reduction in documentation time, 80% reduction in clicks."
              }
            ]}
            
            clinicalQuiz={{
              question: "Which metric best indicates successful AI-EHR integration?",
              options: [
                { id: "a", text: "Number of clicks reduced" },
                { id: "b", text: "Time saved on documentation" },
                { id: "c", text: "Patient satisfaction scores" },
                { id: "d", text: "Provider adoption rate" }
              ],
              correctAnswerId: "b",
              explanation: "While all metrics are important, time saved on documentation directly impacts provider efficiency, patient care quality, and overall healthcare delivery effectiveness."
            }}
          />
        </TabsContent>

        <TabsContent value="efficiency-calculator" className="pt-6 animate-fade-in">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              EPIC Efficiency Calculator
            </h2>
            <p>Calculate your potential time savings and click reduction with CRUSH AI Medical Scribe:</p>
          </div>

          <ClinicalCalculator
            title="EPIC Workflow Calculator"
            description="Estimate time saved and click reduction in your EPIC workflow"
            fields={[
              {
                id: "ordersPerDay",
                label: "Orders/Documentation Tasks Per Day",
                type: "slider",
                min: 10,
                max: 100,
                step: 5,
                defaultValue: 40,
                description: "Average number of orders or documentation tasks performed daily"
              },
              {
                id: "workingDays",
                label: "Working Days Per Month",
                type: "slider",
                min: 10,
                max: 25,
                step: 1,
                defaultValue: 20,
                description: "Number of clinical days per month"
              }
            ]}
            calculateResult={calculateTimeAndClicks}
            reference="Based on actual EPIC usage data and AI implementation results."
          />
        </TabsContent>

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">EHR Efficiency Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation time reduction: <span className="font-medium text-emerald-600">75%</span></li>
                  <li>Click reduction per task: <span className="font-medium text-emerald-600">80%</span></li>
                  <li>Average time saved per provider: <span className="font-medium text-emerald-600">2.3 hours daily</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Workflow Improvement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Real-time documentation rate: <span className="font-medium text-emerald-600">92%</span></li>
                  <li>Chart completion at point-of-care: <span className="font-medium text-emerald-600">89%</span> (increased from 34%)</li>
                  <li>Provider adoption rate: <span className="font-medium text-emerald-600">96%</span> after 3 months</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Clinical Outcomes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Increased face-to-face patient time: <span className="font-medium text-emerald-600">42%</span></li>
                  <li>Provider burnout reduction: <span className="font-medium text-emerald-600">38%</span></li>
                  <li>Clinical decision support utilization: <span className="font-medium text-emerald-600">+57%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
