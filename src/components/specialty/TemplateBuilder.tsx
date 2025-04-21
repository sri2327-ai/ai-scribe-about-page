
import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const TemplateBuilder = () => {
  return (
    <section className="py-16 bg-white text-[#143151]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Specialty-Specific Template Builder</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Create and customize templates that match your specialty's unique documentation needs. 
            Our intelligent builder adapts to your workflow, saving you time and improving accuracy.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="customize">Customization</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Intelligent Template Creation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                    <p>Automate documentation across all medical specialties</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                    <p>Build custom templates based on your practice patterns</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                    <p>Save time with AI-powered note completion</p>
                  </li>
                </ul>
                <Button 
                  className="mt-6 rounded-full px-6 py-5 text-md bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl h-auto"
                >
                  Try Template Builder
                </Button>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="border-2 border-dashed border-gray-300 p-4 rounded-md h-[300px] flex items-center justify-center">
                  <p className="text-gray-500 text-lg font-semibold">Template Preview</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Cardiology", "Orthopedics", "Neurology"].map((specialty, i) => (
                <Card key={i} className="transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-xl mb-2">{specialty}</h4>
                    <p className="text-gray-500 mb-4">Specialty-specific templates designed for {specialty.toLowerCase()} practice.</p>
                    <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                      <p className="text-gray-400 text-sm">Template preview</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Templates
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="customize">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Customize Your Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-medium">Custom Fields</h4>
                    <p className="text-sm text-gray-600">Define specialty-specific fields for your templates</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-medium">Smart Defaults</h4>
                    <p className="text-sm text-gray-600">Set intelligent defaults based on your practice patterns</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-medium">Conditional Logic</h4>
                    <p className="text-sm text-gray-600">Create templates that adapt to patient conditions</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="border border-gray-200 p-4 rounded-md h-[250px] mb-4">
                    <p className="text-gray-400 mb-2 text-xs">Template Editor</p>
                    <div className="bg-gray-100 h-[200px] rounded-md"></div>
                  </div>
                  <Button 
                    className="w-full rounded-md px-4 py-2 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-md"
                  >
                    Save Template
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TemplateBuilder;
