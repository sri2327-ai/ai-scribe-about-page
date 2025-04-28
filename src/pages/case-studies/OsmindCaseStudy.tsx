
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function OsmindCaseStudy() {
  return (
    <CaseStudyLayout
      title="80% Faster Documentation with OSMIND EHR Integration"
      description="CRUSH integrates with OSMIND EHR to reduce documentation time by 80%, increasing clinician efficiency."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p>
            Heather Rosdail, a leading psychiatric provider at Insights Psychiatric, faced a growing challenge: 
            documentation overload. Managing extensive psychiatric evaluations and progress notes was consuming 1-2 hours 
            daily, often spilling into nights and weekends. The time spent on EHR data entry was taking away from 
            meaningful patient interactions and personal well-being.
          </p>
          <p className="mt-4">
            To enhance efficiency and reclaim valuable time, Heather sought a seamless, AI-driven solution that could 
            integrate directly with OSMIND EHR while ensuring comprehensive, high-quality notes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Time-Consuming Documentation – Progress notes and evaluations required extensive typing, leading to long work hours.</li>
            <li>After-Hours Administrative Burden – Late-night and weekend documentation was cutting into personal time.</li>
            <li>Repetitive Manual Data Entry – Entering notes into OSMIND EHR involved redundant tasks, reducing clinical efficiency.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">The Solution: CRUSH AI Medical Scribe</h2>
          <p>
            Heather Rosedail implemented CRUSH AI, an advanced AI-powered medical scribe designed to streamline psychiatric documentation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>1-2 Hours Saved Daily – CRUSH automates note-taking, allowing Heather to focus more on patient care and less on paperwork.</li>
            <li>80% Faster Documentation – Progress notes are generated in a fraction of the time, significantly reducing administrative workload.</li>
            <li>No More Late-Night or Weekend Work – With documentation completed during patient visits, Heather reclaimed personal and family time.</li>
            <li>Seamless OSMIND EHR Integration – Notes are entered directly into the EHR, eliminating repetitive data entry.</li>
            <li>Minimal Edits, Maximum Efficiency – AI-generated draft progress notes require only quick reviews and minor adjustments.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">The Impact</h2>
          <p>
            Since adopting CRUSH AI, Heather Rosdail and her team have experienced a transformative shift in workflow 
            efficiency. With a 40%-50% reduction in documentation time, clinicians now focus more on patient-centered
            care while maintaining accurate, comprehensive records.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            For Heather Rosdail and Integrated Insights Psychiatry, CRUSH AI has become an essential partner in modern 
            psychiatric care. By eliminating documentation overload, it empowers clinicians to spend more time with 
            patients and less time on administrative tasks.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
