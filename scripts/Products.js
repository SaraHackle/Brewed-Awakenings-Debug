//retrieves products object arrays from the database.js
import { getProducts } from "./database.js";

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
