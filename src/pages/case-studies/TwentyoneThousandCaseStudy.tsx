
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function TwentyoneThousandCaseStudy() {
  return (
    <CaseStudyLayout
      title="Physician saves $21,144 yearly"
      description="Cut costs by replacing traditional scribes with Crush AI Medical Scribe."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Crush AI Medical Scribe</h2>
          <p>A physician's mind free of Electronic Health Records documentation worries and having enough time in hand to 
            focus on patient encounters is essential to the success of any practice. A frictionless way to create 
            meaningful data in EHR is important not only for regulation but also for driving productivity, seamless 
            reimbursements, and also reducing physician burnout.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Summary Executive</h2>
          <p>Physician's main goal was to get a reliable alternative to Medical Scribes which not only removes the burden 
          of training and managing the Medical Scribe but also increases the revenue.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">About the Physician</h2>
          <p>The physician was handling about 18 patients per day and had 22 clinic days for his practice. Scribes on 
            leave, higher turnover of scribes, training new scribes and incurring a cost of $2,112 per month left him 
            frustrated.</p>
          
          <h3 className="text-xl font-bold mt-4 mb-2">Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scribe attrition risk.</li>
            <li>New scribe onboarding time.</li>
            <li>New scribe learning curves.</li>
            <li>Cost of medical scribes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How S10.AI helped?</h2>
          <p>S10.AI Medical scribe automatically scribes a clinical interaction based on the doctor-patient conversations. This 
            completely mimics a physician and transcribes the encounters and automatically enters into the EHR instantly. 
            The doctor had to spend only 1 hour for the implementation.</p>
          
          <p className="mt-4">The Physician started gaining the following benefits immediately on moving to S10 AI Medical Scribe:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Reduced monthly spend of $1,762.</li>
            <li>No scribe onboarding challenges and learning curves</li>
            <li>No scalability issues.</li>
            <li>No attrition risk.</li>
          </ul>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
