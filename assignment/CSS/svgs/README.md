# 🎨 SVG Animation & Graphics Lab

A comprehensive practice suite exploring **Scalable Vector Graphics (SVG)**. This project demonstrates the power of XML-based graphics, ranging from static geometric shapes to complex SMIL animations and Bézier curves.

## ✨ Key Technical Features
* **Basic Primitives:** Implementation of `circle`, `rect`, `line`, and `polygon` for structural graphics.
* **Complex Paths:** Advanced use of the `path` element, including Quadratic Bézier curves (`Q`) and Cubic Bézier curves (`C`) to create organic shapes like hearts.
* **SMIL Animations:**
    * **Motion:** Animating the `cx` attribute for horizontal translation.
    * **Transformations:** Using `animateTransform` for rhythmic scaling (pulsing effects).
    * **Color Interpolation:** Seamless shifting between multiple fill colors using `values`.
    * **Opacity:** Creating "blink" and "fade" effects for text and icons.
* **Gradients & Definitions:** Utilizing the `<defs>` tag and `linearGradient` for high-quality color transitions.

[Image of SVG coordinate system and basic shapes diagram]

## 🛠️ Built With
* **HTML5:** For the document structure.
* **SVG API:** Internal vector logic and declarative animation.
* **CSS3:** For layout positioning and aesthetic container styling.

## 📂 Project Highlights
```text
├── Static Shapes   # Rectangles, Teal Triangle, and Lines
├── Curves          # Red Quadratic path and a Cubic Bézier Heart
├── Animations      # Moving red ball, color-changing square, and fading text
└── Gradients       # Linear gradient transitions from Red to Yellow


🚀 How to Use
Clone the repository.

Open index.html in any modern browser (Chrome, Firefox, or Edge).

Observe the different animation loops—SVG animations are hardware-accelerated and remain crisp at any zoom level!