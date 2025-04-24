
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography } from "@mui/material";
import styles from "@/styles/casestudy.module.scss";
import OptimizedImage from "@/components/ui/optimized-image";
import FeaturedCaseStudy from '@/components/casestudy/FeaturedCaseStudy';
import CaseStudyGrid from '@/components/casestudy/CaseStudyGrid';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

const CaseStudy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#A5CCF3]">
      <Helmet>
        <title>Case Studies | S10.AI</title>
        <meta name="description" content="Discover how S10.AI has transformed healthcare practices through AI-powered solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/case-study">Case Studies</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <FeaturedCaseStudy />
        <CaseStudyGrid />
      </div>
    </main>
  );
};

export default CaseStudy;
