
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Stethoscope,
  FileText,
  Zap,
  Timer,
  Target
} from 'lucide-react';

const specialtyData = {
  "Internal Medicine": {
    before: {
      title: "Traditional Documentation",
      time: "45-60 minutes",
      content: `CC: Follow-up diabetes and hypertension.

HPI: 65 y/o male returns for routine follow-up. Reports good adherence to medications. Checking BG at home, ranges 120-180. No chest pain, SOB, or edema.

PMH: DM2, HTN, hyperlipidemia
Medications: Metformin 1000mg BID, Lisinopril 10mg daily, Atorvastatin 20mg daily

PE: Vitals stable. No acute distress. Heart RRR, lungs clear, no edema.

A&P: Continue current regimen. RTC 3 months.`,
      issues: ["Incomplete assessment", "Missing clinical reasoning", "Brief documentation", "Potential compliance issues"]
    },
    after: {
      title: "AI-Enhanced Clinical Documentation",
      time: "15-20 minutes",
      content: `CHIEF COMPLAINT:
Routine follow-up for diabetes mellitus type 2 and hypertension management.

HISTORY OF PRESENT ILLNESS:
Mr. Johnson is a 65-year-old gentleman with well-controlled diabetes mellitus type 2 and hypertension presenting for routine quarterly follow-up. He reports excellent medication adherence and demonstrates good diabetes self-management with home glucose monitoring. His home glucose readings range from 120-180 mg/dL, indicating reasonable glycemic control. He denies cardiovascular symptoms including chest pain, shortness of breath, or lower extremity edema. No hypoglycemic episodes reported.

CURRENT MEDICATIONS:
• Metformin 1000mg twice daily - excellent tolerance
• Lisinopril 10mg daily - no side effects
• Atorvastatin 20mg daily - no muscle complaints

PHYSICAL EXAMINATION:
Vital signs stable and within normal limits. Patient appears well and in no acute distress. Cardiovascular examination reveals regular rate and rhythm without murmur. Pulmonary examination clear to auscultation bilaterally. No peripheral edema noted.

ASSESSMENT AND PLAN:
1. Diabetes Mellitus Type 2 - Well controlled on current regimen
   - Continue Metformin 1000mg BID
   - HbA1c due today, goal <7%
   - Annual diabetic eye exam scheduled
   - Foot examination normal

2. Hypertension - Well controlled
   - Continue Lisinopril 10mg daily
   - Blood pressure monitoring excellent

3. Hyperlipidemia - On appropriate statin therapy
   - Continue Atorvastatin 20mg daily
   - Lipid panel due today

FOLLOW-UP: Return to clinic in 3 months or sooner if concerns arise.`,
      benefits: ["Comprehensive assessment", "Clear clinical reasoning", "Complete documentation", "Improved patient care"]
    }
  },
  "Cardiology": {
    before: {
      title: "Traditional Documentation",
      time: "50-70 minutes",
      content: `CC: Chest pain

HPI: 58 y/o male with chest pain x 2 days. Pressure-like, substernal, radiates to left arm. Worse with exertion. PMH significant for HTN, smoking.

PE: HR 88, BP 150/95. Heart sounds normal. No murmur.

EKG: NSR, no acute changes
Labs: Pending

A&P: Possible ACS. Admit for observation.`,
      issues: ["Insufficient history", "Limited risk stratification", "Incomplete assessment", "Missing protocols"]
    },
    after: {
      title: "AI-Enhanced Cardiology Documentation",
      time: "20-30 minutes",
      content: `CHIEF COMPLAINT:
Acute onset chest pain with concerning features for acute coronary syndrome.

HISTORY OF PRESENT ILLNESS:
Mr. Thompson is a 58-year-old gentleman with cardiovascular risk factors presenting with a 2-day history of substernal chest pressure. Pain is described as 7/10 severity, pressure-like quality, with radiation to the left arm and jaw. Symptoms are reproducibly triggered by exertion and relieved with rest, consistent with stable angina pattern. No associated diaphoresis, nausea, or shortness of breath at rest.

CARDIOVASCULAR RISK FACTORS:
• Hypertension - on treatment
• Tobacco use - 30 pack-year history, continues to smoke
• Family history - father MI at age 62
• No known diabetes or hyperlipidemia

PHYSICAL EXAMINATION:
Vital Signs: HR 88 bpm regular, BP 150/95 mmHg, RR 16, O2 sat 98% RA
Cardiovascular: Regular rate and rhythm, S1 S2 normal, no murmurs, rubs, or gallops
Pulmonary: Clear to auscultation bilaterally
Extremities: No edema, peripheral pulses intact

DIAGNOSTIC STUDIES:
• 12-lead EKG: Normal sinus rhythm, no acute ST-T wave changes
• Chest X-ray: Normal cardiac silhouette, clear lung fields
• Troponin I: Pending (ordered)
• BNP: Pending
• Lipid panel: Pending

ASSESSMENT AND PLAN:
1. Chest Pain - Intermediate probability acute coronary syndrome
   - HEART score: 5 (intermediate risk)
   - Serial troponins q6h x 3
   - Continuous cardiac monitoring
   - NPO pending cardiology consultation
   
2. Hypertension - Poorly controlled
   - Hold home antihypertensives initially
   - Monitor BP closely
   
3. Tobacco cessation counseling provided

DISPOSITION: Admit to cardiac observation unit for rule-out MI protocol and stress testing if biomarkers negative.`,
      benefits: ["Detailed risk stratification", "Comprehensive cardiac assessment", "Evidence-based protocols", "Clear disposition plan"]
    }
  }
};

const BeforeAfterNoteComparison = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Internal Medicine");
  const [activeView, setActiveView] = useState<"before" | "after">("before");

  const currentData = specialtyData[selectedSpecialty as keyof typeof specialtyData];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100">
            <Stethoscope className="w-4 h-4 mr-2" />
            Clinical Documentation Excellence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Note Perfection: Before & After CRUSH AI Scribe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how specialty-specific, AI-powered clinical documentation enhances quality 
            while saving hours of documentation time
          </p>
        </motion.div>
      </div>

      {/* Specialty Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {Object.keys(specialtyData).map((specialty) => (
          <Button
            key={specialty}
            variant={selectedSpecialty === specialty ? "default" : "outline"}
            onClick={() => setSelectedSpecialty(specialty)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedSpecialty === specialty
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
            }`}
          >
            <FileText className="w-4 h-4 mr-2" />
            {specialty}
          </Button>
        ))}
      </motion.div>

      {/* Before/After Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-gray-100 p-1 rounded-full inline-flex">
          <Button
            variant={activeView === "before" ? "default" : "ghost"}
            onClick={() => setActiveView("before")}
            className={`px-8 py-2 rounded-full font-medium transition-all duration-200 ${
              activeView === "before"
                ? "bg-red-500 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Before AI
          </Button>
          <Button
            variant={activeView === "after" ? "default" : "ghost"}
            onClick={() => setActiveView("after")}
            className={`px-8 py-2 rounded-full font-medium transition-all duration-200 ${
              activeView === "after"
                ? "bg-green-500 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            After AI
          </Button>
        </div>
      </motion.div>

      {/* Comparison Cards */}
      <motion.div
        key={`${selectedSpecialty}-${activeView}`}
        initial={{ opacity: 0, x: activeView === "before" ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Before Card */}
        <Card className={`border-2 transition-all duration-300 ${
          activeView === "before" 
            ? "border-red-200 shadow-lg bg-red-50/30" 
            : "border-gray-200 bg-gray-50/50 opacity-40"
        }`}>
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                {currentData.before.title}
              </h3>
              <Badge variant="destructive" className="flex items-center">
                <Timer className="w-3 h-3 mr-1" />
                {currentData.before.time}
              </Badge>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-red-100">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                {currentData.before.content}
              </pre>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 flex items-center">
                <Target className="w-4 h-4 mr-2 text-red-500" />
                Common Issues:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {currentData.before.issues.map((issue, index) => (
                  <div key={index} className="flex items-center text-sm text-red-700 bg-red-50 px-3 py-2 rounded-md">
                    <AlertTriangle className="w-3 h-3 mr-2 flex-shrink-0" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* After Card */}
        <Card className={`border-2 transition-all duration-300 ${
          activeView === "after" 
            ? "border-green-200 shadow-lg bg-green-50/30" 
            : "border-gray-200 bg-gray-50/50 opacity-40"
        }`}>
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                {currentData.after.title}
              </h3>
              <Badge variant="default" className="bg-green-500 flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                {currentData.after.time}
              </Badge>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-green-100 max-h-80 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                {currentData.after.content}
              </pre>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                Key Improvements:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {currentData.after.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-green-700 bg-green-50 px-3 py-2 rounded-md">
                    <CheckCircle2 className="w-3 h-3 mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-blue-900 mb-1">60-75%</h3>
            <p className="text-blue-700 text-sm">Time Reduction</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-green-900 mb-1">95%</h3>
            <p className="text-green-700 text-sm">Accuracy Rate</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6 text-center">
            <Stethoscope className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-purple-900 mb-1">40+</h3>
            <p className="text-purple-700 text-sm">Medical Specialties</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BeforeAfterNoteComparison;
