'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelector } from './LanguageSelector';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-[#f8f4ec] z-50 px-8 py-30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-2xl">Kevin Peng</span>
          <span className="text-gray-300">|</span>
          <LanguageSelector />
        </div>
        
        <div className="flex items-center space-x-15">
          <Link
            href="/about"
            className={`text-lg ${pathname === '/about' ? 'text-black' : 'text-gray-600'}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-lg ${pathname === '/projects' ? 'text-black' : 'text-gray-600'}`}
          >
            Projects
          </Link>
          <Link
            href="/music"
            className={`text-lg ${pathname === '/music' ? 'text-black' : 'text-gray-600'}`}
          >
            Music
          </Link>
          <Link
            href="/gallery"
            className={`text-lg ${pathname === '/gallery' ? 'text-black' : 'text-gray-600'}`}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
} 