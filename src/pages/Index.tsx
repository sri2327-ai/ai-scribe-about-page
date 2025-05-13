
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Link 
            to="/about" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Learn About Us
          </Link>
          <Link 
            to="/specialty" 
            className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Our Specialties
          </Link>
        </div>
        
        {/* Featured Case Study */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
          <h3 className="text-xl font-bold text-white mb-2">Featured Case Study</h3>
          <p className="text-gray-300 mb-4">See how a physician saved $21,144 yearly by replacing traditional scribes with AI</p>
          <Link 
            to="/resources/casestudies/physician-saves-twenty-one-thousand-dollars-yearly" 
            className="inline-flex items-center gap-2 bg-blue-500/30 hover:bg-blue-500/50 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            Explore Case Study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
