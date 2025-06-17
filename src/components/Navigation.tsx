'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelector } from './LanguageSelector';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-[#f8f4ec] z-50 px-8 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-lg">Kevin Peng</span>
          <span className="text-gray-300">|</span>
          <LanguageSelector />
        </div>
        
        <div className="flex items-center space-x-8">
          <Link
            href="/about"
            className={`text-base ${pathname === '/about' ? 'text-black' : 'text-gray-600'}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-base ${pathname === '/projects' ? 'text-black' : 'text-gray-600'}`}
          >
            Projects
          </Link>
          <Link
            href="/music"
            className={`text-base ${pathname === '/music' ? 'text-black' : 'text-gray-600'}`}
          >
            Music
          </Link>
          <Link
            href="/gallery"
            className={`text-base ${pathname === '/gallery' ? 'text-black' : 'text-gray-600'}`}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
} 