import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";

export default function FiveThousandContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
    <p>A physician’s mind free of Electronic Health Records documentation worries and having enough time in hand 
      to focus on patient encounters is essential to the success of any practice. A frictionless way to create
       meaningful data in EHR is important not only for regulation but also for driving productivity, seamless
        reimbursements, and also reducing physician burnout. At S10.AI, we work with Physicians to implement 
        solutions that generate clear returns from day one. This case study will outline how S10.AI helped the
         physician turn his EHR documentation process to simple, reliable and scale with a lower cost alternate
          approach. </p>

</Stack>
<Stack spacing={2}>
     <Typography variant="h4">Executive Summary</Typography>
     <p>High-performing physician had to spend between 1.5 hours to 4 hours every working day on EHR documentation. 
      He was facing EHR usability issues and documentation challenges. This lead to overwork, loss of productivity,
      and he was on the verge of burnout. </p>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">About the Physician</Typography>
      <p>The physician was handling about 18 patients per day and had 20 working days for his practice. Due to time 
        spent on documentation he was not able to see more patients and losing $150 to $400 every day. </p>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">Challenges</Typography>
      <ul className={styles.list}>
      <li>Difficulty of working directly on EHR systems </li>
      <li>Slow system response times.</li>
      <li>Difficult navigation.</li>
      <li>After-office hours work.</li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">How S10.AI helped ?</Typography>

    <p>Crush the AI scribe understands free-flowing dictation or conversations and using contextual methods
       enters the data into the EHR fields automatically without integration. It uses high fidelity ASR and 
       speaker identification which allows speech-driven interaction anywhere within an environment. It mimics a 
       medical scribe and scribes the encounters and automatically enters into the EHR on auto-pilot mode. </p>

       <ul className={styles.list}>
      <li>Enabled more patient time to earn more than $5000.</li>
      <li>Avoids difficulty of working directly on EHR systems.</li>
      <li>No “after office hours” or carry documentation home.</li>
      <li>CDI standard documentation in EHR. No fear of missing out something.</li>
    </ul>
</Stack>

<CalltoActionCard title="Maximize your earnings – Sign up for a free demo now!">
      <Button variant="contained" color="primary">
        Book Demo <ArrowForwardIcon />
      </Button>
    </CalltoActionCard>

  </Box>

  </section>
    );
}