
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/HeaderLogo.png" 
              alt="S10.AI Logo" 
              className="h-10 mb-4"
            />
            <p className="text-gray-400 mb-6">
              AI-powered healthcare solutions that streamline clinical documentation and patient care.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/s10aiscribe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100086008459597" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/s10-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/s10.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCSaWPSJyic-OURNS_w-49Ow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/crush" className="text-gray-400 hover:text-white transition-colors">
                  CRUSH - AI Medical Scribe
                </Link>
              </li>
              <li>
                <Link to="/solutions/bravo" className="text-gray-400 hover:text-white transition-colors">
                  BRAVO - Patient Care AI
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/casestudies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-400 hover:text-white transition-colors">
                  Trust & Technology
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsandcondition" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="md:flex md:justify-between">
            <p className="text-center md:text-left text-gray-500">
              © {new Date().getFullYear()} S10.AI, Inc. All rights reserved.
            </p>
            <p className="text-center md:text-right text-gray-500 mt-2 md:mt-0">
              <a href="mailto:support@s10.ai" className="hover:text-white">support@s10.ai</a>
              <span className="mx-2">|</span>
              <span>Tel: +1 631 4886 390</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
