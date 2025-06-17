import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/assets/images/kevin-profile.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4ec] px-8">
      <div className="max-w-6xl mx-auto pt-32">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-normal mb-8">
              Analytics & Data Science
            </h1>
            
            <p className="text-xl mb-12">
              Hi, I'm Xueshan (Kevin) Peng — a data scientist graduating in December 2025, seeking full-time roles starting in January 2026.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl mb-2">Currently</h2>
                <p className="text-lg">UCLA MSBA Candidate <br /> DS@JBREC</p>
              </div>
              <div>
                <h2 className="text-xl mb-2">Location</h2>
                <p className="text-lg">Los Angeles, CA</p>
              </div>
            </div>

            <Link 
              href="/about"
              className="inline-block bg-[#2D2D2D] text-white px-6 py-3 rounded-full text-lg hover:bg-black transition-colors"
            >
              About me
            </Link>
          </div>

          <div className="relative w-[400px] h-[500px] rounded-[40px] overflow-hidden">
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
