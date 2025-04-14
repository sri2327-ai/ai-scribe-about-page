
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isActiveParent = (paths: string[]) => {
    return paths.some(path => location.pathname.startsWith(path));
  };

  const menuItems = [
    {
      title: 'Solutions',
      dropdown: true,
      active: isActiveParent(['/solutions']),
      items: [
        { title: 'CRUSH - AI Medical Scribe Assistant', path: '/solutions/crush' },
        { title: 'BRAVO - AI Patient Care Agent', path: '/solutions/bravo' }
      ]
    },
    {
      title: 'About',
      dropdown: true,
      active: isActiveParent(['/about', '/technology', '/integrations']),
      items: [
        { title: 'S10 Story', path: '/about' },
        { title: 'Trust & Technology', path: '/technology' },
        { title: 'Integrations', path: '/integrations' }
      ]
    },
    {
      title: 'Resources',
      dropdown: true,
      active: isActiveParent(['/resources']),
      items: [
        { title: 'Blog', path: '/resources/blog' },
        { title: 'FAQs', path: '/resources/faq' },
        { title: 'Customers', path: '/resources/customers' },
        { title: 'Case Studies', path: '/resources/casestudies' }
      ]
    },
    {
      title: 'Contact Us',
      path: '/contactus',
      dropdown: false,
      active: isActive('/contactus')
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/HeaderLogo.png" 
              alt="S10.AI Logo" 
              className="h-8"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button 
                      className={`flex items-center space-x-1 font-medium ${item.active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {(activeDropdown === item.title) && (
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10"
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm ${isActive(subItem.path) ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path as string}
                    className={`font-medium ${item.active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index} className="py-1">
                {item.dropdown ? (
                  <div>
                    <button 
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-md ${item.active ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {activeDropdown === item.title && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-3 py-2 rounded-md text-sm ${isActive(subItem.path) ? 'text-blue-600 bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path as string}
                    className={`block px-3 py-2 rounded-md ${item.active ? 'text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
