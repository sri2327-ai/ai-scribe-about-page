
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
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
          <Info className="h-4 w-4 text-blue-500" />
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

  // Define the examples we'll be showing with specialty-specific content
  const examples = [
    { 
      id: 'family-medicine', 
      label: 'Family Medicine',
      before: {
        demographics: "John Doe, 58M\nDOB: 07/15/1965\nMRN: 12345678",
        chiefComplaint: "Follow up on diabetes and hypertension.",
        hpi: "Patient is a 58-year-old male with history of type 2 diabetes and hypertension. He reports that his blood sugars have been running between 130-150 in the mornings and that he's been taking his metformin regularly. No issues with his hypertension medication. Denies polyuria, polydipsia, or polyphagia. No chest pain, SOB, dizziness.",
        pmh: "- Type 2 diabetes diagnosed 2015\n- Hypertension diagnosed 2013\n- Hyperlipidemia",
        medications: "- Metformin 1000mg BID\n- Lisinopril 10mg daily\n- Atorvastatin 20mg daily"
      },
      after: {
        demographics: "John Doe, 58M\nDOB: 07/15/1965\nMRN: 12345678\nInsurance: Blue Cross Blue Shield\nLast Visit: 03/15/2023",
        chiefComplaint: "Follow up on diabetes and hypertension.",
        hpi: "Patient is a 58-year-old male with history of type 2 diabetes and hypertension presenting for routine follow-up. He reports his blood sugars have been well-controlled, ranging between 130-150 mg/dL in the mornings. He states he has been adherent with his metformin regimen and has not experienced any side effects. His hypertension has been stable with no symptoms, and he denies any chest pain, shortness of breath, or dizziness. Patient has been following a low-carb diet and walking 30 minutes 3 times weekly. He has lost 5 pounds since his last visit.",
        hcc: "- Type 2 diabetes without complications [E11.9]\n- Essential hypertension [I10]",
        pmh: "- Type 2 diabetes diagnosed 2015, well controlled\n- Hypertension diagnosed 2013, well controlled\n- Hyperlipidemia, moderately controlled",
        medications: "- Metformin 1000mg BID\n- Lisinopril 10mg daily\n- Atorvastatin 20mg daily",
        assessment: "1. Type 2 Diabetes (E11.9)\n   - A1c improved to 7.2% from 7.5% previously\n   - Continue Metformin 1000mg BID\n   - Commended patient on dietary changes and weight loss\n   - Order: Comprehensive metabolic panel & A1c in 3 months\n\n2. Hypertension (I10)\n   - BP today: 132/78, at target\n   - Continue Lisinopril 10mg daily\n   - Encouraged continued sodium restriction\n\n3. Hyperlipidemia (E78.5)\n   - Recent LDL: 110, slightly above target of &lt;100\n   - Continue Atorvastatin 20mg daily\n   - Order: Lipid panel in 6 months\n\n4. Preventive Health\n   - Due for colonoscopy screening\n   - Order: Colonoscopy referral",
        education: "- Continue all medications as prescribed\n- Maintain low-carb diet and exercise regimen\n- Schedule colonoscopy within next month\n- Return in 3 months for follow-up and lab work\n- Call office if blood sugars consistently >200 mg/dL"
      }
    },
    { 
      id: 'cardiology', 
      label: 'Cardiology',
      before: {
        demographics: "Jane Smith, 62F\nDOB: 03/22/1961\nMRN: 87654321",
        chiefComplaint: "Follow up after recent hospitalization for heart failure exacerbation.",
        hpi: "Patient is a 62-year-old female with history of CHF (EF 35%), CAD s/p stent to LAD 2 years ago, and paroxysmal atrial fibrillation. She was hospitalized 3 weeks ago with acute decompensated heart failure. Reports some improvement in dyspnea and edema since discharge. Still has dyspnea with moderate exertion. Taking medications as prescribed but notes occasional dizziness with metoprolol.",
        pmh: "- CHF (EF 35%)\n- CAD s/p stent to LAD 2021\n- Paroxysmal atrial fibrillation\n- Hypertension\n- Hyperlipidemia",
        medications: "- Metoprolol 25mg BID\n- Lisinopril 20mg daily\n- Furosemide 40mg daily\n- Apixaban 5mg BID\n- Atorvastatin 40mg daily"
      },
      after: {
        demographics: "Jane Smith, 62F\nDOB: 03/22/1961\nMRN: 87654321\nInsurance: Medicare Advantage\nLast Visit: 11/02/2023 (Hospital Discharge)",
        chiefComplaint: "Follow up after recent hospitalization for heart failure exacerbation.",
        hpi: "Patient is a 62-year-old female with history of CHF (EF 35%), CAD s/p stent to LAD 2021, and paroxysmal atrial fibrillation presenting for follow-up after hospitalization for acute decompensated heart failure 3 weeks ago. She reports improvement in symptoms with current medication regimen. Dyspnea has improved but persists with moderate exertion (can climb 1 flight of stairs without stopping, NYHA Class II). Reports reduced bilateral ankle edema. Notes occasional dizziness with metoprolol, typically within 1-2 hours after morning dose. No syncope, chest pain, palpitations, orthopnea, or PND.",
        hcc: "- Systolic Heart Failure [I50.20]\n- CAD with history of PTCA [I25.10]\n- Paroxysmal Atrial Fibrillation [I48.0]",
        pmh: "- CHF (EF 35% per echo 11/1/2023)\n- CAD s/p stent to LAD 2021\n- Paroxysmal atrial fibrillation, CHA₂DS₂-VASc score: 4\n- Hypertension, well controlled\n- Hyperlipidemia",
        medications: "- Metoprolol 25mg BID\n- Lisinopril 20mg daily\n- Furosemide 40mg daily\n- Apixaban 5mg BID\n- Atorvastatin 40mg daily\n- Spironolactone 25mg daily (added during hospitalization)",
        assessment: "1. Heart Failure with reduced EF (I50.20)\n   - Improved since hospitalization but still NYHA Class II\n   - Continue current HF medications\n   - Consider reducing metoprolol to 12.5mg BID due to reported dizziness\n   - Daily weight monitoring to continue\n   - Order: BNP, BMP, CBC in 2 weeks\n\n2. Coronary Artery Disease (I25.10)\n   - Stable since PCI in 2021\n   - Continue high-intensity statin\n   - Order: Lipid panel at next visit\n\n3. Paroxysmal Atrial Fibrillation (I48.0)\n   - No recent episodes reported\n   - Continue anticoagulation with apixaban\n   - EKG today shows NSR\n   - Order: EKG and Holter monitor for 48 hours",
        education: "- Take metoprolol with food to reduce dizziness\n- Maintain sodium restriction (≤2g/day)\n- Contact office if weight increases >2kg in 3 days\n- Continue daily weight logs\n- Schedule echo in 3 months to reassess EF\n- Return for follow-up in 4 weeks"
      }
    },
    { 
      id: 'neurology', 
      label: 'Neurology',
      before: {
        demographics: "Robert Johnson, 45M\nDOB: 11/30/1978\nMRN: 56784321",
        chiefComplaint: "Follow up for migraine management.",
        hpi: "Patient is a 45-year-old male with history of chronic migraine headaches. Reports having 3-4 migraines in the past month despite propranolol prophylaxis. Sumatriptan provides relief but causes fatigue. Headaches typically preceded by visual aura and accompanied by photophobia, phonophobia, and nausea.",
        pmh: "- Chronic migraine with aura\n- Seasonal allergies\n- Insomnia",
        medications: "- Propranolol 80mg daily\n- Sumatriptan 50mg PRN\n- Loratadine 10mg daily\n- Melatonin 3mg nightly"
      },
      after: {
        demographics: "Robert Johnson, 45M\nDOB: 11/30/1978\nMRN: 56784321\nInsurance: United Healthcare\nLast Visit: 02/15/2023",
        chiefComplaint: "Follow up for migraine management.",
        hpi: "Patient is a 45-year-old male with history of chronic migraine with aura presenting for follow-up. He reports experiencing 3-4 migraine episodes in the past month despite propranolol prophylaxis. Episodes are characterized by pulsating, unilateral headache (7-8/10 intensity) lasting 4-12 hours. Each episode is preceded by visual aura (scintillating scotoma) lasting approximately 20-30 minutes. Associated symptoms include photophobia, phonophobia, and nausea without vomiting. Sumatriptan provides effective relief within 1-2 hours but causes significant fatigue for the remainder of the day. Patient identifies stress at work and irregular sleep patterns as potential triggers.",
        hcc: "- Migraine with aura [G43.109]",
        pmh: "- Chronic migraine with aura, diagnosed 2015\n- Seasonal allergies\n- Insomnia\n- Normal MRI brain with contrast (2021)",
        medications: "- Propranolol 80mg daily\n- Sumatriptan 50mg PRN for migraine\n- Loratadine 10mg daily\n- Melatonin 3mg nightly",
        assessment: "1. Chronic Migraine with Aura (G43.109)\n   - Inadequate control with current prophylaxis\n   - Increase propranolol to 120mg daily\n   - Consider adding topiramate as second-line prophylactic agent\n   - Switch from sumatriptan to rizatriptan 10mg for acute treatment\n   - Order: CBC, CMP, Vitamin D level\n\n2. Insomnia, contributing to migraine frequency\n   - Provided sleep hygiene education\n   - Consider CBT for insomnia\n   - Continue melatonin\n\n3. Lifestyle factors affecting migraine control\n   - Discussed stress management techniques\n   - Recommended consistent sleep schedule\n   - Suggested migraine diary to identify additional triggers",
        education: "- Gradually increase propranolol over 2 weeks\n- Try rizatriptan for next migraine attack\n- Download recommended migraine tracking app\n- Maintain regular sleep-wake cycle\n- Practice stress reduction techniques daily\n- Return in 6 weeks to evaluate medication changes"
      }
    },
    { 
      id: 'pediatrics', 
      label: 'Pediatrics',
      before: {
        demographics: "Emily Chen, 7F\nDOB: 05/12/2016\nMRN: 43215678",
        chiefComplaint: "Well-child visit and immunizations.",
        hpi: "Emily is a 7-year-old female presenting for annual well-child check. Parent reports normal growth and development. No concerns with vision or hearing. Doing well in 2nd grade. Active in gymnastics. No acute illnesses since last visit.",
        pmh: "- History of otitis media (last episode 2 years ago)\n- Fully immunized through age 5",
        medications: "- Children's multivitamin daily\n- No regular medications"
      },
      after: {
        demographics: "Emily Chen, 7F\nDOB: 05/12/2016\nMRN: 43215678\nInsurance: Aetna\nLast Visit: 05/20/2022",
        chiefComplaint: "Well-child visit and immunizations.",
        hpi: "Emily is a 7-year-old female presenting for her annual well-child examination. Parents report normal growth and development with no new health concerns. She is meeting all developmental milestones and performing well academically in 2nd grade (reading above grade level). She participates in gymnastics twice weekly and enjoys art activities. Sleep pattern is regular with 9-10 hours nightly. Diet consists of varied foods but parent reports she is somewhat picky with vegetables. Screen time is limited to 1-2 hours daily. No recent acute illnesses. No concerns with vision or hearing.",
        pmh: "- History of recurrent otitis media (resolved, last episode 2 years ago)\n- Fully immunized through age 5\n- Normal growth trajectory (consistently tracking at 65th percentile for height, 50th percentile for weight)",
        medications: "- Children's multivitamin gummy daily\n- No regular prescription medications",
        assessment: "1. Well Child Examination (Z00.129)\n   - Growth appropriate: Height 123 cm (65th percentile), Weight 23 kg (50th percentile), BMI 15.2 (50th percentile)\n   - Development: Age-appropriate; meeting all milestones\n   - Vitals WNL: BP 98/62, HR 88, RR 18, Temp 98.6°F\n   - Physical exam normal\n   - Vision screening: 20/20 OU\n   - Hearing screening passed\n\n2. Immunizations\n   - Administered: Influenza vaccine (current season)\n   - Due next visit: None until 11 years of age\n\n3. Preventive Counseling\n   - Discussed healthy nutrition and increasing vegetable intake\n   - Reviewed water safety and importance of swim lessons\n   - Screen time limits appropriate and should be maintained\n   - Dental care: Regular brushing and flossing, dental visit completed 3 months ago",
        education: "- Continue regular physical activity\n- Maintain limited recreational screen time\n- Strategies for increasing vegetable consumption provided\n- Resources for age-appropriate reading materials given\n- Return for next well-child exam at age 8\n- Call for acute concerns or illnesses"
      }
    }
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
            See how our specialty-specific, AI-powered clinical notes drastically improve quality and efficiency across medical specialties
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
                          <p className="text-gray-700 whitespace-pre-line">{example.before.demographics}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Chief Complaint:</p>
                          <p className="text-gray-700">{example.before.chiefComplaint}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">HPI:</p>
                          <p className="text-gray-700">{example.before.hpi}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Past Medical History:</p>
                          <p className="text-gray-700 whitespace-pre-line">{example.before.pmh}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Medications:</p>
                          <p className="text-gray-700 whitespace-pre-line">{example.before.medications}</p>
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
                          <p className="text-gray-700 whitespace-pre-line">{example.after.demographics}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Chief Complaint:</p>
                          <p className="text-gray-700">{example.after.chiefComplaint}</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold">HPI:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Context-Aware Documentation">
                                <p>CRUSH AI captures and structures the conversation naturally, maintaining context while highlighting important clinical details specific to each specialty.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700">{example.after.hpi}</p>
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
                          <p className="text-gray-700 whitespace-pre-line">{example.after.hcc}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Past Medical History:</p>
                          <p className="text-gray-700 whitespace-pre-line">{example.after.pmh}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1">Medications:</p>
                          <p className="text-gray-700 whitespace-pre-line">{example.after.medications}</p>
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
                          <p className="text-gray-700 whitespace-pre-line">{example.after.assessment}</p>
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
                          <p className="text-gray-700 whitespace-pre-line">{example.after.education}</p>
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

          {/* Disclaimer */}
          <motion.div 
            className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-lg text-sm text-amber-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start">
              <Info className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Disclaimer</p>
                <p>The clinical notes shown above are for demonstration purposes only and do not contain real patient information. The templates can be tailored to individual clinician preferences, specialty requirements, and institutional protocols. CRUSH AI adapts to your specific documentation style and workflow needs.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BeforeAfterNoteComparison;
