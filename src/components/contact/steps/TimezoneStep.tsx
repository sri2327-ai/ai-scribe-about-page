
import React, { useState } from 'react';
import { Globe, Check, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimezoneStepProps {
  timeZone: string;
  setTimeZone: (zone: string) => void;
  timeZoneOptions: string[];
}

const TimezoneStep = ({ timeZone, setTimeZone, timeZoneOptions }: TimezoneStepProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTimezoneSelect = (zone: string) => {
    console.log('Timezone selected:', zone);
    setTimeZone(zone);
  };

  const formatTimezoneName = (zone: string) => {
    const formatted = zone.replace(/_/g, ' ').replace('America/', '').replace('Europe/', '').replace('Asia/', '').replace('Australia/', '').replace('Pacific/', '');
    
    // Add common timezone abbreviations
    const timezoneMap: { [key: string]: string } = {
      'New York': 'EST',
      'Chicago': 'CST', 
      'Denver': 'MST',
      'Los Angeles': 'PST',
      'London': 'GMT',
      'Paris': 'CET',
      'Tokyo': 'JST',
      'Sydney': 'AEDT',
      'Honolulu': 'HST'
    };
    
    const abbr = timezoneMap[formatted];
    return abbr ? `${formatted} (${abbr})` : formatted;
  };

  // Popular timezones with better organization
  const timezoneGroups = {
    "🇺🇸 United States": [
      "America/New_York",
      "America/Chicago", 
      "America/Denver",
      "America/Los_Angeles",
      "Pacific/Honolulu"
    ],
    "🌍 Popular Worldwide": [
      "UTC",
      "Europe/London",
      "Europe/Paris",
      "Europe/Berlin",
      "Asia/Tokyo",
      "Australia/Sydney"
    ],
    "🌎 Americas": timeZoneOptions.filter(zone => 
      zone.startsWith('America/') && 
      !["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"].includes(zone)
    ).slice(0, 8),
    "🌍 Europe & Africa": timeZoneOptions.filter(zone => 
      (zone.startsWith('Europe/') || zone.startsWith('Africa/')) && 
      !["Europe/London", "Europe/Paris", "Europe/Berlin"].includes(zone)
    ).slice(0, 8),
    "🌏 Asia & Pacific": timeZoneOptions.filter(zone => 
      (zone.startsWith('Asia/') || zone.startsWith('Pacific/')) && 
      !["Asia/Tokyo", "Australia/Sydney", "Pacific/Honolulu"].includes(zone)
    ).slice(0, 8)
  };

  // Filter timezones based on search
  const filteredGroups = searchTerm ? {
    "Search Results": timeZoneOptions.filter(zone =>
      formatTimezoneName(zone).toLowerCase().includes(searchTerm.toLowerCase())
    )
  } : timezoneGroups;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-center p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl mb-4">
          <Globe className="w-8 h-8 text-[#387E89]" />
        </div>
        <h2 className="text-2xl font-bold text-[#133255] mb-2">Select Timezone</h2>
        <p className="text-gray-600 text-sm leading-relaxed">Choose your preferred timezone for the demo</p>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-4 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search timezones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:border-[#387E89] focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Timezone List */}
      <div className="flex-1 px-4 pb-6 overflow-hidden">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 h-full">
          <ScrollArea className="h-full w-full">
            <div className="space-y-6 pr-2">
              {Object.entries(filteredGroups).map(([groupName, zones]) => (
                zones.length > 0 && (
                  <div key={groupName} className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-700 border-b border-gray-100 pb-2 sticky top-0 bg-white z-10">
                      {groupName}
                    </h4>
                    <div className="space-y-2">
                      {zones.map((zone) => (
                        <button
                          key={zone}
                          type="button"
                          onClick={() => handleTimezoneSelect(zone)}
                          className={`w-full p-4 flex items-center justify-between text-left transition-all duration-300 rounded-2xl border-2 ${
                            timeZone === zone 
                              ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-[1.02]' 
                              : 'bg-white hover:bg-gray-50 hover:border-[#387E89] border-gray-200 text-gray-700 active:scale-95'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 flex-shrink-0" />
                            <div className="text-left">
                              <span className="text-sm font-semibold block">
                                {formatTimezoneName(zone)}
                              </span>
                              <span className={`text-xs ${timeZone === zone ? 'text-blue-100' : 'text-gray-500'}`}>
                                {zone}
                              </span>
                            </div>
                          </div>
                          {timeZone === zone && (
                            <div className="bg-white bg-opacity-20 rounded-full p-1">
                              <Check className="h-4 w-4 flex-shrink-0" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              ))}
              
              {Object.values(filteredGroups).every(zones => zones.length === 0) && (
                <div className="text-center py-8">
                  <Globe className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No timezones found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Selected Timezone Display */}
        {timeZone && (
          <div className="mt-4 text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <p className="text-xs font-medium text-green-700 mb-1">Selected timezone</p>
            <p className="text-lg font-bold text-green-800">{formatTimezoneName(timeZone)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimezoneStep;
