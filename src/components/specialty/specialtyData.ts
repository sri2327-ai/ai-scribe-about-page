
interface SpecialtyContent {
  title: string;
  content: string;
}

export const specialtyData: Record<string, SpecialtyContent> = {
  allergy: {
    title: "Allergy & Immunology",
    content: "Documents immunotherapy plans, allergy testing results, asthma control levels, and autoimmune tracking, enhancing management of hypersensitivity and immune conditions."
  },
  cardiology: {
    title: "Cardiology",
    content: "Captures detailed data on EKG results, cardiac risk factors, heart failure assessments, pacemaker checks, echocardiograms, and stress test findings, ensuring precise cardiac documentation."
  },
  dermatology: {
    title: "Dermatology",
    content: "Focuses on skin cancer screenings, biopsies, lesion tracking, and chronic skin condition documentation, including psoriasis and eczema, supporting dermatologic care consistency."
  },
  emergency: {
    title: "Emergency Medicine",
    content: "Provides real-time support for trauma assessments, chest pain workups, neurological exams, and triage documentation. Includes support for procedures, discharge summaries, and time-sensitive care pathways."
  },
  endocrinology: {
    title: "Endocrinology",
    content: "Tracks diabetes metrics, thyroid hormone levels, pituitary and adrenal disorders, polycystic ovarian syndrome (PCOS), and osteoporosis documentation for optimized hormone management."
  },
  ent: {
    title: "ENT (Otolaryngology)",
    content: "Documents sinus and ear infections, hearing evaluations, sleep apnea management, CPAP therapy, and previous ENT surgeries to streamline otolaryngologic care."
  },
  functionalMedicine: {
    title: "Functional Medicine",
    content: "Enables personalized documentation of diet, lifestyle, microbiome health, genomics, toxins, and root cause assessments. Supports longitudinal tracking of patient progress through non-conventional and integrative health approaches."
  },
  gastroenterology: {
    title: "Gastroenterology",
    content: "Supports documentation for endoscopies, colonoscopies, liver disease, inflammatory bowel diseases, celiac disease, motility disorders, and GI symptom scoring systems like the Bristol Stool Chart."
  },
  geriatrics: {
    title: "Geriatrics",
    content: "Captures memory loss tracking, fall risk assessments, cognitive screenings, polypharmacy management, and chronic condition monitoring, supporting whole-person elderly care."
  },
  gynecology: {
    title: "Gynecology",
    content: "Supports menstrual cycle tracking, pelvic pain documentation, PCOS and endometriosis care, hormonal management, contraception, fertility assessments, and menopause therapy."
  },
  hospitalMedicine: {
    title: "Hospital Medicine",
    content: "Facilitates smooth handoffs, daily rounding notes, discharge planning, medication reconciliation, and specialty consult tracking to support inpatient workflows and continuity of care."
  },
  infectiousDisease: {
    title: "Infectious Disease",
    content: "Documents pathogen tracking, infection source identification, antimicrobial stewardship, isolation protocols, immunocompromised patient care, and post-infection follow-ups."
  },
  internalMedicine: {
    title: "Internal Medicine",
    content: "Captures comprehensive chronic disease management, preventive screening documentation, annual physicals, and multi-system complaints, providing foundational primary care support."
  },
  nephrology: {
    title: "Nephrology",
    content: "Enables detailed documentation of kidney function labs, dialysis modalities (hemodialysis/peritoneal), electrolyte management, transplant follow-up, and chronic kidney disease progression."
  },
  neurology: {
    title: "Neurology",
    content: "Documents neurological exams, seizure logs, multiple sclerosis progress, stroke care plans, cognitive impairments, and headache/migraine assessments with high detail and accuracy."
  },
  oncology: {
    title: "Oncology",
    content: "Supports TNM staging, treatment response tracking, chemotherapy cycles, clinical trial enrollment, survivorship plans, and end-of-life care coordination."
  },
  ophthalmology: {
    title: "Ophthalmology",
    content: "Captures visual acuity, intraocular pressure, OCT imaging, diabetic retinopathy staging, cataract surgery documentation, and in-office procedures such as laser or injection treatments."
  },
  orthopaedics: {
    title: "Orthopaedics",
    content: "Supports documentation for fractures, joint assessments, surgical planning, post-op recovery, arthritis evaluations, and physical therapy integration."
  },
  painManagement: {
    title: "Pain Management",
    content: "Documents interventional procedures, opioid contracts, pain scales, functional assessments, and multidisciplinary care plans to support chronic and acute pain treatment strategies."
  },
  pediatrics: {
    title: "Pediatrics",
    content: "Tracks developmental milestones, immunization records, pediatric nutrition, behavioral assessments, and over 20 subspecialties such as pediatric cardiology, endocrinology, and pulmonology."
  },
  podiatry: {
    title: "Podiatry",
    content: "Assists in documenting diabetic foot ulcers, gait analysis, bunions, plantar fasciitis, surgeries, and orthotic management, improving podiatric care quality."
  },
  psychiatry: {
    title: "Psychiatry",
    content: "Supports diagnostic interviews, mental health screenings (PHQ-9, GAD-7), medication management, psychotherapy progress notes, and crisis intervention documentation."
  },
  pulmonology: {
    title: "Pulmonology",
    content: "Captures spirometry, asthma action plans, sleep study interpretations, ventilator settings, COPD management, and interstitial lung disease tracking."
  },
  rheumatology: {
    title: "Rheumatology",
    content: "Documents joint swelling patterns, autoantibody profiles, disease activity scores (e.g., DAS28), and medication responses for autoimmune and inflammatory conditions."
  },
  sportsMedicine: {
    title: "Sports Medicine",
    content: "Covers sports injury assessments, return-to-play protocols, physical therapy referrals, musculoskeletal imaging reviews, and performance tracking."
  },
  urgentCare: {
    title: "Urgent Care",
    content: "Supports rapid charting for acute illnesses and injuries, work/school notes, medication refills, laceration repairs, and documentation for workers' compensation and minor procedures."
  },
  urology: {
    title: "Urology",
    content: "Documents urinary symptoms, BPH management, prostate screenings, bladder diaries, urodynamic testing, and care for kidney stones and genitourinary cancers."
  },
  other: {
    title: "Other Specialties",
    content: "S10.AI works with ANY medical specialty! Our platform adapts to your specific needs, providing customized documentation solutions for every healthcare specialty. Contact us to learn how we can support your specific practice area with tailored AI assistance."
  }
};
