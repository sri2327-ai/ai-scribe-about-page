import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";

const PracticeEfficiencyGrader = () => {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    noShowRate: '',
    documentationTime: '',
    billingErrors: '',
  });

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Perform calculations based on form data
    const monthlyRevenue = parseFloat(formData.monthlyRevenue);
    const noShowRate = parseFloat(formData.noShowRate) / 100;
    const documentationTime = parseFloat(formData.documentationTime);
    const billingErrors = parseFloat(formData.billingErrors) / 100;

    const potentialRevenueRecovery = monthlyRevenue * noShowRate;
    const timeSavingsValue = (documentationTime / 60) * 50 * 20; // Assuming $50/hour value
    const billingErrorRecovery = monthlyRevenue * billingErrors;

    const totalImprovementValue = potentialRevenueRecovery + timeSavingsValue + billingErrorRecovery;

    setResults({
      potentialRevenueRecovery,
      timeSavingsValue,
      billingErrorRecovery,
      totalImprovementValue,
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
              alt="S10.AI Logo"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            Unlock Your Practice's Potential
          </h1>
          <p className="text-gray-600 text-lg">
            Discover hidden opportunities to boost revenue and efficiency.
          </p>
        </motion.div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">
              Enter Your Practice Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="monthlyRevenue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  id="monthlyRevenue"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="noShowRate"
                  className="block text-sm font-medium text-gray-700"
                >
                  No-Show Rate (%)
                </label>
                <input
                  type="number"
                  id="noShowRate"
                  name="noShowRate"
                  value={formData.noShowRate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="documentationTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Daily Documentation Time (minutes)
                </label>
                <input
                  type="number"
                  id="documentationTime"
                  name="documentationTime"
                  value={formData.documentationTime}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="billingErrors"
                  className="block text-sm font-medium text-gray-700"
                >
                  Billing Errors (%)
                </label>
                <input
                  type="number"
                  id="billingErrors"
                  name="billingErrors"
                  value={formData.billingErrors}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <Button disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    Calculating...
                    <svg
                      className="animate-spin ml-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    Calculate Potential Savings
                    <ArrowRight className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Potential Improvements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>Revenue Recovery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-800">
                    ${results.potentialRevenueRecovery.toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">
                    From reducing no-shows
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>Time Savings Value</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-800">
                    ${results.timeSavingsValue.toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">
                    From streamlined documentation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-yellow-500" />
                    <span>Billing Error Recovery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-800">
                    ${results.billingErrorRecovery.toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">
                    From minimizing billing errors
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Total Potential Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold text-indigo-700">
                  ${results.totalImprovementValue.toFixed(2)}
                </div>
                <p className="text-gray-600">
                  Combined impact on your practice's financial health.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PracticeEfficiencyGrader;
