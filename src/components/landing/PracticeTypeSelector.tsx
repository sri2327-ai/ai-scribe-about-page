
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building, Building2, Hospital } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PracticeType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const practiceTypes: PracticeType[] = [
  {
    id: "solo",
    title: "Solo Practitioner",
    description: "Streamlined and fast—perfect for individual providers who need automated, real-time documentation without the overhead of complex systems.",
    icon: User
  },
  {
    id: "small",
    title: "Small Clinic",
    description: "Collaborative tools that help small teams work in sync. Real-time notes, shared tasks, and seamless coordination.",
    icon: Building
  },
  {
    id: "multi",
    title: "Multispecialty Group",
    description: "Handles complex medical language across departments—perfect for diverse clinical teams with varied documentation needs.",
    icon: Building2
  },
  {
    id: "large",
    title: "Large Healthcare System",
    description: "Built to scale—S10.AI supports high patient volumes, multiple users, and enterprise-level workflows.",
    icon: Hospital
  }
];

export const PracticeTypeSelector = () => {
  const [selectedType, setSelectedType] = useState(practiceTypes[0].id);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#143151]">
            Tailored Solutions for Every Practice Type
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
            S10.AI adapts to your practice size and workflow needs
          </p>
        </div>

        <Tabs
          defaultValue={practiceTypes[0].id}
          value={selectedType}
          onValueChange={setSelectedType}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-transparent h-auto p-0">
            {practiceTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="data-[state=active]:bg-gradient-to-r from-[#143151] to-[#387E89] data-[state=active]:text-white px-3 md:px-4 py-2 md:py-3 h-auto flex flex-col items-center gap-2 rounded-lg border border-gray-200 hover:border-[#387E89] transition-all"
              >
                <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-xs md:text-sm font-semibold">{type.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {practiceTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="mt-6 border-2 border-[#387E89]/10 hover:border-[#387E89]/20 transition-all shadow-sm hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
                      <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#143151]">{type.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                      {type.description}
                    </p>
                    
                    <div className="mt-6">
                      <button className="rounded-full px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PracticeTypeSelector;
