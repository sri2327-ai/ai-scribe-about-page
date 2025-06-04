
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import SpecialtiesBanner from '@/components/specialty/SpecialtiesBanner';
import SpecialtiesGrid from '@/components/specialty/SpecialtiesGrid';
import TemplateBuilder from '@/components/specialty/TemplateBuilder';
import Testimonial from '@/components/specialty/Testimonial';
import ClosingSection from '@/components/specialty/ClosingSection';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';

const Specialty = () => {
  const [searchParams] = useSearchParams();
  const specialtyParam = searchParams.get('specialty');

  useEffect(() => {
    // Update page title if specialty is specified
    if (specialtyParam) {
      document.title = `${specialtyParam} AI Solutions | S10.AI`;
    }
  }, [specialtyParam]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{specialtyParam ? `${specialtyParam} AI Solutions | S10.AI` : 'Medical Specialties | S10.AI'}</title>
        <meta name="description" content={`S10.AI provides ${specialtyParam ? `specialized AI solutions for ${specialtyParam}` : 'specialty-specific AI solutions for healthcare professionals across various medical disciplines'}.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/specialty">Specialties</BreadcrumbLink>
            </BreadcrumbItem>
            {specialtyParam && (
              <BreadcrumbItem>
                <BreadcrumbLink href={`/specialty?specialty=${encodeURIComponent(specialtyParam)}`}>{specialtyParam}</BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-10 md:space-y-14"
      >
        <SpecialtiesBanner />
        <SpecialtiesGrid />
        <TemplateBuilder />
        <Testimonial />
        <ClosingSection />
      </motion.div>
    </div>
  );
};

export default Specialty;
