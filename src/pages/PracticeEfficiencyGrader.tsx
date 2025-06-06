
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Brain, ChevronRight, Star, TrendingUp, Clock, DollarSign, Users, Heart } from 'lucide-react';

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
}

const CustomSlider: React.FC<CustomSliderProps> = ({ value, onChange, min, max, unit }) => (
    <div className="w-full">
        <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-white">{unit}</span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold text-xl shadow-lg">
                {value}
            </span>
        </div>
        <input 
            type="range" 
            min={min} 
            max={max} 
            value={value} 
            onChange={e => onChange(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700/50 rounded-full appearance-none cursor-pointer range-thumb" 
        />
        <style>{`
            .range-thumb::-webkit-slider-thumb { 
                -webkit-appearance: none; 
                appearance: none; 
                width: 28px; 
                height: 28px; 
                background: linear-gradient(135deg, #143151, #387E89); 
                border-radius: 50%; 
                cursor: pointer; 
                border: 3px solid white; 
                box-shadow: 0 4px 12px rgba(20, 49, 81, 0.4); 
                transition: all 0.2s; 
            }
            .range-thumb::-webkit-slider-thumb:hover { 
                transform: scale(1.1); 
                box-shadow: 0 6px 16px rgba(20, 49, 81, 0.6); 
            }
            .range-thumb::-moz-range-thumb { 
                width: 28px; 
                height: 28px; 
                background: linear-gradient(135deg, #143151, #387E89); 
                border-radius: 50%; 
                cursor: pointer; 
                border: 3px solid white; 
                box-shadow: 0 4px 12px rgba(20, 49, 81, 0.4); 
            }
        `}</style>
    </div>
);

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
        className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
            selected 
                ? 'bg-gradient-to-r from-[#143151] to-[#387E89] border-[#5192AE] shadow-xl' 
                : 'bg-gray-800/80 border-gray-600 hover:border-[#5192AE] hover:bg-gray-700/80'
        }`}
    >
        <p className="text-white text-center text-base md:text-lg font-medium leading-relaxed">{text}</p>
    </motion.div>
);

// --- TYPE DEFINITIONS ---
interface SliderOptions {
    min: number;
    max: number;
    unit: string;
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
        valueProp: "Well-being & Work-Life Balance",
        icon: Clock,
        analysis: (val: number | string) => {
            const numVal = typeof val === 'string' ? parseInt(val) || 0 : val;
            return numVal > 8 ? "Critical" : numVal > 3 ? "High" : "Good";
        },
        reportText: (val: number | string) => `With providers spending ${val} hours on after-hours charting, there's significant burnout risk. S10.AI can reduce this by 80% through automated documentation, giving providers their evenings back.`,
        solution: "Our AI scribes handle real-time documentation, eliminating pajama time and reducing provider burnout by up to 80%."
    },
    {
        id: 2, 
        category: "Financial Health", 
        title: "The \"Revenue Leak\" Problem", 
        question: "How confident are you that you're capturing all earned revenue, considering no-shows and claim denials?", 
        type: "options", 
        options: [
            "Very confident, our process is optimized.", 
            "Somewhat confident, but there are leaks.", 
            "Not confident, we know we're losing revenue."
        ], 
        valueProp: "Revenue Optimization",
        icon: DollarSign,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("Not confident") ? "Critical" : strVal.includes("Somewhat") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Your confidence level suggests revenue leakage from scheduling and billing inefficiencies. Practices using S10.AI see 15-25% revenue increases through better capture and coding accuracy.`,
        solution: "Our platform prevents no-shows with AI-powered scheduling and ensures accurate coding for maximum reimbursement."
    },
    {
        id: 3, 
        category: "Staffing & Operations", 
        title: "The \"Manual Labor\" Problem", 
        question: "What portion of your admin staff's day is spent on repetitive tasks like calls and data entry?", 
        type: "options", 
        options: [
            "A small fraction (<25%), we're highly automated.", 
            "A significant portion (25-50%).", 
            "The majority of their day (>50%)."
        ], 
        valueProp: "Staff Efficiency & Automation",
        icon: Users,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("majority") ? "Critical" : strVal.includes("significant") ? "High" : "Good";
        },
        reportText: (val: number | string) => `With staff spending significant time on manual work, their capacity for high-value patient interaction is limited. S10.AI automates 70% of these tasks, freeing staff for meaningful work.`,
        solution: "Our AI agents handle calls, scheduling, and data entry, allowing your staff to focus on patient care and relationship building."
    },
    {
        id: 4, 
        category: "Patient Care", 
        title: "The \"Screen Barrier\" Problem", 
        question: "Does documentation currently get in the way of meaningful provider-patient interaction?", 
        type: "options", 
        options: [
            "No, providers are fully present.", 
            "Sometimes, screen-time is a distraction.", 
            "Yes, it significantly inhibits face-to-face care."
        ], 
        valueProp: "Patient Experience & Care Quality",
        icon: Heart,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("inhibits") ? "Critical" : strVal.includes("distraction") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Documentation barriers reduce patient satisfaction and care quality. With S10.AI, providers maintain 100% eye contact while our AI handles notes, improving patient relationships dramatically.`,
        solution: "Our ambient AI documentation lets providers focus entirely on patients while capturing comprehensive notes automatically."
    },
    {
        id: 5, 
        category: "Technology ROI", 
        title: "The \"Tech Burden\" Problem", 
        question: "Does your current software actively reduce work for your team, or create more?", 
        type: "options", 
        options: [
            "It dramatically reduces our workload.", 
            "It helps a little, not a game-changer.", 
            "No, it feels like it creates more work."
        ], 
        valueProp: "Technology Efficiency",
        icon: TrendingUp,
        analysis: (val: number | string) => {
            const strVal = String(val);
            return strVal.includes("creates more work") ? "Critical" : strVal.includes("not a game-changer") ? "High" : "Good";
        },
        reportText: (val: number | string) => `Technology should amplify your team, not burden them. S10.AI integrates seamlessly with existing systems while dramatically reducing manual work across all workflows.`,
        solution: "Our platform integrates with any EHR without APIs, immediately reducing workload while improving accuracy and efficiency."
    }
];

const AnimatedGraphic = ({ questionId }: { questionId: number }) => {
    const graphics = [
        { text: "Reclaim provider time from after-hours charting", icon: Clock, color: "from-blue-500 to-purple-600" },
        { text: "Plug revenue leaks and maximize earnings", icon: DollarSign, color: "from-green-500 to-emerald-600" },
        { text: "Automate repetitive tasks for your team", icon: Users, color: "from-orange-500 to-red-600" },
        { text: "Enable genuine patient connections", icon: Heart, color: "from-pink-500 to-rose-600" },
        { text: "Deploy technology that works for you", icon: TrendingUp, color: "from-indigo-500 to-blue-600" }
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
                className="w-full h-full flex flex-col items-center justify-center text-center p-8"
            >
                <motion.div 
                    className={`w-32 h-32 mb-8 rounded-full bg-gradient-to-br ${currentGraphic.color} flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <IconComponent className="w-16 h-16 text-white" />
                </motion.div>
                <motion.p 
                    className="text-xl text-gray-300 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {currentGraphic.text}
                </motion.p>
            </motion.div>
        </AnimatePresence>
    );
};

const InputField = ({ name, type, placeholder }: { name: string; type: string; placeholder?: string }) => (
    <div>
        <label htmlFor={name} className="sr-only">{name}</label>
        <input 
            id={name} 
            type={type} 
            placeholder={placeholder || name} 
            required 
            className="w-full bg-gray-800/80 border-2 border-gray-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-[#5192AE] focus:border-[#5192AE] transition-all duration-300 placeholder-gray-400" 
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
    
    const reportResults = useMemo(() => quizQuestions.map((q, i) => {
        const answer = answers[i] !== undefined ? answers[i] : (q.type === 'slider' ? 0 : "");
        return { ...q, answer, analysisResult: q.analysis(answer!) };
    }), [answers]);

    const overallScore = useMemo(() => {
        const scores = reportResults.map(r => r.analysisResult === 'Good' ? 3 : r.analysisResult === 'High' ? 2 : 1);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return Math.round((total / 15) * 100);
    }, [reportResults]);

    const renderContent = () => {
        switch (appState) {
            case 'quiz':
                const question = quizQuestions[currentQuestionIndex];
                if (!question) return null;
                const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
                
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] w-full max-w-7xl mx-auto bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8">
                            <AnimatedGraphic questionId={question.id} />
                        </div>
                        <div className="flex flex-col p-8 md:p-12 justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                                    <p className="text-[#5192AE] font-semibold text-sm uppercase tracking-wider">{question.category}</p>
                                </div>
                                
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={currentQuestionIndex} 
                                        initial={{ opacity: 0, x: 50 }} 
                                        animate={{ opacity: 1, x: 0 }} 
                                        exit={{ opacity: 0, x: -50 }} 
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{question.title}</h2>
                                        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">{question.question}</p>
                                        
                                        <div className="space-y-4">
                                            {question.type === 'slider' && (
                                                <CustomSlider 
                                                    value={typeof answers[currentQuestionIndex] === 'number' ? answers[currentQuestionIndex] as number : 0} 
                                                    onChange={(val) => handleAnswer(val, currentQuestionIndex)} 
                                                    min={(question.options as SliderOptions).min}
                                                    max={(question.options as SliderOptions).max}
                                                    unit={(question.options as SliderOptions).unit}
                                                />
                                            )}
                                            {question.type === 'options' && Array.isArray(question.options) && question.options.map((opt) => (
                                                <OptionCard 
                                                    key={opt} 
                                                    text={opt} 
                                                    selected={answers[currentQuestionIndex] === opt} 
                                                    onClick={() => handleAnswer(opt, currentQuestionIndex)} 
                                                />
                                            ))}
                                        </div>
                                        
                                        {question.type === 'slider' && (
                                            <motion.button 
                                                onClick={nextSliderQuestion} 
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full mt-8 bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                                            >
                                                Next Question <ChevronRight className="w-5 h-5" />
                                            </motion.button>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            
                            <div className="mt-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-400 text-sm">Progress</span>
                                    <span className="text-[#5192AE] text-sm font-semibold">{Math.round(progress)}%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-3">
                                    <motion.div 
                                        className="bg-gradient-to-r from-[#143151] to-[#387E89] h-3 rounded-full shadow-lg" 
                                        style={{ width: `${progress}%` }} 
                                        transition={{ duration: 0.5 }}
                                        layoutId="progress"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'form':
                return (
                    <motion.div 
                        variants={pageVariants} 
                        initial="initial" 
                        animate="in" 
                        exit="out" 
                        transition={pageTransition} 
                        className="p-8 max-w-2xl mx-auto bg-gray-900/90 backdrop-blur-sm rounded-3xl border border-gray-700 shadow-2xl"
                    >
                        <div className="text-center mb-8">
                            <motion.div 
                                className="w-20 h-20 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Star className="w-10 h-10 text-white" />
                            </motion.div>
                            <h2 className="text-4xl font-bold text-white mb-4">Unlock Your Complete Analysis</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">Enter your details to receive a personalized efficiency report with actionable AI strategies tailored to your practice.</p>
                        </div>
                        
                        <form onSubmit={handleSubmitForm} className="space-y-6">
                            <InputField name="fullName" type="text" placeholder="Full Name" />
                            <InputField name="email" type="email" placeholder="Work Email" />
                            <InputField name="practice" type="text" placeholder="Practice Name" />
                            <InputField name="phone" type="tel" placeholder="Phone Number (Optional)" />
                            
                            <motion.button 
                                type="submit" 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 text-lg"
                            >
                                Get My Personalized Report
                            </motion.button>
                        </form>
                        
                        <p className="text-gray-400 text-center text-sm mt-4">
                            Your information is secure and will only be used to provide your analysis.
                        </p>
                    </motion.div>
                );

            case 'report':
                return (
                    <motion.div 
                        variants={pageVariants} 
                        initial="initial" 
                        animate="in" 
                        exit="out" 
                        transition={pageTransition} 
                        className="w-full max-w-6xl mx-auto p-4 md:p-8 text-white"
                    >
                        <div className="text-center mb-12">
                            <motion.div 
                                className="w-24 h-24 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Brain className="w-12 h-12 text-white" />
                            </motion.div>
                            <h1 className="text-5xl font-extrabold text-white mb-4">Your Practice Efficiency Report</h1>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <span className="text-2xl font-semibold text-gray-300">Overall Efficiency Score:</span>
                                <span className={`text-4xl font-bold px-6 py-2 rounded-full ${
                                    overallScore >= 80 ? 'bg-green-500/20 text-green-400' :
                                    overallScore >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                }`}>
                                    {overallScore}%
                                </span>
                            </div>
                            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                Based on your responses, here's how S10.AI can transform your practice efficiency.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {reportResults.map(res => {
                                const IconComponent = res.icon;
                                return (
                                    <motion.div 
                                        key={res.id} 
                                        className={`p-8 rounded-2xl border-2 ${
                                            res.analysisResult === 'Critical' 
                                                ? 'bg-red-900/20 border-red-500/50' 
                                                : res.analysisResult === 'High' 
                                                ? 'bg-yellow-900/20 border-yellow-500/50' 
                                                : 'bg-green-900/20 border-green-500/50'
                                        } backdrop-blur-sm`}
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-xl ${
                                                res.analysisResult === 'Critical' 
                                                    ? 'bg-red-500/20' 
                                                    : res.analysisResult === 'High' 
                                                    ? 'bg-yellow-500/20' 
                                                    : 'bg-green-500/20'
                                            }`}>
                                                <IconComponent className={`w-6 h-6 ${
                                                    res.analysisResult === 'Critical' 
                                                        ? 'text-red-400' 
                                                        : res.analysisResult === 'High' 
                                                        ? 'text-yellow-400' 
                                                        : 'text-green-400'
                                                }`} />
                                            </div>
                                            <div className="flex-1">
                                                <div className={`text-sm px-3 py-1 rounded-full font-semibold w-fit ${
                                                    res.analysisResult === 'Critical' 
                                                        ? 'bg-red-500/20 text-red-400' 
                                                        : res.analysisResult === 'High' 
                                                        ? 'bg-yellow-500/20 text-yellow-400' 
                                                        : 'bg-green-500/20 text-green-400'
                                                }`}>
                                                    {res.analysisResult} Priority
                                                </div>
                                                <h3 className="text-xl font-bold mt-2">{res.valueProp}</h3>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-300 mb-4 leading-relaxed">{res.reportText(res.answer!)}</p>
                                        
                                        <div className="bg-[#143151]/30 rounded-lg p-4 mb-4 border border-[#387E89]/30">
                                            <p className="text-[#5192AE] font-semibold mb-2">S10.AI Solution:</p>
                                            <p className="text-gray-200 text-sm">{res.solution}</p>
                                        </div>
                                        
                                        <div className="text-sm p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                                            <span className="text-gray-400">Your Answer: </span>
                                            <span className="font-semibold text-[#5192AE]">
                                                {Array.isArray(res.answer) ? res.answer.join(', ') : `${res.answer}${res.type === 'slider' ? ' hrs' : ''}`}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div 
                            className="text-center p-10 bg-gradient-to-br from-[#143151] via-[#387E89] to-[#143151] rounded-3xl shadow-2xl border border-[#5192AE]/30"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Practice?</h2>
                            <p className="text-blue-100 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                                S10.AI is purpose-built to solve these exact challenges. See your projected ROI and get a personalized implementation plan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#143151] font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all shadow-lg"
                                    onClick={() => window.open('/contact', '_blank')}
                                >
                                    Schedule My Demo
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-[#143151] transition-all"
                                    onClick={() => window.open('/pricing', '_blank')}
                                >
                                    View Pricing
                                </motion.button>
                            </div>
                        </motion.div>
                        
                        <div className="text-center mt-8">
                            <button 
                                onClick={handleRetake} 
                                className="text-gray-400 hover:text-[#5192AE] transition-colors text-lg"
                            >
                                ← Retake the Assessment
                            </button>
                        </div>
                    </motion.div>
                );

            default: // intro
                return (
                    <motion.div 
                        variants={pageVariants} 
                        initial="initial" 
                        animate="in" 
                        exit="out" 
                        transition={pageTransition} 
                        className="text-center p-8 max-w-4xl mx-auto"
                    >
                        <motion.div 
                            className="w-32 h-32 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Brain className="w-16 h-16 text-white" />
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Practice Efficiency 
                            <span className="bg-gradient-to-r from-[#5192AE] to-[#A5CCF3] bg-clip-text text-transparent"> Grader</span>
                        </h1>
                        
                        <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                            Is your practice technology helping you thrive or just survive? 
                            <br />
                            <span className="text-[#5192AE] font-semibold">Take our 2-minute assessment</span> to discover your efficiency score and unlock AI solutions.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                            {[
                                { icon: Clock, text: "2 minutes", subtitle: "Quick assessment" },
                                { icon: TrendingUp, text: "Personalized", subtitle: "Custom analysis" },
                                { icon: Star, text: "Actionable", subtitle: "Immediate insights" }
                            ].map((feature, idx) => (
                                <motion.div 
                                    key={idx}
                                    className="p-6 rounded-xl bg-gray-800/60 border border-gray-700"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <feature.icon className="w-8 h-8 text-[#5192AE] mx-auto mb-3" />
                                    <p className="text-white font-bold text-lg">{feature.text}</p>
                                    <p className="text-gray-400">{feature.subtitle}</p>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.button 
                            onClick={handleStart} 
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold py-6 px-12 rounded-full text-xl hover:shadow-2xl transition-all duration-300 mb-4"
                        >
                            Start Your Assessment
                        </motion.button>
                        
                        <p className="text-gray-400 text-sm">
                            Join 1,000+ practices already using S10.AI
                        </p>
                    </motion.div>
                );
        }
    };
    
    return (
        <>
            <Helmet>
                <title>Practice Efficiency Grader | S10.AI</title>
                <meta name="description" content="Assess your practice efficiency with our 2-minute AI-powered grader. Get personalized insights and discover how S10.AI can transform your healthcare practice." />
            </Helmet>
            
            <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black font-sans flex items-center justify-center relative p-4 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50"></div>
                
                {/* Floating elements */}
                <motion.div 
                    className="absolute top-20 left-20 w-4 h-4 bg-[#5192AE] rounded-full opacity-60"
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute bottom-32 right-32 w-6 h-6 bg-[#A5CCF3] rounded-full opacity-40"
                    animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                
                <style>{`
                    .bg-dots-pattern { 
                        background-image: radial-gradient(rgba(81, 146, 174, 0.1) 1px, transparent 1px); 
                        background-size: 2rem 2rem; 
                    }
                `}</style>
                
                <AnimatePresence mode="wait">
                    {renderContent()}
                </AnimatePresence>
            </main>
        </>
    );
}
