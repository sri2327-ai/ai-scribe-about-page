
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Plus, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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
        variant: "destructive"
      });
      return;
    }

    if (sections.length === 0) {
      toast({
        title: "No sections added",
        description: "Please add at least one section to your template",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would generate a PDF or JSON file
    // For now, we'll just show a success message
    toast({
      title: "Template Downloaded",
      description: `Your template "${templateName}" with ${sections.length} sections has been saved`,
    });
  };

  return (
    <section className="witSp bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#143151] max-w-3xl">
            Build Your Workflow with S10.AI
          </h2>
          <Separator className="w-1/5 bg-black h-1" />
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
                      <Plus className="h-5 w-5 text-blue-500" />
                      Prompt the AI using a previous note
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-blue-500" />
                      Build a template with a single command
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-blue-500" />
                      Start from scratch
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-blue-500" />
                      Import existing templates
                    </li>
                    <li className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-blue-500" />
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
                            <Textarea
                              placeholder="Enter section content..."
                              className="text-sm min-h-[60px]"
                              value={section.content}
                              onChange={(e) => updateSectionContent(section.id, e.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Button variant="outline" className="w-full gap-2" onClick={downloadTemplate}>
                      <Download className="h-4 w-4" /> Download Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TemplateBuilder;
