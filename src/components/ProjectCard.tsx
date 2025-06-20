import Image from 'next/image';
import { type Project } from '@/lib/projectsData';
import React from 'react';

export default function ProjectCard({ title, categories, image, link, backgroundColor }: Project) {
  return (
    <a 
      href={link} 
      className="block relative group overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Background container - doesn't transform */}
      <div 
        className={`w-full aspect-[4/3] ${backgroundColor}`}
      />
      
      {/* Image container - transforms on hover */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain p-8"
          width={800}
          height={600}
          priority
        />
      </div>
      
      {/* Text content */}
      <div className="mt-6 space-y-1">
        <h3 className="text-2xl font-normal">{title}</h3>
        <p className="text-gray-500 text-xl font-light">{categories.join(' · ')}</p>
      </div>
    </a>
  );
} 