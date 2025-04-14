
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist or is under construction.</p>
      <Link to="/" className="bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 rounded-full transition-colors">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
