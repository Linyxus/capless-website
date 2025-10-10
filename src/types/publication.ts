export interface Author {
  firstName: string;
  lastName: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year?: number;
  url?: string;
  abstract?: string;
  bibtex?: string;
  doi?: string;
  arxiv?: string;
  slides?: string;
  video?: string;
  links?: Array<{
    label: string;
    url: string;
  }>;
}

// Utility functions for author formatting
export const formatAuthorDisplay = (author: Author): string => {
  return `${author.firstName} ${author.lastName}`;
};

export const formatAuthorBibTeX = (author: Author): string => {
  return `${author.lastName}, ${author.firstName}`;
};

export const formatAuthorsDisplay = (authors: Author[]): string => {
  return authors.map(formatAuthorDisplay).join(", ");
};
