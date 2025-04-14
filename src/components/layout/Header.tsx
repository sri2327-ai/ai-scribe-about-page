
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (menu: string) => {
    if (menu === "resources") {
      setResourcesOpen(!resourcesOpen);
      setSolutionsOpen(false);
      setAboutOpen(false);
    } else if (menu === "solutions") {
      setSolutionsOpen(!solutionsOpen);
      setResourcesOpen(false); 
      setAboutOpen(false);
    } else if (menu === "about") {
      setAboutOpen(!aboutOpen);
      setResourcesOpen(false);
      setSolutionsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/HeaderLogo.png"
            alt="S10.AI Logo"
            className="h-10"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
          >
            Home
          </Link>
          
          {/* Solutions Dropdown */}
          <div className="relative group">
            <Link 
              to="/solutions" 
              className={`transition-colors flex items-center ${location.pathname.includes('/solutions') ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
            >
              Solutions
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md mt-1 py-2 w-64 z-50">
              <Link 
                to="/solutions/crush" 
                className={`block px-4 py-2 ${location.pathname === '/solutions/crush' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                CRUSH - AI Medical Scribe Assistant
              </Link>
              <Link 
                to="/solutions/bravo" 
                className={`block px-4 py-2 ${location.pathname === '/solutions/bravo' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                BRAVO - AI Patient Care Agent
              </Link>
            </div>
          </div>
          
          {/* About Dropdown */}
          <div className="relative group">
            <Link 
              to="/about" 
              className={`transition-colors flex items-center ${location.pathname.includes('/about') || location.pathname.includes('/technology') || location.pathname.includes('/integrations') ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
            >
              About
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md mt-1 py-2 w-48 z-50">
              <Link 
                to="/about" 
                className={`block px-4 py-2 ${location.pathname === '/about' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                S10 Story
              </Link>
              <Link 
                to="/technology" 
                className={`block px-4 py-2 ${location.pathname === '/technology' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Trust & Technology
              </Link>
              <Link 
                to="/integrations" 
                className={`block px-4 py-2 ${location.pathname === '/integrations' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Integrations
              </Link>
            </div>
          </div>
          
          {/* Resources Dropdown */}
          <div className="relative group">
            <Link 
              to="/resources" 
              className={`transition-colors flex items-center ${location.pathname.includes('/resources') ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
            >
              Resources
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md mt-1 py-2 w-48 z-50">
              <Link 
                to="/resources/blog" 
                className={`block px-4 py-2 ${location.pathname === '/resources/blog' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Blog
              </Link>
              <Link 
                to="/resources/faq" 
                className={`block px-4 py-2 ${location.pathname === '/resources/faq' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                FAQs
              </Link>
              <Link 
                to="/resources/customers" 
                className={`block px-4 py-2 ${location.pathname === '/resources/customers' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Customers
              </Link>
              <Link 
                to="/resources/casestudies" 
                className={`block px-4 py-2 ${location.pathname === '/resources/casestudies' ? 'text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Case Studies
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Call to Action Button */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/contactus" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            Contact Us
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Solutions Mobile Dropdown */}
            <div>
              <button 
                className={`flex justify-between items-center w-full ${location.pathname.includes('/solutions') ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => toggleSubmenu('solutions')}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transform transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsOpen && (
                <div className="mt-2 pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                  <Link 
                    to="/solutions/crush" 
                    className={`transition-colors ${location.pathname === '/solutions/crush' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CRUSH - AI Medical Scribe Assistant
                  </Link>
                  <Link 
                    to="/solutions/bravo" 
                    className={`transition-colors ${location.pathname === '/solutions/bravo' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BRAVO - AI Patient Care Agent
                  </Link>
                </div>
              )}
            </div>
            
            {/* About Mobile Dropdown */}
            <div>
              <button 
                className={`flex justify-between items-center w-full ${location.pathname.includes('/about') || location.pathname.includes('/technology') || location.pathname.includes('/integrations') ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => toggleSubmenu('about')}
              >
                About
                <ChevronDown className={`w-4 h-4 transform transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aboutOpen && (
                <div className="mt-2 pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                  <Link 
                    to="/about" 
                    className={`transition-colors ${location.pathname === '/about' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    S10 Story
                  </Link>
                  <Link 
                    to="/technology" 
                    className={`transition-colors ${location.pathname === '/technology' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Trust & Technology
                  </Link>
                  <Link 
                    to="/integrations" 
                    className={`transition-colors ${location.pathname === '/integrations' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Integrations
                  </Link>
                </div>
              )}
            </div>
            
            {/* Resources Mobile Dropdown */}
            <div>
              <button 
                className={`flex justify-between items-center w-full ${location.pathname.includes('/resources') ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => toggleSubmenu('resources')}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transform transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesOpen && (
                <div className="mt-2 pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                  <Link 
                    to="/resources/blog" 
                    className={`transition-colors ${location.pathname === '/resources/blog' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/resources/faq" 
                    className={`transition-colors ${location.pathname === '/resources/faq' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link 
                    to="/resources/customers" 
                    className={`transition-colors ${location.pathname === '/resources/customers' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Customers
                  </Link>
                  <Link 
                    to="/resources/casestudies" 
                    className={`transition-colors ${location.pathname === '/resources/casestudies' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contactus" 
              className={`transition-colors ${location.pathname === '/contactus' ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
