
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
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
          <Link to="/" className="text-gray-700 hover:text-tealBlue transition-colors">
            Home
          </Link>
          
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-700 hover:text-tealBlue transition-colors"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {activeDropdown === 'solutions' && (
              <div 
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-1">
                  <Link 
                    to="/solutions/crush" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    CRUSH - AI Medical Scribe
                  </Link>
                  <Link 
                    to="/solutions/bravo" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    BRAVO - AI Patient Care
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Resources Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-700 hover:text-tealBlue transition-colors"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {activeDropdown === 'resources' && (
              <div 
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-1">
                  <Link 
                    to="/resources/blog" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/resources/faq" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    FAQs
                  </Link>
                  <Link 
                    to="/resources/casestudies" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link to="/about" className="text-gray-700 hover:text-tealBlue transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/contactus" 
            className="bg-tealBlue hover:bg-tealBlueBright text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            Book a Demo
          </Link>
          
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => toggleDropdown('mobile-solutions')}
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'mobile-solutions' && (
                <div className="pl-4">
                  <Link 
                    to="/solutions/crush" 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CRUSH - AI Medical Scribe
                  </Link>
                  <Link 
                    to="/solutions/bravo" 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BRAVO - AI Patient Care
                  </Link>
                </div>
              )}
            </div>
            
            <div>
              <button 
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => toggleDropdown('mobile-resources')}
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'mobile-resources' && (
                <div className="pl-4">
                  <Link 
                    to="/resources/blog" 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/resources/faq" 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link 
                    to="/resources/casestudies" 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/contactus" 
              className="block px-3 py-2 text-base font-medium text-tealBlue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
