import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


export default function CrushsaveContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Background</Typography>
    <p>Dr. Smriti Choudhary, MD, Founder of Primary Care Center of Clear Lake, leads a high-volume primary 
      care practice with multiple providers serving a growing patient base. However, the burden of manual 
      documentation, extensive SOAP notes, and excessive EHR data entry was cutting into valuable patient 
      interaction time and increasing provider burnout. </p>

      <p>To optimize efficiency, Dr. Choudhary implemented CRUSH AI Medical Scribee, seamlessly integrated with 
        Practice Fusion EHR, allowing the entire practice to automate documentation, reduce administrative 
        workload, and improve provider well-being. </p>
</Stack>
<Stack spacing={2}>
     <Typography variant="h4">The Challenge</Typography>
     <p>Extensive Documentation Requirements – Providers were spending 2+ hours daily on patient notes.</p>
      <p>After-Hours Charting Burnout – Late-night and weekend documentation was affecting work-life balance.</p>
      <p>EHR Navigation Overload – Excessive clicking and manual data entry in Practice Fusion slowed workflows.</p>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH + Practice Fusion Integration</Typography>
      <p>The Primary Care Center of Clear Lake deployed CRUSH AI across its provider network, ensuring:</p>

      <ul className={styles.list}>
      <li> Real-time AI-generated documentation, structured directly within Practice Fusion EHR.</li>
      <li>Automated SOAP notes, HPI reports, and assessments—eliminating manual data entry.</li>
      <li> Effortless provider adoption, allowing immediate productivity gains.</li>
      </ul>
    </Stack>

    <Stack spacing={2}>
      <Typography variant="h4">Result</Typography>
      <ul className={styles.list}>
      <li>2+ Hours Saved Per Day Per Provider – AI-powered documentation dramatically reduced charting time</li>
      <li>Seamless Practice Fusion EHR Workflow – Notes are auto-populated, eliminating unnecessary clicks.</li>
      <li>80% Faster Documentation – Providers complete notes in real-time, reducing workload.</li>
      <li>More Patient-Centered Care – Less screen time means better patient interactions and clinical decisions.</li>
      <li>No More After-Hours Charting – Documentation is completed during visits, restoring personal time for providers.</li>
      <li>Scalable for Large Practices – Multiple providers benefit from CRUSH AI without disrupting workflows.</li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">The Impact</Typography>

    <p>With CRUSH AI directly integrated into Practice Fusion, the practice has seen: </p>

    <ul className={styles.list}>
      <li>80% reduction in documentation time.</li>
      <li>Elimination of after-hours and weekend charting.</li>
      <li>Higher provider satisfaction and efficiency.</li>
      <li>More time dedicated to patient care.</li>
      </ul>
</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>
    For Primary Care Center of Clear Lake, CRUSH AI is a game-changer. By automating documentation, 
    eliminating administrative overload, and seamlessly integrating into clinical workflows, CRUSH AI ensures that
     providers focus on what truly matters—delivering top-quality patient care..</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Transform Your Practice with CRUSH AI Medical Scribe</Typography>

    <p>Join top providers like Dr. Smriti Choudhary—Experience CRUSH today!</p>
 </Stack>

 <CalltoActionCard 
  title="Transform Your Practice with CRUSH AI Medical Scribe" 
  description="Join top providers like Dr. Smriti Choudhary—Experience CRUSH today!" 
>
    <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>
  </Box>

  </section>
    );
}