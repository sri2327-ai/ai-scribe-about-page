import Section1 from "@/components/Faq/Section1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S10.AI Faqs",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function FAQ() {
  return (
    <main>
      <Section1 />
    </main>
  );
}
