export function loadAboutPage() {
  const aboutText =
    "We are a small family business that make really good food.";

  const contentEl = document.getElementById("content");

  const aboutTextEl = document.createElement("div");
  aboutTextEl.textContent = aboutText;
  contentEl.appendChild(aboutTextEl);
}
