
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Header from './components/Header';
import Footer from './components/Footer';
import { SectionLoader } from '@/components/ui/section-loader';

// Import Landing directly instead of lazy loading it to fix the dynamic import issue
import Landing from './pages/Landing';

// Lazy load all other routes
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const CrushAI = React.lazy(() => import('./pages/CrushAI'));
const Bravo = React.lazy(() => import('./pages/Bravo'));
const CustomAIAgent = React.lazy(() => import('./pages/CustomAIAgent'));
const Specialty = React.lazy(() => import('./pages/Specialty'));
const Technology = React.lazy(() => import('./pages/Technology'));
const Integration = React.lazy(() => import('./pages/Integration'));
const Customer = React.lazy(() => import('./pages/Customer'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Changelog = React.lazy(() => import('./pages/Changelog'));
const CaseStudy = React.lazy(() => import('./pages/CaseStudy'));

// Lazy load case study pages
const OsmindCaseStudy = React.lazy(() => import('./pages/case-studies/OsmindCaseStudy'));
const NordicLanguagesCaseStudy = React.lazy(() => import('./pages/case-studies/NordicLanguagesCaseStudy'));
const FamilyMedicineCaseStudy = React.lazy(() => import('./pages/case-studies/FamilyMedicineCaseStudy'));
const EPICUsabilityCaseStudy = React.lazy(() => import('./pages/case-studies/EPICUsabilityCaseStudy'));
const ImprovingPatientCareCaseStudy = React.lazy(() => import('./pages/case-studies/ImprovingPatientCareCaseStudy'));
const FiveThousandCaseStudy = React.lazy(() => import('./pages/case-studies/FiveThousandCaseStudy'));
const SeventeenThousandCaseStudy = React.lazy(() => import('./pages/case-studies/SeventeenThousandCaseStudy'));
const TwentyoneThousandCaseStudy = React.lazy(() => import('./pages/case-studies/TwentyoneThousandCaseStudy'));
const GastroenterologyStudy = React.lazy(() => import('./pages/case-studies/GastroenterologyStudy'));
const MultiProviderPracticesStudy = React.lazy(() => import('./pages/case-studies/MultiProviderPracticesStudy'));
const IntakeQStudy = React.lazy(() => import('./pages/case-studies/IntakeQStudy'));
const FunctionalMedicineStudy = React.lazy(() => import('./pages/case-studies/FunctionalMedicineStudy'));
const AlaskaTherapyStudy = React.lazy(() => import('./pages/case-studies/AlaskaTherapyStudy'));

// Lazy load the blog post component
const BlogPost = React.lazy(() => import('./components/blog/BlogPost'));

// Import case study index component
import CaseStudiesIndex from "./pages/case-studies/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Landing page is directly imported to avoid dynamic import issues */}
        <Route path="/" element={<Landing />} />
        
        {/* All other routes are lazy loaded with Suspense */}
        <Route path="/about" element={
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        } />
        <Route path="/crush-ai" element={
          <Suspense fallback={<SectionLoader />}>
            <CrushAI />
          </Suspense>
        } />
        <Route path="/bravo" element={
          <Suspense fallback={<SectionLoader />}>
            <Bravo />
          </Suspense>
        } />
        <Route path="/custom-ai-agent" element={
          <Suspense fallback={<SectionLoader />}>
            <CustomAIAgent />
          </Suspense>
        } />
        <Route path="/specialty" element={
          <Suspense fallback={<SectionLoader />}>
            <Specialty />
          </Suspense>
        } />
        <Route path="/technology" element={
          <Suspense fallback={<SectionLoader />}>
            <Technology />
          </Suspense>
        } />
        <Route path="/integration" element={
          <Suspense fallback={<SectionLoader />}>
            <Integration />
          </Suspense>
        } />
        <Route path="/customer" element={
          <Suspense fallback={<SectionLoader />}>
            <Customer />
          </Suspense>
        } />
        <Route path="/faq" element={
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<SectionLoader />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/blog/:slug" element={
          <Suspense fallback={<SectionLoader />}>
            <BlogPost />
          </Suspense>
        } />
        <Route path="/changelog" element={
          <Suspense fallback={<SectionLoader />}>
            <Changelog />
          </Suspense>
        } />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/resources/casestudies" element={<CaseStudiesIndex />} />
        
        {/* Case Study Routes */}
        <Route path="/resources/casestudies/80-faster-documentation-with-osmind-ehr-integration" element={
          <Suspense fallback={<SectionLoader />}>
            <OsmindCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/100-accuracy-in-nordic-languages-fast-documentation" element={
          <Suspense fallback={<SectionLoader />}>
            <NordicLanguagesCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4" element={
          <Suspense fallback={<SectionLoader />}>
            <FamilyMedicineCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/how-s10-ai-medical-scribe-assistant-improves-epic-usability" element={
          <Suspense fallback={<SectionLoader />}>
            <EPICUsabilityCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/improving-patient-care-with-s10-ai-ai-medical-scribe" element={
          <Suspense fallback={<SectionLoader />}>
            <ImprovingPatientCareCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/physician-earns-five-thousand-dollars-per-month" element={
          <Suspense fallback={<SectionLoader />}>
            <FiveThousandCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/physician-saves-seventeen-thousand-dollars-yearly" element={
          <Suspense fallback={<SectionLoader />}>
            <SeventeenThousandCaseStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/physician-saves-twenty-one-thousand-dollars-yearly" element={
          <Suspense fallback={<SectionLoader />}>
            <TwentyoneThousandCaseStudy />
          </Suspense>
        } />
        
        {/* New Case Study Routes */}
        <Route path="/resources/casestudies/save-2-hours-daily-ai-efficiency-for-gastroenterologists" element={
          <Suspense fallback={<SectionLoader />}>
            <GastroenterologyStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/crush-saves-2-hours-daily-for-multi-provider-practices" element={
          <Suspense fallback={<SectionLoader />}>
            <MultiProviderPracticesStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/crush-intake-q-transforming-dr-strotman-practice" element={
          <Suspense fallback={<SectionLoader />}>
            <IntakeQStudy />
          </Suspense>
        } />
        <Route path="/resources/casestudies/revolutionizing-functional-medicine-with-crush" element={
          <Suspense fallback={<SectionLoader />}>
            <FunctionalMedicineStudy />
          </Suspense>
        } />
        
        {/* Fix the Alaska Therapy case study route */}
        <Route path="/resources/casestudies/alaska-therapy" element={
          <Suspense fallback={<SectionLoader />}>
            <AlaskaTherapyStudy />
          </Suspense>
        } />
        <Route path="/case-studies/alaska-therapy" element={
          <Suspense fallback={<SectionLoader />}>
            <AlaskaTherapyStudy />
          </Suspense>
        } />
        
        <Route path="*" element={
          <Suspense fallback={<SectionLoader />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
