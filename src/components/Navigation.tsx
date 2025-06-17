'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelector } from './LanguageSelector';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#f8f4ec] px-8 py-30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-[#183c34]">XUESHAN PENG</span>
            <div className="h-20 w-[1px] bg-black"></div>
          <LanguageSelector />
        </div>
        
        <div className="flex items-center space-x-13">
          <Link
            href="/about"
            className={`text-xl ${pathname === '/about' ? 'text-black' : 'text-gray-600'}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-xl ${pathname === '/projects' ? 'text-black' : 'text-gray-600'}`}
          >
            Projects
          </Link>
          <Link
            href="/music"
            className={`text-xl ${pathname === '/music' ? 'text-black' : 'text-gray-600'}`}
          >
            Music
          </Link>
          <Link
            href="/gallery"
            className={`text-xl ${pathname === '/gallery' ? 'text-black' : 'text-gray-600'}`}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
} 