import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import { Facebook, Linkedin, X, ArrowUp, Download } from "lucide-react";
import { useParams } from 'react-router-dom';
import { Clock, Zap, Users, User, Calendar, Check } from "lucide-react";
import { QuizSection } from './QuizSection';
import { BlogFAQ } from './BlogFAQ';
import { ResponsiveCarousel } from '@/components/ui/ResponsiveCarousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from './BlogSidebar';
import { BlogPopup } from './BlogPopup';
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  relatedPosts: number[];
}

interface BlogPosts {
  [key: string]: BlogPost;
}

const mockBlogPosts: BlogPosts = {
  "virtual-medical-scribe": {
    id: 1,
    title: "Virtual Medical Scribe Robots",
    image: "/ImprovePatientCare.webp",
    author: "Dr. Sarah Miller",
    date: "April 15, 2025",
    readTime: "8 min read",
    content: `<h2>Background</h2>
    <p>Medical documentation has long been a challenge for healthcare providers. The introduction of virtual medical scribe robots is transforming how clinicians manage their documentation workload.</p>
    <h2>The Challenge</h2>
    <p>Time-consuming documentation processes have reduced the quality time doctors spend with patients and led to increased burnout among healthcare professionals.</p>
    <h2>The Solution</h2>
    <p>AI-powered virtual medical scribes can transcribe conversations, extract relevant medical information, and automatically generate clinical notes.</p>
    <h2>Results</h2>
    <ul>
      <li>1-2 hours saved daily on documentation tasks</li>
      <li>80% faster clinical note generation</li>
      <li>Significant reduction in after-hours work</li>
      <li>Seamless EHR integration</li>
    </ul>`,
    relatedPosts: [2, 3, 4]
  },
  "ai-medical-scribe": {
    id: 2,
    title: "AI Medical Scribe Company",
    image: "/Psychotherapy-Documentation.png",
    author: "James Wilson",
    date: "April 10, 2025",
    readTime: "6 min read",
    content: `<h2>Introduction</h2>
    <p>AI medical scribe companies are revolutionizing healthcare documentation with sophisticated language models designed specifically for clinical settings.</p>
    <h2>Benefits</h2>
    <p>These specialized AI solutions capture patient encounters with remarkable accuracy while maintaining compliance with healthcare regulations.</p>
    <h2>Implementation</h2>
    <p>Modern AI scribes integrate directly with electronic health record systems, providing seamless documentation support during patient visits.</p>`,
    relatedPosts: [1, 3, 4]
  },
  "ai-revolution-in-medicine": {
    id: 3,
    title: "AI Is Revolutionizing Medical Practice",
    image: "/Real-Life-Scenario.webp",
    author: "Dr. Michael Chang",
    date: "March 28, 2025",
    readTime: "10 min read",
    content: `<h2>The AI Revolution in Healthcare</h2>
    <p>Artificial intelligence is transforming medical practice across specialties, from diagnostics to treatment planning and documentation.</p>
    <h2>Case Studies</h2>
    <p>Physicians implementing AI assistants report significant improvements in workflow efficiency and clinical decision-making.</p>`,
    relatedPosts: [1, 2, 4]
  },
  "medical-dictation-explained": {
    id: 4,
    title: "Medical Dictation and Scribing Explained",
    image: "/placeholder.svg",
    author: "Elizabeth Taylor, MD",
    date: "March 15, 2025",
    readTime: "5 min read",
    content: `<h2>Understanding Medical Dictation</h2>
    <p>Medical dictation has evolved from simple voice recording to sophisticated AI-powered transcription systems.</p>
    <h2>Modern Scribing Solutions</h2>
    <p>Today's scribing solutions combine human expertise with artificial intelligence to create accurate, compliant medical documentation.</p>`,
    relatedPosts: [1, 2, 3]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const post = slug ? mockBlogPosts[slug] : null;

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for sticky buttons
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const downloadPDF = () => {
    try {
      console.log('PDF download started');
      const currentUrl = window.location.href;
      const printContent = document.createElement('div');
      
      // Dynamic content based on current post
      printContent.innerHTML = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.6;">
          <!-- S10.AI Header -->
          <div style="border-bottom: 3px solid #143151; padding-bottom: 20px; margin-bottom: 30px; text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 10px;">
              <img src="/s10-logo.webp" alt="S10.AI Logo" style="height: 40px; width: auto;" />
              <div style="background: linear-gradient(135deg, #143151 0%, #387E89 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #143151; font-size: 28px; font-weight: bold;">
                S10.AI
              </div>
            </div>
            <p style="color: #666; font-size: 14px; margin: 0;">AI-Powered Healthcare Solutions</p>
            <p style="color: #888; font-size: 12px; margin: 5px 0 0 0;">Downloaded from: https://s10.ai/blog</p>
          </div>
          
          <!-- Article Content -->
          <div style="margin-bottom: 30px;">
            <h1 style="color: #143151; font-size: 32px; font-weight: bold; margin-bottom: 20px; line-height: 1.3;">${post?.title || ''}</h1>
            
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #387E89;">
              <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center;">
                <div style="flex: 1;">
                  <p style="margin: 0 0 8px 0; color: #143151; font-weight: 600; font-size: 16px;"><strong>Author:</strong> ${post?.author || ''}</p>
                  <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;"><strong>Published:</strong> ${post?.date || ''}</p>
                  <p style="margin: 0; color: #666; font-size: 14px;"><strong>Read Time:</strong> ${post?.readTime || ''}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Article Body -->
          <div style="color: #333; font-size: 16px;">
            ${post?.content || ''}
          </div>
          
          <!-- S10.AI Footer -->
          <div style="margin-top: 40px; padding: 25px 20px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="background: linear-gradient(135deg, #143151 0%, #387E89 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #143151; font-size: 24px; font-weight: bold; margin-bottom: 8px;">
                S10.AI
              </div>
              <p style="color: #143151; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Revolutionizing Healthcare with AI</p>
              <p style="color: #666; font-size: 14px; margin: 0 0 15px 0;">Leading AI-powered medical scribe and healthcare automation solutions</p>
            </div>
            
            <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; font-size: 13px;">
              <div style="flex: 1; min-width: 200px;">
                <p style="color: #143151; font-weight: 600; margin: 0 0 8px 0;">🌐 Website</p>
                <p style="color: #666; margin: 0;">https://s10.ai</p>
              </div>
              <div style="flex: 1; min-width: 200px;">
                <p style="color: #143151; font-weight: 600; margin: 0 0 8px 0;">📧 Contact</p>
                <p style="color: #666; margin: 0;">support@s10.ai</p>
              </div>
              <div style="flex: 1; min-width: 200px;">
                <p style="color: #143151; font-weight: 600; margin: 0 0 8px 0;">🚀 Solutions</p>
                <p style="color: #666; margin: 0;">AI Medical Scribe, AI Phone Agents, AI Chat Agents, Custom AI Agents</p>
              </div>
            </div>
            
            <div style="border-top: 1px solid #d1d5db; padding-top: 15px; text-align: center;">
              <p style="color: #143151; font-size: 12px; font-weight: 600; margin: 0 0 5px 0;">Trusted by 10,000+ Healthcare Providers Worldwide</p>
              <p style="color: #888; font-size: 11px; margin: 0;">© ${new Date().getFullYear()} S10.AI. All rights reserved. | Transforming Healthcare Documentation with AI</p>
              <p style="color: #999; font-size: 10px; margin: 5px 0 0 0;">This document was generated from: https://s10.ai/blog</p>
            </div>
          </div>
        </div>
      `;
      
      console.log('HTML content prepared');
      
      // Create HTML content as a string
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>S10.AI - ${post?.title || 'Blog Post'} | Healthcare AI Solutions</title>
            <meta charset="UTF-8">
            <meta name="description" content="S10.AI - Leading AI-powered medical scribe and healthcare automation solutions">
            <link rel="icon" href="/s10-logo.webp" type="image/webp">
            <style>
              @media print {
                body { margin: 0; }
                .no-print { display: none; }
              }
              body { 
                margin: 0; 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #333;
                background: white;
              }
              h1 { 
                color: #143151; 
                font-weight: bold; 
                margin-top: 30px; 
                margin-bottom: 15px;
                page-break-after: avoid;
              }
              h2 { 
                color: #387E89; 
                margin-top: 30px; 
                margin-bottom: 15px;
                font-weight: 600;
                page-break-after: avoid;
              }
              h3, h4, h5, h6 {
                color: #143151;
                margin-top: 25px;
                margin-bottom: 10px;
                page-break-after: avoid;
              }
              p, li { 
                line-height: 1.7; 
                margin-bottom: 12px;
                color: #333;
              }
              ul, ol { 
                margin: 15px 0; 
                padding-left: 25px; 
              }
              li {
                margin-bottom: 8px;
              }
              strong, b {
                color: #143151;
                font-weight: 600;
              }
              blockquote {
                border-left: 4px solid #387E89;
                margin: 20px 0;
                padding-left: 20px;
                font-style: italic;
                color: #555;
              }
              .page-break {
                page-break-before: always;
              }
              .s10-watermark {
                position: fixed;
                bottom: 10px;
                right: 10px;
                opacity: 0.3;
                font-size: 12px;
                color: #143151;
                pointer-events: none;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="s10-watermark">S10.AI - Revolutionizing Healthcare with AI</div>
            ${printContent.innerHTML}
          </body>
        </html>
      `;

      console.log('Opening new window for PDF');
      
      // Simply open window with print dialog
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
        newWindow.focus();
        setTimeout(() => {
          console.log('Triggering print dialog');
          newWindow.print();
        }, 500);
      } else {
        console.error('Failed to open new window - popup blocked?');
        alert('Please allow popups for this site to download the PDF');
      }
    } catch (error) {
      console.error('PDF download error:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };
  
  if (!post) {
    return (
      <div className="min-h-screen py-16 px-4 flex flex-col items-center justify-start">
        <Card className="max-w-4xl w-full p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <p>The blog post you're looking for doesn't exist or has been removed.</p>
        </Card>
      </div>
    );
  }

  const relatedPosts = post.relatedPosts
    .map(id => Object.values(mockBlogPosts).find(p => p.id === id))
    .filter((p): p is BlogPost => p !== undefined);

  const genericQuiz = {
    question: "Is Your Practice Ready for Next-Gen AI Solutions?",
    options: [
      { id: "1", text: "Yes, we're already using advanced digital tools" },
      { id: "2", text: "We're interested but need more information" },
      { id: "3", text: "No, we're still using traditional methods" },
      { id: "4", text: "Not sure, would like to evaluate our readiness" }
    ],
    resultText: "Discover how our AI solutions can transform your practice's efficiency and patient care!"
  };

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="mb-8 overflow-hidden">
                <div className="bg-gradient-to-b from-white to-blue-100 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                      
                      {/* Author and Meta Information */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 border border-gray-200/30 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                            <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg truncate">Dr. Claire Dave</h3>
                              <a 
                                href="#" 
                                className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200 group flex-shrink-0"
                                aria-label="LinkedIn Profile"
                              >
                                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 group-hover:text-blue-700" />
                              </a>
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                              A physician with over 10 years of clinical experience, she leads AI-driven care automation initiatives at S10.AI to streamline healthcare delivery.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        Medical documentation has long been a challenge for healthcare providers...
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          <button aria-label="Share on Facebook" className="p-2 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors">
                            <Facebook className="h-5 w-5" />
                          </button>
                          <button aria-label="Share on X (Twitter)" className="p-2 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors">
                            <X className="h-5 w-5" />
                          </button>
                          <button aria-label="Share on LinkedIn" className="p-2 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </button>
                          <Button 
                            onClick={downloadPDF}
                            variant="outline"
                            size="sm"
                            className="p-2 rounded-full bg-white shadow-sm hover:bg-green-50 border-green-300 text-green-700"
                            aria-label="Download as PDF"
                          >
                            <Download className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full w-fit border border-green-200">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-700">Expert Verified</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <OptimizedImage 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Article Content */}
                <div className="lg:col-span-2">
          
                  <Card className="mb-8 p-6 md:p-8">
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                  </Card>

                  <BlogFAQ />

                  <QuizSection 
                    quiz={genericQuiz} 
                    title="Practice Readiness Assessment" 
                    icon={<Zap className="w-6 h-6 text-blue-600" />} 
                  />
                  
                  {relatedPosts.length > 0 && (
                    <div className="mt-12">
                      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                      <div className="hidden md:grid md:grid-cols-2 gap-6">
                        {relatedPosts.map(relatedPost => (
                          <Card 
                            key={relatedPost.id} 
                            className="overflow-hidden hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                          >
                            <div className="h-40 relative">
                              <OptimizedImage 
                                src={relatedPost.image} 
                                alt={relatedPost.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold line-clamp-2">{relatedPost.title}</h3>
                              <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                                <Clock className="h-4 w-4" />
                                <span>8 min read</span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                      <div className="md:hidden">
                        <ResponsiveCarousel
                          items={relatedPosts}
                          renderItem={(post) => (
                            <Card className="overflow-hidden mx-2">
                              <div className="h-40 relative">
                                <OptimizedImage 
                                  src={post.image} 
                                  alt={post.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                                <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                                  <Clock className="h-4 w-4" />
                                  <span>8 min read</span>
                                </div>
                              </div>
                            </Card>
                          )}
                          columnsDesktop={3}
                          columnsTablet={2}
                          columnsMobile={1}
                          showControls={true}
                          autoPlay={true}
                          controlsBelow={true}
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Sticky Scroll to Top Button */}
      {showScrollTop && (
        <Button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2d6b75] text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
      
      <BlogPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </>
  );
};

export default BlogPost;
