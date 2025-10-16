import type { Publication } from '../types/publication';
import { getAuthors } from './authors';

export const publications: Publication[] = [
  {
    id: "whats-in-the-box-2025",
    title: "What's in the Box: Ergonomic and Expressive Capture Tracking over Generic Data Structures",
    authors: getAuthors([
      "Yichen Xu",
      "Oliver Bračevac",
      "Cao Nguyen Pham",
      "Martin Odersky"
    ]),
    venue: "OOPSLA",
    year: 2025,
    links: [
      { label: "Mechanised Proof", url: "https://github.com/linyxus/capless-lean" },
      { label: "Extended Version", url: "https://arxiv.org/abs/2509.07609" },
      { label: "Proceeding", url: "https://dl.acm.org/doi/10.1145/3763112" }
    ],
    abstract: "Capturing types in Scala unify static effect and resource tracking with object capabilities, enabling lightweight effect polymorphism with minimal notational overhead. However, their expressiveness has been insufficient for tracking capabilities embedded in generic data structures, preventing them from scaling to the standard collections library -- an essential prerequisite for broader adoption. This limitation stems from the inability to name capabilities within the system's notion of box types. This paper develops System Capless, a new foundation for capturing types that provides the theoretical basis for reach capabilities (rcaps), a novel mechanism for naming \"what's in the box.\" The calculus refines the universal capability notion into a new scheme with existential and universal capture set quantification. Intuitively, rcaps witness existentially quantified capture sets inside the boxes of generic types in a way that does not require exposing existential capture types in the surface language. We have fully mechanized the formal metatheory of System Capless in Lean, including proofs of type soundness and scope safety. System Capless supports the same lightweight notation of capturing types plus rcaps, as certified by a type-preserving translation, and also enables fully optional explicit capture-set quantification to increase expressiveness. Finally, we present a full reimplementation of capture checking in Scala 3 based on System Capless and migrate the entire Scala collections library and an asynchronous programming library to evaluate its practicality and ergonomics. Our results demonstrate that reach capabilities enable the adoption of capture checking in production code with minimal changes and minimal-to-zero notational overhead in a vast majority of cases.",
    bibtex: `@article{xu2025capless,
  author = {Xu, Yichen and Bra\\v{c}evac, Oliver and Pham, Cao Nguyen and Odersky, Martin},
  title = {What's in the Box: Ergonomic and Expressive Capture Tracking over Generic Data Structures},
  year = {2025},
  issue_date = {October 2025},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {9},
  number = {OOPSLA2},
  url = {https://doi.org/10.1145/3763112},
  doi = {10.1145/3763112},
  journal = {Proc. ACM Program. Lang.},
  month = oct,
  articleno = {334},
  numpages = {28},
  keywords = {Capture Checking, Effect Polymorphism, Generic Data Structures, Scala}
}`
  },
  {
    id: "degrees-of-separation-2024",
    title: "Degrees of Separation: A Flexible Type System for Safe Concurrency",
    authors: getAuthors([
      "Yichen Xu",
      "Aleksander Boruch-Gruszecki",
      "Martin Odersky"
    ]),
    venue: "OOPSLA",
    year: 2024,
    links: [
      { label: "ACM Digital Library", url: "https://dl.acm.org/doi/10.1145/3649853" },
      { label: "PDF", url: "https://infoscience.epfl.ch/record/310307/files/paper.pdf" }
    ],
    abstract: "Data races have long been a notorious problem in concurrent programming. They are hard to detect, and lead to non-deterministic behaviours. There has been a lot of interest in type systems that statically guarantee data race freedom. Significant progress has been made in this area, and these type systems are increasingly usable and practical. However, their adoption in mainstream programming languages is still limited, which is largely attributed to their strict alias prevention principles that obstruct the usage of existing programming patterns. This is a deterrent to the migration of existing code bases. To tackle this problem, we propose Capture Separation Calculus (System CSC), a calculus that models fork-join parallelism and statically prevents data races while being compatible with established programming patterns. It follows a control-as-you-need philosophy: by default, aliases are allowed, but they are tracked in the type system.",
    bibtex: `@article{xu2024degrees,
  author = {Xu, Yichen and Boruch-Gruszecki, Aleksander and Odersky, Martin},
  title = {Degrees of Separation: A Flexible Type System for Safe Concurrency},
  year = {2024},
  issue_date = {April 2024},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {8},
  number = {OOPSLA1},
  url = {https://doi.org/10.1145/3649853},
  doi = {10.1145/3649853},
  journal = {Proc. ACM Program. Lang.},
  month = apr,
  articleno = {291},
  numpages = {27}
}`
  },
  {
    id: "gradient-2024",
    title: "Gradient: Gradual Compartmentalization via Object Capabilities Tracked in Types",
    authors: getAuthors([
      "Aleksander Boruch-Gruszecki",
      "Adrien Ghosn",
      "Mathias Payer",
      "Clément Pit-Claudel"
    ]),
    venue: "OOPSLA",
    year: 2024,
    links: [
      { label: "ACM Digital Library", url: "https://dl.acm.org/doi/10.1145/3689751" }
    ],
    abstract: "Modern software needs fine-grained compartmentalization, i.e., intra-process isolation. A particularly important reason for it are supply-chain attacks, whose danger is aggravated by modern applications depending on hundreds or even thousands of libraries. Object capabilities (ocaps) are a particularly salient approach to compartmentalization, but they require the entire program to assume a lack of ambient authority. Most of existing code was written under no such assumption; effectively, existing applications need to undergo a rewrite-the-world migration to reap the advantages of ocap. We propose gradual compartmentalization, an approach which allows gradually migrating an application to object capabilities, component-by-component in any order, while being able to enforce security policies on any component. The approach relies on runtime authority enforcement and tracking the authority of objects in the type system. We present Gradient, a proof-of-concept gradual compartmentalization extension to Scala which uses Enclosures and Capture Tracking as its key components.",
    bibtex: `@article{boruchgruszecki2024gradient,
  author = {Boruch-Gruszecki, Aleksander and Ghosn, Adrien and Payer, Mathias and Pit-Claudel, Cl{\\'e}ment},
  title = {Gradient: Gradual Compartmentalization via Object Capabilities Tracked in Types},
  year = {2024},
  issue_date = {October 2024},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {8},
  number = {OOPSLA2},
  url = {https://doi.org/10.1145/3689751},
  doi = {10.1145/3689751},
  journal = {Proc. ACM Program. Lang.},
  month = oct,
  articleno = {318},
  numpages = {31}
}`
  },
  {
    id: "mechanized-box-calculus-2023",
    title: "A Mechanized Theory of the Box Calculus",
    authors: getAuthors([
      "Joseph Fourment",
      "Yichen Xu"
    ]),
    venue: "IWACO",
    year: 2023,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2309.05362" },
      { label: "Coq Mechanization", url: "https://github.com/felko/ccsubbox" }
    ],
    abstract: "The capture calculus is an extension of System F<: that tracks free variables of terms in their type, allowing one to represent capabilities while limiting their scope. While previous calculi had mechanized soundness proofs -- notably System CF<: -- the latest version, namely the box calculus (System CC<:box), only had a paper proof. We present here our work on mechanizing the theory of the box calculus in Coq, and the challenges encountered along the way. While doing so, we motivate the current design of capture calculus, in particular the concept of boxes, from both user and metatheoretical standpoints. Our mechanization is complete and available on GitHub.",
    bibtex: `@inproceedings{fourment2023mechanized,
  author = {Fourment, Joseph and Xu, Yichen},
  title = {A Mechanized Theory of the Box Calculus},
  year = {2023},
  booktitle = {Proceedings of the 9th International Workshop on Aliasing, Confinement and Ownership in Object-Oriented Programming (IWACO '23)},
  url = {https://arxiv.org/abs/2309.05362},
  doi = {10.48550/arXiv.2309.05362}
}`
  },
  {
    id: "capturing-types",
    title: "Capturing Types",
    authors: getAuthors([
      "Aleksander Boruch-Gruszecki",
      "Martin Odersky",
      "Edward Lee",
      "Ondřej Lhoták",
      "Jonathan Brachthäuser"
    ]),
    venue: "TOPLAS",
    year: 2023,
    links: [
      { label: "ACM Digital Library", url: "https://dl.acm.org/doi/10.1145/3618003" },
      { label: "PDF", url: "https://se.cs.uni-tuebingen.de/publications/boruch2023capturing.pdf" }
    ],
    abstract: "Type systems usually characterize the shape of values but not their free variables. However, many desirable safety properties could be guaranteed if one knew the free variables captured by values. This paper describes CC<:◻, a calculus where captured variables are succinctly represented in types, and shows it can be used to safely implement effects and effect polymorphism via scoped capabilities. The decision to track captured variables guides key aspects of the calculus, and CC<:◻ admits simple and intuitive types for common data structures and their typical usage patterns.",
    bibtex: `@article{boruchgruszecki2023capturing,
  author = {Boruch-Gruszecki, Aleksander and Odersky, Martin and Lee, Edward and Lhot{\\'a}k, Ond{\\v{r}}ej and Brachth{\\"a}user, Jonathan Immanuel},
  title = {Capturing Types},
  year = {2023},
  issue_date = {December 2023},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {45},
  number = {4},
  url = {https://doi.org/10.1145/3618003},
  doi = {10.1145/3618003},
  journal = {ACM Trans. Program. Lang. Syst.},
  month = nov,
  articleno = {21},
  numpages = {52}
}`
  }
];
