import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import { Facebook, Linkedin, X } from "lucide-react";
import { useParams } from 'react-router-dom';
import { Clock, Zap, Users, User, Calendar, Check } from "lucide-react";
import { QuizSection } from './QuizSection';
import { BlogFAQ } from './BlogFAQ';
import { ResponsiveCarousel } from '@/components/ui/ResponsiveCarousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  const post = slug ? mockBlogPosts[slug] : null;
  
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
        <div className="max-w-6xl mx-auto">
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
              <div className="hidden md:grid md:grid-cols-3 gap-6">
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
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
