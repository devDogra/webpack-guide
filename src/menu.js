import "./menu.css";

// returns a div containing all the content for home page
export function appendContent() {
  const container = document.createElement("div");

  const itemNames = ["burger", "big burger", "very big burger"];
  itemNames.forEach((name) => {
    const item = document.createElement("h1");
    item.innerText = name;
    container.appendChild(item);
  });

  return container;
}
