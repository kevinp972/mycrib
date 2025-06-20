import Image from 'next/image';
import React from 'react';
import { type Project } from '@/lib/projectsData';

export default function ProjectCard({ title, categories, image, link, backgroundColor }: Project) {
  return (
    <a 
      href={link} 
      className="block relative group"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Card container with fixed aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {/* Background container - doesn't transform */}
        <div 
          className={`absolute inset-0 ${backgroundColor}`}
        />
        
        {/* Image container - transforms on hover */}
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Text content */}
      <div className="mt-6 space-y-1">
        <h3 className="text-xl font-normal">{title}</h3>
        <p className="text-gray-500 text-lg font-light">{categories.join(' · ')}</p>
      </div>
    </a>
  );
} 