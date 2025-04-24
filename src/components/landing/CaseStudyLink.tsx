
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CaseStudyLink = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Our Success Stories</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Discover how healthcare providers are transforming their practices with our AI solutions through detailed case studies.
        </p>
        <Link to="/case-study">
          <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:opacity-90 px-6 py-2">
            View Case Studies <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyLink;
