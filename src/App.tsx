import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";

const LazyAbout = lazy(() => import('./pages/About'));
const LazyTechnology = lazy(() => import('./pages/Technology'));
const LazyCrushAI = lazy(() => import('./pages/CrushAI'));
const LazyBravo = lazy(() => import('./pages/Bravo'));
const LazyCustomAIAgent = lazy(() => import('./pages/CustomAIAgent'));
const LazyIntegration = lazy(() => import('./pages/Integration'));

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/landing" element={<Navigate to="/" replace />} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                  <LazyAbout />
                </Suspense>
              } 
            />
            <Route 
              path="/technology" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                  <LazyTechnology />
                </Suspense>
              } 
            />
            <Route 
              path="/crush-ai" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                  <LazyCrushAI />
                </Suspense>
              } 
            />
            <Route 
              path="/bravo" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                  <LazyBravo />
                </Suspense>
              } 
            />
            <Route 
              path="/custom-ai-agent" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                  <LazyCustomAIAgent />
                </Suspense>
              } 
            />
            <Route 
              path="/integration" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                  <LazyIntegration />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
