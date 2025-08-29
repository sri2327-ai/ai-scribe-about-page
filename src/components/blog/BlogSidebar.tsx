import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, TrendingUp, Clock, FileText, Calculator, BookOpen, Stethoscope, Phone } from "lucide-react";

const BlogSidebar = () => {
  const tools = [
    { icon: FileText, label: "FAQs", href: "/faq" },
    { icon: BookOpen, label: "Resource Library", href: "/resource-library" },
    { icon: Calculator, label: "Practice Efficiency Grader", href: "/practice-efficiency-grader" },
    { icon: FileText, label: "Templates", href: "/templates" },
    { icon: Stethoscope, label: "ICD-10-CM Code Browser", href: "/icd-codes" },
    { icon: BookOpen, label: "Medical Abbreviations", href: "/medical-abbreviations" },
    { icon: FileText, label: "Medical Prefixes, Suffixes, Root Words", href: "/medical-terminology" },
    { icon: TrendingUp, label: "Charts & Timelines", href: "/charts-timelines" },
    { icon: BookOpen, label: "Medical Phrases", href: "/medical-phrases" }
  ];

  return (
    <>
      {/* Non-sticky content */}
      <div className="space-y-4 sm:space-y-6">
        {/* Main CTA */}
        <Card className="p-4 sm:p-6 bg-gradient-to-br from-[#143151]/10 to-[#387E89]/20 border-2 border-[#387E89]/30">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#143151] mb-2">
              Do you want to save hours in documentation?
            </h3>
            <div className="w-12 h-0.5 bg-[#387E89] rounded-full mx-auto mb-4"></div>
          </div>
          
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Hey, we're s10.ai. We're determined to make healthcare professionals more efficient. 
              Take our Practice Efficiency Assessment to see how much time your practice could save. 
              Our only question is, will it be your practice?
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button className="bg-[#387E89] hover:bg-[#143151] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-lg w-full sm:w-auto">
              Start your free assessment
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </div>
        </Card>

        {/* About s10.ai */}
        <Card className="p-4 sm:p-6 bg-white border-gray-200">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#143151] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">S10</span>
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-[#143151]">About s10.ai</h4>
                <p className="text-xs sm:text-sm text-gray-600">AI-powered efficiency for healthcare practices</p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              We help practices save hours every week with smart automation and medical reference tools.
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-[#143151]">+200 Specialists</p>
                <p className="text-xs sm:text-sm text-gray-600">Employees</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-[#143151]">4 Countries</p>
                <p className="text-xs sm:text-sm text-gray-600">Operating across the US, UK, Canada and Australia</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Our Clients */}
        <Card className="p-4 sm:p-6 bg-white border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
            <h4 className="font-bold text-base sm:text-lg text-[#143151]">Our Clients</h4>
          </div>
          
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            We work with leading healthcare organizations and global enterprises.
          </p>
          
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <p>• Primary Care Center of Clear Lake</p>
            <p>• Medical Office of Katy</p>
            <p>• Doctors Studio</p>
            <p>• Primary care associates</p>
          </div>
        </Card>

        {/* Real-World Results */}
        <Card className="p-4 sm:p-6 bg-[#387E89]/5 border-[#387E89]/30">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
            <h4 className="font-bold text-base sm:text-lg text-[#143151]">Real-World Results</h4>
          </div>
          
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#387E89] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">30% revenue increase & 90% less burnout with AI Medical Scribes</p>
            </div>
            
            <div className="flex items-start gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#387E89] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">75% faster documentation and 15% more revenue across practices</p>
            </div>
            
            <div className="flex items-start gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#387E89] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Providers earning +$5,311/month and saving $20K+ yearly in admin costs</p>
            </div>
            
            <div className="flex items-start gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#387E89] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">100% accuracy in Nordic languages</p>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-4 border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white">
            See all case studies
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </Card>

        {/* Tools */}
        <Card className="p-4 sm:p-6 bg-[#143151]/5 border-gray-200">
          <h4 className="font-bold text-base sm:text-lg text-[#143151] mb-4">Tools</h4>
          
          <div className="space-y-2">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <a 
                  key={index} 
                  href={tool.href}
                  className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-[#387E89]/10 transition-colors cursor-pointer group"
                >
                  <div className="w-2 h-2 bg-[#387E89] rounded-full"></div>
                  <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 group-hover:text-[#387E89]" />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#143151] font-medium">{tool.label}</span>
                </a>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Sticky section */}
      <div className="sticky top-4 space-y-4 sm:space-y-6 mt-4 sm:mt-6">
        {/* Contact Us */}
        <Card className="p-4 sm:p-6 bg-gradient-to-br from-[#143151] to-[#387E89] text-white">
          <div className="text-center">
            <Phone className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-3" />
            <h4 className="font-bold text-base sm:text-lg mb-2">Contact Us</h4>
            <p className="mb-4 text-xs sm:text-sm text-white/90">
              Ready to transform your workflow? Book a personalized demo today.
            </p>
            
            <Button variant="secondary" className="w-full bg-white text-[#143151] hover:bg-gray-100">
              Schedule a demo
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </Card>

        {/* ROI Calculator CTA */}
        <Card className="p-4 sm:p-6 bg-gradient-to-br from-[#387E89]/10 to-[#143151]/10 border-2 border-[#387E89]/30">
          <div className="text-center">
            <Calculator className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-3 text-[#387E89]" />
            <h4 className="font-bold text-base sm:text-lg mb-2 text-[#143151]">Calculate Your ROI</h4>
            <p className="mb-4 text-xs sm:text-sm text-gray-600">
              See how much time and money you could save with our AI solutions.
            </p>
            
            <Button className="w-full bg-[#387E89] hover:bg-[#143151] text-white">
              Try ROI Calculator
              <Calculator className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BlogSidebar;