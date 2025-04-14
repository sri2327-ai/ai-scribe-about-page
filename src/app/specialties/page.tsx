import SpecialtiesBanner from "@/components/Specialties/Section1";
import type { Metadata } from "next";
import SpecialtiesGrid from "@/components/Specialties/Section2";
import Testimonial from "@/components/Specialties/Section3";
import ClosingSection from "@/components/Specialties/Section4";
export const metadata: Metadata = {
  title: "S10.AI Conatact US",
  description: "Schedule A Demo",
};

export default function Specialty() {
  return (
    <main>
      <SpecialtiesBanner />
      <SpecialtiesGrid/>
      <Testimonial/>
      <ClosingSection/>
    </main>
  );
}
