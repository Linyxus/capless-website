import React from 'react';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url?: string;
}

const publications: Publication[] = [
  {
    title: "Capturing Control Flow in Effect Systems",
    authors: ["Alice Chen", "Bob Smith", "Carol Johnson"],
    venue: "POPL",
    year: 2024,
    url: "#"
  },
  {
    title: "Type-Safe Memory Management Through Capture Checking",
    authors: ["David Lee", "Emma Wilson"],
    venue: "PLDI",
    year: 2023,
    url: "#"
  },
  {
    title: "Gradual Capture Checking for Legacy Codebases",
    authors: ["Frank Martinez", "Grace Taylor", "Henry Brown"],
    venue: "OOPSLA",
    year: 2023,
    url: "#"
  },
  {
    title: "Foundations of Capability-Safe Programming",
    authors: ["Iris Zhang", "Jack Robinson"],
    venue: "ICFP",
    year: 2022,
    url: "#"
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
        <div className="w-full max-w-4xl space-y-[12rem] md:space-y-[14rem] lg:space-y-[16rem]">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Ultra-thin bordered card with lift effect on hover */}
              <div className="w-full border border-gray-200/50 px-24 md:px-40 lg:px-56 py-32 md:py-48 lg:py-64 transition-all duration-300 hover:border-r-[3px] hover:border-b-[3px] hover:border-r-gray-300 hover:border-b-gray-300">
                {/* Publication title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-mono font-thin text-gray-900 mb-20 md:mb-28 lg:mb-32 leading-loose tracking-tight">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:text-blue-600"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                {/* Authors with enhanced spacing */}
                <p className="text-lg md:text-xl font-mono font-light text-gray-500 mb-12 md:mb-16 lg:mb-20 tracking-wide">
                  {pub.authors.join(" · ")}
                </p>

                {/* Venue and year - simpler design */}
                <p className="text-base md:text-lg font-mono font-light text-gray-400 tracking-wider">
                  <span className="uppercase">{pub.venue}</span>
                  <span className="mx-6 text-gray-300">·</span>
                  <span>{pub.year}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
