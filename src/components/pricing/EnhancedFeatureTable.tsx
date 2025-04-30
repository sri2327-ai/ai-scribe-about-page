
import React from 'react';
import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface EnhancedFeatureTableProps {
  product: 'crush' | 'bravo';
}

export const EnhancedFeatureTable = ({ product }: EnhancedFeatureTableProps) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="w-full overflow-x-auto"
    >
      {product === 'crush' ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-[#143151] mb-2">CRUSH AI Features Comparison</h3>
            <p className="text-[#387E89]">CRUSH AI works with all major EHRs including Epic, Cerner, Athenahealth, AllScripts, NextGen & more</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Works with ALL Specialties</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">HIPAA Compliant</Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">AI-Powered</Badge>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Time-Saving</Badge>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 border-b border-gray-200">
                <TableHead className="font-bold text-[#143151]">Feature</TableHead>
                <TableHead className="text-center font-bold text-[#143151]">Basic<br/>(No EHR)</TableHead>
                <TableHead className="text-center font-bold text-[#143151]">Basic<br/>(With EHR)</TableHead>
                <TableHead className="text-center font-bold text-[#143151]">Pro</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Category: Documentation & Efficiency */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={4} className="font-bold text-sm uppercase tracking-wider text-[#143151]">Documentation & Efficiency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pinpoint Documentation Accuracy</TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Rapid Documentation Time</span>
                    <span className="text-xs text-gray-500">Complete notes in under 90 seconds</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>AI-Powered Medical Coding</span>
                    <span className="text-xs text-gray-500">ICD-10, CPT, E/M, HCC</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              
              {/* Category: Customization */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={4} className="font-bold text-sm uppercase tracking-wider text-[#143151]">Customization & Specialty Support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Specialty-Specific Templates</span>
                    <span className="text-xs text-gray-500">All medical specialties supported</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Custom Templates Builder</TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>EHR Integration</span>
                    <span className="text-xs text-gray-500">All major EHRs supported</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Advanced Patient Instructions</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              
              {/* Category: Clinical Intelligence */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={4} className="font-bold text-sm uppercase tracking-wider text-[#143151]">Clinical Intelligence</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pre-Charting & Document Management</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Prescription & Lab Management</span>
                    <span className="text-xs text-gray-500">Streamlined workflows for medications & tests</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Clinical Decision Support</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Longitudinal Intelligence</span>
                    <span className="text-xs text-gray-500">Patient history tracking & insights</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-[#143151] mb-2">BRAVO Patient Engagement Features</h3>
            <p className="text-[#387E89]">BRAVO integrates with all practice management systems and improves patient satisfaction</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Reduce No-Shows by 30%</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">HIPAA Compliant</Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">AI-Powered</Badge>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Improves Patient Experience</Badge>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 border-b border-gray-200">
                <TableHead className="font-bold text-[#143151]">Feature</TableHead>
                <TableHead className="text-center font-bold text-[#143151]">Basic</TableHead>
                <TableHead className="text-center font-bold text-[#143151]">Pro</TableHead>
                <TableHead className="text-center font-bold text-[#143151]">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Patient Engagement */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={4} className="font-bold text-sm uppercase tracking-wider text-[#143151]">Patient Engagement</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Automated Appointment Management</span>
                    <span className="text-xs text-gray-500">Scheduling, reminders & follow-ups</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Digital Patient Registration</TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Patient Education & Adherence</span>
                    <span className="text-xs text-gray-500">Customized health materials & reminders</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              
              {/* Integration */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={4} className="font-bold text-sm uppercase tracking-wider text-[#143151]">Integration & Automation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>System Integration</span>
                    <span className="text-xs text-gray-500">EHR, PMS, RCM compatibility</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Automated Refill Processing</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>Pre-Visit Assistance</span>
                    <span className="text-xs text-gray-500">Collects history & prepares preliminary notes</span>
                  </div>
                </TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              
              {/* Enterprise Features */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={4} className="font-bold text-sm uppercase tracking-wider text-[#143151]">Enterprise Capabilities</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Multi-Clinic Management</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Advanced Reporting & Analytics</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dedicated Account Manager</TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </motion.div>
  );
};
