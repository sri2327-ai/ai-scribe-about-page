
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Info, DollarSign, FileText, FileCog, Award, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const tabsRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Use a combination of both methods to ensure proper responsiveness
  const isSmallScreen = isMobile || isMobileHook;

  // Handle scrolling of tabs
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      if (direction === 'left') {
        tabsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Check scroll position to show/hide arrows
  const handleScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const currentTabsRef = tabsRef.current;
    if (currentTabsRef) {
      currentTabsRef.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }
    return () => {
      currentTabsRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the examples we'll be showing with specialty-specific content
  const examples = [
    { 
      id: 'family-medicine', 
      label: 'Family Medicine',
      before: {
        demographics: "Patient ID: FM-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Follow up on diabetes and hypertension.",
        hpi: "Patient is a 58-year-old male with history of type 2 diabetes and hypertension. He reports that his blood sugars have been running between 130-150 in the mornings and that he's been taking his metformin regularly. No issues with his hypertension medication. Denies polyuria, polydipsia, or polyphagia. No chest pain, SOB, dizziness.",
        pmh: "- Type 2 diabetes diagnosed 2015\n- Hypertension diagnosed 2013\n- Hyperlipidemia",
        medications: "- Metformin 1000mg BID\n- Lisinopril 10mg daily\n- Atorvastatin 20mg daily"
      },
      after: {
        demographics: "Patient ID: FM-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: Private Insurance\nLast Visit: [REDACTED]",
        chiefComplaint: "Follow up on diabetes and hypertension.",
        hpi: "Patient is a 58-year-old male with history of type 2 diabetes and hypertension presenting for routine follow-up. He reports his blood sugars have been well-controlled, ranging between 130-150 mg/dL in the mornings. He states he has been adherent with his metformin regimen and has not experienced any side effects. His hypertension has been stable with no symptoms, and he denies any chest pain, shortness of breath, or dizziness. Patient has been following a low-carb diet and walking 30 minutes 3 times weekly. He has lost 5 pounds since his last visit.",
        hcc: "- Type 2 Diabetes (E11.9)\n   - A1c improved to 7.2% from 7.5% previously\n   - Continue Metformin 1000mg BID\n   - Commended patient on dietary changes and weight loss\n   - Order: Comprehensive metabolic panel & A1c in 3 months\n\n2. Hypertension (I10)\n   - BP today: 132/78, at target\n   - Continue Lisinopril 10mg daily\n   - Encouraged continued sodium restriction\n\n3. Hyperlipidemia (E78.5)\n   - Recent LDL: 110, slightly above target of <100\n   - Continue Atorvastatin 20mg daily\n   - Order: Lipid panel in 6 months\n\n4. Preventive Health\n   - Due for colonoscopy screening\n   - Order: Colonoscopy referral",
        education: "- Continue all medications as prescribed\n- Maintain low-carb diet and exercise regimen\n- Schedule colonoscopy within next month\n- Return in 3 months for follow-up and lab work\n- Call office if blood sugars consistently >200 mg/dL",
        billing: "- E/M: 99214 (Level 4 Follow-up visit)\n- Time-based billing: 25 minutes\n- DM management: G0108\n- CCM coordination: 99490\n- Quality Measures: Blood pressure screening (G8783)\n- Risk Adjustment: HCC19 (Diabetes), HCC85 (Hypertension)"
      }
    },
    { 
      id: 'cardiology', 
      label: 'Cardiology',
      before: {
        demographics: "Patient ID: CV-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Follow up after recent hospitalization for heart failure exacerbation.",
        hpi: "Patient is a 62-year-old female with history of CHF (EF 35%), CAD s/p stent to LAD 2 years ago, and paroxysmal atrial fibrillation. She was hospitalized 3 weeks ago with acute decompensated heart failure. Reports some improvement in dyspnea and edema since discharge. Still has dyspnea with moderate exertion. Taking medications as prescribed but notes occasional dizziness with metoprolol.",
        pmh: "- CHF (EF 35%)\n- CAD s/p stent to LAD 2021\n- Paroxysmal atrial fibrillation\n- Hypertension\n- Hyperlipidemia",
        medications: "- Metoprolol 25mg BID\n- Lisinopril 20mg daily\n- Furosemide 40mg daily\n- Apixaban 5mg BID\n- Atorvastatin 40mg daily"
      },
      after: {
        demographics: "Patient ID: CV-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: Medicare Advantage\nLast Visit: [REDACTED]",
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
      id: 'psychiatry',
      label: 'Psychiatry',
      before: {
        demographics: "Patient ID: PSY-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Follow up for depression and anxiety.",
        hpi: "Patient is a 35-year-old male with major depressive disorder and generalized anxiety. Reports mild improvement in mood with sertraline but still having trouble sleeping. Anxiety continues to affect work performance. Denies suicidal ideation or plans.",
        pmh: "- Major Depressive Disorder\n- Generalized Anxiety Disorder\n- Mild Insomnia",
        medications: "- Sertraline 100mg daily\n- Lorazepam 0.5mg PRN for anxiety"
      },
      after: {
        demographics: "Patient ID: PSY-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: Commercial Insurance\nLast Visit: [REDACTED]",
        chiefComplaint: "Follow up for depression and anxiety.",
        hpi: "Patient is a 35-year-old male with history of major depressive disorder and generalized anxiety disorder presenting for medication management follow-up. He reports partial response to sertraline 100mg daily with improvement in depressed mood (rates mood as 5/10 compared to 3/10 at last visit) but continues to experience anhedonia and fatigue. Sleep remains disrupted with difficulty initiating sleep (takes 1-2 hours to fall asleep) and early morning awakening (4-5AM). Reports functioning at work has improved somewhat but still struggles with concentration during meetings and deadlines. Using lorazepam approximately twice weekly for acute anxiety. Denies current suicidal or homicidal ideation, intent, or plan. No psychotic symptoms.",
        hcc: "- Major Depressive Disorder, recurrent, moderate [F33.1]\n- Generalized Anxiety Disorder [F41.1]\n- Insomnia, chronic [G47.00]",
        pmh: "- Major Depressive Disorder, diagnosed 2018\n- Generalized Anxiety Disorder, diagnosed 2018\n- Chronic Insomnia\n- Family history of depression (mother)",
        medications: "- Sertraline 100mg daily\n- Lorazepam 0.5mg PRN for anxiety (takes ~2x/week)\n- No known medication allergies",
        assessment: "1. Major Depressive Disorder, recurrent, moderate (F33.1)\n   - Partial response to sertraline\n   - Increase sertraline to 150mg daily\n   - Continue weekly therapy sessions\n   - PHQ-9 score today: 14 (moderate) improved from 19 (moderate-severe)\n\n2. Generalized Anxiety Disorder (F41.1)\n   - Partial response to current regimen\n   - GAD-7 score today: 12 (moderate)\n   - Continue lorazepam PRN\n   - Discussed mindfulness techniques and breathing exercises\n\n3. Insomnia, chronic (G47.00)\n   - Added trazodone 50mg at bedtime for sleep\n   - Reviewed sleep hygiene measures\n   - Recommended Cognitive Behavioral Therapy for Insomnia (CBT-I)",
        education: "- Increase sertraline slowly over 1 week\n- Use trazodone 30-60 minutes before desired sleep time\n- Continue journaling daily mood and anxiety levels\n- Practice mindfulness meditation using recommended app\n- Avoid caffeine after 2pm\n- Return in 4 weeks to reassess medication effects",
        billing: "- E/M: 99213 (Level 3 Follow-up visit)\n- Time-based billing: 25 minutes\n- Psychotherapy add-on: 90833 (30 min)\n- PHQ-9 & GAD-7 screening: 96127\n- Quality Measures: Depression screening follow-up (G8431)\n- Risk Adjustment: HCC58 (Major Depressive Disorder)"
      }
    },
    {
      id: 'internal-medicine',
      label: 'Internal Medicine',
      before: {
        demographics: "Patient ID: IM-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Annual physical and medication review.",
        hpi: "Patient is a 66-year-old male presenting for annual physical. Has controlled hypertension and dyslipidemia. Reports occasional mild joint pain but generally feels well. Exercise routine includes walking 30 minutes 3x/week. Last colonoscopy 4 years ago was normal. Due for pneumonia vaccine.",
        pmh: "- Hypertension for 12 years\n- Dyslipidemia\n- Osteoarthritis of knees",
        medications: "- Amlodipine 5mg daily\n- Rosuvastatin 10mg daily\n- Acetaminophen PRN for joint pain"
      },
      after: {
        demographics: "Patient ID: IM-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: Medicare Part B\nLast Visit: [REDACTED]",
        chiefComplaint: "Annual physical and medication review.",
        hpi: "Patient is a 66-year-old male presenting for annual physical examination and medication review. Reports his hypertension and dyslipidemia are well-controlled on current medication regimen. Notes occasional mild bilateral knee pain after prolonged activity, relieved with acetaminophen and rest. Current exercise regimen includes walking 30 minutes three times weekly and light gardening. Last colonoscopy was performed four years ago with normal findings. Has not received pneumonia or shingles vaccinations. Reports adequate energy levels, stable weight, and good appetite. No difficulty with urination, bowel movements, or sleep. No chest pain, shortness of breath, dizziness, or falls.",
        hcc: "- Essential Hypertension [I10]\n- Hyperlipidemia [E78.5]\n- Osteoarthritis, localized, knee [M17.9]",
        pmh: "- Hypertension, diagnosed 2012, well-controlled\n- Dyslipidemia, diagnosed 2014, well-controlled\n- Osteoarthritis of bilateral knees, mild\n- Appendectomy 1985",
        medications: "- Amlodipine 5mg daily\n- Rosuvastatin 10mg daily\n- Acetaminophen 500mg PRN for joint pain\n- Daily multivitamin",
        assessment: "1. Hypertension (I10)\n   - BP today: 126/74, well-controlled\n   - Continue Amlodipine 5mg daily\n   - Home BP monitoring shows readings consistently <130/80\n\n2. Hyperlipidemia (E78.5)\n   - Lipid panel today: LDL 92, HDL 48, TG 110\n   - Continue Rosuvastatin 10mg daily\n   - ASCVD risk score: 12.4%\n\n3. Osteoarthritis of knees, bilateral (M17.0)\n   - Mild symptoms, manageable with acetaminophen PRN\n   - Encouraged continued gentle exercise\n   - Discussed weight management\n\n4. Preventive Healthcare (Z00.00)\n   - Administered PPSV23 (pneumococcal) vaccine today\n   - Administered Shingrix (first dose) today\n   - Due for colonoscopy this year (last: 2020)\n   - Performed depression screening: negative",
        education: "- Schedule colonoscopy within next 2 months\n- Return for second Shingrix dose in 2-6 months\n- Continue current exercise regimen\n- Maintain Mediterranean diet pattern\n- Return for follow-up in 6 months\n- Schedule annual physical for next year",
        billing: "- E/M: 99397 (Medicare Annual Wellness Visit)\n- Immunization Administration: 90471 (x2)\n- Vaccines: 90732 (PPSV23), 90750 (Shingrix)\n- Lipid Panel: 80061\n- Comprehensive Metabolic Panel: 80053\n- Quality Measures: Blood pressure control (G8752), Immunizations up to date (G8482)\n- Risk Adjustment: HCC85 (Hypertension), HCC84 (Medications combined risk)"
      }
    },
    {
      id: 'oncology',
      label: 'Oncology',
      before: {
        demographics: "Patient ID: ONC-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Follow up for breast cancer treatment.",
        hpi: "Patient is a 58-year-old female with history of stage II invasive ductal carcinoma of right breast, ER/PR+, HER2-, diagnosed 8 months ago s/p lumpectomy and axillary lymph node dissection. Completed 4 cycles of adjuvant chemotherapy with doxorubicin and cyclophosphamide 3 months ago. Currently on tamoxifen. Reports fatigue and occasional hot flashes but otherwise tolerating treatment well.",
        pmh: "- Stage II invasive ductal carcinoma, right breast\n- Hypertension\n- Hypothyroidism",
        medications: "- Tamoxifen 20mg daily\n- Lisinopril 10mg daily\n- Levothyroxine 75mcg daily"
      },
      after: {
        demographics: "Patient ID: ONC-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: Private Insurance\nLast Visit: [REDACTED]",
        chiefComplaint: "Follow up for breast cancer treatment.",
        hpi: "Patient is a 58-year-old female with history of stage II (T2N0M0) invasive ductal carcinoma of right breast, ER/PR+, HER2-, diagnosed 8 months ago, presenting for routine follow-up. She underwent right breast lumpectomy with sentinel lymph node biopsy (0/3 nodes positive) on 08/20/2023, followed by 4 cycles of adjuvant chemotherapy with doxorubicin and cyclophosphamide completed on 01/10/2024. Currently on adjuvant hormonal therapy with tamoxifen initiated on 01/25/2024. Reports moderate fatigue (5/10) with gradual improvement since completing chemotherapy. Experiencing 3-5 hot flashes daily, mild-moderate intensity. Denies breast pain, masses, skin changes, or axillary lymphadenopathy. No bone pain, shortness of breath, or neurological symptoms. Completed 10 of 30 planned radiation treatments with minimal skin reaction.",
        hcc: "- Malignant neoplasm of breast, specified as right breast [C50.911]\n- Essential Hypertension [I10]\n- Hypothyroidism [E03.9]",
        pmh: "- Stage II invasive ductal carcinoma, right breast (T2N0M0), ER/PR+, HER2-, diagnosed 08/2023\n- Hypertension, well-controlled\n- Hypothyroidism, well-controlled\n- Surgical history: Right breast lumpectomy with SLNB (08/2023)",
        medications: "- Tamoxifen 20mg daily\n- Lisinopril 10mg daily\n- Levothyroxine 75mcg daily\n- Vitamin D3 2000 IU daily\n- Calcium citrate 500mg BID",
        assessment: "1. Breast Cancer, Stage II (C50.911)\n   - Post-lumpectomy and chemotherapy, currently on hormonal therapy\n   - Tolerating tamoxifen with expected side effects\n   - Currently undergoing radiation therapy (10/30 treatments completed)\n   - Oncotype DX score was 24 (intermediate risk)\n   - Plan: Continue tamoxifen for planned 5-year course\n   - Order: CBC, CMP, vitamin D level\n\n2. Cancer Treatment Side Effects\n   - Fatigue: Improving, recommended structured exercise program\n   - Hot flashes: Moderate, recommended evening primrose oil and cooling techniques\n   - No evidence of lymphedema\n\n3. Hypertension (I10)\n   - Well-controlled on current regimen\n   - BP today: 118/76\n   - Continue lisinopril 10mg daily\n\n4. Hypothyroidism (E03.9)\n   - TSH within normal limits at 2.4 (range 0.4-4.0)\n   - Continue levothyroxine 75mcg daily",
        education: "- Complete remaining radiation treatments as scheduled\n- Follow up with radiation oncologist next week\n- Perform monthly breast self-examination\n- Maintain calcium and vitamin D supplementation\n- Consider joining cancer survivor support group\n- Return for oncology follow-up in 3 months",
        billing: "- E/M: 99214 (Level 4 Follow-up visit)\n- Time-based billing: 30 minutes\n- Oncology care management: G0463\n- Cancer status evaluation: G8721\n- Quality Measures: Pain assessment (G8730), Survivorship care plan (G8875)\n- Risk Adjustment: HCC12 (Breast Cancer), HCC85 (Hypertension)"
      }
    },
    {
      id: 'orthopedics',
      label: 'Orthopedics',
      before: {
        demographics: "Patient ID: ORT-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Right knee pain following meniscus repair.",
        hpi: "Patient is a 52-year-old male presenting for follow-up 6 weeks after arthroscopic repair of right medial meniscus tear. Reports improved pain but still has stiffness in the morning and after prolonged sitting. Has been attending physical therapy twice weekly. Using NSAIDs for pain management.",
        pmh: "- Right medial meniscus tear\n- Hypertension\n- Gastroesophageal reflux disease",
        medications: "- Ibuprofen 600mg PRN for pain\n- Lisinopril 20mg daily\n- Omeprazole 20mg daily"
      },
      after: {
        demographics: "Patient ID: ORT-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: Private PPO\nLast Visit: [REDACTED]",
        chiefComplaint: "Right knee pain following meniscus repair.",
        hpi: "Patient is a 52-year-old male presenting for 6-week follow-up after arthroscopic repair of right medial meniscus tear performed on 03/09/2024. He reports significant improvement in pain (now 3/10 from previous 7/10) but continues to experience morning stiffness lasting 15-20 minutes and stiffness after prolonged sitting. Has been attending physical therapy twice weekly with good compliance to home exercise program. ROM has improved but not yet at baseline. Currently using ibuprofen 600mg once daily or every other day for pain management. Denies locking, catching, or instability of the knee. Able to walk without assistive devices and navigate stairs with minimal discomfort. Has returned to desk work but not yet resumed recreational activities (golf, swimming).",
        hcc: "- Tear of medial meniscus of right knee, current [S83.211A]\n- Status post arthroscopic meniscus repair [Z98.89]\n- Essential Hypertension [I10]\n- Gastroesophageal reflux disease [K21.9]",
        pmh: "- Right medial meniscus tear, traumatic onset 02/2024\n- Hypertension, diagnosed 2015, well-controlled\n- Gastroesophageal reflux disease, diagnosed 2018\n- Previous left ankle sprain 2019, resolved",
        medications: "- Ibuprofen 600mg PRN for pain\n- Lisinopril 20mg daily\n- Omeprazole 20mg daily\n- No known drug allergies",
        assessment: "1. Status post right knee arthroscopic medial meniscus repair (S83.211D)\n   - Post-op week 6, progressing as expected\n   - Range of motion: Extension 0°, Flexion 120° (improved from 100° at week 2)\n   - Minimal effusion present\n   - Stable medial and lateral joint lines with decreased tenderness\n   - Incision well-healed with no signs of infection\n   - Continue physical therapy for additional 4-6 weeks\n   - Progress from partial to full weight-bearing activities\n\n2. Post-surgical rehabilitation\n   - Functional status improving; can manage ADLs independently\n   - Cleared to begin stationary bike with minimal resistance\n   - May advance strengthening exercises as tolerated\n   - Goal: Return to recreational activities by 12 weeks post-op\n\n3. Hypertension (I10)\n   - BP today: 132/82, within acceptable range\n   - Continue current medications\n   - Follow up with PCP for routine management",
        education: "- Progress to full weight-bearing as tolerated\n- Continue home exercise program daily\n- May use ice after activity and elevation as needed\n- Transition from ibuprofen to acetaminophen when possible\n- Use knee sleeve for support during increased activity\n- Return to clinic in 6 weeks for final post-op evaluation",
        billing: "- E/M: 99214 (Level 4 Follow-up visit)\n- Time-based billing: 25 minutes\n- Orthopedic evaluation: 29876\n- Post-operative visit: 99024\n- Quality Measures: Pain assessment and follow-up (G8730)\n- Risk Adjustment: HCC85 (Hypertension), HCC39 (Bone/Joint/Muscle Conditions)"
      }
    },
    {
      id: 'chiropractic',
      label: 'Chiropractic',
      before: {
        demographics: "Patient ID: CH-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Lower back pain with radiation to left leg.",
        hpi: "Patient is a 42-year-old female presenting with lower back pain that started after moving furniture 2 weeks ago. Pain radiates to left buttock and posterior thigh. Reports pain is worse with sitting and bending forward. Has been taking OTC ibuprofen with minimal relief.",
        pmh: "- Previous episode of back pain 3 years ago, resolved with chiropractic care\n- Seasonal allergies",
        medications: "- Ibuprofen 400mg PRN for pain\n- Cetirizine 10mg daily PRN for allergies"
      },
      after: {
        demographics: "Patient ID: CH-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Lower back pain with radiation to left leg.",
        hpi: "Patient is a 42-year-old female presenting with lower back pain that began acutely after moving furniture 2 weeks ago. Pain is located primarily in the lumbar region with radiation to the left buttock and posterior thigh, stopping above the knee. Describes pain as dull and achy at baseline (5/10) with sharp exacerbations (8/10) during certain movements. Reports pain is worse with prolonged sitting, bending forward, and when getting up from seated position. Minimal relief with position changes and OTC ibuprofen 400mg taken 2-3 times daily. Denies bowel or bladder incontinence, saddle anesthesia, bilateral leg weakness, or fever. Previous episode of similar but less severe back pain 3 years ago resolved after 6 sessions of chiropractic care. Patient works as an administrative assistant with prolonged sitting at desk. Exercise routine includes walking 2-3 times weekly.",
        hcc: "- Lumbar radiculopathy [M54.16]\n- Lumbar segmental dysfunction [M99.03]",
        pmh: "- Previous lumbar strain with radiculopathy 2021, resolved\n- Seasonal allergies\n- No surgeries",
        medications: "- Ibuprofen 400mg PRN for pain\n- Cetirizine 10mg daily PRN for allergies\n- No known drug allergies",
        assessment: "1. Lumbar Radiculopathy, left side (M54.16)\n   - Likely L4-L5 or L5-S1 disc involvement\n   - Positive straight leg raise test left at 40 degrees\n   - Diminished left Achilles reflex\n   - Decreased sensation L5 dermatome left foot\n\n2. Lumbar Segmental Dysfunction (M99.03)\n   - Restricted mobility L4-L5-S1 segments\n   - Moderate paraspinal muscle spasm lumbar region bilaterally\n   - Posterior pelvic tilt with left iliac rotation\n   - Positive facet loading test\n\n3. Postural Analysis\n   - Forward head posture\n   - Increased thoracic kyphosis\n   - Decreased lumbar lordosis\n   - Left high shoulder",
        education: "- Performed spinal manipulation therapy to lumbar spine and pelvis\n- Applied myofascial release therapy to lumbar paraspinals\n- Instructed in McKenzie extension exercises to perform 3x daily\n- Recommended lumbar support for office chair\n- Advised 10-minute walking breaks every hour at work\n- Ice application for 15 minutes TID\n- Schedule 2x weekly visits for 3 weeks, then reassess\n- Return tomorrow for follow-up treatment",
        billing: "- Chiropractic Manipulative Treatment: 98940 (1-2 regions)\n- Manual Therapy: 97140\n- Therapeutic Exercise Instruction: 97110\n- Initial Evaluation: 99203\n- Outcome Assessment Tools: Oswestry Low Back Pain Scale\n- Quality Measures: Pain assessment (G8730), functional outcome assessment (G8539)\n- Billing Notes: Auto insurance is primary for this injury-related visit"
      }
    },
    {
      id: 'functional-medicine',
      label: 'Functional Medicine',
      before: {
        demographics: "Patient ID: FM-002\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Chronic fatigue, digestive issues, and brain fog.",
        hpi: "Patient is a 38-year-old female with 8-month history of increasing fatigue, digestive issues including bloating and constipation, and cognitive difficulties. Has seen multiple providers without clear diagnosis. Recent labs from PCP were reportedly normal. Diet consists of typical American diet. Sleep is disrupted with difficulty staying asleep.",
        pmh: "- Hypothyroidism diagnosed 5 years ago\n- Migraine headaches\n- Anxiety",
        medications: "- Levothyroxine 50mcg daily\n- Sumatriptan PRN for migraines\n- Multivitamin daily"
      },
      after: {
        demographics: "Patient ID: FM-002\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Chronic fatigue, digestive issues, and brain fog.",
        hpi: "Patient is a 38-year-old female presenting with an 8-month history of progressive fatigue, digestive disturbances, and cognitive difficulties. She reports fatigue is worst in the morning despite sleeping 7-8 hours, with temporary improvement after caffeine. Digestive symptoms include postprandial bloating, abdominal discomfort, and constipation (bowel movements every 2-3 days). Cognitive symptoms described as difficulty concentrating, word-finding problems, and memory lapses affecting work performance. Reports significant life stressors including job change 10 months ago and relocation 12 months ago. Diet consists primarily of processed convenience foods, daily coffee, and occasional alcohol (2-3 glasses of wine weekly). Exercise limited to weekend activities only. Sleep disrupted with 1-2 awakenings nightly and difficulty returning to sleep. Has consulted with PCP, gastroenterologist, and neurologist without definitive diagnosis. Previous thyroid labs (TSH, T4) within normal limits but has not had full thyroid panel or advanced nutritional testing.",
        hcc: "- Chronic fatigue, unspecified [R53.82]\n- Irritable bowel syndrome [K58.9]\n- Hypothyroidism [E03.9]\n- Sleep maintenance insomnia [G47.01]",
        pmh: "- Hypothyroidism diagnosed 2019\n- Migraine headaches, 1-2/month\n- Anxiety, managed without medications\n- Appendectomy 2002",
        medications: "- Levothyroxine 50mcg daily\n- Sumatriptan 50mg PRN for migraines\n- Basic multivitamin daily\n- Occasional melatonin 3mg for sleep",
        assessment: "1. Suspected Functional Hypothyroidism (E03.9)\n   - Although TSH within reference range (3.8 mIU/L), may have suboptimal T3 conversion\n   - Order comprehensive thyroid panel including fT3, rT3, TPO and TG antibodies\n   - Consider trial of selenium 200mcg and zinc 15mg to support T4 to T3 conversion\n\n2. Suspected Small Intestinal Bacterial Overgrowth (K58.9)\n   - Symptoms consistent with IBS-C variant\n   - Order SIBO breath test\n   - Begin digestive support with betaine HCl and digestive enzymes with meals\n   - Trial of dairy elimination for 3 weeks\n\n3. HPA Axis Dysfunction (R53.82)\n   - Morning cortisol assessment indicated (4-point salivary cortisol test ordered)\n   - Likely stress-induced dysregulation\n   - Begin adaptogenic herbs: Ashwagandha 600mg daily\n\n4. Nutrient Deficiencies (E61.9)\n   - Ordered comprehensive nutritional panel including vitamin D, B12, folate, ferritin, zinc, magnesium\n   - Clinical signs suggestive of B12 and magnesium deficiencies\n   - Begin high-potency B-complex and magnesium glycinate 300mg daily",
        education: "- Discussed anti-inflammatory Mediterranean diet; provided meal plan\n- Instructed on elimination diet protocol beginning with dairy removal\n- Prescribed morning sunlight exposure 15-20 minutes daily\n- Recommended evening electronic device curfew (2 hours before bed)\n- Begin gentle movement: walking 20 minutes daily, yoga 2x weekly\n- Deep breathing exercises 10 minutes BID\n- Return in 3 weeks to review initial test results and symptom journal",
        billing: "- Functional Medicine Consultation: 99205 (Initial comprehensive evaluation)\n- Prolonged service: 99417 (additional 15 min)\n- Nutritional Counseling: 97802\n- Laboratory Services: Comprehensive metabolic panel, CBC, comprehensive thyroid panel, vitamin/mineral panel\n- SIBO breath test to be scheduled\n- Payment Collected: $450 initial consultation fee\n- Superbill provided to patient for insurance submission"
      }
    },
    {
      id: 'ent',
      label: 'ENT',
      before: {
        demographics: "Patient ID: ENT-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Recurrent sinusitis and hearing loss in right ear.",
        hpi: "Patient is a 47-year-old male with 3-month history of nasal congestion, facial pressure, and post-nasal drip. Also reports gradually worsening hearing in right ear over past 6 months. Has tried OTC decongestants and nasal steroids with temporary relief. Completed 10-day course of amoxicillin 3 weeks ago prescribed by PCP with partial improvement.",
        pmh: "- Seasonal allergies\n- Deviated nasal septum (diagnosed previously)\n- Asthma, mild intermittent",
        medications: "- Fluticasone nasal spray daily\n- Loratadine 10mg daily\n- Albuterol inhaler PRN"
      },
      after: {
        demographics: "Patient ID: ENT-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Recurrent sinusitis and hearing loss in right ear.",
        hpi: "Patient is a 47-year-old male presenting with symptoms of chronic rhinosinusitis including nasal congestion, facial pressure (maxillary and frontal), and post-nasal drip for the past 3 months. Reports thick yellow-green nasal discharge, particularly in the mornings. Symptoms worsen with weather changes and in prone position. Additionally reports gradually progressive right-sided hearing loss over 6 months, associated with intermittent tinnitus and sensation of ear fullness. No vertigo, otalgia, or otorrhea. Has completed course of amoxicillin 500mg TID for 10 days 3 weeks ago with partial improvement in sinus symptoms but continued hearing deficit. Using fluticasone nasal spray daily and loratadine with minimal relief. Works as accountant with significant computer use daily. Reports history of frequent swimming in local pool during summer months.",
        hcc: "- Chronic rhinosinusitis [J32.9]\n- Conductive hearing loss, right ear [H90.11]\n- Deviated nasal septum [J34.2]\n- Seasonal allergic rhinitis [J30.2]",
        pmh: "- Seasonal allergies (spring/fall)\n- Deviated nasal septum, diagnosed 2018\n- Asthma, mild intermittent\n- Tonsillectomy, childhood",
        medications: "- Fluticasone nasal spray daily\n- Loratadine 10mg daily\n- Albuterol inhaler PRN\n- No known drug allergies",
        assessment: "1. Chronic Rhinosinusitis (J32.9)\n   - Nasal endoscopy shows purulent discharge from right middle meatus\n   - Bilateral inferior turbinate hypertrophy\n   - CT sinuses ordered: Moderate mucosal thickening in right maxillary sinus\n   - Begin Augmentin 875mg/125mg BID for 14 days\n   - Add saline irrigations BID\n\n2. Conductive Hearing Loss, Right Ear (H90.11)\n   - Audiometry shows mild-moderate conductive hearing loss right ear (30dB air-bone gap)\n   - Type B tympanogram right ear consistent with middle ear effusion\n   - Left ear hearing within normal limits\n   - Likely secondary to eustachian tube dysfunction\n   - Recommendations for ear equalization exercises\n\n3. Deviated Nasal Septum (J34.2)\n   - Significant rightward deviation at bony-cartilaginous junction\n   - Contributing to chronic sinusitis and eustachian tube dysfunction\n   - Discussed surgical options including septoplasty and functional endoscopic sinus surgery\n\n4. Seasonal Allergic Rhinitis (J30.2)\n   - Continue current allergy medications\n   - Consider allergy testing if symptoms persist after addressing structural issues",
        education: "- Demonstrated proper saline irrigation technique\n- Provided handouts for ear equalization exercises\n- Discussed environmental modifications to reduce allergen exposure\n- Explained benefits and risks of septoplasty and FESS procedures\n- Advised to continue antibiotic course completely\n- Return in 3 weeks to reassess symptoms and discuss surgical planning\n- Call sooner if symptoms worsen or new symptoms develop",
        billing: "- E/M: 99204 (Level 4 New Patient visit)\n- Nasal Endoscopy: 31231\n- Audiometry: 92557\n- Tympanometry: 92567\n- Nasal Endoscopy: 31575\n- Quality Measures: Appropriate antibiotic for sinusitis (G8708)\n- Risk Adjustment: HCC41 (Respirartory Conditions)"
      }
    },
    { 
      id: 'neurology', 
      label: 'Neurology',
      before: {
        demographics: "Patient ID: NEU-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Follow up for migraine management.",
        hpi: "Patient is a 45-year-old male with history of chronic migraine headaches. Reports having 3-4 migraines in the past month despite propranolol prophylaxis. Sumatriptan provides relief but causes fatigue. Headaches typically preceded by visual aura and accompanied by photophobia, phonophobia, and nausea.",
        pmh: "- Chronic migraine with aura\n- Seasonal allergies\n- Insomnia",
        medications: "- Propranolol 80mg daily\n- Sumatriptan 50mg PRN\n- Loratadine 10mg daily\n- Melatonin 3mg nightly"
      },
      after: {
        demographics: "Patient ID: NEU-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
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
        demographics: "Patient ID: PED-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Well-child visit and immunizations.",
        hpi: "Emily is a 7-year-old female presenting for annual well-child check. Parent reports normal growth and development. No concerns with vision or hearing. Doing well in 2nd grade. Active in gymnastics. No acute illnesses since last visit.",
        pmh: "- History of otitis media (last episode 2 years ago)\n- Fully immunized through age 5",
        medications: "- Children's multivitamin daily\n- No regular medications"
      },
      after: {
        demographics: "Patient ID: PED-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Well-child visit and immunizations.",
        hpi: "7-year-old female presenting for her annual well-child examination. Parents report normal growth and development with no new health concerns. She is meeting all developmental milestones and performing well academically in 2nd grade (reading above grade level). She participates in gymnastics twice weekly and enjoys art activities. Sleep pattern is regular with 9-10 hours nightly. Diet consists of varied foods but parent reports she is somewhat picky with vegetables. Screen time is limited to 1-2 hours daily. No recent acute illnesses. No concerns with vision or hearing.",
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
        demographics: "Patient ID: OPH-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Follow-up for diabetic retinopathy and glaucoma.",
        hpi: "Patient is a 65-year-old male with type 2 diabetes and primary open-angle glaucoma. Has been using latanoprost as prescribed. Reports occasional blurry vision but no significant changes since last visit. Diabetes generally under control with recent A1c of 7.1%.",
        pmh: "- Type 2 diabetes since 2010\n- Primary open-angle glaucoma\n- Hypertension\n- Cataract, right eye, early stage",
        medications: "- Latanoprost 0.005% drops HS OU\n- Brimonidine 0.2% TID OU\n- Metformin 1000mg BID\n- Lisinopril 20mg daily"
      },
      after: {
        demographics: "Patient ID: OPH-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Follow-up for diabetic retinopathy and glaucoma.",
        hpi: "65-year-old male with type 2 diabetes and primary open-angle glaucoma presenting for scheduled follow-up. Patient reports good compliance with all eye medications. He notes occasional blurry vision, primarily in the right eye when reading, which improves with his current reading glasses. No flashes, floaters, eye pain, or significant changes in vision since last visit. His diabetes is generally well-controlled with most recent A1c of 7.1% (measured 2 weeks ago). Last eye exam was 6 months ago showing mild non-proliferative diabetic retinopathy and stable intraocular pressures on current glaucoma regimen.",
        hcc: "- Type 2 diabetes with mild non-proliferative diabetic retinopathy [E11.329]\n- Primary open-angle glaucoma [H40.11X3]\n- Cataract, right eye [H25.011]",
        pmh: "- Type 2 diabetes since 2010, well-controlled\n- Primary open-angle glaucoma, diagnosed 2018\n- Hypertension, well-controlled\n- Cataract, right eye, early stage",
        medications: "- Latanoprost 0.005% drops HS OU\n- Brimonidine 0.2% TID OU\n- Metformin 1000mg BID\n- Lisinopril 20mg daily\n- Artificial tears PRN",
        assessment: "1. Primary Open-Angle Glaucoma, both eyes (H40.11X3)\n   - IOP: 18 mmHg OD, 17 mmHg OS (target range <21 mmHg)\n   - OCT shows stable retinal nerve fiber layer thickness \n   - Visual fields: Slight progression in right superior field defect\n   - Continue current medication regimen\n   - Order: Repeat visual fields in 3 months\n\n2. Non-proliferative Diabetic Retinopathy, mild, bilateral (E11.329)\n   - No clinically significant macular edema\n   - Microaneurysms stable compared to previous exam\n   - OCT macula: No evidence of macular edema\n   - Encouraged continued glucose control\n\n3. Cataract, right eye, nuclear sclerosis (H25.011)\n   - Gradually progressing but not visually significant\n   - Visual acuity: 20/30-2 OD, 20/25+2 OS with correction\n   - Will monitor; not requiring surgery at this time",
        education: "- Continue all eye drops as prescribed\n- Maintain glucose and blood pressure control\n- Use artificial tears for dry eye symptoms as needed\n- Wear sunglasses outdoors\n- Return to clinic in 4 months for follow-up\n- Call immediately if sudden vision changes, eye pain, flashes, or floaters",
        billing: "- E/M: 92014 (Eye exam, established patient)\n- Extended ophthalmoscopy: 92225\n- Visual field testing: 92083\n- Gonioscopy: 92020\n- OCT: 92134 (Retinal scan)\n- Quality Measures: Diabetic eye exam (G8397)\n- Risk Adjustment: HCC18 (Diabetes with chronic complications), HCC124 (Glaucoma)"
      }
    },
    {
      id: 'gastroenterology',
      label: 'Gastroenterology',
      before: {
        demographics: "Patient ID: GAS-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Abdominal pain and reflux symptoms.",
        hpi: "Patient is a 51-year-old female with 3-month history of intermittent epigastric pain and acid reflux. Symptoms worse after meals and when lying down. Has been taking OTC antacids with some relief. Reports occasional nausea but no vomiting. Denies weight loss or blood in stool.",
        pmh: "- Hypertension\n- Hyperlipidemia\n- Anxiety",
        medications: "- Lisinopril 10mg daily\n- Atorvastatin 20mg daily\n- Calcium carbonate antacids PRN\n- Escitalopram 10mg daily"
      },
      after: {
        demographics: "Patient ID: GAS-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Abdominal pain and reflux symptoms.",
        hpi: "51-year-old female presenting with 3-month history of intermittent epigastric pain and acid reflux symptoms. She describes the pain as burning and gnawing (5-7/10 intensity), located primarily in the epigastrium with occasional radiation to the chest. Symptoms worsen 30-60 minutes after meals (particularly spicy, fatty, or acidic foods) and when lying flat. Nighttime symptoms disrupt sleep 2-3 times weekly. Reports occasional nausea without vomiting and bitter taste in mouth in mornings. Has been taking OTC calcium carbonate antacids with partial, temporary relief. Denies dysphagia, odynophagia, hematemesis, hematochezia, melena, weight loss, or early satiety. No improvement with dietary modifications attempted (avoiding caffeine and spicy foods). Family history significant for father with Barrett's esophagus and maternal uncle with gastric cancer.",
        hcc: "- Gastroesophageal reflux disease [K21.9]\n- Dyspepsia [K30]\n- Essential Hypertension [I10]\n- Hyperlipidemia [E78.5]\n- Generalized anxiety disorder [F41.1]",
        pmh: "- Hypertension, diagnosed 2018, well-controlled\n- Hyperlipidemia, diagnosed 2018, well-controlled\n- Generalized anxiety disorder\n- Cholecystectomy 2010\n- Appendectomy 1985",
        medications: "- Lisinopril 10mg daily\n- Atorvastatin 20mg daily\n- Calcium carbonate antacids PRN\n- Escitalopram 10mg daily\n- Multivitamin daily",
        assessment: "1. Gastroesophageal Reflux Disease (K21.9)\n   - Symptoms and timeline consistent with GERD\n   - Upper endoscopy ordered due to age >50, symptom persistence, and family history\n   - Begin omeprazole 40mg daily for 8 weeks\n   - Discussed lifestyle modifications including dietary changes, weight management, and elevating head of bed\n\n2. Dyspepsia (K30)\n   - May represent functional dyspepsia vs. GERD vs. peptic ulcer disease\n   - H. pylori testing ordered (stool antigen test)\n   - Consider trial of prokinetic agent if symptoms persist after PPI therapy\n   - Discussed possible anxiety contribution to symptoms\n\n3. Family History of Upper GI Neoplasia (Z80.0)\n   - Increases risk profile; warrants endoscopic evaluation\n   - Will assess for Barrett's esophagus and other precancerous conditions\n   - Discussed surveillance recommendations based on findings",
        education: "- Prescribed omeprazole 40mg daily to be taken 30 minutes before breakfast\n- Instructed on proper timing of medication (not with antacids)\n- Provided written GERD diet guidelines and lifestyle modifications\n- Encouraged weight loss; BMI currently 29.4\n- Discussed limiting alcohol consumption and smoking cessation\n- Scheduled upper endoscopy for next week\n- Return visit in 4 weeks to review endoscopy results and symptom response",
        billing: "- E/M: 99204 (Level 4 New Patient Visit)\n- Time-based billing: 35 minutes\n- H. pylori stool antigen test: 87338\n- Upper endoscopy scheduled: 43235\n- Quality Measures: Appropriate use of PPI (G8658)\n- Risk Adjustment: HCC85 (Hypertension), HCC45 (GI Conditions)"
      }
    },
    {
      id: 'podiatry',
      label: 'Podiatry',
      before: {
        demographics: "Patient ID: POD-001\nDOB: [REDACTED]\nMRN: [REDACTED]",
        chiefComplaint: "Right heel pain and diabetic foot check.",
        hpi: "Patient is a 62-year-old male with type 2 diabetes presenting with right heel pain for 2 months. Pain worst in morning with first steps and after prolonged standing. Works as retail manager requiring extended periods on feet. Has been using gel inserts without relief.",
        pmh: "- Type 2 diabetes for 10 years\n- Hypertension\n- Peripheral neuropathy\n- Obesity",
        medications: "- Metformin 1000mg BID\n- Lisinopril 20mg daily\n- Gabapentin 300mg TID\n- Aspirin 81mg daily"
      },
      after: {
        demographics: "Patient ID: POD-001\nDOB: [REDACTED]\nMRN: [REDACTED]\nInsurance: [REDACTED]\nLast Visit: [REDACTED]",
        chiefComplaint: "Right heel pain and diabetic foot check.",
        hpi: "62-year-old male with 10-year history of type 2 diabetes presenting with right heel pain of 2-month duration and routine diabetic foot examination. He describes sharp, stabbing pain (7/10) in the plantar aspect of right heel, worst with first steps in morning (10/10) and after prolonged standing or walking. Pain improves slightly throughout day but returns after periods of rest. Has been using OTC gel heel inserts and NSAIDs with minimal relief. Works as retail manager requiring 8+ hours of standing daily. Reports wearing dress shoes at work. Has not tried night splint, stretching exercises, or prescription orthotics. Additionally reports chronic numbness and tingling in both feet, consistent with known diabetic peripheral neuropathy. Recent A1c was 7.8%. Last comprehensive diabetic foot exam was 1 year ago.",
        hcc: "- Type 2 diabetes with peripheral neuropathy [E11.42]\n- Plantar fasciitis, right foot [M72.2]\n- Essential Hypertension [I10]\n- Obesity [E66.9]",
        pmh: "- Type 2 diabetes, diagnosed 2014, suboptimal control\n- Diabetic peripheral neuropathy, diagnosed 2019\n- Hypertension, well-controlled\n- Obesity, BMI 34.2\n- Hyperlipidemia",
        medications: "- Metformin 1000mg BID\n- Lisinopril 20mg daily\n- Gabapentin 300mg TID\n- Aspirin 81mg daily\n- Atorvastatin 40mg daily\n- Acetaminophen 500mg PRN pain",
        assessment: "1. Plantar Fasciitis, right foot (M72.2)\n   - Positive windlass test\n   - Point tenderness at plantar fascial insertion on calcaneus\n   - Negative squeeze test\n   - Prescribed custom orthotic inserts\n   - Provided night splint\n   - Cortisone injection administered today: 40mg methylprednisolone\n   - Instructed on stretching program\n\n2. Diabetic Peripheral Neuropathy (E11.42)\n   - Diminished protective sensation bilaterally (unable to detect 5.07 monofilament)\n   - Diminished vibratory sensation bilaterally\n   - Absent ankle reflexes bilaterally\n   - No open lesions, ulcerations, or pre-ulcerative lesions\n   - Loss of hair growth distal lower extremities\n\n3. Diabetic Foot Examination\n   - Skin: Dry, intact; mild tinea pedis interdigitally\n   - Nails: Thickened, discolored, debridement performed\n   - Vascular: DP and PT pulses 2/4 bilaterally\n   - Biomechanical: Pes planus bilaterally\n   - Footwear: Current shoes show uneven wear pattern and inadequate support",
        education: "- Demonstrated proper plantar fascia stretching exercises\n- Fitted for night splint and instructed on use\n- Advised on proper footwear selection for work and leisure\n- Cast taken for custom orthotic inserts\n- Discussed importance of daily foot inspection\n- Reviewed proper foot hygiene and moisturizing routine\n- Discussed impact of glucose control on peripheral neuropathy\n- Return in 3 weeks for follow-up and orthotic fitting",
        billing: "- E/M: 99203 (New Patient, Level 3)\n- Comprehensive diabetic foot examination: G0247\n- Therapeutic injection: 20550\n- Nail debridement (x10): 11721\n- Casting for orthotics: L3000\n- Night splint: L4396\n- Quality Measures: Diabetic foot exam (G9226)\n- Risk Adjustment: HCC18 (Diabetes with chronic complications), HCC85 (Hypertension)"
      }
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 12 },
        bgcolor: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden">
            <Tabs
              defaultValue={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="relative">
                {/* Left Scroll Arrow */}
                {showLeftArrow && (
                  <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1 rounded-full shadow-md flex items-center justify-center"
                    onClick={() => scrollTabs('left')}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                )}
                
                <div className="flex justify-center mb-2 md:mb-4 relative overflow-hidden">
                  <div 
                    ref={tabsRef}
                    className={cn(
                      "overflow-x-auto pb-1 sm:pb-2 scrollbar-thin no-scrollbar",
                      "mx-6 sm:mx-8" // Space for arrows
                    )}
                  >
                    <TabsList className={cn(
                      "bg-gray-100 p-0.5 sm:p-1 min-w-max",
                      "flex flex-nowrap"
                    )}>
                      {examples.map(example => (
                        <TabsTrigger
                          key={example.id}
                          value={example.id}
                          className={cn(
                            "px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm whitespace-nowrap flex-shrink-0",
                            "transition-all hover:bg-blue-50"
                          )}
                        >
                          {example.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </div>
                
                {/* Right Scroll Arrow */}
                {showRightArrow && (
                  <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1 rounded-full shadow-md flex items-center justify-center"
                    onClick={() => scrollTabs('right')}
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                )}
              </div>

              {/* Specialty Customization Message */}
              <div className="text-center mb-3">
                <span className="inline-block text-xs sm:text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  <Info className="inline-block w-3 h-3 mr-1" />
                  CRUSH AI adapts to any medical specialty, even those not shown
                </span>
              </div>

              {examples.map(example => (
                <TabsContent key={example.id} value={example.id} className="pt-1 md:pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    {/* BEFORE: Traditional Clinical Note */}
                    <motion.div 
                      className="relative bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md overflow-hidden border border-red-100"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-4">
                        <Typography variant="h6" className="font-bold">Before</Typography>
                        <Typography variant="body2" className="mt-2">{example.before.demographics}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>Chief Complaint:</strong> {example.before.chiefComplaint}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>HPI:</strong> {example.before.hpi}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>PMH:</strong> {example.before.pmh}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>Medications:</strong> {example.before.medications}</Typography>
                      </div>
                    </motion.div>

                    {/* AFTER: CRUSH AI Scribe Note */}
                    <motion.div 
                      className="relative bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md overflow-hidden border border-blue-100"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-4">
                        <Typography variant="h6" className="font-bold">After</Typography>
                        <Typography variant="body2" className="mt-2">{example.after.demographics}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>Chief Complaint:</strong> {example.after.chiefComplaint}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>HPI:</strong> {example.after.hpi}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>PMH:</strong> {example.after.pmh}</Typography>
                        <Typography variant="body2" className="mt-2"><strong>Medications:</strong> {example.after.medications}</Typography>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
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

        @media (max-width: 640px) {
          .tooltip-content {
            max-width: 260px;
          }
        }
        `
      }}/>
    </Box>
  );
};

export default BeforeAfterNoteComparison;
