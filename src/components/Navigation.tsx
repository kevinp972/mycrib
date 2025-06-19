'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelector } from './LanguageSelector';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#f8f4ec] px-8 py-20 md:py-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div className="flex items-center gap-4 min-[420px]:justify-center md:justify-start">
          <Link href="/" className="text-2xl font-semibold text-[#183c34] hover:text-[#eaec90] transition-colors text-right">
            XUESHAN PENG
          </Link>
          <div className="h-20 w-[1px] bg-black hidden min-[420px]:block"></div>
          <div className="hidden min-[420px]:block">
            <LanguageSelector />
          </div>
        </div>
        
        <div className="grid grid-rows-2 min-[460px]:flex min-[460px]:items-center min-[460px]:justify-center min-[460px]:space-x-13">
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