
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
          <Link to="/solutions/crush" className="text-gray-700 hover:text-tealBlue transition-colors">
            CRUSH
          </Link>
          <Link to="/solutions/bravo" className="text-gray-700 hover:text-tealBlue transition-colors">
            BRAVO
          </Link>
          <div className="relative group">
            <Link to="/resources" className="text-gray-700 hover:text-tealBlue transition-colors flex items-center">
              Resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md mt-1 py-2 w-48 z-50">
              <Link to="/resources/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Blog
              </Link>
              <Link to="/resources/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                FAQ
              </Link>
              <Link to="/resources/casestudies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Case Studies
              </Link>
            </div>
          </div>
          <Link to="/about" className="text-gray-700 hover:text-tealBlue transition-colors">
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
              className="text-gray-700 hover:text-tealBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/solutions/crush" 
              className="text-gray-700 hover:text-tealBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CRUSH
            </Link>
            <Link 
              to="/solutions/bravo" 
              className="text-gray-700 hover:text-tealBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              BRAVO
            </Link>
            <details className="group">
              <summary className="flex justify-between items-center text-gray-700 hover:text-tealBlue transition-colors cursor-pointer">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="mt-2 pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                <Link 
                  to="/resources/blog" 
                  className="text-gray-700 hover:text-tealBlue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/resources/faq" 
                  className="text-gray-700 hover:text-tealBlue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/resources/casestudies" 
                  className="text-gray-700 hover:text-tealBlue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
              </div>
            </details>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-tealBlue transition-colors"
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
