import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Typography, Box } from '@mui/material';
import {
  faBone, faUserMd, faBrain, faChild, faHeartPulse, faMicroscope,
  faLungs, faVenus, faStethoscope, faEye, faUserNurse,
  faDroplet, faPersonCane, faVial, faHospital, faHandHoldingMedical,
  faAmbulance, faEarListen, faFlaskVial, faSun, faAppleAlt,
  faDog, faHandsHelping, faShoePrints, faBaby,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const specialties = [
  {
    name: "Cardiology",icon: faHeartPulse,
    text: "Captures detailed data on EKG results, cardiac risk factors, pacemaker checks, and more, providing precise documentation for cardiac assessments.",
  },
  {
    name: "Emergency Medicine",icon: faHospital,
    text: "Supports nutritional assessments, bowel movement grading, and GI scoring systems like the Bristol Stool Chart, ensuring thorough documentation for gastrointestinal care.",
  },
  {
    name: "Oncology",icon: faMicroscope,
    text: "Documents TNM staging, clinical trial assessments, advanced care planning, and more to enhance oncology care coordination and reporting.",
  },
  {
    name: "Urology",icon:faUserMd,
    text: "Efficiently captures urological symptoms, imaging reports, and cancer management details, from prostate biopsies to bladder cancer care.",
  },
  {
    name: "Psychiatry",icon: faBrain ,
    text: "Supports mental health assessments, medication management, and therapy documentation, including long visits and detailed patient history tracking.",
  },
  {
    name: "Pediatrics",icon: faChild,
    text: "Tracks growth milestones, pediatric health assessments, and nutrition history, providing documentation support for over 20 pediatric subspecialties.",
  },
  {
    name: "Hospital Medicine",icon: faUserNurse,
    text: "Facilitates seamless rounding and handoff workflows, daily progress notes, and specialty consults to ensure comprehensive patient care.",
  },
  {
    name: "Geriatrics",icon: faPersonCane,
    text: "Captures detailed documentation for memory conditions, cognitive assessments, and chronic disease management, providing support for elderly care.",
  },
  {
    name: "Gynecology",icon: faVenus,
    text: "From menstrual cycle tracking to hormone replacement therapy, our AI ensures precise documentation for women's health throughout different life stages.",
  },
  {
    name: "Hematology",icon: faDroplet,
    text: "Documents lab and pathology results, transfusion histories, and genetic assessments for hereditary hematologic conditions.",
  },


  {
    name: "Hepatology",icon: faVial,
    text: "Supports liver disease assessments, transplant evaluations, and post-transplant care documentation with comprehensive medical details.",
  },
  {
    name: "Internal Medicine",icon: faStethoscope,
    text: "Helps document complex chronic conditions, Medicare AWVs, problem-based charting, and referrals to specialists.",
  },
  {
    name: "Nephrology",icon: faDroplet,
    text: "Accurately captures dialysis treatments, electrolyte imbalances, kidney transplant evaluations, and related complications.",
  },
  {
    name: "Neurology",icon: faBrain,
    text: "Supports neuro exams, seizure event timelines, stroke symptoms, and EEGiconEMG interpretations, documenting every neurological detail.",
  },
  {
    name: "Obstetrics",icon: faBaby,
    text: "Offers thorough prenatal, labor, and postpartum care documentation, especially for high-risk pregnancies and newborn support.",
  },
  {
    name: "Ophthalmology",icon: faEye,
    text: "Provides detailed documentation for visual acuity, OCT imaging, and other ophthalmic tests, supporting in-office procedures like laser treatments.",
  },
  {
    name: "Pulmonology",icon: faLungs,
    text: "Captures comprehensive data for pulmonary function tests, sleep studies, and chronic lung disease management, ensuring efficient respiratory care.",
  },
  {
    name: "Rheumatology",icon: faHandHoldingMedical,
    text: "Documents joint involvement, treatment response, and family histories of rheumatologic conditions for precise care.",
  },
  {
    name: "Urgent Care",icon: faAmbulance,
    text: "Provides real-time documentation for acute conditions, work note requests, and workers' compensation, improving patient care in urgent settings.",
  },

  {
    name: "ENT",icon: faEarListen,
    text: "Documents sleep apnea, CPAP therapy, and previous surgical interventions, supporting comprehensive otolaryngologic care.",
  },
  {
    name: "Endocrinology",icon: faFlaskVial,
    text: "Tracks hormone levels, insulin therapy, and endocrine conditions such as diabetes and thyroid diseases, ensuring accurate documentation.",
  },
  {
    name: "Dermatology",icon: faSun,
    text: "Focuses on skin cancer screenings, biopsies, and chronic condition management, with precise and consistent documentation.",
  },
  {
    name: "Orthopaedics",icon: faBone,
    text: "Supports detailed documentation for musculoskeletal conditions, fractures, joint replacements, and surgical procedures, ensuring accuracy in the management of bone, joint, and soft tissue disorders.",
  },
  {
    name: "Psychologists",icon: faBrain,
    text: "Helps psychologists track and document patient progress, treatment responses, and mental health assessments, supporting the needs of therapy and counseling services.",
  },
  {
    name: "Dietitians",icon: faAppleAlt,
    text: "Assists dietitians with nutritional assessments, meal plans, and patient health tracking, ensuring precision in dietary care and management.",
  },
  {
    name: "Veterinarians",icon: faDog,
    text: "Custom AI solutions to streamline documentation for animal health, diagnoses, treatments, and procedures, making it easier to manage veterinary care.",
  },
  {
    name: "Nurse Practitioners",icon: faUserNurse,
    text: "Optimizes nursing workflows with AI support for patient assessments, care plans, and clinical decision-making, ensuring accurate documentation and time-saving benefits.",
  },
  {
    name: "Allied Health Professionals",icon: faHandsHelping,
    text: "Provides AI-driven documentation solutions for physical therapists, occupational therapists, and more, enhancing the care provided to patients across different rehabilitation fields.",
  },
  {
    name: "Podiatrists",icon: faShoePrints,
    text: "Assists podiatrists in capturing detailed foot and ankle assessments, surgical histories, and treatment plans, ensuring precise documentation for all podiatric care needs.",
  },
];


// export default function SpecialtiesGrid() {
 

//   return (
//     <section className="witSp">
//       <Box className={styles.specialties}>
//         <Typography variant='h4'>
//           The S10.AI Advantage: Custom AI for Every Medical Specialty and More
//         </Typography>
//         <p className={styles.subtext}>
//           Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
//         </p>
//         <Typography variant='h4'>Display Specialties</Typography>
//         <div className={styles.grid}>
//           {specialties.map((spcl, i) => (
//             <div className={`${styles.card} ${i % 2 === 0 ? '' : styles.cardAlt}`} key={i}>
               
//               <Typography variant='h5'>{spcl.name}</Typography>
//               <p>{spcl.text}</p>
//               <FontAwesomeIcon icon={spcl.icon} className={styles.icons} />

//             </div>
//           ))}
//         </div>
//       </Box>
//     </section>
//   );
// }


export default function SpecialtiesGrid() {
  return (
    <section className="witSp">
      <Box className={styles.specialties}>
        <Typography variant='h4'>
          The S10.AI Advantage: Custom AI for Every Medical Specialty and More
        </Typography>
        <p className={styles.subtext}>
          Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
        </p>
        <Typography variant='h4'>Display Specialties</Typography>
        <div className={styles.grid}>
          {specialties.map((spcl, i) => (
            <div className={`${styles.card} ${i % 2 === 0 ? '' : styles.cardAlt}`} key={i}>
            <div className={styles.circleIcon}>
              <FontAwesomeIcon icon={spcl.icon} />
            </div>
          
            <Typography variant='h6' className={styles.cardTitle}>
              {spcl.name}
            </Typography>
          
            <p className={styles.cardText}>
              {spcl.text}
            </p>
          </div>
          
          ))}
        </div>
      </Box>
    </section>
  );
}



