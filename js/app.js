/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Seonghoon Kim
 *      Student ID: 143080216
 *      Date:       2022-08-09
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

categories.forEach((category) => {
  const button = document.createElement("button");
  button.innerText = category.name;

  button.addEventListener("click", () => {
    const selectedCategory = category;
    document.getElementById("selected-category").innerText = selectedCategory.name;
    const container = document.createElement("div");
    container.classList.add("container");
    products
      .filter((product) => {
        return product.categories.indexOf(selectedCategory.id) >= 0 && !product.discontinued;
      })
      .forEach((product) => {
        const card = createProductCard(product);
        container.append(card);
      });
    document.getElementById("category-products").replaceWith(container);
    container.setAttribute("id", "category-products");
  });
  document.getElementById("menu").append(button);
});

const container = document.createElement("div");
container.classList.add("container");
products.forEach((product) => {
  const card = createProductCard(product);
  container.append(card);
});
document.getElementById("category-products").replaceWith(container);
container.setAttribute("id", "category-products");

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card"); // class ="card"

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  // productImage.classList.add("card-image");
  card.appendChild(productImage);

  // ... rest of your card building code here
  const title = document.createElement("h3");
  title.innerText = product.title;
  card.appendChild(title);

  const description = document.createElement("p");
  description.innerText = product.description;
  card.appendChild(description);

  const price = document.createElement("p");
  price.classList.add("price");
  price.innerText = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price);
  card.appendChild(price);

  // Return the card’s <div> element to the caller
  return card;
}

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
