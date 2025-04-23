"use client"; // Ensures navigation works in a client component
import { useRouter } from "next/navigation";
import styles from "@/styles/stunning.module.scss";
import { Typography } from "@mui/material";
import Image from "next/image";

const caseStudies = [
  { folder: "100-accuracy-in-nordic-languages-fast-documentation", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/ImprovePatientCare.webp" },
  { folder: "save-2-hours-daily-ai-efficiency-for-gastroenterologists", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-saves-2-hours-daily-for-multi-provider-practices", title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices", description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/ImprovePatientCare.webp" },
];

const StunningCaseStudies = () => {
  const router = useRouter();

  return (
    <section className="witSp" >
      <div className={styles.caseWrapper}>
        <div className={styles.container}>
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.folder} className={styles.casecard} onClick={(event) => {const url = `/resources/casestudies/${caseStudy.folder}`;
            if (event.metaKey || event.ctrlKey) { window.open(url, "_blank");
              }
              else {
              router.push(url);
              }
            }}
          >
          <Image src={caseStudy.image} alt={caseStudy.title} className={styles.image} width={300} height={200} />
              <div className={styles.content}>
                <Typography variant="h5" className={styles.title}>{caseStudy.title}</Typography>
                <p className={styles.description}>{caseStudy.description}</p>
                <Typography variant="h5">Read More</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StunningCaseStudies;
