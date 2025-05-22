
import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { specialtyData } from './specialtyData';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useWindowSize } from '@/hooks/use-window-size';

const InteractiveSpecialties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [filteredSpecialties, setFilteredSpecialties] = useState<string[]>([]);
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const { width } = useWindowSize();
  
  const specialties = Object.keys(specialtyData);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSpecialties(specialties);
    } else {
      const filtered = specialties.filter(specialty =>
        specialtyData[specialty].title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSpecialties(filtered);
    }
  }, [searchTerm]);

  // Initialize with all specialties
  useEffect(() => {
    setFilteredSpecialties(specialties);
  }, []);

  const handleSpecialtyClick = (id: string) => {
    if (selectedSpecialty === id) {
      setSelectedSpecialty(null); // Toggle off if already selected
    } else {
      setSelectedSpecialty(id);
    }
  };

  const displayedSpecialties = showAllSpecialties 
    ? filteredSpecialties 
    : filteredSpecialties.slice(0, width < 640 ? 10 : 15);
  
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  // Calculate grid columns based on screen width
  const getGridColumns = () => {
    if (width < 480) return 'grid-cols-1';
    if (width < 640) return 'grid-cols-2';
    if (width < 768) return 'grid-cols-3';
    if (width < 1024) return 'grid-cols-4';
    return 'grid-cols-5';
  };

  return (
    <div className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <motion.div 
            className="relative w-full max-w-xl mb-6 sm:mb-8"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for specialties..."
                className="pl-10 py-3 pr-10 rounded-full border-gray-300 focus:ring-[#387E89] focus:border-[#387E89] transition-all shadow-sm hover:shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:ring-offset-2 rounded-full p-1"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <AnimatePresence>
              {filteredSpecialties.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="mt-2 text-center text-gray-500"
                >
                  No specialties found. Try a different search term.
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {searchTerm && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="mt-2"
                >
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {filteredSpecialties.length} {filteredSpecialties.length === 1 ? 'result' : 'results'} found
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            className={`grid ${getGridColumns()} gap-2 sm:gap-3 w-full`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {displayedSpecialties.map((specialty) => {
              const SpecialtyIcon = specialtyData[specialty].icon;
              const isSelected = selectedSpecialty === specialty;
              
              return (
                <motion.div
                  key={specialty}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Button
                    variant={isSelected ? "default" : "outline"}
                    className={`group w-full whitespace-normal text-sm h-auto py-2.5 relative overflow-hidden transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:from-[#143151]/90 hover:to-[#387E89]/90 shadow-md' 
                        : 'hover:text-white hover:border-transparent hover:shadow-md'
                    }`}
                    onClick={() => handleSpecialtyClick(specialty)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#143151] to-[#387E89] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <SpecialtyIcon className={`w-4 h-4 mr-2 relative z-10 transition-transform group-hover:scale-110 duration-300 ${isSelected ? 'text-white' : ''} group-hover:text-white`} />
                    <span className="relative z-10">{specialtyData[specialty].title}</span>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
          
          {filteredSpecialties.length > (width < 640 ? 10 : 15) && (
            <Button
              variant="ghost"
              onClick={() => setShowAllSpecialties(!showAllSpecialties)}
              className="mt-6 text-[#387E89] hover:text-[#143151] hover:bg-blue-50/50 flex items-center gap-1 group transition-all duration-300"
            >
              {showAllSpecialties ? 'Show Less' : `Show All (${filteredSpecialties.length})`}
              <motion.div
                animate={{ rotate: showAllSpecialties ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center"
              >
                <ChevronDown size={18} className="transform transition-transform" />
              </motion.div>
            </Button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {selectedSpecialty && (
            <motion.div
              key={selectedSpecialty}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-2 sm:mt-4"
            >
              <Card className="bg-white shadow-lg border-blue-100 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 sm:p-6 pb-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-white">
                    <div className="flex items-center gap-3">
                      {React.createElement(specialtyData[selectedSpecialty].icon, {
                        className: "w-6 sm:w-8 h-6 sm:h-8 text-[#143151]"
                      })}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#143151]">
                        {specialtyData[selectedSpecialty].title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      {specialtyData[selectedSpecialty].content}
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      {Object.entries(specialtyData[selectedSpecialty].detailedContent).map(([key, content], index) => (
                        <motion.div 
                          key={key} 
                          className="bg-[#FDF4F8] p-3 sm:p-4 rounded-lg hover:shadow-sm transition-shadow"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                          <h4 className="font-semibold text-[#143151] mb-2">
                            {key.split(/(?=[A-Z])/).join(' ')}
                          </h4>
                          <p className="text-gray-700">{content}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveSpecialties;
