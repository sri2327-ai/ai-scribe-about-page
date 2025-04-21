
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { specialtyData } from './specialtyData';

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
    <div className="py-8">
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
                className={`whitespace-normal text-sm h-auto py-2 ${selectedSpecialty === specialty ? 'bg-[#143151] hover:bg-[#143151]/90' : ''}`}
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
    </div>
  );
};

export default InteractiveSpecialties;
