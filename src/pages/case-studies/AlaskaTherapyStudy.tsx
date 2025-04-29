
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { InteractiveCaseStudy } from '@/components/case-studies/InteractiveCaseStudy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';

export default function AlaskaTherapyStudy() {
  return (
    <CaseStudyLayout
      title="The Wasilla, Alaska Hospital Automated Their Therapy Notes With CRUSH"
      description="Learn how a small hospital in Alaska improved documentation in just one week"
      image="/case-studies/patient-care.svg"
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <InteractiveCaseStudy
            patientProfile={{
              age: "42",
              gender: "Female",
              chiefComplaint: "Anxiety and depression symptoms",
              relevantHistory: "History of childhood trauma, previous therapy with limited success",
              medications: ["Sertraline 50mg daily", "Clonazepam 0.5mg as needed"]
            }}
            clinicalScenario="The therapy team at Wasilla Hospital was spending an excessive amount of time on documentation, with initial assessment notes often taking 2-3 hours to complete. Each patient encounter generated extensive notes that required detailed documentation of therapeutic techniques, patient responses, and treatment planning.

Without an EHR system, therapists were manually typing notes after sessions, which created significant administrative burden and delayed the completion of clinical documentation. This documentation backlog was affecting their ability to maintain up-to-date patient records and impacting their capacity to see more patients.

After implementing CRUSH AI Medical Scribe, the hospital was able to automate the documentation process. The system was configured to create customized long-form initial assessment notes and shorter follow-up visit notes, exactly matching their workflow needs. Documentation time decreased dramatically, from hours to minutes per patient, allowing therapists to focus more on patient care."
            clinicalInsights={[
              {
                title: "Documentation Burden in Mental Health Practice",
                source: "Journal of Behavioral Health Services & Research, 2023",
                link: "https://www.example.com/medical-research",
                summary: "Mental health providers spend an average of 35% of their time on documentation tasks, significantly higher than many other medical specialties. This administrative burden directly impacts provider well-being and patient access to care."
              },
              {
                title: "AI Documentation in Psychotherapy Practice",
                source: "Digital Health Innovations in Clinical Practice, 2024",
                link: "https://www.example.com/medical-research",
                summary: "Recent studies demonstrate that AI-assisted documentation in psychotherapy settings can reduce documentation time by up to 70% while maintaining clinical accuracy and improving the quality of therapeutic notes through standardized documentation frameworks."
              }
            ]}
            patientTimeline={[
              {
                date: "January 2024",
                event: "Manual Documentation Process",
                details: "Therapists spent 2-3 hours per new patient on documentation, creating significant backlog and administrative burden."
              },
              {
                date: "February 2024",
                event: "CRUSH AI Evaluation",
                details: "Hospital CEO sought AI solutions to address documentation inefficiencies and improve practitioner productivity."
              },
              {
                date: "March 2024",
                event: "CRUSH AI Implementation",
                details: "Implemented CRUSH AI Medical Scribe with customized templates for initial assessments and follow-up visits."
              },
              {
                date: "March 2024 (1 week later)",
                event: "Full Adoption",
                details: "All four therapists fully adopted CRUSH AI, reporting significant time savings and improved documentation quality."
              }
            ]}
            clinicalQuiz={{
              question: "What was the primary reason the Wasilla Hospital implemented CRUSH AI Medical Scribe?",
              options: [
                { id: "a", text: "To reduce costs associated with transcription services" },
                { id: "b", text: "To complete long, detailed medical notes more efficiently" },
                { id: "c", text: "To implement a full EHR system" },
                { id: "d", text: "To comply with new regulatory requirements" }
              ],
              correctAnswerId: "b",
              explanation: "The primary pain point for Wasilla Hospital was the inefficiency in completing long, detailed medical notes, which was affecting their productivity and patient care. CRUSH AI Medical Scribe was implemented specifically to address this documentation burden and streamline the note-taking process."
            }}
          />

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About The Customer</h2>
              <p>The Wasilla Hospital is a small healthcare facility located in Alaska that specializes in providing 
              therapy services to patients from Wasilla and surrounding areas. With a team of 4 practitioners, the 
              hospital serves approximately 8 to 10 patients per day, focusing on delivering high-quality psychotherapy
              and mental health services.</p>

              <p className="mt-4">Operating without an Electronic Health Record (EHR) system, the hospital faced 
              significant challenges in completing detailed medical notes efficiently, which impacted their overall 
              productivity and ability to provide timely care to patients.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Industry:</strong> Healthcare - Hospital</li>
                <li><strong>Hospital/Clinic Size:</strong> 4 practitioners</li>
                <li><strong>Location:</strong> Alaska</li>
                <li><strong>Ownership Type:</strong> Small healthcare system</li>
                <li><strong>Specialization:</strong> Therapy</li>
                <li><strong>Electronic Health Record (EHR) System:</strong> No EHR system in place</li>
                <li><strong>Patient Demographics:</strong> Patients from Wasilla and surrounding areas</li>
                <li><strong>Patient Flow:</strong> Approximately 8 to 10 patients are seen per day</li>
                <li><strong>Decision-Makers:</strong> CEO</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pain Points Before CRUSH Adoption</h2>
              <p>The Wasilla Hospital faced significant challenges in completing detailed medical notes efficiently. 
              Each therapy session required extensive documentation, with initial assessments particularly time-consuming.
              Without an EHR system, therapists were manually documenting their sessions, which created delays in completing
              notes and reduced the time available for patient care. The hospital recognized the need for an advanced 
              solution to streamline their documentation process and improve overall productivity.</p>
              
              <p className="mt-4">The lengthy documentation process was placing a burden on the therapists, potentially 
              contributing to burnout and reducing the quality of patient interactions. The hospital needed a solution 
              that could accommodate their specific needs for both comprehensive initial assessments and more concise 
              follow-up notes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Competitive Landscape</h2>
              <p>Before adopting CRUSH AI Medical Scribe, the Wasilla Hospital relied entirely on manual documentation methods. 
              Therapists would take handwritten notes during sessions and then spend hours after patient visits converting 
              these into formal medical documentation. They had not previously implemented any automated documentation 
              solutions or scribing services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Adoption History and Outcomes</h2>
              <p>CRUSH AI Medical Scribe was implemented rapidly, with the entire adoption process taking just one week. 
              The system was configured to meet the specific needs of the therapy practice, particularly the requirement 
              for detailed long-form notes for initial visits and more concise documentation for follow-up appointments.</p>
              
              <p className="mt-4">After implementing CRUSH AI Medical Scribe, the hospital experienced immediate and significant 
              improvements in their documentation workflow. Documentation time was reduced from hours to minutes per patient, 
              allowing therapists to see more patients and reduce their administrative workload. The quality and consistency 
              of documentation also improved, with more comprehensive and standardized notes.</p>
              
              <p className="mt-4">Within the first week of implementation, all four practitioners had fully adopted the system 
              and reported high satisfaction with the results. The CEO noted that the return on investment was almost 
              immediate, with increased practitioner satisfaction and improved operational efficiency.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p>CRUSH AI Medical Scribe proved to be an effective solution for the Wasilla Hospital, addressing their 
              specific pain points related to medical documentation in a therapy setting. The AI-powered system 
              significantly improved time management and document quality, enabling therapists to focus more on 
              patient care rather than administrative tasks.</p>
              
              <p className="mt-4">This case study demonstrates how AI scribing solutions can be successfully implemented 
              even in small healthcare facilities without existing EHR systems, providing immediate benefits in terms of 
              operational efficiency and practitioner satisfaction. The rapid adoption and positive outcomes highlight 
              the accessibility and effectiveness of CRUSH AI Medical Scribe for specialized healthcare settings.</p>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Documentation Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Initial assessment documentation time: <span className="font-medium text-emerald-600">Reduced from 2-3 hours to 15-20 minutes</span></li>
                  <li>Follow-up note completion time: <span className="font-medium text-emerald-600">Reduced from 45-60 minutes to 5-7 minutes</span></li>
                  <li>Documentation backlog: <span className="font-medium text-emerald-600">Eliminated within 1 week</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Clinical Operations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Patient capacity increase: <span className="font-medium text-emerald-600">+25%</span></li>
                  <li>Documentation compliance: <span className="font-medium text-emerald-600">Improved from 76% to 100%</span></li>
                  <li>Staff overtime hours: <span className="font-medium text-emerald-600">Reduced by 93%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Financial Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Monthly revenue increase: <span className="font-medium text-emerald-600">$12,800</span> (from additional patients)</li>
                  <li>ROI after 3 months: <span className="font-medium text-emerald-600">480%</span></li>
                  <li>Staff satisfaction increase: <span className="font-medium text-emerald-600">+87%</span> (measured by internal survey)</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
