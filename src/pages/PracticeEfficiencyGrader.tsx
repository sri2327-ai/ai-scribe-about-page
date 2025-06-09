import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from "@/components/ui/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ModernSlider } from "@/components/ui/modern-slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"

interface FormData {
  practiceSize: number;
  annualRevenue: number;
  cloudPreference: number;
  existingTooling: number;
  aiReadiness: number;
  dataVolume: number;
  complianceRequirements: boolean;
}

interface SliderOptions {
  min: number;
  max: number;
  step: number;
  unit: string;
  defaultValue: number;
}

const PracticeEfficiencyGrader = () => {
  const router = useRouter();
  const { toast } = useToast()

  const [formData, setFormData] = useState<FormData>({
    practiceSize: 0,
    annualRevenue: 0,
    cloudPreference: 0,
    existingTooling: 0,
    aiReadiness: 0,
    dataVolume: 0,
    complianceRequirements: false,
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [showResetAlert, setShowResetAlert] = useState(false);

  const sliderOptions: { [key: string]: SliderOptions } = {
    annualRevenue: { min: 0, max: 7, step: 1, unit: "Annual Revenue", defaultValue: 0 },
    cloudPreference: { min: 0, max: 3, step: 1, unit: "Cloud Preference", defaultValue: 0 },
    existingTooling: { min: 0, max: 4, step: 1, unit: "Existing Tooling", defaultValue: 0 },
    aiReadiness: { min: 0, max: 4, step: 1, unit: "AI Readiness", defaultValue: 0 },
    dataVolume: { min: 0, max: 4, step: 1, unit: "Data Volume", defaultValue: 0 },
  };

  const sliderLabels: { [key: string]: string[] } = {
    practiceSize: ["Solo", "Small (2-5)", "Medium (6-15)", "Large (16-50)", "Enterprise (50+)"],
    annualRevenue: ["< $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M - $10M", "$10M - $20M", "$20M - $50M", "> $50M"],
    cloudPreference: ["Cloud Only", "Cloud Mostly", "Hybrid", "On-Premise"],
    existingTooling: ["None", "Basic", "Intermediate", "Advanced", "Highly Automated"],
    aiReadiness: ["None", "Exploring", "Experimenting", "Implementing", "Strategic"],
    dataVolume: ["Low", "Moderate", "High", "Very High", "Massive"],
  };

  const calculateEfficiency = async () => {
    setIsCalculating(true);
    try {
      const response = await fetch('/api/efficiency-grader', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Could not complete grading:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    } finally {
      setIsCalculating(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      practiceSize: 0,
      annualRevenue: 0,
      cloudPreference: 0,
      existingTooling: 0,
      aiReadiness: 0,
      dataVolume: 0,
      complianceRequirements: false,
    });
    setResults(null);
    setShowResetAlert(false);
  };

  const overallScore = results ? Math.round(results.overallScore) : 0;
  const operationsScore = results ? Math.round(results.operationsScore) : 0;
  const dataScore = results ? Math.round(results.dataScore) : 0;
  const innovationScore = results ? Math.round(results.innovationScore) : 0;

  const determineBadgeColor = (score: number): string => {
    if (score >= 80) return "text-white bg-green-500";
    if (score >= 60) return "text-white bg-blue-500";
    if (score >= 40) return "text-white bg-yellow-500";
    return "text-white bg-red-500";
  };

  const badgeStyle = "rounded-md px-2 py-1 uppercase text-xs font-bold";

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto shadow-md rounded-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-gray-800">Practice Efficiency Grader</CardTitle>
          <CardDescription className="text-gray-600">
            Evaluate your practice's efficiency across key areas.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">

          <ModernSlider
            value={formData.practiceSize}
            onChange={(value) => setFormData(prev => ({ ...prev, practiceSize: value }))}
            min={0}
            max={4}
            unit="Practice Size"
            labels={["Solo", "Small (2-5)", "Medium (6-15)", "Large (16-50)", "Enterprise (50+)"]}
          />

          <ModernSlider
            value={formData.annualRevenue}
            onChange={(value) => setFormData(prev => ({ ...prev, annualRevenue: value }))}
            min={sliderOptions.annualRevenue.min}
            max={sliderOptions.annualRevenue.max}
            unit={sliderOptions.annualRevenue.unit}
            labels={sliderLabels.annualRevenue}
          />

          <ModernSlider
            value={formData.cloudPreference}
            onChange={(value) => setFormData(prev => ({ ...prev, cloudPreference: value }))}
            min={sliderOptions.cloudPreference.min}
            max={sliderOptions.cloudPreference.max}
            unit={sliderOptions.cloudPreference.unit}
            labels={sliderLabels.cloudPreference}
          />

          <ModernSlider
            value={formData.existingTooling}
            onChange={(value) => setFormData(prev => ({ ...prev, existingTooling: value }))}
            min={sliderOptions.existingTooling.min}
            max={sliderOptions.existingTooling.max}
            unit={sliderOptions.existingTooling.unit}
            labels={sliderLabels.existingTooling}
          />

          <ModernSlider
            value={formData.aiReadiness}
            onChange={(value) => setFormData(prev => ({ ...prev, aiReadiness: value }))}
            min={sliderOptions.aiReadiness.min}
            max={sliderOptions.aiReadiness.max}
            unit={sliderOptions.aiReadiness.unit}
            labels={sliderLabels.aiReadiness}
          />

          <ModernSlider
            value={formData.dataVolume}
            onChange={(value) => setFormData(prev => ({ ...prev, dataVolume: value }))}
            min={sliderOptions.dataVolume.min}
            max={sliderOptions.dataVolume.max}
            unit={sliderOptions.dataVolume.unit}
            labels={sliderLabels.dataVolume}
          />

          <div className="flex items-center justify-between">
            <Label htmlFor="compliance">Stringent Compliance Requirements?</Label>
            <Switch
              id="compliance"
              checked={formData.complianceRequirements}
              onCheckedChange={(checked) => setFormData({ ...formData, complianceRequirements: checked })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="mr-2">Reset Form</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will reset all the fields in the form.
                    Are you sure you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleResetForm}>Reset</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button onClick={calculateEfficiency} disabled={isCalculating}>
              {isCalculating ? "Calculating..." : "Calculate Efficiency"}
            </Button>
          </div>
        </CardFooter>
      </Card>

      {results && (
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="shadow-md rounded-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-gray-800">Results</CardTitle>
              <CardDescription className="text-gray-600">
                Here's your practice efficiency grading.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">Overall Efficiency:</span>
                  <Badge className={`${badgeStyle} ${determineBadgeColor(overallScore)}`}>{overallScore}%</Badge>
                </div>
                <Progress value={overallScore} />
              </div>

              <Separator />

              <Accordion type="single" collapsible>
                <AccordionItem value="operations">
                  <AccordionTrigger>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-semibold text-gray-700">Operations Efficiency</span>
                      <Badge className={`${badgeStyle} ${determineBadgeColor(operationsScore)}`}>{operationsScore}%</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      This score reflects how well your practice manages its day-to-day operations,
                      including workflow automation, resource allocation, and process optimization.
                    </p>
                    <Progress value={operationsScore} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="data">
                  <AccordionTrigger>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-semibold text-gray-700">Data Management</span>
                      <Badge className={`${badgeStyle} ${determineBadgeColor(dataScore)}`}>{dataScore}%</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      This score indicates the effectiveness of your data management practices,
                      including data collection, storage, analysis, and security measures.
                    </p>
                    <Progress value={dataScore} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="innovation">
                  <AccordionTrigger>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-semibold text-gray-700">Innovation & AI Readiness</span>
                      <Badge className={`${badgeStyle} ${determineBadgeColor(innovationScore)}`}>{innovationScore}%</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      This score assesses your practice's readiness to adopt new technologies,
                      innovate in service delivery, and leverage AI for enhanced efficiency and insights.
                    </p>
                    <Progress value={innovationScore} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PracticeEfficiencyGrader;
