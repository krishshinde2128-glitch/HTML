# ♾️ Infinity Love - Interactive Canvas Experience

A minimal, high-performance interactive animation built using the **HTML5 Canvas API**. This project uses mathematical trigonometric functions to render a glowing, infinite trail that reacts to user input.

## ✨ Features
* **Mathematical Animation:** Utilizes `Math.cos(t)` and `Math.sin(t * 2)` to programmatically draw a perfect infinity symbol path.
* **Interactive UI:** A "Tap to Start" entry point that initializes the rendering engine and reveals a hidden message.
* **Visual FX:** Implements real-time glow effects using `shadowBlur` and `rgba` trails to create a "motion blur" feel.
* **Responsive Design:** Listeners automatically handle window resizing to keep the animation perfectly centered on any screen.
* **Performance Optimized:** Uses `requestAnimationFrame` for smooth 60FPS rendering.

## 🛠️ Built With
* **HTML5 Canvas:** For the 2D rendering context.
* **JavaScript (Vanilla):** For the animation loop and trigonometric logic.
* **CSS3:** For the minimal "Midnight" aesthetic and neon button styling.

[Image of infinity symbol mathematical formula plot]

## 📂 Project Structure
```text
├── index.html    # Contains the UI, CSS styles, and JavaScript animation logic


🚀 How to Run
Open index.html in your browser.

Click the "TAP TO START ✨" button.

Watch as the glowing particle traces an infinite path across the screen.

💡 Technical Insight: The Infinity MathThe "Infinity" path is created using a specific ratio in the parametric equations:
X-axis: $x = \cos(t)$
Y-axis: $y = \sin(2t)$

