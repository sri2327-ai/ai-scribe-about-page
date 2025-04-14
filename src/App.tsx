
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
            
            {/* Resources parent route */}
            <Route path="/resources" element={<Layout><Resources /></Layout>} />
            
            {/* Nested routes under Resources */}
            <Route path="/resources/about" element={<Layout><About /></Layout>} />
            <Route path="/resources/technology" element={<Layout><Technology /></Layout>} />
            <Route path="/resources/blog" element={<Layout><NotFound /></Layout>} />
            <Route path="/resources/faq" element={<Layout><NotFound /></Layout>} />
            <Route path="/resources/customers" element={<Layout><NotFound /></Layout>} />
            <Route path="/resources/casestudies" element={<Layout><NotFound /></Layout>} />
            
            {/* Solutions routes */}
            <Route path="/solutions" element={<Layout><NotFound /></Layout>} />
            <Route path="/solutions/crush" element={<Layout><NotFound /></Layout>} />
            <Route path="/solutions/bravo" element={<Layout><NotFound /></Layout>} />
            
            {/* Integrations route */}
            <Route path="/integrations" element={<Layout><NotFound /></Layout>} />
            <Route path="/specialties" element={<Layout><NotFound /></Layout>} />
            <Route path="/contactus" element={<Layout><NotFound /></Layout>} />
            <Route path="/privacypolicy" element={<Layout><NotFound /></Layout>} />
            <Route path="/termsandcondition" element={<Layout><NotFound /></Layout>} />
            
            {/* Original routes as fallbacks */}
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/technology" element={<Layout><Technology /></Layout>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
