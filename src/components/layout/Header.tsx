
import { Link } from "react-router-dom";
import { useState } from "react";

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
        
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 shadow-md md:shadow-none`}>
          <Link to="/" className="text-gray-700 hover:text-tealBlue transition-colors py-2 md:py-0">
            Home
          </Link>
          <Link to="/solutions/crush" className="text-gray-700 hover:text-tealBlue transition-colors py-2 md:py-0">
            CRUSH
          </Link>
          <Link to="/solutions/bravo" className="text-gray-700 hover:text-tealBlue transition-colors py-2 md:py-0">
            BRAVO
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-tealBlue transition-colors py-2 md:py-0">
            Resources
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-tealBlue transition-colors py-2 md:py-0">
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
          
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
