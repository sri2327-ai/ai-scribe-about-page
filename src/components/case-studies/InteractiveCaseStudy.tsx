
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, MessageCircle, BarChart, AlarmClock } from 'lucide-react';
import { QuizSection } from '@/components/blog/QuizSection';
import { cn } from '@/lib/utils';

interface ClinicalInsight {
  title: string;
  source: string;
  link: string;
  summary: string;
}

interface PatientTimeline {
  date: string;
  event: string;
  details: string;
}

interface ClinicalQuiz {
  question: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
}

export interface InteractiveCaseStudyProps {
  patientProfile?: {
    age: string;
    gender: string;
    chiefComplaint: string;
    relevantHistory?: string;
    medications?: string[];
  };
  clinicalScenario: string;
  clinicalInsights?: ClinicalInsight[];
  patientTimeline?: PatientTimeline[];
  clinicalQuiz?: ClinicalQuiz;
  discussionTopics?: string[];
  className?: string;
}

export function InteractiveCaseStudy({
  patientProfile,
  clinicalScenario,
  clinicalInsights,
  patientTimeline,
  clinicalQuiz,
  discussionTopics,
  className
}: InteractiveCaseStudyProps) {
  const [activeTab, setActiveTab] = useState("case");
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [discussionComment, setDiscussionComment] = useState("");
  const [comments, setComments] = useState<{name: string; comment: string; timestamp: string}[]>([
    {name: "Dr. Sarah Johnson", comment: "This case reminds me of a similar patient I had last month. The key was early intervention with anticoagulation therapy.", timestamp: "2 days ago"},
    {name: "Dr. Michael Chen", comment: "I'd be interested to know if any genetic testing was done for this patient.", timestamp: "1 day ago"}
  ]);

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (discussionComment.trim()) {
      setComments([
        {
          name: "You",
          comment: discussionComment,
          timestamp: "Just now"
        },
        ...comments
      ]);
      setDiscussionComment("");
      setShowDiscussionForm(false);
    }
  };

  return (
    <Card className={cn("p-6 shadow-lg bg-gradient-to-br from-white to-blue-50", className)}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="case" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> Case
          </TabsTrigger>
          <TabsTrigger value="evidence" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Evidence
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <AlarmClock className="h-4 w-4" /> Timeline
          </TabsTrigger>
          <TabsTrigger value="quiz" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" /> Quiz
          </TabsTrigger>
          <TabsTrigger value="discussion" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Discussion
          </TabsTrigger>
        </TabsList>

        <TabsContent value="case" className="space-y-6">
          {patientProfile && (
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 mb-6">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Patient Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><span className="font-semibold">Age:</span> {patientProfile.age}</p>
                  <p><span className="font-semibold">Gender:</span> {patientProfile.gender}</p>
                  <p><span className="font-semibold">Chief Complaint:</span> {patientProfile.chiefComplaint}</p>
                </div>
                <div>
                  {patientProfile.relevantHistory && (
                    <p><span className="font-semibold">Relevant History:</span> {patientProfile.relevantHistory}</p>
                  )}
                  {patientProfile.medications && (
                    <div>
                      <p className="font-semibold">Current Medications:</p>
                      <ul className="list-disc pl-5">
                        {patientProfile.medications.map((med, i) => (
                          <li key={i}>{med}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="prose max-w-none">
            <h3 className="text-xl font-bold mb-4">Clinical Scenario</h3>
            <p className="whitespace-pre-wrap">{clinicalScenario}</p>
          </div>

          {discussionTopics && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
              <h4 className="font-semibold mb-2">Discussion Points</h4>
              <ul className="list-disc pl-5 space-y-1">
                {discussionTopics.map((topic, i) => (
                  <li key={i} className="text-gray-700">{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>

        <TabsContent value="evidence" className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Evidence-Based Insights</h3>
          
          {clinicalInsights && clinicalInsights.length > 0 ? (
            <div className="space-y-4">
              {clinicalInsights.map((insight, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-blue-700">{insight.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">Source: {insight.source}</p>
                  <p className="mb-3">{insight.summary}</p>
                  <a 
                    href={insight.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                  >
                    Read Full Article
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p>No clinical insights available for this case study.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Patient Timeline</h3>
          
          {patientTimeline && patientTimeline.length > 0 ? (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300" />
              
              {/* Timeline events */}
              <div className="space-y-6 pl-12 relative">
                {patientTimeline.map((event, i) => (
                  <div key={i} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-12 mt-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                    
                    {/* Event content */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-blue-700 flex items-center gap-2">
                        <span>{event.date}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-800">{event.event}</span>
                      </h4>
                      <p className="mt-1 text-gray-700">{event.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p>No timeline events available for this case study.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="quiz" className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Knowledge Check</h3>
          
          {clinicalQuiz ? (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold mb-4">{clinicalQuiz.question}</h4>
              
              <div className="space-y-3 mb-6">
                {clinicalQuiz.options.map((option) => (
                  <button
                    key={option.id}
                    className={cn(
                      "w-full text-left p-3 rounded-md border-2 transition-all",
                      selectedOption === option.id 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-gray-300",
                      showQuizResult && option.id === clinicalQuiz.correctAnswerId && "border-green-500 bg-green-50",
                      showQuizResult && selectedOption === option.id && option.id !== clinicalQuiz.correctAnswerId && "border-red-500 bg-red-50"
                    )}
                    onClick={() => !showQuizResult && setSelectedOption(option.id)}
                    disabled={showQuizResult}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              
              {!showQuizResult && selectedOption && (
                <Button 
                  onClick={handleQuizSubmit} 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Answer
                </Button>
              )}
              
              {showQuizResult && (
                <div className={cn(
                  "p-4 rounded-md mt-4",
                  selectedOption === clinicalQuiz.correctAnswerId ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                )}>
                  <h5 className={cn(
                    "font-semibold mb-2",
                    selectedOption === clinicalQuiz.correctAnswerId ? "text-green-700" : "text-red-700"
                  )}>
                    {selectedOption === clinicalQuiz.correctAnswerId ? "Correct!" : "Incorrect"}
                  </h5>
                  <p className="text-gray-700">{clinicalQuiz.explanation}</p>
                  
                  <Button 
                    onClick={() => {
                      setShowQuizResult(false);
                      setSelectedOption(null);
                    }} 
                    variant="outline" 
                    className="mt-3"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p>No quiz available for this case study.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="discussion" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Clinical Discussion</h3>
            {!showDiscussionForm && (
              <Button 
                onClick={() => setShowDiscussionForm(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Add Comment
              </Button>
            )}
          </div>
          
          {showDiscussionForm && (
            <form onSubmit={handleDiscussionSubmit} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Share your clinical insights or questions..."
                value={discussionComment}
                onChange={(e) => setDiscussionComment(e.target.value)}
                required
              ></textarea>
              <div className="flex justify-end gap-2 mt-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowDiscussionForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Post Comment
                </Button>
              </div>
            </form>
          )}
          
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-blue-700">{comment.name}</h4>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                <p>No comments yet. Be the first to start the discussion!</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default InteractiveCaseStudy;
