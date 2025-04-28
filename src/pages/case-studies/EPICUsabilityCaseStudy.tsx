
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function EPICUsabilityCaseStudy() {
  return (
    <CaseStudyLayout
      title="How S10 AI Medical Scribe Assistant Improves EPIC Usability"
      description="Optimize EPIC with AI-powered efficiency."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Reducing Clicks & Time Spent on Documentation</h2>
          <p>S10 AI Medical Scribe Assistant automates documentation by listening to physician-patient 
            interactions and generating clinical notes in real time. This eliminates the need for manual data entry,
            reducing the number of clicks and navigation steps required to complete tasks in EPIC.</p>

          <p className="mt-4">For example, instead of spending 70 seconds and 20+ clicks to place a medication order in EPIC, S10 
            automatically drafts the order based on the physician's spoken instructions, requiring only a quick 
            review and approval.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Enhancing Accuracy & Eliminating Errors</h2>
          <p>Manual data entry is prone to errors—whether it's selecting the wrong medication, ordering the incorrect test, or forgetting a crucial detail. S10 ensures error-free documentation by:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Standardizing Documentation: </strong>Notes are generated according to clinical best practices, ensuring consistency and completeness.</li>
            <li><strong>Reducing Order Errors:</strong>S10 verifies and suggests corrections for potential mistakes in medication or imaging orders.</li>
            <li><strong>Ensuring Compliance: </strong>Documentation meets gold-standard guidelines, reducing liability risks and ensuring regulatory compliance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Increasing Physician Productivity & Satisfaction</h2>
          <p>By eliminating the need to manually enter notes, orders, and other documentation, physicians can:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Spend more time with patients, regaining valuable minutes per encounter.</li>
            <li>See more patients per day, increasing overall productivity.</li>
            <li>Reduce burnout and improve job satisfaction, leading to better morale and work-life balance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Seamless Integration with EPIC & Other EHRs</h2>
          <p>Unlike traditional voice dictation tools that require manual correction, S10 AI Medical 
            Scribe Assistant seamlessly integrates with EPIC, Cerner, and other leading EHR systems, providing:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Real-Time Note Generation:</strong> Structured clinical documentation automatically populates EPIC.</li>
            <li><strong>Automated Coding & Billing Support: </strong>AI-powered coding suggestions help optimize reimbursement.</li>
            <li><strong>Voice-Controlled EHR Navigation: </strong> Physicians can place orders, retrieve patient histories, and review lab results using voice commands instead of multiple clicks.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">EPIC Usability, Reimagined</h2>
          <p>The usability study highlighted that inefficiencies in EPIC aren't just an inconvenience—they directly impact
            patient care, physician workload, and healthcare efficiency. With S10 AI Medical Scribe Assistant, hospitals
            and clinics can:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Cut documentation time by up to 75%.</li>
            <li>Reduce error rates and improve patient safety.</li>
            <li>Boost physician productivity and satisfaction.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Experience the Future of Medical Documentation</h2>
          <p>Tired of battling EPIC's documentation burden? Try S10 AI Medical Scribe Assistant for free and discover 
            how AI-powered automation can eliminate EHR usability frustrations, letting you focus on what truly 
            matters—patient care.</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
