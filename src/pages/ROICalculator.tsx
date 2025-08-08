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
import { ROICalculatorIllustration } from "@/components/crush-ai/illustrations/ROICalculatorIllustration";
import { Link } from "react-router-dom";
import { Clock, Stethoscope, CalendarCheck, ShieldCheck } from "lucide-react";

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
                    <div className="space-y-6 lg:sticky lg:top-24">
                      <div className="mx-auto w-full flex justify-center">
                        <ROICalculatorIllustration />
                      </div>
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
                          <div className="flex justify-between">
                            <span>ROI Multiplier</span>
                            <span className="font-bold">{agentSavings.multiplier.toFixed(1)}x</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          Based on reduced no-shows and recovered appointments. Adjust inputs to reflect your practice.
                        </p>
                      </Card>
                      <Card className="p-5">
                        <h3 className="text-base font-semibold mb-3">Designed for clinic workflows</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-primary mt-0.5" /><span>Fewer interruptions between visits — recover focused time.</span></li>
                          <li className="flex items-start gap-2"><CalendarCheck className="h-4 w-4 text-primary mt-0.5" /><span>Reduce no-shows and smooth schedules with proactive outreach.</span></li>
                          <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-primary mt-0.5" /><span>Lower phone backlog so clinical teams can focus on patient care.</span></li>
                          <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /><span>HIPAA-ready operations and clear audit trails.</span></li>
                        </ul>
                      </Card>
                    </div>
                </div>
              </TabsContent>

              <TabsContent value="scribe" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <ScribeROICalculator onCalculate={setScribeSavings} />
                  </div>
                  <div className="space-y-6 lg:sticky lg:top-24">
                    <div className="mx-auto w-full flex justify-center">
                      <ROICalculatorIllustration />
                    </div>
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
                        <div className="flex justify-between">
                          <span>ROI Multiplier</span>
                          <span className="font-bold">{scribeSavings.multiplier.toFixed(1)}x</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Based on replacing human scribe costs with Crush AI. Adjust inputs to reflect your practice.
                      </p>
                    </Card>
                    <Card className="p-5">
                      <h3 className="text-base font-semibold mb-3">Designed for clinician workflows</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-primary mt-0.5" /><span>Save 1–2 hours per clinician per day by eliminating manual documentation.</span></li>
                        <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-primary mt-0.5" /><span>Higher-quality, consistent notes tailored to your specialty.</span></li>
                        <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /><span>HIPAA-compliant workflows with secure PHI handling.</span></li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section aria-label="Get a personalized ROI assessment" className={typography.spacing.section + " bg-muted/20"}>
            <div className={typography.spacing.container}>
              <Card className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div>
                    <h2 className={typography.h3 + " mb-2"}>See your personalized ROI</h2>
                    <p className={typography.description + " mb-4"}>We’ll analyze your volumes to estimate time saved, revenue impact, and next steps for your clinic.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />10+ hrs/week saved</li>
                      <li className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-primary" />Fewer no-shows</li>
                      <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />HIPAA-ready</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 justify-center md:items-start">
                    <Button asChild size="lg" className="w-full md:w-auto" aria-label="Get personalized ROI report">
                      <Link to="/contact">Get your ROI report</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full md:w-auto" aria-label="Talk to a clinician advisor">
                      <Link to="/contact">Talk to a clinician advisor</Link>
                    </Button>
                    <p className="text-xs text-muted-foreground md:text-left">HIPAA-compliant • Secure • No obligation</p>
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
