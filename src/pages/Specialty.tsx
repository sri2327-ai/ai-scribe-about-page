
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import SpecialtiesBanner from '@/components/specialty/SpecialtiesBanner';
import SpecialtiesGrid from '@/components/specialty/SpecialtiesGrid';
import TemplateBuilder from '@/components/specialty/TemplateBuilder';
import Testimonial from '@/components/specialty/Testimonial';
import ClosingSection from '@/components/specialty/ClosingSection';
import { CABeforeAfterCarousel } from '@/components/custom-ai-agent/CABeforeAfterCarousel';
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
        
        {/* New Before & After CRUSH AI Scribe Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                Experience Note Perfection: Before & After CRUSH AI Scribe
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how specialty-specific, AI-powered clinical documentation enhances quality while saving hours of documentation time
              </p>
            </motion.div>
            
            <CABeforeAfterCarousel />
          </div>
        </section>
        
        <TemplateBuilder />
        <Testimonial />
        <ClosingSection />
      </motion.div>
    </div>
  );
};

export default Specialty;
