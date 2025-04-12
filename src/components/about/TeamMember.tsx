
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  title: string;
  company?: string;
}

const TeamMember = ({ name, title, company }: TeamMemberProps) => {
  return (
    <div className="bg-black p-8 rounded-xl w-full max-w-xs text-center transition-transform duration-300 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,200,0.5)]">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 flex items-center justify-center mx-auto">
        <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-lg text-blue-300 mb-1">{title}</p>
      {company && (
        <p className="text-gray-400">{company}</p>
      )}
      
      <div className="flex space-x-4 mt-6 justify-center">
        <button className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-300 hover:bg-blue-700 transition-colors">
          <span className="sr-only">LinkedIn</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-300 hover:bg-blue-700 transition-colors">
          <span className="sr-only">Twitter</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamMember;
