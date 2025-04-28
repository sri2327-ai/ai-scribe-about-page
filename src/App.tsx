import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Header from './components/Header';
import Footer from './components/Footer';
import { SectionLoader } from '@/components/ui/section-loader';

// Lazy load all main routes
const Landing = React.lazy(() => import('./pages/Landing'));
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

// Lazy load the blog post component
const BlogPost = React.lazy(() => import('./components/blog/BlogPost'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<SectionLoader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crush-ai" element={<CrushAI />} />
          <Route path="/bravo" element={<Bravo />} />
          <Route path="/custom-ai-agent" element={<CustomAIAgent />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/case-studies" element={<CaseStudy />} />
          <Route path="/resources/casestudies" element={<CaseStudy />} />
          
          {/* Case Study Routes */}
          <Route path="/resources/casestudies/80-faster-documentation-with-osmind-ehr-integration" element={<OsmindCaseStudy />} />
          <Route path="/resources/casestudies/100-accuracy-in-nordic-languages-fast-documentation" element={<NordicLanguagesCaseStudy />} />
          <Route path="/resources/casestudies/family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4" element={<FamilyMedicineCaseStudy />} />
          <Route path="/resources/casestudies/how-s10-ai-medical-scribe-assistant-improves-epic-usability" element={<EPICUsabilityCaseStudy />} />
          <Route path="/resources/casestudies/improving-patient-care-with-s10-ai-ai-medical-scribe" element={<ImprovingPatientCareCaseStudy />} />
          <Route path="/resources/casestudies/physician-earns-five-thousand-dollars-per-month" element={<FiveThousandCaseStudy />} />
          <Route path="/resources/casestudies/physician-saves-seventeen-thousand-dollars-yearly" element={<SeventeenThousandCaseStudy />} />
          <Route path="/resources/casestudies/physician-saves-twenty-one-thousand-dollars-yearly" element={<TwentyoneThousandCaseStudy />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
