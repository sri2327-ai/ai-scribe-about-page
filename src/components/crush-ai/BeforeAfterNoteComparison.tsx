import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle2, AlertTriangle, Copy, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';

// Feature highlight tooltip component
const FeatureTooltip = ({ children, text }: { children: React.ReactNode, text: string }) => {
  return (
    <div className="group relative">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black/80 text-white text-xs rounded-md w-40 sm:w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
      </div>
      {children}
    </div>
  );
};

export const BeforeAfterNoteComparison = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('family-medicine');
  const [currentMode, setCurrentMode] = useState('split');
  const [copied, setCopied] = useState(false);
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const [beforeHeight, setBeforeHeight] = useState(0);
  const [afterHeight, setAfterHeight] = useState(0);
  const [biggestHeight, setBiggestHeight] = useState(0);
  
  useEffect(() => {
    if (beforeRef.current && afterRef.current) {
      // Allow DOM to update
      setTimeout(() => {
        setBeforeHeight(beforeRef.current?.scrollHeight || 0);
        setAfterHeight(afterRef.current?.scrollHeight || 0);
        setBiggestHeight(Math.max(beforeRef.current?.scrollHeight || 0, afterRef.current?.scrollHeight || 0));
      }, 100);
    }
  }, [selectedSpecialty, currentMode]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Define the examples we'll be showing with specialty-specific content
  const examples = [
    { 
      id: 'family-medicine', 
      label: 'Family Medicine',
      before: {
        demographics: "PATIENT: Patient ID: FM-123\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 58",
        chiefComplaint: "Follow up on diabetes and hypertension.",
        hpi: "Patient with history of type 2 diabetes and hypertension. Last checkup was 3 months ago. Blood sugars ranging from 140-180. On Metformin 1000mg twice daily. BP readings at home 140-150/85-90. Currently on lisinopril 20mg daily. No chest pain, shortness of breath, or dizziness. No foot issues.",
        pastMedicalHistory: "Type 2 Diabetes Mellitus (2012)\nHypertension (2010)\nHyperlipidemia (2015)",
        medications: "Metformin 1000mg BID\nLisinopril 20mg daily\nAtorvastatin 20mg nightly\nASA 81mg daily",
        vitals: "BP: 148/88\nHR: 76\nRR: 16\nTemp: 98.6F\nWeight: 198 lbs\nHeight: 5'10\"\nBMI: 28.4",
        physicalExam: "General: Alert and oriented, no acute distress\nHeent: Normocephalic, PERRLA, EOMI\nCardiovascular: RRR, no murmurs\nLungs: Clear to auscultation bilaterally\nExt: No lower extremity edema",
        labsImaging: "Recent labs:\nHbA1c: 7.8% (3 months ago)\nBMP: Na 138, K 4.2, Cl 102, CO2 24, BUN 18, Cr 0.9, Glucose 162\nLipid panel: Total cholesterol 175, HDL 42, LDL 98, Triglycerides 180",
        assessment: "1. Type 2 DM - fair control\n2. HTN - uncontrolled\n3. Hyperlipidemia - at goal",
        plan: "1. Increase lisinopril to 40mg daily\n2. Continue Metformin 1000mg BID\n3. Continue statin\n4. Check metabolic panel in 2 weeks\n5. Return in 3 months, sooner if needed",
        signature: "Electronically signed by: Provider"
      },
      after: {
        demographics: "PATIENT: Patient ID: FM-123\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 58\nInsurance: Blue Cross Blue Shield\nLast Visit: 3 months ago",
        chiefComplaint: "Follow up on diabetes and hypertension.",
        hpi: "Patient presents for follow-up of type 2 diabetes mellitus and hypertension. Last clinical evaluation was 3 months ago. Patient reports home blood glucose readings ranging from 140-180 mg/dL, primarily elevated in the morning and after dinner. Currently taking Metformin 1000mg twice daily with meals. Home BP measurements have been consistently elevated at 140-150/85-90 mmHg despite compliance with lisinopril 20mg daily. Patient denies chest pain, shortness of breath, palpitations, dizziness, or syncope. No polyuria, polydipsia, or polyphagia. No vision changes. No numbness, tingling, or burning in extremities. No foot ulcers or delayed wound healing.",
        pastMedicalHistory: "Type 2 Diabetes Mellitus (diagnosed 2012)\nEssential Hypertension (diagnosed 2010)\nHyperlipidemia (diagnosed 2015)\nAppendectomy (2008)\nNo known drug allergies",
        medications: "Current medications:\n- Metformin 1000mg PO BID with meals\n- Lisinopril 20mg PO daily\n- Atorvastatin 20mg PO nightly\n- Aspirin 81mg PO daily\n\nMedication adherence: Patient reports consistent medication adherence with occasional missed weekend doses of Metformin (1-2 times/month).",
        vitals: "BP: 148/88 mmHg (right arm, seated)\nRepeat: 146/86 mmHg (left arm, seated)\nHR: 76 bpm, regular\nRR: 16/min\nTemp: 98.6°F (oral)\nO2 Sat: 98% on room air\nWeight: 198 lbs (down 2 lbs from last visit)\nHeight: 5'10\"\nBMI: 28.4 kg/m² (overweight)",
        physicalExam: "GENERAL: Alert and oriented x3, well-developed, well-nourished, in no acute distress\n\nHEENT: Normocephalic, atraumatic. PERRLA. EOMI. No scleral icterus. Oropharynx clear without exudates.\n\nNECK: Supple, no JVD, no carotid bruits, no thyromegaly.\n\nCARDIOVASCULAR: Regular rate and rhythm, normal S1/S2, no murmurs, rubs, or gallops. No displaced PMI.\n\nRESPIRATORY: Clear to auscultation bilaterally, no wheezes, rales, or rhonchi. No respiratory distress.\n\nABDOMEN: Soft, non-tender, non-distended. No hepatosplenomegaly. Bowel sounds present in all quadrants. Well-healed appendectomy scar RLQ.\n\nMUSCULOSKELETAL: Normal gait, full ROM in all extremities. No joint swelling or tenderness.\n\nEXTREMITIES: No lower extremity edema. Dorsalis pedis and posterior tibial pulses 2+ bilaterally. No diabetic foot ulcers.\n\nSKIN: No rashes, lesions, or unusual pigmentation. Good skin turgor.\n\nNEURO: Cranial nerves II-XII intact. DTRs 2+ and symmetric. Sensation intact to light touch and proprioception in all extremities. Negative Romberg.",
        labsImaging: "RECENT LABORATORY RESULTS:\n- HbA1c: 7.8% (goal <7.0%) [3 months ago]\n- Comprehensive Metabolic Panel (3 months ago):\n  * Glucose: 162 mg/dL (elevated)\n  * BUN: 18 mg/dL\n  * Creatinine: 0.9 mg/dL\n  * eGFR: >60 mL/min/1.73m²\n  * Na: 138 mEq/L\n  * K: 4.2 mEq/L\n  * Cl: 102 mEq/L\n  * CO2: 24 mEq/L\n  * Calcium: 9.4 mg/dL\n  * AST: 24 U/L\n  * ALT: 26 U/L\n  * Alk Phos: 68 U/L\n  * Total Bilirubin: 0.6 mg/dL\n- Lipid Panel (3 months ago):\n  * Total Cholesterol: 175 mg/dL\n  * HDL: 42 mg/dL\n  * LDL: 98 mg/dL (at goal <100 mg/dL)\n  * Triglycerides: 180 mg/dL (borderline high)\n- Urine Microalbumin/Creatinine Ratio: 28 mg/g (mildly elevated)\n\nIMPRESSION: Labs show suboptimal glycemic control, mild microalbuminuria, and borderline hypertriglyceridemia despite statin therapy.",
        assessment: "ASSESSMENT & DIAGNOSIS:\n\n1. Type 2 Diabetes Mellitus without complications (E11.9)\n   - Suboptimal control with HbA1c 7.8% (goal <7.0%)\n   - Early diabetic nephropathy evidenced by microalbuminuria\n   - No evidence of retinopathy, neuropathy, or foot ulcers\n   - BMI 28.4 kg/m² indicating overweight status contributing to insulin resistance\n\n2. Essential Hypertension, Uncontrolled (I10)\n   - Consistently elevated home and office readings despite current therapy\n   - No evidence of end-organ damage\n   - Contributes to cardiovascular risk and potential diabetic complications\n\n3. Mixed Hyperlipidemia (E78.2)\n   - LDL at goal, but elevated triglycerides\n   - On appropriate statin therapy\n   - Increased cardiovascular risk due to concomitant diabetes and hypertension",
        plan: "PLAN:\n\n1. Type 2 Diabetes Management:\n   - Continue Metformin 1000mg BID with meals\n   - Discuss adding GLP-1 receptor agonist at next visit if HbA1c remains elevated\n   - Blood glucose monitoring: Continue checking fasting and 2-hour postprandial levels daily\n   - Dietary counseling: Referred to diabetes educator for carbohydrate counting and meal planning\n   - Exercise: Recommended 150 minutes of moderate-intensity exercise weekly; start with 30-minute walks 5 days/week\n   - Podiatry referral for annual diabetic foot examination\n   - Ophthalmology referral for annual diabetic eye examination\n\n2. Hypertension Management:\n   - Increase lisinopril from 20mg to 40mg daily\n   - Continue home BP monitoring twice daily\n   - Sodium restriction (<2,300 mg/day)\n   - Follow up with repeat BMP in 2 weeks to monitor renal function and potassium levels\n\n3. Hyperlipidemia Management:\n   - Continue Atorvastatin 20mg nightly\n   - Dietary counseling on reducing refined carbohydrates to improve triglycerides\n\n4. Preventive Care:\n   - Continue Aspirin 81mg daily for cardiovascular protection\n   - Influenza vaccination administered today\n   - Pneumococcal vaccination status reviewed and up to date\n\n5. Follow-up:\n   - Return to clinic in 3 months\n   - Repeat HbA1c, comprehensive metabolic panel, and lipid panel prior to next visit\n   - Call office if experiencing adverse effects from increased lisinopril dose\n\n6. Patient Education:\n   - Diabetes self-management handout provided\n   - Hypertension education handout provided\n   - Patient verbalized understanding of medication changes and follow-up plan\n\nTime spent on coordination of care and medical decision-making: 25 minutes\nTotal visit time: 40 minutes",
        signature: "Electronically signed by: Provider, MD\nDate: [Current Date]\nTime: [Current Time]"
      }
    },
    { 
      id: 'cardiology', 
      label: 'Cardiology',
      before: {
        demographics: "PATIENT: Patient ID: CD-456\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 67",
        chiefComplaint: "Chest pain and shortness of breath.",
        hpi: "Patient presents with chest pain described as a pressure sensation, rated 6/10, occurring with exertion and relieved by rest. Associated with shortness of breath. Symptoms started approximately 2 weeks ago. No radiation of pain. No palpitations or dizziness.",
        pastMedicalHistory: "Coronary Artery Disease (2015)\nHypertension (2008)\nHyperlipidemia (2010)",
        medications: "Aspirin 81mg daily\nMetoprolol 50mg BID\nAtorvastatin 40mg nightly\nNitroglycerin PRN",
        vitals: "BP: 150/90\nHR: 88\nRR: 18\nTemp: 98.4F\nWeight: 165 lbs\nHeight: 5'4\"\nBMI: 28.3",
        physicalExam: "General: Alert and oriented, mild distress\nHeent: Normocephalic, PERRLA, EOMI\nCardiovascular: RRR, no murmurs\nLungs: Clear to auscultation bilaterally\nExt: No lower extremity edema",
        labsImaging: "Recent labs:\nLipid panel: Total cholesterol 180, HDL 45, LDL 105, Triglycerides 150\nEKG: NSR, no acute ST changes",
        assessment: "1. Angina - likely stable\n2. HTN - uncontrolled\n3. Hyperlipidemia - at goal",
        plan: "1. Increase Metoprolol to 75mg BID\n2. Continue Aspirin, Atorvastatin, and Nitroglycerin PRN\n3. Stress test scheduled\n4. Follow up in 1 week",
        signature: "Electronically signed by: Provider"
      },
      after: {
        demographics: "PATIENT: Patient ID: CD-456\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 67\nInsurance: Aetna Medicare\nLast Visit: 6 months ago",
        chiefComplaint: "Chest pain and shortness of breath.",
        hpi: "Patient presents with a 2-week history of exertional chest pain, described as a pressure sensation, rated 6/10, relieved by rest within 5-10 minutes. Pain occurs with moderate exertion, such as climbing stairs or walking uphill. No radiation of pain to arm, neck, or jaw. Associated with mild dyspnea. No palpitations, dizziness, or syncope. No diaphoresis or nausea. Symptoms have been increasing in frequency over the past week.",
        pastMedicalHistory: "Coronary Artery Disease (CAD) - diagnosed 2015, s/p PCI to LAD\nHypertension (HTN) - diagnosed 2008\nHyperlipidemia - diagnosed 2010\nAsthma - diagnosed in childhood, well-controlled with PRN albuterol",
        medications: "Current medications:\n- Aspirin 81mg PO daily\n- Metoprolol succinate 50mg PO BID\n- Atorvastatin 40mg PO nightly\n- Sublingual nitroglycerin 0.4mg PRN chest pain\n- Albuterol inhaler PRN wheezing\n\nMedication adherence: Patient reports consistent medication adherence.",
        vitals: "BP: 150/90 mmHg (right arm, seated)\nHR: 88 bpm, regular\nRR: 18/min\nO2 Sat: 97% on room air\nWeight: 165 lbs\nHeight: 5'4\"\nBMI: 28.3 kg/m² (overweight)",
        physicalExam: "GENERAL: Alert and oriented x3, mild distress due to chest pain\n\nHEENT: Normocephalic, atraumatic. PERRLA. EOMI. No scleral icterus. Oropharynx clear.\n\nNECK: Supple, no JVD, no carotid bruits.\n\nCARDIOVASCULAR: Regular rate and rhythm, normal S1/S2, no murmurs, rubs, or gallops. No displaced PMI.\n\nRESPIRATORY: Clear to auscultation bilaterally, no wheezes or rales.\n\nABDOMEN: Soft, non-tender, non-distended. Bowel sounds present in all quadrants.\n\nEXTREMITIES: No lower extremity edema. Peripheral pulses 2+ bilaterally.\n\nSKIN: Warm, dry, and intact. No rashes or lesions.",
        labsImaging: "RECENT LABORATORY RESULTS:\n- Lipid panel (6 months ago):\n  * Total Cholesterol: 180 mg/dL\n  * HDL: 45 mg/dL\n  * LDL: 105 mg/dL\n  * Triglycerides: 150 mg/dL\n- EKG: NSR, no acute ST changes (today)\n\nPRIOR STUDIES:\n- Cardiac catheterization (2015): PCI to LAD for significant stenosis. No other significant CAD.",
        assessment: "ASSESSMENT & DIAGNOSIS:\n\n1. Exertional Angina, likely stable (I20.9)\n   - Increasing frequency of symptoms suggests possible progression\n   - Rule out unstable angina\n\n2. Hypertension, Uncontrolled (I10)\n   - Elevated BP despite current therapy\n   - Increased cardiovascular risk\n\n3. Hyperlipidemia (E78.5)\n   - LDL slightly above goal\n   - Requires continued statin therapy\n\n4. History of Coronary Artery Disease, s/p PCI to LAD (I25.10)\n   - Requires ongoing management and monitoring",
        plan: "PLAN:\n\n1. Angina Management:\n   - Schedule stress test (exercise or pharmacologic) to evaluate for ischemia\n   - Increase Metoprolol succinate from 50mg BID to 75mg BID\n   - Continue sublingual nitroglycerin 0.4mg PRN chest pain; instruct patient to call 911 if pain is not relieved after 3 doses\n   - Counsel patient on lifestyle modifications: smoking cessation, healthy diet, regular exercise\n\n2. Hypertension Management:\n   - Increase Metoprolol to 75mg BID\n   - Recommend home BP monitoring\n   - Consider adding amlodipine 5mg daily if BP remains elevated\n\n3. Hyperlipidemia Management:\n   - Continue Atorvastatin 40mg nightly\n   - Emphasize importance of adherence to statin therapy\n   - Repeat lipid panel in 3 months\n\n4. Preventive Care:\n   - Influenza vaccination administered today\n   - Pneumococcal vaccination status reviewed and up to date\n\n5. Follow-up:\n   - Return to clinic in 1 week for BP check and symptom assessment\n   - Follow up with stress test results and further management\n\n6. Patient Education:\n   - Angina action plan provided\n   - Hypertension and hyperlipidemia education handouts provided\n   - Patient verbalized understanding of medication changes and follow-up plan\n\nTime spent on coordination of care and medical decision-making: 30 minutes\nTotal visit time: 45 minutes",
        signature: "Electronically signed by: Provider, MD\nDate: [Current Date]\nTime: [Current Time]"
      }
    },
    { 
      id: 'pediatrics', 
      label: 'Pediatrics',
      before: {
        demographics: "PATIENT: Patient ID: PD-789\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 7",
        chiefComplaint: "Fever and cough.",
        hpi: "Patient presents with fever of 102F and cough for 2 days. Cough is productive with green mucus. No shortness of breath. No chest pain. No known sick contacts.",
        pastMedicalHistory: "Asthma (2018)\nNo known drug allergies",
        medications: "Albuterol PRN\nFluticasone daily",
        vitals: "BP: 90/60\nHR: 110\nRR: 24\nTemp: 102F\nWeight: 50 lbs\nHeight: 4'0\"",
        physicalExam: "General: Alert and active, mild distress\nHeent: Normocephalic, PERRLA, EOMI\nCardiovascular: RRR, no murmurs\nLungs: Wheezing bilaterally\nExt: No lower extremity edema",
        labsImaging: "Rapid strep: Negative\nCXR: Normal",
        assessment: "1. Asthma exacerbation\n2. URI",
        plan: "1. Albuterol nebulizer treatment\n2. Increase Fluticasone to BID\n3. Follow up in 2 days",
        signature: "Electronically signed by: Provider"
      },
      after: {
        demographics: "PATIENT: Patient ID: PD-789\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 7 years\nInsurance: Cigna\nLast Visit: 1 year ago",
        chiefComplaint: "Fever and cough.",
        hpi: "Patient presents with a 2-day history of fever (Tmax 102.2F at home) and cough. Cough is productive with green nasal discharge. No shortness of breath, chest pain, or difficulty breathing. No known sick contacts at school or home. Appetite is decreased. Complains of mild headache. No vomiting or diarrhea.",
        pastMedicalHistory: "Asthma - diagnosed 2018, intermittent symptoms, uses albuterol PRN\nNo known drug allergies",
        medications: "Current medications:\n- Albuterol inhaler PRN wheezing\n- Fluticasone nasal spray daily for allergic rhinitis\n\nMedication adherence: Mother reports consistent medication administration.",
        vitals: "BP: 90/60 mmHg\nHR: 110 bpm, regular\nRR: 24/min\nO2 Sat: 98% on room air\nTemp: 102.0°F (tympanic)\nWeight: 50 lbs (22.7 kg)\nHeight: 4'0\" (121.9 cm)\nBMI: 15.3 kg/m² (underweight)",
        physicalExam: "GENERAL: Alert and active, mild distress due to fever and cough\n\nHEENT: Normocephalic, atraumatic. PERRLA. EOMI. TMs clear bilaterally. Nasal mucosa erythematous with green nasal discharge. Oropharynx clear, no exudates.\n\nNECK: Supple, no lymphadenopathy.\n\nCARDIOVASCULAR: Regular rate and rhythm, normal S1/S2, no murmurs.\n\nRESPIRATORY: Mild wheezing bilaterally, no rales or rhonchi. No respiratory distress.\n\nABDOMEN: Soft, non-tender, non-distended. Bowel sounds present in all quadrants.\n\nSKIN: Warm, dry, and intact. No rashes or lesions.",
        labsImaging: "Rapid strep test: Negative\nInfluenza A/B PCR: Negative\nCXR: Not indicated",
        assessment: "ASSESSMENT & DIAGNOSIS:\n\n1. Asthma exacerbation, mild (J45.909)\n   - Triggered by viral URI\n   - Responding to albuterol\n\n2. Upper Respiratory Infection (URI), likely viral (J06.9)\n   - Fever, cough, and nasal congestion\n   - Negative strep and influenza testing",
        plan: "PLAN:\n\n1. Asthma Management:\n   - Albuterol nebulizer treatment in office\n   - Increase Fluticasone nasal spray to BID\n   - Continue albuterol PRN wheezing\n   - Monitor respiratory status closely\n   - Return to clinic if symptoms worsen or do not improve in 48 hours\n\n2. URI Management:\n   - Supportive care: rest, fluids, and antipyretics (acetaminophen or ibuprofen) for fever\n   - Nasal saline drops for nasal congestion\n   - Avoid cough and cold medications in children <6 years old\n\n3. Parent Education:\n   - Asthma action plan reviewed\n   - URI education handout provided\n   - Discussed importance of hand hygiene and avoiding sick contacts\n   - Patient verbalized understanding of treatment plan\n\nTime spent on coordination of care and medical decision-making: 20 minutes\nTotal visit time: 35 minutes",
        signature: "Electronically signed by: Provider, MD\nDate: [Current Date]\nTime: [Current Time]"
      }
    },
  ];
  
  const [selectedExample, setSelectedExample] = useState(examples[0]);

  const beforeNote = 
    `DEMOGRAPHICS:\n${selectedExample.before.demographics}\n\n` +
    `CHIEF COMPLAINT:\n${selectedExample.before.chiefComplaint}\n\n` +
    `HPI:\n${selectedExample.before.hpi}\n\n` +
    `PAST MEDICAL HISTORY:\n${selectedExample.before.pastMedicalHistory}\n\n` +
    `MEDICATIONS:\n${selectedExample.before.medications}\n\n` +
    `VITALS:\n${selectedExample.before.vitals}\n\n` +
    `PHYSICAL EXAM:\n${selectedExample.before.physicalExam}\n\n` +
    `LABS/IMAGING:\n${selectedExample.before.labsImaging}\n\n` +
    `ASSESSMENT:\n${selectedExample.before.assessment}\n\n` +
    `PLAN:\n${selectedExample.before.plan}\n\n` +
    `SIGNATURE:\n${selectedExample.before.signature}`;

  const afterNote = 
    `DEMOGRAPHICS:\n${selectedExample.after.demographics}\n\n` +
    `CHIEF COMPLAINT:\n${selectedExample.after.chiefComplaint}\n\n` +
    `HPI:\n${selectedExample.after.hpi}\n\n` +
    `PAST MEDICAL HISTORY:\n${selectedExample.after.pastMedicalHistory}\n\n` +
    `MEDICATIONS:\n${selectedExample.after.medications}\n\n` +
    `VITALS:\n${selectedExample.after.vitals}\n\n` +
    `PHYSICAL EXAM:\n${selectedExample.after.physicalExam}\n\n` +
    `LABS/IMAGING:\n${selectedExample.after.labsImaging}\n\n` +
    `ASSESSMENT:\n${selectedExample.after.assessment}\n\n` +
    `PLAN:\n${selectedExample.after.plan}\n\n` +
    `SIGNATURE:\n${selectedExample.after.signature}`;

  const handleSpecialtyChange = (value: string) => {
    setSelectedSpecialty(value);
    const example = examples.find(ex => ex.id === value);
    if (example) {
      setSelectedExample(example);
    }
  };

  const handleModeChange = () => {
    setCurrentMode(currentMode === 'split' ? 'side-by-side' : 'split');
  };
  
  // Fix the TypeScript errors by using proper React CSSProperties types
  const beforeStyle = {
    height: currentMode === 'split' ? 'auto' : `${biggestHeight}px`,
    overflowY: currentMode === 'split' ? 'auto' as const : 'hidden' as const,
  };
  
  const afterStyle = {
    height: currentMode === 'split' ? 'auto' : `${biggestHeight}px`,
    overflowY: currentMode === 'split' ? 'auto' as const : 'hidden' as const,
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs for selecting specialty */}
      <Tabs value={selectedSpecialty} onValueChange={handleSpecialtyChange} className="w-full">
        <TabsList className="bg-stone-900 border-stone-700 rounded-md">
          {examples.map((example) => (
            <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-stone-800 data-[state=active]:text-stone-50">{example.label}</TabsTrigger>
          ))}
        </TabsList>
        {examples.map((example) => (
          <TabsContent key={example.id} value={example.id} className="mt-4">
            {/* Mode Switch */}
            <div className="flex items-center justify-end mb-4">
              <span className="mr-2 text-sm text-stone-400">Split View</span>
              <Switch id="mode-switch" checked={currentMode === 'side-by-side'} onCheckedChange={handleModeChange} />
              <span className="ml-2 text-sm text-stone-400">Side-by-Side</span>
            </div>

            {/* Before/After Note Comparison */}
            <div className={`grid ${currentMode === 'split' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              {/* Before Note */}
              <div className="relative">
                <h3 className="text-lg font-semibold mb-2 text-stone-300">Original Note</h3>
                <div className="relative">
                  <div 
                    ref={beforeRef}
                    className="p-4 border border-stone-700 rounded-md bg-stone-900 break-words overflow-x-auto whitespace-pre-wrap"
                    style={beforeStyle}
                  >
                    {beforeNote}
                  </div>
                  <FeatureTooltip text="Copy Original Note">
                    <motion.button
                      className="absolute top-2 right-2 bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 rounded-full p-1.5 transition-colors duration-200"
                      onClick={() => copyToClipboard(beforeNote)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </motion.button>
                  </FeatureTooltip>
                </div>
              </div>

              {/* After Note */}
              <div className="relative">
                <h3 className="text-lg font-semibold mb-2 text-stone-300">S10.AI Enhanced Note</h3>
                <div className="relative">
                  <div 
                    ref={afterRef}
                    className="p-4 border border-stone-700 rounded-md bg-stone-900 break-words overflow-x-auto whitespace-pre-wrap"
                    style={afterStyle}
                  >
                    {afterNote}
                  </div>
                  <FeatureTooltip text="Copy Enhanced Note">
                    <motion.button
                      className="absolute top-2 right-2 bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 rounded-full p-1.5 transition-colors duration-200"
                      onClick={() => copyToClipboard(afterNote)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </motion.button>
                  </FeatureTooltip>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Enhanced Disclaimer */}
      <motion.div 
        className="mt-4 sm:mt-6 p-2 sm:p-3 md:p-4 border border-amber-200 bg-amber-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-amber-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start">
          <Info className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-0.5 sm:mb-1">Disclaimer</p>
            <p className="text-xs sm:text-sm">All clinical notes shown here are completely fictional and deidentified. Patient identifiers have been redacted and represented with placeholders (e.g., Patient ID: XX-123, [REDACTED]). These sample notes are for demonstration purposes only and do not represent real patients or actual medical documentation. The templates can be tailored to individual clinician preferences, specialty requirements, and institutional protocols.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
