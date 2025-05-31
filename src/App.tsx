
import {
  Route,
  Routes,
} from "react-router-dom";
import Index from "@/pages/Index";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Specialty from "@/pages/Specialty";
import Technology from "@/pages/Technology";
import Customer from "@/pages/Customer";
import CustomAIAgent from "@/pages/CustomAIAgent";
import CrushAI from "@/pages/CrushAI";
import Bravo from "@/pages/Bravo";
import Integration from "@/pages/Integration";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Changelog from "@/pages/Changelog";
import HelpLibrary from "@/pages/HelpLibrary";
import FAQ from "@/pages/FAQ";
import CaseStudy from "@/pages/CaseStudy";
import CaseStudiesIndex from "@/pages/case-studies/index";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";
import Advantages from "@/pages/Advantages";
import ResourceLibrary from "@/pages/ResourceLibrary";
import AIAccuracy from "@/pages/AIAccuracy";

function App() {
  console.log("Rendering App component");
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/specialty" element={<Specialty />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/custom-ai-agent" element={<CustomAIAgent />} />
      <Route path="/crush-ai" element={<CrushAI />} />
      <Route path="/bravo" element={<Bravo />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/help-library" element={<HelpLibrary />} />
      <Route path="/resource-library" element={<ResourceLibrary />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/advantages" element={<Advantages />} />
      <Route path="/ai-accuracy" element={<AIAccuracy />} />
      <Route path="/resources/casestudies" element={<CaseStudiesIndex />} />
      <Route path="/resources/casestudies/:caseStudyId" element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
