import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Stethoscope, Building, Users, Heart } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { getPricingByCurrency, PricingData } from "@/utils/pricing";
import { CurrencyCode } from "@/components/pricing/CurrencySelector";

interface PracticeTypeSelectorProps {
  onSelect: (planType: string) => void;
}

export const PracticeTypeSelector: React.FC<PracticeTypeSelectorProps> = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState<string>("solo"); // Default selected
  const [activeTabs, setActiveTabs] = useState<Record<string, 'crush' | 'bravo' | 'bundle'>>({
    'solo': 'crush',
    'small': 'crush',
    'clinic': 'crush',
    'specialty': 'crush'
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('USD');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  // Get dynamic pricing data
  const pricingData = getPricingByCurrency(selectedCurrency, billingCycle);
  
  useEffect(() => {
    // Select solo by default on component mount
    onSelect("crush_basic");
    
    // Get currency from URL or localStorage if available
    const urlParams = new URLSearchParams(window.location.search);
    const currencyParam = urlParams.get('currency');
    const storedCurrency = localStorage.getItem('selectedCurrency');
    
    if (currencyParam && ['USD', 'CAD', 'AUD', 'GBP', 'EUR', 'NZD', 'AED'].includes(currencyParam)) {
      setSelectedCurrency(currencyParam as CurrencyCode);
    } else if (storedCurrency && ['USD', 'CAD', 'AUD', 'GBP', 'EUR', 'NZD', 'AED'].includes(storedCurrency)) {
      setSelectedCurrency(storedCurrency as CurrencyCode);
    }
    
    // Get billing cycle from URL or localStorage if available
    const cycleParam = urlParams.get('billing');
    const storedCycle = localStorage.getItem('billingCycle');
    
    if (cycleParam === 'annual' || cycleParam === 'monthly') {
      setBillingCycle(cycleParam);
    } else if (storedCycle === 'annual' || storedCycle === 'monthly') {
      setBillingCycle(storedCycle as 'annual' | 'monthly');
    }
  }, [onSelect]);
  
  // Sync with pricing component's currency changes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'selectedCurrency' && e.newValue) {
        if (['USD', 'CAD', 'AUD', 'GBP', 'EUR', 'NZD', 'AED'].includes(e.newValue)) {
          setSelectedCurrency(e.newValue as CurrencyCode);
        }
      }
      if (e.key === 'billingCycle' && e.newValue) {
        if (e.newValue === 'annual' || e.newValue === 'monthly') {
          setBillingCycle(e.newValue as 'annual' | 'monthly');
        }
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Check if we need to update from events within the same window
    const handleCurrencyChange = (e: Event) => {
      const event = e as CustomEvent;
      if (event.detail && event.detail.currency) {
        setSelectedCurrency(event.detail.currency);
      }
    };
    
    const handleBillingChange = (e: Event) => {
      const event = e as CustomEvent;
      if (event.detail && event.detail.cycle) {
        setBillingCycle(event.detail.cycle);
      }
    };
    
    window.addEventListener('currencyChange', handleCurrencyChange);
    window.addEventListener('billingCycleChange', handleBillingChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('currencyChange', handleCurrencyChange);
      window.removeEventListener('billingCycleChange', handleBillingChange);
    };
  }, []);
  
  const handleSelect = (type: string) => {
    setSelectedType(type);
    onSelect(type === 'solo' ? "crush_basic" : 
             type === 'small' ? "crush_plus" : 
             type === 'clinic' ? "bundle_enterprise" : "crush_pro");
  };

  // Fixed the tab handling to prevent event bubbling issues
  const handleTabChange = (type: string, tabValue: 'crush' | 'bravo' | 'bundle', e: React.MouseEvent) => {
    // Stop event propagation to prevent the card click handler from firing
    e.stopPropagation();
    
    setActiveTabs(prev => ({
      ...prev,
      [type]: tabValue
    }));
    
    // Update the main plan selection based on the tab and practice type
    const practiceToPlans: Record<string, Record<'crush' | 'bravo' | 'bundle', string>> = {
      'solo': {
        'crush': 'crush_basic',
        'bravo': 'bravo_basic',
        'bundle': 'bundle_basic'
      },
      'small': {
        'crush': 'crush_plus',
        'bravo': 'bravo_pro',
        'bundle': 'bundle_plus'
      },
      'clinic': {
        'crush': 'crush_enterprise',
        'bravo': 'bravo_enterprise',
        'bundle': 'bundle_enterprise'
      },
      'specialty': {
        'crush': 'crush_pro',
        'bravo': 'bravo_pro',
        'bundle': 'bundle_pro'
      }
    };
    
    // If type is the currently selected practice type, also update the main plan
    if (type === selectedType) {
      onSelect(practiceToPlans[type][tabValue]);
    }
  };
  
  // Navigate to pricing section and set the correct tab based on selected product
  const handleSeeFullDetails = (e: React.MouseEvent, practiceType: string) => {
    e.stopPropagation();
    
    // Get the active tab for this practice type
    const activeTab = activeTabs[practiceType];
    
    // Set localStorage values to control which tab is shown in the pricing section
    localStorage.setItem('activePricingTab', activeTab);
    
    // Always ensure we're showing monthly pricing
    localStorage.setItem('billingCycle', 'monthly');
    
    // Create custom event to notify other components about tab changes
    const tabChangeEvent = new CustomEvent('pricingTabChange', { 
      detail: { tab: activeTab, billing: 'monthly' } 
    });
    window.dispatchEvent(tabChangeEvent);
    
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Updated practice types with minor change to description text
  const practiceTypes = [
    { 
      id: 'solo', 
      name: 'Solo Provider', 
      icon: Stethoscope,
      description: 'Perfect for independent providers looking to save time and costs',
      plan: 'crush_basic'
    },
    { 
      id: 'small', 
      name: 'Small Practice', 
      icon: Users,
      description: '2-5 providers wanting to optimize workflows and reduce no-shows',
      plan: 'crush_plus'
    },
    { 
      id: 'clinic', 
      name: 'Clinic/Group', 
      shortName: 'Clinic/Group',
      displayName: 'Clinic/Group',
      icon: Building,
      description: '6+ providers seeking enterprise-grade solutions at scale',
      plan: 'bundle_enterprise'
    },
    { 
      id: 'specialty', 
      name: 'Specialty', 
      icon: Heart,
      description: 'For specialty practices with unique documentation needs',
      plan: 'crush_pro'
    }
  ];
  
  // Define product recommendations with dynamic pricing
  const productRecommendations = {
    crush: {
      'solo': { 
        name: 'CRUSH Basic', 
        description: 'Perfect for solo providers', 
        price: pricingData.crush.basic
      },
      'small': { 
        name: 'CRUSH Pro', 
        description: 'Ideal for small practices', 
        price: pricingData.crush.pro
      },
      'clinic': { 
        name: 'CRUSH Enterprise', 
        description: 'Complete solution for clinics & groups', 
        price: pricingData.crush.enterprise
      },
      'specialty': { 
        name: 'CRUSH Pro', 
        description: 'Advanced features for specialty practices', 
        price: pricingData.crush.pro
      }
    },
    bravo: {
      'solo': { 
        name: 'BRAVO Basic', 
        description: 'Streamlined patient management with Real-Time Booking & Human Transfer', 
        price: pricingData.bravo.basic
      },
      'small': { 
        name: 'BRAVO Pro', 
        description: 'Enhanced patient engagement with Multilingual support', 
        price: 'Starts at $299/mo'
      },
      'clinic': { 
        name: 'BRAVO Enterprise', 
        description: 'Multi-clinic management with Multilingual support', 
        price: pricingData.bravo.enterprise
      },
      'specialty': { 
        name: 'BRAVO Pro', 
        description: 'Specialty-specific workflows with Multilingual support', 
        price: 'Starts at $299/mo'
      }
    },
    bundle: {
      'solo': { 
        name: 'Basic Bundle', 
        description: 'CRUSH + BRAVO with discount', 
        price: pricingData.bundle.basic
      },
      'small': { 
        name: 'Pro Bundle', 
        description: 'Premium integration package', 
        price: pricingData.bundle.pro
      },
      'clinic': { 
        name: 'Enterprise Bundle', 
        description: 'Complete enterprise solution', 
        price: pricingData.bundle.enterprise
      },
      'specialty': { 
        name: 'Pro Bundle', 
        description: 'Specialty-specific bundle', 
        price: pricingData.bundle.pro
      }
    }
  };
  
  // For mobile carousel
  const nextPractice = () => {
    setCurrentIndex(prev => (prev + 1) % practiceTypes.length);
    handleSelect(practiceTypes[(currentIndex + 1) % practiceTypes.length].id);
  };
  
  const prevPractice = () => {
    setCurrentIndex(prev => (prev - 1 + practiceTypes.length) % practiceTypes.length);
    handleSelect(practiceTypes[(currentIndex - 1 + practiceTypes.length) % practiceTypes.length].id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white">
      {/* SEO-friendly content for search engines - Practice Type Benefits */}
      <div className="sr-only">
        <h2>S10.AI Practice Type Solutions - Customized AI for Every Healthcare Setting</h2>
        <p>
          S10.AI offers tailored AI solutions for different practice types, from solo providers to large healthcare systems. 
          Our AI medical scribes, staffing agents, and workflow automation adapt to your specific practice needs and size.
        </p>
        
        {/* Solo Provider Section */}
        <section>
          <h3>Solo Provider AI Solutions</h3>
          <p>Perfect for independent providers looking to save time and costs with AI medical scribe technology and automated documentation.</p>
          <h4>Solo Provider Benefits:</h4>
          <ul>
            <li>Reduce documentation time by 75% with AI medical scribes</li>
            <li>Lower overhead costs with virtual AI staff assistance</li>
            <li>Improve work-life balance with automated administrative tasks</li>
            <li>HIPAA-compliant solutions designed for small practices</li>
            <li>Easy integration with existing EHR systems</li>
            <li>Affordable pricing starting from basic plans</li>
          </ul>
          <p><strong>Recommended Solution:</strong> CRUSH Basic - AI medical scribe with essential features</p>
          <a href="/solutions/solo-provider">Learn more about Solo Provider solutions</a>
        </section>

        {/* Small Practice Section */}
        <section>
          <h3>Small Practice AI Solutions (2-5 Providers)</h3>
          <p>2-5 providers wanting to optimize workflows and reduce no-shows with comprehensive AI automation and patient engagement tools.</p>
          <h4>Small Practice Benefits:</h4>
          <ul>
            <li>Streamlined multi-provider workflows with AI coordination</li>
            <li>Reduced no-show rates with automated patient reminders</li>
            <li>Shared AI resources across multiple providers</li>
            <li>Coordinated scheduling and administrative automation</li>
            <li>Practice management integration and analytics</li>
            <li>Scalable solutions that grow with your practice</li>
          </ul>
          <p><strong>Recommended Solution:</strong> CRUSH Pro - Advanced AI with multi-provider support</p>
          <a href="/solutions/small-practice">Learn more about Small Practice solutions</a>
        </section>

        {/* Clinic/Group Section */}
        <section>
          <h3>Clinic and Group Practice AI Solutions (6+ Providers)</h3>
          <p>6+ providers seeking enterprise-grade solutions at scale with comprehensive AI automation and workflow optimization.</p>
          <h4>Clinic/Group Practice Benefits:</h4>
          <ul>
            <li>Enterprise-grade AI deployment across multiple locations</li>
            <li>Advanced analytics and reporting for practice management</li>
            <li>Multi-location coordination and resource optimization</li>
            <li>Custom AI workflows for different departments</li>
            <li>Advanced security and compliance features</li>
            <li>Dedicated support and implementation assistance</li>
          </ul>
          <p><strong>Recommended Solution:</strong> Bundle Enterprise - Complete AI suite for large practices</p>
          <a href="/solutions/clinic-group">Learn more about Clinic/Group solutions</a>
        </section>

        {/* Specialty Practice Section */}
        <section>
          <h3>Specialty Practice AI Solutions</h3>
          <p>For specialty practices with unique documentation needs and specialized workflows requiring custom AI configuration.</p>
          <h4>Specialty Practice Benefits:</h4>
          <ul>
            <li>Specialty-specific AI training for cardiology, orthopedics, dermatology, and more</li>
            <li>Custom documentation templates for specialized procedures</li>
            <li>Integration with specialty-specific equipment and software</li>
            <li>Advanced clinical decision support for specialized care</li>
            <li>Compliance with specialty-specific regulations and standards</li>
            <li>Continuous AI learning from specialty practice patterns</li>
          </ul>
          <p><strong>Recommended Solution:</strong> CRUSH Pro - Specialty-configured AI with advanced features</p>
          <a href="/solutions/specialty-practice">Learn more about Specialty Practice solutions</a>
        </section>

        {/* Practice Type Comparison */}
        <section>
          <h3>Practice Type Comparison and Recommendations</h3>
          <table>
            <thead>
              <tr>
                <th>Practice Type</th>
                <th>Provider Count</th>
                <th>Key Features</th>
                <th>Recommended Plan</th>
                <th>Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Solo Provider</td>
                <td>1 provider</td>
                <td>Basic AI scribe, Essential automation</td>
                <td>CRUSH Basic</td>
                <td>Affordable entry-level pricing</td>
              </tr>
              <tr>
                <td>Small Practice</td>
                <td>2-5 providers</td>
                <td>Multi-provider workflows, Advanced automation</td>
                <td>CRUSH Pro</td>
                <td>Scalable multi-user pricing</td>
              </tr>
              <tr>
                <td>Clinic/Group</td>
                <td>6+ providers</td>
                <td>Enterprise features, Multi-location support</td>
                <td>Bundle Enterprise</td>
                <td>Enterprise-grade solutions</td>
              </tr>
              <tr>
                <td>Specialty</td>
                <td>Any size</td>
                <td>Specialty-specific AI, Custom workflows</td>
                <td>CRUSH Pro</td>
                <td>Specialized configuration pricing</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {practiceTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            const activeTab = activeTabs[type.id];
            
            return (
              <motion.div key={type.id} variants={itemVariants} className="h-full">
                <Card 
                  className={`p-4 md:p-6 lg:p-8 cursor-pointer transition-all duration-300 h-full flex flex-col ${
                    isSelected 
                      ? 'border-[#387E89] shadow-lg' 
                      : 'border-gray-200 hover:border-[#387E89]/50 hover:shadow-md'
                  }`}
                  onClick={() => handleSelect(type.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#143151] to-[#387E89]'
                        : 'bg-gradient-to-r from-gray-200 to-gray-100'
                    }`}>
                      <Icon size={20} className={isSelected ? 'text-white' : 'text-gray-600'} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold ml-3 md:ml-4 text-[#143151] break-words">
                      {type.id === 'clinic' ? (
                        <span>Clinic/Group</span>
                      ) : type.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">{type.description}</p>
                  
                  {/* Always show recommendations */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-[#143151] text-base md:text-lg mb-2">Recommended Plans</h4>
                    
                    <div className="w-full bg-gray-100 rounded-md mb-2 overflow-hidden">
                      <div className="flex justify-between">
                        <button 
                          onClick={(e) => handleTabChange(type.id, 'crush', e)}
                          className={`flex-1 text-xs md:text-sm py-2 px-2 rounded-l-md transition-colors ${
                            activeTab === 'crush' 
                              ? 'bg-[#387E89] text-white font-medium' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          Basic
                        </button>
                        <button 
                          onClick={(e) => handleTabChange(type.id, 'bravo', e)}
                          className={`flex-1 text-xs md:text-sm py-2 px-2 transition-colors ${
                            activeTab === 'bravo' 
                              ? 'bg-[#387E89] text-white font-medium' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          Pro
                        </button>
                        <button 
                          onClick={(e) => handleTabChange(type.id, 'bundle', e)}
                          className={`flex-1 text-xs md:text-sm py-2 px-2 rounded-r-md transition-colors ${
                            activeTab === 'bundle' 
                              ? 'bg-[#387E89] text-white font-medium' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          Enterprise
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      {activeTab === 'crush' && (
                        <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 md:p-3 rounded-lg">
                          <h5 className="font-semibold text-sm md:text-base text-[#387E89]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].name}</h5>
                          <p className="text-xs md:text-sm text-gray-600">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].description}</p>
                          <div className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#143151]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].price}</div>
                        </div>
                      )}
                      
                      {activeTab === 'bravo' && (
                        <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 md:p-3 rounded-lg">
                          <h5 className="font-semibold text-sm md:text-base text-[#387E89]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].name}</h5>
                          <p className="text-xs md:text-sm text-gray-600">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].description}</p>
                          <div className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#143151]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].price}</div>
                        </div>
                      )}
                      
                      {activeTab === 'bundle' && (
                        <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 md:p-3 rounded-lg">
                          <h5 className="font-semibold text-sm md:text-base text-[#387E89]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].name}</h5>
                          <p className="text-xs md:text-sm text-gray-600">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].description}</p>
                          <div className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#143151]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].price}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-3">
                      <Button
                        className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xs md:text-sm py-1 md:py-2"
                        onClick={(e) => handleSeeFullDetails(e, type.id)}
                        size="sm"
                      >
                        See Full Details
                        <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Mobile View with Carousel */}
      <div className="block md:hidden">
        <div className="relative">
          <Card 
            className="p-4 border-[#387E89] shadow-lg"
          >
            {practiceTypes.map((type, index) => {
              const Icon = type.icon;
              const isActive = index === currentIndex;
              const activeTab = activeTabs[type.id];
              
              if (!isActive) return null;
              
              return (
                <div key={type.id} className="h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89]">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold ml-3 text-[#143151] break-words">
                      {type.id === 'clinic' ? 'Clinic/Group' : type.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-[#143151] text-base mb-2">Recommended Plans</h4>
                    
                    <div className="w-full bg-gray-100 rounded-md mb-2 overflow-hidden">
                      <div className="flex justify-between">
                        <button 
                          onClick={(e) => handleTabChange(type.id, 'crush', e)}
                          className={`flex-1 text-xs py-2 px-2 rounded-l-md transition-colors ${
                            activeTab === 'crush' 
                              ? 'bg-[#387E89] text-white font-medium' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          Basic
                        </button>
                        <button 
                          onClick={(e) => handleTabChange(type.id, 'bravo', e)}
                          className={`flex-1 text-xs py-2 px-2 transition-colors ${
                            activeTab === 'bravo' 
                              ? 'bg-[#387E89] text-white font-medium' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          Pro
                        </button>
                        <button 
                          onClick={(e) => handleTabChange(type.id, 'bundle', e)}
                          className={`flex-1 text-xs py-2 px-2 rounded-r-md transition-colors ${
                            activeTab === 'bundle' 
                              ? 'bg-[#387E89] text-white font-medium' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          Enterprise
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      {activeTab === 'crush' && (
                        <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 rounded-lg">
                          <h5 className="font-semibold text-sm text-[#387E89]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].name}</h5>
                          <p className="text-xs text-gray-600">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].description}</p>
                          <div className="mt-1 font-bold text-sm text-[#143151]">{productRecommendations.crush[type.id as keyof typeof productRecommendations.crush].price}</div>
                        </div>
                      )}
                      
                      {activeTab === 'bravo' && (
                        <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 rounded-lg">
                          <h5 className="font-semibold text-sm text-[#387E89]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].name}</h5>
                          <p className="text-xs text-gray-600">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].description}</p>
                          <div className="mt-1 font-bold text-sm text-[#143151]">{productRecommendations.bravo[type.id as keyof typeof productRecommendations.bravo].price}</div>
                        </div>
                      )}
                      
                      {activeTab === 'bundle' && (
                        <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 p-2 rounded-lg">
                          <h5 className="font-semibold text-sm text-[#387E89]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].name}</h5>
                          <p className="text-xs text-gray-600">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].description}</p>
                          <div className="mt-1 font-bold text-sm text-[#143151]">{productRecommendations.bundle[type.id as keyof typeof productRecommendations.bundle].price}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-3">
                      <Button
                        className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xs py-1"
                        onClick={(e) => handleSeeFullDetails(e, type.id)}
                        size="sm"
                      >
                        See Full Details
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Card>
          
          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#387E89]"
              onClick={prevPractice}
            >
              <ChevronLeft className="h-4 w-4 text-[#387E89]" />
            </Button>
            <div className="text-sm text-[#387E89]">
              {currentIndex + 1} / {practiceTypes.length}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#387E89]"
              onClick={nextPractice}
            >
              <ChevronRight className="h-4 w-4 text-[#387E89]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
