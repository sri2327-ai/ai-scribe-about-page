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
            {filteredSpecialties.map((specialty) => {
              const SpecialtyIcon = specialtyData[specialty].icon;
              return (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  className={`group whitespace-normal text-sm h-auto py-2 relative overflow-hidden ${
                    selectedSpecialty === specialty 
                      ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:from-[#143151] hover:to-[#387E89]' 
                      : 'hover:text-white hover:border-transparent'
                  }`}
                  onClick={() => handleSpecialtyClick(specialty)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#143151] to-[#387E89] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <SpecialtyIcon className="w-4 h-4 mr-2 relative z-10 transition-colors duration-300 group-hover:text-white" />
                  <span className="relative z-10">{specialtyData[specialty].title}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {selectedSpecialty && (
          <Card className="mt-6 bg-white shadow-lg border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {React.createElement(specialtyData[selectedSpecialty].icon, {
                  className: "w-8 h-8 text-[#143151]"
                })}
                <h3 className="text-2xl font-bold text-[#143151]">
                  {specialtyData[selectedSpecialty].title}
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {specialtyData[selectedSpecialty].content}
              </p>

              <div className="space-y-6">
                {Object.entries(specialtyData[selectedSpecialty].detailedContent).map(([key, content]) => (
                  <div key={key} className="bg-[#FDF4F8] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#143151] mb-2">
                      {key.split(/(?=[A-Z])/).join(' ')}
                    </h4>
                    <p className="text-gray-700">{content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InteractiveSpecialties;
