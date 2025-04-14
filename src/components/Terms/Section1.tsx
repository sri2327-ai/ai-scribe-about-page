
import { Typography,Box,Stack } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";

export default function TermsAndCondition() {
    return (
<section className="witSp" style={{ alignItems: 'center', justifyContent: 'center'}}>
<Box  sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: 5 }}>

      <Typography variant="h1" sx={{ textAlign: 'center'}}>Terms And Conditions</Typography>
      <Stack spacing={2}>
    <Typography variant="h5">Last updated: 19th April 2024 </Typography>

      <p>Please read these Terms of Use (“Terms," "Terms of Use") carefully before using S10.AI 
        operated by S10.AI Inc (“us,” “we," or "our"). Your access to and use of the Site is conditioned 
        on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, 
        and others who access or use the Site. By accessing or using the Site, you agree to be bound by 
        these Terms. You may not access the Site if you disagree with any part of the Terms. </p>
</Stack>

<Stack spacing={2}>
     <Typography variant="h4">Intellectual Property</Typography>
     <p>S10.AI Inc owns the Site and its original content, features, and functionality. They are protected by 
        international copyright, trademark, patented, trade secret, and other intellectual property or proprietary 
        rights laws. You may not use any content from the Site without our express written consent.</p>
    
</Stack>
<Stack spacing={2}>
      <Typography variant="h4">The Solution: CRUSH AI Medical Scribe</Typography>
      <p>Heather Rosedail implemented CRUSH AI, an advanced AI-powered medical scribe designed to streamline psychiatric documentation. </p>
</Stack>

<Stack spacing={2}>
      <Typography variant="h4">Links To Other Web Sites</Typography>
      <p>Our Site may contain links to third-party websites or services not owned or controlled by S10.AI Inc. 
        S10.Ai Inc has no control over and assumes no responsibility for the content, privacy policies, or 
        practices of any third-party websites or services. You acknowledge and agree that [insert your
         organization's name] shall not be responsible or liable, directly or indirectly, for any damage 
         or loss caused or alleged to be caused by or in connection with the use of or reliance on any such 
         content, goods, or services available on or through any such web sites or services.</p>

</Stack>
<Stack spacing={2}>
    <Typography variant="h4">Termination</Typography>

    <p>We may terminate or suspend access to our Site immediately, without prior notice or liability, 
        for any reason whatsoever, including without limitation if you breach the Terms. All provisions 
        of the Terms, which by their nature should survive termination, including, without limitation, 
        ownership provisions, warranty disclaimers, indemnity, and limitations of liability, shall survive
         termination, and the terms of the Privacy Policy shall continue to apply.</p>

</Stack>
<Stack spacing={2}>
  <Typography variant="h4">Disclaimer</Typography>

    <p>
    The Site is provided on an "as is" and "as available" basis. S10.AI Inc makes no warranties, expressed or 
    implied, and hereby disclaims and negates all other warranties, including, without limitation, implied
     warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
     intellectual property or other violation of rights..</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Limitation of Liability</Typography>

    <p>In no event shall S10.AI Inc, its affiliates, or their respective officers, directors, employees, or agents be
         liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any 
         way connected with the use of the Site or with the delay or inability to use the Site, or for any information,
          products, and services obtained through the Site, or otherwise arising out of the use of the Site, whether
           based on contract, tort, strict liability, or otherwise, even if S10.AI Inc has been advised of the 
           possibility of damages. </p>
 </Stack>
 
 <Stack spacing={2}>
  <Typography variant="h4">Governing Law</Typography>

    <p>These Terms shall be governed and construed in accordance with the laws of the United States Of 
        America, without regard to its conflict of law provisions. Our failure to enforce any right or 
        provision of these Terms will not be considered a waiver of those rights. If any provision of these 
        Terms is held invalid or unenforceable by a court, the remaining provisions will remain in effect. 
        These Terms constitute the entire agreement between us regarding our Site and supersede and replace
         any prior agreements we have between us regarding the Site. </p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Changes</Typography>

    <p>At our sole discretion, we reserve the right to modify or replace these Terms at any time. If a revision 
        is material, we will provide at least 30 days notice before any new terms take effect. What constitutes 
        a material change will be determined at our sole discretion.By continuing to access or use our Site after
         any revisions become effective, you agree to be bound by the revised terms. If you disagree with the new 
         terms, you can no longer use the Site.</p>
 </Stack>

 <Stack spacing={2}>
  <Typography variant="h4">Contact Us</Typography>

    <p>If you have any questions about these Terms, please get in touch with us at support@s10.ai.</p>
 </Stack>

  </Box>

  </section>
    );
}