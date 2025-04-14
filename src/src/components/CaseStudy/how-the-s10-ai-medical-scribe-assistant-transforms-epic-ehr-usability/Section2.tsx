import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";


export default function EPICehrUsabilityContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      
    <p>EPIC is one of the most widely used Electronic Health Record (EHR) systems in the United States,
       providing a comprehensive platform for storing and managing patient records. While its vast functionalities 
       make it a powerful tool, they also introduce a significant usability challenge for physicians. </p>

</Stack>
<Stack spacing={2}>
     <Typography variant="h4">The Hidden Cost of EHR Complexity</Typography>
     <p>Physicians often spend hours navigating through EPIC’s multiple menus, forms, and clicks just to 
      complete routine documentation. A usability study published in the Journal of the American Medical 
      Informatics Association revealed major issues affecting EHR efficiency and safety:</p>

      <ul className={styles.list}>
      <li>The time required to complete an imaging order (X-ray, MRI) ranged from 25 seconds to over a minute, depending on the site.</li>
      <li>Some physicians needed 8 clicks, while others required 31 clicks to complete the same task. </li>
      <li>50% of prednisone taper orders contained errors, leading to potential patient safety risks.</li>
      <li>Tasks like imaging orders had an error rate ranging from 0% to 35.7%, showing inconsistency across different EPIC implementations.</li>
      <li>The excessive documentation workload in EPIC contributes to physician burnout, reducing time available for direct patient care.</li>
    </ul>

</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: S10 AI Medical Scribe Assistant – AI-Powered Documentation</Typography>
      <p>Rather than forcing doctors to adapt to an inefficient system, the S10 AI Medical Scribe Assistant 
        transforms the way physicians interact with EPIC, streamlining workflows and eliminating unnecessary 
        documentation burdens. </p>

</Stack>
      

<CalltoActionCard title="Simplify EPIC workflows – See how S10.AI can help!">
      <Button variant="contained" color="primary">
        Book Demo <ArrowForwardIcon />
      </Button>
    </CalltoActionCard>

  </Box>

  </section>
    );
}