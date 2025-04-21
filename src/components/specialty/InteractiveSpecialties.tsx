
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SpecialtyContent {
  title: string;
  content: string;
}

const specialtyData: Record<string, SpecialtyContent> = {
  allergy: {
    title: "Allergy & Immunology",
    content: "Documents immunotherapy plans, allergy testing results, asthma control levels, and autoimmune tracking, enhancing management of hypersensitivity and immune conditions."
  },
  cardiology: {
    title: "Cardiology",
    content: "Captures detailed data on EKG results, cardiac risk factors, heart failure assessments, pacemaker checks, echocardiograms, and stress test findings, ensuring precise cardiac documentation."
  },
  // ... adding more specialties
  other: {
    title: "Other Specialties",
    content: "S10.AI works with ANY medical specialty! Our platform adapts to your specific needs, providing customized documentation solutions for every healthcare specialty. Contact us to learn how we can support your specific practice area with tailored AI assistance."
  }
};

const InteractiveSpecialties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const handleSpecialtyClick = (id: string) => {
    setSelectedSpecialty(id);
  };

  const specialties = Object.keys(specialtyData);
  const filteredSpecialties = specialties.filter(specialty =>
    specialtyData[specialty].title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-xl mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for specialties..."
              className="pl-10 py-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
            {filteredSpecialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                className="whitespace-nowrap text-sm"
                onClick={() => handleSpecialtyClick(specialty)}
              >
                {specialtyData[specialty].title}
              </Button>
            ))}
          </div>
        </div>

        {selectedSpecialty && (
          <Card className="mt-6 bg-white shadow-lg border-blue-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-[#143151] mb-4">
                {specialtyData[selectedSpecialty].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {specialtyData[selectedSpecialty].content}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default InteractiveSpecialties;
