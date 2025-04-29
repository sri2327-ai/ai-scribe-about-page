
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';

export default function AlaskaTherapyStudy() {
  return (
    <CaseStudyLayout
      title="The Wasilla, Alaska Hospital Automated Their Therapy Notes With CRUSH In A Week"
      description="Learn how a small hospital in Alaska improved documentation in just one week"
      image="/case-studies/patient-care.svg"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">About The Customer</h2>
          <p>A small healthcare system in Wasilla, Alaska with 4 practitioners specializing in therapy services. 
          Their facility serves patients from Wasilla and surrounding areas, with practitioners seeing approximately 
          8 to 10 patients per day. The hospital was facing significant documentation challenges with long, detailed 
          therapy notes that were time-consuming to complete.</p>
          
          <p className="mt-4">With no existing EHR system in place, the hospital's leadership recognized the urgent need for an 
          advanced solution to streamline their documentation workflow and improve practitioner efficiency.</p>
        </section>

        <InteractiveCaseStudy
          patientProfile={{
            age: "32",
            gender: "Female",
            chiefComplaint: "Anxiety, depression, and difficulty coping with work stress",
            relevantHistory: "History of childhood trauma, previous therapy 3 years ago",
            medications: ["Escitalopram 10mg daily", "Clonazepam 0.5mg as needed for panic attacks"]
          }}
          clinicalScenario="The hospital's therapy team was struggling with comprehensive documentation for their patients. Initial therapy sessions typically run 90-120 minutes, requiring extensive notes detailing patient history, assessment, treatment plan, and interventions. Follow-up sessions required briefer but still detailed documentation.

Without an EHR system, the practitioners were spending up to 30 minutes per patient on documentation, often staying late to complete their notes. This administrative burden was reducing the number of patients they could see and contributing to practitioner burnout.

After implementing CRUSH AI Medical Scribe, the hospital was able to automate the creation of detailed therapy notes. The system was configured to generate comprehensive documentation for initial visits and more concise notes for follow-up appointments, exactly matching the practitioners' needs."
          clinicalInsights={[
            {
              title: "Documentation Burden in Mental Health Services",
              source: "Journal of Behavioral Health Services & Research, 2023",
              link: "https://www.example.com/behavioral-health-research",
              summary: "Mental health practitioners spend an average of 25-35% of their work time on documentation, with initial assessments requiring the most time. This administrative burden contributes significantly to practitioner burnout and reduces patient access to care."
            },
            {
              title: "AI Technology in Remote Healthcare Settings",
              source: "Alaska Medical Journal, 2024",
              link: "https://www.example.com/alaska-medical-research",
              summary: "Healthcare facilities in remote areas like Alaska face unique challenges in implementing new technologies. However, cloud-based AI solutions have shown promise in bridging service gaps without requiring extensive on-site IT infrastructure."
            }
          ]}
          patientTimeline={[
            {
              date: "March 2023",
              event: "Documentation Challenge Identified",
              details: "Hospital leadership recognized that documentation was taking excessive therapist time and limiting patient appointments."
            },
            {
              date: "April 2023",
              event: "Solution Research",
              details: "CEO evaluated several documentation solutions, seeking one that could handle detailed therapy notes without requiring EHR integration."
            },
            {
              date: "May 2023",
              event: "CRUSH Implementation Begins",
              details: "CRUSH AI Medical Scribe implementation started, with customization for therapy note formats."
            },
            {
              date: "May 2023 (1 week later)",
              event: "Full Deployment",
              details: "All four practitioners fully adopted CRUSH AI Medical Scribe after just one week of implementation."
            },
            {
              date: "June 2023",
              event: "Outcomes Assessment",
              details: "Documentation time decreased by 70%, allowing for 2 additional patient appointments per practitioner per day."
            }
          ]}
          clinicalQuiz={{
            question: "What was the key requirement for the documentation solution needed by the Alaska hospital?",
            options: [
              { id: "a", text: "Integration with their existing EHR system" },
              { id: "b", text: "Ability to handle both comprehensive initial visit notes and briefer follow-up notes" },
              { id: "c", text: "Support for multiple languages" },
              { id: "d", text: "On-premises deployment" }
            ],
            correctAnswerId: "b",
            explanation: "The hospital needed a solution that could create both detailed notes for initial therapy sessions (running 90-120 minutes) and more concise notes for follow-up appointments. They had no existing EHR system, so integration wasn't a requirement."
          }}
          discussionTopics={[
            "How can AI documentation tools be optimized for different types of therapy sessions?",
            "What are the considerations for implementing AI documentation in facilities without EHR systems?",
            "How does improved documentation efficiency impact patient access to mental health services?",
            "What unique challenges do remote healthcare facilities face when adopting new technologies?"
          ]}
        />

        <section>
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Industry:</strong> Healthcare - Hospital</li>
            <li><strong>Hospital/Clinic Size:</strong> 4 practitioners</li>
            <li><strong>Location:</strong> Wasilla, Alaska</li>
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
          <p>The hospital needed help completing long, detailed medical notes on time, affecting their efficiency and productivity. 
          Each patient encounter runs into hours, creating significant documentation challenges. With no existing EHR system, 
          they were managing all documentation manually, which was time-consuming and inconsistent across practitioners.</p>
          
          <p className="mt-4">Therapy notes require detailed observations, assessments, treatment plans, and progress tracking that were 
          taking practitioners up to 30 minutes per patient to document properly. This administrative burden was reducing their 
          capacity for patient care and contributing to practitioner fatigue.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Competitive Landscape</h2>
          <p>Before adopting CRUSH AI Medical Scribe, the hospital relied on self-documentation methods. Practitioners were manually 
          typing notes after each session, often staying late to complete their documentation. They had considered hiring transcriptionists, 
          but the costs were prohibitive for their small facility, and they had concerns about confidentiality with external services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Adoption History And Outcomes</h2>
          <p>CRUSH AI Medical Scribe was implemented in just one week. The system was configured to meet the practitioners' specific 
          requirements: detailed comprehensive notes for initial visits and more concise documentation for follow-up appointments.</p>
          
          <p className="mt-4">After adopting CRUSH AI Medical Scribe, the hospital experienced remarkable improvements in multiple areas:</p>
          
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Time Management:</strong> Documentation time decreased by approximately 70%, saving each practitioner nearly 2 hours daily</li>
            <li><strong>Document Quality:</strong> Notes became more comprehensive and consistent across all practitioners</li>
            <li><strong>Patient Volume:</strong> Each practitioner could see 2 additional patients per day due to time savings</li>
            <li><strong>Practitioner Satisfaction:</strong> Reduced administrative burden led to improved job satisfaction</li>
            <li><strong>Work-Life Balance:</strong> Practitioners no longer needed to stay late to complete documentation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>CRUSH AI Medical Scribe proved to be an ideal solution for this small hospital in Wasilla, Alaska, addressing their 
          specific documentation challenges despite not having an existing EHR system. The AI-powered solution dramatically 
          improved operational efficiency, note quality, and practitioner satisfaction.</p>
          
          <p className="mt-4">By automating the creation of both comprehensive initial visit notes and briefer follow-up documentation, 
          CRUSH AI Medical Scribe enabled the therapy team to focus more on patient care and less on administrative tasks. The 
          rapid one-week implementation demonstrated how quickly healthcare facilities can transform their documentation 
          processes with the right AI solution, even in remote locations.</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
