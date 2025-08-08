import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedHeader from "@/components/landing/AnimatedHeader";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ROICalculator from "@/components/bravo/calculator/ROICalculator";
import ScribeROICalculator from "@/components/crush-ai/ScribeROICalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { typography } from "@/lib/typography";

import { Link } from "react-router-dom";


const ROICalculatorPage: React.FC = () => {
  const [agentSavings, setAgentSavings] = useState({ monthly: 0, yearly: 0, multiplier: 0 });
  const [scribeSavings, setScribeSavings] = useState({ monthly: 0, yearly: 0, multiplier: 0 });

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
      <main className="min-h-screen bg-background">
        <Helmet>
          <title>See what S10.AI can save you | ROI Calculator</title>
          <meta name="description" content="Organizations using S10.AI get back ~10 hours per provider per week, reduce no-shows, and recover appointments." />
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
            <h1 className={typography.h1}>See what S10.AI can save you</h1>
            <p className={typography.description + " mt-3 mx-auto max-w-2xl"}>
              Organizations using S10.AI get back on average 10 hours per provider per week and also reduce no-shows and recover appointments.
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
                    <div className="lg:sticky lg:top-24">
                      <Card className="p-6">
                        <h2 className={typography.h3 + " mb-4"}>Projected Savings</h2>
                        <div className="space-y-3" role="status" aria-live="polite">
                          <div className="flex justify-between">
                            <span>Estimated Monthly Benefit</span>
                            <span className="font-bold">${agentSavings.monthly.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estimated Yearly Benefit</span>
                            <span className="font-bold">${agentSavings.yearly.toLocaleString()}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          Adjust inputs to reflect your practice.
                        </p>
                      </Card>
                    </div>
                </div>
              </TabsContent>

              <TabsContent value="scribe" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <ScribeROICalculator onCalculate={setScribeSavings} />
                  </div>
                  <div className="lg:sticky lg:top-24">
                    <Card className="p-6">
                      <h2 className={typography.h3 + " mb-4"}>Projected Savings</h2>
                      <div className="space-y-3" role="status" aria-live="polite">
                        <div className="flex justify-between">
                          <span>Estimated Monthly Benefit</span>
                          <span className="font-bold">${scribeSavings.monthly.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estimated Yearly Benefit</span>
                          <span className="font-bold">${scribeSavings.yearly.toLocaleString()}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Adjust inputs to reflect your practice.
                      </p>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section aria-label="Get a personalized ROI assessment" className={typography.spacing.section + " bg-muted/20"}>
            <div className={typography.spacing.container}>
              <Card className="p-6 md:p-8">
                <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                  <div>
                    <h2 className={typography.h3}>Get your ROI report</h2>
                    <p className="text-sm text-muted-foreground mt-1">Personalized estimate in minutes.</p>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="lg" aria-label="Get ROI report">
                      <Link to="/contact">Get started</Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg" aria-label="Talk to an expert">
                      <Link to="/contact">Talk to an expert</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ROICalculatorPage;
