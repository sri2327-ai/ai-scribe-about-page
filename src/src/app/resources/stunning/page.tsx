import CustomersBanner from "@/components/Stunning/Section1";
import type { Metadata } from "next";
import TestimonialCarousel from "@/components/Stunning/Section2"
import PromoBanner from "@/components/Stunning/Section3";
import StunningCaseStudies from "@/components/Stunning/Section4"
import LogoScroll from "@/components/Stunning/Section5";
import LastScroll from "@/components/Stunning/Section6";

export const metadata: Metadata = {
  title: "S10.AI Coustomers",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function FAQ() {
  return (
    <main>
      <CustomersBanner />
      <TestimonialCarousel />
      <PromoBanner/>
      <StunningCaseStudies/>
      <LogoScroll/>
      <LastScroll/>
    </main>
  );
}
