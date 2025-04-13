
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { Code } from "lucide-react";

const TechSetupInstructions = () => {
  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Sparkle effect positioned behind content */}
      <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent_85%)]">
        <Sparkles 
          density={1000}
          color="#FFFFFF"
          opacity={0.3}
          size={1}
          speed={0.5}
          className="w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4 bg-white/5 rounded-full p-2 border border-white/10">
            <Code className="w-5 h-5 text-tealBlue mr-2" />
            <span className="text-white font-semibold">Implementation Guide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
            Technology Setup Instructions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Follow these steps to set up and integrate S10.AI technologies in your environment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* TypeScript Setup Card */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 opacity-5 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg")' }}></div>
              
              <h3 className="text-white text-xl font-medium mb-3 flex items-center">
                <span className="bg-blue-500/20 text-blue-400 p-1 rounded text-sm mr-2">A</span>
                Initialize TypeScript
              </h3>
              
              <div className="text-gray-400 text-sm mb-4">
                <p className="mb-2">If you're in a JS project:</p>
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto mb-3 border border-white/10 text-xs">
                  <code className="text-gray-300">
                    npx tsc --init<br/>
                    touch next-env.d.ts<br/>
                    mv pages pages.tsx  # rename if needed
                  </code>
                </pre>
                <p>Next.js will automatically configure .ts and .tsx support.</p>
              </div>
            </div>

            {/* Tailwind Setup Card */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 opacity-5 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg")' }}></div>
              
              <h3 className="text-white text-xl font-medium mb-3 flex items-center">
                <span className="bg-teal-500/20 text-teal-400 p-1 rounded text-sm mr-2">B</span>
                Install Tailwind CSS
              </h3>
              
              <div className="text-gray-400 text-sm mb-4">
                <p className="mb-2">Follow the Tailwind CSS setup:</p>
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto mb-3 border border-white/10 text-xs">
                  <code className="text-gray-300">
                    npm install -D tailwindcss postcss autoprefixer<br/>
                    npx tailwindcss init -p
                  </code>
                </pre>
                <p className="mb-2">Add to globals.css:</p>
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto border border-white/10 text-xs">
                  <code className="text-gray-300">
                    @tailwind base;<br/>
                    @tailwind components;<br/>
                    @tailwind utilities;
                  </code>
                </pre>
              </div>
            </div>

            {/* Shadcn Setup Card */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 opacity-5 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url("https://ui.shadcn.com/apple-touch-icon.png")' }}></div>
              
              <h3 className="text-white text-xl font-medium mb-3 flex items-center">
                <span className="bg-purple-500/20 text-purple-400 p-1 rounded text-sm mr-2">C</span>
                Install shadcn/ui
              </h3>
              
              <div className="text-gray-400 text-sm mb-4">
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto mb-3 border border-white/10 text-xs">
                  <code className="text-gray-300">
                    npx shadcn-ui@latest init
                  </code>
                </pre>
                <p>During setup, choose:</p>
                <ul className="list-disc list-inside mb-3 ml-2">
                  <li>TypeScript ✅</li>
                  <li>Your desired style (Tailwind)</li>
                  <li>App Router or Pages Router</li>
                  <li>Components folder path: /components/ui</li>
                </ul>
              </div>
            </div>

            {/* Sparkles Setup Card */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 opacity-5 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url("https://cdn.jsdelivr.net/gh/tsparticles/tsparticles/websites/particles.js.org/src/img/logo.png")' }}></div>
              
              <h3 className="text-white text-xl font-medium mb-3 flex items-center">
                <span className="bg-indigo-500/20 text-indigo-400 p-1 rounded text-sm mr-2">D</span>
                Install Particles for Sparkles
              </h3>
              
              <div className="text-gray-400 text-sm mb-4">
                <p className="mb-2">Install required packages:</p>
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto mb-3 border border-white/10 text-xs">
                  <code className="text-gray-300">
                    npm install @tsparticles/react @tsparticles/engine @tsparticles/slim
                  </code>
                </pre>
                <p>Place your files in this structure:</p>
                <pre className="bg-black/50 p-3 rounded-lg overflow-x-auto border border-white/10 text-xs">
                  <code className="text-gray-300">
                    /components/ui/sparkles.tsx<br/>
                    /components/ui/demo.tsx
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSetupInstructions;
