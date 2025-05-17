
import { useEffect, useState } from "react";

interface ScriptLoaderProps {
  children: React.ReactNode;
}

export const ScriptLoader: React.FC<ScriptLoaderProps> = ({ children }) => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  
  useEffect(() => {
    let framerMotionCheckInterval: NodeJS.Timeout | undefined;

    // Load Font Awesome
    if (!document.getElementById('font-awesome-css')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
      
      // Set timeout to ensure CSS is loaded
      setTimeout(() => {
        setScriptsLoaded(true);
      }, 500);
    } else {
      setScriptsLoaded(true);
    }

    return () => {
      if (framerMotionCheckInterval) {
        clearInterval(framerMotionCheckInterval);
      }
    };
  }, []);

  if (!scriptsLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-8 text-center">
        <div>
          <svg className="animate-spin h-10 w-10 text-teal-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-xl">Loading S10.AI Experience...</p>
          <p className="text-sm text-gray-500 mt-2">Initializing animations and content.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
