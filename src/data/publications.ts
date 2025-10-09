import type { Publication } from '../types/publication';

export const publications: Publication[] = [
  {
    id: "whats-in-the-box-2025",
    title: "What's in the Box: Ergonomic and Expressive Capture Tracking over Generic Data Structures",
    authors: ["Yichen Xu", "Oliver Bračevac", "Cao Nguyen Pham", "Martin Odersky"],
    venue: "OOPSLA",
    year: 2025,
    abstract: "Capture tracking is a type-based approach to effect safety that prevents capability leakage through the use of capture sets. However, existing capture tracking systems face challenges in handling generic data structures, leading to either overly conservative tracking or unsound behavior. This paper introduces a novel approach to capture tracking that maintains soundness while providing ergonomic and expressive handling of generic data structures. We present a formal system with subtyping, polymorphism, and box modality, prove its soundness, and demonstrate its practical applicability through implementation in Scala 3.",
    bibtex: `@inproceedings{xu2025whats,
  title={What's in the Box: Ergonomic and Expressive Capture Tracking over Generic Data Structures},
  author={Xu, Yichen and Bra{\v{c}}evac, Oliver and Pham, Cao Nguyen and Odersky, Martin},
  booktitle={Proceedings of the ACM on Programming Languages (OOPSLA)},
  year={2025},
  publisher={ACM}
}`
  },
  {
    id: "degrees-of-separation-2024",
    title: "Degrees of Separation: A Flexible Type System for Safe Concurrency",
    authors: ["Yichen Xu", "Aleksander Boruch-Gruszecki", "Martin Odersky"],
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
    authors: ["Aleksander Boruch-Gruszecki", "Martin Odersky", "Edward Lee", "Ondřej Lhoták", "Jonathan Brachthäuser"],
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
