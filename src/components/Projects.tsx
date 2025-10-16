import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      {/* Section title - centered relative to full viewport */}
      <div className="px-8">
        <h2 className="text-5xl md:text-6xl font-mono font-thin text-gray-900 text-center tracking-tight">
          Projects
        </h2>
      </div>

      {/* Refined spacer for minimalist aesthetic */}
      <div className="h-4 md:h-5 lg:h-6"></div>

      {/* Projects list - truly centered layout */}
      <div className="flex flex-col items-center px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-y-2 md:gap-y-2.5 lg:gap-y-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
