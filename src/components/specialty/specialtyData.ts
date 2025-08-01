import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface SpecialtyContent {
  title: string;
  content: string;
  detailedContent: {
    previousNotes: string;
    specialtyHPI: string;
    historySection: string;
    aiNotes: string;
    icdCodes: string;
  };
  icon: LucideIcon;
}

export const specialtyData: Record<string, SpecialtyContent> = {
  allergy: {
    title: "Allergy & Immunology",
    content: "Documents immunotherapy plans, allergy testing results, asthma control levels, and autoimmune tracking, enhancing management of hypersensitivity and immune conditions.",
    icon: Icons.Flower,
    detailedContent: {
      previousNotes: "Previous allergy test results and immunotherapy responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused allergy & immunology HPIs with relevant terminology for allergic reactions, immune responses, and environmental triggers.",
      historySection: "Comprehensive tracking of allergy history, immunotherapy protocols, and autoimmune conditions with detailed symptom progression.",
      aiNotes: "Generates complete allergy & immunology notes in minutes, including detailed allergen lists and reaction patterns.",
      icdCodes: "Accurately assigns allergy and immunology-specific ICD-10 codes, prioritizing primary allergic conditions.",
    }
  },
  cardiology: {
    title: "Cardiology",
    content: "Captures detailed data on EKG results, cardiac risk factors, heart failure assessments, pacemaker checks, echocardiograms, and stress test findings, ensuring precise cardiac documentation.",
    icon: Icons.Heart,
    detailedContent: {
      previousNotes: "Previous cardiac studies and treatment responses are intelligently integrated into current notes with contextual awareness.",
      specialtyHPI: "Creates concise, cardiology-specific HPIs using appropriate terminology and abbreviations for cardiac conditions.",
      historySection: "Summarizes relevant cardiac medical and surgical history, including chronic cardiac symptoms, family history, test results, and imaging studies.",
      aiNotes: "Transforms each patient conversation into a complete clinical note within minutes, saving cardiologists valuable time.",
      icdCodes: "Adds cardiology-specific ICD-10 codes, ordered by priority with conditions like hypertension listed first.",
    }
  },
  dermatology: {
    title: "Dermatology",
    content: "Focuses on skin cancer screenings, biopsies, lesion tracking, and chronic skin condition documentation, including psoriasis and eczema, supporting dermatologic care consistency.",
    icon: Icons.Scan,
    detailedContent: {
      previousNotes: "Previous dermatology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused dermatology HPIs with relevant terminology for skin conditions, biopsies, and chronic skin conditions.",
      historySection: "Comprehensive tracking of dermatology history, biopsies, and chronic skin conditions with detailed symptom progression.",
      aiNotes: "Generates complete dermatology notes in minutes, including detailed skin condition descriptions and treatment plans.",
      icdCodes: "Accurately assigns dermatology-specific ICD-10 codes, prioritizing primary skin conditions.",
    }
  },
  dentistry: {
    title: "Dentistry",
    content: "Comprehensive documentation for oral examinations, dental procedures, periodontal assessments, orthodontic treatment plans, oral surgery, and preventive care protocols, ensuring thorough dental care records.",
    icon: Icons.Smile,
    detailedContent: {
      previousNotes: "Previous dental records, X-rays, and treatment histories are automatically integrated with current examination findings and treatment plans.",
      specialtyHPI: "Creates focused dental HPIs with relevant terminology for oral health complaints, dental pain, periodontal issues, and orthodontic concerns.",
      historySection: "Comprehensive tracking of dental history, previous procedures, oral hygiene habits, and dental family history with detailed progression notes.",
      aiNotes: "Generates complete dental notes in minutes, including detailed oral examination findings, treatment plans, and patient education documentation.",
      icdCodes: "Accurately assigns dentistry-specific ICD-10 codes, prioritizing primary oral health conditions and dental procedures.",
    }
  },
  emergency: {
    title: "Emergency Medicine",
    content: "Provides real-time support for trauma assessments, chest pain workups, neurological exams, and triage documentation. Includes support for procedures, discharge summaries, and time-sensitive care pathways.",
    icon: Icons.AlertTriangle,
    detailedContent: {
      previousNotes: "Previous emergency medical test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused emergency medicine HPIs with relevant terminology for trauma, chest pain, neurological exams, and triage.",
      historySection: "Comprehensive tracking of emergency medical history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete emergency medicine notes in minutes, including detailed emergency medical information and treatment plans.",
      icdCodes: "Accurately assigns emergency medicine-specific ICD-10 codes, prioritizing primary emergency medical conditions.",
    }
  },
  endocrinology: {
    title: "Endocrinology",
    content: "Tracks diabetes metrics, thyroid hormone levels, pituitary and adrenal disorders, polycystic ovarian syndrome (PCOS), and osteoporosis documentation for optimized hormone management.",
    icon: Icons.Activity,
    detailedContent: {
      previousNotes: "Previous endocrinology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused endocrinology HPIs with relevant terminology for diabetes, thyroid hormone levels, pituitary and adrenal disorders, PCOS, and osteoporosis.",
      historySection: "Comprehensive tracking of endocrinology history, test results, and treatment plans with detailed symptom progression.",
      aiNotes: "Generates complete endocrinology notes in minutes, including detailed endocrinology information and treatment plans.",
      icdCodes: "Accurately assigns endocrinology-specific ICD-10 codes, prioritizing primary endocrinology conditions.",
    }
  },
  ent: {
    title: "ENT (Otolaryngology)",
    content: "Documents sinus and ear infections, hearing evaluations, sleep apnea management, CPAP therapy, and previous ENT surgeries to streamline otolaryngologic care.",
    icon: Icons.Ear,
    detailedContent: {
      previousNotes: "Previous ENT test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused ENT HPIs with relevant terminology for sinus and ear infections, hearing evaluations, sleep apnea management, CPAP therapy, and previous ENT surgeries.",
      historySection: "Comprehensive tracking of ENT history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete ENT notes in minutes, including detailed ENT information and treatment plans.",
      icdCodes: "Accurately assigns ENT-specific ICD-10 codes, prioritizing primary ENT conditions.",
    }
  },
  functionalMedicine: {
    title: "Functional Medicine",
    content: "Enables personalized documentation of diet, lifestyle, microbiome health, genomics, toxins, and root cause assessments. Supports longitudinal tracking of patient progress through non-conventional and integrative health approaches.",
    icon: Icons.Lightbulb,
    detailedContent: {
      previousNotes: "Previous functional medicine test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused functional medicine HPIs with relevant terminology for diet, lifestyle, microbiome health, genomics, toxins, and root cause assessments.",
      historySection: "Comprehensive tracking of functional medicine history, test results, and treatment plans with detailed symptom progression.",
      aiNotes: "Generates complete functional medicine notes in minutes, including detailed functional medicine information and treatment plans.",
      icdCodes: "Accurately assigns functional medicine-specific ICD-10 codes, prioritizing primary functional medicine conditions.",
    }
  },
  gastroenterology: {
    title: "Gastroenterology",
    content: "Supports documentation for endoscopies, colonoscopies, liver disease, inflammatory bowel diseases, celiac disease, motility disorders, and GI symptom scoring systems like the Bristol Stool Chart.",
    icon: Icons.Scissors,
    detailedContent: {
      previousNotes: "Previous gastroenterology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused gastroenterology HPIs with relevant terminology for endoscopies, colonoscopies, liver disease, inflammatory bowel diseases, celiac disease, motility disorders, and GI symptom scoring systems.",
      historySection: "Comprehensive tracking of gastroenterology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete gastroenterology notes in minutes, including detailed gastroenterology information and treatment plans.",
      icdCodes: "Accurately assigns gastroenterology-specific ICD-10 codes, prioritizing primary gastroenterology conditions.",
    }
  },
  geriatrics: {
    title: "Geriatrics",
    content: "Captures memory loss tracking, fall risk assessments, cognitive screenings, polypharmacy management, and chronic condition monitoring, supporting whole-person elderly care.",
    icon: Icons.Users,
    detailedContent: {
      previousNotes: "Previous geriatrics test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused geriatrics HPIs with relevant terminology for memory loss, fall risk assessments, cognitive screenings, polypharmacy management, and chronic condition monitoring.",
      historySection: "Comprehensive tracking of geriatrics history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete geriatrics notes in minutes, including detailed geriatrics information and treatment plans.",
      icdCodes: "Accurately assigns geriatrics-specific ICD-10 codes, prioritizing primary geriatrics conditions.",
    }
  },
  gynecology: {
    title: "Gynecology",
    content: "Supports menstrual cycle tracking, pelvic pain documentation, PCOS and endometriosis care, hormonal management, contraception, fertility assessments, and menopause therapy.",
    icon: Icons.Stethoscope,
    detailedContent: {
      previousNotes: "Previous gynecology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused gynecology HPIs with relevant terminology for menstrual cycle tracking, pelvic pain documentation, PCOS and endometriosis care, hormonal management, contraception, fertility assessments, and menopause therapy.",
      historySection: "Comprehensive tracking of gynecology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete gynecology notes in minutes, including detailed gynecology information and treatment plans.",
      icdCodes: "Accurately assigns gynecology-specific ICD-10 codes, prioritizing primary gynecology conditions.",
    }
  },
  hospitalMedicine: {
    title: "Hospital Medicine",
    content: "Facilitates smooth handoffs, daily rounding notes, discharge planning, medication reconciliation, and specialty consult tracking to support inpatient workflows and continuity of care.",
    icon: Icons.Building2,
    detailedContent: {
      previousNotes: "Previous hospital medicine test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused hospital medicine HPIs with relevant terminology for handoffs, daily rounding notes, discharge planning, medication reconciliation, and specialty consult tracking.",
      historySection: "Comprehensive tracking of hospital medicine history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete hospital medicine notes in minutes, including detailed hospital medicine information and treatment plans.",
      icdCodes: "Accurately assigns hospital medicine-specific ICD-10 codes, prioritizing primary hospital medicine conditions.",
    }
  },
  infectiousDisease: {
    title: "Infectious Disease",
    content: "Documents pathogen tracking, infection source identification, antimicrobial stewardship, isolation protocols, immunocompromised patient care, and post-infection follow-ups.",
    icon: Icons.BugOff,
    detailedContent: {
      previousNotes: "Previous infectious disease test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused infectious disease HPIs with relevant terminology for pathogen tracking, infection source identification, antimicrobial stewardship, isolation protocols, immunocompromised patient care, and post-infection follow-ups.",
      historySection: "Comprehensive tracking of infectious disease history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete infectious disease notes in minutes, including detailed infectious disease information and treatment plans.",
      icdCodes: "Accurately assigns infectious disease-specific ICD-10 codes, prioritizing primary infectious disease conditions.",
    }
  },
  internalMedicine: {
    title: "Internal Medicine",
    content: "Captures comprehensive chronic disease management, preventive screening documentation, annual physicals, and multi-system complaints, providing foundational primary care support.",
    icon: Icons.Clipboard,
    detailedContent: {
      previousNotes: "Previous internal medicine test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused internal medicine HPIs with relevant terminology for chronic disease management, preventive screening documentation, annual physicals, and multi-system complaints.",
      historySection: "Comprehensive tracking of internal medicine history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete internal medicine notes in minutes, including detailed internal medicine information and treatment plans.",
      icdCodes: "Accurately assigns internal medicine-specific ICD-10 codes, prioritizing primary internal medicine conditions.",
    }
  },
  nephrology: {
    title: "Nephrology",
    content: "Enables detailed documentation of kidney function labs, dialysis modalities (hemodialysis/peritoneal), electrolyte management, transplant follow-up, and chronic kidney disease progression.",
    icon: Icons.Droplets,
    detailedContent: {
      previousNotes: "Previous nephrology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused nephrology HPIs with relevant terminology for kidney function labs, dialysis modalities (hemodialysis/peritoneal), electrolyte management, transplant follow-up, and chronic kidney disease progression.",
      historySection: "Comprehensive tracking of nephrology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete nephrology notes in minutes, including detailed nephrology information and treatment plans.",
      icdCodes: "Accurately assigns nephrology-specific ICD-10 codes, prioritizing primary nephrology conditions.",
    }
  },
  neurology: {
    title: "Neurology",
    content: "Documents neurological exams, seizure logs, multiple sclerosis progress, stroke care plans, cognitive impairments, and headache/migraine assessments with high detail and accuracy.",
    icon: Icons.Brain,
    detailedContent: {
      previousNotes: "Previous neurology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused neurology HPIs with relevant terminology for neurological exams, seizure logs, multiple sclerosis progress, stroke care plans, cognitive impairments, and headache/migraine assessments.",
      historySection: "Comprehensive tracking of neurology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete neurology notes in minutes, including detailed neurology information and treatment plans.",
      icdCodes: "Accurately assigns neurology-specific ICD-10 codes, prioritizing primary neurology conditions.",
    }
  },
  oncology: {
    title: "Oncology",
    content: "Supports TNM staging, treatment response tracking, chemotherapy cycles, clinical trial enrollment, survivorship plans, and end-of-life care coordination.",
    icon: Icons.Activity,
    detailedContent: {
      previousNotes: "Previous oncology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused oncology HPIs with relevant terminology for TNM staging, treatment response tracking, chemotherapy cycles, clinical trial enrollment, survivorship plans, and end-of-life care coordination.",
      historySection: "Comprehensive tracking of oncology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete oncology notes in minutes, including detailed oncology information and treatment plans.",
      icdCodes: "Accurately assigns oncology-specific ICD-10 codes, prioritizing primary oncology conditions.",
    }
  },
  ophthalmology: {
    title: "Ophthalmology",
    content: "Captures visual acuity, intraocular pressure, OCT imaging, diabetic retinopathy staging, cataract surgery documentation, and in-office procedures such as laser or injection treatments.",
    icon: Icons.Eye,
    detailedContent: {
      previousNotes: "Previous ophthalmology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused ophthalmology HPIs with relevant terminology for visual acuity, intraocular pressure, OCT imaging, diabetic retinopathy staging, cataract surgery documentation, and in-office procedures.",
      historySection: "Comprehensive tracking of ophthalmology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete ophthalmology notes in minutes, including detailed ophthalmology information and treatment plans.",
      icdCodes: "Accurately assigns ophthalmology-specific ICD-10 codes, prioritizing primary ophthalmology conditions.",
    }
  },
  orthopaedics: {
    title: "Orthopaedics",
    content: "Supports documentation for fractures, joint assessments, surgical planning, post-op recovery, arthritis evaluations, and physical therapy integration.",
    icon: Icons.Bone,
    detailedContent: {
      previousNotes: "Previous orthopaedics test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused orthopaedics HPIs with relevant terminology for fractures, joint assessments, surgical planning, post-op recovery, arthritis evaluations, and physical therapy integration.",
      historySection: "Comprehensive tracking of orthopaedics history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete orthopaedics notes in minutes, including detailed orthopaedics information and treatment plans.",
      icdCodes: "Accurately assigns orthopaedics-specific ICD-10 codes, prioritizing primary orthopaedics conditions.",
    }
  },
  pathology: {
    title: "Pathology",
    content: "Supports laboratory result interpretation, histopathology reporting, cytology analysis, and molecular diagnostic documentation with enhanced diagnostic accuracy and standardized terminology.",
    icon: Icons.Microscope,
    detailedContent: {
      previousNotes: "Previous pathology test results and diagnostic reports are automatically pulled forward and contextualized based on current findings.",
      specialtyHPI: "Creates focused pathology HPIs with relevant terminology for laboratory results, histopathology findings, cytology analysis, and molecular diagnostics.",
      historySection: "Comprehensive tracking of pathology history, diagnostic tests, and specimen analysis with detailed result progression.",
      aiNotes: "Generates complete pathology notes in minutes, including detailed diagnostic findings and interpretations.",
      icdCodes: "Accurately assigns pathology-specific ICD-10 codes, prioritizing primary diagnostic conditions.",
    }
  },
  painManagement: {
    title: "Pain Management",
    content: "Documents interventional procedures, opioid contracts, pain scales, functional assessments, and multidisciplinary care plans to support chronic and acute pain treatment strategies.",
    icon: Icons.ThermometerSnowflake,
    detailedContent: {
      previousNotes: "Previous pain management test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused pain management HPIs with relevant terminology for interventional procedures, opioid contracts, pain scales, functional assessments, and multidisciplinary care plans.",
      historySection: "Comprehensive tracking of pain management history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete pain management notes in minutes, including detailed pain management information and treatment plans.",
      icdCodes: "Accurately assigns pain management-specific ICD-10 codes, prioritizing primary pain management conditions.",
    }
  },
  pediatrics: {
    title: "Pediatrics",
    content: "Tracks developmental milestones, immunization records, pediatric nutrition, behavioral assessments, and over 20 subspecialties such as pediatric cardiology, endocrinology, and pulmonology.",
    icon: Icons.Baby,
    detailedContent: {
      previousNotes: "Previous pediatric test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused pediatric HPIs with relevant terminology for developmental milestones, immunization records, pediatric nutrition, behavioral assessments, and over 20 subspecialties.",
      historySection: "Comprehensive tracking of pediatric history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete pediatric notes in minutes, including detailed pediatric information and treatment plans.",
      icdCodes: "Accurately assigns pediatric-specific ICD-10 codes, prioritizing primary pediatric conditions.",
    }
  },
  podiatry: {
    title: "Podiatry",
    content: "Assists in documenting diabetic foot ulcers, gait analysis, bunions, plantar fasciitis, surgeries, and orthotic management, improving podiatric care quality.",
    icon: Icons.Footprints,
    detailedContent: {
      previousNotes: "Previous podiatry test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused podiatry HPIs with relevant terminology for diabetic foot ulcers, gait analysis, bunions, plantar fasciitis, surgeries, and orthotic management.",
      historySection: "Comprehensive tracking of podiatry history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete podiatry notes in minutes, including detailed podiatry information and treatment plans.",
      icdCodes: "Accurately assigns podiatry-specific ICD-10 codes, prioritizing primary podiatry conditions.",
    }
  },
  primaryCare: {
    title: "Primary Care",
    content: "Comprehensive documentation for routine check-ups, preventive care, chronic disease management, health screenings, vaccinations, and coordination of care with specialists.",
    icon: Icons.Pill,
    detailedContent: {
      previousNotes: "Previous primary care visit notes and health maintenance records are automatically pulled forward and contextualized based on current health status.",
      specialtyHPI: "Creates focused primary care HPIs with relevant terminology for routine check-ups, preventive care, chronic disease management, and health screenings.",
      historySection: "Comprehensive tracking of primary care history, health maintenance, and chronic condition monitoring with detailed health progression.",
      aiNotes: "Generates complete primary care notes in minutes, including detailed health assessments and care plans.",
      icdCodes: "Accurately assigns primary care-specific ICD-10 codes, prioritizing primary health conditions and preventive care.",
    }
  },
  psychiatry: {
    title: "Psychiatry",
    content: "Supports diagnostic interviews, mental health screenings (PHQ-9, GAD-7), medication management, psychotherapy progress notes, and crisis intervention documentation.",
    icon: Icons.BrainCircuit,
    detailedContent: {
      previousNotes: "Previous psychiatry test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused psychiatry HPIs with relevant terminology for diagnostic interviews, mental health screenings (PHQ-9, GAD-7), medication management, psychotherapy progress notes, and crisis intervention documentation.",
      historySection: "Comprehensive tracking of psychiatry history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete psychiatry notes in minutes, including detailed psychiatry information and treatment plans.",
      icdCodes: "Accurately assigns psychiatry-specific ICD-10 codes, prioritizing primary psychiatry conditions.",
    }
  },
  pulmonology: {
    title: "Pulmonology",
    content: "Captures spirometry, asthma action plans, sleep study interpretations, ventilator settings, COPD management, and interstitial lung disease tracking.",
    icon: Icons.AirVent,
    detailedContent: {
      previousNotes: "Previous pulmonology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused pulmonology HPIs with relevant terminology for spirometry, asthma action plans, sleep study interpretations, ventilator settings, COPD management, and interstitial lung disease tracking.",
      historySection: "Comprehensive tracking of pulmonology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete pulmonology notes in minutes, including detailed pulmonology information and treatment plans.",
      icdCodes: "Accurately assigns pulmonology-specific ICD-10 codes, prioritizing primary pulmonology conditions.",
    }
  },
  rheumatology: {
    title: "Rheumatology",
    content: "Documents joint swelling patterns, autoantibody profiles, disease activity scores (e.g., DAS28), and medication responses for autoimmune and inflammatory conditions.",
    icon: Icons.Dumbbell,
    detailedContent: {
      previousNotes: "Previous rheumatology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused rheumatology HPIs with relevant terminology for joint swelling patterns, autoantibody profiles, disease activity scores (e.g., DAS28), and medication responses.",
      historySection: "Comprehensive tracking of rheumatology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete rheumatology notes in minutes, including detailed rheumatology information and treatment plans.",
      icdCodes: "Accurately assigns rheumatology-specific ICD-10 codes, prioritizing primary rheumatology conditions.",
    }
  },
  sportsMedicine: {
    title: "Sports Medicine",
    content: "Covers sports injury assessments, return-to-play protocols, physical therapy referrals, musculoskeletal imaging reviews, and performance tracking.",
    icon: Icons.Dumbbell,
    detailedContent: {
      previousNotes: "Previous sports medicine test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused sports medicine HPIs with relevant terminology for sports injury assessments, return-to-play protocols, physical therapy referrals, musculoskeletal imaging reviews, and performance tracking.",
      historySection: "Comprehensive tracking of sports medicine history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete sports medicine notes in minutes, including detailed sports medicine information and treatment plans.",
      icdCodes: "Accurately assigns sports medicine-specific ICD-10 codes, prioritizing primary sports medicine conditions.",
    }
  },
  urgentCare: {
    title: "Urgent Care",
    content: "Supports rapid charting for acute illnesses and injuries, work/school notes, medication refills, laceration repairs, and documentation for workers' compensation and minor procedures.",
    icon: Icons.Hourglass,
    detailedContent: {
      previousNotes: "Previous urgent care test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused urgent care HPIs with relevant terminology for acute illnesses and injuries, work/school notes, medication refills, laceration repairs, and documentation for workers' compensation and minor procedures.",
      historySection: "Comprehensive tracking of urgent care history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete urgent care notes in minutes, including detailed urgent care information and treatment plans.",
      icdCodes: "Accurately assigns urgent care-specific ICD-10 codes, prioritizing primary urgent care conditions.",
    }
  },
  urology: {
    title: "Urology",
    content: "Documents urinary symptoms, BPH management, prostate screenings, bladder diaries, urodynamic testing, and care for kidney stones and genitourinary cancers.",
    icon: Icons.FlaskConical,
    detailedContent: {
      previousNotes: "Previous urology test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused urology HPIs with relevant terminology for urinary symptoms, BPH management, prostate screenings, bladder diaries, urodynamic testing, and care for kidney stones and genitourinary cancers.",
      historySection: "Comprehensive tracking of urology history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete urology notes in minutes, including detailed urology information and treatment plans.",
      icdCodes: "Accurately assigns urology-specific ICD-10 codes, prioritizing primary urology conditions.",
    }
  },
  veterinary: {
    title: "Veterinary Medicine",
    content: "Comprehensive documentation for animal health examinations, surgical procedures, vaccination protocols, diagnostic imaging, behavioral assessments, and treatment plans for companion animals, livestock, and exotic species.",
    icon: Icons.Dog,
    detailedContent: {
      previousNotes: "Previous veterinary records, vaccination histories, and treatment responses are automatically integrated with current examination findings and species-specific health assessments.",
      specialtyHPI: "Creates focused veterinary HPIs with relevant terminology for animal health complaints, species-specific conditions, behavioral issues, and preventive care protocols.",
      historySection: "Comprehensive tracking of animal health history, previous treatments, vaccination records, and species-specific medical conditions with detailed progression notes.",
      aiNotes: "Generates complete veterinary notes in minutes, including detailed examination findings, treatment plans, and owner education documentation for all animal species.",
      icdCodes: "Accurately assigns veterinary-specific diagnostic codes, prioritizing primary animal health conditions and species-appropriate treatment protocols.",
    }
  },
  radiology: {
    title: "Radiology",
    content: "Advanced support for structured reporting, speech-to-text dictation, PACS/RIS integration, automated impression summarization, and modality-specific templates for USG, MRI, CT, and other imaging studies.",
    icon: Icons.Monitor,
    detailedContent: {
      previousNotes: "Intelligently retrieves prior imaging studies, automatically populates comparison sections, and contextualizes current findings against historical images.",
      specialtyHPI: "Creates modality-specific structured reports with standardized terminology using BI-RADS, LI-RADS, PI-RADS templates for consistency across all imaging types.",
      historySection: "Comprehensive tracking of patient imaging history with automatic correlation of findings across multiple studies and integration with PACS/RIS systems.",
      aiNotes: "Real-time voice-to-text dictation with automatic impression summarization and error detection to flag inconsistencies between findings and impressions.",
      icdCodes: "Suggests appropriate ICD-10 codes for radiological findings, ensuring proper documentation for CMS/ACR compliance and optimal reimbursement.",
    }
  },
  cardiacRehab: {
    title: "Cardiac Rehabilitation",
    content: "Specialized documentation for cardiac rehabilitation programs, exercise prescriptions, cardiovascular risk assessments, post-cardiac event monitoring, and progress tracking for patients in recovery.",
    icon: Icons.HeartPulse,
    detailedContent: {
      previousNotes: "Previous cardiac rehabilitation assessments and exercise responses are automatically pulled forward with tracking of vital signs and functional capacity improvements.",
      specialtyHPI: "Creates focused cardiac rehabilitation HPIs with relevant terminology for post-cardiac event recovery, exercise tolerance, and cardiovascular risk factors.",
      historySection: "Comprehensive tracking of cardiac events, interventions, exercise prescriptions, and objective measurements of cardiovascular fitness over time.",
      aiNotes: "Generates complete cardiac rehabilitation notes in minutes, including detailed exercise prescriptions and progress reports toward rehabilitation goals.",
      icdCodes: "Accurately assigns cardiac rehabilitation-specific ICD-10 codes, prioritizing primary cardiac conditions and rehabilitation status indicators.",
    }
  },
  other: {
    title: "Other Specialties",
    content: "S10.AI works with ANY medical specialty! Our platform adapts to your specific needs, providing customized documentation solutions for every healthcare specialty. Contact us to learn how we can support your specific practice area with tailored AI assistance.",
    icon: Icons.CopyPlus,
    detailedContent: {
      previousNotes: "Previous other specialty test results and treatment responses are automatically pulled forward and contextualized based on current symptoms.",
      specialtyHPI: "Creates focused other specialty HPIs with relevant terminology for any medical specialty.",
      historySection: "Comprehensive tracking of other specialty history, test results, and procedures with detailed symptom progression.",
      aiNotes: "Generates complete other specialty notes in minutes, including detailed other specialty information and treatment plans.",
      icdCodes: "Accurately assigns other specialty-specific ICD-10 codes, prioritizing primary other specialty conditions.",
    }
  }
};
