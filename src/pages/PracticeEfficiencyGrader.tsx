import React, { useState } from 'react';

const PracticeEfficiencyGrader = () => {
  const [formData, setFormData] = useState({
    documentationHours: '',
    patientCalls: '',
    adminTime: '',
    overtimeFrequency: '',
    ehrSatisfaction: ''
  });

  const [currentScore, setCurrentScore] = useState(null);
  const [finalScore, setFinalScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateScore = () => {
    // Documentation hours scoring
    let docScore = 0;
    switch (formData.documentationHours) {
      case '1-2': docScore = 90; break;
      case '3-4': docScore = 70; break;
      case '5-6': docScore = 50; break;
      case '7+': docScore = 30; break;
      default: docScore = 0;
    }

    // Patient calls scoring
    let callsScore = 0;
    switch (formData.patientCalls) {
      case '0-25': callsScore = 90; break;
      case '26-50': callsScore = 70; break;
      case '51-100': callsScore = 50; break;
      case '100+': callsScore = 30; break;
      default: callsScore = 0;
    }

    // Admin time scoring
    let adminScore = 0;
    switch (formData.adminTime) {
      case '0-25': adminScore = 90; break;
      case '26-50': adminScore = 70; break;
      case '51-75': adminScore = 50; break;
      case '76-100': adminScore = 30; break;
      default: adminScore = 0;
    }

    // Overtime frequency scoring
    let overtimeScore = 0;
    switch (formData.overtimeFrequency) {
      case 'never': overtimeScore = 90; break;
      case 'rarely': overtimeScore = 75; break;
      case 'sometimes': overtimeScore = 60; break;
      case 'often': overtimeScore = 40; break;
      case 'always': overtimeScore = 20; break;
      default: overtimeScore = 0;
    }

    // EHR satisfaction scoring
    let ehrScore = 0;
    switch (formData.ehrSatisfaction) {
      case 'very-satisfied': ehrScore = 90; break;
      case 'satisfied': ehrScore = 75; break;
      case 'neutral': ehrScore = 60; break;
      case 'dissatisfied': ehrScore = 40; break;
      case 'very-dissatisfied': ehrScore = 20; break;
      default: ehrScore = 0;
    }

    // Calculate average score
    const totalScore = Math.round((docScore + callsScore + adminScore + overtimeScore + ehrScore) / 5);
    return totalScore;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateScore();
    setCurrentScore(score);
    setFinalScore(score);
    setShowResults(true);
  };

  const getScoreCategory = (score) => {
    if (score >= 80) return "Excellent - Your practice is highly efficient";
    if (score >= 60) return "Good - Room for improvement";
    if (score >= 40) return "Fair - Significant inefficiencies detected";
    return "Poor - Critical efficiency issues";
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return [
        {
          title: "Maintain Your Excellence",
          description: "Your practice is running efficiently. Continue to monitor and optimize workflows."
        },
        {
          title: "Consider Advanced AI Solutions",
          description: "To push your efficiency even further, explore cutting-edge AI tools for documentation and patient communication."
        }
      ];
    } else if (score >= 60) {
      return [
        {
          title: "Documentation Optimization",
          description: "Implement AI-assisted documentation to reduce time spent on notes and increase face time with patients."
        },
        {
          title: "Staff Workload Management",
          description: "Consider AI phone systems to handle routine calls and free up your staff for more important tasks."
        }
      ];
    } else {
      return [
        {
          title: "Critical Efficiency Intervention",
          description: "Your practice would benefit significantly from AI documentation solutions to reduce your administrative burden."
        },
        {
          title: "Patient Communication Overhaul",
          description: "Implement 24/7 AI phone agents to handle the high volume of patient calls and reduce staff burnout."
        },
        {
          title: "Workflow Restructuring",
          description: "Consider a complete review of your practice workflows with an efficiency consultant."
        }
      ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with S10.AI Logo */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <img 
              src="https://s10.ai/logo.svg" 
              alt="S10.AI" 
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Ctext x='10' y='25' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23333'%3ES10.AI%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile/Tablet Layout (md and below) */}
        <div className="block lg:hidden">
          {!showResults ? (
            <>
              {/* Score Display First on Mobile/Tablet */}
              {currentScore !== null && (
                <div className="mb-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Current Practice Efficiency Score
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {currentScore}%
                    </div>
                    <div className="text-sm text-gray-500">
                      {getScoreCategory(currentScore)}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Below on Mobile/Tablet */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                  Practice Efficiency Grader
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                  Discover how efficient your practice really is
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How many hours per day do you spend on documentation?
                    </label>
                    <select
                      value={formData.documentationHours}
                      onChange={(e) => setFormData({...formData, documentationHours: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select hours</option>
                      <option value="1-2">1-2 hours</option>
                      <option value="3-4">3-4 hours</option>
                      <option value="5-6">5-6 hours</option>
                      <option value="7+">7+ hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How many patient calls does your staff handle daily?
                    </label>
                    <select
                      value={formData.patientCalls}
                      onChange={(e) => setFormData({...formData, patientCalls: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select range</option>
                      <option value="0-25">0-25 calls</option>
                      <option value="26-50">26-50 calls</option>
                      <option value="51-100">51-100 calls</option>
                      <option value="100+">100+ calls</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What percentage of your time is spent on administrative tasks?
                    </label>
                    <select
                      value={formData.adminTime}
                      onChange={(e) => setFormData({...formData, adminTime: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select percentage</option>
                      <option value="0-25">0-25%</option>
                      <option value="26-50">26-50%</option>
                      <option value="51-75">51-75%</option>
                      <option value="76-100">76-100%</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How often do you work overtime due to documentation backlog?
                    </label>
                    <select
                      value={formData.overtimeFrequency}
                      onChange={(e) => setFormData({...formData, overtimeFrequency: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select frequency</option>
                      <option value="never">Never</option>
                      <option value="rarely">Rarely</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="often">Often</option>
                      <option value="always">Always</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How would you rate your current EHR satisfaction?
                    </label>
                    <select
                      value={formData.ehrSatisfaction}
                      onChange={(e) => setFormData({...formData, ehrSatisfaction: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select rating</option>
                      <option value="very-satisfied">Very Satisfied</option>
                      <option value="satisfied">Satisfied</option>
                      <option value="neutral">Neutral</option>
                      <option value="dissatisfied">Dissatisfied</option>
                      <option value="very-dissatisfied">Very Dissatisfied</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Calculate My Efficiency Score
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              {/* Report First on Mobile/Tablet */}
              <div className="mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Your Complete Practice Benchmark Study
                    </h2>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {finalScore}%
                    </div>
                    <div className="text-lg text-gray-600">
                      {getScoreCategory(finalScore)}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {getRecommendations(finalScore).map((rec, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">{rec.title}</h3>
                        <p className="text-gray-700 text-sm">{rec.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Actions Below on Mobile/Tablet */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Transform Your Practice
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    S10.AI solutions to solve these challenges.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        S10.AI Crush
                      </h4>
                      <p className="text-gray-700 mb-2">AI clinical documentation</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>• Real-time notes</div>
                        <div>• 80% time reduction</div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        S10.AI Bravo
                      </h4>
                      <p className="text-gray-700 mb-2">AI phone agent 24/7</p>
                      <div className="text-sm text-gray-600">
                        <div>• 70% less staff work</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setShowResults(false)}
                      className="bg-gray-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors mr-4"
                    >
                      Take Assessment Again
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Desktop Layout (lg and above) - Keep Original */}
        <div className="hidden lg:block">
          {!showResults ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Column */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Practice Efficiency Grader
                </h1>
                <p className="text-gray-600 mb-6">
                  Discover how efficient your practice really is
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How many hours per day do you spend on documentation?
                    </label>
                    <select
                      value={formData.documentationHours}
                      onChange={(e) => setFormData({...formData, documentationHours: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select hours</option>
                      <option value="1-2">1-2 hours</option>
                      <option value="3-4">3-4 hours</option>
                      <option value="5-6">5-6 hours</option>
                      <option value="7+">7+ hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How many patient calls does your staff handle daily?
                    </label>
                    <select
                      value={formData.patientCalls}
                      onChange={(e) => setFormData({...formData, patientCalls: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select range</option>
                      <option value="0-25">0-25 calls</option>
                      <option value="26-50">26-50 calls</option>
                      <option value="51-100">51-100 calls</option>
                      <option value="100+">100+ calls</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What percentage of your time is spent on administrative tasks?
                    </label>
                    <select
                      value={formData.adminTime}
                      onChange={(e) => setFormData({...formData, adminTime: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select percentage</option>
                      <option value="0-25">0-25%</option>
                      <option value="26-50">26-50%</option>
                      <option value="51-75">51-75%</option>
                      <option value="76-100">76-100%</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How often do you work overtime due to documentation backlog?
                    </label>
                    <select
                      value={formData.overtimeFrequency}
                      onChange={(e) => setFormData({...formData, overtimeFrequency: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select frequency</option>
                      <option value="never">Never</option>
                      <option value="rarely">Rarely</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="often">Often</option>
                      <option value="always">Always</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How would you rate your current EHR satisfaction?
                    </label>
                    <select
                      value={formData.ehrSatisfaction}
                      onChange={(e) => setFormData({...formData, ehrSatisfaction: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select rating</option>
                      <option value="very-satisfied">Very Satisfied</option>
                      <option value="satisfied">Satisfied</option>
                      <option value="neutral">Neutral</option>
                      <option value="dissatisfied">Dissatisfied</option>
                      <option value="very-dissatisfied">Very Dissatisfied</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Calculate My Efficiency Score
                  </button>
                </form>
              </div>

              {/* Score Display Column */}
              <div className="flex flex-col justify-center">
                {currentScore !== null && (
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      Current Practice Efficiency Score
                    </h3>
                    <div className="text-6xl font-bold text-blue-600 mb-4">
                      {currentScore}%
                    </div>
                    <div className="text-lg text-gray-500">
                      {getScoreCategory(currentScore)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Results Column */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Complete Practice Benchmark Study
                  </h2>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {finalScore}%
                  </div>
                  <div className="text-lg text-gray-600">
                    {getScoreCategory(finalScore)}
                  </div>
                </div>

                <div className="space-y-4">
                  {getRecommendations(finalScore).map((rec, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{rec.title}</h3>
                      <p className="text-gray-700 text-sm">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Column */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Transform Your Practice
                </h3>
                <p className="text-gray-600 mb-6">
                  S10.AI solutions to solve these challenges.
                </p>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      S10.AI Crush
                    </h4>
                    <p className="text-gray-700 mb-2">AI clinical documentation</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Real-time notes</div>
                      <div>• 80% time reduction</div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      S10.AI Bravo
                    </h4>
                    <p className="text-gray-700 mb-2">AI phone agent 24/7</p>
                    <div className="text-sm text-gray-600">
                      <div>• 70% less staff work</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setShowResults(false)}
                    className="w-full bg-gray-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Take Assessment Again
                  </button>
                  <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeEfficiencyGrader;
