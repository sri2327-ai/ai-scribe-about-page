
import React from "react";
import { Box, Container, Typography, Grid as MuiGrid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Users, Calendar, MessageCircle, FileCheck, RefreshCw, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import ShootingStars from "@/components/ui/shooting-stars";

const CrushAI = () => {
  return (
    <Box sx={{ bgcolor: "white", color: "#333" }}>
      {/* Hero Section */}
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 10, md: 14 }, 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <MuiGrid container spacing={4} alignItems="center">
            <MuiGrid item xs={12} md={6}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#000000'
                  }}
                >
                  C.R.U.S.H : The AI Medical Scribe That Works for You
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    color: '#403E43',
                    fontSize: { xs: '1rem', md: '1.2rem' }
                  }}
                >
                  AI-Powered Assistant – Automating Clinical Documentation, Referrals, Prescriptions &
                  Workflows—So You Can Focus on Patient Care!
                </Typography>
                <MuiGrid container spacing={2} sx={{ mb: 6, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  {[
                    "Customizable – Control note content & formatting.",
                    "Real-Time EHR Sync – Instantly integrates with any system.",
                    "Universal Coding – Supports ICD-10, E/M, CPT, HCC for compliance & revenue.",
                    "Smart AI Assistance – Context-aware AI for accurate documentation.",
                    "Healthcare Automation – Handles prescriptions, referrals, labs & more."
                  ].map((item, index) => (
                    <MuiGrid item xs={12} sm={6} key={index}>
                      <Box 
                        component={motion.div}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: 1.5,
                          textAlign: 'left'
                        }}
                      >
                        <Check size={20} className="text-tealBlueBright mt-1 flex-shrink-0" />
                        <Typography variant="body1" sx={{ color: '#403E43' }}>
                          {item}
                        </Typography>
                      </Box>
                    </MuiGrid>
                  ))}
                </MuiGrid>
                <ShadcnButton 
                  size="lg" 
                  className="bg-tealBlueBright hover:bg-tealBlue"
                >
                  REQUEST A DEMO
                  <ArrowRight size={16} />
                </ShadcnButton>
              </Box>
            </MuiGrid>
            <MuiGrid item xs={12} md={6}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <AnimatedWorkflow />
                <Sparkles 
                  className="absolute inset-0 pointer-events-none" 
                  size={1.5}
                  color="#1EAEDB"
                  background="transparent"
                />
              </Box>
            </MuiGrid>
          </MuiGrid>
        </Container>
      </Box>

      {/* EHR Integration Section */}
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: '#f8f9fa'
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 6, textAlign: 'center' }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 'bold',
                mb: 3,
                color: '#000000'
              }}
            >
              Seamless EHR Integration
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 800,
                mx: 'auto',
                color: '#403E43'
              }}
            >
              CRUSH syncs effortlessly with any EHR system, eliminating copy-pasting and manual entry.
            </Typography>
          </Box>

          <MuiGrid container spacing={4} justifyContent="center">
            {[
              {
                title: "Works on Any Device",
                description: "Desktop, laptop, tablet, or mobile.",
                icon: <Zap size={36} className="text-tealBlueBright" />
              },
              {
                title: "Instant Sync",
                description: "AI-generated notes go directly into your EHR.",
                icon: <RefreshCw size={36} className="text-tealBlueBright" />
              },
              {
                title: "Automated Updates",
                description: "Lab results, prescriptions, and referrals auto-sync.",
                icon: <FileCheck size={36} className="text-tealBlueBright" />
              }
            ].map((item, index) => (
              <MuiGrid item xs={12} md={4} key={index}>
                <Card className="h-full card-hover">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Box 
                      component={motion.div}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      sx={{ mb: 2 }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 'medium',
                        color: '#000000'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ color: '#8A898C' }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MuiGrid>
            ))}
          </MuiGrid>

          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            sx={{ 
              mt: 6, 
              textAlign: 'center',
              py: 4
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3,
                color: '#8A898C',
                fontStyle: 'italic'
              }}
            >
              [Show EHR Logos below in transition]
            </Typography>
            {/* Placeholder for EHR logos */}
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                flexWrap: 'wrap'
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <Box 
                  key={item}
                  sx={{
                    width: 120,
                    height: 60,
                    bgcolor: '#e0e0e0',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                    EHR Logo {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 8, textAlign: 'center' }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 'bold',
                mb: 3,
                color: '#000000'
              }}
            >
              How CRUSH Works – AI Charting in 3 Simple Steps
            </Typography>
          </Box>

          <MuiGrid container spacing={6}>
            {[
              {
                step: "1️⃣ Select a Patient",
                details: ["Launch CRUSH on any device and instantly access patient data."],
                icon: <Users size={48} className="text-tealBlueBright" />
              },
              {
                step: "2️⃣ Start Speaking",
                details: [
                  "Speak naturally in any supported language, and Our ambient AI-powered ASR seamlessly records, transcribes, and analyzes conversations in real-time for accuracy and transcription accuracy.",
                  "AI Context Awareness – Pulls past visit history for highly accurate documentation.",
                  "Telemedicine-Ready – Works for in-person, video, chat, or phone consultations."
                ],
                icon: <MessageCircle size={48} className="text-tealBlueBright" />
              },
              {
                step: "3️⃣ Review & Sign Off",
                details: [
                  "Instantly generates EHR-ready medical notes with AI-powered insights.",
                  "Smart Workflow Automation – Auto-handles prescriptions, referrals, labs, follow-ups.",
                  "After-Visit Summaries – Auto-generated in the patient's preferred language.",
                  "AI-Powered Coding – Supports ICD-10, CPT, HCC, and E/M coding for precision billing."
                ],
                icon: <FileCheck size={48} className="text-tealBlueBright" />
              }
            ].map((item, index) => (
              <MuiGrid item xs={12} key={index}>
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 4,
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    p: 3,
                    borderRadius: 2,
                    boxShadow: index === 1 ? 3 : 0,
                    bgcolor: index === 1 ? '#f0f7fa' : 'transparent'
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: { xs: '100%', sm: 100 },
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        mt: 2,
                        color: '#000000'
                      }}
                    >
                      {item.step.split(' ')[0]}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 2,
                        fontWeight: 'medium',
                        color: '#000000'
                      }}
                    >
                      {item.step.split(' ').slice(1).join(' ')}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {item.details.map((detail, i) => (
                        <Box 
                          component="li" 
                          key={i}
                          sx={{
                            mb: 1.5,
                            color: '#403E43'
                          }}
                        >
                          <Typography variant="body1">
                            {detail}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </MuiGrid>
            ))}
          </MuiGrid>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ 
              mt: 8, 
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 4,
                fontWeight: 'medium',
                color: '#000000'
              }}
            >
              AI-Generated Notes in Under 1 Minute – No More Manual Charting!
            </Typography>
            <ShadcnButton 
              size="lg" 
              className="bg-tealBlueBright hover:bg-tealBlue"
            >
              REQUEST A DEMO
              <ArrowRight size={16} />
            </ShadcnButton>
          </Box>
        </Container>
      </Box>

      {/* Why CRUSH Crushes Competition */}
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: '#f0f7fa'
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 6, textAlign: 'center' }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 'bold',
                mb: 3,
                color: '#000000'
              }}
            >
              Why C.R.U.S.H. Crushes the Competition
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 900,
                mx: 'auto',
                color: '#403E43'
              }}
            >
              Other AI scribes talk a big game, but they're basically glorified typewriters. C.R.U.S.H. (Customizable, Real-time, Universal, Smart Healthcare) is in a league of its own, and we've got the edge to prove it.
            </Typography>
          </Box>

          <MuiGrid container spacing={3}>
            {[
              "Pinpoint Accuracy, No Nonsense: Our AI nails every detail of your medical jargon. No fixing botched notes like with those other scribes that churn out fiction.",
              "EHR Sync That's Actually Seamless: Plugs into any EHR—Epic, Cerner, or your clinic's quirky setup. Notes, labs, prescriptions? Instant. Others? Stuck in copy-paste purgatory.",
              "Multilingual Mastery: English, Spanish, French, you name it—C.R.U.S.H. gets it right. Other scribes fumble anything beyond basic English.",
              "Customization with Humans in the Loop: We don't just hand you templates and ghost you. Our human experts work with you to tailor notes and workflows to your exact needs—something those faceless AI scribes can't touch.",
              "Automation That Runs Your Life: Referrals, prescriptions, screenings? C.R.U.S.H. handles it all. Other scribes? They're still learning to spell \"referral.\"",
              "Clinical Smarts on Tap: Real-time tips, HCC tracking, and preventive care flags. It's your brainy co-pilot, not a glorified stenographer.",
              "Burnout? What's That?: Charts done in under a minute, no late-night edits. Better RAF scores mean more revenue, too. Other scribes keep you slaving.",
              "Security That's Ironclad: HIPAA, SOC 2, HITECH—your data's untouchable. Unlike those sketchy scribes with security as flimsy as a paper chart."
            ].map((item, index) => (
              <MuiGrid item xs={12} md={6} key={index}>
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ 
                    display: 'flex', 
                    gap: 2,
                    alignItems: 'flex-start'
                  }}
                >
                  <Check 
                    size={24} 
                    className="text-tealBlueBright mt-1 flex-shrink-0"
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ color: '#403E43' }}
                  >
                    {item}
                  </Typography>
                </Box>
              </MuiGrid>
            ))}
          </MuiGrid>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ 
              mt: 6, 
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              bgcolor: 'white',
              boxShadow: 1,
              maxWidth: 900,
              mx: 'auto'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'medium',
                color: '#000000',
                fontStyle: 'italic'
              }}
            >
              C.R.U.S.H. doesn't just outshine other scribes—it redefines what an AI scribe can do. With human-backed customization, we're here for you, not just your dictation. Demo us and kiss the wannabes goodbye.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* More Than Just a Scribe Section */}
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 8, textAlign: 'center' }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 'bold',
                mb: 3,
                color: '#000000'
              }}
            >
              More Than Just an AI Scribe – CRUSH Automates Clinical Workflows
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 900,
                mx: 'auto',
                color: '#403E43',
                fontSize: '1.1rem'
              }}
            >
              Crush is more than an AI medical scribe—it streamlines healthcare workflows, automates tasks, and enhances patient care, transforming how clinics operate, including for specialty visits.
            </Typography>
          </Box>

          <MuiGrid container spacing={6}>
            {/* Automate Staffing Section */}
            <MuiGrid item xs={12} md={6}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 4,
                    fontWeight: 'medium',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Calendar size={28} className="text-tealBlueBright" />
                  Automate Staffing & Cut Admin Work
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: '#403E43'
                  }}
                >
                  CRUSH eliminates repetitive tasks so you can focus on patient care, not paperwork.
                </Typography>
                <Box>
                  {[
                    "Prescription Refills – Automates refill requests & pharmacy submissions.",
                    "Smart Screening – Conducts PHQ-9, GAD-7, PCL-5, AUDIT, CSSRS assessments.",
                    "Pre-Charting – Prepares charts, retrieves history, and uploads patient documents.",
                    "Lab Orders & Results – Automates lab order submissions & updates lab results in patient charts.",
                    "Referral Automation – Drafts referral letters with intelligent patient insights.",
                    "CRM Sync – Seamlessly transfers patient demographics into your CRM system."
                  ].map((item, index) => (
                    <Box 
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 1.5,
                        mb: 2
                      }}
                    >
                      <Check size={20} className="text-tealBlueBright mt-1 flex-shrink-0" />
                      <Typography variant="body1" sx={{ color: '#403E43' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </MuiGrid>

            {/* AI Assistance Section */}
            <MuiGrid item xs={12} md={6}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 4,
                    fontWeight: 'medium',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Brain size={28} className="text-tealBlueBright" />
                  AI Assistance for Physicians
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: '#403E43'
                  }}
                >
                  CRUSH isn't just a scribe—it's an AI-driven clinical assistant that enhances decision-making, compliance, and patient care.
                </Typography>
                <Box>
                  {[
                    "Clinical Decision Support – Instant guidelines, medical insights & jargon clarification.",
                    "CDI & Compliance – Ensures accurate, structured & compliant documentation.",
                    "HCC MEAT Tracking – Monitors MEAT criteria for follow-ups & risk adjustments.",
                    "Auto-Generated Treatment Plans – SMART-based, personalized care plans.",
                    "Preventive Screening & Risk Analysis – Flags patterns & preventive care needs early.",
                    "Longitudinal Intelligence – Captures historical data for continuity of care."
                  ].map((item, index) => (
                    <Box 
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 1.5,
                        mb: 2
                      }}
                    >
                      <Check size={20} className="text-tealBlueBright mt-1 flex-shrink-0" />
                      <Typography variant="body1" sx={{ color: '#403E43' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </MuiGrid>
          </MuiGrid>
        </Container>
      </Box>

      {/* Testimonials & Benefits Section */}
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: '#f8f9fa',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <ShootingStars 
          starCount={30}
          className="absolute inset-0"
          colors={["#ffffff", "#1EAEDB"]}
          interactive={true}
        />
        
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 8, textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 'bold',
                mb: 3,
                color: '#000000'
              }}
            >
              Talk to Patients, Not Screens – CRUSH Handles the Rest
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 900,
                mx: 'auto',
                color: '#403E43',
                fontSize: '1.1rem'
              }}
            >
              Clinicians love CRUSH because it restores patient focus, reduces admin workload, and increases revenue.
            </Typography>
          </Box>

          <MuiGrid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
            {[
              {
                title: "Restore Focus",
                description: "No more typing, maintain eye contact, and reduce cognitive overload."
              },
              {
                title: "Save Time",
                description: "Auto-generates accurate notes in seconds, cutting charting time to less than 1.6 minutes, making it time-saving."
              },
              {
                title: "Cut Burnout & Boost Revenue",
                description: "No more pajama time—Instant chart closure and streamlined billing, optimized RAF scoring for higher reimbursements, and eased administrative burdens."
              }
            ].map((item, index) => (
              <MuiGrid item xs={12} md={4} key={index}>
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    bgcolor: 'white',
                    boxShadow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 'medium',
                      color: '#000000'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: '#403E43',
                      flex: 1
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </MuiGrid>
            ))}
          </MuiGrid>

          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ 
              mt: 8, 
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              bgcolor: 'white',
              boxShadow: 2,
              maxWidth: 900,
              mx: 'auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                color: '#403E43',
                fontStyle: 'italic'
              }}
            >
              Boost organization-wide productivity and ensure secure data with SOC 2, HITECH, and HIPAA compliance.
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 4,
                fontWeight: 'medium',
                color: '#000000'
              }}
            >
              Automate Documentation. Improve Patient Care. Reduce Burnout.
            </Typography>
            <ShadcnButton 
              size="lg" 
              className="bg-tealBlueBright hover:bg-tealBlue"
            >
              REQUEST A DEMO
              <ArrowRight size={16} />
            </ShadcnButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CrushAI;
