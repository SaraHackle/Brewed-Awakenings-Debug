//retrieves products object arrays from the database.js
import { getProducts } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("product")) {
    const [, id] = itemClicked.id.split("--");

    for (const product of products) {
      if (product.id === parseInt(id)) {
        window.alert(`${product.name} costs $${product.price.toFixed(2)}`);
      }
    }
  }
});

const products = getProducts();

//exports function that creates html for products list to main.js
export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};
