export function loadMenuPage() {
  const menuData = [
    {
      dishName: "soup",
      description: "really nice 🎃 soup",
      price: "7.50 EUR",
    },
    {
      dishName: "bread",
      description: "really nice bread 🍞, served with olive oil 🫒",
      price: "4.50 EUR",
    },
  ];

  const contentEl = document.getElementById("content");

  const menuEl = document.createElement("div");
  menuEl.classList.add("menu-container");

  menuData.forEach((dish) => {
    const dishEl = document.createElement("div");
    dishEl.classList.add("dish");

    Object.values(dish).forEach((value) => {
      const propertyDiv = document.createElement("div");
      propertyDiv.textContent = value;
      dishEl.appendChild(propertyDiv);
    });

    menuEl.appendChild(dishEl);
  });

  contentEl.appendChild(menuEl);
}
