
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Check, Shield } from "lucide-react";

type CookieConsent = {
  essential: boolean;
  marketing: boolean;
  personalization: boolean;
  analytics: boolean;
  showBanner: boolean;
};

const defaultConsent: CookieConsent = {
  essential: true, // Always active
  marketing: false,
  personalization: false,
  analytics: false,
  showBanner: true
};

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [showMiniBanner, setShowMiniBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>(defaultConsent);
  const [activeTab, setActiveTab] = useState<string>("simple");

  useEffect(() => {
    // Check if user has already set cookie preferences
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent);
      setPreferences(parsedConsent);
      setShowMiniBanner(false);
    } else {
      // If no preferences are saved, show the banner after a short delay
      const timer = setTimeout(() => {
        setShowMiniBanner(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      ...preferences,
      marketing: true,
      personalization: true,
      analytics: true,
      showBanner: false
    };
    
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setShowMiniBanner(false);
    setOpen(false);
  };

  const handleDenyAll = () => {
    const newPreferences = {
      ...preferences,
      marketing: false,
      personalization: false,
      analytics: false,
      showBanner: false
    };
    
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setShowMiniBanner(false);
    setOpen(false);
  };

  const handleSavePreferences = () => {
    const newPreferences = {
      ...preferences,
      showBanner: false
    };
    
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setShowMiniBanner(false);
    setOpen(false);
  };

  const handlePreferenceChange = (category: keyof Omit<CookieConsent, "showBanner">) => {
    if (category === 'essential') return; // Essential cannot be changed
    
    setPreferences({
      ...preferences,
      [category]: !preferences[category]
    });
  };

  const savePreferences = (prefs: CookieConsent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    
    // Here you would typically fire analytics events or set up tracking based on preferences
    console.log("Cookie preferences saved:", prefs);
  };

  const openFullPreferences = () => {
    setOpen(true);
    setShowMiniBanner(false);
  };

  return (
    <>
      {/* Mini Banner */}
      {showMiniBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50 animate-fade-in-up">
          <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700 max-w-3xl">
              By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. 
              <button 
                onClick={openFullPreferences}
                className="text-blue-600 underline ml-1 hover:text-blue-800"
              >
                View our Privacy Policy for more information.
              </button>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:bg-gray-100"
                onClick={openFullPreferences}
              >
                Preferences
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDenyAll}
                className="text-gray-700 hover:bg-gray-100"
              >
                Deny
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Full Preferences Dialog */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="sm:max-w-[500px] md:max-w-[600px] overflow-y-auto">
          <SheetHeader className="pb-6">
            <SheetTitle className="text-xl flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Privacy Preference Center
            </SheetTitle>
            <SheetDescription>
              When you visit websites, they may store or retrieve data in your browser. This storage is often necessary for the basic functionality of the website. The storage may be used for marketing, analytics, and personalization of the site, such as storing your preferences. Privacy is important to us, so you have the option of disabling certain types of storage that may not be necessary for the basic functioning of the website. Blocking categories may impact your experience on the website.
            </SheetDescription>
          </SheetHeader>

          <Tabs defaultValue="simple" value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="simple">Simple View</TabsTrigger>
              <TabsTrigger value="advanced">Detailed View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="simple" className="pt-6 flex flex-col gap-6">
              <div className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={handleDenyAll}
                >
                  Reject all cookies
                </Button>
                <Button
                  onClick={handleAcceptAll}
                >
                  Allow all cookies
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="pt-6 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium text-sm flex items-center">
                      Essential
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Always Active</span>
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">These items are required to enable basic website functionality.</p>
                  </div>
                  <Checkbox checked={preferences.essential} disabled />
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium text-sm">Marketing</h4>
                    <p className="text-sm text-gray-500 mt-1">These items are used to deliver advertising that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator's permission.</p>
                  </div>
                  <Checkbox 
                    id="marketing"
                    checked={preferences.marketing} 
                    onCheckedChange={() => handlePreferenceChange('marketing')}
                  />
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium text-sm">Personalization</h4>
                    <p className="text-sm text-gray-500 mt-1">These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your current location.</p>
                  </div>
                  <Checkbox 
                    id="personalization"
                    checked={preferences.personalization} 
                    onCheckedChange={() => handlePreferenceChange('personalization')}
                  />
                </div>
                
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <h4 className="font-medium text-sm">Analytics</h4>
                    <p className="text-sm text-gray-500 mt-1">These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn't collect information that identifies a visitor.</p>
                  </div>
                  <Checkbox 
                    id="analytics"
                    checked={preferences.analytics} 
                    onCheckedChange={() => handlePreferenceChange('analytics')}
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleSavePreferences}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Check className="mr-2 h-4 w-4" /> Confirm my preferences and close
              </Button>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CookieConsent;
