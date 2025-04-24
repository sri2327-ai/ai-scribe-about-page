import React from 'react';
import { Typography } from "@mui/material";
import styles from "@/styles/casestudy.module.scss";
import OptimizedImage from "@/components/ui/optimized-image";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices", description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/ImprovePatientCare.webp" },
  { folder: "physician-saves-twenty-one-thousand-dollars-yearly", title: "Physician saves $21,144 yearly", description: "Cut costs by replacing traditional scribes with Crush AI Medical Scribe.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-intake-q-transforming-dr-strotman-practice", title: "CRUSH & INTAKE Q: Transforming Dr. Strotman’s Practice", description: "CRUSH integrates seamlessly with INTAKE Q to automate patient intake and documentation, saving time and improving efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "80-faster-documentation-with-osmind-ehr-integration", title: "80% Faster Documentation with OSMIND EHR Integration", description: "CRUSH integrates with OSMIND EHR to reduce documentation time by 80%, increasing clinician efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "revolutionizing-functional-medicine-with-crush", title: "Revolutionizing Functional Medicine with CRUSH", description: "CRUSH streamlines documentation in functional and longevity medicine, enhancing patient care and practice efficiency.", image: "/ImprovePatientCare.webp" },

  { folder: "physician-saves-twenty-one-thousand-dollars-yearly", title: "Physician saves $21,144 yearly", description: "Cut costs by replacing traditional scribes with Crush AI Medical Scribe.", image: "/ImprovePatientCare.webp" },
  { folder: "physician-earns-five-thousand-dollars-per-month", title: "Physician Earns $5,311 Per Month More with Crush AI Medical Scribe", description: "Boost revenue with efficient and accurate AI scribing.", image: "/ImprovePatientCare.webp" },
  { folder: "physician-saves-seventeen-thousand-dollars-yearly", title: "Physician saves $17,796 yearly", description: "Eliminate transcription costs with Crush S10.AI Medical Scribe.", image: "/ImprovePatientCare.webp" },
  { folder: "how-the-s10-ai-medical-scribe-assistant-transforms-epic-ehr-usability", title: "How the S10 AI Medical Scribe Assistant Transforms EPIC EHR Usability", description: "Streamline workflows and reduce documentation burden.", image: "/ImprovePatientCare.webp" },
  { folder: "how-s10-ai-medical-scribe-assistant-improves-epic-usability", title: "How S10 AI Medical Scribe Assistant Improves EPIC Usability", description: "Optimize EPIC with AI-powered efficiency.", image: "/ImprovePatientCare.webp" },
  { folder: "improving-patient-care-with-s10-ai-ai-medical-scribe", title: "Improving Patient Care With S10.AI AI Medical Scribe", description: "Focus more on patients, less on paperwork with AI assistance", image: "/ImprovePatientCare.webp" },
  { folder: "family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4", title: "Family Medicine Practitioner In Canada Moved To S10.AI From GPT4 ", description: "", image: "/ImprovePatientCare.webp" },
  

];

const CaseStudyGrid = () => {
  const navigate = useNavigate();

  const handleClick = (folder: string, event: React.MouseEvent) => {
    const url = `/resources/casestudies/${folder}`;
    if (event.metaKey || event.ctrlKey) {
      window.open(url, "_blank");
    } else {
      navigate(url);
    }
  };

  return (
    <div className={styles.container}>
      {caseStudies.map((caseStudy) => (
        <div
          key={caseStudy.folder}
          className={styles.card}
          onClick={(e) => handleClick(caseStudy.folder, e)}
        >
          <OptimizedImage
            src={caseStudy.image}
            alt={caseStudy.title}
            className={styles.image}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{caseStudy.title}</h3>
            <p className={styles.description}>{caseStudy.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyGrid;
