
import React from 'react';
import { Link } from 'react-router-dom';

const PEGHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ba0495cd-1f3d-4b15-8fa6-bfd3655f8e9c.png" 
              alt="S10.AI Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PEGHeader;
