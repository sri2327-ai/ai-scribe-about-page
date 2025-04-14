
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center mb-6">
            <img 
              src="/HeaderLogo.png" 
              alt="S10.AI Logo" 
              className="h-8"
            />
          </Link>
          <p className="text-sm text-gray-600 mb-4">
            AI-powered solutions for healthcare professionals that streamline clinical documentation and enhance patient care.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tealBlue">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tealBlue">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tealBlue">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/solutions/crush" className="text-gray-600 hover:text-tealBlue">CRUSH</Link>
            </li>
            <li>
              <Link to="/solutions/bravo" className="text-gray-600 hover:text-tealBlue">BRAVO</Link>
            </li>
            <li>
              <Link to="/integrations" className="text-gray-600 hover:text-tealBlue">Integrations</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/resources/blog" className="text-gray-600 hover:text-tealBlue">Blog</Link>
            </li>
            <li>
              <Link to="/resources/casestudies" className="text-gray-600 hover:text-tealBlue">Case Studies</Link>
            </li>
            <li>
              <Link to="/resources/faq" className="text-gray-600 hover:text-tealBlue">FAQ</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-tealBlue">About</Link>
            </li>
            <li>
              <Link to="/contactus" className="text-gray-600 hover:text-tealBlue">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="text-gray-600 hover:text-tealBlue">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termsandcondition" className="text-gray-600 hover:text-tealBlue">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} S10.AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
