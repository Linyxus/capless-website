import React from 'react';
import PublicationCard from './PublicationCard';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year?: number;
  url?: string;
}

const publications: Publication[] = [
  {
    title: "What's in the Box: Ergonomic and Expressive Capture Tracking over Generic Data Structures",
    authors: ["Yichen Xu", "Oliver Bračevac", "Cao Nguyen Pham", "Martin Odersky"],
    venue: "OOPSLA",
    year: 2025
  },
  {
    title: "Degrees of Separation: A Flexible Type System for Safe Concurrency",
    authors: ["Yichen Xu", "Aleksander Boruch-Gruszecki", "Martin Odersky"],
    venue: "OOPSLA",
    year: 2024
  },
  {
    title: "Capturing Types",
    authors: ["Aleksander Boruch-Gruszecki", "Martin Odersky", "Edward Lee", "Ondřej Lhoták", "Jonathan Brachthäuser"],
    venue: "TOPLAS"
  }
];

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
          {publications.map((pub, index) => (
            <PublicationCard
              key={index}
              title={pub.title}
              authors={pub.authors}
              venue={pub.venue}
              year={pub.year}
              url={pub.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
