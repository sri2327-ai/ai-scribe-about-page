import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, Users, TrendingUp, FileText, Calendar, Phone, Mail, MapPin, Star, ArrowRight, Play } from 'lucide-react';

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString) => {
  if (!colorString) return null;
  const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (match) {
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
    };
  }
  return null;
};

// A simple SVG Play Icon
const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
);

const PracticeEfficiencyGrader = () => {
  // Hero section animation refs
  const canvasRef = useRef(null);
  const targetRef = useRef(null);
  const mousePosRef = useRef({ x: null, y: null });
  const ctxRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const resolvedCanvasColorsRef = useRef({
    strokeStyle: { r: 128, g: 128, b: 128 }, // Default mid-gray
  });

  // State variables
  const [currentStep, setCurrentStep] = useState('quiz');
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: ''
  });
  const [showReport, setShowReport] = useState(false);

  // Questions array
  const questions = [
    {
      id: 1,
      question: "How much time does your practice spend on documentation per patient visit?",
      options: [
        { text: "Less than 5 minutes", score: 10 },
        { text: "5-10 minutes", score: 8 },
        { text: "10-15 minutes", score: 6 },
        { text: "15-20 minutes", score: 4 },
        { text: "More than 20 minutes", score: 2 }
      ]
    },
    {
      id: 2,
      question: "How often do you experience documentation-related burnout?",
      options: [
        { text: "Never", score: 10 },
        { text: "Rarely", score: 8 },
        { text: "Sometimes", score: 6 },
        { text: "Often", score: 4 },
        { text: "Always", score: 2 }
      ]
    },
    {
      id: 3,
      question: "What percentage of your documentation is completed during patient visits?",
      options: [
        { text: "90-100%", score: 10 },
        { text: "70-89%", score: 8 },
        { text: "50-69%", score: 6 },
        { text: "30-49%", score: 4 },
        { text: "Less than 30%", score: 2 }
      ]
    },
    {
      id: 4,
      question: "How much after-hours time do you spend on documentation?",
      options: [
        { text: "None", score: 10 },
        { text: "Less than 30 minutes", score: 8 },
        { text: "30-60 minutes", score: 6 },
        { text: "1-2 hours", score: 4 },
        { text: "More than 2 hours", score: 2 }
      ]
    },
    {
      id: 5,
      question: "How satisfied are you with your current EHR system's efficiency?",
      options: [
        { text: "Very satisfied", score: 10 },
        { text: "Satisfied", score: 8 },
        { text: "Neutral", score: 6 },
        { text: "Dissatisfied", score: 4 },
        { text: "Very dissatisfied", score: 2 }
      ]
    },
    {
      id: 6,
      question: "How often do you need to revisit notes after patient visits for completion?",
      options: [
        { text: "Never", score: 10 },
        { text: "Rarely (10% of visits)", score: 8 },
        { text: "Sometimes (25% of visits)", score: 6 },
        { text: "Often (50% of visits)", score: 4 },
        { text: "Always (75%+ of visits)", score: 2 }
      ]
    },
    {
      id: 7,
      question: "How would you rate your practice's revenue cycle efficiency?",
      options: [
        { text: "Excellent", score: 10 },
        { text: "Good", score: 8 },
        { text: "Average", score: 6 },
        { text: "Below average", score: 4 },
        { text: "Poor", score: 2 }
      ]
    },
    {
      id: 8,
      question: "What percentage of patient appointments run on time?",
      options: [
        { text: "90-100%", score: 10 },
        { text: "75-89%", score: 8 },
        { text: "60-74%", score: 6 },
        { text: "45-59%", score: 4 },
        { text: "Less than 45%", score: 2 }
      ]
    },
    {
      id: 9,
      question: "How effectively does your practice handle patient communications?",
      options: [
        { text: "Very effectively", score: 10 },
        { text: "Effectively", score: 8 },
        { text: "Moderately", score: 6 },
        { text: "Ineffectively", score: 4 },
        { text: "Very ineffectively", score: 2 }
      ]
    },
    {
      id: 10,
      question: "How often do administrative tasks interfere with patient care?",
      options: [
        { text: "Never", score: 10 },
        { text: "Rarely", score: 8 },
        { text: "Sometimes", score: 6 },
        { text: "Often", score: 4 },
        { text: "Always", score: 2 }
      ]
    }
  ];

  // Hero section canvas animation setup
  useEffect(() => {
    const tempElement = document.createElement('div');
    tempElement.style.display = 'none';
    document.body.appendChild(tempElement);

    const updateResolvedColors = () => {
      tempElement.style.color = 'var(--foreground)';
      const computedFgColor = getComputedStyle(tempElement).color;
      const parsedFgColor = parseRgbColor(computedFgColor);
      if (parsedFgColor) {
        resolvedCanvasColorsRef.current.strokeStyle = parsedFgColor;
      } else {
        console.warn("Could not parse --foreground for canvas arrow. Using fallback.");
        const isDarkMode = document.documentElement.classList.contains('dark');
        resolvedCanvasColorsRef.current.strokeStyle = isDarkMode ? { r: 250, g: 250, b: 250 } : { r: 10, g: 10, b: 10 };
      }
    };
    updateResolvedColors();
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target === document.documentElement) {
          updateResolvedColors();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
      if (tempElement.parentNode) {
        tempElement.parentNode.removeChild(tempElement);
      }
    };
  }, []);

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

    const targetEl = targetRef.current;
    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;

    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
    const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;
    
    const r = Math.sqrt((x1 - x0)**2 + (y1 - y0)**2);
    const opacity = Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 500); 

    const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
    ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
    ctx.lineWidth = 2;

    // Draw curve
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.setLineDash([10, 5]);
    ctx.stroke();
    ctx.restore();

    // Draw arrowhead
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 10 * (ctx.lineWidth / 1.5); 
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle - Math.PI / 6),
      y1 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle + Math.PI / 6),
      y1 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !targetRef.current || currentStep !== 'quiz') return;

    ctxRef.current = canvas.getContext("2d");
    const ctx = ctxRef.current;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    updateCanvasSize();

    const animateLoop = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };
    
    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow, currentStep]);

  // Handle answer selection
  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  // Calculate score based on answers
  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
    const percentage = Math.round((totalScore / (questions.length * 10)) * 100);
    setScore(percentage);
    setCurrentStep('results');
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowReport(true);
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Render report if showReport is true
  if (showReport) {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex h-screen">
          <div className="w-1/2 bg-white p-6 overflow-y-auto border-r">
            <div className="max-w-2xl">
              <div className="mb-6">
                <img src="/api/placeholder/120/40" alt="S10.AI Logo" className="h-8 mb-4" />
                <h1 className="text-xl font-semibold text-gray-900 mb-2">Practice Efficiency Analysis Report</h1>
                <p className="text-sm text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-blue-900 mb-2">Executive Summary</h2>
                  <div className="flex items-center mb-3">
                    <div className="text-2xl font-bold text-blue-600 mr-3">{score}%</div>
                    <div className="text-sm text-gray-700">Overall Efficiency Score</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Your practice demonstrates {score >= 80 ? 'strong' : score >= 60 ? 'moderate' : 'significant room for'} efficiency 
                    in current operations with key opportunities for optimization through AI-powered automation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Findings</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-medium">Documentation Efficiency:</span> Based on your responses, implementing AI medical scribing could reduce documentation time by 60-80%.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-medium">Time Optimization:</span> Potential to reclaim 2-4 hours daily through workflow automation.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-medium">Revenue Impact:</span> Improved efficiency could increase patient throughput by 15-25%.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Detailed Analysis</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-900">Clinical Documentation</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Current documentation practices show inefficiencies that AI medical scribing can address. 
                        S10.AI's real-time transcription and intelligent note generation can reduce documentation 
                        burden by up to 80%, allowing more focus on patient care.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-gray-900">Workflow Optimization</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Administrative task automation through AI can streamline referrals, prescription management, 
                        and patient communications. Integration with existing EHR systems ensures seamless adoption.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-gray-900">Technology Integration</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        S10.AI's platform integrates with 300+ EHR systems, ensuring minimal disruption to current 
                        workflows while maximizing efficiency gains through intelligent automation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">1</div>
                      <div className="text-sm">
                        <span className="font-medium">Immediate:</span> Implement AI medical scribing for 20% time savings on documentation
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">2</div>
                      <div className="text-sm">
                        <span className="font-medium">Short-term:</span> Automate routine administrative tasks and patient communications
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">3</div>
                      <div className="text-sm">
                        <span className="font-medium">Long-term:</span> Full workflow integration for comprehensive practice optimization
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Expected ROI with S10.AI</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-green-800">Time Savings</div>
                      <div className="text-green-700">2-4 hours daily</div>
                    </div>
                    <div>
                      <div className="font-medium text-green-800">Revenue Increase</div>
                      <div className="text-green-700">15-25% potential</div>
                    </div>
                    <div>
                      <div className="font-medium text-green-800">Documentation Efficiency</div>
                      <div className="text-green-700">60-80% improvement</div>
                    </div>
                    <div>
                      <div className="font-medium text-green-800">Provider Satisfaction</div>
                      <div className="text-green-700">Significant improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 p-8 flex flex-col justify-center">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-white mb-4">Transform Your Practice Today</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Ready to implement the recommendations from your efficiency analysis? Schedule a personalized 
                demo to see how S10.AI can transform your practice operations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-sm">30-day implementation timeline</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-sm">Full EHR integration support</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-sm">Dedicated success manager</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-sm">ROI guarantee within 90 days</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3"
              >
                Schedule Your Personalized Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-blue-100 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Or call us at 1-800-S10-DEMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render results if currentStep is 'results'
  if (currentStep === 'results') {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex min-h-screen">
          <div className="w-3/5 p-6 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg text-center"
            >
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground mb-3">Your Practice Efficiency Score</h1>
                <div className="relative inline-block">
                  <div className="text-4xl font-bold text-primary mb-2">{score}%</div>
                  <Progress value={score} className="w-48 h-3 mx-auto mb-4" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {score >= 80 
                    ? "Great job! Your practice is performing well, but there's still room for optimization."
                    : score >= 60 
                    ? "Good foundation! Significant opportunities exist to enhance your practice efficiency."
                    : "Substantial optimization potential! AI automation can transform your practice operations."
                  }
                </p>
              </div>

              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Get your complete benchmark study with detailed analysis, industry comparisons, 
                    and actionable solutions to transform your practice with S10.AI.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="w-2/5 bg-gradient-to-br from-primary/5 to-primary/10 p-6 flex items-center justify-center border-l">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-sm"
            >
              <Card>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">Unlock Your Complete Benchmark Study</CardTitle>
                  <CardDescription className="text-xs">
                    Enter your details to receive your comprehensive analysis and discover 
                    how S10.AI can solve your practice challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName" className="text-xs">First Name*</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="h-8 text-xs"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs">Last Name*</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="h-8 text-xs"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-xs">Email Address*</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="h-8 text-xs"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-xs">Contact Number*</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="h-8 text-xs"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="practiceName" className="text-xs">Practice Name*</Label>
                      <Input
                        id="practiceName"
                        value={formData.practiceName}
                        onChange={(e) => handleInputChange('practiceName', e.target.value)}
                        required
                        className="h-8 text-xs"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full mt-4 h-9 text-xs">
                      Get My Complete Analysis
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Default render for other steps
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Hero Section with new design */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center px-4">
            Practice Efficiency Grader
          </h1>
          <p className="mt-3 block text-muted-foreground text-center text-base sm:text-lg px-4 max-w-xl">
            Discover how efficient your practice really is and unlock actionable insights to optimize your workflow with AI.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            ref={targetRef}
            onClick={() => setCurrentStep('quiz')}
            className="py-2 px-4 rounded-xl border border-foreground/50 hover:border-foreground/80 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Start Your Assessment
          </button>
        </div>

        <div className="mt-12 lg:mt-16 w-full max-w-screen-sm mx-auto overflow-hidden px-4 sm:px-2">
          <div className="bg-border rounded-[2rem] p-[0.25rem]">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-[1.75rem] bg-card flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quick 10-Question Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized insights about your practice efficiency in under 3 minutes
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="text-center">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                    <div>3 min</div>
                  </div>
                  <div className="text-center">
                    <FileText className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                    <div>10 questions</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                    <div>Free report</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="h-12 sm:h-16 md:h-24"></div>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10"></canvas>

      {/* Quiz Section */}
      <AnimatePresence>
        {currentStep === 'quiz' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <Card className="mx-auto">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Practice Efficiency Assessment</CardTitle>
                    <button 
                      onClick={() => setCurrentStep('hero')}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </button>
                  </div>
                  <Progress value={(Object.keys(answers).length / questions.length) * 100} className="w-full" />
                  <CardDescription>
                    Question {Object.keys(answers).length + 1} of {questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {questions.map((question) => (
                    <div key={question.id} className={Object.keys(answers).length + 1 === question.id ? 'block' : 'hidden'}>
                      <h3 className="text-lg font-medium mb-4">{question.question}</h3>
                      <div className="space-y-2">
                        {question.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswer(question.id, option)}
                            className="w-full text-left p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {Object.keys(answers).length === questions.length && (
                    <div className="text-center pt-4">
                      <Button onClick={calculateScore} size="lg">
                        Calculate My Score
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PracticeEfficiencyGrader;
