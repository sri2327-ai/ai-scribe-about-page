
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleResourcesMenu = () => {
    setResourcesOpen(!resourcesOpen);
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
            className={`transition-colors ${location.pathname === '/' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
          >
            Home
          </Link>
          <Link 
            to="/solutions/crush" 
            className={`transition-colors ${location.pathname === '/solutions/crush' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
          >
            CRUSH
          </Link>
          <Link 
            to="/solutions/bravo" 
            className={`transition-colors ${location.pathname === '/solutions/bravo' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
          >
            BRAVO
          </Link>
          <div className="relative group">
            <Link 
              to="/resources" 
              className={`transition-colors flex items-center ${location.pathname.includes('/resources') ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
            >
              Resources
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md mt-1 py-2 w-48 z-50">
              <Link 
                to="/resources/blog" 
                className={`block px-4 py-2 ${location.pathname === '/resources/blog' ? 'text-tealBlue' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Blog
              </Link>
              <Link 
                to="/resources/faq" 
                className={`block px-4 py-2 ${location.pathname === '/resources/faq' ? 'text-tealBlue' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                FAQ
              </Link>
              <Link 
                to="/resources/casestudies" 
                className={`block px-4 py-2 ${location.pathname === '/resources/casestudies' ? 'text-tealBlue' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Case Studies
              </Link>
            </div>
          </div>
          <Link 
            to="/about" 
            className={`transition-colors ${location.pathname === '/about' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
          >
            About
          </Link>
        </nav>
        
        {/* Call to Action Button */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/contactus" 
            className="bg-tealBlue hover:bg-tealBlueBright text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            Book a Demo
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
              className={`transition-colors ${location.pathname === '/' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/solutions/crush" 
              className={`transition-colors ${location.pathname === '/solutions/crush' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CRUSH
            </Link>
            <Link 
              to="/solutions/bravo" 
              className={`transition-colors ${location.pathname === '/solutions/bravo' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              BRAVO
            </Link>
            
            <div>
              <button 
                className={`flex justify-between items-center w-full ${location.pathname.includes('/resources') ? 'text-tealBlue' : 'text-gray-700'}`}
                onClick={toggleResourcesMenu}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transform transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesOpen && (
                <div className="mt-2 pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                  <Link 
                    to="/resources/blog" 
                    className={`transition-colors ${location.pathname === '/resources/blog' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/resources/faq" 
                    className={`transition-colors ${location.pathname === '/resources/faq' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link 
                    to="/resources/casestudies" 
                    className={`transition-colors ${location.pathname === '/resources/casestudies' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`transition-colors ${location.pathname === '/about' ? 'text-tealBlue' : 'text-gray-700 hover:text-tealBlue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
