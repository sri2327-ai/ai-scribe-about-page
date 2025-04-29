
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function NordicLanguagesCaseStudy() {
  return (
    <CaseStudyLayout
      title="100% Accuracy in Nordic Languages, Fast Documentation"
      description="Learn how CRUSH AI helps healthcare providers achieve accurate, efficient multilingual documentation."
      image="/lovable-uploads/9df4bd33-3548-4b5b-b7ff-19fb8f8cea4f.png"
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2">
          <TabsTrigger value="case-study" className="flex items-center gap-2 data-[state=active]:text-blue-700">
            Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="performance-metrics" className="flex items-center gap-2 data-[state=active]:text-blue-700">
            Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Challenge: Multilingual Medical Documentation</h2>
            <p>At Nordjysk Speciallægeklinik in Denmark, Dr. Willem Gielen faced a unique challenge. As a specialist serving patients who speak Danish, Norwegian, Swedish, and English, accurate multilingual documentation was becoming increasingly difficult. Traditional solutions struggled with medical terminology across these languages, leading to documentation errors and inefficiencies.</p>
            
            <p className="mt-4">With time pressures mounting and a need for precise clinical notes in multiple languages, Dr. Gielen sought a solution that could handle the linguistic complexity of his practice while maintaining clinical accuracy.</p>
          </section>

          <InteractiveCaseStudy
            patientProfile={{
              age: "52",
              gender: "Female",
              chiefComplaint: "Chronic joint pain with multilingual care needs",
              relevantHistory: "Rheumatoid arthritis diagnosed 5 years ago, Danish speaker with limited English",
              medications: ["Methotrexate 15mg weekly", "Folic acid 5mg daily", "Prednisolone 5mg daily"]
            }}
            clinicalScenario="Dr. Gielen conducted a follow-up consultation with a Danish-speaking patient experiencing worsening rheumatoid arthritis symptoms. The patient described 'morgenstivhed' (morning stiffness) lasting over two hours and 'smerter i alle led' (pain in all joints). She had been visiting family in Norway and consulted with a local physician there who had recommended medication changes.

The consultation switched between Danish and English as they discussed complex medication adjustments. Dr. Gielen needed to document the conversation accurately, including the Norwegian physician's recommendations, Danish terminology for symptoms, and precise medication instructions in a format the patient could understand.

Previously, this type of multilingual documentation would require extensive post-visit time, often with translation assistance. Using CRUSH AI Medical Scribe, Dr. Gielen was able to capture the entire multilingual conversation with 100% accuracy. The AI properly recognized medical terminology in all languages used, correctly documented medication names and dosages, and generated appropriate clinical notes that accurately reflected the nuanced discussion."
            clinicalInsights={[
              {
                title: "Multilingual Challenges in Healthcare Documentation",
                source: "International Journal of Medical Informatics, 2023",
                link: "https://www.example.com/research",
                summary: "Research shows that multilingual healthcare settings face up to 3x more documentation errors compared to monolingual environments, with medication instructions being particularly vulnerable to mistranslation or miscommunication."
              },
              {
                title: "AI Language Models in Clinical Settings",
                source: "Nordic Journal of Health Technology Assessment, 2024",
                link: "https://www.example.com/research",
                summary: "Recent studies demonstrate that advanced AI language models can achieve over 95% accuracy in medical terminology recognition across Germanic languages, including Danish, Norwegian, Swedish, and English, significantly outperforming traditional translation tools."
              }
            ]}
            patientTimeline={[
              {
                date: "January 2023",
                event: "Initial Challenge Identification",
                details: "Dr. Gielen determined that multilingual documentation was consuming up to 40% of his clinical time and introducing potential errors."
              },
              {
                date: "March 2023",
                event: "Traditional Solutions Attempted",
                details: "Tried using translation services and multilingual templates, but found they lacked medical specificity and required excessive editing."
              },
              {
                date: "April 2023",
                event: "CRUSH AI Implementation",
                details: "Deployed CRUSH AI Medical Scribe with its multilingual capabilities to handle consultations in Danish, Norwegian, Swedish, and English."
              },
              {
                date: "June 2023",
                event: "Results Assessment",
                details: "Documented 100% accuracy in medical terminology across all four languages, with documentation time reduced by 75%."
              }
            ]}
            clinicalQuiz={{
              question: "Which aspect of multilingual clinical documentation presents the greatest challenge for healthcare providers?",
              options: [
                { id: "a", text: "Converting date formats between different systems" },
                { id: "b", text: "Handling different naming conventions for patients" },
                { id: "c", text: "Accurately transcribing specialized medical terminology" },
                { id: "d", text: "Managing different electronic health record systems" }
              ],
              correctAnswerId: "c",
              explanation: "Accurate transcription of medical terminology across different languages presents the most significant challenge in multilingual clinical settings. Medical terminology contains specialized vocabulary that may not have direct equivalents in all languages, and nuanced meanings can be particularly difficult to capture when translating between different linguistic structures, potentially leading to clinical errors if not accurately documented."
            }}
          />
        </TabsContent>
        
        <TabsContent value="performance-metrics" className="pt-6 animate-fade-in">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Multilingual Performance Metrics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Language Accuracy</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>Danish:</span>
                      <span className="font-semibold">100%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Norwegian:</span>
                      <span className="font-semibold">99.8%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Swedish:</span>
                      <span className="font-semibold">99.5%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>English:</span>
                      <span className="font-semibold">100%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-lg font-bold text-green-800 mb-2">Time Efficiency</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>Pre-CRUSH documentation time:</span>
                      <span className="font-semibold">12 min/patient</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Post-CRUSH documentation time:</span>
                      <span className="font-semibold">3 min/patient</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Time savings per patient:</span>
                      <span className="font-semibold">75%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Daily time savings:</span>
                      <span className="font-semibold">90 minutes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Clinical Quality Improvements</h2>
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-800 mb-2">Documentation Quality</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Medical terminology accuracy:</span>
                        <span className="font-semibold">99.8%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Cross-language consistency:</span>
                        <span className="font-semibold">97.5%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Patient instruction clarity:</span>
                        <span className="font-semibold">Improved by 35%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-indigo-800 mb-2">Clinical Outcomes</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Patient comprehension:</span>
                        <span className="font-semibold">Increased by 42%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Treatment adherence:</span>
                        <span className="font-semibold">Increased by 28%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Cross-provider communication:</span>
                        <span className="font-semibold">Improved by 45%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">ROI Analysis</h2>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Monthly Cost Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Previous translation services:</span>
                        <span className="font-semibold">€1,200/month</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>CRUSH AI subscription:</span>
                        <span className="font-semibold">€300/month</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Monthly direct savings:</span>
                        <span className="font-semibold">€900/month</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Productivity Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Additional patients seen:</span>
                        <span className="font-semibold">3 per day</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Additional monthly revenue:</span>
                        <span className="font-semibold">€4,500/month</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Annual practice impact:</span>
                        <span className="font-semibold">€64,800</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
