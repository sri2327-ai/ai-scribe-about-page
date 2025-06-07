
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, Sparkles, Clock, Target } from 'lucide-react';

interface NoteExample {
  specialty: string;
  before: string;
  after: string;
  improvements: string[];
  timesSaved: string;
}

const noteExamples: NoteExample[] = [
  {
    specialty: "Allergy & Immunology",
    before: `Chief Complaint: Patient reports seasonal allergies.

History: 45-year-old patient presents with complaints of sneezing, runny nose, and itchy eyes during spring months. Symptoms have been present for past 3 years. Patient tried over-the-counter antihistamines with minimal relief.

Physical Exam: Nasal congestion noted. Conjunctival erythema present bilaterally.

Assessment: Allergic rhinitis
Plan: Start on nasal corticosteroid. Follow up in 4 weeks.`,
    after: `CHIEF COMPLAINT
Seasonal allergic rhinitis with inadequate symptom control on current therapy.

HISTORY OF PRESENT ILLNESS
This 45-year-old patient presents for evaluation of persistent seasonal allergic symptoms occurring annually from March through June over the past 3 years. Primary symptoms include:
• Bilateral clear rhinorrhea with accompanying sneezing (8-10 episodes daily)
• Ocular pruritus with mild conjunctival injection
• Nasal congestion affecting sleep quality
• Symptoms peak during tree pollen season (March-May)

CURRENT MEDICATIONS: OTC loratadine 10mg daily with suboptimal response
ALLERGIES: NKDA

PHYSICAL EXAMINATION
• Nasal: Bilateral inferior turbinate edema, clear discharge, no polyps visualized
• Eyes: Mild bilateral conjunctival erythema, no chemosis
• Throat: Non-erythematous, no cobblestoning

ASSESSMENT & PLAN
1. ALLERGIC RHINITIS (J30.1) - Seasonal, likely tree pollen sensitivity
   • Initiate fluticasone propionate nasal spray 50mcg, 2 sprays each nostril daily
   • Continue loratadine during peak season
   • Patient education on pollen avoidance strategies
   • Consider allergy testing if symptoms persist after 6-week trial

2. FOLLOW-UP: Return in 6 weeks to assess treatment response
3. PATIENT EDUCATION: Discussed proper nasal spray technique, timing of administration`,
    improvements: [
      "Structured format with clear sections",
      "Detailed symptom quantification",
      "Specific medication dosages and instructions",
      "Evidence-based treatment rationale",
      "Patient education documentation"
    ],
    timesSaved: "12 minutes"
  },
  {
    specialty: "Cardiology",
    before: `Patient is a 68-year-old male with chest pain. Pain started this morning. Patient reports substernal chest pressure. EKG shows ST changes. Echo shows wall motion abnormality. Will start on dual antiplatelet therapy and statin. Cardiology consult requested.`,
    after: `CHIEF COMPLAINT
Acute onset substernal chest pressure with electrocardiographic changes.

HISTORY OF PRESENT ILLNESS
This 68-year-old male presents with acute onset substernal chest pressure beginning at 0800 this morning while at rest. Pain described as 7/10 severity, non-radiating, associated with mild dyspnea and diaphoresis. No previous cardiac history. Pain persists despite sublingual nitroglycerin x3.

RISK FACTORS: Hypertension, hyperlipidemia, 40-pack-year smoking history
MEDICATIONS: Lisinopril 10mg daily, atorvastatin 20mg daily
ALLERGIES: NKDA

DIAGNOSTIC STUDIES
• EKG: Sinus rhythm, rate 78, new 2mm ST depression in leads V2-V4
• Echocardiogram: LVEF 45%, new anterior wall hypokinesis
• Troponin I: 2.1 ng/mL (elevated)

ASSESSMENT & PLAN
1. NON-ST ELEVATION MYOCARDIAL INFARCTION (I21.9)
   • TIMI Risk Score: 4 (intermediate risk)
   • Initiated dual antiplatelet therapy: aspirin 325mg loading, clopidogrel 600mg loading
   • Metoprolol 25mg BID for rate control and cardioprotection
   • Continue atorvastatin 80mg daily (high-intensity)
   • Heparin per protocol

2. DISPOSITION: Urgent cardiology consultation for consideration of cardiac catheterization
3. MONITORING: Serial troponins q8h, continuous telemetry
4. PATIENT EDUCATION: Discussed diagnosis, treatment plan, and importance of medication compliance`,
    improvements: [
      "TIMI risk stratification included",
      "Specific medication dosing protocols",
      "Evidence-based treatment guidelines",
      "Comprehensive diagnostic correlation",
      "Risk factor documentation"
    ],
    timesSaved: "15 minutes"
  },
  {
    specialty: "Dermatology",
    before: `Patient has a mole on back that looks suspicious. Mole is brown and irregular. Will do biopsy.

Physical exam: Dark brown lesion on upper back, approximately 6mm, irregular borders.

Plan: Shave biopsy. Follow up for results.`,
    after: `CHIEF COMPLAINT
Evaluation of changing pigmented lesion on upper back.

HISTORY OF PRESENT ILLNESS
Patient presents for evaluation of a pigmented lesion on the upper back that has demonstrated recent changes. Patient notes increase in size over past 6 months and development of irregular borders. No associated symptoms of pruritus, bleeding, or pain. No family history of melanoma.

DERMATOLOGIC HISTORY: No previous skin cancers, occasional sunburns in adolescence
MEDICATIONS: None
ALLERGIES: NKDA

DERMATOLOGIC EXAMINATION
Upper back: 6mm asymmetric brown-black macule with irregular borders and color variegation. No ulceration or bleeding noted.
ABCDE Assessment:
• Asymmetry: Present
• Border: Irregular, notched edges
• Color: Variegated brown to black
• Diameter: 6mm
• Evolution: Patient-reported size increase over 6 months

Dermoscopy: Atypical network pattern with focal regression areas

ASSESSMENT & PLAN
1. ATYPICAL PIGMENTED LESION (D22.5) - Upper back
   • Clinical concern for possible melanoma given ABCDE criteria
   • Excisional biopsy with 2mm margins planned
   • Specimen will be submitted for histopathologic examination

2. SKIN CANCER SURVEILLANCE
   • Full body skin examination performed - no additional concerning lesions
   • Patient education on sun protection and self-examination
   • Annual dermatologic surveillance recommended

3. FOLLOW-UP: Return in 1 week for biopsy results and wound check
4. PATIENT EDUCATION: Discussed importance of sun protection, self-examination technique`,
    improvements: [
      "ABCDE melanoma assessment criteria",
      "Dermoscopy findings documented",
      "Detailed lesion characterization",
      "Comprehensive skin examination noted",
      "Patient education on prevention"
    ],
    timesSaved: "10 minutes"
  },
  {
    specialty: "Family Medicine",
    before: `Annual physical exam. Patient feels well. Vital signs normal. Physical exam unremarkable. Labs ordered. Follow up in one year.`,
    after: `CHIEF COMPLAINT
Annual preventive health maintenance examination.

REVIEW OF SYSTEMS
Comprehensive 14-point ROS negative except as noted in HPI. Patient reports generally feeling well with good energy levels and no specific concerns.

PREVENTIVE CARE ASSESSMENT
Last colonoscopy: 2019 (due for repeat)
Last mammogram: Current (performed 3 months ago - normal)
Immunizations: Up to date per ACIP guidelines
Tobacco use: Never smoker
Alcohol: 1-2 drinks per week
Exercise: Walks 30 minutes, 4x weekly

PHYSICAL EXAMINATION
Vital Signs: BP 118/76, HR 72, BMI 24.2, Temp 98.6°F
General: Well-appearing, no acute distress
Cardiovascular: Regular rate and rhythm, no murmurs
Pulmonary: Clear to auscultation bilaterally
Abdomen: Soft, non-tender, no organomegaly
Skin: No suspicious lesions noted

ASSESSMENT & PLAN
1. ADULT HEALTH MAINTENANCE (Z00.00)
   • Comprehensive metabolic panel, lipid panel, CBC with differential
   • HbA1c (last checked 2 years ago)
   • TSH (due per screening guidelines)
   • Vitamin D level

2. PREVENTIVE CARE NEEDS
   • Colonoscopy referral - overdue for age-appropriate screening
   • Continue current exercise regimen
   • Discussed Mediterranean diet benefits

3. IMMUNIZATIONS: Reviewed and current per ACIP guidelines
4. FOLLOW-UP: Return in 12 months for annual examination
5. PATIENT EDUCATION: Importance of continued preventive care, dietary counseling provided`,
    improvements: [
      "Structured preventive care tracking",
      "Age-appropriate screening reminders",
      "Health maintenance guidelines integration",
      "Lifestyle counseling documentation",
      "Evidence-based recommendations"
    ],
    timesSaved: "8 minutes"
  },
  {
    specialty: "Gastroenterology",
    before: `Patient has abdominal pain and diarrhea for 2 weeks. Pain is crampy. Stool is loose. Will check labs and stool studies. Consider colonoscopy.`,
    after: `CHIEF COMPLAINT
Two-week history of crampy abdominal pain with loose stools.

HISTORY OF PRESENT ILLNESS
This patient presents with a 14-day history of crampy, periumbilical abdominal pain associated with 4-6 loose, non-bloody bowel movements daily. Symptoms began abruptly without obvious trigger. Associated symptoms include mild nausea but no vomiting, fever, or weight loss. No recent travel or antibiotic use.

GASTROENTEROLOGIC HISTORY: No previous GI disorders, surgeries, or procedures
FAMILY HISTORY: Maternal IBD (ulcerative colitis)
MEDICATIONS: None
ALLERGIES: NKDA

PHYSICAL EXAMINATION
Vital Signs: Afebrile, normotensive, mild tachycardia (HR 98)
Abdomen: Mild periumbilical tenderness without rebound or guarding
Bowel sounds: Hyperactive
Rectal exam: Normal tone, no masses, guaiac negative

ASSESSMENT & PLAN
1. ACUTE GASTROENTERITIS vs. INFLAMMATORY BOWEL DISEASE (K59.1)
   • Given family history of IBD and symptom duration, inflammatory etiology considered
   
   DIAGNOSTIC WORKUP:
   • Comprehensive metabolic panel, CBC with differential
   • Inflammatory markers: ESR, CRP, calprotectin
   • Stool studies: C. diff, ova & parasites, culture, lactoferrin
   • Consider flexible sigmoidoscopy if symptoms persist >4 weeks

2. SYMPTOMATIC MANAGEMENT
   • Dietary modifications: BRAT diet initially, gradual advancement
   • Adequate hydration - patient counseled on oral rehydration
   • Probiotics may be beneficial

3. FOLLOW-UP: Return in 1 week or sooner if symptoms worsen
4. RED FLAGS: Patient educated to return immediately for fever, blood in stool, severe dehydration, or worsening pain`,
    improvements: [
      "Systematic diagnostic approach",
      "Family history correlation with symptoms",
      "Structured physical examination",
      "Evidence-based diagnostic workup",
      "Clear red flag symptom education"
    ],
    timesSaved: "14 minutes"
  }
];

const BeforeAfterNoteComparison = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % noteExamples.length);
    setActiveTab('before');
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + noteExamples.length) % noteExamples.length);
    setActiveTab('before');
  };

  const currentNote = noteExamples[currentExample];

  return (
    <div id="note-comparison-section" className="w-full max-w-7xl mx-auto">
      {/* Specialty Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevExample}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5 text-[#143151]" />
          </button>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#143151] mb-1">
              {currentNote.specialty}
            </h3>
            <p className="text-sm text-gray-600">
              Example {currentExample + 1} of {noteExamples.length}
            </p>
          </div>
          
          <button
            onClick={nextExample}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 text-[#143151]" />
          </button>
        </div>

        <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-lg">
          <button
            onClick={() => setActiveTab('before')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'before'
                ? 'bg-red-100 text-red-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Before S10.AI
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'after'
                ? 'bg-green-100 text-green-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            After S10.AI
          </button>
        </div>
      </div>

      {/* Note Display */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Note Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            key={`${currentExample}-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <div className={`p-6 rounded-xl h-full min-h-[500px] ${
              activeTab === 'before' 
                ? 'bg-red-50 border-2 border-red-200' 
                : 'bg-green-50 border-2 border-green-200'
            }`}>
              <div className="flex items-center mb-4">
                <FileText className={`w-5 h-5 mr-2 ${
                  activeTab === 'before' ? 'text-red-600' : 'text-green-600'
                }`} />
                <h4 className={`font-semibold ${
                  activeTab === 'before' ? 'text-red-700' : 'text-green-700'
                }`}>
                  {activeTab === 'before' ? 'Traditional Documentation' : 'S10.AI Enhanced Note'}
                </h4>
              </div>
              
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-sans">
                  {activeTab === 'before' ? currentNote.before : currentNote.after}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Improvements Panel */}
        <div className="order-1 lg:order-2">
          <div className="bg-white rounded-xl shadow-lg p-6 h-full">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-[#387E89] mr-3" />
              <h4 className="text-xl font-bold text-[#143151]">
                S10.AI Improvements
              </h4>
            </div>

            <div className="space-y-6">
              {/* Time Saved */}
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold text-blue-900">Time Saved</p>
                  <p className="text-2xl font-bold text-blue-600">{currentNote.timesSaved}</p>
                </div>
              </div>

              {/* Key Improvements */}
              <div>
                <h5 className="font-semibold text-[#143151] mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Key Improvements
                </h5>
                <ul className="space-y-2">
                  {currentNote.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#387E89] mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {improvement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile View Toggle */}
              <div className="lg:hidden">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('before')}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === 'before'
                        ? 'bg-red-100 text-red-700 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setActiveTab('after')}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === 'after'
                        ? 'bg-green-100 text-green-700 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {noteExamples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentExample(index);
              setActiveTab('before');
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentExample
                ? 'bg-[#387E89] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Disclaimer for specialties without examples */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Note:</strong> Sample notes are currently available for {noteExamples.length} specialties. 
          For specialties not shown here, our AI system adapts to your specific documentation needs with 
          customizable templates and specialty-specific terminology. Contact our team for specialty-specific 
          template development and training.
        </p>
      </div>
    </div>
  );
};

export default BeforeAfterNoteComparison;
