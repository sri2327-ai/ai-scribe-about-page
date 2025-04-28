
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function SeventeenThousandCaseStudy() {
  return (
    <CaseStudyLayout
      title="Physician saves $17,796 yearly"
      description="Eliminate transcription costs with Crush S10.AI Medical Scribe."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Crush AI Medical Scribe</h2>
          <p>A physician's mind free of Electronic Health Records documentation worries and having enough time in
             hand to focus on patient encounters is essential to the success of any practice. A frictionless way to 
             create meaningful data in EHR is important not only for regulation but also for driving productivity, 
             seamless reimbursements, and also reducing physician burnout.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p>Physician's main goal was to get a high quality documentation alternative to Medical Transcription which not 
            only removes the burden of insecure file transfers but also reduces the cost.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">About the Physician</h2>
          <p>The physician was handling about 18 patients per day and had 22 clinic days for his practice. 
            The physician was receiving the transcripted document after 24 hours. He was incurring a cost of 
            $ 1.5 for a minute of recording and incurring a cost of $ 1,782 per month.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Challenges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Compliance risks emanating from uncontrolled voice file transfers.</li>
            <li>Backlogs and errors due to batch processing.</li>
            <li>Quality of documentation in EHR.</li>
            <li>Scalability issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How S10.AI helped?</h2>
          <p>Crush physicians findings and summary of an encounter to appropriate templates and contextually 
            enters it into the EHR on autopilot mode instantly. Crush creates medical-legal documents that are 
            grammatically correct and prompt allergies, drug-to-drug interactions, and treatment suggestions.</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Reduced monthly spend of $1,432.</li>
            <li>Avoids compliance risks emanating from uncontrolled voice file transfers.</li>
            <li>Eliminates backlogs and errors due to batch processing No attrition risk.</li>
            <li>CDI standard documentation in EHR.</li>
          </ul>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
