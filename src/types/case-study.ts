
export interface CaseStudyData {
  title: string;
  description: string;
  patientProfile?: {
    age: string;
    gender: string;
    chiefComplaint: string;
    relevantHistory?: string;
    medications?: string[];
  };
  clinicalScenario: string;
  clinicalInsights: Array<{
    title: string;
    source: string;
    link: string;
    summary: string;
  }>;
  patientTimeline: Array<{
    date: string;
    event: string;
    details: string;
  }>;
  clinicalQuiz: {
    question: string;
    options: Array<{ id: string; text: string }>;
    correctAnswerId: string;
    explanation: string;
  };
  discussionTopics: string[];
  roiCalculator?: {
    title: string;
    description: string;
    fields: Array<{
      id: string;
      label: string;
      type: 'slider' | 'toggle' | 'number';
      min?: number;
      max?: number;
      step?: number;
      defaultValue: number;
      description?: string;
    }>;
  };
}
