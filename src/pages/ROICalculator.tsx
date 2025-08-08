import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedHeader from "@/components/landing/AnimatedHeader";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ROICalculator from "@/components/bravo/calculator/ROICalculator";
import { ROICalculatorSection } from "@/components/crush-ai/ROICalculatorSection";
import { Card } from "@/components/ui/card";
import { typography } from "@/lib/typography";
import { Link } from "react-router-dom";

const ROICalculatorPage: React.FC = () => {
  const [agentSavings, setAgentSavings] = useState({ monthly: 0, yearly: 0, multiplier: 0 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ROI Calculator - AI Agent and AI Medical Scribing",
    "url": "https://s10.ai/roi-calculator",
    "description": "Interactive ROI calculator for AI Agent (phone/call) and AI Medical Scribing by S10.AI.",
  };

  return (
    <>
      <AnimatedHeader />
      <main className="min-h-screen bg-white">
        <Helmet>
          <title>ROI Calculator - AI Agent & AI Medical Scribing | S10.AI</title>
          <meta name="description" content="Calculate ROI for AI Agent (phone/call) and AI Medical Scribing with S10.AI. Estimate monthly and yearly savings based on your volumes." />
          <link rel="canonical" href="https://s10.ai/roi-calculator" />
          <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        </Helmet>

        <div className={typography.spacing.container}>
          <Breadcrumb className="py-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <span>ROI Calculator</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="text-center mb-8">
            <h1 className={typography.h1}>ROI Calculator for AI Agent and AI Medical Scribing</h1>
            <p className={typography.description + " mt-3 mx-auto max-w-2xl"}>
              Explore the financial impact of automating phone/call workflows and clinical documentation. Use the tabs below to calculate potential savings.
            </p>
          </header>

          <section aria-label="ROI calculators" className="mb-16">
            <Tabs defaultValue="agent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-xl mx-auto">
                <TabsTrigger value="agent">AI Agent (Phone/Call)</TabsTrigger>
                <TabsTrigger value="scribe">AI Medical Scribing</TabsTrigger>
              </TabsList>

              <TabsContent value="agent" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <ROICalculator onCalculate={setAgentSavings} />
                  </div>
                  <Card className="p-6">
                    <h2 className={typography.h3 + " mb-4"}>Projected Savings</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Estimated Monthly Benefit</span>
                        <span className="font-bold">${agentSavings.monthly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimated Yearly Benefit</span>
                        <span className="font-bold">${agentSavings.yearly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI Multiplier</span>
                        <span className="font-bold">{agentSavings.multiplier.toFixed(1)}x</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Based on reduced no-shows and recovered appointments. Adjust inputs to reflect your practice.
                    </p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="scribe" className="mt-8">
                {/* Reuse existing Crush AI calculator section for consistency */}
                <ROICalculatorSection />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ROICalculatorPage;
