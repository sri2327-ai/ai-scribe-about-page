
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { ExternalLink, FileText, Users, Brain, Wrench, Code, HeartPulse, BookOpen } from "lucide-react";

const SiteDirectory = () => {
  const pages = [
    { path: '/', name: 'Home', icon: <ExternalLink className="h-5 w-5" /> },
    { path: '/about', name: 'About', icon: <Users className="h-5 w-5" /> },
    { path: '/crush-ai', name: 'Crush AI', icon: <Brain className="h-5 w-5" /> },
    { path: '/bravo', name: 'Bravo', icon: <HeartPulse className="h-5 w-5" /> },
    { path: '/custom-ai-agent', name: 'Custom AI Agent', icon: <Code className="h-5 w-5" /> },
    { path: '/technology', name: 'Technology', icon: <Wrench className="h-5 w-5" /> },
    { path: '/case-study', name: 'Case Studies', icon: <FileText className="h-5 w-5" /> },
    { path: '/blog', name: 'Blog', icon: <BookOpen className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">Site Directory</h1>
        <p className="text-center text-gray-600 mb-12">Navigate to any section of our website</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link to={page.path} key={page.path}>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {page.icon}
                  </div>
                  <span className="text-lg font-medium">{page.name}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Can't find what you're looking for? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteDirectory;
