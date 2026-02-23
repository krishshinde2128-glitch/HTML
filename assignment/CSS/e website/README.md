# 🏆 ProSport Gear - Athletes' E-Commerce UI

A modern, high-conversion landing page for a sports equipment retailer. This project focuses on clean product presentation, consistent branding, and an optimized user experience for athletic shoppers.

## ✨ Features
* **Modern Aesthetic:** A sleek "Inter" font-driven design with a bold red (`#e63946`) and dark charcoal palette.
* **Smart Theming:** Utilizes **CSS Variables** for easy maintenance and global design consistency.
* **Interactive Product Cards:** Features smooth hover animations, including vertical lifting and enhanced drop shadows.
* **Responsive Flex Grid:** A dynamic layout that handles different screen sizes by wrapping product cards naturally.
* **Visual Hierarchy:** Clear price points and high-contrast "Add to Cart" buttons to drive user actions.

## 🛠️ Built With
* **HTML5:** Semantic structure for better SEO and accessibility.
* **CSS3:** Advanced styling using:
    * **Flexbox:** For perfect center-alignment and spacing of the product grid.
    * **Transitions:** For smooth `:hover` states on buttons and cards.
    * **Gradients:** Subtle hero section backgrounds for depth.

## 📂 Project Structure
```text
├── index.html    # Core structure and product catalog
└── e.css         # Theme variables and layout logic

🚀 How to Run
Clone the repository to your local directory.

Open index.html in your browser.

Hover over the cards to experience the smooth interactive elevation effect.

Technical Highlight: Maintainable CSS
By using a :root selector, this project allows for instant site-wide color changes:

CSS
:root {
    --primary: #e63946; /* Change this once to update all buttons and highlights */
    --dark: #1a1a1a;
}