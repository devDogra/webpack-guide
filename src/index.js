import * as home from "./home";
import * as order from "./order";
import * as menu from "./menu";

import "./index.css";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const orderBtn = document.querySelector(".order-btn");

homeBtn.addEventListener("click", (e) => {
  content.innerHTML = "";
  const container = home.appendContent();
  content.appendChild(container);
});

menuBtn.addEventListener("click", (e) => {
  content.innerHTML = "";
  const container = menu.appendContent();
  content.appendChild(container);
});
orderBtn.addEventListener("click", (e) => {
  content.innerHTML = "";
  const container = order.appendContent();
  content.appendChild(container);
});
