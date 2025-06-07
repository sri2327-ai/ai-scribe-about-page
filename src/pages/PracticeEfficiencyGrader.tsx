import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Clock, Users, FileText, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string): { r: number; g: number; b: number } | null => {
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

// Enhanced Hero Section Component
const InteractiveHeroSection = ({ onStartAssessment }: { onStartAssessment: () => void }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<HTMLButtonElement>(null);
    const mousePosRef = useRef({ x: 0, y: 0 });
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mouseActive, setMouseActive] = useState(false);

    const resolvedCanvasColorsRef = useRef({
        strokeStyle: { r: 56, g: 126, b: 137 }, // S10.AI brand color
    });

    // Update canvas colors based on theme
    useEffect(() => {
        const tempElement = document.createElement('div');
        tempElement.style.display = 'none';
        document.body.appendChild(tempElement);

        const updateResolvedColors = () => {
            tempElement.style.color = '#387E89'; // S10.AI brand color
            const computedFgColor = getComputedStyle(tempElement).color;
            const parsedFgColor = parseRgbColor(computedFgColor);
            if (parsedFgColor) {
                resolvedCanvasColorsRef.current.strokeStyle = parsedFgColor;
            } else {
                resolvedCanvasColorsRef.current.strokeStyle = { r: 56, g: 126, b: 137 };
            }
        };
        updateResolvedColors();

        return () => {
            if (tempElement.parentNode) {
                tempElement.parentNode.removeChild(tempElement);
            }
        };
    }, []);

    const drawArrow = useCallback(() => {
        if (!canvasRef.current || !targetRef.current || !ctxRef.current || !mouseActive) return;

        const targetEl = targetRef.current;
        const ctx = ctxRef.current;
        const mouse = mousePosRef.current;

        const rect = targetEl.getBoundingClientRect();
        const canvasRect = canvasRef.current.getBoundingClientRect();
        
        // Adjust mouse position relative to canvas
        const x0 = mouse.x - canvasRect.left;
        const y0 = mouse.y - canvasRect.top;
        
        // Target position relative to canvas
        const cx = rect.left - canvasRect.left + rect.width / 2;
        const cy = rect.top - canvasRect.top + rect.height / 2;

        const distance = Math.hypot(cx - x0, cy - y0);
        
        // Only draw if mouse is at least 100px away from button
        if (distance < 100) return;

        const a = Math.atan2(cy - y0, cx - x0);
        const x1 = cx - Math.cos(a) * (rect.width / 2 + 20);
        const y1 = cy - Math.sin(a) * (rect.height / 2 + 20);

        const midX = (x0 + x1) / 2;
        const midY = (y0 + y1) / 2;
        const offset = Math.min(150, distance * 0.3);
        const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
        const controlX = midX + offset * 0.2;
        const controlY = midY + offset * t;
        
        // Calculate opacity based on distance
        const opacity = Math.min(0.8, Math.max(0.1, (distance - 100) / 400));

        const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
        ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw curve with glow effect
        ctx.save();
        ctx.shadowColor = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, 0.3)`;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(controlX, controlY, x1, y1);
        ctx.setLineDash([15, 8]);
        ctx.stroke();
        ctx.restore();

        // Draw arrowhead
        const angle = Math.atan2(y1 - controlY, x1 - controlX);
        const headLength = 15;
        
        ctx.save();
        ctx.shadowColor = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, 0.3)`;
        ctx.shadowBlur = 5;
        
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
        ctx.restore();
    }, [mouseActive]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !targetRef.current) return;

        ctxRef.current = canvas.getContext("2d");

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            
            if (ctxRef.current) {
                ctxRef.current.scale(dpr, dpr);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
            setMouseActive(true);
        };

        const handleMouseLeave = () => {
            setMouseActive(false);
        };

        window.addEventListener("resize", updateCanvasSize);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        updateCanvasSize();

        const animateLoop = () => {
            if (ctxRef.current && canvas) {
                ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
                drawArrow();
            }
            animationFrameIdRef.current = requestAnimationFrame(animateLoop);
        };
        
        animateLoop();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [drawArrow]);

    const features = [
        { icon: Clock, text: "3 min", subtext: "Quick assessment" },
        { icon: FileText, text: "10 questions", subtext: "Evidence-based" },
        { icon: CheckCircle, text: "Free report", subtext: "Actionable insights" }
    ];

    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col relative overflow-hidden">
            {/* Enhanced background with subtle medical pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-teal-50/30"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `
                    radial-gradient(circle at 20% 80%, rgba(56, 126, 137, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(20, 49, 81, 0.15) 0%, transparent 50%)
                `
            }}></div>

            <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Trust indicator */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 border border-[#387E89]/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
                    >
                        <CheckCircle className="w-4 h-4 text-[#387E89]" />
                        <span className="text-sm font-semibold text-[#387E89]">Trusted by 1,000+ Healthcare Providers</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151]">
                            Practice Efficiency Grader
                        </span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
                    >
                        Discover how efficient your practice really is and unlock 
                        <span className="font-semibold text-[#387E89]"> actionable insights</span> to 
                        <span className="font-semibold text-[#143151]"> optimize your workflow</span> with AI.
                    </motion.p>

                    {/* Interactive CTA Button */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-8"
                    >
                        <Button
                            ref={targetRef}
                            onClick={onStartAssessment}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="group relative px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105"
                            style={{
                                background: 'linear-gradient(45deg, #143151, #387E89, #5192AE)',
                                boxShadow: '0 10px 30px rgba(56, 126, 137, 0.3)'
                            }}
                        >
                            {/* Animated background glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#387E89]/30 via-[#5192AE]/30 to-[#143151]/30 rounded-full"
                                animate={isHovered ? {
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                } : {}}
                                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                            />
                            
                            <div className="flex items-center justify-center gap-3 relative z-10">
                                <span>Start Your Assessment</span>
                                <motion.div
                                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </motion.div>
                            </div>
                        </Button>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-12"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#387E89]/20 to-[#143151]/20 flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-[#387E89]" />
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-lg text-gray-900">{feature.text}</div>
                                    <div className="text-sm text-gray-600">{feature.subtext}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Assessment benefits */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="max-w-2xl mx-auto"
                    >
                        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl ring-1 ring-gray-200/50">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                                    Quick 10-Question Assessment
                                </h3>
                                <p className="text-center text-gray-600 mb-4">
                                    Get personalized insights about your practice efficiency in under 3 minutes
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>No personal data required</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Evidence-based questions</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Instant results</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </main>

            {/* Interactive arrow canvas */}
            <canvas 
                ref={canvasRef} 
                className="fixed inset-0 pointer-events-none z-20"
                style={{ mixBlendMode: 'multiply' }}
            />
        </div>
    );
};

// Question data
interface QuestionOption {
  id: string;
  text: string;
  score: number;
}

interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  type: 'single' | 'multiple';
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How much time do you spend on documentation per patient?',
    type: 'single',
    options: [
      { id: '1a', text: 'Less than 5 minutes', score: 10 },
      { id: '1b', text: '5-10 minutes', score: 7 },
      { id: '1c', text: '10-15 minutes', score: 5 },
      { id: '1d', text: '15-20 minutes', score: 3 },
      { id: '1e', text: 'More than 20 minutes', score: 1 },
    ],
  },
  {
    id: 2,
    text: 'How often do you complete your notes during the patient visit?',
    type: 'single',
    options: [
      { id: '2a', text: 'Almost always (>90%)', score: 10 },
      { id: '2b', text: 'Frequently (70-90%)', score: 8 },
      { id: '2c', text: 'Sometimes (40-70%)', score: 5 },
      { id: '2d', text: 'Rarely (10-40%)', score: 3 },
      { id: '2e', text: 'Almost never (<10%)', score: 1 },
    ],
  },
  {
    id: 3,
    text: 'How much time do you spend after hours completing documentation?',
    type: 'single',
    options: [
      { id: '3a', text: 'None', score: 10 },
      { id: '3b', text: 'Less than 30 minutes', score: 8 },
      { id: '3c', text: '30-60 minutes', score: 6 },
      { id: '3d', text: '1-2 hours', score: 3 },
      { id: '3e', text: 'More than 2 hours', score: 1 },
    ],
  },
  {
    id: 4,
    text: 'Which of the following tasks consume the most time in your practice? (Select all that apply)',
    type: 'multiple',
    options: [
      { id: '4a', text: 'Documentation/charting', score: -2 },
      { id: '4b', text: 'Phone calls with patients', score: -1 },
      { id: '4c', text: 'Prior authorizations', score: -2 },
      { id: '4d', text: 'Prescription refills', score: -1 },
      { id: '4e', text: 'Reviewing lab results', score: -1 },
    ],
  },
  {
    id: 5,
    text: 'How satisfied are you with your current documentation workflow?',
    type: 'single',
    options: [
      { id: '5a', text: 'Very satisfied', score: 10 },
      { id: '5b', text: 'Satisfied', score: 8 },
      { id: '5c', text: 'Neutral', score: 5 },
      { id: '5d', text: 'Dissatisfied', score: 3 },
      { id: '5e', text: 'Very dissatisfied', score: 1 },
    ],
  },
  {
    id: 6,
    text: 'How often do you feel rushed during patient encounters?',
    type: 'single',
    options: [
      { id: '6a', text: 'Never', score: 10 },
      { id: '6b', text: 'Rarely', score: 8 },
      { id: '6c', text: 'Sometimes', score: 5 },
      { id: '6d', text: 'Often', score: 3 },
      { id: '6e', text: 'Always', score: 1 },
    ],
  },
  {
    id: 7,
    text: 'Which technologies do you currently use to improve efficiency? (Select all that apply)',
    type: 'multiple',
    options: [
      { id: '7a', text: 'Voice recognition/dictation', score: 2 },
      { id: '7b', text: 'Templates/macros', score: 1 },
      { id: '7c', text: 'Medical scribes (human)', score: 2 },
      { id: '7d', text: 'AI scribing tools', score: 3 },
      { id: '7e', text: 'None of the above', score: -2 },
    ],
  },
  {
    id: 8,
    text: 'How many patients do you see per day on average?',
    type: 'single',
    options: [
      { id: '8a', text: 'Less than 10', score: 5 },
      { id: '8b', text: '10-15', score: 7 },
      { id: '8c', text: '16-20', score: 10 },
      { id: '8d', text: '21-25', score: 8 },
      { id: '8e', text: 'More than 25', score: 6 },
    ],
  },
  {
    id: 9,
    text: 'How often do documentation requirements prevent you from spending adequate time with patients?',
    type: 'single',
    options: [
      { id: '9a', text: 'Never', score: 10 },
      { id: '9b', text: 'Rarely', score: 8 },
      { id: '9c', text: 'Sometimes', score: 5 },
      { id: '9d', text: 'Often', score: 3 },
      { id: '9e', text: 'Always', score: 1 },
    ],
  },
  {
    id: 10,
    text: 'How interested are you in implementing AI solutions to improve practice efficiency?',
    type: 'single',
    options: [
      { id: '10a', text: 'Very interested', score: 10 },
      { id: '10b', text: 'Interested', score: 8 },
      { id: '10c', text: 'Somewhat interested', score: 5 },
      { id: '10d', text: 'Slightly interested', score: 3 },
      { id: '10e', text: 'Not interested', score: 1 },
    ],
  },
];

// Questionnaire component
const Questionnaire = ({ questions, onComplete }: { questions: Question[], onComplete: (answers: Record<number, any>) => void }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleOptionSelect = (option: QuestionOption) => {
    if (currentQuestion.type === 'single') {
      setSelectedOptions([option.id]);
      setAnswers({
        ...answers,
        [currentQuestion.id]: option
      });
    } else {
      const newSelectedOptions = selectedOptions.includes(option.id)
        ? selectedOptions.filter(id => id !== option.id)
        : [...selectedOptions, option.id];
      
      setSelectedOptions(newSelectedOptions);
      
      const selectedOptionObjects = currentQuestion.options.filter(opt => 
        newSelectedOptions.includes(opt.id)
      );
      
      setAnswers({
        ...answers,
        [currentQuestion.id]: {
          options: selectedOptionObjects,
          score: selectedOptionObjects.reduce((sum, opt) => sum + opt.score, 0)
        }
      });
    }
  };
  
  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions(
        answers[questions[currentQuestionIndex + 1].id]?.options 
          ? answers[questions[currentQuestionIndex + 1].id].options.map((opt: QuestionOption) => opt.id)
          : answers[questions[currentQuestionIndex + 1].id]?.id 
            ? [answers[questions[currentQuestionIndex + 1].id].id]
            : []
      );
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOptions(
        answers[questions[currentQuestionIndex - 1].id]?.options 
          ? answers[questions[currentQuestionIndex - 1].id].options.map((opt: QuestionOption) => opt.id)
          : answers[questions[currentQuestionIndex - 1].id]?.id 
            ? [answers[questions[currentQuestionIndex - 1].id].id]
            : []
      );
    }
  };
  
  const isNextDisabled = currentQuestion.type === 'single' 
    ? !selectedOptions.length 
    : false;
  
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round((currentQuestionIndex / questions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">{currentQuestion.text}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <div 
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedOptions.includes(option.id) 
                  ? 'border-[#387E89] bg-[#387E89]/10 shadow-md' 
                  : 'border-gray-200 hover:border-[#387E89]/50 hover:bg-[#387E89]/5'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${
                  selectedOptions.includes(option.id) 
                    ? 'border-[#387E89] bg-[#387E89]' 
                    : 'border-gray-300'
                }`}>
                  {selectedOptions.includes(option.id) && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-800">{option.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-2 rounded-lg ${
            currentQuestionIndex === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`px-6 py-2 rounded-lg ${
            isNextDisabled 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:shadow-lg transition-shadow'
          }`}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

// Form component
const ContactForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: '',
    specialty: '',
    size: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Get Your Personalized Results</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please provide your information to receive your practice efficiency score and personalized recommendations.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#387E89] focus:border-[#387E89] outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#387E89] focus:border-[#387E89] outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="practice" className="block text-sm font-medium text-gray-700 mb-1">Practice Name</label>
              <input
                type="text"
                id="practice"
                name="practice"
                value={formData.practice}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#387E89] focus:border-[#387E89] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#387E89] focus:border-[#387E89] outline-none"
                required
              >
                <option value="">Select Specialty</option>
                <option value="Family Medicine">Family Medicine</option>
                <option value="Internal Medicine">Internal Medicine</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Psychiatry">Psychiatry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Practice Size</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#387E89] focus:border-[#387E89] outline-none"
                required
              >
                <option value="">Select Size</option>
                <option value="Solo">Solo Practice</option>
                <option value="Small">Small (2-5 providers)</option>
                <option value="Medium">Medium (6-20 providers)</option>
                <option value="Large">Large (21-50 providers)</option>
                <option value="Enterprise">Enterprise (50+ providers)</option>
              </select>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              Get My Results
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            Your information is secure and will not be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
};

// Results component
const ResultsPage = ({ score, onViewBenchmark }: { score: number, onViewBenchmark: () => void }) => {
  const getScoreCategory = () => {
    if (score >= 80) return { category: 'Excellent', color: '#10B981' };
    if (score >= 60) return { category: 'Good', color: '#3B82F6' };
    if (score >= 40) return { category: 'Average', color: '#F59E0B' };
    if (score >= 20) return { category: 'Below Average', color: '#F97316' };
    return { category: 'Poor', color: '#EF4444' };
  };
  
  const { category, color } = getScoreCategory();
  
  const recommendations = [
    {
      title: 'Implement AI Medical Scribing',
      description: 'Reduce documentation time by up to 75% with AI-powered medical scribing that captures patient encounters in real-time.',
      impact: 'High'
    },
    {
      title: 'Optimize EHR Templates',
      description: 'Create specialty-specific templates to streamline documentation workflow and reduce repetitive data entry.',
      impact: 'Medium'
    },
    {
      title: 'Delegate Administrative Tasks',
      description: 'Utilize AI staffing solutions to handle routine administrative tasks like appointment scheduling and patient follow-ups.',
      impact: 'High'
    },
    {
      title: 'Implement Pre-Visit Planning',
      description: 'Use AI to analyze upcoming appointments and prepare necessary information before patient visits.',
      impact: 'Medium'
    },
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Practice Efficiency Score</h2>
        
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg className="w-48 h-48">
              <circle
                cx="96"
                cy="96"
                r="70"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="12"
              />
              <circle
                cx="96"
                cy="96"
                r="70"
                fill="none"
                stroke={color}
                strokeWidth="12"
                strokeDasharray="439.8"
                strokeDashoffset={439.8 - (439.8 * score / 100)}
                transform="rotate(-90 96 96)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold" style={{ color }}>{score}</span>
              <span className="text-lg font-medium text-gray-600">{category}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
          <p className="text-gray-700 mb-4">
            Based on your responses, your practice efficiency score is <strong>{score}</strong>, which is considered <strong>{category.toLowerCase()}</strong>. 
            {score < 60 ? ' There are significant opportunities to improve your practice efficiency.' : ' Your practice is performing well, but there are still opportunities for improvement.'}
          </p>
          <p className="text-gray-700">
            The average score for practices in your specialty is <strong>65</strong>. 
            <button 
              onClick={onViewBenchmark}
              className="text-[#387E89] font-medium ml-1 hover:underline"
            >
              View benchmark comparison
            </button>
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-900">{rec.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    rec.impact === 'High' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {rec.impact} Impact
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl shadow-lg p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ready to improve your practice efficiency?</h3>
            <p className="opacity-90">Schedule a demo to see how S10.AI can transform your workflow.</p>
          </div>
          <button className="bg-white text-[#143151] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// Benchmark component
const BenchmarkPage = () => {
  const specialties = [
    { name: 'Family Medicine', avg: 62 },
    { name: 'Internal Medicine', avg: 58 },
    { name: 'Pediatrics', avg: 65 },
    { name: 'Cardiology', avg: 70 },
    { name: 'Dermatology', avg: 72 },
    { name: 'Orthopedics', avg: 68 },
    { name: 'Psychiatry', avg: 60 },
  ];
  
  const practiceSize = [
    { name: 'Solo', avg: 55 },
    { name: 'Small (2-5)', avg: 60 },
    { name: 'Medium (6-20)', avg: 65 },
    { name: 'Large (21-50)', avg: 70 },
    { name: 'Enterprise (50+)', avg: 75 },
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Benchmark Comparison</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">By Specialty</h3>
          <div className="space-y-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{specialty.name}</span>
                  <span className="text-sm font-medium text-gray-700">{specialty.avg}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2.5 rounded-full"
                    style={{ width: `${specialty.avg}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">By Practice Size</h3>
          <div className="space-y-4">
            {practiceSize.map((size, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{size.name}</span>
                  <span className="text-sm font-medium text-gray-700">{size.avg}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2.5 rounded-full"
                    style={{ width: `${size.avg}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Specialty Impact:</strong> Specialties with higher procedural components like Dermatology and Cardiology tend to have higher efficiency scores due to standardized workflows and documentation templates.
          </p>
          <p className="text-gray-700">
            <strong>Practice Size Correlation:</strong> Larger practices typically score higher due to economies of scale, specialized staff roles, and greater technology investments.
          </p>
          <p className="text-gray-700">
            <strong>Technology Adoption:</strong> Practices using AI-powered solutions score 15-20 points higher on average than those relying solely on traditional EHR systems.
          </p>
          <p className="text-gray-700">
            <strong>Documentation Time:</strong> The highest-performing practices spend less than 5 minutes per patient on documentation, compared to 15+ minutes in lower-scoring practices.
          </p>
        </div>
      </div>
    </div>
  );
};

const PracticeEfficiencyGrader = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questionnaire' | 'form' | 'results' | 'benchmark'>('intro');
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [formData, setFormData] = useState<any>({});
  const [score, setScore] = useState<number>(0);

  const handleStartAssessment = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (questionnaireAnswers: Record<number, any>) => {
    setAnswers(questionnaireAnswers);
    setCurrentStep('form');
  };

  const handleFormComplete = (data: any) => {
    setFormData(data);
    
    // Calculate score
    const totalScore = Object.values(answers).reduce((sum: number, answer: any) => {
      return sum + (answer?.score || 0);
    }, 0);
    
    setScore(totalScore);
    setCurrentStep('results');
  };

  const handleViewBenchmark = () => {
    setCurrentStep('benchmark');
  };

  if (currentStep === 'intro') {
    return <InteractiveHeroSection onStartAssessment={handleStartAssessment} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto py-8">
        {currentStep === 'questionnaire' && (
          <Questionnaire 
            questions={questions} 
            onComplete={handleQuestionnaireComplete} 
          />
        )}
        
        {currentStep === 'form' && (
          <ContactForm onSubmit={handleFormComplete} />
        )}
        
        {currentStep === 'results' && (
          <ResultsPage 
            score={score} 
            onViewBenchmark={handleViewBenchmark} 
          />
        )}
        
        {currentStep === 'benchmark' && (
          <BenchmarkPage />
        )}
      </div>
    </div>
  );
};

export default PracticeEfficiencyGrader;
