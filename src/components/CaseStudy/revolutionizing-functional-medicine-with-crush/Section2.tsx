import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import CalltoActionCard from "@/components/Reusable Component/CalltoActionCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


export default function RevolutionizingContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">Background</Typography>
    <p>Doctors Studio, led by Dr. Lisbeth Roy, is a multi-provider practice specializing in Functional and 
      Longevity Medicine. With a team of 10+ providers, the practice focuses on offering personalized, holistic 
      healthcare that integrates the latest in medical science with alternative therapies. However, managing 
      detailed patient documentation for such a diverse patient population was becoming a challenge. </p>

      <p>Before adopting CRUSH, the practice used virtual scribes to assist with documentation. However, virtual
         scribes were costly, and when they left, training new scribes became a hectic and time-consuming process.
          Additionally, the practice needed a solution that could streamline documentation while ensuring accuracy 
          and efficiency. </p>
</Stack>
<Stack spacing={2}>
     <Typography variant="h4">The Challenge</Typography>
     <ul className={styles.list}>
      <li><strong>High Costs of Virtual Scribes :</strong> Virtual scribes were an expensive solution that did not fully alleviate the administrative burden.</li>
      <li><strong>Training and Turnover Issues: </strong>When virtual scribes left, training new ones was time-consuming and disrupted workflow.</li>
      <li><strong>Time-Consuming Documentation: </strong>Providers spent hours manually reviewing and editing notes, reducing the time available for patient care.</li>
      <li><strong>Scalability Concerns:</strong> As the practice grew, managing documentation efficiently across multiple providers became increasingly difficult.</li>
      </ul>
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH AI Medical Scribe </Typography>
      <p>Dr. Roy and her team implemented CRUSH Medical Scribe, a powerful AI-driven documentation solution,
         to automate and streamline the medical note-taking process. The system seamlessly integrated with their
          practice workflows and offered:</p>

      <ul className={styles.list}>
      <li><strong>Automated AI-Generated Medical Notes –</strong> CRUSH adapted to the unique needs of Integrative and Longevity Medicine, ensuring accuracy and efficiency.</li>
      <li><strong>Pre-Charting of Lab Results –</strong> CRUSH automatically pre-charted lab results, saving providers valuable time before patient encounters.</li>
      <li><strong>Seamless Integration with Telemedicine –</strong>CRUSH worked with any telemedicine platform, supporting the practice's virtual consults effortlessly.</li>
      <li><strong>Scalable and Reliable Documentation –</strong>CRUSH provided a stable, scalable solution that ensured high-quality, consistent documentation across all patient encounters.</li>
      </ul>
</Stack>
<Stack spacing={2}>
<Typography variant="h4">Result</Typography>
    <p>By leveraging CRUSH , Dr. Gielen eliminated language barriers, significantly reduced documentation time, and improved workflow efficiency. With automated progress notes, he can now
    revisit and analyze patient encounters with clarity, ensuring comprehensive and precise records.</p>

    <ul className={styles.list}>
      <li><strong>80% Reduction in Documentation Time – </strong> Providers saved up to 2 hours per day on documentation, significantly boosting productivity.</li>
      <li><strong> Eliminated the Need for Virtual Scribes –</strong>CRUSH replaced costly virtual scribes, eliminating the hassle of training new ones.</li>
      <li><strong>Effortless Pre-Charting – </strong>Automatic pre-charting of lab results streamlined workflows and reduced manual effort.</li>
      <li><strong>More Time for Personalized Care –</strong>With documentation automated, providers could focus more on patient-centered care.</li>
      <li><strong>Quick and Easy Implementation – </strong> CRUSH required minimal training and setup, allowing the team to integrate it into their practice seamlessly.</li>
      </ul>
</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Impact</Typography>

    <p>Since adopting CRUSH, Doctors Studio has experienced: </p>

    <ul className={styles.list}>
      <li><strong>80% faster documentation,</strong>reducing after-hours charting.</li>
      <li><strong>Improved provider satisfaction,</strong>as the administrative burden has been significantly reduced.</li>
      <li><strong>Better patient care,</strong>with more time spent on consultations rather than paperwork.</li>
      <li><strong>Accurate and consistent documentation,</strong>tailored to their specialty in Functional and Longevity Medicine.</li>
      </ul>

     </Stack>

     <Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>For Doctors Studio, CRUSH has transformed the documentation process, allowing the practice to enhance 
      efficiency, improve note quality, and increase provider satisfaction. By eliminating costly virtual scribes
       and implementing a fully automated, AI-driven solution, CRUSH has empowered the practice to focus on what 
       truly matters—delivering exceptional, personalized care to patients. </p>

     </Stack>

     <CalltoActionCard 
  title="Experience the future of medicine" 
  description="Get started with CRUSH AI!" 
>
    <Button variant="contained" color="primary">
         Book Demo <ArrowForwardIcon />
       </Button>
     </CalltoActionCard>


  </Box>

  </section>
    );
}