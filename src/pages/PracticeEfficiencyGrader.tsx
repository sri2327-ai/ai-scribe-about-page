
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Grid, Fade } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ModernSlider } from '@/components/ui/modern-slider';
import { PEGHeader } from '@/components/practice-efficiency-grader/PEGHeader';

const questions = [
  {
    id: 'timePerPatient',
    question: 'How much time do you spend on documentation per patient?',
    unit: 'Minutes per patient',
    min: 5,
    max: 30,
    labels: ['5 min', '15 min', '30 min']
  },
  {
    id: 'afterHoursWork',
    question: 'How many hours do you work after clinic hours on documentation?',
    unit: 'Hours per day',
    min: 0,
    max: 4,
    labels: ['0 hours', '2 hours', '4+ hours']
  },
  {
    id: 'burnoutLevel',
    question: 'Rate your current burnout level',
    unit: 'Burnout scale',
    min: 1,
    max: 10,
    labels: ['Low', 'Moderate', 'High']
  },
  {
    id: 'patientVolume',
    question: 'How many patients do you see per day?',
    unit: 'Patients per day',
    min: 10,
    max: 40,
    labels: ['10 patients', '25 patients', '40+ patients']
  }
];

export default function PracticeEfficiencyGrader() {
  const [responses, setResponses] = useState<Record<string, number>>({
    timePerPatient: 15,
    afterHoursWork: 2,
    burnoutLevel: 5,
    patientVolume: 25
  });
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: ''
  });

  const calculateScore = () => {
    const timeScore = Math.max(0, 100 - (responses.timePerPatient - 5) * 4);
    const hoursScore = Math.max(0, 100 - responses.afterHoursWork * 25);
    const burnoutScore = Math.max(0, 100 - (responses.burnoutLevel - 1) * 11);
    const volumeScore = Math.min(100, (responses.patientVolume - 10) * 3);
    
    return Math.round((timeScore + hoursScore + burnoutScore + volumeScore) / 4);
  };

  const handleSliderChange = (questionId: string, value: number) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 2000);
  };

  const score = calculateScore();

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#4CAF50';
    if (score >= 60) return '#FF9800';
    return '#F44336';
  };

  const getScoreDescription = (score: number) => {
    if (score >= 80) return 'Excellent efficiency! Your practice is well-optimized.';
    if (score >= 60) return 'Good efficiency with room for improvement.';
    return 'Significant opportunities for efficiency improvements.';
  };

  if (isCalculating) {
    return (
      <>
        <PEGHeader />
        <Box
          sx={{
            minHeight: 'calc(100vh - 80px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-[#143151] border-t-transparent rounded-full mx-auto mb-4"
            />
            <Typography variant="h5" sx={{ color: '#143151', fontWeight: 600 }}>
              Calculating your score...
            </Typography>
          </motion.div>
        </Box>
      </>
    );
  }

  return (
    <>
      <PEGHeader />
      <Box
        sx={{
          minHeight: 'calc(100vh - 80px)',
          bgcolor: '#f5f5f5',
          py: 4
        }}
      >
        <Container maxWidth="lg">
          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 2,
                  fontWeight: 700,
                  color: '#143151'
                }}
              >
                Practice Efficiency Grader
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  color: '#666',
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                Evaluate your practice's efficiency and discover opportunities for improvement
              </Typography>

              <Grid container spacing={4}>
                {questions.map((question, index) => (
                  <Grid item xs={12} key={question.id}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        border: '1px solid #e0e0e0'
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: '#143151'
                        }}
                      >
                        {index + 1}. {question.question}
                      </Typography>
                      
                      <ModernSlider
                        value={responses[question.id]}
                        onChange={(value) => handleSliderChange(question.id, value)}
                        min={question.min}
                        max={question.max}
                        unit={question.unit}
                        labels={question.labels}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                  onClick={handleCalculate}
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #143151 0%, #387E89 100%)',
                    color: 'white',
                    px: 6,
                    py: 2,
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0f2642 0%, #2d6b75 100%)',
                    }
                  }}
                >
                  Calculate My Efficiency Score
                </Button>
              </Box>
            </motion.div>
          ) : (
            <Fade in={showResults}>
              <div>
                <Grid container spacing={4}>
                  {/* Score Section - Mobile: Above, Desktop: Left */}
                  <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          textAlign: 'center',
                          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                          border: '2px solid #e0e0e0'
                        }}
                      >
                        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: '#143151' }}>
                          Your Efficiency Score
                        </Typography>
                        
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        >
                          <Typography
                            variant="h1"
                            sx={{
                              fontSize: '4rem',
                              fontWeight: 800,
                              color: getScoreColor(score),
                              mb: 2
                            }}
                          >
                            {score}
                          </Typography>
                        </motion.div>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#666',
                            mb: 3,
                            fontWeight: 500
                          }}
                        >
                          {getScoreDescription(score)}
                        </Typography>
                        
                        <Box
                          sx={{
                            width: '100%',
                            height: 8,
                            bgcolor: '#e0e0e0',
                            borderRadius: 4,
                            overflow: 'hidden',
                            mb: 2
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ delay: 0.5, duration: 1 }}
                            style={{
                              height: '100%',
                              background: `linear-gradient(90deg, ${getScoreColor(score)}, ${getScoreColor(score)}dd)`,
                              borderRadius: 4
                            }}
                          />
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>

                  {/* Form Section - Mobile: Below, Desktop: Right */}
                  <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 2 } }}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          border: '2px solid #e0e0e0'
                        }}
                      >
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#143151' }}>
                          Get Your Personalized Report
                        </Typography>
                        
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          />
                          
                          <TextField
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            fullWidth
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                          
                          <TextField
                            label="Practice Name"
                            variant="outlined"
                            fullWidth
                            value={formData.practice}
                            onChange={(e) => setFormData(prev => ({ ...prev, practice: e.target.value }))}
                          />
                          
                          <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                              background: 'linear-gradient(135deg, #143151 0%, #387E89 100%)',
                              color: 'white',
                              py: 2,
                              borderRadius: 2,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              mt: 2,
                              '&:hover': {
                                background: 'linear-gradient(135deg, #0f2642 0%, #2d6b75 100%)',
                              }
                            }}
                          >
                            Get My Detailed Report
                          </Button>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                </Grid>
              </div>
            </Fade>
          )}
        </Container>
      </Box>
    </>
  );
}
