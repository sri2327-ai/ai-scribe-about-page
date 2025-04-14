import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


export default function Save2HoursDaliyContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Background</Typography>
    <p>Dr. Sameer Siddique, a leading gastroenterologist at Cypress Gastroenterology, was struggling with 
        time-consuming documentation that took away from patient care. Detailed History of Present Illness (HPI) 
        reports, procedural notes, and progress documentation required extensive typing and manual data entry, 
        contributing to long work hours and increased administrative burden. </p>

      <p>To address this challenge, Dr. Siddique implemented CRUSH, an advanced AI medical scribe with seamless 
        integration into EClinicalWorks (eCW)—enabling real-time, automated documentation directly within the EHR.</p>
</Stack>

<Stack spacing={2}>
     <Typography variant="h4">The Challenge</Typography>
     <p>Time-Consuming Documentation – Gastroenterology requires highly detailed patient histories and procedure notes, 
        leading to excessive administrative workload.</p>
      <p>Limited Face-to-Face Patient Time – The need for manual data entry was reducing stethoscope time and increasing charting fatigue.</p>
      <p>EHR Navigation Overload – Excessive clicks and multiple screens in EClinicalWorks slowed down workflow efficiency.</p>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH AI Medical Scribe </Typography>
      <p>Dr. Siddique’s practice integrated CRUSH directly into EClinicalWorks, enabling:</p>

      <ul className={styles.list}>
      <li>Real-time transcription and structured documentation without switching screens. </li>
      <li>Automated, AI-enhanced HPI and procedure notes directly in eCW. </li>
      <li>Instant note population, eliminating repetitive data entry.</li>
    </ul>

      <Typography variant="h4">Result</Typography>
      
      <ul className={styles.list}>
      <li>2 Hours Saved Per Day – AI-powered automation drastically reduced time spent on manual documentation.</li>
      <li>Detailed, AI-Generated HPI & Procedure Notes – CRUSH AI ensures accurate, structured patient histories, reducing edits and improving documentation quality. </li>
      <li>Seamless EHR Workflow – Direct EClinicalWorks integration allows for effortless note completion within existing clinical workflows. </li>
      <li>More Time for Patient Care – Eliminating administrative distractions allows greater focus on diagnostics, treatments, and procedures.  </li>
      <li>Reduced Clicks & Navigation – CRUSH streamlines EHR interactions, eliminating workflow bottlenecks. </li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">The Impact</Typography>

    <p>Since implementing CRUSH , Dr. Siddique has seen a dramatic improvement in efficiency, accuracy, and provider well-being. With automated documentation now flowing 
        directly into EClinicalWorks, the practice has: </p>

        <ul className={styles.list}>
      <li>Cut documentation time by 80%</li>
      <li>Eliminated after-hours charting</li>
      <li>Improved patient engagement by freeing up provider time</li>
    </ul>
</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>
    For Cypress Gastroenterology, CRUSH + EClinicalWorks integration has redefined efficiency. By removing 
    administrative burdens and enhancing documentation accuracy, Dr. Siddique and his team can now focus on 
    delivering exceptional patient care—without the paperwork overload. </p>
 </Stack>

 <Stack spacing={2}>
 <Typography variant="h4">Revolutionize Gastroenterology Documentation</Typography>
 <p> Join top specialists like Dr. Siddique—Experience CRUSH AI Medical Scribe with EClinicalWorks today!</p>
 </Stack>

 <CalltoActionCard 
 title="Revolutionize Gastroenterology Documentation" 
 description="Join top specialists like Dr. Siddique—Experience CRUSH AI Medical Scribe with EClinicalWorks today! ">
     <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>

  </Box>

  </section>
    );
}