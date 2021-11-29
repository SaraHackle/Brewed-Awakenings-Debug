//imports created html lists for employees, orders and products from each page
import { Employees } from "./Employees.js";
import { Orders } from "./Orders.js";
import { Products } from "./Products.js";

//uses "container" id to add html to DOM
const mainContainer = document.querySelector("#container");

//framework for html in main section of page, takes imported html lists and inserts into page
const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`;

mainContainer.innerHTML = applicationHTML;
