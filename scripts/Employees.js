//retrieves employee object arrays from the database.js
import { getEmployees } from "./database.js";

const employees = getEmployees();

//exports function that creates html for employee list to main.js
export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
