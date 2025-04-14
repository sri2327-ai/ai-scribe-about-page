import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack,Button } from "@mui/material";

export default function FamilyMedicineContent() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>
<Stack spacing={2}>
      <Typography variant="h4">About The Customer: </Typography>
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
     <ul className={styles.list}>
      <li><strong>Industry:</strong>Healthcare - Individual Practitioner (Family Medicine).</li>
      <li><strong>Hospital/Clinic Size:</strong>Individual practitioner</li>
      <li><strong>Location: </strong>Canada</li>
      <li><strong>Ownership Type:</strong>Part of a larger healthcare system </li>
      <li><strong>Specialization: </strong>Family medicine.</li>
      <li><strong>Electronic Health Record (EHR) System:</strong> Accuro (Local version).</li>
      <li><strong>Patient Demographics: </strong>Patients from Saskatchewan and surrounding areas.</li>
      <li><strong>Patient Flow:</strong>Approximately 25 patients are seen per day.</li>
      <li><strong>Decision-Makers: </strong>Doctor (Chief Medical Officer).</li>

</ul>
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">Pain Points Before S10.AI Adoption:</Typography>
      <p>Before implementing S10.AI Medical Scribe, the individual practitioner encountered several challenges
         in medical documentation and administrative processes. Although they relied on ChatGPT for completing 
         documentation, it was still time-consuming to complete the documentation. The physician must type prompts
          into chatGPT, review the document, and manually enter it into the EHR. They realized it was 
          time-consuming and still a burden for the physician. They needed a more efficient tool to alleviate 
          the burden of manually pasting prompts and correcting inaccuracies. They expressed keen interest in 
          trying out the S10.AI Robot Medical Scribe to enhance their documentation workflow and compare it with 
          their existing solution. </p>

</Stack>

<Stack spacing={2}>
      <Typography variant="h4">Competitive Landscape:  </Typography>
      <p>Before adopting S10.AI Medical Scribe, they used ChatGPT for documentation, which involved self-documentation.</p>
</Stack>


<Stack spacing={2}>
    <Typography variant="h4">Adoption History and Outcomes: </Typography>

    <p>S10.AI Robot Medical Scribe was implemented in a week. The notes were as per the physician’s 
      documentation preference. The documentation was created directly from the conversation between the 
      physician and the patient. After adopting S10.AI Robot Medical Scribe, the practitioner reported a 
      significantly reduced documentation burden. They observed improvements in time efficiency, document quality, 
      and ease of use. S10.AI's capabilities helped streamline the documentation process, allowing the physician 
       focus more on patient care. </p>

</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Conclusion</Typography>

    <p>
    S10.AI Medical Scribe was an effective solution for this individual practitioner, addressing his pain points
     and enhancing the medical documentation process. The AI-powered system demonstrated improved time management, 
     document quality, and ease of use, leading to better patient care and overall operational efficiency in their 
     respective healthcare settings. </p>
 </Stack>

  </Box>

  </section>
    );
}