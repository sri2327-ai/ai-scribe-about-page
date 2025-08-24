import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, TrendingUp, Clock, FileText, Calculator, BookOpen, Stethoscope, Phone } from "lucide-react";

const BlogSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Main CTA */}
      <Card className="p-6 bg-gradient-to-br from-tealBlue/10 to-tealBlueBright/20 border-2 border-tealBlue/30">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Do you want to save hours in documentation?
          </h3>
          <div className="w-12 h-0.5 bg-tealBlue rounded-full mx-auto mb-4"></div>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-gray-700 leading-relaxed">
            Hey, we're s10.ai. We're determined to make healthcare professionals more efficient. 
            Take our Practice Efficiency Assessment to see how much time your practice could save. 
            Our only question is, will it be your practice?
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 text-lg font-semibold rounded-lg">
            Start your free assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Card>

      {/* About s10.ai */}
      <Card className="p-6 bg-gray-50">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-tealBlue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S10</span>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800">About s10.ai</h4>
              <p className="text-sm text-gray-600">AI-powered efficiency for healthcare practices</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            We help practices save hours every week with smart automation and medical reference tools.
          </p>
        </div>
        
          <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-tealBlue" />
            <div>
              <p className="font-semibold text-gray-800">+200 Specialists</p>
              <p className="text-sm text-gray-600">Employees</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-tealBlue" />
            <div>
              <p className="font-semibold text-gray-800">4 Countries</p>
              <p className="text-sm text-gray-600">Operating across the US, UK, Canada and Australia</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Our Clients */}
      <Card className="p-6 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-6 w-6 text-tealBlue" />
          <h4 className="font-bold text-lg text-gray-800">Our Clients</h4>
        </div>
        
        <p className="text-gray-700 mb-4">
          We work with leading healthcare organizations and global enterprises.
        </p>
        
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Primary Care Center of Clear Lake</p>
          <p>• Medical Office of Katy</p>
          <p>• Doctors Studio</p>
          <p>• Primary care associates</p>
        </div>
      </Card>

      {/* Real-World Results */}
      <Card className="p-6 bg-green-50 border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-6 w-6 text-green-600" />
          <h4 className="font-bold text-lg text-gray-800">Real-World Results</h4>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">30% revenue increase & 90% less burnout with AI Medical Scribes</p>
          </div>
          
          <div className="flex items-start gap-2">
            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">75% faster documentation and 15% more revenue across practices</p>
          </div>
          
          <div className="flex items-start gap-2">
            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">Providers earning +$5,311/month and saving $20K+ yearly in admin costs</p>
          </div>
          
          <div className="flex items-start gap-2">
            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">100% accuracy in Nordic languages</p>
          </div>
        </div>
        
        <Button variant="outline" className="w-full mt-4 border-green-300 text-green-700 hover:bg-green-100">
          See all case studies
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Card>

      {/* Tools */}
      <Card className="p-6 bg-blue-50">
        <h4 className="font-bold text-lg text-gray-800 mb-4">Tools</h4>
        
        <div className="space-y-2">
          {[
            { icon: FileText, label: "FAQs" },
            { icon: BookOpen, label: "Resource Library" },
            { icon: Calculator, label: "Practice Efficiency Grader" },
            { icon: FileText, label: "Templates" },
            { icon: Stethoscope, label: "ICD-10-CM Code Browser" },
            { icon: BookOpen, label: "Medical Abbreviations" },
            { icon: FileText, label: "Medical Prefixes, Suffixes, Root Words" },
            { icon: TrendingUp, label: "Charts & Timelines" },
            { icon: BookOpen, label: "Medical Phrases" }
          ].map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="flex items-center gap-2 py-1">
                <div className="w-2 h-2 bg-tealBlue rounded-full"></div>
                <IconComponent className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700">{tool.label}</span>
              </div>
            );
          })}
        </div>
        
        <Button variant="outline" className="w-full mt-4 border-tealBlue text-tealBlue hover:bg-tealBlue/10">
          Explore free tools
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Card>

      {/* Contact Us */}
      <Card className="p-6 bg-gradient-to-br from-tealBlue to-tealBlueBright text-white">
        <div className="text-center">
          <Phone className="h-8 w-8 mx-auto mb-3" />
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <p className="mb-4 text-tealBlue-100">
            Ready to transform your workflow? Book a personalized demo today.
          </p>
          
          <Button variant="secondary" className="w-full bg-white text-tealBlue hover:bg-gray-100">
            Schedule a demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BlogSidebar;