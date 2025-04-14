import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";

export default function AccuracyinNordicContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Background</Typography>
    <p>Dr. Willem Gielen, MD, Co-Founder of Nordjysk Speciallægeklinik, is a leading specialist dedicated to 
      delivering high-quality patient care. Operating in a multilingual region, he faced increasing challenges 
      with medical documentation, including language barriers, time-consuming note-taking, and administrative 
      overload.</p>

      <p>To continue providing efficient and patient-centered care, Dr. Gielen needed a reliable, AI-powered
       documentation solution that could seamlessly handle Nordic languages and reduce the time spent on 
       clinical notes. </p>
</Stack>
<Stack spacing={2}>
     <Typography variant="h4">The Challenge</Typography>
     <p>Multilingual Documentation Struggles – Patients spoke a mix of Danish, Swedish, Norwegian, and other 
      Nordic dialects, making accurate note-taking difficult.</p>
      <p>Limited Time for Patient Interaction – Documentation was cutting into valuable face-to-face consultation time.</p>
      <p>Administrative Overload – Manual data entry led to workflow inefficiencies and physician burnout.</p>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH AI Medical Scribe </Typography>
      <p>Dr. Gielen implemented S10.AI’s CRUSH AI Medical Scribe, a cutting-edge AI-driven documentation assistant that 
      transformed his practice. </p>

      <Typography variant="h4">Result</Typography>
      <ul className={styles.list}>
      <li>100% Accurate Nordic Language Support – CRUSH AI accurately transcribes and summarizes patient encounters across multiple Nordic dialects, eliminating communication barriers.</li>
      <li>More Time for Patient Care – Automated documentation allowed Dr. Gielen to focus entirely on his patients rather than paperwork.</li>
      <li>Instant Implementation – CRUSH AI was up and running in minutes, requiring no extensive setup or training. </li>
      <li>AI-Powered Clinical Decision Support – The system provided real-time medical insights, enhancing decision-making and patient outcomes. </li>
      <li>Cardiology-Specific AI – With custom-built cardiology models, CRUSH AI delivered highly relevant and precise documentation tailored to his specialty. </li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">The Impact</Typography>

    <p>By leveraging CRUSH , Dr. Gielen eliminated language barriers, significantly reduced documentation time, and improved workflow efficiency. With automated progress notes, he can now
    revisit and analyze patient encounters with clarity, ensuring comprehensive and precise records.</p>

</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>
    Dr. Willem Gielen’s success story demonstrates how CRUSH AI Medical Scribe is not just an efficiency tool—it’s a clinical game-changer. By streamlining documentation and enhancing 
    communication, it allows specialists like Dr. Gielen to deliver exceptional patient care without the burden of paperwork.</p>
 </Stack>

 <CalltoActionCard 
  title="Join the Future of Medical Documentation" 
  description="Discover how CRUSH can transform your practice. Start today!" 
>
    <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>

  </Box>

  </section>
    );
}