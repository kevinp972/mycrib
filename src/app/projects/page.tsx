import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projectsData';

export default function ProjectsPage() {
  return (
    <main className="w-full px-8 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-6 gap-y-40">
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 