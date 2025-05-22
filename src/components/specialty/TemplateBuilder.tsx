import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Plus, X, ScrollText, Keyboard } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import WNLSettingsDialog from './WNLSettingsDialog';
import AIHelpDialog from './AIHelpDialog';
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MacrosDialog = () => {
  const [macros, setMacros] = useState<Array<{ trigger: string; text: string }>>([]);
  const [newTrigger, setNewTrigger] = useState('');
  const [newText, setNewText] = useState('');
  const { toast } = useToast();

  const handleAddMacro = () => {
    if (newTrigger && newText) {
      setMacros([...macros, { trigger: newTrigger, text: newText }]);
      setNewTrigger('');
      setNewText('');
      
      toast({
        title: "Macro Added",
        description: `Trigger "${newTrigger}" has been added`,
        className: "bg-white border border-gray-200 text-gray-800",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Keyboard className="h-4 w-4" />
          Macros / Shortcuts
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">Macros / Shortcuts</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Trigger Phrase"
              value={newTrigger}
              onChange={(e) => setNewTrigger(e.target.value)}
              className="bg-white border-gray-300"
            />
            <Input
              placeholder="Auto-Insert Text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="bg-white border-gray-300"
            />
          </div>
          <Button onClick={handleAddMacro} className="w-full gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90">
            <Plus className="h-4 w-4" /> Add Macro
          </Button>
          
          {macros.length > 0 && (
            <div className="mt-4 space-y-2">
              {macros.map((macro, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                  <span className="font-medium">{macro.trigger}</span>
                  <span className="text-gray-600">{macro.text}</span>
                </div>
              ))}
            </div>
          )}

          <Alert className="mt-4 bg-[#fdf4f8] border-[#D299C2] text-gray-800">
            <AlertDescription className="py-2">
              <p className="font-bold mb-1">DISCLAIMER</p>
              <p>This is a demonstration of the template builder interface only. The actual application has AI model integration and additional template building options not shown here. Book a demo to see how the real application works in real-time.</p>
            </AlertDescription>
          </Alert>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StaticTextDialog = () => {
  const [staticText, setStaticText] = useState('');
  const [targetSection, setTargetSection] = useState('');
  const { toast } = useToast();

  const handleAddStaticText = () => {
    if (staticText) {
      toast({
        title: "Static Text Added",
        description: targetSection 
          ? `Static text will be added to "${targetSection}"` 
          : "Static text has been added",
        className: "bg-white border border-gray-200 text-gray-800",
      });
      setStaticText('');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ScrollText className="h-4 w-4" />
          Static Text
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">Static Text</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Textarea 
            placeholder="Enter static text that will be available across all templates..."
            className="min-h-[150px] bg-white border-gray-300"
            value={staticText}
            onChange={(e) => setStaticText(e.target.value)}
          />
          
          <Select value={targetSection} onValueChange={setTargetSection}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select target section (optional)" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Sections</SelectItem>
              <SelectItem value="chief_complaint">Chief Complaint</SelectItem>
              <SelectItem value="hpi">History of Present Illness</SelectItem>
              <SelectItem value="pmh">Past Medical History</SelectItem>
              <SelectItem value="assessment">Assessment</SelectItem>
              <SelectItem value="plan">Plan</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={handleAddStaticText} className="w-full gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] hover:opacity-90">
            <Plus className="h-4 w-4" /> Add Static Text
          </Button>

          <Alert className="mt-4 bg-[#fdf4f8] border-[#D299C2] text-gray-800">
            <AlertDescription className="py-2">
              <p className="font-bold mb-1">DISCLAIMER</p>
              <p>This is a demonstration of the template builder interface only. The actual application has AI model integration and additional template building options not shown here. Book a demo to see how the real application works in real-time.</p>
            </AlertDescription>
          </Alert>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TemplateBuilder = () => {
  const [templateName, setTemplateName] = useState("");
  const [sections, setSections] = useState<Array<{ id: string; title: string; content: string }>>([]);
  const { toast } = useToast();

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      title: "",
      content: ""
    };
    setSections([...sections, newSection]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const updateSectionTitle = (id: string, title: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, title } : section
    ));
  };

  const updateSectionContent = (id: string, content: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content } : section
    ));
  };

  const downloadTemplate = () => {
    if (!templateName) {
      toast({
        title: "Template name required",
        description: "Please enter a name for your template",
        variant: "destructive",
        className: "bg-white border-red-200 text-red-800",
      });
      return;
    }

    if (sections.length === 0) {
      toast({
        title: "No sections added",
        description: "Please add at least one section to your template",
        variant: "destructive",
        className: "bg-white border-red-200 text-red-800",
      });
      return;
    }

    let templateContent = `Template Name: ${templateName}\n\n`;
    
    sections.forEach((section, index) => {
      templateContent += `Section ${index + 1}: ${section.title || 'Untitled Section'}\n`;
      templateContent += `${section.content || 'No content'}\n\n`;
    });
    
    const blob = new Blob([templateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateName.replace(/\s+/g, '_')}_template.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Template Downloaded",
      description: `Your template "${templateName}" with ${sections.length} sections has been saved`,
      className: "bg-white border border-gray-200 text-gray-800",
    });
  };

  return (
    <section className="witSp bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black max-w-3xl">
            Build Your Workflow with S10.AI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Documentation That Adapts to You
          </p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Design the ideal clinical note flow with S10.AI's intelligent template builder. 
                Choose from predefined sections or create your own—tailored exactly to your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#143151]">Platform Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full text-white p-1" />
                      Prompt the AI using a previous note
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full text-white p-1" />
                      Build a template with a single command
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full text-white p-1" />
                      Start from scratch
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full text-white p-1" />
                      Import existing templates
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full text-white p-1" />
                      Explore our extensive clinical content library
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#143151] mb-4">Try Template Builder</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Template Name (e.g. General Consultation)"
                      className="w-full p-2 border rounded"
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                    />
                    
                    <div className="flex flex-wrap gap-2">
                      <MacrosDialog />
                      <StaticTextDialog />
                      <WNLSettingsDialog />
                    </div>
                    
                    <Button className="w-full gap-2" onClick={addSection}>
                      <Plus className="h-4 w-4" /> Add Section
                    </Button>
                    
                    {sections.length > 0 && (
                      <div className="space-y-4 mt-4">
                        <h4 className="font-medium text-gray-700">Template Sections:</h4>
                        {sections.map((section) => (
                          <div key={section.id} className="bg-white p-3 rounded border">
                            <div className="flex justify-between items-center mb-2">
                              <input
                                type="text"
                                placeholder="Section Title"
                                className="border-b border-gray-300 text-sm focus:outline-none focus:border-blue-500 w-4/5"
                                value={section.title}
                                onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                              />
                              <button 
                                onClick={() => removeSection(section.id)}
                                className="text-gray-500 hover:text-red-500"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            
                            <div className="space-y-3">
                              <Textarea
                                placeholder="Enter section content..."
                                className="text-sm min-h-[60px]"
                                value={section.content}
                                onChange={(e) => updateSectionContent(section.id, e.target.value)}
                              />

                              <div className="flex justify-end">
                                <AIHelpDialog />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Button className="w-full gap-2" onClick={downloadTemplate}>
                      <Download className="h-4 w-4" /> Download Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="mt-8 bg-[#fdf4f8] border-[#D299C2] text-gray-800">
              <AlertDescription className="py-2">
                <p className="font-bold mb-1">DISCLAIMER</p>
                <p>This is a demonstration of the template builder interface only. The actual application has AI model integration and additional template building options not shown here. Book a demo to see how the real application works in real-time.</p>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TemplateBuilder;
