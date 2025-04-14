
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

// Layout component to wrap all pages with header and footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            
            {/* Solutions routes */}
            <Route path="/solutions/crush" element={<Layout><NotFound /></Layout>} />
            <Route path="/solutions/bravo" element={<Layout><NotFound /></Layout>} />
            
            {/* About routes */}
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/technology" element={<Layout><Technology /></Layout>} />
            <Route path="/integrations" element={<Layout><NotFound /></Layout>} />
            <Route path="/specialties" element={<Layout><NotFound /></Layout>} />
            
            {/* Resources parent and nested routes */}
            <Route path="/resources" element={<Layout><Resources /></Layout>} />
            <Route path="/resources/blog" element={<Layout><NotFound /></Layout>} />
            <Route path="/resources/faq" element={<Layout><NotFound /></Layout>} />
            <Route path="/resources/customers" element={<Layout><NotFound /></Layout>} />
            <Route path="/resources/casestudies" element={<Layout><NotFound /></Layout>} />
            
            {/* Contact us */}
            <Route path="/contactus" element={<Layout><NotFound /></Layout>} />
            
            {/* Legal pages */}
            <Route path="/privacypolicy" element={<Layout><NotFound /></Layout>} />
            <Route path="/termsandcondition" element={<Layout><NotFound /></Layout>} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
