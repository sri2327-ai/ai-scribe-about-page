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
import { RainbowButton } from "@/components/ui/rainbow-button";
import { typography } from "@/lib/typography";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
const ROICalculatorPage: React.FC = () => {
  const [agentSavings, setAgentSavings] = useState({
    monthly: 0,
    yearly: 0,
    multiplier: 0
  });
  const [scribeSavings, setScribeSavings] = useState({
    monthly: 0,
    yearly: 0,
    multiplier: 0
  });
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ROI Calculator - AI Agent and AI Medical Scribing",
    "url": "https://s10.ai/roi-calculator",
    "description": "Interactive ROI calculator for AI Agent (phone/call) and AI Medical Scribing by S10.AI."
  };
  return <>
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
            <p className={typography.description + " mt-3 mx-auto max-w-2xl"}>Organizations using S10.AI recover an average of 10 hours per provider per week, reduce no-shows, and regain lost appointments.</p>
          </header>

          <section aria-label="ROI calculators" className="mb-20">
            <Tabs defaultValue="agent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-xl mx-auto">
                <TabsTrigger value="agent">AI Agent (Phone/Call)</TabsTrigger>
                <TabsTrigger value="scribe">AI Medical Scribing</TabsTrigger>
              </TabsList>

              <TabsContent value="agent" className="mt-8">
                <ROICalculator onCalculate={setAgentSavings} />
              </TabsContent>

              <TabsContent value="scribe" className="mt-8">
                <ScribeROICalculator onCalculate={setScribeSavings} />
              </TabsContent>
            </Tabs>
          </section>

          {/* What Providers Are Saying Section */}
          <section aria-label="What providers are saying" className="mb-20">
            <div className="text-center mb-12">
              <h2 className={typography.h2}>What providers are saying</h2>
              <p className={typography.description + " mt-3 max-w-2xl mx-auto"}>
                See how S10.AI transforms healthcare practices across specialties
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Family Medicine Practice</h3>
                    <p className="text-sm text-muted-foreground">Multi-provider clinic</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "S10.AI reduced our documentation time by 70% while improving note quality and patient satisfaction."
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/case-studies/family-medicine">Read case study</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Quote className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Gastroenterology</h3>
                    <p className="text-sm text-muted-foreground">Specialty practice</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We recovered 15+ hours per week per provider, allowing us to see more patients without burnout."
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/case-studies/gastroenterology">Read case study</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Quote className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Multi-Provider Practice</h3>
                    <p className="text-sm text-muted-foreground">Large clinic network</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Seamless integration with our existing workflow. ROI was evident within the first month."
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/case-studies/multi-provider-practices">Read case study</Link>
                </Button>
              </Card>
            </div>
          </section>

          {/* Final CTA Section */}
          <section aria-label="Collaborate with providers" className="mb-16">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className={typography.h2 + " mb-6"}>
                  Collaborate with providers across 200+ specialties
                </h2>
                <p className={typography.description + " mb-8 text-lg"}>
                  Transforming documentation into a tool that supports rather than hinders them.
                </p>
                <RainbowButton asChild className="text-lg px-8 py-4">
                  <Link to="/contact">BOOK A DEMO</Link>
                </RainbowButton>
              </div>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>;
};
export default ROICalculatorPage;