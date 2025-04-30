
import React from 'react';
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Stethoscope, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FunctionalMedicineStudy() {
  return (
    <CaseStudyLayout
      title="Revolutionizing Functional Medicine with CRUSH"
      description="CRUSH streamlines documentation in functional and longevity medicine, enhancing patient care and practice efficiency."
      image="/case-studies/functional-medicine.svg"
    >
      <Tabs defaultValue="case-study" className="mb-8">
        <TabsList className="w-full border-b p-0 mb-2 overflow-x-auto flex-nowrap">
          <TabsTrigger value="case-study" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Stethoscope className="h-4 w-4 mr-2 inline" /> Clinical Case Study
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex-shrink-0 px-4 py-2 whitespace-nowrap data-[state=active]:text-blue-700">
            <Calculator className="h-4 w-4 mr-2 inline" /> Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="case-study" className="pt-6 animate-fade-in">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Functional Medicine Documentation Challenges</h2>
              <p>Functional and longevity medicine practices face unique documentation challenges due to their holistic approach and comprehensive patient evaluations. Dr. Amanda Taylor's practice, Optimal Health Partners, struggled with documenting detailed patient histories, extensive lab analyses, and multi-faceted treatment plans.</p>
              
              <p className="mt-4">Before implementing CRUSH, practitioners at Optimal Health Partners spent an average of 45-60 minutes documenting each patient encounter. With complex initial assessments often requiring comprehensive evaluations across multiple body systems, some documentation sessions extended to 90+ minutes.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Specialized Implementation</h2>
              <p>CRUSH AI Medical Scribe was customized to address the unique requirements of functional medicine practice:</p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Comprehensive Systems Review:</strong> CRUSH was configured to document detailed functional medicine systems reviews across all body systems.</li>
                <li><strong>Lab Integration:</strong> The system was integrated with specialized functional medicine lab panels, facilitating automated documentation of complex lab analyses.</li>
                <li><strong>Supplement Protocols:</strong> CRUSH was trained to document detailed supplement protocols with dosing schedules and interactions.</li>
                <li><strong>Lifestyle Modification Plans:</strong> Custom templates were developed for comprehensive lifestyle modification documentation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Results</h2>
              <p>After three months of implementation, Optimal Health Partners experienced substantial improvements:</p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Documentation Time Reduction:</strong> Average documentation time decreased from 60 minutes to 15 minutes per patient.</li>
                <li><strong>Note Quality Improvement:</strong> Comprehensive documentation increased in thoroughness and consistency.</li>
                <li><strong>Patient Capacity Growth:</strong> The practice increased capacity by 3 additional patients daily.</li>
                <li><strong>Staff Satisfaction:</strong> Provider satisfaction scores increased by 64% based on internal surveys.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Specialty-Specific Benefits</h2>
              <p>CRUSH AI Medical Scribe delivered specific benefits for functional medicine practice:</p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Automated documentation of complex supplement regimens with interaction checks</li>
                <li>Detailed functional medicine lab interpretation templates</li>
                <li>Comprehensive lifestyle modification plans with tracking mechanisms</li>
                <li>Seamless integration with patient education materials</li>
              </ul>
            </section>
            
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Dr. Taylor's Experience</h2>
              <p className="italic">"CRUSH AI has transformed our functional medicine practice. The depth and quality of our documentation has improved significantly, while the time required has been cut by 75%. This allows us to focus more on analyzing complex cases and delivering personalized care. The system's ability to handle our specialized lab panels and supplement protocols has been remarkable."</p>
            </section>
          </div>
        </TabsContent>
        
        <TabsContent value="performance" className="pt-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Documentation Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation time reduction: <span className="font-medium text-emerald-600">75%</span></li>
                  <li>Initial assessment time saved: <span className="font-medium text-emerald-600">82 minutes per patient</span></li>
                  <li>Follow-up note time saved: <span className="font-medium text-emerald-600">38 minutes per patient</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Practice Growth</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Patient capacity increase: <span className="font-medium text-emerald-600">27%</span></li>
                  <li>Monthly revenue growth: <span className="font-medium text-emerald-600">$28,600</span></li>
                  <li>Patient retention improvement: <span className="font-medium text-emerald-600">+18%</span></li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Clinical Quality</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentation completeness score: <span className="font-medium text-emerald-600">97%</span> (increased from 83%)</li>
                  <li>Treatment plan adherence: <span className="font-medium text-emerald-600">Improved by 38%</span></li>
                  <li>Lab result follow-up rate: <span className="font-medium text-emerald-600">99.4%</span> (increased from 87%)</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
}
