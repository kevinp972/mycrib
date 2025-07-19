'use client';

// import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { Send } from 'lucide-react';
import profilePic from '@/assets/images/kevin-profile.jpg';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-background px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start gap-8">
            <div className="max-w-2xl">
              <p className="text-xl mb-12">
                Hi, I&apos;m Xueshan (Kevin) Peng — a data scientist graduating in December 2025, seeking full-time roles starting in January 2026.
              </p>

              <div className="flex flex-col min-[550px]:flex-row gap-8 mb-12 pt-10">
                <div className="flex-1">
                  <h2 className="text-2xl font-medium mb-2">Currently</h2>
                  <p className="text-lg font-extralight">
                    <a href="https://www.anderson.ucla.edu/degrees/master-of-science-in-business-analytics-msba" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">UCLA MSBA</a> Candidate 
                    <br />
                    DS Intern @ <a href="https://jbrec.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">JBREC</a>
                    <br />
                    DS Intern @ <a href="https://www.anderson.ucla.edu/about/centers/impactanderson" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Center for Impact</a>
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-medium mb-2">Location</h2>
                  <p className="text-lg font-extralight">Los Angeles, CA</p>
                </div>
              </div>

              <button 
                onClick={() => handleNavigation('/about')}
                className="inline-block bg-[#2D2D2D] text-white px-7 py-3 rounded-full text-xl hover:bg-black transition-colors"
              >
                About me
              </button>
            </div>

            <div className="relative w-[400px] h-[400px] overflow-hidden hidden md:block">
              <Image
                src={profilePic}
                alt="Kevin Peng"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#183c34] px-8">
        <div className="max-w-6xl mx-auto pt-60 pb-30">
          <h2 className="text-4xl font-semibold mb-6 text-[#eaec90]">Creative Analytics to Solve Your Business Problems</h2>
          <p className="text-xl max-w-5xl mb-8 font-extralight text-[#eaec90]">
            With experience in machine learning, causal inference, optimization, customer analytics, GenAI applications, and beyond, I specialize in developing elegant analytics solutions that tailor to your organization&apos;s goals.
          </p>
          <button 
            onClick={() => handleNavigation('/projects')}
            className="inline-block bg-[#eaec90] text-[#183c34] px-7 py-3 rounded-full text-xl hover:bg-[background] transition-colors"
          >
            My Projects
          </button>
        </div>
      </div>

      {/* Arts Section */}
      <div className="bg-background px-8">
        <div className="max-w-6xl mx-auto pt-60 pb-30">
          <h2 className="text-4xl font-semibold mb-6">The Beauty of the World, So Heavy</h2>
          <p className="text-xl max-w-5xl mb-8 font-extralight">
            To be human is to dwell in constant relation — with others, with oneself, with the world&apos;s vast and murmuring presence. Art becomes our vessel in this endless crossing, and through it, we are granted glimpses of beauty: fleeting, radiant, and sometimes aching — but always true.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => handleNavigation('/music')}
              className="inline-block border border-[#2D2D2D] text-[#2D2D2D]  px-7 py-3 rounded-full text-xl hover:bg-[#2D2D2D] hover:text-white transition-colors"
            >
              Music
            </button>
            <button 
              onClick={() => handleNavigation('/gallery')}
              className="inline-block bg-[#2D2D2D] text-white px-7 py-3 rounded-full text-xl hover:bg-black transition-colors"
            >
              Photos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
