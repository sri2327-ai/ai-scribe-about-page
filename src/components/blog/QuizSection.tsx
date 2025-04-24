
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
  resultText: string;
}

interface QuizSectionProps {
  quiz: QuizQuestion;
  title?: string;
  icon?: React.ReactNode;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ 
  quiz, 
  title = "Quick Assessment", 
  icon = <ClipboardCheck className="w-6 h-6 text-blue-600" /> 
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <section className="py-12 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="flex items-center gap-2 mb-6">
          {icon}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <h3 className="text-xl font-semibold mb-6">{quiz.question}</h3>
        
        <div className="space-y-4">
          {quiz.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedOption === option.id
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-white border-2 border-gray-200 hover:border-blue-300"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {selectedOption && !showResult && (
          <div className="mt-6">
            <Button
              onClick={handleSubmit}
              className="w-full md:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:opacity-90"
            >
              Submit Answer
            </Button>
          </div>
        )}

        {showResult && (
          <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-700">
              {quiz.resultText}
            </p>
            <Button
              className="w-full md:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:opacity-90"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Demo
            </Button>
          </div>
        )}
      </Card>
    </section>
  );
};
