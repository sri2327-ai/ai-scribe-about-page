
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';

export default function MultiProviderPracticesStudy() {
  return (
    <CaseStudyLayout
      title="CRUSH Saves 2+ Hours Daily for Multi-Provider Practices"
      description="CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation."
      image="/ImprovePatientCare.webp"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Multi-Provider Practice Challenges</h2>
          <p>Westside Medical Group, a busy multi-provider practice with 8 physicians and 5 nurse practitioners, 
            was facing significant documentation challenges. Each provider was spending 2-3 hours daily on notes 
            and administrative tasks, leading to burnout, longer work hours, and reduced patient interaction time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Implementing CRUSH Across Multiple Providers</h2>
          <p>The practice implemented CRUSH AI Medical Scribe for all 13 providers, with the following approach:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Phased Implementation:</strong> Starting with two physicians as pilot users, then expanding to all providers over six weeks.</li>
            <li><strong>Customized Provider Profiles:</strong> CRUSH was configured to match each provider's specialty, documentation style, and workflow preferences.</li>
            <li><strong>Cross-Provider Consistency:</strong> The system standardized documentation across providers while maintaining individual clinical voices.</li>
            <li><strong>Integrated Team-Based Care:</strong> Documentation sharing and handoffs were streamlined through CRUSH's collaborative tools.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Practice-Wide Results</h2>
          <p>After full implementation across all providers, Westside Medical Group experienced:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Time Savings:</strong> An average of 2.3 hours saved per provider per day on documentation tasks.</li>
            <li><strong>Extended Capacity:</strong> The practice was able to accommodate 20% more patients without extending hours.</li>
            <li><strong>Documentation Consistency:</strong> Standardized documentation improved care coordination and reduced errors.</li>
            <li><strong>Provider Satisfaction:</strong> Provider burnout scores decreased by 35% within three months of implementation.</li>
            <li><strong>Better Work-Life Balance:</strong> 11 out of 13 providers reported leaving work on time consistently.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Multi-Provider Specific Features</h2>
          <p>CRUSH's capabilities were particularly valuable in this multi-provider setting:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Centralized Administration:</strong> Practice managers could oversee documentation metrics across all providers.</li>
            <li><strong>Shared Templates:</strong> Best-practice templates could be distributed across the care team.</li>
            <li><strong>Cross-Provider Communication:</strong> The system facilitated better documentation during patient handoffs.</li>
            <li><strong>Standardized Quality Metrics:</strong> Ensured consistent documentation of quality measures across all providers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Financial Impact</h2>
          <p>The practice-wide implementation showed substantial ROI:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Additional Patient Visits:</strong> 160 more patient visits per week across the practice.</li>
            <li><strong>Revenue Increase:</strong> Approximately $1.2 million in additional annual revenue.</li>
            <li><strong>Administrative Staff Redeployment:</strong> Three administrative staff were reassigned from documentation support to other revenue-generating activities.</li>
            <li><strong>Total Implementation Cost:</strong> $78,000 annually for all providers.</li>
            <li><strong>ROI:</strong> Over 15:1 return on investment in the first year.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Practice Director's Perspective</h2>
          <p className="italic">"Implementing CRUSH across our practice was transformative. Beyond the obvious time savings, we've seen remarkable improvements in provider satisfaction and staff retention. Our documentation is now more consistent and comprehensive, which has reduced our compliance concerns and improved our quality scores. The system paid for itself within the first two months."</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
