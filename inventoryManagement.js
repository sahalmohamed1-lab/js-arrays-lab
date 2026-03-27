// Write your code here
const products = ["Laptop", "Phone", "Headphone", "Monitor" ];

function logFirstProduct() {
  if (products.length > 0) {
    console.log(products[0]);
  } else {
    console.log("No products available.");
  }
}
function addProduct(productName) {
  products.push(productName);
}
addProduct("Tablet");
console.log(products);
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  } else {
    console.log("Invalid product index.");
  }
}
updateProductName(1, "Smartphone");
console.log(products);

function removeLastProduct() {
  if (products.length > 0) {
    products.pop();
  } else {
    console.log("No products to remove.");
  }
}
removeLastProduct();
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
