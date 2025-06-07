
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ModernSlider } from '@/components/ui/modern-slider';
import PEGHeader from '@/components/practice-efficiency-grader/PEGHeader';

const PracticeEfficiencyGrader = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      text: "How satisfied are you with your current clinical documentation process?",
      labels: ["Very Dissatisfied", "Neutral", "Very Satisfied"]
    },
    {
      id: 2,
      text: "How much time do you spend on documentation per patient?",
      labels: ["5+ minutes", "3-4 minutes", "1-2 minutes"]
    },
    {
      id: 3,
      text: "How often do you work overtime due to documentation?",
      labels: ["Always", "Sometimes", "Never"]
    },
    {
      id: 4,
      text: "How accurate is your current documentation?",
      labels: ["Poor", "Good", "Excellent"]
    },
    {
      id: 5,
      text: "How would you rate your practice's efficiency?",
      labels: ["Low", "Medium", "High"]
    }
  ];

  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      setIsCalculating(true);
      setTimeout(() => {
        const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
        const maxScore = questions.length * 4; // Assuming 0-4 scale
        const percentage = Math.round((totalScore / maxScore) * 100);
        setScore(percentage);
        setIsCalculating(false);
        setShowResults(true);
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[currentQuestion] ?? 2;

  if (isCalculating) {
    return (
      <>
        <PEGHeader />
        <Box className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#387E89] mx-auto mb-6"></div>
            <Typography variant="h4" className="text-[#143151] font-bold">
              Calculating your score...
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              Please wait while we analyze your responses
            </Typography>
          </div>
        </Box>
      </>
    );
  }

  if (showResults) {
    return (
      <>
        <PEGHeader />
        <Box className="min-h-screen bg-white">
          <Container maxWidth="lg" className="py-8">
            {/* Mobile Layout: Score above, Form below */}
            <div className="block md:hidden">
              {/* Score Card for Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-6 text-white text-center mb-6"
              >
                <Typography variant="h4" className="font-bold mb-2">
                  Your Efficiency Score
                </Typography>
                <Typography variant="h2" className="font-bold mb-2">
                  {score}%
                </Typography>
                <Typography variant="body1">
                  {score >= 80 ? "Excellent efficiency!" : 
                   score >= 60 ? "Good efficiency with room for improvement" : 
                   "Significant improvement opportunities"}
                </Typography>
              </motion.div>

              {/* Form for Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <Typography variant="h5" className="font-bold mb-4 text-[#143151]">
                  Improve Your Score with S10.AI
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-6">
                  See how our AI solutions can boost your practice efficiency.
                </Typography>
                <Button
                  variant="contained"
                  className="w-full py-3"
                  style={{ 
                    background: 'linear-gradient(to right, #143151, #387E89)',
                    color: 'white'
                  }}
                >
                  Book A Demo
                </Button>
              </motion.div>
            </div>

            {/* Desktop Layout: Side by side */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl border border-gray-200 p-8"
              >
                <Typography variant="h5" className="font-bold mb-4 text-[#143151]">
                  Improve Your Score with S10.AI
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-6">
                  See how our AI solutions can boost your practice efficiency.
                </Typography>
                <Button
                  variant="contained"
                  className="w-full py-3"
                  style={{ 
                    background: 'linear-gradient(to right, #143151, #387E89)',
                    color: 'white'
                  }}
                >
                  Book A Demo
                </Button>
              </motion.div>

              {/* Score Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-8 text-white text-center"
              >
                <Typography variant="h4" className="font-bold mb-4">
                  Your Efficiency Score
                </Typography>
                <Typography variant="h1" className="font-bold mb-4">
                  {score}%
                </Typography>
                <Typography variant="h6">
                  {score >= 80 ? "Excellent efficiency!" : 
                   score >= 60 ? "Good efficiency with room for improvement" : 
                   "Significant improvement opportunities"}
                </Typography>
              </motion.div>
            </div>
          </Container>
        </Box>
      </>
    );
  }

  return (
    <>
      <PEGHeader />
      <Box className="min-h-screen bg-white">
        <Container maxWidth="md" className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-gray-200 p-8"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body2" className="text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                </Typography>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="h5" className="font-bold mb-8 text-[#143151]">
                  {questions[currentQuestion].id}. {questions[currentQuestion].text}
                </Typography>

                <div className="mb-8">
                  <ModernSlider
                    value={currentAnswer}
                    onChange={handleAnswerChange}
                    min={0}
                    max={4}
                    unit=""
                    labels={questions[currentQuestion].labels}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outlined"
                className="px-6 py-2"
                style={{ 
                  borderColor: currentQuestion === 0 ? '#ccc' : '#143151',
                  color: currentQuestion === 0 ? '#ccc' : '#143151'
                }}
              >
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                variant="contained"
                className="px-6 py-2"
                style={{ 
                  background: answers[currentQuestion] !== undefined 
                    ? 'linear-gradient(to right, #143151, #387E89)' 
                    : '#ccc',
                  color: 'white'
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Calculate Score' : 'Next'}
              </Button>
            </div>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default PracticeEfficiencyGrader;
