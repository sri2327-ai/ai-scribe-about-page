
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Ambulance, 
  Baby, 
  Bone, 
  Ear, // Changed from EarListen
  Eye, 
  Flask, // Changed from FlaskVial
  Heart, // Changed from HandHoldingMedical for Rheumatology
  Hospital, 
  Lungs as LungsIcon, // Renamed to avoid conflict
  Microscope, 
  User, // Changed from PersonCane for Geriatrics
  Footprints, // Changed from ShoePrints
  Sun, 
  Stethoscope, // Changed from UserNurse for Hospital Medicine
  Female // Changed from Venus for Gynecology
} from 'lucide-react';

const specialties = [
  {
    name: "Cardiology",
    icon: Heart,
    text: "Captures detailed data on EKG results, cardiac risk factors, pacemaker checks, and more, providing precise documentation for cardiac assessments.",
  },
  {
    name: "Emergency Medicine",
    icon: Hospital,
    text: "Supports nutritional assessments, bowel movement grading, and GI scoring systems like the Bristol Stool Chart, ensuring thorough documentation for gastrointestinal care.",
  },
  {
    name: "Oncology",
    icon: Microscope,
    text: "Documents TNM staging, clinical trial assessments, advanced care planning, and more to enhance oncology care coordination and reporting.",
  },
  {
    name: "Urology",
    icon: Flask,
    text: "Efficiently captures urological symptoms, imaging reports, and cancer management details, from prostate biopsies to bladder cancer care.",
  },
  {
    name: "Psychiatry",
    icon: Brain,
    text: "Supports mental health assessments, medication management, and therapy documentation, including long visits and detailed patient history tracking.",
  },
  {
    name: "Pediatrics",
    icon: Baby,
    text: "Tracks growth milestones, pediatric health assessments, and nutrition history, providing documentation support for over 20 pediatric subspecialties.",
  },
  {
    name: "Hospital Medicine",
    icon: Stethoscope,
    text: "Facilitates seamless rounding and handoff workflows, daily progress notes, and specialty consults to ensure comprehensive patient care.",
  },
  {
    name: "Geriatrics",
    icon: User,
    text: "Captures detailed documentation for memory conditions, cognitive assessments, and chronic disease management, providing support for elderly care.",
  },
  {
    name: "Gynecology",
    icon: Female,
    text: "From menstrual cycle tracking to hormone replacement therapy, our AI ensures precise documentation for women's health throughout different life stages.",
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    text: "Provides detailed documentation for visual acuity, OCT imaging, and other ophthalmic tests, supporting in-office procedures like laser treatments.",
  },
  {
    name: "Pulmonology",
    icon: LungsIcon,
    text: "Captures comprehensive data for pulmonary function tests, sleep studies, and chronic lung disease management, ensuring efficient respiratory care.",
  },
  {
    name: "Rheumatology",
    icon: Heart,
    text: "Documents joint involvement, treatment response, and family histories of rheumatologic conditions for precise care.",
  },
  {
    name: "Urgent Care",
    icon: Ambulance,
    text: "Provides real-time documentation for acute conditions, work note requests, and workers' compensation, improving patient care in urgent settings.",
  },
  {
    name: "ENT",
    icon: Ear,
    text: "Documents sleep apnea, CPAP therapy, and previous surgical interventions, supporting comprehensive otolaryngologic care.",
  },
  {
    name: "Dermatology",
    icon: Sun,
    text: "Focuses on skin cancer screenings, biopsies, and chronic condition management, with precise and consistent documentation.",
  },
  {
    name: "Orthopaedics",
    icon: Bone,
    text: "Supports detailed documentation for musculoskeletal conditions, fractures, joint replacements, and surgical procedures, ensuring accuracy in the management of bone, joint, and soft tissue disorders.",
  },
  {
    name: "Podiatrists",
    icon: Footprints,
    text: "Assists podiatrists in capturing detailed foot and ankle assessments, surgical histories, and treatment plans, ensuring precise documentation for all podiatric care needs.",
  }
];

const SpecialtiesGrid = () => {
  return (
    <section className="witSp">
      <div className={styles.specialties}>
        <div className="flex flex-col items-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#143151] max-w-4xl">
            The S10.AI Advantage: Custom AI for Every Medical Specialty and More
          </h2>

          <Separator className="w-1/5 bg-black h-1" />

          <p className={`${styles.subtext} text-lg text-gray-700 max-w-4xl text-center`}>
            Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
          </p>
        </div>

        <div className={styles.grid}>
          {specialties.map((specialty, i) => (
            <div className={`${styles.card} ${i % 2 === 0 ? '' : styles.cardAlt}`} key={i}>
              <div className={styles.circleIcon}>
                {React.createElement(specialty.icon, { size: 24 })}
              </div>
              <h6 className={`${styles.cardTitle} text-xl font-semibold`}>
                {specialty.name}
              </h6>
              <p className={styles.cardText}>
                {specialty.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesGrid;
