
import React from "react";
import IntegrationHeroSection from "../components/integration/IntegrationHeroSection";
import IntegrationTabs from "../components/integration/IntegrationTabs";
import WhyChooseS10 from "../components/integration/WhyChooseS10";
import LastScroll from "../components/integration/LastScroll";

const IntegrationPage = () => (
  <div className="min-h-screen">
    <IntegrationHeroSection />
    <IntegrationTabs />
    <WhyChooseS10 />
    <LastScroll />
  </div>
);

export default IntegrationPage;
