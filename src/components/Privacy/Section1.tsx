
import { Typography,Box,Stack } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";

export default function Privacy() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>

      <Typography variant="h1" sx={{ textAlign: 'center'}}>Privacy Policy</Typography>
      <Stack spacing={2}>
    <Typography variant="h5">Last updated: 19th April 2024 </Typography>

      <p>S10.AI Inc (“us," “we," or "our") operates the S10.AI website, app, and the Robot Medical Scribe 
        Extension, collectively called applications. This page informs you of our policies regarding the 
        collection, use, and disclosure of Personal Information we receive from users. We are committed to 
        protecting the privacy and security of your personal information. We comply with all applicable privacy 
        laws and regulations, including the Personal Information Protection and Electronic Documents Act (PIPEDA),
         the Health Insurance Portability and Accountability Act (HIPAA), and the General Data Protection 
         Regulation (GDPR).By using the applications, you agree to the collection and use of information in 
         accordance with this policy. </p>
</Stack>

<Stack spacing={2}>
     <Typography variant="h4">Intellectual Property</Typography>
     <p>S10.AI Inc owns the Site and its original content, features, and functionality. They are protected by 
        international copyright, trademark, patented, trade secret, and other intellectual property or proprietary 
        rights laws. You may not use any content from the Site without our express written consent.</p>
    
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">Information Collection and Use</Typography>
      <p>Heather Rosedail implemented CRUSH AI, an advanced AI-powered medical scribe designed to streamline psychiatric documentation. </p>
</Stack>

<Stack spacing={2}>
      <Typography variant="h4">Links To Other Web Sites</Typography>
      <p>While using our application, we may ask you to provide us with certain personally identifiable 
        information that can be used to contact or identify you. Personally identifiable information may 
        include but is not limited to your name, email address, phone number, and address ("Personal Information").
         We collect this information to provide and improve our service and communicate with you about our products
          and services. We may also use your Personal Information to provide you with marketing or promotional 
          materials. If you are a patient, we may collect additional sensitive personal information, such as your 
          medical history, to provide you with healthcare services. We will only collect this information with your
           express consent and will not use it for any other purpose without your consent.</p>

</Stack>
<Stack spacing={2}>
    <Typography variant="h4">Data Security</Typography>

    <p>The security of your Personal Information is important to us, and we take reasonable measures to 
      protect it. We use physical, administrative, and technical safeguards to protect your Personal Information
       from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or 
       electronic storage method is 100% secure. Therefore, while we strive to use commercially acceptable means
        to protect your Personal Information, we cannot guarantee its absolute security.</p>

</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Data Subject Rights</Typography>

    <p>
    You can access, correct, or delete your Personal Information anytime. You also have the right to withdraw 
    your consent to collecting and using your Personal Information. If you wish to exercise these rights, don't
     hesitate to contact us using the information provided below.</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Data Retention and Disposal</Typography>

    <p>We will retain your Personal Information for as long as necessary to provide you with the services 
      you have requested or for other essential purposes such as complying with our legal obligations, resolving
       disputes, and enforcing our policies. When we no longer need your Personal Information, we will securely 
       dispose of it following our data retention policies.</p>
 </Stack>
 
 <Stack spacing={2}>
  <Typography variant="h4">Compliance with Privacy Regulations</Typography>

    <p>We are committed to complying with all applicable privacy laws and regulations, including PIPEDA, HIPAA, 
      and GDPR. We regularly review and update our policies and practices to ensure ongoing compliance.</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Changes to the Privacy Policy</Typography>

    <p>We reserve the right to update or change our Privacy Policy anytime. If we make any material changes 
      to this policy, we will notify you by email or posting a notice on the Site before the change becomes 
      effective. You are advised to review this Privacy Policy periodically for any changes.</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Contact Us</Typography>

    <p>If you have any questions about this Privacy Policy, don't hesitate to contact us at support@s10.ai.</p>
 </Stack>

  </Box>

  </section>
    );
}