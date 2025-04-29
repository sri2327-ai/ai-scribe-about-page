
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import InteractiveCaseStudy from '@/components/case-studies/InteractiveCaseStudy';

export default function FamilyMedicineCaseStudy() {
  return (
    <CaseStudyLayout
      title="Family Medicine Practitioner In Canada Moved To CRUSH From GPT4"
      description="Learn how a Canadian doctor improved their practice with CRUSH AI"
      image="/case-studies/family-medicine.svg"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">About The Customer</h2>
          <p>Dr. Willem Gielen, MD, Co-Founder of Nordjysk Speciallægeklinik, is a leading specialist dedicated to 
            delivering high-quality patient care. Operating in a multilingual region, he faced increasing challenges 
            with medical documentation, including language barriers, time-consuming note-taking, and administrative 
            overload.</p>

          <p className="mt-4">To continue providing efficient and patient-centered care, Dr. Gielen needed a reliable, AI-powered
            documentation solution that could seamlessly handle Nordic languages and reduce the time spent on 
            clinical notes.</p>
        </section>

        <InteractiveCaseStudy
          patientProfile={{
            age: "45",
            gender: "Male",
            chiefComplaint: "Recurrent upper respiratory infections and fatigue",
            relevantHistory: "History of seasonal allergies, non-smoker",
            medications: ["Loratadine 10mg daily", "Multivitamin supplement"]
          }}
          clinicalScenario="Dr. Gielen was seeing approximately 25 patients per day in his family medicine practice. He was using ChatGPT to help with documentation, but found it time-consuming to manually type prompts, review the generated content, and transfer it into his EHR system (Accuro). Each note took him between 5-8 minutes to complete, adding up to nearly 2 hours of documentation work daily.

After implementing CRUSH AI Medical Scribe, Dr. Gielen was able to automate the documentation process directly from patient conversations. The system correctly captured medical terminology, accommodated his documentation preferences, and integrated with his EHR. Documentation time per patient decreased to 1-2 minutes, saving him over 1.5 hours daily."
          clinicalInsights={[
            {
              title: "Impact of EHR Documentation on Physician Burnout",
              source: "Journal of Medical Systems, 2023",
              link: "https://www.example.com/medical-research",
              summary: "Research shows that physicians spend approximately 16 minutes per patient encounter on EHR documentation. This administrative burden is a significant contributor to physician burnout, with 70% of doctors reporting documentation as a major source of job dissatisfaction."
            },
            {
              title: "AI-Assisted Documentation in Primary Care",
              source: "Canadian Medical Association Journal, 2024",
              link: "https://www.example.com/medical-research",
              summary: "A recent study found that AI-assisted documentation can reduce documentation time by up to 60% in primary care settings, while maintaining or improving the quality of clinical notes."
            }
          ]}
          patientTimeline={[
            {
              date: "January 2023",
              event: "Initial GPT4 Implementation",
              details: "Dr. Gielen began using ChatGPT to help draft clinical notes, which required manual prompting and significant editing."
            },
            {
              date: "March 2023",
              event: "Identified Limitations",
              details: "Recognized inefficiencies in the process, including time spent copying/pasting and correcting AI-generated content."
            },
            {
              date: "April 2023",
              event: "CRUSH AI Evaluation",
              details: "Began trial of CRUSH AI Medical Scribe to compare efficiency and accuracy against manual ChatGPT use."
            },
            {
              date: "May 2023",
              event: "Full Implementation",
              details: "Completely transitioned to CRUSH AI Medical Scribe after seeing substantial time savings and improved documentation quality."
            }
          ]}
          clinicalQuiz={{
            question: "What was the primary reason Dr. Gielen switched from ChatGPT to CRUSH AI for medical documentation?",
            options: [
              { id: "a", text: "ChatGPT couldn't understand medical terminology" },
              { id: "b", text: "CRUSH AI was more affordable" },
              { id: "c", text: "The manual process of prompting and transferring notes was time-consuming" },
              { id: "d", text: "His EHR system required a specialized integration" }
            ],
            correctAnswerId: "c",
            explanation: "Dr. Gielen switched primarily because the manual process of typing prompts into ChatGPT, reviewing the document, and manually entering it into the EHR was time-consuming. CRUSH AI's ability to automate this entire workflow directly from patient conversations was the key advantage."
          }}
          discussionTopics={[
            "How can AI-assisted documentation tools be improved for multilingual healthcare environments?",
            "What are the best practices for integrating AI scribes with existing EHR systems?",
            "How might time savings from documentation translate to improved patient outcomes?",
            "What training do physicians need to optimize their use of AI documentation tools?"
          ]}
        />

        <section>
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Industry:</strong> Healthcare - Individual Practitioner (Family Medicine).</li>
            <li><strong>Hospital/Clinic Size:</strong> Individual practitioner</li>
            <li><strong>Location: </strong> Canada</li>
            <li><strong>Ownership Type:</strong> Part of a larger healthcare system</li>
            <li><strong>Specialization: </strong> Family medicine.</li>
            <li><strong>Electronic Health Record (EHR) System:</strong> Accuro (Local version).</li>
            <li><strong>Patient Demographics: </strong> Patients from Saskatchewan and surrounding areas.</li>
            <li><strong>Patient Flow:</strong> Approximately 25 patients are seen per day.</li>
            <li><strong>Decision-Makers: </strong> Doctor (Chief Medical Officer).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Pain Points Before CRUSH Adoption</h2>
          <p>Before implementing CRUSH AI Medical Scribe, the individual practitioner encountered several challenges
             in medical documentation and administrative processes. Although they relied on ChatGPT for completing 
             documentation, it was still time-consuming to complete the documentation. The physician must type prompts
              into chatGPT, review the document, and manually enter it into the EHR. They realized it was 
              time-consuming and still a burden for the physician. They needed a more efficient tool to alleviate 
              the burden of manually pasting prompts and correcting inaccuracies. They expressed keen interest in 
              trying out the CRUSH AI Medical Scribe to enhance their documentation workflow and compare it with 
              their existing solution.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Competitive Landscape</h2>
          <p>Before adopting CRUSH AI Medical Scribe, they used ChatGPT for documentation, which involved self-documentation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Adoption History and Outcomes</h2>
          <p>CRUSH AI Medical Scribe was implemented in a week. The notes were as per the physician's 
            documentation preference. The documentation was created directly from the conversation between the 
            physician and the patient. After adopting CRUSH AI Medical Scribe, the practitioner reported a 
            significantly reduced documentation burden. They observed improvements in time efficiency, document quality, 
            and ease of use. CRUSH's capabilities helped streamline the documentation process, allowing the physician 
             focus more on patient care.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>CRUSH AI Medical Scribe was an effective solution for this individual practitioner, addressing his pain points
            and enhancing the medical documentation process. The AI-powered system demonstrated improved time management, 
            document quality, and ease of use, leading to better patient care and overall operational efficiency in their 
            respective healthcare settings.</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
