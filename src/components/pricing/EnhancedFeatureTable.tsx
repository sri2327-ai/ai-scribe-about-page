
import React from 'react';
import { motion } from 'framer-motion';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EnhancedFeatureTableProps {
  product: 'crush' | 'bravo';
}

export const EnhancedFeatureTable = ({ product }: EnhancedFeatureTableProps) => {
  // Define features based on product
  const features = product === 'crush' 
    ? [
      { 
        category: 'Documentation',
        features: [
          { name: 'AI-Powered Notes', basic: true, basicWithEHR: true, pro: true },
          { name: 'Multilingual Support', basic: true, basicWithEHR: true, pro: true },
          { name: 'Specialty-Specific Templates', basic: true, basicWithEHR: true, pro: true },
          { name: 'Voice Recognition', basic: true, basicWithEHR: true, pro: true },
          { name: 'Telehealth Support', basic: true, basicWithEHR: true, pro: true, highlight: true },
          { name: 'Available on All Devices', basic: true, basicWithEHR: true, pro: true, highlight: true }
        ]
      },
      {
        category: 'Integration',
        features: [
          { name: 'EHR Integration (All Systems)', basic: false, basicWithEHR: true, pro: true, highlight: true },
          { name: 'Patient Portal Integration', basic: false, basicWithEHR: true, pro: true },
          { name: 'Referral Letters', basic: false, basicWithEHR: true, pro: true },
          { name: 'Custom Templates', basic: false, basicWithEHR: true, pro: true }
        ]
      },
      {
        category: 'Advanced Features',
        features: [
          { name: 'Prescription Refills', basic: false, basicWithEHR: false, pro: true },
          { name: 'Lab Management', basic: false, basicWithEHR: false, pro: true },
          { name: 'Smart Screening & Assessments', basic: false, basicWithEHR: false, pro: true },
          { name: 'Pre-charting', basic: false, basicWithEHR: false, pro: true },
          { name: 'Clinical Decision Support', basic: false, basicWithEHR: false, pro: true },
          { name: 'HCC Tracking & Documentation', basic: false, basicWithEHR: false, pro: true }
        ]
      },
      {
        category: 'Support',
        features: [
          { name: 'Standard Support', basic: true, basicWithEHR: true, pro: true },
          { name: '24x7 Support', basic: true, basicWithEHR: true, pro: true, highlight: true },
          { name: 'Human RCPA Specialists', basic: true, basicWithEHR: true, pro: true, highlight: true },
          { name: 'Dedicated Account Manager', basic: false, basicWithEHR: false, pro: true }
        ]
      }
    ]
    : [
      {
        category: 'Patient Management',
        features: [
          { name: 'Appointment Scheduling', basic: true, pro: true },
          { name: 'Patient Registration', basic: true, pro: true },
          { name: 'Check-In Automation', basic: true, pro: true },
          { name: 'No-Show Reduction', basic: true, pro: true },
          { name: 'Telehealth Support', basic: true, pro: true, highlight: true },
          { name: 'Available on All Devices', basic: true, pro: true, highlight: true }
        ]
      },
      {
        category: 'Integration',
        features: [
          { name: 'EHR Integration (All Systems)', basic: true, pro: true, highlight: true },
          { name: 'PMS Integration', basic: true, pro: true },
          { name: 'RCM Integration', basic: true, pro: true },
          { name: 'Patient Portal Integration', basic: false, pro: true }
        ]
      },
      {
        category: 'Patient Engagement',
        features: [
          { name: 'Appointment Reminders', basic: true, pro: true },
          { name: 'Refill Processing', basic: false, pro: true },
          { name: 'Pre-Visit Assistance', basic: false, pro: true },
          { name: 'Patient Education', basic: false, pro: true },
          { name: 'Treatment Adherence', basic: false, pro: true },
          { name: 'Risk Assessments', basic: false, pro: true }
        ]
      },
      {
        category: 'Support',
        features: [
          { name: 'Standard Support', basic: true, pro: true },
          { name: '24x7 Support', basic: true, pro: true, highlight: true },
          { name: 'Human RCPA Specialists', basic: true, pro: true, highlight: true },
          { name: 'Dedicated Account Manager', basic: false, pro: true }
        ]
      }
    ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05, duration: 0.5 }
    })
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gradient-to-r from-[#143151] to-[#387E89]">
            <TableRow className="border-none">
              <TableHead className="text-white font-bold text-lg w-1/3 py-4">Features</TableHead>
              {product === 'crush' ? (
                <>
                  <TableHead className="text-white font-bold text-lg text-center py-4">Basic (No EHR)</TableHead>
                  <TableHead className="text-white font-bold text-lg text-center py-4">Basic (With EHR)</TableHead>
                  <TableHead className="text-white font-bold text-lg text-center py-4">Pro</TableHead>
                </>
              ) : (
                <>
                  <TableHead className="text-white font-bold text-lg text-center py-4">Basic</TableHead>
                  <TableHead className="text-white font-bold text-lg text-center py-4">Pro</TableHead>
                  <TableHead className="text-white font-bold text-lg text-center py-4">Enterprise</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((section, sectionIndex) => (
              <React.Fragment key={section.category}>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableCell colSpan={4} className="font-bold text-xl text-[#143151] py-5">
                    {section.category}
                  </TableCell>
                </TableRow>
                {section.features.map((feature, featureIndex) => (
                  <motion.tr
                    key={feature.name}
                    variants={fadeInUpVariants}
                    custom={sectionIndex + featureIndex * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`${featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50/30`}
                  >
                    <TableCell className={`font-medium ${feature.highlight ? 'text-[#143151] font-semibold' : ''} py-3`}>
                      <div className="flex items-center">
                        {feature.name}
                        {feature.highlight && (
                          <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800 text-xs">
                            Highlighted
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    {product === 'crush' ? (
                      <>
                        <TableCell className="text-center py-3">
                          {feature.basic ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-3">
                          {feature.basicWithEHR ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-3">
                          {feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell className="text-center py-3">
                          {feature.basic ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-3">
                          {feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-3">
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        </TableCell>
                      </>
                    )}
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
