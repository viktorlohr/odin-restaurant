export function loadHomePage() {
  const contentEl = document.getElementById("content");

  const headlineEl = document.createElement("h1");
  headlineEl.textContent = "Best Restaurant";

  const introTextEl = document.createElement("div");
  introTextEl.textContent =
    "This is the ✨best✨ restaurant in the entire city. The others are not good.👎🏽";

  contentEl.append(headlineEl, introTextEl);
}
