
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Info, DollarSign, FileText, Award } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { crushAIColors } from '@/theme/crush-ai-theme';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobileHook = useIsMobile();
  
  // Use a combination of both methods to ensure proper responsiveness
  const isSmallScreen = isMobile || isMobileHook;

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
        assessment: "1. Type 2 Diabetes (E11.9)\n   - A1c improved to 7.2% from 7.5% previously\n   - Continue Metformin 1000mg BID\n   - Commended patient on dietary changes and weight loss\n   - Order: Comprehensive metabolic panel & A1c in 3 months\n\n2. Hypertension (I10)\n   - BP today: 132/78, at target\n   - Continue Lisinopril 10mg daily\n   - Encouraged continued sodium restriction\n\n3. Hyperlipidemia (E78.5)\n   - Recent LDL: 110, slightly above target of <100\n   - Continue Atorvastatin 20mg daily\n   - Order: Lipid panel in 6 months\n\n4. Preventive Health\n   - Due for colonoscopy screening\n   - Order: Colonoscopy referral",
        education: "- Continue all medications as prescribed\n- Maintain low-carb diet and exercise regimen\n- Schedule colonoscopy within next month\n- Return in 3 months for follow-up and lab work\n- Call office if blood sugars consistently >200 mg/dL",
        billing: "- E/M: 99214 (Level 4 Follow-up visit)\n- Time-based billing: 25 minutes\n- DM management: G0108\n- CCM coordination: 99490\n- Quality Measures: Blood pressure screening (G8783)\n- Risk Adjustment: HCC19 (Diabetes), HCC85 (Hypertension)"
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
        education: "- Take metoprolol with food to reduce dizziness\n- Maintain sodium restriction (≤2g/day)\n- Contact office if weight increases >2kg in 3 days\n- Continue daily weight logs\n- Schedule echo in 3 months to reassess EF\n- Return for follow-up in 4 weeks",
        billing: "- E/M: 99215 (Level 5 Follow-up visit)\n- Time-based billing: 40 minutes\n- Chronic care management: 99490\n- Post-discharge transition: 99495\n- EKG interpretation: 93010\n- Quality Measures: Heart failure management (G8427)\n- Risk Adjustment: HCC85 (Hypertension), HCC83 (Heart Failure), HCC96 (Atrial Fibrillation)"
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
        education: "- Gradually increase propranolol over 2 weeks\n- Try rizatriptan for next migraine attack\n- Download recommended migraine tracking app\n- Maintain regular sleep-wake cycle\n- Practice stress reduction techniques daily\n- Return in 6 weeks to evaluate medication changes",
        billing: "- E/M: 99214 (Level 4 Follow-up visit)\n- Neurological examination: 96116\n- Time-based billing: 30 minutes\n- Quality Measures: Pain assessment (G8730)\n- Risk Adjustment: HCC79 (Migraine and Chronic Headache)"
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
        education: "- Continue regular physical activity\n- Maintain limited recreational screen time\n- Strategies for increasing vegetable consumption provided\n- Resources for age-appropriate reading materials given\n- Return for next well-child exam at age 8\n- Call for acute concerns or illnesses",
        billing: "- E/M: 99393 (Well-child visit, established patient, age 5-11)\n- Time-based billing: 25 minutes\n- Preventive Medicine: 99382\n- Immunization admin: 90460 (Influenza vaccine)\n- Vision screening: 99173\n- Hearing screening: 92551\n- Quality Measures: BMI assessment (G8417), developmental screening (G8510)"
      }
    },
    { 
      id: 'ophthalmology', 
      label: 'Ophthalmology',
      before: {
        demographics: "Michael Garcia, 65M\nDOB: 08/03/1958\nMRN: 76543210",
        chiefComplaint: "Follow-up for diabetic retinopathy and glaucoma.",
        hpi: "Patient is a 65-year-old male with type 2 diabetes and primary open-angle glaucoma. Has been using latanoprost as prescribed. Reports occasional blurry vision but no significant changes since last visit. Diabetes generally under control with recent A1c of 7.1%.",
        pmh: "- Type 2 diabetes since 2010\n- Primary open-angle glaucoma\n- Hypertension\n- Cataract, right eye, early stage",
        medications: "- Latanoprost 0.005% drops HS OU\n- Brimonidine 0.2% TID OU\n- Metformin 1000mg BID\n- Lisinopril 20mg daily"
      },
      after: {
        demographics: "Michael Garcia, 65M\nDOB: 08/03/1958\nMRN: 76543210\nInsurance: Medicare\nLast Visit: 02/10/2023",
        chiefComplaint: "Follow-up for diabetic retinopathy and glaucoma.",
        hpi: "Patient is a 65-year-old male with type 2 diabetes and primary open-angle glaucoma presenting for scheduled follow-up. Patient reports good compliance with all eye medications. He notes occasional blurry vision, primarily in the right eye when reading, which improves with his current reading glasses. No flashes, floaters, eye pain, or significant changes in vision since last visit. His diabetes is generally well-controlled with most recent A1c of 7.1% (measured 2 weeks ago). Last eye exam was 6 months ago showing mild non-proliferative diabetic retinopathy and stable intraocular pressures on current glaucoma regimen.",
        hcc: "- Type 2 diabetes with mild non-proliferative diabetic retinopathy [E11.329]\n- Primary open-angle glaucoma [H40.11X3]\n- Cataract, right eye [H25.011]",
        pmh: "- Type 2 diabetes since 2010, well-controlled\n- Primary open-angle glaucoma, diagnosed 2018\n- Hypertension, well-controlled\n- Cataract, right eye, early stage",
        medications: "- Latanoprost 0.005% drops HS OU\n- Brimonidine 0.2% TID OU\n- Metformin 1000mg BID\n- Lisinopril 20mg daily\n- Artificial tears PRN",
        assessment: "1. Primary Open-Angle Glaucoma, both eyes (H40.11X3)\n   - IOP: 18 mmHg OD, 17 mmHg OS (target range <21 mmHg)\n   - OCT shows stable retinal nerve fiber layer thickness \n   - Visual fields: Slight progression in right superior field defect\n   - Continue current medication regimen\n   - Order: Repeat visual fields in 3 months\n\n2. Non-proliferative Diabetic Retinopathy, mild, bilateral (E11.329)\n   - No clinically significant macular edema\n   - Microaneurysms stable compared to previous exam\n   - OCT macula: No evidence of macular edema\n   - Encouraged continued glucose control\n\n3. Cataract, right eye, nuclear sclerosis (H25.011)\n   - Gradually progressing but not visually significant\n   - Visual acuity: 20/30-2 OD, 20/25+2 OS with correction\n   - Will monitor; not requiring surgery at this time",
        education: "- Continue all eye drops as prescribed\n- Maintain glucose and blood pressure control\n- Use artificial tears for dry eye symptoms as needed\n- Wear sunglasses outdoors\n- Return to clinic in 4 months for follow-up\n- Call immediately if sudden vision changes, eye pain, flashes, or floaters",
        billing: "- E/M: 92014 (Eye exam, established patient)\n- Extended ophthalmoscopy: 92225\n- Visual field testing: 92083\n- Gonioscopy: 92020\n- OCT: 92134 (Retinal scan)\n- Quality Measures: Diabetic eye exam (G8397)\n- Risk Adjustment: HCC18 (Diabetes with chronic complications), HCC124 (Glaucoma)"
      }
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
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
          className="text-center mb-6 md:mb-10"
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.75rem' },
              fontWeight: 800,
              mb: { xs: 1, md: 2 },
              color: crushAIColors.text.primary,
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}
          >
            Experience Note Perfection: <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#143151] via-[#2A5A7B] to-[#387E89]">Before & After CRUSH AI Scribe</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: crushAIColors.text.secondary,
              fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1.1rem' },
              mb: 2,
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            See how specialty-specific, AI-powered clinical documentation enhances quality while saving hours of documentation time
          </Typography>
          
          {/* Added clinician value proposition tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className="px-3 py-1 text-xs md:text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-100">
              Save 2+ hours daily
            </span>
            <span className="px-3 py-1 text-xs md:text-sm bg-green-50 text-green-700 rounded-full border border-green-100">
              Specialty-specific templates
            </span>
            <span className="px-3 py-1 text-xs md:text-sm bg-purple-50 text-purple-700 rounded-full border border-purple-100">
              Complete notes in real-time
            </span>
            <span className="px-3 py-1 text-xs md:text-sm bg-amber-50 text-amber-700 rounded-full border border-amber-100">
              Improve billing accuracy
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 p-3 sm:p-4 rounded-xl shadow-lg overflow-hidden">
            <Tabs
              defaultValue={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-center mb-4 overflow-x-auto pb-2 scrollbar-thin">
                <TabsList className={cn(
                  "bg-gray-100 p-1",
                  isSmallScreen ? "flex flex-nowrap overflow-x-auto max-w-full scrollbar-hide" : ""
                )}>
                  {examples.map(example => (
                    <TabsTrigger
                      key={example.id}
                      value={example.id}
                      className={cn(
                        "px-3 py-1.5 whitespace-nowrap text-sm",
                        isSmallScreen ? "flex-shrink-0" : ""
                      )}
                    >
                      {example.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {examples.map(example => (
                <TabsContent key={example.id} value={example.id} className="pt-1 md:pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {/* BEFORE: Traditional Clinical Note */}
                    <motion.div 
                      className="relative bg-white rounded-lg shadow-md overflow-hidden border border-red-100"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-red-50 p-2 sm:p-3 border-b border-red-100 flex justify-between items-center">
                        <h3 className="font-bold text-base sm:text-lg text-gray-800">BEFORE: Traditional Clinical Note</h3>
                        {!isSmallScreen && (
                          <span className="text-xs text-red-600 bg-white px-2 py-1 rounded-full border border-red-200">
                            ~25 min documentation time
                          </span>
                        )}
                      </div>
                      <div className={cn(
                        "p-3 sm:p-4 overflow-y-auto font-mono text-sm",
                        isSmallScreen ? "h-[400px]" : "h-[500px]" 
                      )}>
                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Patient Demographics:</p>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.before.demographics}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Chief Complaint:</p>
                          <p className="text-gray-700 text-xs sm:text-sm">{example.before.chiefComplaint}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">HPI:</p>
                          <p className="text-gray-700 text-xs sm:text-sm">{example.before.hpi}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Past Medical History:</p>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.before.pmh}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Medications:</p>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.before.medications}</p>
                        </div>

                        {isSmallScreen && (
                          <div className="mt-6 py-2 px-3 bg-red-50 rounded-md border border-red-100">
                            <p className="text-red-600 text-xs font-medium">Documentation Time: ~25 minutes after visit</p>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* AFTER: CRUSH AI Scribe Note */}
                    <motion.div 
                      className="relative bg-white rounded-lg shadow-md overflow-hidden border border-blue-100"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-blue-50 p-2 sm:p-3 border-b border-blue-100 flex justify-between items-center">
                        <h3 className="font-bold text-base sm:text-lg text-gray-800">AFTER: CRUSH AI Scribe Note</h3>
                        {!isSmallScreen && (
                          <span className="text-xs text-green-600 bg-white px-2 py-1 rounded-full border border-green-200">
                            ~60 seconds completion time
                          </span>
                        )}
                      </div>
                      <div className={cn(
                        "p-3 sm:p-4 overflow-y-auto font-mono text-sm",
                        isSmallScreen ? "h-[400px]" : "h-[500px]" 
                      )}>
                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <FeatureTooltip title="Pre-Charting Info">
                            <p>CRUSH AI automatically imports relevant patient information from your EHR before the visit, saving time and reducing manual data entry.</p>
                          </FeatureTooltip>
                          <p className="font-bold mb-1 text-sm">Patient Demographics:</p>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.after.demographics}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Chief Complaint:</p>
                          <p className="text-gray-700 text-xs sm:text-sm">{example.after.chiefComplaint}</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold text-sm">HPI:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Context-Aware Documentation">
                                <p>CRUSH AI captures and structures the conversation naturally, maintaining context while highlighting important clinical details specific to each specialty.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">{example.after.hpi}</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold text-sm">HCC Risk Factors:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="HCC Code Insights">
                                <p>CRUSH AI automatically identifies and suggests appropriate HCC codes based on the patient encounter, ensuring proper risk adjustment and reimbursement.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.after.hcc}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Past Medical History:</p>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.after.pmh}</p>
                        </div>

                        <div className="mb-4">
                          <p className="font-bold mb-1 text-sm">Medications:</p>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.after.medications}</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold text-sm">Assessment & Plan:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Coding Intelligence">
                                <p>CRUSH AI automatically suggests appropriate ICD-10 and CPT codes based on the documented care, improving coding accuracy and billing efficiency.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.after.assessment}</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold text-sm">Patient Education & Summary:</p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Automated Patient Visit Summary">
                                <p>CRUSH AI automatically generates a clear, comprehensive summary for patients, improving understanding and compliance with treatment plans.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm">{example.after.education}</p>
                        </div>

                        <div className="mb-4 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <p className="font-bold text-sm">
                              <DollarSign className="inline-block h-4 w-4 mr-1" /> Billing & Coding:
                            </p>
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              <FeatureTooltip title="Smart Billing Optimization">
                                <p>CRUSH AI automatically suggests appropriate billing codes, quality measures, and risk adjustment factors to maximize appropriate reimbursement and quality reporting.</p>
                              </FeatureTooltip>
                            </span>
                          </div>
                          <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm bg-white p-2 rounded border border-blue-100">{example.after.billing}</p>
                        </div>

                        <div className="p-2 mt-4 bg-gray-50 rounded-md border border-gray-200">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <FeatureTooltip title="Seamless EHR Integration">
                              <p>CRUSH AI Scribe integrates with a wide range of Electronic Health Record systems, ensuring seamless data flow and documentation without disrupting your existing workflow.</p>
                            </FeatureTooltip>
                            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                              <div className="flex items-center">
                                <svg className="h-4 w-4 text-blue-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs text-blue-700">Data Synced with Your EHR</span>
                              </div>
                            </div>
                          </div>
                          
                          {isSmallScreen && (
                            <div className="mt-2 py-1.5 px-3 bg-green-50 rounded-md border border-green-100 inline-block">
                              <p className="text-green-600 text-xs font-medium">Completion Time: <span className="font-bold">~60 seconds</span></p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <motion.div 
            className="mt-6 md:mt-8 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-4 sm:p-6 text-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold">Ready to see CRUSH in action with your EHR?</h3>
                <p className="text-white/90 text-sm sm:text-base">Experience the difference with a personalized demo</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#143151] font-medium py-2 px-5 sm:px-6 rounded-full shadow-xl flex items-center text-sm sm:text-base"
              >
                Schedule a Demo
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Disclaimer */}
          <motion.div 
            className="mt-6 p-3 sm:p-4 border border-amber-200 bg-amber-50 rounded-lg text-xs sm:text-sm text-amber-800"
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
          
          {/* Added clinician benefits section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium">Time Savings</h4>
              </div>
              <p className="text-sm text-gray-600">Reduce documentation time by up to 75%, finishing notes during or immediately after visits.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium">Improved Quality</h4>
              </div>
              <p className="text-sm text-gray-600">Generate comprehensive, specialty-specific notes with proper coding and thorough documentation.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-medium">Patient Focus</h4>
              </div>
              <p className="text-sm text-gray-600">Maintain eye contact and meaningful connections while CRUSH handles documentation in the background.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium">Revenue Impact</h4>
              </div>
              <p className="text-sm text-gray-600">Maximize reimbursements with accurate HCC risk adjustment coding and comprehensive documentation.</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Add mobile-specific scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        `
      }}/>
    </Box>
  );
};

export default BeforeAfterNoteComparison;
