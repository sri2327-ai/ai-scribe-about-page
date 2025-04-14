
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">S10.AI</Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/resources" className="text-white hover:text-blue-400 transition-colors">Resources</Link>
          <Link to="/resources/about" className="text-white hover:text-blue-400 transition-colors">About</Link>
          <Link to="/resources/technology" className="text-white hover:text-blue-400 transition-colors">Technology</Link>
          {/* Add your other navigation links here */}
        </nav>
        
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
