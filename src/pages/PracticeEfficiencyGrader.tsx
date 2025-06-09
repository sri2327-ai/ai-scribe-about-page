import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModernSlider } from "@/components/ui/modern-slider";
import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingUp, Users, Calendar, FileText, Phone, MessageSquare } from "lucide-react";

interface Question {
  question: string;
  labels: string[];
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  practiceSize: string;
}

const questions: Question[] = [
  {
    question: "How efficiently are patient appointments scheduled and managed?",
    labels: ["Chaotic", "Inefficient", "Average", "Good", "Optimized"]
  },
  {
    question: "How effectively is patient data captured and integrated into your EHR?",
    labels: ["Manual", "Fragmented", "Some Automation", "Integrated", "Fully Automated"]
  },
  {
    question: "How streamlined is your patient communication process?",
    labels: ["Ad Hoc", "Basic", "Organized", "Proactive", "Personalized"]
  },
  {
    question: "How optimized is your billing and coding process?",
    labels: ["Error-Prone", "Reactive", "Standard", "Efficient", "AI-Powered"]
  },
  {
    question: "How well are administrative tasks automated?",
    labels: ["Manual", "Some Automation", "Good", "Advanced", "Fully Automated"]
  }
];

const PracticeEfficiencyGrader = () => {
  const [responses, setResponses] = useState<{[key: number]: number}>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: '',
    lastName: '',
    email: '',
    practiceSize: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleResponseChange = (index: number, value: number) => {
    setResponses(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateEfficiencyScore = () => {
    const totalQuestions = Object.keys(responses).length;
    const answeredQuestions = Object.values(responses).filter(value => value !== undefined).length;
    
    if (answeredQuestions === 0) return 0;
    
    const averageScore = Object.values(responses).reduce((sum, value) => sum + (value || 0), 0) / answeredQuestions;
    return Math.round(averageScore);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-500 to-green-600';
    if (score >= 60) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const currentScore = calculateEfficiencyScore();
  const totalQuestions = Object.keys(responses).length;
  const answeredQuestions = Object.values(responses).filter(value => value !== undefined).length;
  const isFormComplete = answeredQuestions === totalQuestions && contactInfo.email && contactInfo.firstName && contactInfo.lastName;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/2ddb185a-4a0d-480a-a8cc-9934b8856753.png" 
                alt="S10.AI Logo" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Practice Efficiency Grader
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how S10.AI can transform your practice efficiency. Answer a few questions to get your personalized efficiency score and improvement recommendations.
          </p>
        </motion.div>

        {/* Main Content Grid - Mobile First Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mobile: Score Card First, Desktop: Form First */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white shadow-xl border-0 h-fit">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Rate Your Practice Efficiency
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    {!isFormComplete ? "Complete the form below to view your complete efficiency study" : "Your personalized efficiency assessment"}
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {questions.map((question, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{question.question}</h3>
                          <ModernSlider
                            value={responses[index] || 0}
                            onChange={(value) => handleResponseChange(index, value)}
                            min={0}
                            max={100}
                            unit="Efficiency"
                            labels={question.labels}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Contact Information Form */}
                  <div className="border-t pt-8 space-y-6" data-contact-form>
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                      Get Your Complete Efficiency Study
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={contactInfo.firstName}
                          onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                          placeholder="Enter your first name"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={contactInfo.lastName}
                          onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                          placeholder="Enter your last name"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        placeholder="Enter your email address"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="practiceSize" className="text-sm font-medium text-gray-700">
                        Practice Size (Optional)
                      </Label>
                      <Input
                        id="practiceSize"
                        type="text"
                        value={contactInfo.practiceSize}
                        onChange={(e) => setContactInfo({...contactInfo, practiceSize: e.target.value})}
                        placeholder="e.g., 5 providers, 10 staff"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <Button 
                      onClick={handleSubmit}
                      disabled={!isFormComplete}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Generate My Efficiency Report
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                    
                    {!isFormComplete && (
                      <p className="text-sm text-gray-500 text-center">
                        Please fill in all required fields and answer all questions to generate your report
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Mobile: Efficiency Score Second, Desktop: Score Second */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-8"
            >
              <Card className="bg-white shadow-xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Your Current Efficiency Score
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Based on {answeredQuestions} of {totalQuestions} questions answered
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Score Display */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r ${getScoreGradient(currentScore)} shadow-lg mb-4`}>
                      <span className="text-4xl font-bold text-white">{currentScore}</span>
                    </div>
                    <div className={`text-2xl font-bold ${getScoreColor(currentScore)} mb-2`}>
                      {currentScore >= 80 ? 'Excellent' : currentScore >= 60 ? 'Good' : 'Needs Improvement'}
                    </div>
                    <p className="text-gray-600">
                      Practice Efficiency Score
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{answeredQuestions}/{totalQuestions} questions</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(answeredQuestions / totalQuestions) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Quick Insights */}
                  {answeredQuestions > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Quick Insights:</h4>
                      <div className="space-y-3">
                        {currentScore < 60 && (
                          <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-red-800">High Improvement Potential</p>
                              <p className="text-sm text-red-600">Your practice could benefit significantly from AI automation</p>
                            </div>
                          </div>
                        )}
                        
                        {currentScore >= 60 && currentScore < 80 && (
                          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                            <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-yellow-800">Moderate Efficiency</p>
                              <p className="text-sm text-yellow-600">Some areas could be optimized with AI assistance</p>
                            </div>
                          </div>
                        )}
                        
                        {currentScore >= 80 && (
                          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-green-800">Great Efficiency</p>
                              <p className="text-sm text-green-600">Your practice is running well, AI can help optimize further</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA for incomplete form */}
                  {!isFormComplete && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-800 mb-1">Get Your Complete Study</p>
                          <p className="text-sm text-blue-600 mb-3">
                            Fill out the form to receive a detailed efficiency analysis with personalized recommendations.
                          </p>
                          <Button 
                            onClick={() => {
                              const formSection = document.querySelector('[data-contact-form]');
                              formSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            variant="outline" 
                            size="sm"
                            className="border-blue-300 text-blue-700 hover:bg-blue-100"
                          >
                            Complete Assessment
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 space-y-8"
          >
            {/* Detailed Analysis */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Your Personalized Efficiency Analysis
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Based on your responses, here's how S10.AI can transform your practice
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-blue-900 mb-1">$127K</div>
                    <div className="text-sm text-blue-700">Potential Annual Savings</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-green-900 mb-1">15hrs</div>
                    <div className="text-sm text-green-700">Time Saved Per Week</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-purple-900 mb-1">40%</div>
                    <div className="text-sm text-purple-700">Efficiency Improvement</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-orange-900 mb-1">25%</div>
                    <div className="text-sm text-orange-700">Revenue Increase</div>
                  </div>
                </div>

                {/* Specific Recommendations */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Recommended S10.AI Solutions for Your Practice:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">AI Phone Assistant (Bravo)</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Automate appointment scheduling, patient inquiries, and follow-ups with our intelligent phone system.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 24/7 patient support</li>
                            <li>• Automatic appointment booking</li>
                            <li>• Prescription refill requests</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <FileText className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">AI Documentation (Crush)</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Transform clinical documentation with AI-powered note generation and EHR integration.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Real-time documentation</li>
                            <li>• EHR integration</li>
                            <li>• Clinical decision support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <MessageSquare className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Patient Communication Hub</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Streamline patient communications with automated messaging and follow-up systems.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Automated reminders</li>
                            <li>• Pre-visit preparation</li>
                            <li>• Post-visit follow-up</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <Calendar className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Smart Scheduling</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Optimize your schedule with AI-powered booking and resource management.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Intelligent slot optimization</li>
                            <li>• No-show prediction</li>
                            <li>• Resource allocation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Ready to Transform Your Practice?</h3>
                  <p className="text-blue-700 mb-6">
                    Schedule a personalized demo to see how S10.AI can specifically address your practice's efficiency challenges.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Schedule Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                      Download Full Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PracticeEfficiencyGrader;
