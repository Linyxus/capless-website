import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Project } from '../types/project';

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-8">
          <p className="text-2xl font-mono font-light text-gray-500">Project not found</p>
          <button
            onClick={() => navigate('/')}
            className="text-lg font-mono font-light text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 md:py-12 lg:py-16">
      {/* Main content - centered container */}
      <div className="flex justify-center px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-3xl space-y-6 md:space-y-8">

          {/* Back button - minimal, top left of centered content */}
          <div>
            <button
              onClick={() => navigate('/')}
              className="group inline-flex items-center gap-2 px-4 py-2 -ml-4 rounded text-base md:text-lg font-mono font-light text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl font-thin">←</span>
              <span>Back</span>
            </button>
          </div>

          {/* Title section */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-base md:text-lg font-mono font-bold text-gray-900 leading-relaxed tracking-tight">
              {project.name}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg font-mono font-light text-gray-500 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Subtle divider */}
          <div className="h-px bg-gray-100"></div>

          {/* Links section (without title) */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 md:gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block border border-gray-200 text-xs md:text-sm font-mono font-light text-gray-900 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-baseline">
                    <div className="w-2"></div>
                    <span className="opacity-30 text-2xl md:text-3xl font-thin leading-none">↗</span>
                    <div className="w-1.5"></div>
                    <span>{link.label}</span>
                    <div className="w-2"></div>
                  </div>
                  <div className="h-2"></div>
                </a>
              ))}
            </div>
          )}

          {/* Abstract section */}
          {project.abstract && (
            <div className="space-y-4 md:space-y-5">
              <h2 className="text-base md:text-lg font-mono font-bold text-gray-900 tracking-tight">
                About
              </h2>
              <p className="text-sm md:text-base font-mono font-light text-gray-700 leading-relaxed">
                {project.abstract}
              </p>
            </div>
          )}

          {/* Bottom spacing */}
          <div className="h-8 md:h-12"></div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
