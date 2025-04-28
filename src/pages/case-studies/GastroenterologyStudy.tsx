
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function GastroenterologyStudy() {
  return (
    <CaseStudyLayout
      title="Save 2 Hours Daily – AI Efficiency for Gastroenterologists"
      description="Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">The Documentation Challenge in Gastroenterology</h2>
          <p>Gastroenterologists face unique documentation challenges due to the complex nature of their specialty. 
            Each patient visit involves detailed examination findings, procedure notes, and extensive follow-up 
            recommendations. Before implementing CRUSH, Dr. Melissa Chen spent an average of 3 hours daily on 
            documentation across her busy practice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">CRUSH AI Implementation</h2>
          <p>After implementing CRUSH AI Medical Scribe, Dr. Chen's practice experienced immediate benefits:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Automated Procedure Documentation:</strong> CRUSH automatically generates detailed colonoscopy and endoscopy reports based on dictated findings.</li>
            <li><strong>Intelligent Template Management:</strong> Specialty-specific templates for common GI conditions ensure comprehensive documentation.</li>
            <li><strong>Follow-up Protocol Automation:</strong> The system automatically generates appropriate follow-up schedules based on findings and guidelines.</li>
            <li><strong>Seamless EHR Integration:</strong> All documentation is automatically formatted and integrated into the practice's EHR system.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Measurable Results</h2>
          <p>The implementation of CRUSH AI Medical Scribe resulted in:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Time Savings:</strong> Documentation time reduced from 3 hours to just 1 hour daily — a 2-hour daily savings.</li>
            <li><strong>Increased Patient Capacity:</strong> The practice was able to see 4 additional patients per day.</li>
            <li><strong>Enhanced Documentation Quality:</strong> Notes are now more comprehensive and consistent, reducing potential compliance issues.</li>
            <li><strong>Improved Work-Life Balance:</strong> Dr. Chen now leaves the office by 5:30 PM instead of 7:30 PM.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Specialist-Specific Feature: Procedure Documentation</h2>
          <p>For gastroenterologists, procedure documentation is particularly time-consuming. CRUSH AI's 
            specialty-specific feature for procedure documentation has been transformative:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Voice-activated capture of key findings during procedures</li>
            <li>Automatic generation of procedure reports with appropriate medical terminology</li>
            <li>Integration of images with relevant annotations</li>
            <li>Automated coding suggestions for optimal reimbursement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">ROI Assessment</h2>
          <p>The financial impact of implementing CRUSH has been significant for Dr. Chen's practice:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Additional Revenue:</strong> With 4 more patients daily at an average reimbursement of $180 per visit, the practice generates approximately $144,000 in additional annual revenue.</li>
            <li><strong>Cost of Implementation:</strong> The annual investment in CRUSH for the practice is $12,000.</li>
            <li><strong>Net Financial Benefit:</strong> $132,000 annual return on investment.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Dr. Chen's Perspective</h2>
          <p className="italic">"CRUSH AI has transformed our practice. Not only do we have more time for patients, but the quality of our documentation has improved dramatically. The system understands gastroenterology terminology and procedures, which makes it invaluable. I now have time to review the latest research and can go home at a reasonable hour."</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
