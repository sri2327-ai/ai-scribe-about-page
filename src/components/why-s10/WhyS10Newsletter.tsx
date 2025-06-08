
import React, { useState } from "react";
import { toast } from "sonner";

const WhyS10Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing! You'll receive updates about S10.AI soon.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-gray-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mr-2 text-xs font-bold">05</span>
              <span>Newsletter</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left text-gray-900">Subscribe to the newsletter</h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Be first to hear about breakthroughs, partnerships, and deployment opportunities
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-grow">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email address" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-gray-700" 
                required 
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-primary hover:bg-secondary text-white font-medium py-4 px-10 rounded-full transition-all duration-300 md:ml-4 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WhyS10Newsletter;
