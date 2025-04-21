
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Plus } from "lucide-react";

const TemplateBuilder = () => {
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
                    />
                    <Button className="w-full gap-2">
                      <Plus className="h-4 w-4" /> Add Section
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
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
