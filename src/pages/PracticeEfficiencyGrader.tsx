import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ModernSlider } from '@/components/ui/modern-slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, RotateCcw, Download, Mail, Clock, Users, DollarSign, TrendingUp, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface Question {
  question: string;
  description: string;
  scale: number;
  labels: string[];
}

interface ScoreCategory {
  category: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const questions: Question[] = [
  {
    question: "How well-defined are your practice goals?",
    description: "Clear goals set the stage for efficient practice. Do you have specific, measurable objectives?",
    scale: 10,
    labels: ["Not at all", "Somewhat", "Very well"]
  },
  {
    question: "How focused are you during practice sessions?",
    description: "Distractions can derail progress. How well do you maintain concentration on the task at hand?",
    scale: 10,
    labels: ["Easily distracted", "Sometimes focused", "Always focused"]
  },
  {
    question: "How effectively do you use your practice time?",
    description: "Time is a precious resource. Are you making the most of each minute, or are there gaps in your approach?",
    scale: 10,
    labels: ["Ineffectively", "Moderately effective", "Very effective"]
  },
  {
    question: "How consistently do you practice?",
    description: "Regularity is key to skill development. How often do you engage in practice sessions?",
    scale: 10,
    labels: ["Rarely", "Sometimes", "Very consistently"]
  },
  {
    question: "How well do you adapt your practice based on feedback?",
    description: "Feedback is a compass guiding your improvement. How responsive are you to insights and suggestions?",
    scale: 10,
    labels: ["Not at all", "Somewhat", "Very well"]
  }
];

const scoreCategories: ScoreCategory[] = [
  {
    category: "Exceptional",
    description: "Your practice efficiency is outstanding! Keep refining your approach for continued growth.",
    icon: CheckCircle
  },
  {
    category: "Good",
    description: "Your practice habits are strong. Focus on consistency and targeted improvements.",
    icon: CheckCircle
  },
  {
    category: "Average",
    description: "There's room to optimize your practice. Identify areas for improvement and stay consistent.",
    icon: AlertCircle
  },
  {
    category: "Needs Improvement",
    description: "Your practice approach could benefit from adjustments. Focus on setting clear goals and seeking feedback.",
    icon: XCircle
  }
];

const calculateScore = (answers: number[]): number => {
  return answers.reduce((sum, answer) => sum + answer, 0);
};

const getScoreCategory = (score: number): string => {
  const percentage = (score / (questions.length * 10)) * 100;
  if (percentage >= 80) return scoreCategories[0].category;
  if (percentage >= 60) return scoreCategories[1].category;
  if (percentage >= 40) return scoreCategories[2].category;
  return scoreCategories[3].category;
};

const PracticeEfficiencyGrader: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [showReport, setShowReport] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);

  useEffect(() => {
    const calculatedScore = calculateScore(answers);
    setTotalScore(calculatedScore);
    setScorePercentage((calculatedScore / (questions.length * 10)) * 100);
  }, [answers]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    setShowReport(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(0));
    setShowReport(false);
    setContactForm({ name: '', email: '', message: '' });
    setFormSubmitted(false);
    setSubmissionError('');
  };

  const handleSliderChange = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
    setHasSelectedAnswer(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setSubmissionError('');
      } else {
        const errorData = await response.json();
        setSubmissionError(errorData.message || 'An error occurred while submitting the form.');
      }
    } catch (error: any) {
      setSubmissionError(error.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold">Practice Efficiency Grader</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
            <Button variant="secondary" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Unlock Your Practice Potential
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover how to optimize your practice sessions for maximum efficiency and skill development.
            </p>
          </section>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Questionnaire Section */}
            <div className="order-2 lg:order-1">
              <Card className="h-full shadow-lg border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {!showReport ? (
                    <div className="space-y-6 lg:space-y-8">
                      {/* Progress and Navigation */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs sm:text-sm px-3 py-1.5">
                            Question {currentQuestion + 1} of {questions.length}
                          </Badge>
                          <div className="flex-1 bg-muted rounded-full h-2 min-w-[100px]">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                            className="h-8 w-8 p-0"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleNext}
                            disabled={currentQuestion === questions.length - 1}
                            className="h-8 w-8 p-0"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Question */}
                      <div className="space-y-6 lg:space-y-8">
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 lg:mb-4 leading-tight">
                            {questions[currentQuestion]?.question}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {questions[currentQuestion]?.description}
                          </p>
                        </div>

                        {/* Slider - More prominent on mobile */}
                        <div className="space-y-4 lg:space-y-6 py-4 lg:py-6">
                          <ModernSlider
                            value={answers[currentQuestion] || 0}
                            onValueChange={(value) => handleSliderChange(currentQuestion, value)}
                            max={questions[currentQuestion]?.scale || 10}
                            step={1}
                            className="w-full"
                            labels={questions[currentQuestion]?.labels || []}
                          />
                          
                          {/* Current Value Display */}
                          <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                              <span className="text-sm text-muted-foreground">Selected:</span>
                              <span className="text-lg font-semibold text-primary">
                                {answers[currentQuestion] || 0}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button
                            variant="outline"
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                            className="flex-1 h-11"
                          >
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Previous
                          </Button>
                          <Button
                            onClick={handleNext}
                            disabled={currentQuestion === questions.length - 1}
                            className="flex-1 h-11"
                          >
                            Next
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>

                        {/* Finish Button - Only show on last question */}
                        {currentQuestion === questions.length - 1 && (
                          <Button
                            onClick={handleFinish}
                            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                          >
                            Complete Assessment
                            <CheckCircle className="ml-2 h-5 w-5" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Report Header */}
                      <div className="text-center space-y-3">
                        <h3 className="text-2xl font-semibold text-foreground">
                          Your Practice Efficiency Report
                        </h3>
                        <p className="text-muted-foreground">
                          Here's a breakdown of your practice efficiency based on your answers.
                        </p>
                      </div>

                      {/* Score Summary */}
                      <div className="flex items-center justify-between bg-secondary/10 rounded-lg p-4">
                        <div>
                          <div className="text-lg font-semibold text-foreground">
                            Total Score: {totalScore} / {questions.length * 10}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            You scored {Math.round(scorePercentage)}% on the efficiency scale.
                          </div>
                        </div>
                        <Badge variant="secondary">
                          {getScoreCategory(totalScore)}
                        </Badge>
                      </div>

                      {/* Category Analysis */}
                      <div className="space-y-4">
                        {scoreCategories.map((category, index) => {
                          if (getScoreCategory(totalScore) === category.category) {
                            return (
                              <div key={index} className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-full">
                                  <category.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-foreground">{category.category}</h4>
                                  <p className="text-sm text-muted-foreground">{category.description}</p>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={handleRestart}
                        >
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Retake Assessment
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Score and Form Section */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-24 space-y-6">
                {/* Current Score Card */}
                <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground">
                        Your Current Score
                      </h4>
                      <div className="relative">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                          {totalScore}
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground">
                          out of {questions.length * 10}
                        </div>
                      </div>
                      
                      {/* Progress Ring */}
                      <div className="flex justify-center">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-muted/20"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 40}`}
                              strokeDashoffset={`${2 * Math.PI * 40 * (1 - scorePercentage / 100)}`}
                              className="text-primary transition-all duration-500"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg sm:text-xl font-bold text-primary">
                              {Math.round(scorePercentage)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Snippet Card - Only show when user has selected an answer */}
                {hasSelectedAnswer && !showReport && (
                  <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground text-sm sm:text-base mb-2">
                              Quick Insight
                            </h5>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              Based on your current answers, you're on track for a {getScoreCategory(totalScore).toLowerCase()} efficiency score. 
                              Complete all questions for a detailed analysis and personalized recommendations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Contact Form */}
                <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">
                        Contact Us
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Have questions or need personalized advice? Reach out to us!
                      </p>
                      {!formSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={contactForm.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={contactForm.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Input
                              as="textarea"
                              id="message"
                              name="message"
                              value={contactForm.message}
                              onChange={handleInputChange}
                              rows={4}
                              required
                            />
                          </div>
                          {submissionError && (
                            <div className="text-red-500 text-sm">{submissionError}</div>
                          )}
                          <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                          </Button>
                        </form>
                      ) : (
                        <div className="text-green-500 font-semibold">
                          Thank you for your message! We'll get back to you soon.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PracticeEfficiencyGrader;
