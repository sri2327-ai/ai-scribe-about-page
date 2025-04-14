
import { Link } from "react-router-dom";
import FirstSection from "../components/home/FirstSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section with gradient background */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-black">
        <FirstSection />
        
        <div className="text-center max-w-3xl px-4 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              to="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Learn About Us
            </Link>
            <Link 
              to="/technology" 
              className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Our Technology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
