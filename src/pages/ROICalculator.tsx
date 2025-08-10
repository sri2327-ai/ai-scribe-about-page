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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <Card className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 lg:gap-4 mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/case-studies/family-medicine.svg" 
                      alt="Family Medicine" 
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base lg:text-lg">Family Medicine Practice</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">Multi-provider clinic</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed">
                  "S10.AI reduced our documentation time by 70% while improving note quality and patient satisfaction."
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/case-studies/family-medicine">Read case study</Link>
                </Button>
              </Card>

              <Card className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 lg:gap-4 mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/case-studies/gastro-illustration.svg" 
                      alt="Gastroenterology" 
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base lg:text-lg">Gastroenterology</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">Specialty practice</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed">
                  "We recovered 15+ hours per week per provider, allowing us to see more patients without burnout."
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/case-studies/gastroenterology">Read case study</Link>
                </Button>
              </Card>

              <Card className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 lg:gap-4 mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/case-studies/multi-provider-illustration.svg" 
                      alt="Multi-Provider Practice" 
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base lg:text-lg">Multi-Provider Practice</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">Large clinic network</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed">
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
            <Card className="p-6 lg:p-8 xl:p-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className={typography.h2 + " mb-4 lg:mb-6"}>
                  Collaborate with providers across 200+ specialties
                </h2>
                <p className={typography.description + " mb-6 lg:mb-8 text-base lg:text-lg"}>
                  Transforming documentation into a tool that supports rather than hinders them.
                </p>
                <RainbowButton asChild className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
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