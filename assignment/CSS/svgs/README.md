🎨 SVG Mastery & Animation Practice
A comprehensive laboratory of Scalable Vector Graphics (SVG) implementations. This project showcases everything from static geometric primitives to complex animated paths and gradient fills using native HTML5 and SMIL.

📌 Project Overview
The goal of this project is to explore the versatility of the <svg> element. By manipulating attributes directly in the DOM, this collection demonstrates how to create crisp, resolution-independent visuals and interactive animations without the need for heavy external libraries.

✨ Key Features
Geometric Primitives: Implementation of <circle>, <rect>, <line>, and <polygon>.

Path Manipulation: Exploration of the d attribute, including Quadratic Curves (Q) and Cubic Bézier Curves (C) used to create a pulsating heart shape.

SMIL Animations: * Motion: Moving objects across the x-axis (cx).

Color Morphing: Smoothly transitioning fill colors through a value list.

Transformations: Creating "breathing" effects using animateTransform for scaling.

Visibility: Fading text and shapes using opacity loops.

Advanced Visuals: Implementation of <defs> and <linearGradient> for high-fidelity color transitions.

🛠️ Technical Implementation
Declarative Graphics: Using XML-based syntax to define shapes.

SMIL (Synchronized Multimedia Integration Language): Utilizing <animate> and <animateTransform> tags for timeline-based animations.

Bézier Pathing: * Quadratic: M20 70 Q110 10 200 70 (Simple Arc).

Cubic: Complex curves used for organic shapes like the animated heart.

📂 File Structure
Plaintext
├── index.html       # Single file containing all SVG modules and styles
└── README.md        # Documentation and technical summary
🚀 How to Explore
Clone the repository.

Open index.html in any modern browser.

Observe the different animation loops (scaling, fading, moving, and color shifting).