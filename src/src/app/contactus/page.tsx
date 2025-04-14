import DemoRequestForm from "@/components/ContactUs/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S10.AI Conatact US",
  description: "Schedule A Demo",
};

export default function ContactUs() {
  return (
    <main>
      <DemoRequestForm />
    </main>
  );
}
