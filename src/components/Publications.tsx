import React from 'react';
import PublicationCard from './PublicationCard';
import { publications } from '../data/publications';

const Publications: React.FC = () => {
  return (
    <section className="py-48 md:py-64 lg:py-80 bg-white">
      {/* Section title - centered relative to full viewport */}
      <div className="px-8">
        <h2 className="text-5xl md:text-6xl font-mono font-thin text-gray-900 text-center tracking-tight">
          Publications
        </h2>
      </div>

      {/* Refined spacer for minimalist aesthetic */}
      <div className="h-8 md:h-10 lg:h-12"></div>

      {/* Publications list - truly centered layout */}
      <div className="flex flex-col items-center px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6">
          {publications.map((pub) => (
            <PublicationCard
              key={pub.id}
              id={pub.id}
              title={pub.title}
              authors={pub.authors}
              venue={pub.venue}
              year={pub.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
