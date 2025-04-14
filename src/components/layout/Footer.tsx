
import React from 'react';
import { Link } from 'react-router-dom';

// This is a placeholder Footer component - replace with your existing footer code
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">S10.AI</h3>
            <p className="text-gray-400">Revolutionizing healthcare with cutting-edge AI technology.</p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              {/* Add your other links here */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
            <p className="text-gray-400">hello@s10.ai</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} S10.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
