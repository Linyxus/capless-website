export interface Publication {
  id: string;
  title: string;
  authors: string[];
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
