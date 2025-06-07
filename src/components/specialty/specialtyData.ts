
export const specialtyData = [
  {
    name: "Allergy & Immunology",
    hasNoteExample: true,
    description: "Specialized AI documentation for allergy testing, immunotherapy protocols, and adverse reaction tracking with automated allergen cross-referencing and treatment plan optimization.",
    keyFeatures: [
      "Automated allergen panel interpretation",
      "Immunotherapy dosing calculations",
      "Adverse reaction documentation",
      "Environmental trigger tracking",
      "Drug allergy cross-referencing",
      "Anaphylaxis protocol integration"
    ],
    commonProcedures: [
      "Skin Prick Tests",
      "Intradermal Testing", 
      "Patch Testing",
      "Immunotherapy Injections",
      "Drug Challenges",
      "Food Challenges"
    ],
    icd10Codes: [
      { code: "Z91.010", description: "Allergy to penicillin" },
      { code: "T78.40XA", description: "Allergy, unspecified, initial encounter" },
      { code: "J45.9", description: "Asthma, unspecified" },
      { code: "L20.9", description: "Atopic dermatitis, unspecified" }
    ]
  },
  {
    name: "Cardiology",
    hasNoteExample: true,
    description: "Advanced cardiac care documentation with ECG interpretation, hemodynamic monitoring, and integrated cardiovascular risk assessment for comprehensive patient management.",
    keyFeatures: [
      "ECG auto-interpretation integration",
      "Cardiac catheterization reporting",
      "Heart failure staging automation",
      "Medication interaction checking",
      "Risk stratification calculators",
      "Device interrogation summaries"
    ],
    commonProcedures: [
      "Echocardiograms",
      "Stress Testing",
      "Cardiac Catheterization",
      "Electrophysiology Studies",
      "Pacemaker Implantation",
      "Ablation Procedures"
    ],
    icd10Codes: [
      { code: "I25.10", description: "Atherosclerotic heart disease" },
      { code: "I50.9", description: "Heart failure, unspecified" },
      { code: "I48.91", description: "Atrial fibrillation" },
      { code: "I10", description: "Essential hypertension" }
    ]
  },
  {
    name: "Dermatology", 
    hasNoteExample: true,
    description: "Comprehensive skin condition documentation with lesion mapping, dermoscopy integration, and automated staging for melanoma and other skin cancers.",
    keyFeatures: [
      "Lesion tracking and mapping",
      "Dermoscopy image integration",
      "Skin cancer staging automation",
      "Biopsy result correlation",
      "Treatment response monitoring",
      "Cosmetic procedure documentation"
    ],
    commonProcedures: [
      "Skin Biopsies",
      "Lesion Excisions",
      "Cryotherapy",
      "Photodynamic Therapy",
      "Mohs Surgery",
      "Laser Treatments"
    ],
    icd10Codes: [
      { code: "C43.9", description: "Malignant melanoma of skin, unspecified" },
      { code: "L40.9", description: "Psoriasis, unspecified" },
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "C44.92", description: "Basal cell carcinoma of skin" }
    ]
  },
  {
    name: "Endocrinology",
    hasNoteExample: false,
    description: "Hormone disorder management with automated glucose tracking, thyroid function analysis, and diabetic complication screening for optimal endocrine care.",
    keyFeatures: [
      "Glucose pattern analysis",
      "Thyroid function interpretation",
      "Insulin dosing calculations",
      "Bone density correlation",
      "Hormone replacement tracking",
      "Diabetic complication screening"
    ],
    commonProcedures: [
      "Glucose Tolerance Tests",
      "Thyroid Biopsies",
      "Insulin Pump Management",
      "Continuous Glucose Monitoring",
      "Bone Density Scans",
      "Hormone Stimulation Tests"
    ],
    icd10Codes: [
      { code: "E11.9", description: "Type 2 diabetes mellitus" },
      { code: "E03.9", description: "Hypothyroidism, unspecified" },
      { code: "E78.5", description: "Hyperlipidemia, unspecified" },
      { code: "E28.2", description: "Polycystic ovarian syndrome" }
    ]
  },
  {
    name: "Family Medicine",
    hasNoteExample: true,
    description: "Comprehensive primary care documentation covering preventive services, chronic disease management, and family health tracking for continuity of care.",
    keyFeatures: [
      "Preventive care scheduling",
      "Chronic disease monitoring",
      "Family history analysis",
      "Medication reconciliation",
      "Screening reminder integration",
      "Care coordination summaries"
    ],
    commonProcedures: [
      "Annual Physical Exams",
      "Immunizations",
      "Minor Procedures",
      "Screening Tests",
      "Joint Injections",
      "Skin Tag Removals"
    ],
    icd10Codes: [
      { code: "Z00.00", description: "Encounter for general adult medical examination" },
      { code: "I10", description: "Essential hypertension" },
      { code: "E11.9", description: "Type 2 diabetes mellitus" },
      { code: "M79.3", description: "Panniculitis, unspecified" }
    ]
  },
  {
    name: "Gastroenterology",
    hasNoteExample: true,
    description: "GI-focused documentation with endoscopy reporting, inflammatory bowel disease tracking, and liver function monitoring for comprehensive digestive health care.",
    keyFeatures: [
      "Endoscopy procedure automation",
      "IBD activity scoring",
      "Liver function trending",
      "Colonoscopy interval tracking",
      "Medication compliance monitoring", 
      "Nutritional assessment integration"
    ],
    commonProcedures: [
      "Upper Endoscopy",
      "Colonoscopy",
      "ERCP",
      "Liver Biopsy",
      "Capsule Endoscopy",
      "Sigmoidoscopy"
    ],
    icd10Codes: [
      { code: "K21.9", description: "Gastro-esophageal reflux disease" },
      { code: "K50.90", description: "Crohn's disease, unspecified" },
      { code: "K51.90", description: "Ulcerative colitis, unspecified" },
      { code: "K92.2", description: "Gastrointestinal hemorrhage" }
    ]
  },
  {
    name: "Internal Medicine",
    hasNoteExample: false,
    description: "Adult internal medicine with complex multi-system disease management, medication optimization, and comprehensive care coordination for hospitalized patients.",
    keyFeatures: [
      "Multi-system assessment",
      "Complex medication management",
      "Discharge planning automation",
      "Specialist referral coordination",
      "Hospital course summaries",
      "Transition of care documentation"
    ],
    commonProcedures: [
      "Central Line Placement",
      "Lumbar Puncture",
      "Thoracentesis",
      "Paracentesis",
      "Arterial Blood Gas",
      "Bronchoscopy"
    ],
    icd10Codes: [
      { code: "J44.1", description: "Chronic obstructive pulmonary disease" },
      { code: "N18.6", description: "End stage renal disease" },
      { code: "I50.9", description: "Heart failure, unspecified" },
      { code: "R50.9", description: "Fever, unspecified" }
    ]
  },
  {
    name: "Neurology",
    hasNoteExample: false,
    description: "Neurological condition management with seizure tracking, cognitive assessment integration, and automated neuroimaging correlation for precise diagnosis.",
    keyFeatures: [
      "Seizure diary integration",
      "Neuroimaging correlation",
      "Cognitive assessment tracking",
      "Medication level monitoring",
      "Stroke scale documentation",
      "Movement disorder rating"
    ],
    commonProcedures: [
      "EEG Interpretation",
      "EMG/NCV Studies", 
      "Lumbar Puncture",
      "Deep Brain Stimulation",
      "Botox Injections",
      "Nerve Blocks"
    ],
    icd10Codes: [
      { code: "G40.909", description: "Epilepsy, unspecified" },
      { code: "G35", description: "Multiple sclerosis" },
      { code: "G20", description: "Parkinson's disease" },
      { code: "I63.9", description: "Cerebral infarction, unspecified" }
    ]
  },
  {
    name: "Obstetrics & Gynecology",
    hasNoteExample: false,
    description: "Women's health documentation with pregnancy tracking, menstrual cycle analysis, and automated screening schedules for comprehensive reproductive care.",
    keyFeatures: [
      "Pregnancy milestone tracking",
      "Contraceptive counseling templates",
      "Pap smear scheduling",
      "Menstrual cycle analysis",
      "High-risk pregnancy monitoring",
      "Surgical procedure documentation"
    ],
    commonProcedures: [
      "Pap Smears",
      "Colposcopy",
      "Hysteroscopy",
      "Laparoscopy",
      "C-Sections",
      "IUD Insertion"
    ],
    icd10Codes: [
      { code: "Z34.90", description: "Encounter for supervision of normal pregnancy" },
      { code: "N92.0", description: "Excessive and frequent menstruation" },
      { code: "N80.9", description: "Endometriosis, unspecified" },
      { code: "O80", description: "Encounter for full-term uncomplicated delivery" }
    ]
  },
  {
    name: "Oncology",
    hasNoteExample: false,
    description: "Cancer care documentation with treatment protocol tracking, side effect monitoring, and integrated tumor staging for comprehensive oncology management.",
    keyFeatures: [
      "Chemotherapy protocol automation",
      "Tumor staging documentation",
      "Side effect assessment",
      "Performance status tracking",
      "Clinical trial eligibility",
      "Survivorship care planning"
    ],
    commonProcedures: [
      "Bone Marrow Biopsy",
      "Port Placement",
      "Chemotherapy Administration",
      "Tumor Biopsies",
      "Radiation Planning",
      "Immunotherapy Infusions"
    ],
    icd10Codes: [
      { code: "C78.00", description: "Secondary malignant neoplasm" },
      { code: "C50.911", description: "Malignant neoplasm of breast" },
      { code: "C34.10", description: "Malignant neoplasm of lung" },
      { code: "Z51.11", description: "Encounter for antineoplastic chemotherapy" }
    ]
  },
  {
    name: "Orthopedic Surgery",
    hasNoteExample: false,
    description: "Musculoskeletal documentation with surgical planning templates, post-operative tracking, and rehabilitation milestone monitoring for optimal outcomes.",
    keyFeatures: [
      "Surgical template automation",
      "Post-operative monitoring",
      "Range of motion tracking",
      "Implant documentation",
      "Physical therapy coordination",
      "Pain scale integration"
    ],
    commonProcedures: [
      "Joint Replacements",
      "Arthroscopy",
      "Fracture Repair",
      "Spinal Fusion",
      "Tendon Repair",
      "Ligament Reconstruction"
    ],
    icd10Codes: [
      { code: "M25.511", description: "Pain in right shoulder" },
      { code: "S72.001A", description: "Fracture of unspecified part of neck of right femur" },
      { code: "M17.11", description: "Unilateral primary osteoarthritis, right knee" },
      { code: "M54.5", description: "Low back pain" }
    ]
  },
  {
    name: "Pediatrics",
    hasNoteExample: false,
    description: "Child-focused healthcare documentation with growth tracking, developmental milestone monitoring, and age-appropriate care protocols for pediatric patients.",
    keyFeatures: [
      "Growth chart automation",
      "Vaccination scheduling",
      "Developmental milestone tracking",
      "Age-appropriate dosing",
      "School health coordination",
      "Family-centered care planning"
    ],
    commonProcedures: [
      "Well-Child Visits",
      "Immunizations",
      "Developmental Screening",
      "Hearing Tests",
      "Vision Screening",
      "Sports Physicals"
    ],
    icd10Codes: [
      { code: "Z00.121", description: "Encounter for routine child health examination" },
      { code: "J06.9", description: "Acute upper respiratory infection" },
      { code: "K59.00", description: "Constipation, unspecified" },
      { code: "R50.9", description: "Fever, unspecified" }
    ]
  },
  {
    name: "Psychiatry",
    hasNoteExample: false,
    description: "Mental health documentation with mood tracking, medication monitoring, and standardized assessment scales for comprehensive psychiatric care.",
    keyFeatures: [
      "Mental status exam templates",
      "Medication adherence tracking",
      "Suicide risk assessment",
      "Therapy session summaries",
      "Crisis intervention protocols",
      "Substance abuse screening"
    ],
    commonProcedures: [
      "Psychiatric Evaluations",
      "Medication Management",
      "Psychotherapy Sessions",
      "Crisis Interventions",
      "Group Therapy",
      "ECT Procedures"
    ],
    icd10Codes: [
      { code: "F32.9", description: "Major depressive disorder, single episode" },
      { code: "F41.1", description: "Generalized anxiety disorder" },
      { code: "F31.9", description: "Bipolar disorder, unspecified" },
      { code: "F20.9", description: "Schizophrenia, unspecified" }
    ]
  },
  {
    name: "Pulmonology",
    hasNoteExample: false,
    description: "Respiratory care documentation with pulmonary function tracking, sleep study integration, and ventilator management for comprehensive lung health.",
    keyFeatures: [
      "Pulmonary function trending",
      "Sleep study interpretation",
      "Ventilator weaning protocols",
      "Oxygen requirement tracking",
      "Bronchoscopy reporting",
      "Asthma action plan automation"
    ],
    commonProcedures: [
      "Bronchoscopy",
      "Pulmonary Function Tests",
      "Sleep Studies",
      "Thoracentesis",
      "Chest Tube Placement",
      "Pleural Biopsy"
    ],
    icd10Codes: [
      { code: "J44.1", description: "Chronic obstructive pulmonary disease" },
      { code: "J45.9", description: "Asthma, unspecified" },
      { code: "G47.33", description: "Obstructive sleep apnea" },
      { code: "J18.9", description: "Pneumonia, unspecified organism" }
    ]
  },
  {
    name: "Radiology",
    hasNoteExample: false,
    description: "Medical imaging documentation with AI-assisted interpretation, automated measurements, and integrated reporting for accurate diagnostic imaging.",
    keyFeatures: [
      "AI-assisted image analysis",
      "Automated measurements",
      "Comparison study integration",
      "Critical findings alerts",
      "Structured reporting templates",
      "PACS integration"
    ],
    commonProcedures: [
      "CT Scans",
      "MRI Studies",
      "X-rays",
      "Ultrasounds",
      "Nuclear Medicine",
      "Interventional Procedures"
    ],
    icd10Codes: [
      { code: "Z12.31", description: "Encounter for screening mammogram" },
      { code: "R93.1", description: "Abnormal findings on diagnostic imaging of heart" },
      { code: "R91.1", description: "Solitary pulmonary nodule" },
      { code: "Z51.0", description: "Encounter for radiotherapy" }
    ]
  },
  {
    name: "Urology",
    hasNoteExample: false,
    description: "Urological condition management with surgical procedure documentation, stone tracking, and prostate health monitoring for comprehensive urologic care.",
    keyFeatures: [
      "Surgical procedure automation",
      "Stone composition tracking",
      "Prostate screening protocols",
      "Incontinence assessment",
      "Cancer staging documentation",
      "Fertility evaluation templates"
    ],
    commonProcedures: [
      "Cystoscopy",
      "Prostatectomy",
      "Kidney Stone Removal",
      "Vasectomy",
      "Circumcision",
      "Bladder Biopsy"
    ],
    icd10Codes: [
      { code: "N20.0", description: "Calculus of kidney" },
      { code: "C61", description: "Malignant neoplasm of prostate" },
      { code: "N40.1", description: "Enlarged prostate with lower urinary tract symptoms" },
      { code: "N39.0", description: "Urinary tract infection, site not specified" }
    ]
  }
];
