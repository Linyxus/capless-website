import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, description }) => {
  const cardContent = (
    <div className="w-full border border-transparent bg-white px-3 py-3 md:px-4 md:py-4 lg:px-5 lg:py-5 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-blue-100 group-hover:[border-right-width:2px] group-hover:[border-bottom-width:2px] group-hover:border-r-blue-200 group-hover:border-b-blue-200 group-hover:cursor-pointer">
      <div className="flex flex-col items-start text-left gap-y-1 md:gap-y-1.5 lg:gap-y-2">
        {/* Project name */}
        <h3 className="text-lg md:text-xl font-mono font-thin text-gray-900 leading-snug tracking-tight underline decoration-gray-200 decoration-1 underline-offset-4 group-hover:text-blue-600 group-hover:decoration-blue-600 group-hover:decoration-2 transition-all duration-150">
          {name}
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl font-mono font-light text-gray-500 tracking-normal">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <article className="group relative w-full">
      <Link to={`/project/${id}`} className="block">
        {cardContent}
      </Link>
    </article>
  );
};

export default ProjectCard;
