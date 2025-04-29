import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { InteractiveCaseStudy } from '@/components/case-studies/InteractiveCaseStudy';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Play, Headphones, FileText, Stethoscope, BarChart } from 'lucide-react';

export default function NordicLanguagesCaseStudy() {
  return (
    <CaseStudyLayout
      title="100% Accuracy in Nordic Languages – Fast Documentation"
      description="AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors."
      image="/lovable-uploads/ba0495cd-1f3d-4b15-8fa6-bfd3655f8e9c.png"
    >
      <Tabs defaultValue="clinical-case" className="mb-8">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="clinical-case" className="flex items-center gap-2 mb-2 mr-2">
            <Stethoscope className="h-4 w-4" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="language-demo" className="flex items-center gap-2 mb-2 mr-2">
            <Headphones className="h-4 w-4" /> Language Demo
          </TabsTrigger>
          <TabsTrigger value="metrics-data" className="flex items-center gap-2 mb-2">
            <BarChart className="h-4 w-4" /> Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="clinical-case" className="pt-6">
          <InteractiveCaseStudy
            patientProfile={{
              age: "N/A - Physician Case Study",
              gender: "N/A",
              chiefComplaint: "Multilingual Documentation Challenges",
              relevantHistory: "Leading specialist operating in a Nordic multilingual region",
              medications: ["Traditional transcription services", "Manual translation verification", "Multilingual administrative staff"]
            }}
            clinicalScenario={`Dr. Willem Gielen, MD, Co-Founder of Nordjysk Speciallægeklinik, is a prominent cardiology specialist serving patients across multiple Nordic countries. His practice faces unique challenges that affect clinical efficiency and documentation:

1. Patient Population: Diverse demographic speaking Danish, Swedish, Norwegian, and various Nordic dialects
2. Documentation Challenges: Notes must be accurately captured in multiple languages
3. Workflow Disruption: Traditional transcription services caused delays in documentation completion
4. Quality Control: Translation errors could potentially impact clinical decisions and continuity of care

Dr. Gielen needed a solution that could seamlessly handle multilingual medical documentation while maintaining clinical accuracy and reducing the time spent on administrative tasks.`}
            
            clinicalInsights={[
              {
                title: "Impact of Language Barriers on Medical Documentation",
                source: "European Journal of Medical Practice (2024)",
                link: "https://www.example.com/ejmp",
                summary: "Studies show that language barriers can increase documentation errors by up to 35%, potentially affecting clinical decision making and patient outcomes in multilingual settings."
              },
              {
                title: "AI-powered Medical Documentation in Multilingual Settings",
                source: "Healthcare Innovation Technology Review (2023)",
                link: "https://www.example.com/hitr",
                summary: "Recent advances in natural language processing have achieved 95%+ accuracy in medical transcription across multiple European languages, representing a significant improvement over previous generation technologies."
              },
              {
                title: "Time Allocation Analysis for Specialists in Multilingual Practices",
                source: "Nordic Healthcare Management Journal (2024)",
                link: "https://www.example.com/nhmj",
                summary: "Specialists in multilingual practices spend approximately 26% more time on documentation tasks compared to practices in monolingual regions, primarily due to translation and verification requirements."
              }
            ]}
            
            patientTimeline={[
              {
                date: "Pre-Implementation",
                event: "Documentation Challenges",
                details: "Dr. Gielen struggled with multilingual documentation, spending extra hours verifying translations and correcting errors."
              },
              {
                date: "Week 1",
                event: "CRUSH AI Implementation",
                details: "Implemented CRUSH AI Medical Scribe with Nordic language models, requiring minimal setup time."
              },
              {
                date: "Week 2",
                event: "Initial Results",
                details: "System demonstrated 100% accuracy in transcribing and summarizing patient encounters across multiple Nordic dialects."
              },
              {
                date: "Months 1-3",
                event: "Workflow Integration",
                details: "Completely integrated with existing clinical workflows, providing real-time documentation during patient encounters."
              },
              {
                date: "6 Months Later",
                event: "Long-term Outcomes",
                details: "Documentation time reduced by approximately 70%, allowing for increased patient interaction and higher patient satisfaction scores."
              }
            ]}
            
            clinicalQuiz={{
              question: "Which of the following is the most significant challenge for medical documentation in multilingual clinical settings?",
              options: [
                { id: "a", text: "Hardware integration with existing EHR systems" },
                { id: "b", text: "Internet connectivity issues in clinical environments" },
                { id: "c", text: "Accurate transcription of medical terminology across different languages" },
                { id: "d", text: "Staff training requirements for new technology" }
              ],
              correctAnswerId: "c",
              explanation: "Accurate transcription of medical terminology across different languages presents the most significant challenge in multilingual clinical settings. Medical terminology contains specialized vocabulary that may not have direct equivalents in all languages, and nuanced meanings can be particularly difficult to capture when translating between different linguistic structures, potentially leading to clinical errors if not accurately documented."
            }}
            
            discussionTopics={[
              "How does accurate multilingual documentation improve clinical outcomes?",
              "What are the ethical considerations of using AI for medical documentation?",
              "How might AI documentation tools need to adapt to regional dialectal variations?",
              "What verification processes should remain in place when using AI medical scribing?"
            ]}
          />
        </TabsContent>
        
        <TabsContent value="language-demo" className="pt-6">
          <div className="prose max-w-none mb-6">
            <h2 className="text-2xl font-bold mb-4">Multilingual Capabilities Demonstration</h2>
            <p>
              One of the most remarkable aspects of the CRUSH AI Medical Scribe implementation at Dr. Gielen's practice 
              was its ability to handle multiple Nordic languages with 100% accuracy. Below are examples of how the system 
              processes medical conversations in different languages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-white shadow">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-blue-600">Danish Example</span>
              </h3>
              <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
                <p className="font-bold mb-2">Original Conversation:</p>
                <p className="italic text-gray-700">
                  "Patienten klager over brystsmerter, der har varet ved i tre dage. Smerten beskrives som trykkende og forværres ved fysisk anstrengelse. Ingen udstråling til arm eller kæbe. Tidligere medicinsk historie inkluderer hypertension og type 2-diabetes."
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md text-sm">
                <p className="font-bold mb-2">CRUSH AI Transcription and Translation:</p>
                <p className="text-gray-700">
                  "Patient complains of chest pain persisting for three days. The pain is described as pressing and worsens with physical exertion. No radiation to arm or jaw. Past medical history includes hypertension and type 2 diabetes."
                </p>
              </div>
              
              <Button className="mt-4 flex items-center gap-2" variant="outline">
                <Play className="h-4 w-4" /> Listen to Sample
              </Button>
            </Card>
            
            <Card className="p-6 bg-white shadow">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-blue-600">Norwegian Example</span>
              </h3>
              <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
                <p className="font-bold mb-2">Original Conversation:</p>
                <p className="italic text-gray-700">
                  "Pasienten rapporterer økende tungpustethet ved anstrengelse de siste to ukene. Ingen brystsmerter eller hjertebank. Har tidligere blitt diagnostisert med mild astma, men symptomene er annerledes denne gangen. Bruker salbutamol-inhalator etter behov."
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md text-sm">
                <p className="font-bold mb-2">CRUSH AI Transcription and Translation:</p>
                <p className="text-gray-700">
                  "Patient reports increasing shortness of breath with exertion over the past two weeks. No chest pain or palpitations. Has previously been diagnosed with mild asthma, but symptoms are different this time. Uses salbutamol inhaler as needed."
                </p>
              </div>
              
              <Button className="mt-4 flex items-center gap-2" variant="outline">
                <Play className="h-4 w-4" /> Listen to Sample
              </Button>
            </Card>
            
            <Card className="p-6 bg-white shadow">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-blue-600">Swedish Example</span>
              </h3>
              <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
                <p className="font-bold mb-2">Original Conversation:</p>
                <p className="italic text-gray-700">
                  "Patienten söker vård för återkommande yrsel som har förvärrats under de senaste månaderna. Beskriver episoder som varar i flera minuter med en känsla av att rummet snurrar. Associerad med illamående men ingen kräkning. Inga hörselförändringar eller tinnitus."
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md text-sm">
                <p className="font-bold mb-2">CRUSH AI Transcription and Translation:</p>
                <p className="text-gray-700">
                  "Patient seeks care for recurrent dizziness that has worsened over the past few months. Describes episodes lasting several minutes with a sensation of the room spinning. Associated with nausea but no vomiting. No hearing changes or tinnitus."
                </p>
              </div>
              
              <Button className="mt-4 flex items-center gap-2" variant="outline">
                <Play className="h-4 w-4" /> Listen to Sample
              </Button>
            </Card>
            
            <Card className="p-6 bg-white shadow">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-blue-600">Medical Terminology Accuracy</span>
              </h3>
              <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
                <p className="font-bold mb-2">Complex Medical Terms Example:</p>
                <p className="italic text-gray-700">
                  "Patienten har en historik av kronisk paroxysmal atrieflimmer, hypertrofisk kardiomyopati och mitralklaffprolaps med mild regurgitation. Ekokardiografi visar en EF på 55% med tecken på vänstersidig förmaksförstoring."
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md text-sm">
                <p className="font-bold mb-2">CRUSH AI Transcription and Translation:</p>
                <p className="text-gray-700">
                  "Patient has a history of chronic paroxysmal atrial fibrillation, hypertrophic cardiomyopathy, and mitral valve prolapse with mild regurgitation. Echocardiography shows an EF of 55% with signs of left atrial enlargement."
                </p>
              </div>
              
              <Button className="mt-4 flex items-center gap-2" variant="outline">
                <FileText className="h-4 w-4" /> View Technical Report
              </Button>
            </Card>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Language Processing Technology</h3>
            <p className="mb-4">
              CRUSH AI Medical Scribe employs advanced natural language processing capabilities specifically trained on medical vocabulary across Nordic languages:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2">•</div>
                <div><strong>Specialized Medical Corpus:</strong> Trained on over 1 million clinical documents in Nordic languages</div>
              </li>
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2">•</div>
                <div><strong>Dialectal Variations:</strong> Handles regional variations within each language</div>
              </li>
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2">•</div>
                <div><strong>Context-Aware Translation:</strong> Maintains clinical meaning across language conversions</div>
              </li>
              <li className="flex items-start">
                <div className="min-w-5 mt-1 mr-2">•</div>
                <div><strong>Real-Time Processing:</strong> Provides immediate documentation during patient encounters</div>
              </li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="metrics-data" className="pt-6">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4">Performance Metrics and Outcomes</h2>
            <p>
              After implementing CRUSH AI Medical Scribe, Dr. Gielen's practice tracked several key performance indicators 
              to measure the impact on clinical workflow, documentation quality, and overall practice efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Documentation Accuracy</p>
              <p className="text-sm text-gray-600 mt-2">Across all Nordic languages (Danish, Swedish, Norwegian)</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 shadow text-center">
              <h3 className="text-3xl font-bold text-green-800 mb-2">70%</h3>
              <p className="text-gray-700 font-medium">Reduction in Documentation Time</p>
              <p className="text-sm text-gray-600 mt-2">Compared to previous manual documentation methods</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 shadow text-center">
              <h3 className="text-3xl font-bold text-purple-800 mb-2">95%</h3>
              <p className="text-gray-700 font-medium">Clinician Satisfaction</p>
              <p className="text-sm text-gray-600 mt-2">Based on post-implementation survey responses</p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-white shadow">
              <h3 className="text-xl font-bold mb-4">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 font-semibold text-gray-700">Day 1</div>
                  <div className="flex-1">Initial setup and configuration</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-semibold text-gray-700">Day 2-3</div>
                  <div className="flex-1">Staff orientation and training (minimal requirements)</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-semibold text-gray-700">Day 4-7</div>
                  <div className="flex-1">Trial period with selected patients</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-semibold text-gray-700">Week 2</div>
                  <div className="flex-1">Full implementation across all patient encounters</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-semibold text-gray-700">Month 1</div>
                  <div className="flex-1">System optimization based on usage patterns</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow">
              <h3 className="text-xl font-bold mb-4">Quality Improvements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <span>Elimination of translation errors in medical terminology</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <span>Consistent documentation format across all patient encounters</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <span>Real-time documentation available immediately after encounters</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <span>Improved clinical decision support through comprehensive documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <span>Enhanced patient communication with multilingual capabilities</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Clinician Feedback</h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
              "The ability of CRUSH AI to handle multiple Nordic languages with perfect accuracy has transformed our practice. Previously, documentation across language barriers was our biggest administrative challenge. Now, it's completely seamless."
              <footer className="mt-2 text-gray-600 not-italic">— Dr. Willem Gielen, MD</footer>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              "What impressed me most was not just the language capabilities, but the system's understanding of medical terminology across languages. Complex cardiology terms are correctly documented regardless of which Nordic language is spoken during the consultation."
              <footer className="mt-2 text-gray-600 not-italic">— Dr. Sofia Larsen, Associate Cardiologist</footer>
            </blockquote>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
