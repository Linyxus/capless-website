import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "system-capybara",
    name: "System Capybara",
    description: "Capture Tracking for Separation and Freshness",
    abstract: "System Capybara extends capture checking with novel mechanisms for tracking object separation and freshness properties. The system demonstrates how capture sets can be leveraged to enforce both temporal and spatial separation properties.",
    links: [
      { label: "Scala 3 Documentation", url: "https://nightly.scala-lang.org/docs/reference/experimental/capture-checking/separation-checking.html" },
      { label: "Cavia (Demo Compiler)", url: "https://github.com/linyxus/cavia" }
    ]
  }
];
