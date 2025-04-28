
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function IntakeQStudy() {
  return (
    <CaseStudyLayout
      title="CRUSH & INTAKE Q: Transforming Dr. Strotman's Practice"
      description="CRUSH integrates seamlessly with INTAKE Q to automate patient intake and documentation, saving time and improving efficiency."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Practice Background: Dr. Strotman's Challenge</h2>
          <p>Dr. Robert Strotman, a family physician with a growing private practice, was struggling with 
            inefficient patient intake processes and documentation workflows. His practice was using INTAKE Q 
            for patient registration but still faced significant manual work transferring information to clinical notes 
            and maintaining consistent documentation quality.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">The Integrated Solution</h2>
          <p>Dr. Strotman implemented CRUSH AI Medical Scribe with its INTAKE Q integration feature, which created a seamless workflow:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Pre-Visit Information Flow:</strong> Patient information collected through INTAKE Q is automatically imported into CRUSH.</li>
            <li><strong>Smart Pre-Population:</strong> CRUSH pre-generates portions of clinical notes based on intake data before the patient visit.</li>
            <li><strong>AI-Enhanced Documentation:</strong> During visits, CRUSH captures the conversation and merges it with intake data.</li>
            <li><strong>Two-Way Synchronization:</strong> Updates to patient information are reflected in both systems automatically.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Workflow Transformation</h2>
          <p>The integration transformed Dr. Strotman's practice workflow:</p>
          
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden my-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Before Integration</th>
                <th className="py-3 px-4 text-left border-b">After Integration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Manual review of intake forms (10 minutes)</td>
                <td className="py-3 px-4 border-b">Automated import and organization (0 minutes)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Re-entering patient history (8 minutes)</td>
                <td className="py-3 px-4 border-b">Auto-populated in clinical notes (0 minutes)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Post-visit documentation (20 minutes)</td>
                <td className="py-3 px-4 border-b">Real-time documentation (5 minutes)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Manual patient portal updates (5 minutes)</td>
                <td className="py-3 px-4 border-b">Automatic synchronization (0 minutes)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Measurable Results</h2>
          <p>The implementation delivered significant benefits:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Time Savings:</strong> 38 minutes saved per patient encounter.</li>
            <li><strong>Increased Capacity:</strong> Dr. Strotman now sees 4 additional patients daily.</li>
            <li><strong>Improved Data Accuracy:</strong> Elimination of transcription errors from intake to clinical documentation.</li>
            <li><strong>Enhanced Patient Experience:</strong> Patients no longer need to repeat information they've already provided.</li>
            <li><strong>Comprehensive Documentation:</strong> Notes now consistently incorporate both patient-reported and clinical findings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Integration Specifics</h2>
          <p>The CRUSH-INTAKE Q integration offers several key technical features:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Secure API Connection:</strong> HIPAA-compliant data transfer between systems.</li>
            <li><strong>Field Mapping Intelligence:</strong> AI-powered matching of intake fields to clinical documentation elements.</li>
            <li><strong>Custom Form Support:</strong> Ability to work with practice-specific INTAKE Q forms.</li>
            <li><strong>Conditional Logic:</strong> Smart incorporation of intake data based on relevance to the current visit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Financial Impact</h2>
          <p>The integration delivered substantial financial benefits:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Revenue Increase:</strong> 4 additional patients daily at an average of $120 per visit = $124,800 annual increase.</li>
            <li><strong>Staff Reallocation:</strong> Medical assistant previously handling intake processing now assists with clinical tasks.</li>
            <li><strong>Reduced Overtime:</strong> Dr. Strotman and staff now complete all work within regular hours, eliminating approximately $18,000 in annual overtime costs.</li>
            <li><strong>Total System Cost:</strong> $15,000 annually for both systems and integration.</li>
            <li><strong>ROI:</strong> Over 950% return on investment.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Dr. Strotman's Experience</h2>
          <p className="italic">"The integration of CRUSH with our INTAKE Q system has eliminated the 'information islands' in our practice. I now start each visit with comprehensive notes already drafted, patients appreciate not having to repeat their history, and my documentation is both faster and more thorough. This integrated approach has given me back hours each day and significantly reduced my administrative burden."</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
