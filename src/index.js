import "./styles.css";
import { loadHomePage } from "./loadHomePage.js";
import { loadMenuPage } from "./loadMenuPage.js";
import { loadAboutPage } from "./loadAboutPage.js";

(function addTabSwitchingLogic() {
  const contentEl = document.getElementById("content");
  const navBtns = Array.from(document.querySelectorAll("nav > button"));

  function addListenersToBtns() {
    navBtns.forEach((button) => {
      button.addEventListener("click", () => {
        contentEl.replaceChildren();

        let f;
        switch (button.id) {
          case "home":
            f = loadHomePage;
            break;
          case "menu":
            f = loadMenuPage;
            break;
          case "about":
            f = loadAboutPage;
            break;
        }

        f();
      });
    });
  }

  addListenersToBtns();
})();
