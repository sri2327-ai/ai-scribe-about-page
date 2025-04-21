
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const MacrosShortcutsSection = () => {
  const [macros, setMacros] = useState<Array<{ trigger: string; text: string }>>([]);
  const [newTrigger, setNewTrigger] = useState('');
  const [newText, setNewText] = useState('');

  const handleAddMacro = () => {
    if (newTrigger && newText) {
      setMacros([...macros, { trigger: newTrigger, text: newText }]);
      setNewTrigger('');
      setNewText('');
    }
  };

  return (
    <Card className="p-6 mb-6 bg-white">
      <h3 className="text-lg font-semibold mb-4 text-[#143151]">Macros / Shortcuts</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Trigger Phrase"
            value={newTrigger}
            onChange={(e) => setNewTrigger(e.target.value)}
            className="bg-background"
          />
          <Input
            placeholder="Auto-Insert Text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="bg-background"
          />
        </div>
        <Button onClick={handleAddMacro} className="w-full gap-2">
          <Plus className="h-4 w-4" /> Add Macro
        </Button>
        
        {macros.length > 0 && (
          <div className="mt-4 space-y-2">
            {macros.map((macro, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{macro.trigger}</span>
                <span className="text-gray-600">{macro.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MacrosShortcutsSection;
