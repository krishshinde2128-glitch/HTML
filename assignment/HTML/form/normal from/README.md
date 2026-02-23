# 📝 Simple Registration Form

A clean, dark-themed user registration form built with HTML5 and CSS3. This project demonstrates form validation techniques and responsive centering using CSS Flexbox.

## ✨ Features
* **Form Validation:** Uses HTML5 `required` attributes and custom CSS `:invalid` pseudo-classes to highlight errors in real-time.
* **Modern UI:** High-contrast dark container set against a vibrant `hsl` blue background.
* **Semantic HTML:** Utilizes proper label-input pairing and specialized input types like `email`, `password`, and `tel`.
* **Clean Layout:** Centered perfectly on the screen using Flexbox.

## 🛠️ Built With
* **HTML5:** For the form structure and input types.
* **CSS3:** For styling, including Flexbox for alignment and `invalid` state triggers.

## 📂 Project Structure
```text
├── index.html    # Form structure and internal validation logic
└── form.css      # Layout and aesthetic styling

🚀 How to Use
Clone the repository.

Open index.html in your browser.

Test the validation by entering an incorrect email format—the border will turn red automatically!

💡 Technical Highlight
The project uses a specific CSS selector to improve User Experience (UX):

CSS
input:invalid:not(:placeholder-shown) {
    border: 1px solid red;
}
This ensures that the red "error" border only appears after a user starts typing, rather than showing an error on an empty, fresh form.