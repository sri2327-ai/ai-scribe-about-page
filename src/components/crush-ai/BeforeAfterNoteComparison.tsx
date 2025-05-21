
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react'; // Changed from InfoCircledIcon to Info from lucide-react
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { crushAIColors } from '@/theme/crush-ai-theme';

interface FeatureTooltipProps {
  title: string;
  children: React.ReactNode;
}

const FeatureTooltip = ({ title, children }: FeatureTooltipProps) => (
  <TooltipProvider delayDuration={300}>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center cursor-help">
          <span className="mr-1">{title}</span>
          <Info className="h-4 w-4 text-blue-500" /> {/* Changed from InfoCircledIcon to Info */}
        </div>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="max-w-xs bg-white p-3 shadow-lg border border-gray-200 text-gray-800 text-sm"
      >
        {children}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const BeforeAfterNoteComparison = () => {
  const [activeTab, setActiveTab] = useState('family-medicine');
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  // Define the examples we'll be showing
  const examples = [
    { id: 'family-medicine', label: 'Family Medicine' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'pediatrics', label: 'Pediatrics' }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
              color: crushAIColors.text.primary
            }}
          >
            Why CRUSH <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#143151] to-[#387E89]">Crushes</span> the Competition
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: crushAIColors.text.secondary,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              mb: 2,
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            See how our AI-powered clinical notes drastically improve quality and efficiency compared to traditional documentation methods
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 p-4 rounded-xl shadow-lg overflow-hidden">
            <Tabs
              defaultValue={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-center mb-6">
                <TabsList className="bg-gray-100 p-1">
                  {examples.map(example => (
                    <TabsTrigger
                      key={example.id}
                      value={example.id}
                      className="px-4 py-2"
                    >
                      {example.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {examples.map(example => (
                <TabsContent key={example.id} value={example.id} className="pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* BEFORE: Traditional Clinical Note */}
                    <motion.div 
                      className="relative bg-white rounded-lg shadow-md overflow-hidden border border-red-100"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-red-50 p-3 border-b border-red-100">
                        <h3 className="font-bold text-lg text-gray-800">BEFORE: Traditional Clinical Note</h3>
                      </div>
                      <div className="p-4 h-[500px] overflow-y-auto font-mono text-sm">
                        <div className="mb-4">
                          <p className="font-bold mb-1">Patient Demographics:</p>
                          <p className="text-gray-700">John Doe, 58M</p>
                          <p className="text-gray-700">DOB: 07/15/1965</p>
                          <p className="text-gray-700">MRN: 12345678</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Chief Complaint:</p>
                          <p className="text-gray-700">Follow up on diabetes and hypertension.</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">HPI:</p>
                          <p className="text-gray-700">Patient is a 58-year-old male with history of type 2 diabetes and hypertension. He reports that his blood sugars have been running between 130-150 in the mornings and that he's been taking his metformin regularly. No issues with his hypertension medication. Denies polyuria, polydipsia, or polyphagia. No chest pain, SOB, dizziness.</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Past Medical History:</p>
                          <p className="text-gray-700">- Type 2 diabetes diagnosed 2015</p>
                          <p className="text-gray-700">- Hypertension diagnosed 2013</p>
                          <p className="text-gray-700">- Hyperlipidemia</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Medications:</p>
                          <p className="text-gray-700">- Metformin 1000mg BID</p>
                          <p className="text-gray-700">- Lisinopril 10mg daily</p>
                          <p className="text-gray-700">- Atorvastatin 20mg daily</p>
                        </div>

                        <div className="mb-4">
                          <p className="text-gray-700 text-xs italic">Completion Time: ~25 minutes after visit</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* AFTER: CRUSH AI Scribe Note */}
                    <motion.div 
                      className="relative bg-white rounded-lg shadow-md overflow-hidden border border-blue-100"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-blue-50 p-3 border-b border-blue-100">
                        <h3 className="font-bold text-lg text-gray-800">AFTER: CRUSH AI Scribe Note</h3>
                      </div>
                      <div className="p-4 h-[500px] overflow-y-auto font-mono text-sm">
                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <FeatureTooltip title="Pre-Charting Info">
                            <p>CRUSH AI automatically imports relevant patient information from your EHR before the visit, saving time and reducing manual data entry.</p>
                          </FeatureTooltip>
                          <p className="font-bold mb-1">Patient Demographics:</p>
                          <p className="text-gray-700">John Doe, 58M</p>
                          <p className="text-gray-700">DOB: 07/15/1965</p>
                          <p className="text-gray-700">MRN: 12345678</p>
                          <p className="text-gray-700">Insurance: Blue Cross Blue Shield</p>
                          <p className="text-gray-700">Last Visit: 03/15/2023</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Chief Complaint:</p>
                          <p className="text-gray-700">Follow up on diabetes and hypertension.</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold">HPI:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Context-Aware Documentation">
                                <p>CRUSH AI captures and structures the conversation naturally, maintaining context while highlighting important clinical details.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700">Patient is a 58-year-old male with history of type 2 diabetes and hypertension presenting for routine follow-up. He reports his blood sugars have been well-controlled, ranging between 130-150 mg/dL in the mornings. He states he has been adherent with his metformin regimen and has not experienced any side effects. His hypertension has been stable with no symptoms, and he denies any chest pain, shortness of breath, or dizziness. Patient has been following a low-carb diet and walking 30 minutes 3 times weekly. He has lost 5 pounds since his last visit.</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold">HCC Risk Factors:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="HCC Code Insights">
                                <p>CRUSH AI automatically identifies and suggests appropriate HCC codes based on the patient encounter, ensuring proper risk adjustment and reimbursement.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700">- Type 2 diabetes without complications [E11.9]</p>
                          <p className="text-gray-700">- Essential hypertension [I10]</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Past Medical History:</p>
                          <p className="text-gray-700">- Type 2 diabetes diagnosed 2015, well controlled</p>
                          <p className="text-gray-700">- Hypertension diagnosed 2013, well controlled</p>
                          <p className="text-gray-700">- Hyperlipidemia, moderately controlled</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Medications:</p>
                          <p className="text-gray-700">- Metformin 1000mg BID</p>
                          <p className="text-gray-700">- Lisinopril 10mg daily</p>
                          <p className="text-gray-700">- Atorvastatin 20mg daily</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold">Assessment & Plan:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Coding Intelligence">
                                <p>CRUSH AI automatically suggests appropriate ICD-10 and CPT codes based on the documented care, improving coding accuracy and billing efficiency.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700">1. Type 2 Diabetes (E11.9)</p>
                          <p className="text-gray-700">   - A1c improved to 7.2% from 7.5% previously</p>
                          <p className="text-gray-700">   - Continue Metformin 1000mg BID</p>
                          <p className="text-gray-700">   - Commended patient on dietary changes and weight loss</p>
                          <p className="text-gray-700">   - <span className="text-green-600">Order: Comprehensive metabolic panel & A1c in 3 months</span></p>
                          
                          <p className="text-gray-700 mt-2">2. Hypertension (I10)</p>
                          <p className="text-gray-700">   - BP today: 132/78, at target</p>
                          <p className="text-gray-700">   - Continue Lisinopril 10mg daily</p>
                          <p className="text-gray-700">   - Encouraged continued sodium restriction</p>
                          
                          <p className="text-gray-700 mt-2">3. Hyperlipidemia (E78.5)</p>
                          <p className="text-gray-700">   - Recent LDL: 110, slightly above target of &lt;100</p>
                          <p className="text-gray-700">   - Continue Atorvastatin 20mg daily</p>
                          <p className="text-gray-700">   - <span className="text-green-600">Order: Lipid panel in 6 months</span></p>
                          
                          <p className="text-gray-700 mt-2">4. Preventive Health</p>
                          <p className="text-gray-700">   - Due for colonoscopy screening</p>
                          <p className="text-gray-700">   - <span className="text-green-600">Order: Colonoscopy referral</span></p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold">Patient Education & Summary:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Automated Patient Visit Summary">
                                <p>CRUSH AI automatically generates a clear, comprehensive summary for patients, improving understanding and compliance with treatment plans.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700">- Continue all medications as prescribed</p>
                          <p className="text-gray-700">- Maintain low-carb diet and exercise regimen</p>
                          <p className="text-gray-700">- Schedule colonoscopy within next month</p>
                          <p className="text-gray-700">- Return in 3 months for follow-up and lab work</p>
                          <p className="text-gray-700">- Call office if blood sugars consistently &gt;200 mg/dL</p>
                        </div>

                        <div className="p-2 mt-6 bg-gray-50 rounded-md border border-gray-200">
                          <div className="flex items-center justify-between">
                            <FeatureTooltip title="Seamless EHR Integration">
                              <p>CRUSH AI Scribe integrates with a wide range of Electronic Health Record systems, ensuring seamless data flow and documentation without disrupting your existing workflow.</p>
                            </FeatureTooltip>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <svg className="h-4 w-4 text-blue-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs text-blue-700">Data Synced with Your EHR</span>
                              </div>
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Broad EHR Compatibility</span>
                            </div>
                            <p className="text-gray-700 text-xs italic">Completion Time: <span className="font-bold text-green-600">~60 seconds</span></p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <motion.div 
            className="mt-8 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Ready to see CRUSH in action with your EHR?</h3>
                <p className="text-white/90">Experience the difference with a personalized demo</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#143151] font-medium py-2 px-6 rounded-full shadow-xl flex items-center"
              >
                Schedule a Demo
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BeforeAfterNoteComparison;
