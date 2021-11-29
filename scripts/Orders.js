//imports products, employees, and order object arrays from the database
import { getProducts, getEmployees, getOrders } from "./database.js";

// Get copy of state for use in this module
const products = getProducts();
const employees = getEmployees();
const orders = getOrders();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");

    for (const employee of employees) {
      if (employee.id === parseInt(employeeId)) {
        const employeeOrders = orders.filter(
          // <--- Go to YouTube and search "javascript array filter"
          (order) => {
            if (order.employeeId === employee.id) {
              return true;
            }
          }
        );

        window.alert(
          ` ${employee.name} sold ${employeeOrders.length} products `
        );
      }
    }
  }
});

// Function whose responsibility is to find the product for an order
const findProduct = (order, products) => {
  let orderProduct = null;

  for (const product of products) {
    if (product.id === order.productId) {
      orderProduct = product;
    }
  }

  return orderProduct;
};

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, employees) => {
  let orderEmployee = null;

  for (const employee of employees) {
    if (employee.id === order.employeeId) {
      orderEmployee = employee;
    }
  }

  return orderEmployee;
};

//creates order string to be exported to main.js
export const Orders = () => {
  let html = "";
  html = "<ul>";

  for (const order of orders) {
    const employee = findEmployee(order, employees);
    const product = findProduct(order, products);

    html += `<li>${product.name} was sold by ${employee.name} on ${new Date(
      order.timestamp
    ).toLocaleDateString()}</li>`;
  }

  html += "</ul>";

  return html;
};
