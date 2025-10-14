export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  tags?: string[];
  abstract?: string;
  links?: Array<{
    label: string;
    url: string;
  }>;
  contributors?: string[];
  status?: string;
}
