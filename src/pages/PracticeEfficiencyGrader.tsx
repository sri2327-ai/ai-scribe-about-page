
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ModernSlider } from "@/components/ui/modern-slider";
import { ArrowRight, Award, TrendingUp, Clock, Users, DollarSign, CheckCircle2, Star, Phone, Mail, Calendar } from "lucide-react";
import { motion } from 'framer-motion';

interface QuizAnswers {
  providers: number;
  patients: number;
  documentation: number;
  efficiency: number;
  burnout: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  practiceName: string;
  jobTitle: string;
}

const PracticeEfficiencyGrader = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [answers, setAnswers] = useState<QuizAnswers>({
    providers: 5,
    patients: 20,
    documentation: 2,
    efficiency: 5,
    burnout: 3
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    practiceName: '',
    jobTitle: ''
  });

  const questions = [
    {
      id: 'providers' as keyof QuizAnswers,
      question: 'How many healthcare providers work in your practice?',
      min: 1,
      max: 50,
      unit: 'Providers',
      labels: ['1', '10', '20', '30', '40', '50+']
    },
    {
      id: 'patients' as keyof QuizAnswers,
      question: 'How many patients do you see per day on average?',
      min: 5,
      max: 100,
      unit: 'Patients/Day',
      labels: ['5', '25', '50', '75', '100+']
    },
    {
      id: 'documentation' as keyof QuizAnswers,
      question: 'How many hours per day do you spend on documentation?',
      min: 1,
      max: 8,
      unit: 'Hours/Day',
      labels: ['1h', '2h', '4h', '6h', '8h+']
    },
    {
      id: 'efficiency' as keyof QuizAnswers,
      question: 'How would you rate your current practice efficiency?',
      min: 1,
      max: 10,
      unit: 'Efficiency Rating',
      labels: ['Poor', 'Average', 'Good', 'Very Good', 'Excellent']
    },
    {
      id: 'burnout' as keyof QuizAnswers,
      question: 'How often do you experience work-related stress or burnout?',
      min: 1,
      max: 5,
      unit: 'Stress Level',
      labels: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    }
  ];

  const handleAnswerChange = (questionId: keyof QuizAnswers, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const { providers, patients, documentation, efficiency, burnout } = answers;
    
    let score = 50;
    
    if (providers > 10) score += 10;
    if (patients > 30) score += 15;
    if (documentation > 3) score -= 20;
    if (efficiency < 6) score -= 15;
    if (burnout > 3) score -= 25;
    
    return Math.max(0, Math.min(100, score));
  };

  const getScoreCategory = (score: number) => {
    if (score >= 80) return { label: 'Highly Efficient', color: 'text-green-600', bgColor: 'bg-green-50' };
    if (score >= 60) return { label: 'Moderately Efficient', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    return { label: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-50' };
  };

  const renderIntro = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center p-4">
      <motion.div 
        className="max-w-4xl mx-auto text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <Award className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Practice Efficiency<br />Grader
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover how efficient your medical practice really is and unlock insights to improve patient care while reducing administrative burden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Clock className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">5-Minute Assessment</h3>
            <p className="text-sm opacity-80">Quick evaluation of your current workflow</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Personalized Insights</h3>
            <p className="text-sm opacity-80">Tailored recommendations for your practice</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Award className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Benchmarking Report</h3>
            <p className="text-sm opacity-80">See how you compare to industry standards</p>
          </div>
        </div>

        <Button 
          onClick={() => setCurrentStep('quiz')}
          size="lg"
          className="bg-white text-[#143151] hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Start Assessment
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );

  const renderQuiz = () => {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center p-4">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 shadow-2xl bg-white">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-[#143151]">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#143151] mb-8 leading-relaxed">
              {question.question}
            </h2>

            <div className="mb-12">
              <ModernSlider
                value={answers[question.id]}
                onChange={(value) => handleAnswerChange(question.id, value)}
                min={question.min}
                max={question.max}
                unit={question.unit}
                labels={question.labels}
              />
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-6"
              >
                Previous
              </Button>
              
              {currentQuestion === questions.length - 1 ? (
                <Button 
                  onClick={() => setCurrentStep('scoreForm')}
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90 px-8"
                >
                  View Results
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90 px-8"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    );
  };

  const renderScoreForm = () => {
    const score = calculateScore();
    const category = getScoreCategory(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#143151] to-[#387E89] p-4">
        <div className="max-w-6xl mx-auto py-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Score Preview */}
            <Card className="p-8 shadow-2xl bg-white">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${category.bgColor} ${category.color} font-semibold mb-4`}>
                  <Star className="w-4 h-4 mr-2" />
                  {category.label}
                </div>
                <div className="text-6xl font-bold text-[#143151] mb-2">{score}</div>
                <p className="text-gray-600">Efficiency Score</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Quick 5-minute assessment completed</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personalized efficiency analysis ready</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Industry benchmarking available</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Unlock Your Complete Report</h3>
                <p className="text-blue-700 text-sm">
                  Get detailed insights, improvement recommendations, and see how you compare to similar practices.
                </p>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-8 shadow-2xl bg-white">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#143151] mb-2">
                  Get Your Complete Benchmark Study
                </h2>
                <p className="text-gray-600">
                  Enter your details to receive your personalized efficiency report and improvement recommendations.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                setCurrentStep('report');
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="h-12 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="h-12 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="h-12 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-sm font-medium text-gray-700 mb-2 block">
                    Contact Number *
                  </Label>
                  <Input
                    id="contact"
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                    className="h-12 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="practiceName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Practice Name *
                  </Label>
                  <Input
                    id="practiceName"
                    type="text"
                    required
                    value={formData.practiceName}
                    onChange={(e) => setFormData(prev => ({ ...prev, practiceName: e.target.value }))}
                    className="h-12 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]"
                    placeholder="Your Practice Name"
                  />
                </div>

                <div>
                  <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 mb-2 block">
                    Job Title *
                  </Label>
                  <Select required onValueChange={(value) => setFormData(prev => ({ ...prev, jobTitle: value }))}>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physician">Physician</SelectItem>
                      <SelectItem value="nurse-practitioner">Nurse Practitioner</SelectItem>
                      <SelectItem value="physician-assistant">Physician Assistant</SelectItem>
                      <SelectItem value="practice-manager">Practice Manager</SelectItem>
                      <SelectItem value="administrator">Administrator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90 text-lg font-semibold shadow-lg"
                >
                  View Complete Benchmark Study
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from S10.AI regarding your assessment results.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  };

  const renderReport = () => {
    const score = calculateScore();
    const category = getScoreCategory(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#143151] to-[#387E89]">
        <div className="flex h-screen">
          {/* Left side - Scrollable Report */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <motion.div 
                className="max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Header */}
                <Card className="p-8 mb-8 shadow-2xl bg-white">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#143151] mb-4">
                      Practice Efficiency Benchmark Report
                    </h1>
                    <p className="text-gray-600 mb-6">
                      Generated for {formData.firstName} {formData.lastName} at {formData.practiceName}
                    </p>
                    <div className={`inline-flex items-center px-6 py-3 rounded-full ${category.bgColor} ${category.color} font-bold text-lg`}>
                      <Award className="w-5 h-5 mr-2" />
                      Overall Score: {score}/100 - {category.label}
                    </div>
                  </div>
                </Card>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="p-6 text-center shadow-lg bg-white">
                    <Users className="w-8 h-8 text-[#387E89] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#143151]">{answers.providers}</div>
                    <p className="text-sm text-gray-600">Providers</p>
                  </Card>
                  <Card className="p-6 text-center shadow-lg bg-white">
                    <Clock className="w-8 h-8 text-[#387E89] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#143151]">{answers.patients}</div>
                    <p className="text-sm text-gray-600">Patients/Day</p>
                  </Card>
                  <Card className="p-6 text-center shadow-lg bg-white">
                    <TrendingUp className="w-8 h-8 text-[#387E89] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#143151]">{answers.documentation}h</div>
                    <p className="text-sm text-gray-600">Documentation Time</p>
                  </Card>
                  <Card className="p-6 text-center shadow-lg bg-white">
                    <Star className="w-8 h-8 text-[#387E89] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#143151]">{answers.efficiency}/10</div>
                    <p className="text-sm text-gray-600">Self-Rated Efficiency</p>
                  </Card>
                </div>

                {/* Detailed Analysis */}
                <Card className="p-8 mb-8 shadow-lg bg-white">
                  <h2 className="text-2xl font-bold text-[#143151] mb-6">Detailed Analysis</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#387E89] pl-6">
                      <h3 className="font-semibold text-[#143151] mb-2">Documentation Efficiency</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Based on your responses, you spend {answers.documentation} hours daily on documentation. 
                        Industry best practices suggest that efficient practices typically spend 1-2 hours per day on 
                        documentation with the help of AI-powered tools.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#387E89] pl-6">
                      <h3 className="font-semibold text-[#143151] mb-2">Patient Volume Management</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your practice sees {answers.patients} patients per day. High-performing practices 
                        with similar patient volumes typically achieve 15-20% better efficiency through optimized 
                        workflows and automated documentation.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#387E89] pl-6">
                      <h3 className="font-semibold text-[#143151] mb-2">Burnout Prevention</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your stress level indicates potential for improvement. Practices using AI documentation 
                        solutions report 40% reduction in work-related stress and improved work-life balance.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Recommendations */}
                <Card className="p-8 mb-8 shadow-lg bg-white">
                  <h2 className="text-2xl font-bold text-[#143151] mb-6">Improvement Recommendations</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">Immediate Actions</h3>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                          <span className="text-sm">Implement AI-powered documentation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                          <span className="text-sm">Streamline patient intake processes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                          <span className="text-sm">Optimize scheduling workflows</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-semibold text-green-900 mb-3">Long-term Strategy</h3>
                      <ul className="space-y-2 text-green-800">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mt-1 mr-2 text-green-600" />
                          <span className="text-sm">Integrate comprehensive EHR solutions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mt-1 mr-2 text-green-600" />
                          <span className="text-sm">Implement practice analytics</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mt-1 mr-2 text-green-600" />
                          <span className="text-sm">Staff training and optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Industry Comparison */}
                <Card className="p-8 shadow-lg bg-white">
                  <h2 className="text-2xl font-bold text-[#143151] mb-6">Industry Benchmark Comparison</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Documentation Time</span>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Industry Average: 3.2h</span>
                        <span className="font-bold text-[#143151]">Your Practice: {answers.documentation}h</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Patient Satisfaction</span>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Industry Average: 7.8/10</span>
                        <span className="font-bold text-[#143151]">Projected: {Math.min(10, (score / 10) + 6).toFixed(1)}/10</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Provider Satisfaction</span>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Industry Average: 6.5/10</span>
                        <span className="font-bold text-[#143151]">Current: {answers.efficiency}/10</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Right side - Fixed CTA */}
          <div className="w-80 bg-white shadow-2xl">
            <div className="p-8 h-full flex flex-col">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#143151] mb-2">Ready to Improve?</h3>
                <p className="text-gray-600 text-sm">
                  See how S10.AI can help you achieve the efficiency improvements outlined in your report.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#143151] text-sm">Save 2-3 Hours Daily</h4>
                    <p className="text-xs text-gray-600">Reduce documentation time with AI</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#143151] text-sm">Increase Revenue</h4>
                    <p className="text-xs text-gray-600">See more patients, improve coding</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#143151] text-sm">Improve Satisfaction</h4>
                    <p className="text-xs text-gray-600">Better work-life balance</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90 font-semibold py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Demo
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
                  onClick={() => window.location.href = '/pricing'}
                >
                  View Pricing
                </Button>

                <div className="text-center pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center mb-2">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Questions? Call us</span>
                  </div>
                  <a href="tel:+1-800-S10-AI" className="text-[#387E89] font-semibold text-sm hover:underline">
                    1-800-S10-AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  switch (currentStep) {
    case 'intro':
      return renderIntro();
    case 'quiz':
      return renderQuiz();
    case 'scoreForm':
      return renderScoreForm();
    case 'report':
      return renderReport();
    default:
      return renderIntro();
  }
};

export default PracticeEfficiencyGrader;
