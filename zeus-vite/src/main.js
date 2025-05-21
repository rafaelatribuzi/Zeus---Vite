import { products } from "./mockData";
// 2 Passo puxar  a tabela no js - DOM
const tableContentTag = document.getElementById("tableContent");
console.log(tableContentTag.innerHTML);

for (let i = 0; i < products.length; i++) {
  tableContentTag.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${products[i].product}
            </th>
            <td class="px-6 py-4">
            ${products[i].color}</td>
            <td class="px-6 py-4">${products[i].product}</td>
            <td class="px-6 py-4">$${products[i].price}</td>
          </tr>
`;
}