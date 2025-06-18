'use client';

import { Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="w-full bg-[#183c34] mt-auto px-8">
      <div className="max-w-6xl mx-auto pt-25 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
          {/* Left Side: Shall we? */}
          <h2 className="text-[100px] md:text-[150px] [@media(min-width:955px)]:text-[200px] font-bold leading-[0.8] text-[#eaec90] w-full md:max-w-xl">Shall we?</h2>
          {/* Right Side: Contact */}
          <div className="w-full md:max-w-xl">
            <p className="text-xl md:text-2xl mb-8 font-extralight text-[#eaec90]">
              I work with data science teams to develop analytics solutions that deliver actionable insights and drive business growth at scale. <br /> Want to work together?                  
            </p>
            <div className="flex flex-col gap-8 md:gap-12">
              <button 
                onClick={() => window.location.href = 'mailto:kevinpeng2025@gmail.com'}
                className="inline-flex items-center gap-2 bg-[#eaec90] text-[#183c34] px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl hover:bg-[background] transition-colors w-fit"
              >
                <Send className="w-5 h-5 rotate-0" />
                Email me
              </button>
              <div className="flex gap-6 md:gap-8">
                <a href="https://www.linkedin.com/in/kevinp972/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-[#eaec90] hover:text-[background] transition-colors">LinkedIn</a>
                <button 
                  onClick={() => handleNavigation('/projects')}
                  className="text-lg md:text-xl text-[#eaec90] hover:text-[background] transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-lg md:text-xl text-[#eaec90] hover:text-[background] transition-colors"
                >
                  About Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 