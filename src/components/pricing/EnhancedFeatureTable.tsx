import React, { useState, useEffect } from 'react';
import { Check, X, ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface EnhancedFeatureTableProps {
  product: 'crush' | 'bravo';
}

export const EnhancedFeatureTable: React.FC<EnhancedFeatureTableProps> = ({ product }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  
  const renderCheckmark = (isIncluded: boolean) => {
    return isIncluded ? (
      <Check className="h-5 w-5 text-green-500 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-gray-300 mx-auto" />
    );
  };

  const renderBadge = (text: string) => {
    return (
      <Badge className="bg-[#387E89] hover:bg-[#143151] text-white text-xs font-semibold py-1 px-2">
        {text}
      </Badge>
    );
  };

  const crushFeatures = [
    {
      category: 'DOCUMENTATION & EFFICIENCY',
      features: [
        { 
          name: 'Pinpoint Documentation Accuracy', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Rapid Documentation Time – Complete notes in under 90 seconds', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'AI-Powered Medical Coding – ICD-10, CPT, E/M, HCC', 
          basic: true, 
          pro: true, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'CUSTOMIZATION & SPECIALTY SUPPORT',
      features: [
        { 
          name: 'Specialty-Specific Templates – All medical specialties supported', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Custom AI Template Builder', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'EHR Integration – All EHRs supported', 
          basic: false, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Advanced Patient Instructions', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Prior Authorization Documentation', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Letter of Medical Necessity', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Referral Letters', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Template Library', 
          basic: true, 
          pro: true, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'CLINICAL INTELLIGENCE',
      features: [
        { 
          name: 'Pre-Charting & Document Management', 
          basic: false, 
          pro: false, 
          enterprise: true 
        },
        { 
          name: 'Prescription & Lab Management – Streamlined custom workflows', 
          basic: false, 
          pro: false, 
          enterprise: true 
        },
        { 
          name: 'Clinical Decision Support', 
          basic: false, 
          pro: false, 
          enterprise: true 
        },
        { 
          name: 'Longitudinal Intelligence – Patient history tracking & insights', 
          basic: false, 
          pro: false, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'RCM SUPPORT',
      features: [
        { 
          name: 'RCM Support – Insurance verification, prior authorizations, payment posting, denials management, payer follow-up', 
          basic: false, 
          pro: false, 
          enterprise: true 
        }
      ]
    }
  ];

  const bravoFeatures = [
    {
      category: 'PATIENT ENGAGEMENT',
      features: [
        { 
          name: 'Appointment Reminders', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Patient Self-Scheduling', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Waitlist Management', 
          basic: false, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Patient Education Materials', 
          basic: false, 
          pro: true, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'COMMUNICATION',
      features: [
        { 
          name: 'Automated Call, Text & Email Reminders', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Two-Way Messaging', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Bulk Messaging Campaigns', 
          basic: false, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Custom Communication Templates', 
          basic: false, 
          pro: true, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'PRACTICE EFFICIENCY',
      features: [
        { 
          name: 'Patient Registration & Intake Forms', 
          basic: true, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Prescription Refill Processing', 
          basic: false, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Automated Review Collection', 
          basic: false, 
          pro: true, 
          enterprise: true 
        },
        { 
          name: 'Custom Workflow Automation', 
          basic: false, 
          pro: false, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'SYSTEM INTEGRATION',
      features: [
        { 
          name: 'Compatible with 7,000+ apps, including any EHR, PMS, VOIP, RCM, calendar, cloud storage, and email systems', 
          basic: true, 
          pro: true, 
          enterprise: true 
        }
      ]
    },
    {
      category: 'SUPPORT & SERVICES',
      features: [
        { 
          name: 'Standard Support', 
          basic: true, 
          pro: false, 
          enterprise: false 
        },
        { 
          name: 'Priority Support', 
          basic: false, 
          pro: true, 
          enterprise: false 
        },
        { 
          name: 'Dedicated Account Manager', 
          basic: false, 
          pro: false, 
          enterprise: true 
        },
        { 
          name: 'Custom Training', 
          basic: false, 
          pro: false, 
          enterprise: true 
        }
      ]
    }
  ];

  const currentFeatures = product === 'crush' ? crushFeatures : bravoFeatures;
  
  // Navigate through categories in mobile view
  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => 
      prev < currentFeatures.length - 1 ? prev + 1 : prev
    );
  };
  
  const prevCategory = () => {
    setCurrentCategoryIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  // Improved accordion-based mobile view
  const showMobileView = () => {
    return (
      <div className="block md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {currentFeatures.map((category, categoryIndex) => (
            <AccordionItem 
              key={`category-${categoryIndex}`}
              value={`category-${categoryIndex}`}
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                <span className="font-bold text-[#143151] text-sm">
                  {category.category}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-0">
                {category.features.map((feature, featureIndex) => (
                  <div 
                    key={`feature-${featureIndex}`} 
                    className={`p-4 ${featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}
                  >
                    <p className="font-medium mb-4 text-sm">{feature.name}</p>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      {product === 'crush' ? (
                        <>
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-2 font-medium">Basic</div>
                            {renderCheckmark(feature.basic)}
                          </div>
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-2 font-medium">Pro</div>
                            {renderCheckmark(feature.pro)}
                          </div>
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-2 font-medium">Enterprise</div>
                            {renderCheckmark(feature.enterprise)}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-2 font-medium">Basic</div>
                            {renderCheckmark(feature.basic)}
                          </div>
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-2 font-medium">Pro</div>
                            {renderCheckmark(feature.pro)}
                          </div>
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-2 font-medium">Enterprise</div>
                            {renderCheckmark(feature.enterprise)}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };

  // Desktop view updated with consistent plan names
  const showDesktopView = () => {
    return (
      <div className="hidden md:block overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              <TableHead className="w-1/3 px-6 py-4 text-left font-bold text-[#143151]">Feature</TableHead>
              {product === 'crush' ? (
                <>
                  <TableHead className="px-6 py-4 text-center font-bold text-[#143151] whitespace-nowrap">Basic</TableHead>
                  <TableHead className="px-6 py-4 text-center font-bold text-[#143151] whitespace-nowrap">Pro</TableHead>
                  <TableHead className="px-6 py-4 text-center font-bold text-[#143151] whitespace-nowrap">Enterprise</TableHead>
                </>
              ) : (
                <>
                  <TableHead className="px-6 py-4 text-center font-bold text-[#143151]">Basic</TableHead>
                  <TableHead className="px-6 py-4 text-center font-bold text-[#143151]">Pro</TableHead>
                  <TableHead className="px-6 py-4 text-center font-bold text-[#143151]">Enterprise</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {product === 'crush'
              ? crushFeatures.map((categoryGroup, categoryIndex) => (
                  <React.Fragment key={`category-${categoryIndex}`}>
                    <TableRow className="bg-gray-50">
                      <TableCell
                        colSpan={4}
                        className="px-6 py-3 font-bold text-[#143151]"
                      >
                        {categoryGroup.category}
                      </TableCell>
                    </TableRow>
                    {categoryGroup.features.map((feature, featureIndex) => (
                      <TableRow key={`feature-${featureIndex}`} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <TableCell className="px-6 py-4 text-gray-800">{feature.name}</TableCell>
                        <TableCell className="px-6 py-4 text-center">{renderCheckmark(feature.basic)}</TableCell>
                        <TableCell className="px-6 py-4 text-center">{renderCheckmark(feature.pro)}</TableCell>
                        <TableCell className="px-6 py-4 text-center">{renderCheckmark(feature.enterprise)}</TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))
              : bravoFeatures.map((categoryGroup, categoryIndex) => (
                  <React.Fragment key={`category-${categoryIndex}`}>
                    <TableRow className="bg-gray-50">
                      <TableCell
                        colSpan={4}
                        className="px-6 py-3 font-bold text-[#143151]"
                      >
                        {categoryGroup.category}
                      </TableCell>
                    </TableRow>
                    {categoryGroup.features.map((feature, featureIndex) => (
                      <TableRow key={`feature-${featureIndex}`} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <TableCell className="px-6 py-4 text-gray-800">{feature.name}</TableCell>
                        <TableCell className="px-6 py-4 text-center">{renderCheckmark(feature.basic)}</TableCell>
                        <TableCell className="px-6 py-4 text-center">{renderCheckmark(feature.pro)}</TableCell>
                        <TableCell className="px-6 py-4 text-center">{renderCheckmark(feature.enterprise)}</TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  // Force re-render when product changes
  React.useEffect(() => {
    // This empty dependency array ensures the component fully re-renders
    // when the product prop changes
  }, [product]);

  if (product === 'crush') {
    return (
      <div className="feature-table-container" key="crush-features">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            Reduce Charting Time by 80%
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            HIPAA Compliant
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            AI-Powered
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            EHR Integrated
          </Badge>
        </div>
        {showMobileView()}
        {showDesktopView()}
      </div>
    );
  } else {
    return (
      <div className="feature-table-container" key="bravo-features">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            Reduce No-Shows by 30%
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            HIPAA Compliant
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            AI-Powered
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            Improves Patient Experience
          </Badge>
          <Badge className="bg-[#387E89] hover:bg-[#143151] text-white">
            AI Chat & Call Agent
          </Badge>
        </div>
        {showMobileView()}
        {showDesktopView()}
      </div>
    );
  }
};
