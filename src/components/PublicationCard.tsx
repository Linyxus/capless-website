import React from 'react';

interface PublicationCardProps {
  title: string;
  authors: string[];
  venue: string;
  year?: number;
  url?: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  authors,
  venue,
  year,
  url
}) => {
  const cardContent = (
    <div className="w-full border border-transparent bg-white pl-0 pr-10 py-12 md:pl-0 md:pr-14 md:py-16 lg:pl-0 lg:pr-20 lg:py-20 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-blue-100 group-hover:[border-right-width:2px] group-hover:[border-bottom-width:2px] group-hover:border-r-blue-200 group-hover:border-b-blue-200 group-hover:cursor-pointer">
      <div className="flex flex-col items-start text-left gap-y-2 md:gap-y-2.5 lg:gap-y-3">
        {/* Publication title */}
        <h3 className="text-lg md:text-xl font-mono font-thin text-gray-900 leading-snug tracking-tight group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Authors */}
        <p className="text-lg md:text-xl font-mono font-light text-gray-500 tracking-normal">
          {authors.join(", ")}
        </p>

        {/* Venue and year */}
        <p className="text-base md:text-lg font-mono font-light text-gray-400 tracking-normal">
          <span className="uppercase">{venue}</span>
          {year && <span> {year}</span>}
        </p>
      </div>
    </div>
  );

  return (
    <article className="group relative w-full">
      {/* Frameless by default, materializes on hover with lift effect */}
      {url ? (
        <a
          href={url}
          className="block"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </article>
  );
};

export default PublicationCard;
