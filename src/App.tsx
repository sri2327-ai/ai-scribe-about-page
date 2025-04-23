
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
const NotFound = React.lazy(() => import('./pages/NotFound'));

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
