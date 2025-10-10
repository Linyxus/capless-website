import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Publication } from '../types/publication';
import { formatAuthorDisplay } from '../types/publication';

interface PaperDetailProps {
  publications: Publication[];
}

const PaperDetail: React.FC<PaperDetailProps> = ({ publications }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bibtexCopied, setBibtexCopied] = useState(false);

  const paper = publications.find(p => p.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-8">
          <p className="text-2xl font-mono font-light text-gray-500">Paper not found</p>
          <button
            onClick={() => navigate('/')}
            className="text-lg font-mono font-light text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  const copyBibtex = () => {
    if (paper.bibtex) {
      navigator.clipboard.writeText(paper.bibtex);
      setBibtexCopied(true);
      setTimeout(() => setBibtexCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 md:py-24 lg:py-32">
      {/* Main content - centered container */}
      <div className="flex justify-center px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-3xl space-y-12 md:space-y-16">

          {/* Back button - minimal, top left of centered content */}
          <div>
            <button
              onClick={() => navigate('/')}
              className="group inline-flex items-center text-base md:text-lg font-mono font-light text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="text-2xl font-thin mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Back</span>
            </button>
          </div>

          {/* Title section */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-base md:text-lg font-mono font-bold text-gray-900 leading-relaxed tracking-tight">
              {paper.title}
            </h1>

            {/* Authors */}
            <p className="text-base md:text-lg font-mono font-light text-gray-500 leading-relaxed">
              {paper.authors.map((author, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && ", "}
                  {author.link ? (
                    <a
                      href={author.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted decoration-gray-300 decoration-1 underline-offset-2 hover:text-gray-900 hover:decoration-blue-600 hover:decoration-solid hover:decoration-[4px] transition-all duration-150"
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
            <p className="text-base md:text-lg font-mono font-light text-gray-400">
              <span className="uppercase tracking-wide">{paper.venue}</span>
              {paper.year && <span> {paper.year}</span>}
            </p>
          </div>

          {/* Subtle divider */}
          <div className="h-px bg-gray-100"></div>

          {/* Spacer above links */}
          <div className="h-2 md:h-2.5"></div>

          {/* Links section (without title) */}
          {paper.links && paper.links.length > 0 && (
            <div className="flex flex-wrap gap-3 md:gap-4">
              {paper.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block border border-gray-200 text-xs md:text-sm font-mono font-light text-gray-900 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-baseline pt-3">
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
          {paper.abstract && (
            <div className="space-y-8 md:space-y-10">
              <h2 className="text-base md:text-lg font-mono font-bold text-gray-900 tracking-tight">
                Abstract
              </h2>
              <p className="text-sm md:text-base font-mono font-light text-gray-700 leading-relaxed">
                {paper.abstract}
              </p>
            </div>
          )}

          {/* Links section */}
          {(paper.doi || paper.arxiv || paper.slides || paper.video || paper.url) && (
            <div className="space-y-8 md:space-y-10">
              <h2 className="text-base md:text-lg font-mono font-bold text-gray-900 tracking-tight">
                Links
              </h2>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {paper.doi && (
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline text-base md:text-lg font-mono font-light text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <span className="mr-1.5 opacity-40">↗</span>
                    <span className="border-b border-gray-300 group-hover:border-blue-600 transition-colors duration-300">DOI</span>
                  </a>
                )}
                {paper.arxiv && (
                  <a
                    href={paper.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline text-base md:text-lg font-mono font-light text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <span className="mr-1.5 opacity-40">↗</span>
                    <span className="border-b border-gray-300 group-hover:border-blue-600 transition-colors duration-300">arXiv</span>
                  </a>
                )}
                {paper.url && (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline text-base md:text-lg font-mono font-light text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <span className="mr-1.5 opacity-40">↗</span>
                    <span className="border-b border-gray-300 group-hover:border-blue-600 transition-colors duration-300">Paper</span>
                  </a>
                )}
                {paper.slides && (
                  <a
                    href={paper.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline text-base md:text-lg font-mono font-light text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <span className="mr-1.5 opacity-40">↗</span>
                    <span className="border-b border-gray-300 group-hover:border-blue-600 transition-colors duration-300">Slides</span>
                  </a>
                )}
                {paper.video && (
                  <a
                    href={paper.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline text-base md:text-lg font-mono font-light text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <span className="mr-1.5 opacity-40">↗</span>
                    <span className="border-b border-gray-300 group-hover:border-blue-600 transition-colors duration-300">Video</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* BibTeX section */}
          {paper.bibtex && (
            <div className="space-y-8 md:space-y-10">
              <div className="flex items-baseline justify-between">
                <h2 className="text-base md:text-lg font-mono font-bold text-gray-900 tracking-tight">
                  BibTeX
                </h2>
                <button
                  onClick={copyBibtex}
                  className="text-sm md:text-base font-mono font-light text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  {bibtexCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-gray-50 px-6 py-6 rounded-sm overflow-x-auto">
                <code className="text-sm md:text-base font-mono font-light text-gray-800 leading-relaxed">
                  {paper.bibtex}
                </code>
              </pre>
            </div>
          )}

          {/* Bottom spacing */}
          <div className="h-16 md:h-24"></div>

        </div>
      </div>
    </div>
  );
};

export default PaperDetail;
