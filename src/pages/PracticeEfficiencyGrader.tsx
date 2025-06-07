import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Brain, ChevronRight, ChevronLeft, Star, TrendingUp, Clock, DollarSign, Users, Heart, FileText, Calendar, Phone, Languages, Sparkles, Shield, Zap, Target, BarChart3, Stethoscope, Activity, Eye, Award, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ModernSlider } from '@/components/ui/modern-slider';

// --- GRADIENT BARS BACKGROUND COMPONENT ---
const GradientBarsBackground: React.FC = () => {
    const [numBars] = useState(15);

    const calculateHeight = (index: number, total: number) => {
        const position = index / (total - 1);
        const maxHeight = 90;
        const minHeight = 25;
        
        const center = 0.5;
        const distanceFromCenter = Math.abs(position - center);
        const heightPercentage = Math.pow(distanceFromCenter * 2, 1.5);
        
        return minHeight + (maxHeight - minHeight) * heightPercentage;
    };

    return (
        <>
            {/* Enhanced gradient bars with better visibility */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                    className="flex h-full w-full"
                    style={{
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitFontSmoothing: 'antialiased',
                    }}
                >
                    {Array.from({ length: numBars }).map((_, index) => {
                        const height = calculateHeight(index, numBars);
                        return (
                            <div
                                key={index}
                                style={{
                                    flex: '1 0 calc(100% / 15)',
                                    maxWidth: 'calc(100% / 15)',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.6), rgba(20, 184, 166, 0.5), rgba(13, 148, 136, 0.4))',
                                    transform: `scaleY(${height / 100})`,
                                    transformOrigin: 'bottom',
                                    transition: 'transform 0.8s ease-in-out',
                                    animation: 'pulseBar 4s ease-in-out infinite alternate',
                                    animationDelay: `${index * 0.2}s`,
                                    opacity: 0.9,
                                    filter: 'blur(0.2px)',
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            
            {/* Lighter overlay for better content visibility */}
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-white/70 via-white/60 to-white/70"></div>
        </>
    );
};

// --- ANIMATION VARIANTS ---
const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.7,
};

// --- HELPER COMPONENTS ---
interface CustomSliderProps {
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    unit: string;
    labels?: string[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ value, onChange, min, max, unit, labels }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    const steps = max - min + 1;
    
    return (
        <div className="w-full px-2">
            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-700">{unit}</span>
                <motion.span 
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {labels ? labels[value] || value : value}
                </motion.span>
            </div>
            
            <div className="relative mb-6">
                {/* Track background */}
                <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden border border-gray-300">
                    {/* Progress fill */}
                    <motion.div 
                        className="h-full bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full relative shadow-md"
                        style={{ width: `${percentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    
                    {/* Tick marks */}
                    <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
                        {Array.from({ length: steps }, (_, i) => (
                            <div 
                                key={i} 
                                className={`w-1 h-6 -mt-1 ${i <= value ? 'bg-white/70' : 'bg-gray-400'} rounded-full transition-colors duration-300`} 
                            />
                        ))}
                    </div>
                    
                    {/* Slider thumb */}
                    <motion.div 
                        className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
                        style={{ left: `${percentage}%`, marginLeft: '-16px' }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="w-8 h-8 bg-white rounded-full border-2 border-[#143151] shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#143151] rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
                
                <input 
                    type="range" 
                    min={min} 
                    max={max} 
                    value={value} 
                    onChange={e => onChange(parseInt(e.target.value))}
                    className="absolute top-0 left-0 w-full h-4 opacity-0 cursor-pointer" 
                />
            </div>
            
            {labels && (
                <div className="flex justify-between mt-3 text-sm text-gray-600 font-medium">
                    <span>{labels[0]}</span>
                    <span>{labels[Math.floor(labels.length / 2)]}</span>
                    <span>{labels[labels.length - 1]}</span>
                </div>
            )}
        </div>
    );
};

interface OptionCardProps {
    text: string;
    selected: boolean;
    onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ text, selected, onClick }) => (
    <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-lg ${
            selected 
                ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white border-[#143151] shadow-xl' 
                : 'bg-white border-gray-300 hover:border-[#387E89] hover:shadow-xl text-gray-800'
        }`}
    >
        <p className="text-center text-base font-medium leading-relaxed">{text}</p>
    </motion.div>
);

// --- TYPE DEFINITIONS ---
interface SliderOptions {
    min: number;
    max: number;
    unit: string;
    labels?: string[];
}

interface QuizQuestion {
    id: number;
    category: string;
    title: string;
    question: string;
    type: 'slider' | 'options';
    options: SliderOptions | string[];
    valueProp: string;
    icon: React.ComponentType<any>;
    analysis: (value: number | string) => 'Critical' | 'High' | 'Good';
    reportText: (value: number | string) => string;
    solution: string;
    insightSnippet?: string;
}

// --- QUIZ DATA ---
const quizQuestions: QuizQuestion[] = [
    {
        id: 1, 
        category: "Provider Wellbeing", 
        title: "The \"Pajama Time\" Problem", 
        question: "How many hours per week do providers spend on documentation after patient hours?", 
        type: "slider", 
        options: { min: 0, max: 20, unit: 'Hours' }, 
        valueProp: "Provider Well-being & Burnout",
        icon: Clock,
        analysis: (val: number | string) => {
            const numVal = typeof val === 'string' ? parseInt(val) || 0 : val;
            return numVal > 8 ? "Critical" : numVal > 3 ? "High" : "Good";
        },
        reportText: (val: number | string) => `With providers spending ${val} hours on after-hours charting, there's significant burnout risk. Industry average is 4 hours. S10.AI can reduce this by 80% through automated documentation, giving providers their evenings back.`,
        solution: "Our AI scribes handle real-time documentation, eliminating pajama time and reducing provider burnout by up to 80%.",
        insightSnippet: "A 2024 Medscape report found that \"charting and paperwork\" is the #1 contributor to physician burnout."
    },
    {
        id: 2, 
        category: "Clinical Efficiency", 
        title: "Documentation Speed", 
        question: "How long after a patient encounter is the final clinical note completed and signed?", 
        type: "slider", 
        options: { 
            min: 0, 
            max: 6, 
            unit: 'Timeframe',
            labels: ['2 min', '30 min', '2 hrs', '1 day', '2 days', '3+ days']
        }, 
        valueProp: "Documentation Efficiency",
        icon: FileText,
        analysis: (val: number | string) => {
            const numVal = typeof val === 'string' ? parseInt(val) || 0 : val;
            return numVal > 3 ? "Critical" : numVal > 1 ? "High" : "Good";
        },
        reportText: (val: number | string) => {
            const labels = ['2 minutes', '30 minutes', '2 hours', '1 day', '2 days', '3+ days'];
            const timeframe = labels[typeof val === 'number' ? val : 0] || val;
            return `Documentation completed in ${timeframe} indicates ${typeof val === 'number' && val > 1 ? 'delayed' : 'efficient'} workflow. S10.AI completes notes in real-time during encounters.`;
        },
        solution: "Our ambient AI documentation captures comprehensive notes during the visit, ready for review immediately after the encounter."
    },
    {
        id: 3, 
        category: "Financial Health", 
        title: "Clean Claim Rate", 
        question: "What is your approximate clean claim rate? (Claims approved on first submission)", 
        type: "slider", 
        options: { min: 50, max: 100, unit: 'Percentage' }, 
        valueProp: "Revenue Optimization",
        icon: DollarSign,
        analysis: (val: number | string) => {
            const numVal = typeof val === 'string' ? parseInt(val) || 0 : val;
            return numVal < 75 ? "Critical" : numVal < 85 ? "High" : "Good";
        },
        reportText: (val: number | string) => `Your clean claim rate of ${val}% ${typeof val === 'number' && val < 85 ? 'is below' : 'meets'} industry average (85%). Lower rates indicate documentation and coding issues. S10.AI ensures accurate coding suggestions and comprehensive documentation.`,
        solution: "Our AI scribe provides structured data and coding suggestions, improving clean claim rates to 95%+.",
        insightSnippet: "Industry average clean claim rate is 80-85%. Lower rates often point to documentation and coding inaccuracies."
    },
    {
        id: 4, 
        category: "Financial Health", 
        title: "Coding Confidence", 
        question: "How confident are you that your notes capture all necessary details for accurate coding?", 
        type: "options", 
        options: [
            "Not at all confident - we miss details regularly", 
            "Hardly confident - we catch some but miss others", 
            "Somewhat confident - we get most of it right",
            "Very confident - we rarely miss coding opportunities",
            "Completely confident - our documentation is comprehensive"
        ], 
        valueProp: "Coding Accuracy & Compliance",
        icon: FileText,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("Not at all") || strVal.includes("Hardly") ? "Critical" : 
                   strVal.includes("Somewhat") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Your confidence level suggests ${String(val).includes("confident") ? 'good' : 'room for improvement in'} coding accuracy. Inaccurate coding leads to denied claims and audit risks. S10.AI provides real-time coding suggestions based on conversation content.`,
        solution: "Our AI analyzes conversations in real-time to suggest accurate ICD-10, CPT codes and ensure comprehensive documentation."
    },
    {
        id: 5, 
        category: "Front Office Automation", 
        title: "Scheduling Automation", 
        question: "What scheduling automation do you currently use?", 
        type: "options", 
        options: [
            "No automation - everything is manual", 
            "Basic automated reminders only", 
            "Online scheduling + reminders",
            "AI phone agent for some calls",
            "Full AI automation for scheduling and calls"
        ], 
        valueProp: "Front Office Efficiency",
        icon: Calendar,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("No automation") ? "Critical" : 
                   strVal.includes("Basic") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Your current automation level indicates ${String(val).includes("No automation") ? 'significant manual work' : 'some efficiency gains'}. Manual scheduling burdens staff and increases no-shows. S10.AI Bravo can handle 80% of scheduling calls automatically.`,
        solution: "Bravo AI Agent handles scheduling calls, reminders, and rescheduling 24/7, reducing staff workload by 70%."
    },
    {
        id: 6, 
        category: "Patient Access", 
        title: "No-Show Rate", 
        question: "What is your monthly patient no-show rate?", 
        type: "slider", 
        options: { min: 0, max: 40, unit: 'Percentage' }, 
        valueProp: "Revenue Recovery",
        icon: Calendar,
        analysis: (val: number | string) => {
            const numVal = typeof val === 'string' ? parseInt(val) || 0 : val;
            return numVal > 20 ? "Critical" : numVal > 12 ? "High" : "Good";
        },
        reportText: (val: number | string) => `Your no-show rate of ${val}% ${typeof val === 'number' && val > 12 ? 'is above' : 'meets'} industry average (12%). High no-show rates represent significant lost revenue. For 100 daily appointments, ${val}% no-shows = $${Math.round(((typeof val === 'number' ? val : 0) * 100 * 250) / 100).toLocaleString()} monthly loss.`,
        solution: "Our intelligent reminder system and easy rescheduling reduce no-shows by 60%, recovering thousands in lost revenue."
    },
    {
        id: 7, 
        category: "Patient Experience", 
        title: "Provider-Patient Interaction", 
        question: "How does documentation affect provider-patient face time?", 
        type: "options", 
        options: [
            "Significantly inhibits - lots of screen time during visits", 
            "Moderately inhibits - some distraction from documentation", 
            "No impact - balanced approach",
            "Moderately improves - efficient documentation helps",
            "Significantly improves - minimal screen time needed"
        ], 
        valueProp: "Patient Care Quality",
        icon: Heart,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("Significantly inhibits") ? "Critical" : 
                   strVal.includes("Moderately inhibits") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Documentation ${String(val).includes("inhibits") ? 'barriers reduce' : 'supports'} patient satisfaction and care quality. When providers focus on screens instead of patients, relationships suffer. S10.AI enables 100% eye contact while capturing comprehensive notes.`,
        solution: "Our ambient AI documentation lets providers focus entirely on patients while capturing comprehensive notes automatically."
    },
    {
        id: 8, 
        category: "Language Access", 
        title: "Multilingual Support", 
        question: "How does your practice handle non-English speaking patients?", 
        type: "options", 
        options: [
            "Rely on family members or ad-hoc translation", 
            "Use cumbersome third-party phone services", 
            "Limited to availability of bilingual staff",
            "Technology-based real-time translation",
            "Comprehensive multilingual AI support"
        ], 
        valueProp: "Patient Access & Safety",
        icon: Languages,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("family members") || strVal.includes("ad-hoc") ? "Critical" : 
                   strVal.includes("cumbersome") || strVal.includes("Limited") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Your current approach ${String(val).includes("family") || String(val).includes("cumbersome") ? 'creates safety risks' : 'provides some support'} for non-English speakers. Inadequate translation leads to medical errors and poor patient experience. S10.AI supports 60+ languages with real-time translation.`,
        solution: "Built-in real-time translation for 60+ languages ensures every patient receives clear, accurate communication and documentation."
    }
];

const AnimatedGraphic = ({ questionId }: { questionId: number }) => {
    const graphics = [
        { 
            text: "Eliminate after-hours documentation", 
            icon: Clock, 
            description: "Reclaim your evenings with AI-powered real-time documentation"
        },
        { 
            text: "Instant note completion", 
            icon: Zap, 
            description: "Complete clinical notes during the patient encounter"
        },
        { 
            text: "Maximize revenue potential", 
            icon: TrendingUp, 
            description: "Accurate coding and comprehensive documentation boost revenue"
        },
        { 
            text: "Ensure coding accuracy", 
            icon: Shield, 
            description: "AI-powered coding suggestions reduce audit risks"
        },
        { 
            text: "Automate front office tasks", 
            icon: Activity, 
            description: "24/7 AI scheduling and patient communication"
        },
        { 
            text: "Reduce revenue loss", 
            icon: Target, 
            description: "Intelligent reminders and easy rescheduling prevent no-shows"
        },
        { 
            text: "Focus on patient care", 
            icon: Stethoscope, 
            description: "100% eye contact while AI captures comprehensive notes"
        },
        { 
            text: "Break language barriers", 
            icon: Languages, 
            description: "Real-time translation for 60+ languages ensures clear communication"
        }
    ];
    const currentGraphic = graphics[questionId - 1];
    const IconComponent = currentGraphic.icon;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={questionId}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 backdrop-blur-sm rounded-2xl border border-gray-200"
            >
                <motion.div 
                    className="w-24 h-24 mb-6 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <IconComponent className="w-12 h-12 text-white" />
                </motion.div>
                <motion.h3 
                    className="text-xl font-bold text-gray-800 mb-3 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {currentGraphic.text}
                </motion.h3>
                <motion.p 
                    className="text-base text-gray-600 leading-relaxed font-medium max-w-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {currentGraphic.description}
                </motion.p>
            </motion.div>
        </AnimatePresence>
    );
};

const InputField = ({ name, type, placeholder, required = true }: { name: string; type: string; placeholder?: string; required?: boolean }) => (
    <div className="space-y-3">
        <label htmlFor={name} className="block text-sm font-semibold text-gray-800 capitalize">
            {placeholder || name.replace(/([A-Z])/g, ' $1').trim()}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input 
            id={name} 
            name={name}
            type={type} 
            placeholder={placeholder || name} 
            required={required}
            className="w-full bg-white border-2 border-gray-200 text-gray-900 rounded-xl p-4 text-base focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89] transition-all duration-300 placeholder-gray-400 shadow-sm hover:border-gray-300 font-medium focus:shadow-lg" 
        />
    </div>
);

// --- Main Application ---
export default function PracticeEfficiencyGrader() {
    const [appState, setAppState] = useState('intro'); // intro, quiz, form, report
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | string | undefined)[]>(() => {
        const initial: (number | string | undefined)[] = new Array(quizQuestions.length).fill(undefined);
        initial[0] = 0; // Default for first slider
        return initial;
    });

    // Auto-progress for option questions
    useEffect(() => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        if (!currentQuestion) return;

        const answerForCurrent = answers[currentQuestionIndex];

        if (currentQuestion.type === 'options' && answerForCurrent !== undefined) {
            const timer = setTimeout(() => {
                if (currentQuestionIndex < quizQuestions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                    setAppState('form');
                }
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [answers, currentQuestionIndex]);

    const handleStart = () => setAppState('quiz');
    const handleSubmitForm = (e: React.FormEvent) => { e.preventDefault(); setAppState('report'); };
    const handleRetake = () => {
        setCurrentQuestionIndex(0);
        const initial: (number | string | undefined)[] = new Array(quizQuestions.length).fill(undefined);
        initial[0] = 0;
        setAnswers(initial);
        setAppState('intro');
    };

    const handleAnswer = (answer: number | string, index: number) => {
        setAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[index] = answer;
            return newAnswers;
        });
    };
    
    const nextSliderQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setAppState('form');
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    
    const reportResults = useMemo(() => quizQuestions.map((q, i) => {
        const answer = answers[i] !== undefined ? answers[i] : (q.type === 'slider' ? 0 : "");
        return { ...q, answer, analysisResult: q.analysis(answer!) };
    }), [answers]);

    const overallScore = useMemo(() => {
        const scores = reportResults.map(r => r.analysisResult === 'Good' ? 3 : r.analysisResult === 'High' ? 2 : 1);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return Math.round((total / (quizQuestions.length * 3)) * 100);
    }, [reportResults]);

    const renderContent = () => {
        switch (appState) {
            case 'quiz':
                const question = quizQuestions[currentQuestionIndex];
                if (!question) return null;
                const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
                
                return (
                    <div className="min-h-screen bg-white">
                        <div className="container mx-auto px-4 py-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                                <div className="hidden lg:flex flex-col items-center justify-center">
                                    <AnimatedGraphic questionId={question.id} />
                                </div>
                                
                                <div className="flex flex-col justify-between min-h-[600px] lg:min-h-[700px]">
                                    <div className="flex-1 flex flex-col justify-center space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                                            <p className="text-gray-700 font-semibold text-sm uppercase tracking-wider">{question.category}</p>
                                        </div>
                                        
                                        <AnimatePresence mode="wait">
                                            <motion.div 
                                                key={currentQuestionIndex} 
                                                initial={{ opacity: 0, x: 50 }} 
                                                animate={{ opacity: 1, x: 0 }} 
                                                exit={{ opacity: 0, x: -50 }} 
                                                transition={{ duration: 0.5 }}
                                                className="space-y-6"
                                            >
                                                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">{question.title}</h2>
                                                <p className="text-gray-600 text-lg leading-relaxed">{question.question}</p>
                                                
                                                {question.insightSnippet && (
                                                    <div className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 border border-[#387E89]/30 rounded-xl p-4">
                                                        <p className="text-gray-800 font-medium flex items-center gap-2 mb-2">
                                                            <Sparkles className="w-4 h-4 text-[#387E89]" />
                                                            Industry Insight
                                                        </p>
                                                        <p className="text-gray-700 text-sm">{question.insightSnippet}</p>
                                                    </div>
                                                )}
                                                
                                                <div className="space-y-4">
                                                    {question.type === 'slider' && (
                                                        <ModernSlider 
                                                            value={typeof answers[currentQuestionIndex] === 'number' ? answers[currentQuestionIndex] as number : 0} 
                                                            onChange={(val) => handleAnswer(val, currentQuestionIndex)} 
                                                            min={(question.options as SliderOptions).min}
                                                            max={(question.options as SliderOptions).max}
                                                            unit={(question.options as SliderOptions).unit}
                                                            labels={(question.options as SliderOptions).labels}
                                                        />
                                                    )}
                                                    {question.type === 'options' && Array.isArray(question.options) && (
                                                        <div className="grid gap-3">
                                                            {question.options.map((opt) => (
                                                                <OptionCard 
                                                                    key={opt} 
                                                                    text={opt} 
                                                                    selected={answers[currentQuestionIndex] === opt} 
                                                                    onClick={() => handleAnswer(opt, currentQuestionIndex)} 
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    
                                    {/* Navigation and Progress */}
                                    <div className="space-y-6 pt-8">
                                        {/* Navigation Buttons */}
                                        <div className="flex gap-4">
                                            <motion.button 
                                                onClick={goToPreviousQuestion}
                                                disabled={currentQuestionIndex === 0}
                                                whileHover={{ scale: currentQuestionIndex === 0 ? 1 : 1.02 }}
                                                whileTap={{ scale: currentQuestionIndex === 0 ? 1 : 0.98 }}
                                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                                    currentQuestionIndex === 0 
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                                                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-[#387E89] hover:text-[#387E89] shadow-sm hover:shadow-md'
                                                }`}
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                                Previous
                                            </motion.button>
                                            
                                            {question.type === 'slider' && (
                                                <motion.button 
                                                    onClick={nextSliderQuestion}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex-1 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-3 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                                                >
                                                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Complete Assessment'}
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.button>
                                            )}
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-600 text-sm">Progress</span>
                                                <span className="text-gray-800 text-sm font-semibold">{Math.round(progress)}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3 border border-gray-300">
                                                <motion.div 
                                                    className="bg-gradient-to-r from-[#143151] to-[#387E89] h-3 rounded-full shadow-md" 
                                                    style={{ width: `${progress}%` }} 
                                                    transition={{ duration: 0.5 }}
                                                    layoutId="progress"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'form':
                return (
                    <div className="min-h-screen bg-white">
                        <motion.div 
                            variants={pageVariants} 
                            initial="initial" 
                            animate="in" 
                            exit="out" 
                            transition={pageTransition} 
                            className="container mx-auto px-4 py-16 max-w-4xl"
                        >
                            <div className="text-center mb-12">
                                <motion.div 
                                    className="w-20 h-20 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Eye className="w-10 h-10 text-white" />
                                </motion.div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                                    Get Your Personalized Efficiency Report
                                </h2>
                                <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                                    Enter your details below to receive your complete practice efficiency analysis and discover how S10.AI can transform your workflow.
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmitForm} className="space-y-8 max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                                <InputField 
                                    name="fullName" 
                                    type="text" 
                                    placeholder="Dr. John Smith" 
                                />
                                <InputField 
                                    name="email" 
                                    type="email" 
                                    placeholder="john.smith@practice.com" 
                                />
                                <InputField 
                                    name="practice" 
                                    type="text" 
                                    placeholder="Smith Family Medicine" 
                                />
                                <InputField 
                                    name="phone" 
                                    type="tel" 
                                    placeholder="+1 (555) 123-4567" 
                                    required={false}
                                />
                                
                                <motion.button 
                                    type="submit" 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-4 rounded-xl shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
                                >
                                    View Complete Analysis
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </form>
                            
                            <div className="flex items-center justify-center gap-2 mt-8">
                                <Shield className="w-4 h-4 text-gray-500" />
                                <p className="text-gray-500 text-center text-sm">
                                    Your information is secure and will only be used to provide your analysis.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                );

            case 'report':
                return (
                    <div className="min-h-screen bg-white">
                        <motion.div 
                            variants={pageVariants} 
                            initial="initial" 
                            animate="in" 
                            exit="out" 
                            transition={pageTransition} 
                            className="container mx-auto px-4 py-16 max-w-7xl"
                        >
                            <div className="text-center mb-16">
                                <motion.div 
                                    className="w-24 h-24 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <BarChart3 className="w-12 h-12 text-white" />
                                </motion.div>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">Your Complete Practice Analysis</h1>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                                    <span className="text-2xl font-semibold text-gray-700">Overall Efficiency Score:</span>
                                    <span className={`text-4xl font-bold px-6 py-2 rounded-full border-2 ${
                                        overallScore >= 80 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                        overallScore >= 60 ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                        'bg-red-50 text-red-700 border-red-200'
                                    }`}>
                                        {overallScore}%
                                    </span>
                                </div>
                                <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
                                    Based on your responses, here's how S10.AI can transform your practice efficiency.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                                {reportResults.map(res => {
                                    const IconComponent = res.icon;
                                    return (
                                        <motion.div 
                                            key={res.id} 
                                            className={`p-8 rounded-2xl border shadow-lg bg-white ${
                                                res.analysisResult === 'Critical' 
                                                    ? 'border-red-200' 
                                                    : res.analysisResult === 'High' 
                                                    ? 'border-amber-200' 
                                                    : 'border-emerald-200'
                                            }`}
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`p-3 rounded-xl ${
                                                    res.analysisResult === 'Critical' 
                                                        ? 'bg-red-100' 
                                                        : res.analysisResult === 'High' 
                                                        ? 'bg-amber-100' 
                                                        : 'bg-emerald-100'
                                                }`}>
                                                    <IconComponent className={`w-6 h-6 ${
                                                        res.analysisResult === 'Critical' 
                                                            ? 'text-red-600' 
                                                            : res.analysisResult === 'High' 
                                                            ? 'text-amber-600' 
                                                            : 'text-emerald-600'
                                                    }`} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className={`text-sm px-3 py-1 rounded-full font-semibold w-fit ${
                                                        res.analysisResult === 'Critical' 
                                                            ? 'bg-red-100 text-red-700' 
                                                            : res.analysisResult === 'High' 
                                                            ? 'bg-amber-100 text-amber-700' 
                                                            : 'bg-emerald-100 text-emerald-700'
                                                    }`}>
                                                        {res.analysisResult} Priority
                                                    </div>
                                                    <h3 className="text-xl font-bold mt-2 text-gray-800">{res.valueProp}</h3>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-700 mb-6 leading-relaxed">{res.reportText(res.answer!)}</p>
                                            
                                            <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-lg p-4 mb-4 border border-gray-200">
                                                <p className="text-gray-800 font-semibold mb-2">S10.AI Solution:</p>
                                                <p className="text-gray-700 text-sm">{res.solution}</p>
                                            </div>
                                            
                                            <div className="text-sm p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                <span className="text-gray-600">Your Answer: </span>
                                                <span className="font-semibold text-gray-800">
                                                    {Array.isArray(res.answer) ? res.answer.join(', ') : `${res.answer}${res.type === 'slider' ? ' hrs' : ''}`}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <motion.div 
                                className="text-center p-12 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 rounded-3xl shadow-2xl border border-gray-200"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Ready to Transform Your Practice?</h2>
                                <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                                    Discover how S10.AI's Crush (AI Scribe) and Bravo (AI Phone Agent) can solve these exact challenges. Get your personalized ROI projection and implementation plan.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
                                    <motion.div 
                                        className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Stethoscope className="w-12 h-12 text-[#387E89] mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">S10.AI Crush</h3>
                                        <p className="text-gray-600 mb-4">AI-powered clinical documentation that eliminates after-hours charting and improves coding accuracy.</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Real-time note generation</li>
                                            <li>• 80% reduction in documentation time</li>
                                            <li>• Improved clean claim rates</li>
                                        </ul>
                                    </motion.div>
                                    
                                    <motion.div 
                                        className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Phone className="w-12 h-12 text-[#387E89] mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">S10.AI Bravo</h3>
                                        <p className="text-gray-600 mb-4">AI phone agent that handles scheduling, reminders, and patient communications 24/7.</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• 70% reduction in staff workload</li>
                                            <li>• 60% decrease in no-show rates</li>
                                            <li>• 24/7 patient support</li>
                                        </ul>
                                    </motion.div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 flex items-center gap-3"
                                        onClick={() => window.open('/contact', '_blank')}
                                    >
                                        Schedule Live Demo
                                        <ExternalLink className="w-5 h-5" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-[#387E89] text-[#387E89] font-bold py-4 px-8 rounded-full text-lg hover:bg-[#387E89] hover:text-white transition-all duration-300 flex items-center gap-3"
                                        onClick={() => window.open('/pricing', '_blank')}
                                    >
                                        View S10.AI Solutions
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </motion.div>
                            
                            <div className="text-center mt-12">
                                <button 
                                    onClick={handleRetake} 
                                    className="text-gray-500 hover:text-gray-700 transition-colors text-lg"
                                >
                                    ← Retake the Assessment
                                </button>
                            </div>
                        </motion.div>
                    </div>
                );

            default: // intro
                return (
                    <div className="min-h-screen bg-white relative overflow-hidden">
                        <GradientBarsBackground />
                        <motion.div 
                            variants={pageVariants} 
                            initial="initial" 
                            animate="in" 
                            exit="out" 
                            transition={pageTransition} 
                            className="relative z-10 text-center px-4 py-20 max-w-6xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Practice Efficiency 
                                <span className="block bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent mt-2"> 
                                    Grader
                                </span>
                            </h1>
                            
                            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed max-w-4xl mx-auto">
                                Is your practice technology helping you thrive or just survive? 
                                <br className="hidden md:block" />
                                <span className="text-gray-900 font-semibold">Take our 8-question assessment</span> to discover your efficiency score and unlock AI solutions.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
                                {[
                                    { icon: Clock, text: "8 questions", subtitle: "Quick comprehensive assessment" },
                                    { icon: TrendingUp, text: "Personalized insights", subtitle: "Custom analysis for your practice" },
                                    { icon: Star, text: "Actionable solutions", subtitle: "Immediate improvement strategies" }
                                ].map((feature, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className="p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <feature.icon className="w-10 h-10 text-[#387E89] mx-auto mb-4" />
                                        <p className="text-gray-900 font-bold text-xl mb-2">{feature.text}</p>
                                        <p className="text-gray-600">{feature.subtitle}</p>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <motion.button 
                                onClick={handleStart} 
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-6 flex items-center gap-3 mx-auto"
                            >
                                Start Your Assessment
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                            
                            <p className="text-gray-500 text-sm">
                                Join 1,000+ practices already using S10.AI
                            </p>
                        </motion.div>
                    </div>
                );
        }
    };
    
    return (
        <>
            <Helmet>
                <title>Practice Efficiency Grader | S10.AI</title>
                <meta name="description" content="Assess your practice efficiency with our comprehensive AI-powered grader. Get personalized insights and discover how S10.AI can transform your healthcare practice." />
            </Helmet>
            
            <main className="min-h-screen w-full">
                <div className="relative z-10 min-h-screen">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </div>
            </main>

            <style>{`
                @keyframes pulseBar {
                    0% { transform: scaleY(var(--scale-start, 0.4)); }
                    100% { transform: scaleY(var(--scale-end, 1)); }
                }
            `}</style>
        </>
    );
}
