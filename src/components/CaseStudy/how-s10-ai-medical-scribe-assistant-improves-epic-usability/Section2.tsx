import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";


export default function EPICUsabilityContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">1. Reducing Clicks & Time Spent on Documentation</Typography>
    <p>S10 AI Medical Scribe Assistant automates documentation by listening to physician-patient 
      interactions and generating clinical notes in real time. This eliminates the need for manual data entry,
       reducing the number of clicks and navigation steps required to complete tasks in EPIC. </p>

      <p>For example, instead of spending 70 seconds and 20+ clicks to place a medication order in EPIC, S10 
        automatically drafts the order based on the physician’s spoken instructions, requiring only a quick 
        review and approval. </p>
</Stack>
<Stack spacing={2}>
     <Typography variant="h4">2. Enhancing Accuracy & Eliminating Errors </Typography>
     <p>Manual data entry is prone to errors—whether it’s selecting the wrong medication, ordering the incorrect test, or forgetting a crucial detail. S10 ensures error-free documentation by: </p>

     <ul className={styles.list}>
      <li><strong>Standardizing Documentation: </strong>Notes are generated according to clinical best practices, ensuring consistency and completeness. </li>
      <li><strong>Reducing Order Errors:</strong>S10 verifies and suggests corrections for potential mistakes in medication or imaging orders. </li>
      <li><strong>Ensuring Compliance: </strong>Documentation meets gold-standard guidelines, reducing liability risks and ensuring regulatory compliance. </li>
      </ul>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">3. Increasing Physician Productivity & Satisfaction</Typography>
      <p>By eliminating the need to manually enter notes, orders, and other documentation, physicians can:</p>

      <Typography variant="h4">Result</Typography>
      <ul className={styles.list}>
      <li>Spend more time with patients, regaining valuable minutes per encounter.</li>
      <li>See more patients per day, increasing overall productivity. </li>
      <li>Reduce burnout and improve job satisfaction, leading to better morale and work-life balance.</li>
      </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">4. Seamless Integration with EPIC & Other EHRs </Typography>

    <p>Unlike traditional voice dictation tools that require manual correction, S10 AI Medical 
      Scribe Assistant seamlessly integrates with EPIC, Cerner, and other leading EHR systems, providing: </p>

      <li><strong>Real-Time Note Generation:</strong>Structured clinical documentation automatically populates EPIC.</li>
      <li><strong>Automated Coding & Billing Support: </strong>AI-powered coding suggestions help optimize reimbursement.</li>
      <li><strong>Voice-Controlled EHR Navigation: </strong> Physicians can place orders, retrieve patient histories, and review lab results using voice commands instead of multiple clicks.</li>


</Stack>
<Stack spacing={2}>
  <Typography variant="h4">EPIC Usability, Reimagined</Typography>

    <p>
    The usability study highlighted that inefficiencies in EPIC aren’t just an inconvenience—they directly impact
     patient care, physician workload, and healthcare efficiency. With S10 AI Medical Scribe Assistant, hospitals
      and clinics can: </p>

      <ul className={styles.list}>
      <li>Cut documentation time by up to 75%.</li>
      <li>Reduce error rates and improve patient safety.</li>
      <li>Boost physician productivity and satisfaction.</li>
      </ul>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Experience the Future of Medical Documentation </Typography>

    <p>
    Tired of battling EPIC’s documentation burden? Try S10 AI Medical Scribe Assistant for free and discover 
    how AI-powered automation can eliminate EHR usability frustrations, letting you focus on what truly 
    matters—patient care.  </p>

      
 </Stack>

 <CalltoActionCard title="Enhance EPIC efficiency – Book a demo now!">
       <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>


  </Box>

  </section>
    );
}