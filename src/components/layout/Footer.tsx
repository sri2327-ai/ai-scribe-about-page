
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

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
            <a href="https://twitter.com/s10aiscribe" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/profile.php?id=100086008459597" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/s10-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/s10.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/channel/UCSaWPSJyic-OURNS_w-49Ow" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/solutions/crush" className="text-gray-600 hover:text-blue-500">CRUSH - AI Medical Scribe Assistant</Link>
            </li>
            <li>
              <Link to="/solutions/bravo" className="text-gray-600 hover:text-blue-500">BRAVO - AI Patient Care Agent</Link>
            </li>
            <li>
              <Link to="/integrations" className="text-gray-600 hover:text-blue-500">Integrations</Link>
            </li>
            <li>
              <Link to="/specialties" className="text-gray-600 hover:text-blue-500">Specialties</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/resources/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
            </li>
            <li>
              <Link to="/resources/casestudies" className="text-gray-600 hover:text-blue-500">Case Studies</Link>
            </li>
            <li>
              <Link to="/resources/faq" className="text-gray-600 hover:text-blue-500">FAQs</Link>
            </li>
            <li>
              <Link to="/resources/customers" className="text-gray-600 hover:text-blue-500">Customers</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-500">S10 Story</Link>
            </li>
            <li>
              <Link to="/technology" className="text-gray-600 hover:text-blue-500">Trust & Technology</Link>
            </li>
            <li>
              <Link to="/contactus" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="text-gray-600 hover:text-blue-500">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termsandcondition" className="text-gray-600 hover:text-blue-500">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} S10.AI, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:support@s10.ai" className="text-sm text-gray-500 hover:text-blue-500">
              support@s10.ai
            </a>
            <span className="text-sm text-gray-500">
              Tel: +1 631 4886 390
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
