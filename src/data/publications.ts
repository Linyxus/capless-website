import type { Publication } from '../types/publication';

export const publications: Publication[] = [
  {
    id: "whats-in-the-box-2025",
    title: "What's in the Box: Ergonomic and Expressive Capture Tracking over Generic Data Structures",
    authors: [
      { firstName: "Yichen", lastName: "Xu", link: "https://www.yichenxu.me" },
      { firstName: "Oliver", lastName: "Bračevac", link: "https://bracevac.org" },
      { firstName: "Cao Nguyen", lastName: "Pham", link: "https://orcid.org/0009-0005-2543-3309" },
      { firstName: "Martin", lastName: "Odersky", link: "https://people.epfl.ch/martin.odersky?lang=en" }
    ],
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
    authors: [
      { firstName: "Yichen", lastName: "Xu", link: "https://www.yichenxu.me" },
      { firstName: "Aleksander", lastName: "Boruch-Gruszecki", link: "https://abgru.me" },
      { firstName: "Martin", lastName: "Odersky", link: "https://people.epfl.ch/martin.odersky?lang=en" }
    ],
    venue: "OOPSLA",
    year: 2024,
    abstract: "Concurrent programming remains challenging due to the difficulty of ensuring thread safety while maintaining expressiveness. This paper presents a flexible type system that uses capture tracking to enforce safe concurrency through controlled aliasing. Our system introduces the concept of 'degrees of separation' between references, enabling fine-grained control over data sharing across thread boundaries. We formalize the type system, prove its soundness, and demonstrate its practicality through implementation in Scala 3, showing how it can express various concurrency patterns safely.",
    bibtex: `@inproceedings{xu2024degrees,
  title={Degrees of Separation: A Flexible Type System for Safe Concurrency},
  author={Xu, Yichen and Boruch-Gruszecki, Aleksander and Odersky, Martin},
  booktitle={Proceedings of the ACM on Programming Languages (OOPSLA)},
  year={2024},
  publisher={ACM}
}`
  },
  {
    id: "capturing-types",
    title: "Capturing Types",
    authors: [
      { firstName: "Aleksander", lastName: "Boruch-Gruszecki", link: "https://abgru.me" },
      { firstName: "Martin", lastName: "Odersky", link: "https://people.epfl.ch/martin.odersky?lang=en" },
      { firstName: "Edward", lastName: "Lee", link: "#" },
      { firstName: "Ondřej", lastName: "Lhoták", link: "#" },
      { firstName: "Jonathan", lastName: "Brachthäuser", link: "#" }
    ],
    venue: "TOPLAS",
    abstract: "Type systems traditionally struggle to track effects and capabilities in a principled way. This paper introduces capture tracking, a novel type-based approach to effect safety that uses capture sets to track which capabilities are captured by functions and data structures. We present a core calculus with capture tracking, prove its soundness and expressiveness, and show how it subsumes and improves upon previous approaches to effect typing. Our system enables precise reasoning about capability flow while remaining practical and ergonomic for real-world programming.",
    bibtex: `@article{boruchgruszecki2024capturing,
  title={Capturing Types},
  author={Boruch-Gruszecki, Aleksander and Odersky, Martin and Lee, Edward and Lhot{\\'a}k, Ond{\\v{r}}ej and Brachth{\\"a}user, Jonathan},
  journal={ACM Transactions on Programming Languages and Systems (TOPLAS)},
  publisher={ACM}
}`
  }
];
