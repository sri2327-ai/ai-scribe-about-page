
import type { Metadata } from "next";
import IntegrationSection from "@/components/Integrations/Section1";
import Healthcare from "@/components/Integrations/Section2";
import Telehealth from "@/components/Integrations/Section3";
import CloudAndCalendar from "@/components/Integrations/Section4";
import EmailWorkflow from "@/components/Integrations/Section5";
import WhyS10Section from "@/components/Integrations/Section6";
import LastScroll from "@/components/Integrations/Section7";
export const metadata: Metadata = {
  title: "S10.AI Integration",
  description: "Integration",
};

export default function Integrations() {
  return (
    <main>
      <IntegrationSection />
      <Healthcare/>
      <Telehealth/>
      <CloudAndCalendar/>
      <EmailWorkflow/>
      <WhyS10Section/>
      <LastScroll/>
    </main>
  );
}
