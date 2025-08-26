import Image from 'next/image';
import React from 'react';
import { type MusicPerformance } from '@/lib/musicData';


export default function MusicCard({ title, composer, image, link, isFeature = false }: MusicPerformance) {
  return (
    <a
      href={link}
      className={`block relative group ${isFeature ? 'min-[600px]:col-span-2' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Card container with fixed aspect ratio */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {/* Image container */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            className="object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-105"
            fill
            sizes={isFeature ? "(max-width: 600px) 100vw, 100vw" : "(max-width: 600px) 100vw, 50vw"}
            priority
          />
        </div>

        {/* Top mask */}
        <div className="absolute top-0 left-0 right-0 h-0 bg-background transition-all duration-300 ease-out group-hover:h-[2%] group-active:h-[2%]" />

        {/* Bottom mask */}
        <div className="absolute bottom-0 left-0 right-0 h-0 bg-background transition-all duration-300 ease-out group-hover:h-[2%] group-active:h-[2%]" />
      </div>

      {/* Text content */}
      <div className="mt-6 space-y-1">
        <h3 className="text-xl font-normal">{title}</h3>
        <p className="text-gray-500 text-lg font-light">{composer}</p>
      </div>
    </a>
  );
} 