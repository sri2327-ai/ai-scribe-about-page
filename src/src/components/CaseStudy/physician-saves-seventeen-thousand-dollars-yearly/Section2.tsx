import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";


export default function SeventeenThousandContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Crush AI Medical Scribe</Typography>
    <p>A physician’s mind free of Electronic Health Records documentation worries and having enough time in
       hand to focus on patient encounters is essential to the success of any practice. A frictionless way to 
       create meaningful data in EHR is important not only for regulation but also for driving productivity, 
       seamless reimbursements, and also reducing physician burnout.At S10.AI, we work with Physicians to implement 
       solutions that generate clear returns from day one. This case study outlines how S10.AI made EHR 
       documentation process simple, reliable, scalable and delivered excellent ROI. </p>

</Stack>
<Stack spacing={2}>
     <Typography variant="h4">Executive Summary</Typography>
     <p>Physician’s main goal was to get a high quality documentation alternative to Medical Transcription which not 
      only removes the burden of insecure file transfers but also reduces the cost. .</p>
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">About the Physician</Typography>
      <p>The physician was handling about 18 patients per day and had 22 clinic days for his practice. 
        The physician was receiving the transcripted document after 24 hours. He was incurring a cost of 
        $ 1.5 for a minute of recording and incurring a cost of $ 1,782 per month. </p>
</Stack>

<Stack spacing={2}>
      <Typography variant="h4">Challenges</Typography>
      <ul className={styles.list}>
      <li>Compliance risks emanating from uncontrolled voice file transfers.</li>
      <li>Backlogs and errors due to batch processing.</li>
      <li>Quality of documentation in EHR.</li>
      <li>Scalability issues.</li>
      </ul>
</Stack>

<Stack spacing={2}>
    <Typography variant="h4">How S10.AI helped ?</Typography>

    <p>Crush physicians findings and summary of an encounter to appropriate templates and contextually 
      enters it into the EHR on autopilot mode instantly. Crush creates medical-legal documents that are 
      grammatically correct and prompt allergies, drug-to-drug interactions, and treatment suggestions. 
      The Physician started gaining the following benefits immediately on moving to Crush, AI Medical Scribe. </p>

      <ul className={styles.list}>
      <li>Reduced monthly spend of $1,432.</li>
      <li>Avoids compliance risks emanating from uncontrolled voice file transfers.</li>
      <li>Eliminates backlogs and errors due to batch processing No attrition risk.</li>
      <li>CDI standard documentation in EHR.</li>
      </ul>
</Stack>


<CalltoActionCard title="Cut transcription costs instantly – Switch to Crush S10.AI today!">
      <Button variant="contained" color="primary">
        Book Demo <ArrowForwardIcon />
      </Button>
    </CalltoActionCard>

  </Box>

  </section>
    );
}