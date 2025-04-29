
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function AlaskaTherapyCaseStudy() {
  return (
    <CaseStudyLayout
      title="The Wasilla, Alaska Hospital Automated Their Therapy Notes With CRUSH AI In Just One Week"
      description="Learn how a small hospital in Alaska streamlined their therapy documentation process and improved patient care with CRUSH AI Medical Scribe"
      image="/case-studies/alaska-therapy.svg"
      ctaTitle="Ready to Transform Your Therapy Documentation?"
      ctaDescription="Join the Wasilla Hospital and hundreds of other healthcare providers who are saving time and improving care with CRUSH AI."
    >
      <div className="space-y-8">
        <section className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Executive Summary</h2>
          <p className="text-lg">
            A small hospital in Wasilla, Alaska successfully implemented CRUSH AI Medical Scribe 
            to automate their therapy documentation process in just one week. The AI-powered solution 
            significantly reduced documentation time, improved note quality, and allowed practitioners 
            to focus more on patient care rather than paperwork.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">About The Customer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
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
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <blockquote className="italic text-gray-700">
                "Before CRUSH AI, we spent hours documenting each therapy session. Now, we can focus on what 
                really matters - providing quality care to our patients."
                <footer className="mt-2 font-semibold">- CEO, Wasilla Hospital</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Pain Points Before CRUSH AI Adoption</h2>
          <div className="bg-red-50/30 p-5 rounded-lg border-l-4 border-red-300">
            <p>The hospital faced significant challenges with completing long, detailed medical notes on time, 
              which negatively affected their efficiency and overall productivity. Each patient encounter runs 
              into hours of documentation work. With no existing EHR system in place, they recognized the 
              urgent need for an advanced solution to streamline their documentation and administrative processes.</p>
            <p className="mt-4">The facility was looking for a solution that could handle the complexity of 
              therapy notes while being easy to implement without an existing EHR infrastructure.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Competitive Landscape</h2>
          <p>Before adopting CRUSH AI Medical Scribe, the hospital relied solely on manual self-documentation 
            methods. This process was time-consuming, prone to errors, and detracted from the time practitioners 
            could spend with patients.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Adoption History and Outcomes</h2>
          <div className="bg-green-50/50 p-5 rounded-lg border-l-4 border-green-300">
            <p>CRUSH AI Medical Scribe was implemented within one week, demonstrating the solution's ease of 
              deployment even in settings without existing EHR systems. The physicians requested specific 
              documentation formats: comprehensive notes for initial visits and concise summaries for follow-up 
              appointments.</p>
            
            <p className="mt-4">After adopting CRUSH AI Medical Scribe, the hospital experienced:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Significant improvements in time management</li>
              <li>Enhanced document quality and consistency</li>
              <li>Greater ease of use compared to previous manual methods</li>
              <li>More time dedicated to patient care rather than paperwork</li>
              <li>Ability to handle varying documentation needs based on visit type</li>
            </ul>
            
            <p className="mt-4">The system's AI capabilities facilitated accurate and efficient documentation, 
              enabling healthcare practitioners to focus more on delivering quality care to their patients.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-700">75%</div>
              <p>Reduction in documentation time</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-700">100%</div>
              <p>Staff adoption rate</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-700">1 Week</div>
              <p>Implementation time</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>CRUSH AI Medical Scribe proved to be an effective solution for this small hospital in Alaska, 
            successfully addressing their pain points and enhancing the medical documentation process. The 
            AI-powered system demonstrated substantial improvements in time management, document quality, and ease of use.</p>
          
          <p className="mt-4">These improvements led to better patient care and overall operational efficiency. 
            This case study demonstrates how CRUSH AI can be rapidly deployed even in facilities without existing 
            EHR systems, making it a versatile solution for various healthcare settings.</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
