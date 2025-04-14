import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


export default function CrushIntakeContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Background</Typography>
    <p>Dr. Angela Strotman, a dedicated psychiatrist, had long been facing challenges with the heavy 
      administrative burden of patient documentation in her busy practice. Having tried several AI scribes,
       such as MedWriter, Heidi, and Lindy, Dr. Strotman was unsatisfied with the results, as none of them 
       truly fit her workflow or met her needs for accuracy, speed, and seamless integration.</p>

      <p>Despite using AI scribes, her team still spent substantial time manually reviewing and editing notes. 
        She needed a solution that would streamline the documentation process, improve note accuracy, and integrate 
        with her INTAKE Q system to make the process even more efficient. That’s when she turned to CRUSH by S10.ai.</p>
</Stack>
<Stack spacing={2}>
     <Typography variant="h4">The Challenge</Typography>
     <p>Dr. Strotman’s previous AI scribe solutions failed to meet the following key needs:</p>
      
     <ul className={styles.list}>
      <li>Inconsistent Accuracy – Existing AI tools struggled to capture patient information accurately, requiring constant manual intervention and edits.</li>
      <li>Integration Issues – These tools didn’t integrate seamlessly with INTAKE Q, making it difficult to automate the collection of patient data directly into her practice’s workflow</li>
      <li>Time-Consuming Edits – Despite AI assistance, the team still spent time editing and formatting the notes, negating the time-saving potential.</li>
      <li>Lack of Customization – Existing solutions weren’t adaptable enough to Dr. Strotman’s specific practice requirements or the detailed nature of her psychiatric practice.</li>
     </ul>
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH AI Medical Scribe </Typography>
      <p>Dr. Strotman implemented CRUSH, which integrated directly with INTAKE Q to streamline the process of data collection and documentation. CRUSH provided:</p>

      <ul className={styles.list}>
      <li>Seamless Integration with INTAKE Q – CRUSH automatically pulled data from INTAKE Q, populating the desired fields in real-time, eliminating manual data entry.</li>
      <li>High Accuracy and Precision – The AI captured patient encounters with exceptional detail, significantly reducing errors and the need for manual review.</li>
      <li>Customizable Templates – CRUSH offered tailored templates suited for psychiatric and holistic medicine, ensuring that all notes met Dr. Strotman’s specific needs.</li>
      <li>AI-Generated Notes – CRUSH generated comprehensive, accurate medical notes directly in the EHR, allowing for easy review with minimal edits.</li>
     </ul>

    </Stack>
    <Stack spacing={2}>
      <Typography variant="h4">Result</Typography>
      <ul className={styles.list}>
      <li>80% Faster Documentation – CRUSH saved Dr. Strotman up to 2 hours per day on documentation, allowing more time for patient care.</li>
      <li>Real-Time Data Integration – Integration with INTAKE Q ensured all relevant patient data was automatically populated, reducing the need for manual input.</li>
      <li>Increased Accuracy – CRUSH's high-accuracy notes led to fewer errors and minimized time spent on corrections.</li>
      <li> Improved Provider Satisfaction – With less time spent on documentation, Dr. Strotman and her team experienced less administrative stress, leading to improved job satisfaction.</li>
      <li>Better Patient Experience – With streamlined workflows, the team could devote more time to personalized care, improving the overall patient experience.</li>
    </ul>
</Stack>
<Stack spacing={2}>
    <Typography variant="h4">The Impact</Typography>

    <p>Since implementing CRUSH, Dr. Strotman’s practice has experienced: </p>

    <ul className={styles.list}>
      <li>Faster, more accurate documentation, thanks to the real-time integration with INTAKE Q.</li>
      <li>80% faster note completion, giving providers more time to focus on patient care.</li>
      <li>Improved consistency in medical notes, with CRUSH eliminating the need for manual review and edits.</li>
      <li>Better efficiency across the practice, allowing for scalable growth and enhanced patient satisfaction.</li>
    </ul>

</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>
    After experimenting with several AI scribe solutions, Dr. Strotman found that CRUSH was the perfect fit for her
     practice. The seamless integration with INTAKE Q, high accuracy, and customizable features helped her team 
     dramatically reduce documentation time and improve the quality of their patient notes. CRUSH has become an 
     invaluable tool, allowing Dr. Strotman to focus on providing high-quality, patient-centered care while
      eliminating administrative stress. </p>
 </Stack>


 <CalltoActionCard 
  title="Experience the CRUSH Difference" 
  description="Join leading practices like Dr. Angela Strotman’s—Transform your documentation with CRUSH today! " 
>
    <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>


  </Box>

  </section>
    );
}