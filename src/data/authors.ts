import type { Author } from '../types/publication';

// Centralized author information to avoid duplication
export const AUTHORS: Record<string, Author> = {
  "Yichen Xu": {
    firstName: "Yichen",
    lastName: "Xu",
    link: "https://www.yichenxu.me"
  },
  "Martin Odersky": {
    firstName: "Martin",
    lastName: "Odersky",
    link: "https://people.epfl.ch/martin.odersky?lang=en"
  },
  "Aleksander Boruch-Gruszecki": {
    firstName: "Aleksander",
    lastName: "Boruch-Gruszecki",
    link: "https://abgru.me"
  },
  "Oliver Bračevac": {
    firstName: "Oliver",
    lastName: "Bračevac",
    link: "https://bracevac.org"
  },
  "Cao Nguyen Pham": {
    firstName: "Cao Nguyen",
    lastName: "Pham",
    link: "https://orcid.org/0009-0005-2543-3309"
  },
  "Edward Lee": {
    firstName: "Edward",
    lastName: "Lee",
    link: "https://plg.uwaterloo.ca/~e45lee/"
  },
  "Ondřej Lhoták": {
    firstName: "Ondřej",
    lastName: "Lhoták",
    link: "https://plg.uwaterloo.ca/~olhotak/"
  },
  "Jonathan Brachthäuser": {
    firstName: "Jonathan",
    lastName: "Brachthäuser",
    link: "https://b-studios.de/"
  },
  "Joseph Fourment": {
    firstName: "Joseph",
    lastName: "Fourment",
    link: "https://github.com/felko"
  }
};

// Helper function to get author by name
export const getAuthor = (name: string): Author => {
  const author = AUTHORS[name];
  if (!author) {
    throw new Error(`Author not found: ${name}`);
  }
  return author;
};

// Helper function to get multiple authors
export const getAuthors = (names: string[]): Author[] => {
  return names.map(getAuthor);
};
