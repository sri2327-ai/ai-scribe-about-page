
import React, { ReactNode } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Helmet } from 'react-helmet-async';
import OptimizedImage from '@/components/ui/optimized-image';

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  image?: string;
  customIllustration?: ReactNode;
  children: ReactNode;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  description,
  image,
  customIllustration,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50/30">
      <Helmet>
        <title>{title} | S10.AI Case Study</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 md:pt-20 pb-20">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/resources/casestudies">Case Studies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="p-6 sm:p-8 md:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl">{description}</p>
            
            <div className="w-full max-w-3xl mx-auto mb-10 flex justify-center">
              {customIllustration ? (
                <div className="w-full max-h-[300px] flex items-center justify-center">
                  {customIllustration}
                </div>
              ) : image ? (
                <div className="w-full h-[300px] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <OptimizedImage src={image} alt={title} className="w-full h-full object-contain max-h-[300px]" />
                </div>
              ) : null}
            </div>
            
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
