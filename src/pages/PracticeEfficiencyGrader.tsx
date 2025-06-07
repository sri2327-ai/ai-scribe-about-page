import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, FileText, Award, CheckCircle, ArrowRight, Users, TrendingUp, Target } from 'lucide-react';
import { motion } from "framer-motion";

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

const PracticeEfficiencyGrader = () => {
    const [currentStep, setCurrentStep] = useState('intro'); // 'intro', 'questions', 'form', 'report', 'benchmark'
    
    // Interactive arrow states
    const canvasRef = useRef(null);
    const targetRef = useRef(null);
    const mousePosRef = useRef({ x: null, y: null });
    const ctxRef = useRef(null);
    const animationFrameIdRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    const resolvedCanvasColorsRef = useRef({
        strokeStyle: { r: 128, g: 128, b: 128 }, // Default mid-gray
    });

    // Check if device is desktop for interactive arrow
    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        
        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
        
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    // Canvas color resolver
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
        if (!canvasRef.current || !targetRef.current || !ctxRef.current || !isDesktop) return;

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
    }, [isDesktop]);

    // Canvas setup and animation
    useEffect(() => {
        if (!isDesktop) return;
        
        const canvas = canvasRef.current;
        if (!canvas || !targetRef.current) return;

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
    }, [drawArrow, isDesktop]);

    const renderIntroPage = () => (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Navigation */}
            <nav className="w-full max-w-4xl mx-auto flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-6 lg:px-8 py-4 text-sm">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
                    <button className="py-2 px-3 sm:px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors whitespace-nowrap">
                        Home
                    </button>
                    <button className="py-2 px-3 sm:px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors whitespace-nowrap">
                        About
                    </button>
                    <button className="py-2 px-3 sm:px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors whitespace-nowrap">
                        Pricing
                    </button>
                    <button className="py-2 px-3 sm:px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors whitespace-nowrap">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                    >
                        Practice Efficiency Grader
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        Discover how efficient your practice really is and unlock actionable insights to optimize your workflow with AI.
                    </motion.p>
                    
                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-8 sm:mb-12"
                    >
                        <Button
                            ref={targetRef}
                            onClick={() => setCurrentStep('questions')}
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Start Your Assessment
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </motion.div>
                </div>

                {/* Feature Cards */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto w-full"
                >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-4 sm:p-6 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Quick 10-Question Assessment</h3>
                            <p className="text-sm sm:text-base text-gray-600">Get personalized insights about your practice efficiency in under 3 minutes</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-4 sm:p-6 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">3 min</h3>
                            <p className="text-sm sm:text-base text-gray-600">Complete assessment time</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
                        <CardContent className="p-4 sm:p-6 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">10 questions</h3>
                            <p className="text-sm sm:text-base text-gray-600">Free report</p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Benefits Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto w-full"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">What You'll Discover</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/60 rounded-lg">
                            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Efficiency Score</h3>
                                <p className="text-sm sm:text-base text-gray-600">Get a comprehensive score based on your current workflow practices</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/60 rounded-lg">
                            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Peer Comparison</h3>
                                <p className="text-sm sm:text-base text-gray-600">See how your practice compares to similar healthcare providers</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/60 rounded-lg">
                            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Improvement Areas</h3>
                                <p className="text-sm sm:text-base text-gray-600">Identify specific areas where AI can boost your efficiency</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/60 rounded-lg">
                            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Actionable Insights</h3>
                                <p className="text-sm sm:text-base text-gray-600">Receive tailored recommendations for your practice type</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer Spacing */}
            <div className="h-8 sm:h-12 lg:h-16"></div>

            {/* Interactive Arrow Canvas - Desktop Only */}
            {isDesktop && (
                <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10"></canvas>
            )}
        </div>
    );

    const renderQuestions = () => (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-4 sm:pb-6">
                        <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Practice Efficiency Assessment</CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                            Please answer the following questions to assess your practice efficiency
                        </CardDescription>
                        <Progress value={30} className="mt-4" />
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">Question 3 of 10</p>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                        {/* Questions content remains the same */}
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">How many hours per day do you spend on administrative tasks?</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <label className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input type="radio" name="admin-time" className="text-blue-600" />
                                        <span className="text-sm sm:text-base">Less than 1 hour</span>
                                    </label>
                                    <label className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input type="radio" name="admin-time" className="text-blue-600" />
                                        <span className="text-sm sm:text-base">1-2 hours</span>
                                    </label>
                                    <label className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input type="radio" name="admin-time" className="text-blue-600" />
                                        <span className="text-sm sm:text-base">3-4 hours</span>
                                    </label>
                                    <label className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input type="radio" name="admin-time" className="text-blue-600" />
                                        <span className="text-sm sm:text-base">More than 4 hours</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <Button variant="outline" onClick={() => setCurrentStep('intro')} className="w-full sm:w-auto">
                                Previous
                            </Button>
                            <Button onClick={() => setCurrentStep('form')} className="w-full sm:w-auto">
                                Next Question
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

    const renderForm = () => (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-4 sm:pb-6">
                        <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Get Your Personalized Report</CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                            Enter your details to receive your detailed efficiency analysis
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">First Name</label>
                                    <input type="text" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Last Name</label>
                                    <input type="text" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
                                <input type="email" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Practice Type</label>
                                <select className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base">
                                    <option>Family Medicine</option>
                                    <option>Internal Medicine</option>
                                    <option>Pediatrics</option>
                                    <option>Cardiology</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </form>
                        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <Button variant="outline" onClick={() => setCurrentStep('questions')} className="w-full sm:w-auto">
                                Back to Questions
                            </Button>
                            <Button onClick={() => setCurrentStep('report')} className="w-full sm:w-auto">
                                Generate Report
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

    const renderReport = () => (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-4 sm:pb-6">
                        <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Your Practice Efficiency Score</CardTitle>
                        <div className="mt-4 sm:mt-6">
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">72%</div>
                            <Badge variant="secondary" className="text-sm sm:text-base px-3 py-1">Above Average</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-blue-600">85%</div>
                                <div className="text-xs sm:text-sm text-gray-600">Patient Flow</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-green-600">68%</div>
                                <div className="text-xs sm:text-sm text-gray-600">Documentation</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-yellow-50 rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-yellow-600">75%</div>
                                <div className="text-xs sm:text-sm text-gray-600">Communication</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-purple-600">60%</div>
                                <div className="text-xs sm:text-sm text-gray-600">Admin Tasks</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg sm:text-xl">Key Strengths</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center text-sm sm:text-base">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    Excellent patient scheduling system
                                </li>
                                <li className="flex items-center text-sm sm:text-base">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    Efficient appointment management
                                </li>
                                <li className="flex items-center text-sm sm:text-base">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    Good patient communication
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg sm:text-xl">Improvement Opportunities</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center text-sm sm:text-base">
                                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    Automate clinical documentation
                                </li>
                                <li className="flex items-center text-sm sm:text-base">
                                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    Streamline administrative tasks
                                </li>
                                <li className="flex items-center text-sm sm:text-base">
                                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    Implement AI-powered workflows
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <Button onClick={() => setCurrentStep('benchmark')} size="lg" className="w-full sm:w-auto">
                        Compare with Benchmarks
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Download Full Report
                    </Button>
                </div>
            </div>
        </div>
    );

    const renderBenchmark = () => (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-4 sm:pb-6">
                        <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Industry Benchmark Study</CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl mx-auto">
                            See how your practice compares to thousands of other healthcare providers across different efficiency metrics
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">72%</div>
                                <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Your Score</div>
                                <div className="text-xs sm:text-sm text-gray-600">Above Average</div>
                            </div>
                            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                                <div className="text-2xl sm:text-3xl font-bold text-gray-600 mb-2">65%</div>
                                <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Industry Average</div>
                                <div className="text-xs sm:text-sm text-gray-600">All Practices</div>
                            </div>
                            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:col-span-2 lg:col-span-1">
                                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">89%</div>
                                <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Top Performers</div>
                                <div className="text-xs sm:text-sm text-gray-600">Top 10%</div>
                            </div>
                        </div>

                        <Separator className="my-6 sm:my-8" />

                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Detailed Comparison by Category</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Patient Flow Management</span>
                                                <span className="font-medium">85%</span>
                                            </div>
                                            <Progress value={85} className="h-2" />
                                            <div className="text-xs text-gray-500 mt-1">Industry avg: 70%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Clinical Documentation</span>
                                                <span className="font-medium">68%</span>
                                            </div>
                                            <Progress value={68} className="h-2" />
                                            <div className="text-xs text-gray-500 mt-1">Industry avg: 62%</div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Communication Efficiency</span>
                                                <span className="font-medium">75%</span>
                                            </div>
                                            <Progress value={75} className="h-2" />
                                            <div className="text-xs text-gray-500 mt-1">Industry avg: 68%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Administrative Tasks</span>
                                                <span className="font-medium">60%</span>
                                            </div>
                                            <Progress value={60} className="h-2" />
                                            <div className="text-xs text-gray-500 mt-1">Industry avg: 58%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Key Insights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="p-4 sm:p-6 bg-green-50 rounded-lg">
                                        <h4 className="font-semibold text-green-900 mb-2">Strengths</h4>
                                        <ul className="text-sm text-green-800 space-y-1">
                                            <li>• Patient flow 21% above average</li>
                                            <li>• Communication 10% above average</li>
                                            <li>• Overall efficiency in top 25%</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 sm:p-6 bg-orange-50 rounded-lg">
                                        <h4 className="font-semibold text-orange-900 mb-2">Growth Opportunities</h4>
                                        <ul className="text-sm text-orange-800 space-y-1">
                                            <li>• 17% potential gain in admin efficiency</li>
                                            <li>• 21% documentation improvement possible</li>
                                            <li>• Could reach top 10% with AI tools</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <Button onClick={() => setCurrentStep('intro')} variant="outline" size="lg" className="w-full sm:w-auto">
                                Start New Assessment
                            </Button>
                            <Button size="lg" className="w-full sm:w-auto">
                                Get AI Recommendations
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

    // Main render logic
    switch (currentStep) {
        case 'questions':
            return renderQuestions();
        case 'form':
            return renderForm();
        case 'report':
            return renderReport();
        case 'benchmark':
            return renderBenchmark();
        default:
            return renderIntroPage();
    }
};

export default PracticeEfficiencyGrader;
