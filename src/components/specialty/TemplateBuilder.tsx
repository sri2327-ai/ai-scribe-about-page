
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { typography, withTypography } from '@/lib/typography';
import { FileText, Copy, CheckCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const TemplateBuilder = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('soap'); // 'soap' or 'macros'

  const templateExamples = {
    soap: `S: Patient presents with [CC] for [Duration]. Reports [Associated Symptoms]. No [Negative Symptoms].

O: Vitals: BP [BP], HR [HR], Temp [Temp], RR [RR], O2 [O2]
General: [General Appearance]
[System 1]: [Findings]
[System 2]: [Findings]

A: 1. [Primary Diagnosis] - [Assessment Details]
2. [Secondary Diagnosis] - [Assessment Details]

P: 1. [Treatment Plan]
2. [Medications] - [Dosage/Instructions]
3. [Follow-up] in [Timeframe]
4. [Patient Education] provided
5. [Referrals] to [Specialist]`,
    macros: `[[BP]] - Insert latest blood pressure
[[HR]] - Insert latest heart rate
[[VS]] - Insert comprehensive vitals
[[MEDS]] - Insert current medication list
[[PMH]] - Insert past medical history
[[LABS]] - Insert recent lab results
[[PREV]] - Insert previous visit notes
[[PLAN]] - Insert treatment plan template
[[ROS]] - Insert full review of systems template
[[WNL]] - Insert within normal limits for selected systems`
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Template copied",
      description: "Ready to paste into your documentation system",
      duration: 3000,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <motion.h2 
            className={withTypography(typography.h2, "text-center text-gray-900 max-w-4xl mx-auto")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Customizable Templates for Your Specialty
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#143151] to-[#387E89] my-4" />
          <motion.p 
            className={withTypography(typography.description, "text-center max-w-3xl mx-auto text-gray-700")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            S10.AI provides specialty-specific documentation templates that save time and ensure consistent quality. 
            Customize these templates to match your specific workflow needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          {/* Left column: Benefits */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full shadow-md border-blue-100 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#143151] mb-6">Clinical Documentation Benefits</h3>
                
                <ul className="space-y-4">
                  {[
                    { 
                      title: "Save Time", 
                      description: "Reduce documentation time by up to 70% with pre-built specialty templates",
                      icon: <FileText className="text-[#387E89]" size={22} />
                    },
                    { 
                      title: "Ensure Completeness", 
                      description: "Never miss critical documentation elements with specialty-specific prompts",
                      icon: <CheckCircle className="text-[#387E89]" size={22} />
                    },
                    { 
                      title: "Improve Consistency", 
                      description: "Maintain the same high-quality documentation structure across all patient encounters",
                      icon: <Copy className="text-[#387E89]" size={22} />
                    },
                    { 
                      title: "Enhance Communication", 
                      description: "Clearly communicate clinical reasoning with structured assessment sections",
                      icon: <MessageSquare className="text-[#387E89]" size={22} />
                    }
                  ].map((benefit, i) => (
                    <motion.li 
                      key={i} 
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                    >
                      <div className="mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="font-medium text-[#143151]">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800 italic">
                    "The templates saved me at least an hour of documentation time each day."
                    <span className="block mt-1 font-medium">- Dr. Sarah Chen, Family Medicine</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right column: Template examples */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full shadow-md border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-4 flex gap-2">
                <Button
                  variant={activeTab === 'soap' ? 'secondary' : 'ghost'}
                  onClick={() => setActiveTab('soap')}
                  className={`rounded-md ${activeTab === 'soap' ? 'bg-white text-[#143151]' : 'text-white hover:bg-white/20'}`}
                >
                  SOAP Template
                </Button>
                <Button
                  variant={activeTab === 'macros' ? 'secondary' : 'ghost'}
                  onClick={() => setActiveTab('macros')}
                  className={`rounded-md ${activeTab === 'macros' ? 'bg-white text-[#143151]' : 'text-white hover:bg-white/20'}`}
                >
                  Quick Macros
                </Button>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 mb-2">
                      {activeTab === 'soap' ? 'Customizable SOAP Format' : 'Time-saving Macros'}
                    </Badge>
                    <h3 className="text-lg font-medium text-[#143151]">
                      {activeTab === 'soap' ? 'Specialty-Specific Template' : 'Documentation Shortcuts'}
                    </h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white transition-colors"
                    onClick={() => handleCopy(templateExamples[activeTab])}
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={16} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-md p-4 font-mono text-sm overflow-auto max-h-[400px]">
                  <pre className="whitespace-pre-wrap text-slate-800 leading-relaxed">
                    {templateExamples[activeTab]}
                  </pre>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#387E89]"></div>
                    <p className="text-sm text-slate-700">
                      {activeTab === 'soap' 
                        ? 'Customize placeholders in brackets [like this] to suit your needs' 
                        : 'Use double brackets [[like this]] to trigger macros in your notes'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#387E89]"></div>
                    <p className="text-sm text-slate-700">
                      {activeTab === 'soap' 
                        ? 'Add or remove sections based on your specialty requirements' 
                        : 'Create your own custom macros for frequently used text blocks'}
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#143151]/90 hover:to-[#387E89]/90 text-white flex items-center justify-center gap-2 group"
                >
                  <span>See more templates for your specialty</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {!isMobile && (
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              variant="outline" 
              className="border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white transition-colors"
            >
              Schedule a consultation to customize your templates
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TemplateBuilder;
