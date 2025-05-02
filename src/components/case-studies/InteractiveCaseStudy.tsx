
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2, XCircle } from "lucide-react";

interface PatientProfile {
  age: string;
  gender: string;
  chiefComplaint: string;
  relevantHistory: string;
  medications: string[];
}

interface ClinicalInsight {
  title: string;
  source: string;
  link: string;
  summary: string;
}

interface TimelineEvent {
  date: string;
  event: string;
  details: string;
}

interface QuizOption {
  id: string;
  text: string;
}

interface ClinicalQuiz {
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
  explanation: string;
}

export interface InteractiveCaseStudyProps {
  patientProfile: PatientProfile;
  clinicalScenario: string;
  clinicalInsights: ClinicalInsight[];
  patientTimeline: TimelineEvent[];
  clinicalQuiz: ClinicalQuiz;
}

const InteractiveCaseStudy: React.FC<InteractiveCaseStudyProps> = ({
  patientProfile,
  clinicalScenario,
  clinicalInsights,
  patientTimeline,
  clinicalQuiz
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const handleSelectAnswer = (id: string) => {
    setSelectedAnswer(id);
    setShowExplanation(true);
  };
  
  const isCorrectAnswer = selectedAnswer === clinicalQuiz.correctAnswerId;
  
  return (
    <div className="space-y-8">
      {/* Patient Profile */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Patient Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{patientProfile.age}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">{patientProfile.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Chief Complaint</p>
              <p className="font-medium">{patientProfile.chiefComplaint}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Relevant History</p>
              <p className="font-medium">{patientProfile.relevantHistory}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">Current Systems/Solutions</p>
              <ul className="list-disc list-inside">
                {patientProfile.medications.map((med, idx) => (
                  <li key={idx} className="font-medium">{med}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Clinical Scenario */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Clinical Scenario</h3>
          <div className="prose prose-blue max-w-none">
            <p className="whitespace-pre-line">{clinicalScenario}</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Interactive Elements */}
      <Tabs defaultValue="insights" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="insights">Clinical Insights</TabsTrigger>
          <TabsTrigger value="timeline">Implementation Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="insights" className="space-y-4">
          {clinicalInsights.map((insight, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-500 mb-2">Source: <a href={insight.link} target="_blank" rel="noopener noreferrer" className="text-[#387E89] hover:underline">{insight.source}</a></p>
                <p>{insight.summary}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="timeline" className="relative">
          <div className="absolute w-1 bg-gradient-to-b from-[#143151] to-[#387E89] h-full left-4 top-0"></div>
          
          {patientTimeline.map((event, idx) => (
            <div key={idx} className="ml-10 relative mb-8">
              <div className="absolute w-8 h-8 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center -left-14 border-4 border-white">
                <span className="text-white text-sm font-bold">{idx + 1}</span>
              </div>
              <Card>
                <CardContent className="p-6">
                  <span className="text-sm font-medium text-[#387E89]">{event.date}</span>
                  <h4 className="text-lg font-bold mt-1">{event.event}</h4>
                  <p className="mt-2">{event.details}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </TabsContent>
      </Tabs>
      
      {/* Clinical Quiz */}
      <Card className="border-[#387E89]/30">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Clinical Knowledge Check</h3>
          <p className="mb-6 font-medium">{clinicalQuiz.question}</p>
          
          <div className="space-y-3 mb-6">
            {clinicalQuiz.options.map((option) => (
              <Button
                key={option.id}
                variant={selectedAnswer === option.id ? (isCorrectAnswer ? "default" : "destructive") : "outline"}
                className={`w-full justify-start text-left h-auto py-3 px-4 ${
                  selectedAnswer === option.id && isCorrectAnswer 
                    ? "bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white" 
                    : ""
                }`}
                onClick={() => handleSelectAnswer(option.id)}
                disabled={showExplanation}
              >
                <span>{option.id}. {option.text}</span>
                {showExplanation && option.id === selectedAnswer && (
                  <span className="ml-auto">
                    {isCorrectAnswer ? 
                      <CheckCircle2 className="h-5 w-5 text-white" /> : 
                      <XCircle className="h-5 w-5 text-white" />
                    }
                  </span>
                )}
              </Button>
            ))}
          </div>
          
          {showExplanation && (
            <div className={`p-4 rounded-md ${isCorrectAnswer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <h4 className={`font-bold mb-2 ${isCorrectAnswer ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrectAnswer ? "Correct!" : "Incorrect"}
              </h4>
              <p>{clinicalQuiz.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export { InteractiveCaseStudy };
export default InteractiveCaseStudy;
