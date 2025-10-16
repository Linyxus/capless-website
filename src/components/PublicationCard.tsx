import React from 'react';
import { Link } from 'react-router-dom';
import type { Author } from '../types/publication';
import { formatAuthorDisplay } from '../types/publication';

interface PublicationCardProps {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year?: number;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  id,
  title,
  authors,
  venue,
  year
}) => {
  const cardContent = (
    <div className="w-full border border-transparent bg-white px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-blue-100 group-hover:[border-right-width:2px] group-hover:[border-bottom-width:2px] group-hover:border-r-blue-200 group-hover:border-b-blue-200 group-hover:cursor-pointer">
      <div className="flex flex-col items-start text-left gap-y-1.5 md:gap-y-2 lg:gap-y-2.5">
        {/* Publication title */}
        <h3 className="text-lg md:text-xl font-mono font-thin text-gray-900 leading-snug tracking-tight underline decoration-gray-200 decoration-1 underline-offset-4 group-hover:text-blue-600 group-hover:decoration-blue-600 group-hover:decoration-2 transition-all duration-150">
          {title}
        </h3>

        {/* Authors */}
        <p className="text-lg md:text-xl font-mono font-light text-gray-500 tracking-normal">
          {authors.map((author, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && ", "}
              {author.link ? (
                <a
                  href={author.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted decoration-gray-300 decoration-1 underline-offset-2 hover:text-gray-900 hover:decoration-blue-600 hover:decoration-solid hover:decoration-[4px] transition-all duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  {formatAuthorDisplay(author)}
                </a>
              ) : (
                formatAuthorDisplay(author)
              )}
            </React.Fragment>
          ))}
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
      <Link to={`/paper/${id}`} className="block">
        {cardContent}
      </Link>
    </article>
  );
};

export default PublicationCard;
