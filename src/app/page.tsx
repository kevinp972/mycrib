import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/assets/images/kevin-profile.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <p className="text-xl mb-12">
              Hi, I'm Xueshan (Kevin) Peng — a data scientist graduating in December 2025, seeking full-time roles starting in January 2026.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12 pt-10">
              <div>
                <h2 className="text-2xl font-medium mb-2">Currently</h2>
                <p className="text-lg font-extralight">
                  <a href="https://www.anderson.ucla.edu/degrees/master-of-science-in-business-analytics-msba" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">UCLA MSBA</a> Candidate 
                  <br />
                  DS Intern @ <a href="https://jbrec.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">JBREC</a>
                  <br />
                  DA Intern @ <a href="https://www.anderson.ucla.edu/about/centers/impactanderson" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Center for Impact</a>
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-2">Location</h2>
                <p className="text-lg font-extralight">Los Angeles, CA</p>
              </div>
            </div>

            <Link 
              href="/about"
              className="inline-block bg-[#2D2D2D] text-white px-7 py-3 rounded-full text-xl hover:bg-black transition-colors"
            >
              About me
            </Link>
          </div>

          <div className="relative w-[400px] h-[400px] overflow-hidden">
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
  );
}
