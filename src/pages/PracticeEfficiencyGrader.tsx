import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const PracticeEfficiencyGrader = () => {
  const [currentStep, setCurrentStep] = useState('quiz');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceSize: '',
    specialty: '',
    currentChallenges: ''
  });

  // Enhanced questions with balanced scoring (0-4 points each for consistency)
  const questions = [
    {
      id: 'q1',
      text: 'How much time do you spend on documentation per patient encounter?',
      options: [
        { value: 4, text: 'Less than 5 minutes per patient' },
        { value: 3, text: '5-10 minutes per patient' },
        { value: 2, text: '10-15 minutes per patient' },
        { value: 1, text: '15-20 minutes per patient' },
        { value: 0, text: 'More than 20 minutes per patient' }
      ]
    },
    {
      id: 'q2',
      text: 'How often do you stay late to complete documentation?',
      options: [
        { value: 4, text: 'Never' },
        { value: 3, text: 'Rarely (1-2 times per month)' },
        { value: 2, text: 'Sometimes (1-2 times per week)' },
        { value: 1, text: 'Often (3-4 times per week)' },
        { value: 0, text: 'Always (daily)' }
      ]
    },
    {
      id: 'q3',
      text: 'How would you rate your current EHR system\'s usability?',
      options: [
        { value: 4, text: 'Excellent - Very intuitive and efficient' },
        { value: 3, text: 'Good - Generally easy to use' },
        { value: 2, text: 'Fair - Some difficulties but manageable' },
        { value: 1, text: 'Poor - Frequently frustrating' },
        { value: 0, text: 'Very Poor - Major impediment to workflow' }
      ]
    },
    {
      id: 'q4',
      text: 'How many patients can you comfortably see per day?',
      options: [
        { value: 4, text: '25+ patients comfortably' },
        { value: 3, text: '20-24 patients comfortably' },
        { value: 2, text: '15-19 patients with some stress' },
        { value: 1, text: '10-14 patients with significant stress' },
        { value: 0, text: 'Less than 10 patients' }
      ]
    },
    {
      id: 'q5',
      text: 'How often do you experience burnout symptoms?',
      options: [
        { value: 4, text: 'Never' },
        { value: 3, text: 'Rarely' },
        { value: 2, text: 'Sometimes' },
        { value: 1, text: 'Often' },
        { value: 0, text: 'Always' }
      ]
    },
    {
      id: 'q6',
      text: 'How much of your revenue is lost due to incomplete documentation?',
      options: [
        { value: 4, text: '0% - All encounters properly documented' },
        { value: 3, text: '1-5% revenue loss' },
        { value: 2, text: '6-10% revenue loss' },
        { value: 1, text: '11-15% revenue loss' },
        { value: 0, text: 'More than 15% revenue loss' }
      ]
    },
    {
      id: 'q7',
      text: 'How quickly can you access patient information during encounters?',
      options: [
        { value: 4, text: 'Instantly - All information readily available' },
        { value: 3, text: 'Within 30 seconds' },
        { value: 2, text: '1-2 minutes with some searching' },
        { value: 1, text: '2-5 minutes with significant searching' },
        { value: 0, text: 'More than 5 minutes or frequently unavailable' }
      ]
    },
    {
      id: 'q8',
      text: 'How satisfied are your patients with appointment scheduling?',
      options: [
        { value: 4, text: 'Very satisfied - Easy online scheduling' },
        { value: 3, text: 'Satisfied - Generally smooth process' },
        { value: 2, text: 'Neutral - Some minor issues' },
        { value: 1, text: 'Dissatisfied - Frequent complaints' },
        { value: 0, text: 'Very dissatisfied - Major scheduling problems' }
      ]
    },
    {
      id: 'q9',
      text: 'How often do you miss important follow-up tasks?',
      options: [
        { value: 4, text: 'Never - Excellent task management' },
        { value: 3, text: 'Rarely - Good systems in place' },
        { value: 2, text: 'Sometimes - Occasional oversights' },
        { value: 1, text: 'Often - Frequently behind on tasks' },
        { value: 0, text: 'Always - Poor task management' }
      ]
    },
    {
      id: 'q10',
      text: 'How well does your practice manage billing and coding?',
      options: [
        { value: 4, text: 'Excellent - Automated and accurate' },
        { value: 3, text: 'Good - Mostly accurate with minimal errors' },
        { value: 2, text: 'Fair - Some errors requiring correction' },
        { value: 1, text: 'Poor - Frequent errors and delays' },
        { value: 0, text: 'Very Poor - Major billing inefficiencies' }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    
    // Ensure all questions are answered
    if (answeredQuestions !== totalQuestions) {
      alert(`Please answer all ${totalQuestions} questions before calculating your score.`);
      return null;
    }

    // Calculate total score (max possible: 40 points, min possible: 0 points)
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const maxPossibleScore = totalQuestions * 4; // 4 points max per question
    const percentage = Math.round((totalScore / maxPossibleScore) * 100);

    return {
      totalScore,
      maxPossibleScore,
      percentage,
      answeredQuestions,
      totalQuestions
    };
  };

  const getGrade = (percentage: number) => {
    // Improved grade distribution based on percentage
    if (percentage >= 90) return { grade: 'A+', description: 'Exceptional Efficiency', color: 'bg-green-500' };
    if (percentage >= 80) return { grade: 'A', description: 'High Efficiency', color: 'bg-green-400' };
    if (percentage >= 70) return { grade: 'B+', description: 'Good Efficiency', color: 'bg-blue-500' };
    if (percentage >= 60) return { grade: 'B', description: 'Above Average', color: 'bg-blue-400' };
    if (percentage >= 50) return { grade: 'C+', description: 'Average Efficiency', color: 'bg-yellow-500' };
    if (percentage >= 40) return { grade: 'C', description: 'Below Average', color: 'bg-yellow-400' };
    if (percentage >= 30) return { grade: 'D+', description: 'Low Efficiency', color: 'bg-orange-500' };
    if (percentage >= 20) return { grade: 'D', description: 'Poor Efficiency', color: 'bg-orange-400' };
    return { grade: 'F', description: 'Critical Inefficiency', color: 'bg-red-500' };
  };

  const getRecommendations = (percentage: number) => {
    if (percentage >= 80) {
      return [
        'Your practice shows excellent efficiency! Consider sharing best practices with peers.',
        'Look into advanced AI features to maintain your competitive edge.',
        'Focus on continuous improvement and staff training.'
      ];
    } else if (percentage >= 60) {
      return [
        'Good foundation with room for improvement in key areas.',
        'Consider implementing AI-powered documentation tools.',
        'Focus on streamlining your most time-consuming processes.'
      ];
    } else if (percentage >= 40) {
      return [
        'Significant opportunities for efficiency improvements.',
        'AI-powered solutions could dramatically reduce documentation time.',
        'Consider workflow optimization and staff training programs.'
      ];
    } else {
      return [
        'Critical need for efficiency improvements across multiple areas.',
        'AI-powered practice management could provide immediate relief.',
        'Urgent need for workflow redesign and technology upgrades.'
      ];
    }
  };

  const handleSubmit = () => {
    const scoreData = calculateScore();
    if (!scoreData) return; // Don't proceed if not all questions answered

    setCurrentStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('report');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scoreData = calculateScore();
  const gradeInfo = scoreData ? getGrade(scoreData.percentage) : null;
  const recommendations = scoreData ? getRecommendations(scoreData.percentage) : [];

  // Calculate progress percentage for the quiz
  const quizProgress = Math.round((Object.keys(answers).length / questions.length) * 100);

  if (currentStep === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Practice Efficiency Grader
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover how AI can transform your practice efficiency
            </p>
            <div className="mb-6">
              <Progress value={quizProgress} className="w-full max-w-md mx-auto" />
              <p className="text-sm text-gray-500 mt-2">
                {Object.keys(answers).length} of {questions.length} questions completed
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <Card key={question.id} className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {index + 1}. {question.text}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={answers[question.id]?.toString() || ''}
                    onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                  >
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value.toString()} id={`${question.id}-${option.value}`} />
                        <Label htmlFor={`${question.id}-${option.value}`} className="flex-1 cursor-pointer">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={handleSubmit} 
              size="lg"
              disabled={Object.keys(answers).length < questions.length}
              className="px-8 py-3"
            >
              Calculate My Efficiency Score
            </Button>
            {Object.keys(answers).length < questions.length && (
              <p className="text-sm text-gray-500 mt-2">
                Please answer all questions to calculate your score
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {scoreData && gradeInfo && (
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${gradeInfo.color} text-white text-2xl font-bold mb-4 mx-auto`}>
                  {gradeInfo.grade}
                </div>
                <CardTitle className="text-2xl">Your Efficiency Score: {scoreData.percentage}%</CardTitle>
                <p className="text-gray-600">{gradeInfo.description}</p>
              </CardHeader>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Get Your Detailed Report</CardTitle>
              <p className="text-gray-600">
                Enter your information to receive a personalized efficiency improvement plan
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>

                <div>
                  <Label htmlFor="practiceName">Practice Name *</Label>
                  <Input
                    id="practiceName"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="practiceSize">Practice Size *</Label>
                  <Input
                    id="practiceSize"
                    name="practiceSize"
                    placeholder="e.g., 1-5 providers, 6-10 providers"
                    value={formData.practiceSize}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specialty">Medical Specialty *</Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="currentChallenges">Current Challenges</Label>
                  <Textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleFormChange}
                    rows={4}
                    placeholder="Describe your biggest efficiency challenges..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Get My Detailed Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Report step
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Practice Efficiency Report
          </h1>
          <p className="text-xl text-gray-600">
            Personalized recommendations for {formData.firstName} {formData.lastName}
          </p>
        </div>

        {scoreData && gradeInfo && (
          <>
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${gradeInfo.color} text-white text-3xl font-bold mb-4 mx-auto`}>
                  {gradeInfo.grade}
                </div>
                <CardTitle className="text-3xl mb-2">
                  Efficiency Score: {scoreData.percentage}%
                </CardTitle>
                <p className="text-xl text-gray-600">{gradeInfo.description}</p>
                <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500">
                  <span>Score: {scoreData.totalScore}/{scoreData.maxPossibleScore}</span>
                  <span>•</span>
                  <span>Questions Answered: {scoreData.answeredQuestions}/{scoreData.totalQuestions}</span>
                </div>
              </CardHeader>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recommendations for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button onClick={() => window.location.reload()} variant="outline" className="mr-4">
                Take Quiz Again
              </Button>
              <Button onClick={() => window.open('/contact', '_blank')}>
                Schedule a Demo
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PracticeEfficiencyGrader;
