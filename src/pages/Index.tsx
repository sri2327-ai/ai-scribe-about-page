
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Innovative Ambient AI Solutions for Clinicians Like You</h1>
        <p className="text-xl text-gray-300 mb-8">
          Book Your Free Demo to Save 2 Hours Daily
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
        
        {/* Key Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 animate-fade-in">
            <h3 className="text-lg font-bold text-white mb-2">Slash Charting Time by 75%</h3>
            <p className="text-gray-300">CRUSH automates documentation with 99% accuracy.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 animate-fade-in" style={{animationDelay: "100ms"}}>
            <h3 className="text-lg font-bold text-white mb-2">Reduce No-Shows by 50%</h3>
            <p className="text-gray-300">BRAVO streamlines scheduling and patient communication.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 animate-fade-in" style={{animationDelay: "200ms"}}>
            <h3 className="text-lg font-bold text-white mb-2">Seamless EHR Integration</h3>
            <p className="text-gray-300">Works with Epic, Cerner, and 100+ systems.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 animate-fade-in" style={{animationDelay: "300ms"}}>
            <h3 className="text-lg font-bold text-white mb-2">Trusted by 1,000+ Clinicians</h3>
            <p className="text-gray-300">Join healthcare professionals already saving time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
