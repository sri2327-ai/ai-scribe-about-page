import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How often do you find your staff spending excessive time on manual tasks that could be automated?',
    options: ['Rarely', 'Sometimes', 'Often', 'Very Often'],
    correctAnswer: 'Very Often',
  },
  {
    id: 2,
    text: 'What percentage of patient inquiries are resolved on the first call or interaction?',
    options: ['>90%', '70-90%', '50-70%', '<50%'],
    correctAnswer: '<50%',
  },
  {
    id: 3,
    text: 'How would you rate the efficiency of your current patient scheduling process?',
    options: ['Very Efficient', 'Efficient', 'Neutral', 'Inefficient', 'Very Inefficient'],
    correctAnswer: 'Very Inefficient',
  },
  {
    id: 4,
    text: 'To what extent is your practice leveraging technology to enhance patient engagement and communication?',
    options: ['Extensively', 'Moderately', 'Slightly', 'Not at all'],
    correctAnswer: 'Not at all',
  },
  {
    id: 5,
    text: 'How much time does your clinical staff spend on administrative tasks rather than direct patient care?',
    options: ['<20%', '20-40%', '40-60%', '>60%'],
    correctAnswer: '>60%',
  },
  {
    id: 6,
    text: 'How satisfied are your patients with the ease of accessing and understanding their healthcare information?',
    options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
    correctAnswer: 'Very Dissatisfied',
  },
  {
    id: 7,
    text: 'What is the average turnaround time for processing and submitting insurance claims?',
    options: ['<24 Hours', '1-3 Days', '3-7 Days', '>7 Days'],
    correctAnswer: '>7 Days',
  },
  {
    id: 8,
    text: 'How effective is your current system for tracking and managing patient follow-up appointments?',
    options: ['Very Effective', 'Effective', 'Neutral', 'Ineffective', 'Very Ineffective'],
    correctAnswer: 'Very Ineffective',
  },
  {
    id: 9,
    text: 'To what extent are you able to identify and address bottlenecks in your patient care workflow?',
    options: ['Extensively', 'Moderately', 'Slightly', 'Not at all'],
    correctAnswer: 'Not at all',
  },
  {
    id: 10,
    text: 'How well does your practice utilize data analytics to improve operational efficiency and patient outcomes?',
    options: ['Extensively', 'Moderately', 'Slightly', 'Not at all'],
    correctAnswer: 'Not at all',
  },
];

const PracticeEfficiencyGrader = () => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        correctAnswersCount++;
      }
    });
    setScore(correctAnswersCount);
    return correctAnswersCount;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setShowResults(true);
    window.scrollTo(0, 0);
  };

  const handleRetakeQuiz = () => {
    setAnswers(Array(questions.length).fill(''));
    setShowResults(false);
    setScore(0);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* S10.AI Logo Header */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'white',
          borderBottom: '1px solid #e0e0e0',
          py: 2,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #1e88e5, #26c6da)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '1.5rem', sm: '2rem' }
              }}
            >
              S10.AI
            </Typography>
          </Link>
        </Container>
      </Box>

      {/* Main Content with top margin to account for fixed header */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 2, sm: 4 },
          px: { xs: 1, sm: 2 },
          mt: '80px' // Add margin top to account for fixed header
        }}
      >
        <Container 
          maxWidth="md" 
          sx={{ 
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px', md: '800px' }
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: { xs: 2, sm: 4 },
              p: { xs: 3, sm: 4, md: 6 },
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              width: '100%'
            }}
          >
            {!showResults ? (
              <>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Assess Your Practice Efficiency
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'center', color: 'grey.700' }}>
                  Answer the following questions to evaluate the efficiency of your practice.
                </Typography>
                {questions.map((question, index) => (
                  <Box key={question.id} mb={3}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {index + 1}. {question.text}
                    </Typography>
                    <RadioGroup
                      name={`question-${question.id}`}
                      value={answers[index]}
                      onChange={(event) => handleAnswerChange(event, index)}
                    >
                      {question.options.map((option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                ))}
                <Box mt={4} display="flex" justifyContent="center">
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Get Your Efficiency Score
                  </Button>
                </Box>
              </>
            ) : (
              <Box textAlign="center">
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Your Practice Efficiency Score:
                </Typography>
                <Typography variant="h3" color={score >= 7 ? 'success.main' : (score >= 4 ? 'warning.main' : 'error.main')} gutterBottom>
                  {score} / {questions.length}
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'grey.700' }}>
                  {score >= 7
                    ? 'Your practice demonstrates high efficiency. Keep up the excellent work!'
                    : score >= 4
                      ? 'Your practice has moderate efficiency. There is room for improvement.'
                      : 'Your practice is facing significant efficiency challenges. Consider exploring automation solutions.'}
                </Typography>
                <Box mt={4} display="flex" justifyContent="center">
                  <Button variant="outlined" color="primary" onClick={handleRetakeQuiz}>
                    Retake Quiz
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PracticeEfficiencyGrader;
