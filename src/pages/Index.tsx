
import { Link } from "react-router-dom";
import rippleStyles from "@/styles/RippleEffect.module.css";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Ripple effect background */}
      <div className={rippleStyles.rippleBackground}>
        <div className={rippleStyles.ripple}></div>
        <div className={rippleStyles.ripple}></div>
        <div className={rippleStyles.ripple}></div>
      </div>
      
      <div className="text-center max-w-3xl px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Welcome to S10.AI</h1>
        <p className="text-xl text-gray-300 mb-8">
          Revolutionizing healthcare with cutting-edge AI technology. We're making life easier for clinicians with intelligent automation.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
  );
};

export default Index;
