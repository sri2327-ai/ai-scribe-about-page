import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";


export default function TwentyoneThousandContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Crush AI Medical Scribe </Typography>
    <p>A physician’s mind free of Electronic Health Records documentation worries and having enough time in hand to 
      focus on patient encounters is essential to the success of any practice. A frictionless way to create 
      meaningful data in EHR is important not only for regulation but also for driving productivity, seamless 
      reimbursements, and also reducing physician burnout. At S10.AI, we work with Physicians to implement 
      solutions that generate clear returns from day one. This case study outlines how S10.AI made EHR
       documentation process simple, reliable, scalable and delivered excellent ROI. </p>

</Stack>
<Stack spacing={2}>
     <Typography variant="h4">Summary Executive </Typography>
     <p>Physician’s main goal was to get a reliable alternative to Medical Scribes which not only removes the burden 
     of training and managing the Medical Scribe but also increases the revenue.</p>
      
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">About the Physician</Typography>
      <p>The physician was handling about 18 patients per day and had 22 clinic days for his practice. Scribes on 
        leave, higher turnover of scribes, training new scribes and incurring a cost of $2,112 per month left him 
        frustrated. </p>
      <ul className={styles.list}>
      <li>Challenges.</li>
      <li>Scribe attrition risk.</li>
      <li>New scribe onboarding time.</li>
      <li>New scribe learning curves.</li>
      <li>Cost of medical scribes.</li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">How S10.AI helped ?</Typography>

    <p>S10.AI Medical scribe automatically scribes a clinical interaction based on the doctor-patient conversations. This 
      completely mimics a physician and transcribes the encounters and automatically enters into the EHR instantly. 
      The doctor had to spend only 1 hour for the implementation. The Physician started gaining the following benefits
       immediately on moving to S10 AI Medical Scribe. </p>

       <ul className={styles.list}>
      <li>Reduced monthly spend of $1,762.</li>
      <li>No scribe onboarding challenges and learning curves </li>
      <li>No scalability issues.</li>
      <li>No attrition risk.</li>
    </ul>
</Stack>

<CalltoActionCard title="Start saving today with Crush AI Medical Scribe – Try it now!">
      <Button variant="contained" color="primary">
        Book Demo <ArrowForwardIcon />
      </Button>
    </CalltoActionCard>


  </Box>

  </section>
    );
}