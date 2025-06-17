import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F5] px-8">
      <div className="max-w-6xl mx-auto pt-32">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-normal mb-8">
              Software Engineer & Musician
            </h1>
            
            <p className="text-xl mb-12">
              Hi, I'm Kevin Peng. I'm a software engineer specializing in full-stack development and a passionate musician.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl mb-2">Currently</h2>
                <p className="text-lg">Software Engineer</p>
              </div>
              <div>
                <h2 className="text-xl mb-2">Location</h2>
                <p className="text-lg">Singapore</p>
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
            {/* Once you add kevin-profile.jpg to src/assets/images/, uncomment this and remove the placeholder div below */}
            {/* <Image
              src="/assets/images/kevin-profile.jpg"
              alt="Kevin Peng"
              fill
              className="object-cover"
              priority
            /> */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              Please add kevin-profile.jpg to src/assets/images/
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
