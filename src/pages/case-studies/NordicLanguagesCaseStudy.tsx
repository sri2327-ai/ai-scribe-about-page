
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function NordicLanguagesCaseStudy() {
  return (
    <CaseStudyLayout
      title="100% Accuracy in Nordic Languages, Fast Documentation"
      description="Learn how CRUSH AI helps healthcare providers achieve accurate, efficient multilingual documentation."
      image="/case-studies/family-medicine.svg" // Updated to use Figma-designed UI illustration
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2">
          <TabsTrigger value="case-study" className="flex items-center gap-2 data-[state=active]:text-[#387E89]">
            Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="performance-metrics" className="flex items-center gap-2 data-[state=active]:text-[#387E89]">
            Performance Metrics
          </TabsTrigger>
          <TabsTrigger value="language-performance" className="flex items-center gap-2 data-[state=active]:text-[#387E89]">
            Language Performance
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
                  <h3 className="text-lg font-bold text-[#143151] mb-2">Language Accuracy</h3>
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
                  <h3 className="text-lg font-bold text-[#387E89] mb-2">Time Efficiency</h3>
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
                    <h3 className="text-lg font-bold text-[#143151] mb-2">Documentation Quality</h3>
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
                    <h3 className="text-lg font-bold text-[#387E89] mb-2">Clinical Outcomes</h3>
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
                    <h3 className="text-lg font-bold text-[#143151] mb-2">Monthly Cost Analysis</h3>
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
                    <h3 className="text-lg font-bold text-[#387E89] mb-2">Productivity Benefits</h3>
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

        <TabsContent value="language-performance" className="pt-6 animate-fade-in">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Nordic Language Performance Analysis</h2>
              <p className="mb-6">CRUSH AI Medical Scribe demonstrates exceptional performance across Nordic languages, providing multilingual documentation support with unprecedented accuracy.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-md">
                  <h3 className="text-xl font-bold text-[#143151] mb-4">Danish</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Accuracy</p>
                      <p className="text-2xl font-bold text-[#387E89]">100%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Medical Terms</p>
                      <p className="text-lg font-semibold">99.9%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Dialectal Variations</p>
                      <p className="text-lg font-semibold">98.7%</p>
                    </div>
                    <div className="pt-3 border-t border-blue-200">
                      <h4 className="font-semibold mb-2">Special Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Copenhagen dialect adaptation</li>
                        <li>• Jutland regional terminology</li>
                        <li>• Medical abbreviation expansion</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200 shadow-md">
                  <h3 className="text-xl font-bold text-[#143151] mb-4">Norwegian</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Accuracy</p>
                      <p className="text-2xl font-bold text-[#387E89]">99.8%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Medical Terms</p>
                      <p className="text-lg font-semibold">99.5%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Dialectal Variations</p>
                      <p className="text-lg font-semibold">97.8%</p>
                    </div>
                    <div className="pt-3 border-t border-red-200">
                      <h4 className="font-semibold mb-2">Special Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Bokmål and Nynorsk support</li>
                        <li>• Oslo standard medical terms</li>
                        <li>• Regional healthcare protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200 shadow-md">
                  <h3 className="text-xl font-bold text-[#143151] mb-4">Swedish</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Accuracy</p>
                      <p className="text-2xl font-bold text-[#387E89]">99.5%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Medical Terms</p>
                      <p className="text-lg font-semibold">98.9%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Dialectal Variations</p>
                      <p className="text-lg font-semibold">96.5%</p>
                    </div>
                    <div className="pt-3 border-t border-yellow-200">
                      <h4 className="font-semibold mb-2">Special Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Stockholm medical standards</li>
                        <li>• Gothenburg regional terms</li>
                        <li>• Specialized ICD-10-SE coding</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-200 shadow-md">
                  <h3 className="text-xl font-bold text-[#143151] mb-4">English</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Accuracy</p>
                      <p className="text-2xl font-bold text-[#387E89]">100%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Medical Terms</p>
                      <p className="text-lg font-semibold">100%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Dialectal Variations</p>
                      <p className="text-lg font-semibold">99.9%</p>
                    </div>
                    <div className="pt-3 border-t border-green-200">
                      <h4 className="font-semibold mb-2">Special Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• British/American term mapping</li>
                        <li>• Nordic-English translations</li>
                        <li>• Medical literature integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cross-Language Performance</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#143151] mb-3">Translation Accuracy</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Danish ↔ English:</span>
                        <span className="font-semibold">99.7%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Norwegian ↔ English:</span>
                        <span className="font-semibold">99.5%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Swedish ↔ English:</span>
                        <span className="font-semibold">99.2%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Danish ↔ Norwegian:</span>
                        <span className="font-semibold">98.9%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Danish ↔ Swedish:</span>
                        <span className="font-semibold">98.4%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Norwegian ↔ Swedish:</span>
                        <span className="font-semibold">98.7%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#387E89] mb-3">Context Preservation</h3>
                    <p className="mb-4">CRUSH AI Medical Scribe maintains clinical context when switching between languages, preserving meaning across translations.</p>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold mb-2 text-[#143151]">Case Example</h4>
                      <p className="text-sm italic">"Patient described 'morgenstivhed' in Danish, then switched to English to explain it had worsened since last appointment. CRUSH correctly maintained the clinical context by documenting 'morning stiffness (morgenstivhed) has increased in duration from 1 hour to 2.5 hours since last visit.'"</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Language Processing Metrics</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Processing Feature</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Danish</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Norwegian</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Swedish</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">English</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-2 px-4 font-medium">Real-time Processing</td>
                      <td className="py-2 px-4 text-[#387E89]">98.2%</td>
                      <td className="py-2 px-4 text-[#387E89]">97.8%</td>
                      <td className="py-2 px-4 text-[#387E89]">97.5%</td>
                      <td className="py-2 px-4 text-[#387E89]">99.9%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Medical Vocabulary</td>
                      <td className="py-2 px-4 text-[#387E89]">54,000+ terms</td>
                      <td className="py-2 px-4 text-[#387E89]">49,800+ terms</td>
                      <td className="py-2 px-4 text-[#387E89]">52,300+ terms</td>
                      <td className="py-2 px-4 text-[#387E89]">176,000+ terms</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Context Retention</td>
                      <td className="py-2 px-4 text-[#387E89]">99.1%</td>
                      <td className="py-2 px-4 text-[#387E89]">98.7%</td>
                      <td className="py-2 px-4 text-[#387E89]">98.3%</td>
                      <td className="py-2 px-4 text-[#387E89]">99.8%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Accent Adaptation</td>
                      <td className="py-2 px-4 text-[#387E89]">97.8%</td>
                      <td className="py-2 px-4 text-[#387E89]">96.9%</td>
                      <td className="py-2 px-4 text-[#387E89]">96.2%</td>
                      <td className="py-2 px-4 text-[#387E89]">98.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Code Switching Detection</td>
                      <td className="py-2 px-4 text-[#387E89]">98.4%</td>
                      <td className="py-2 px-4 text-[#387E89]">98.1%</td>
                      <td className="py-2 px-4 text-[#387E89]">97.9%</td>
                      <td className="py-2 px-4 text-[#387E89]">99.6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
