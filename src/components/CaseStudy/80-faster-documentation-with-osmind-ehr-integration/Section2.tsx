import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


export default function FasterDocumentContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Background</Typography>
    <p>Heather Rosdail, a leading psychiatric provider at Insights Psychiatric, faced a growing challenge: 
      documentation overload. Managing extensive psychiatric evaluations and progress notes was consuming 1-2 hours 
      daily, often spilling into nights and weekends. The time spent on EHR data entry was taking away from 
      meaningful patient interactions and personal well-being. </p>

      <p>To enhance efficiency and reclaim valuable time, Heather sought a seamless, AI-driven solution that could 
        integrate directly with OSMIND EHR while ensuring comprehensive, high-quality notes. </p>
</Stack>

<Stack spacing={2}>
     <Typography variant="h4">The Challenge</Typography>
     <p>Time-Consuming Documentation – Progress notes and evaluations required extensive typing, leading to long work hours.</p>
      <p>After-Hours Administrative Burden – Late-night and weekend documentation was cutting into personal time.</p>
      <p>Repetitive Manual Data Entry – Entering notes into OSMIND EHR involved redundant tasks, reducing clinical efficiency.</p>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH AI Medical Scribe</Typography>
      <p>Heather Rosedail implemented CRUSH AI, an advanced AI-powered medical scribe designed to streamline psychiatric documentation. </p>
</Stack>

<Stack spacing={2}>
      <Typography variant="h4">Result</Typography>
      <ul className={styles.list}>
      <li>1-2 Hours Saved Daily – CRUSH automates note-taking, allowing Heather to focus more on patient care and less on paperwork. </li>
      <li>80% Faster Documentation – Progress notes are generated in a fraction of the time, significantly reducing administrative workload. </li>
      <li>No More Late-Night or Weekend Work – With documentation completed during patient visits, Heather reclaimed personal and family time. </li>
      <li>Seamless OSMIND EHR Integration – Notes are entered directly into the EHR, eliminating repetitive data entry. </li>
      <li>Minimal Edits, Maximum Efficiency – AI-generated draft progress notes require only quick reviews and minor adjustments.</li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">The Impact</Typography>

    <p>Since adopting CRUSH AI, Heather Rosdail and her team have experienced a transformative shift in workflow 
      efficiency. With a 40%-50% reduction in documentation time, clinicians now focus more on patient-centered
       carewhile maintaining accurate, comprehensive records. </p>

</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>
    For Heather Rosdail and Integrated Insights Psychiatry, CRUSH AI has become an essential partner in modern 
    psychiatric care. By eliminating documentation overload, it empowers clinicians to spend more time with 
    patients and less time on administrative tasks.</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Join the Future of Psychiatric Documentation</Typography>

    <p>Experience the power of CRUSH AI in your practice. Get started today! </p>
 </Stack>
 

 <CalltoActionCard 
  title="Join the Future of Psychiatric Documentation" 
  description="Experience the power of CRUSH AI in your practice. Get started today! " 
>
    <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>

  </Box>

  </section>
    );
}